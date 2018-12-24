package org.poem.party;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.common.IDService;
import org.poem.jooq.tables.TParty;
import org.poem.jooq.tables.records.TPartyRecord;
import org.poem.jooq.tables.records.TUserRecord;
import org.poem.user.UserDao;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

/**
 * 新闻
 *
 * @author poem
 */
@Service
public class TPartyService {

    @Autowired
    private PartyDao partyDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private IDService<Long> idService;


    /**
     * @param tPartQueryVO
     * @param pageSize
     * @param pageNumber
     * @return
     */
    public PageVO<TPartyVO> getAll(TPartQueryVO tPartQueryVO, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tPartQueryVO.getName())) {
            conditions.add(TParty.T_PARTY.TITLE.like("%" + tPartQueryVO.getName() + "%"));
        }
        if (StringUtils.isNotEmpty(tPartQueryVO.getStatus())) {
            conditions.add(TParty.T_PARTY.STATUS.eq(Integer.valueOf(tPartQueryVO.getStatus())));
        }
        if (StringUtils.isNotEmpty(tPartQueryVO.getStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestamp(tPartQueryVO.getStartTime());
            conditions.add(TParty.T_PARTY.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tPartQueryVO.getEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestamp(tPartQueryVO.getEndTime());
            conditions.add(TParty.T_PARTY.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> fields = Lists.newArrayList();
        fields.add(TParty.T_PARTY.FLAG.desc());
        fields.add(TParty.T_PARTY.CREATE_TIME.desc());
        PageVO<TPartyRecord> tPartyRecordPageVO = this.partyDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), fields);
        PageVO<TPartyVO> partyVOPageVO = new PageVO<>();
        partyVOPageVO.setTotalCount(tPartyRecordPageVO.getTotalCount());
        List<TPartyVO> tPartyVOS = Lists.newArrayList();
        partyVOPageVO.setPageData(tPartyVOS);
        return partyVOPageVO;
    }


    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public TPartyVO getById(Long id) {
        TPartyRecord s = this.partyDao.findById(id);
        TPartyVO tPartyVO = new TPartyVO();
        if (s != null) {
            tPartyVO.setId(String.valueOf(s.getId()));
            tPartyVO.setTitle(s.getTitle());
            tPartyVO.setAbstracts("");
            tPartyVO.setAttachment(String.valueOf(s.getAttachment()));
            tPartyVO.setContent(s.getContent());
            tPartyVO.setReadCount(String.valueOf(s.getReadCount()));
            tPartyVO.setStatus(String.valueOf(s.getStatus()));
            TUserRecord tUserRecord = this.userDao.findById(s.getUpdateUser());
            tPartyVO.setUpdateUser(tUserRecord.getName());
            tPartyVO.setUpdateTime(DateUtils.format(s.getUpdateTime(), "yyyy-MM-dd hh:mm:ss"));
        }
        return tPartyVO;
    }

    /**
     * 下线
     *
     * @param userId
     * @param id
     * @return
     */
    public ResultVO<String> line(Long userId, Long id) {
        TPartyRecord s = this.partyDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setStatus(0);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.partyDao.update(s);
        return new ResultVO<>(0, "可以了");
    }

    /**
     * 发布
     *
     * @param userId
     * @param id
     * @return
     */
    public ResultVO<String> push(Long userId, Long id) {
        TPartyRecord s = this.partyDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setStatus(1);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.partyDao.update(s);
        return new ResultVO<>(0, "可以了");
    }

    /**
     * 置顶
     *
     * @param userId
     * @param id
     * @return
     */
    public ResultVO<String> top(Long userId, Long id) {
        TPartyRecord s = this.partyDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setFlag(true);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.partyDao.update(s);
        return new ResultVO<>(0, "可以了");
    }


    /**
     * 跟新或者是添加
     *
     * @param tNewsVO
     * @param userId
     * @return
     */
    public ResultVO<String> addAndUpdate(TPartyVO tNewsVO, Long userId) {
        TPartyRecord tNewsRecord = null;
        Boolean save = false;
        if (StringUtils.isNotEmpty(tNewsVO.getId())) {
            tNewsRecord = this.partyDao.findById(Long.valueOf(tNewsVO.getId()));
        }
        if (tNewsRecord == null) {
            tNewsRecord = new TPartyRecord();
            tNewsRecord.setId(idService.getId());
            tNewsRecord.setCreateTime(new Timestamp(System.currentTimeMillis()));
            tNewsRecord.setCreateUser(userId);
            save = true;
        }
        tNewsRecord.setUpdateUser(userId);
        tNewsRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        tNewsRecord.setAttachment(Long.valueOf(tNewsVO.getAttachment()));
        tNewsRecord.setTitle(tNewsVO.getTitle());
        tNewsRecord.setFlag(false);
        tNewsRecord.setContent(tNewsVO.getContent());
        tNewsRecord.setStatus(Integer.valueOf(tNewsVO.getStatus()));
        if (save) {
            this.partyDao.insert(tNewsRecord);
        } else {
            this.partyDao.update(tNewsRecord);
        }
        return new ResultVO<>(0, "可以了");
    }
}
