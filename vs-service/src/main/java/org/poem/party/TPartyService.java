package org.poem.party;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.common.IDService;
import org.poem.file.FileService;
import org.poem.file.TFileVO;
import org.poem.jooq.tables.TNewsAttachment;
import org.poem.jooq.tables.TParty;
import org.poem.jooq.tables.TPartyAttachment;
import org.poem.jooq.tables.records.TNewsAttachmentRecord;
import org.poem.jooq.tables.records.TPartyAttachmentRecord;
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
import java.util.stream.Collectors;

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

    @Autowired
    private PartyAttachmentDao tPartyAttachmentDao;

    @Autowired
    private FileService fileService;


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
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tPartQueryVO.getStartTime() + " 00:00:p00");
            conditions.add(TParty.T_PARTY.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tPartQueryVO.getEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tPartQueryVO.getEndTime() + " 23:59:59");
            conditions.add(TParty.T_PARTY.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> fields = Lists.newArrayList();
        fields.add(TParty.T_PARTY.FLAG.desc());
        fields.add(TParty.T_PARTY.CREATE_TIME.desc());
        PageVO<TPartyRecord> tPartyRecordPageVO = this.partyDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), fields);
        PageVO<TPartyVO> partyVOPageVO = new PageVO<>();
        List<TPartyVO> tPartyVOS = tPartyRecordPageVO.getPageData().stream().map(s->{
            TPartyVO tPartyVO  = new TPartyVO();
            tPartyVO.setId(String.valueOf(s.getId()));
            tPartyVO.setTitle(s.getTitle());
            tPartyVO.setAbstracts("");
            tPartyVO.setAttachment(String.valueOf(s.getAttachment()));
            tPartyVO.setContent(s.getContent());
            tPartyVO.setReadCount(String.valueOf(s.getReadCount()));
            tPartyVO.setStatus(String.valueOf(s.getStatus()));
            TUserRecord tUserRecord = this.userDao.findById(s.getUpdateUser());
            tPartyVO.setUpdateUser(tUserRecord == null ? "" : tUserRecord.getName());
            tPartyVO.setUpdateTime(DateUtils.format(s.getUpdateTime(), "yyyy-MM-dd hh:mm:ss"));
            tPartyVO.setAttachments(getFiles(s.getId()));
            return tPartyVO;
        }).collect(Collectors.toList());
        partyVOPageVO.setPageData(tPartyVOS);
        partyVOPageVO.setTotalCount(tPartyRecordPageVO.getTotalCount());
        return partyVOPageVO;
    }

    /**
     * 获取文件附件
     *
     * @param newID
     * @return
     */
    private List<TFileVO> getFiles(Long newID) {
        List<TPartyAttachmentRecord> records = this.tPartyAttachmentDao.findByCondition(TPartyAttachment.T_PARTY_ATTACHMENT.PARTY_ID.eq(newID));
        List<Long> ids = records.stream().map(s -> s.getId()).collect(Collectors.toList());
        return fileService.getByIds(ids);
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public TPartyVO getById(Long id, boolean add) {
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
            tPartyVO.setUpdateUser(tUserRecord == null ? "" : tUserRecord.getName());
            tPartyVO.setUpdateTime(DateUtils.format(s.getUpdateTime(), "yyyy-MM-dd hh:mm:ss"));
            tPartyVO.setAttachments(getFiles(s.getId()));
            if (add) {
                s.setReadCount(s.getReadCount() == null ? 1 : s.getReadCount() + 1L);
                this.partyDao.update(s);
            }
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
        tNewsRecord.setAttachment(tNewsVO.getAttachment());
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

    /**
     *
     * @param ids
     * @return
     */
    public ResultVO<String> delete(List<Long> ids){
        this.partyDao.deleteById(ids);
        this.tPartyAttachmentDao.deleteByConditions(TPartyAttachment.T_PARTY_ATTACHMENT.PARTY_ID.in(ids));
        return new ResultVO<>("删除成功");
    }
}
