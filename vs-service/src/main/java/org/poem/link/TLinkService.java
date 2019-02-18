package org.poem.link;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.common.IDService;
import org.poem.jooq.tables.TLink;
import org.poem.jooq.tables.records.TLinkRecord;
import org.poem.jooq.tables.records.TUserRecord;
import org.poem.user.UserDao;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

/**
 * 外部链接
 *
 * @author poem
 */
@Service
public class TLinkService {

    private static final Logger logger = LoggerFactory.getLogger(TLinkService.class);

    @Autowired
    private TLinkDao tLinkDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private IDService<Long> idService;

    /**
     * @param tLinkQueryVO
     * @param pageSize
     * @param pageSize
     * @return
     */
    public PageVO<TLinkVO> getLinked(TLinkQueryVO tLinkQueryVO, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tLinkQueryVO.getName())) {
            conditions.add(TLink.T_LINK.NAME.like("%" + tLinkQueryVO.getName() + "%"));
        }
        if (StringUtils.isNotEmpty(tLinkQueryVO.getStatus())) {
            conditions.add(TLink.T_LINK.STATUS.eq(Integer.valueOf(tLinkQueryVO.getStatus())));
        }
        if (StringUtils.isNotEmpty(tLinkQueryVO.getStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tLinkQueryVO.getStartTime() + " 00:00:00");
            conditions.add(TLink.T_LINK.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tLinkQueryVO.getEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tLinkQueryVO.getEndTime() + " 23:59:59");
            conditions.add(TLink.T_LINK.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> sortFields = Lists.newArrayList();
        sortFields.add(TLink.T_LINK.FLAG.desc());
        sortFields.add(TLink.T_LINK.UPDATE_TIME.desc());
        PageVO<TLinkRecord> recordPageVO =
                this.tLinkDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), sortFields);
        PageVO<TLinkVO> pageVO = new PageVO<>();
        pageVO.setTotalCount(recordPageVO.getTotalCount());
        List<TLinkVO> linkVOS = Lists.newArrayList();
        for (TLinkRecord pageDatum : recordPageVO.getPageData()) {
            TLinkVO tLinkVO = new TLinkVO();
            tLinkVO.setId(String.valueOf(pageDatum.getId()));
            tLinkVO.setName(pageDatum.getName());
            tLinkVO.setLink(pageDatum.getLink());
            tLinkVO.setStatus(pageDatum.getStatus() == 0 ? "未发布" : "已发布");
            tLinkVO.setUpdateTime(DateUtils.format(pageDatum.getUpdateTime(), "yyyy-MM-dd hh:mm:ss"));
            TUserRecord record = this.userDao.findById(pageDatum.getUpdateUser());
            tLinkVO.setUpdateUser(record == null ? "" : record.getName());
            linkVOS.add(tLinkVO);
        }
        pageVO.setPageData(linkVOS);
        return pageVO;
    }

    /**
     * 添加连接
     *
     * @param tLinkVO
     * @param userId
     * @return
     */
    public ResultVO<String> addLink(TLinkVO tLinkVO, Long userId) {
        TLinkRecord record = new TLinkRecord();
        record.setId(idService.getId());
        record.setName(tLinkVO.getName());
        record.setLink(tLinkVO.getLink());
        record.setStatus(StringUtils.isEmpty(tLinkVO.getStatus()) ? 0 : Integer.valueOf(tLinkVO.getStatus()));
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        record.setCreateTime(new Timestamp(System.currentTimeMillis()));
        record.setCreateUser(userId);
        record.setFlag(true);
        this.tLinkDao.insert(record);
        return new ResultVO<>("操作完成");
    }

    /**
     * 跟新
     *
     * @param tLinkVO
     * @param userId
     * @return
     */
    public ResultVO<String> update(TLinkVO tLinkVO, Long userId) {
        TLinkRecord record = this.tLinkDao.findById(Long.valueOf(tLinkVO.getId()));
        if (record == null) {
            return new ResultVO<>("么有记录");
        }
        record.setName(tLinkVO.getName());
        record.setLink(tLinkVO.getLink());
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tLinkDao.update(record);
        return new ResultVO<>("操作完成");
    }


    /**
     * 删除
     *
     * @param id
     * @return
     */
    public ResultVO<String> delele(List<Long> id) {
        this.tLinkDao.deleteById(id);
        return new ResultVO<>("操作完成");

    }

    /**
     * 置顶
     *
     * @param ids
     * @param userid
     * @return
     */
    public ResultVO<String> top(List<Long> ids, Long userid) {
        List<TLinkRecord> records = this.tLinkDao.findByIdList(ids);
        for (TLinkRecord record : records) {
            record.setFlag(true);
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateUser(userid);
            this.tLinkDao.update(record);
        }
        return new ResultVO<>("可以完成");
    }

    /**
     * 下线
     *
     * @param ids
     * @param userid
     * @return
     */
    public ResultVO<String> line(List<Long> ids, Long userid) {
        List<TLinkRecord> records = this.tLinkDao.findByIdList(ids);
        for (TLinkRecord record : records) {
            record.setFlag(false);
            record.setStatus(0);
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateUser(userid);
            this.tLinkDao.update(record);
        }
        return new ResultVO<>("可以完成");
    }

    /**
     * 发布
     *
     * @param ids
     * @param userId
     * @return
     */
    public ResultVO<String> push(List<Long> ids, Long userId) {
        List<TLinkRecord> records = this.tLinkDao.findByIdList(ids);
        for (TLinkRecord record : records) {
            record.setStatus(1);
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateUser(userId);
            this.tLinkDao.update(record);
        }
        return new ResultVO<>("可以完成");
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public ResultVO<TLinkVO> getById(Long id) {
        TLinkRecord pageDatum = this.tLinkDao.findById(id);
        if (pageDatum == null) {
            return new ResultVO<>(0, null, "没有记录");
        }
        TLinkVO tLinkVO = new TLinkVO();
        tLinkVO.setId(String.valueOf(pageDatum.getId()));
        tLinkVO.setName(pageDatum.getName());
        tLinkVO.setLink(pageDatum.getLink());
        tLinkVO.setStatus(pageDatum.getStatus() == 0 ? "未发布" : "已发布");
        tLinkVO.setUpdateTime(DateUtils.format(pageDatum.getUpdateTime(), "yyyy-MM-dd hh:mm:ss"));
        TUserRecord record = this.userDao.findById(pageDatum.getUpdateUser());
        tLinkVO.setUpdateUser(record == null ?  "" : record.getName());
        return new ResultVO<>(tLinkVO);
    }

}
