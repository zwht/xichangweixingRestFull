package org.poem.notice;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.common.IDService;
import org.poem.file.FileService;
import org.poem.file.TFileVO;
import org.poem.jooq.tables.*;
import org.poem.jooq.tables.records.TNoticeAttachmentRecord;
import org.poem.jooq.tables.records.TNoticeRecord;
import org.poem.jooq.tables.records.TUserRecord;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 通知公告
 *
 * @author poem
 */
@Service
public class TNoticeService {

    @Autowired
    private TNoticeDao tNoticeDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private UserDao userDao;

    @Autowired
    private FileService fileService;

    @Autowired
    private TNoticeAttachmentDao tNoticeAttachmentDao;

    /**
     * 翻译
     *
     * @param t
     * @return
     */
    private static TNoticeVO getTSupplierVO(TNoticeRecord t, Map<Long, String> tSupplierType) {
        TNoticeVO tSupplierVO = new TNoticeVO();
        tSupplierVO.setId(String.valueOf(t.getId()));
        tSupplierVO.setTitle(t.getTitle());
        tSupplierVO.setTop(String.valueOf(t.getTop()));
        tSupplierVO.setContent(t.getContent());
        tSupplierVO.setReadCount(String.valueOf(t.getReadCount()));
        tSupplierVO.setUpdateTime(DateUtils.format(t.getUpdateTime()));
        tSupplierVO.setStatus(String.valueOf(t.getStatus()));
        tSupplierVO.setCreateTime(DateUtils.format(t.getCreateTime()));
        tSupplierVO.setUpdateUser(tSupplierType.get(t.getUpdateUser()));
        tSupplierVO.setCreateUser(tSupplierType.get(t.getCreateUser()));
        return tSupplierVO;
    }


    /**
     * 查询人员
     *
     * @return
     */
    public Map<Long, String> type() {
        List<TUserRecord> userRecords = this.userDao.findByCondition(TUser.T_USER.ID.isNotNull());
        Map<Long, String> map = Maps.newHashMap();
        for (TUserRecord userRecord : userRecords) {
            map.put(userRecord.getId(), userRecord.getName());
        }
        return map;
    }

    /**
     * 获取全部
     *
     * @return
     */
    public List<TNoticeVO> getAll() {
        List<TNoticeRecord> records = this.tNoticeDao.findByCondition(TNotice.T_NOTICE.ID.isNotNull());
        Map<Long, String> m = type();
        return records.stream().map(r -> getTSupplierVO(r, m)).collect(Collectors.toList());
    }

    /**
     * 获取文件附件
     *
     * @param newID
     * @return
     */
    private List<TFileVO> getFiles(Long newID) {
        List<TNoticeAttachmentRecord> records = this.tNoticeAttachmentDao.findByCondition(TNoticeAttachment.T_NOTICE_ATTACHMENT.QUALITY_NOTICE_ID.eq(newID));
        List<Long> ids = records.stream().map(s -> s.getId()).collect(Collectors.toList());
        return fileService.getByIds(ids);
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public ResultVO<TNoticeVO> getById(Long id, boolean add) {
        TNoticeRecord tSupplierRecord = this.tNoticeDao.findById(id);
        if (tSupplierRecord == null) {
            return new ResultVO<>(-1, null, "没记录");
        }
        TNoticeVO vo = getTSupplierVO(tSupplierRecord, type());
        vo.setAttachments(getFiles(id));
        if (add){
            tSupplierRecord.setReadCount(tSupplierRecord.getReadCount() == null ? 0 : tSupplierRecord.getReadCount() + 1);
            this.tNoticeDao.update(tSupplierRecord);
        }
        return new ResultVO<>(vo);
    }


    /**
     * 保存
     *
     * @param tFileVOS
     */
    public void saveFile(List<TFileVO> tFileVOS, Long id, Long userId) {
        this.tNoticeAttachmentDao.deleteByConditions(TNoticeAttachment.T_NOTICE_ATTACHMENT.QUALITY_NOTICE_ID.eq(id));
        List<TNoticeAttachmentRecord> records = Lists.newArrayList();
        if (CollectionUtils.isEmpty(tFileVOS)) {
            return;
        }
        for (TFileVO tFileVO : tFileVOS) {
            TNoticeAttachmentRecord record = new TNoticeAttachmentRecord();
            record.setId(idService.getId());
            record.setFileId(tFileVO.getId());
            record.setQualityNoticeId(id);
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setUpdateUser(userId);
            records.add(record);
        }
        this.tNoticeAttachmentDao.insert(records);
    }

    /**
     * 添加
     *
     * @param tEquipmentVO
     * @param userId
     * @return
     */
    public ResultVO<String> saveOrUpdate(TNoticeVO tEquipmentVO, Long userId) {
        TNoticeRecord record = null;
        boolean save = false;
        if (StringUtils.isNotEmpty(tEquipmentVO.getId())) {
            record = this.tNoticeDao.findById(Long.valueOf(tEquipmentVO.getId()));
        }
        if (record == null) {
            record = new TNoticeRecord();
            record.setId(idService.getId());
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setStatus(0);
            record.setFlag(true);
            record.setReadCount(0L);
            save = true;
        }
        record.setStatus(StringUtils.isEmpty(tEquipmentVO.getStatus()) ? 0 : Integer.valueOf(tEquipmentVO.getStatus()));
        record.setTitle(tEquipmentVO.getTitle());
        record.setTop(false);
        record.setContent(tEquipmentVO.getContent());
        record.setUpdateUser(userId);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        if (save) {
            this.tNoticeDao.insert(record);
        } else {
            this.tNoticeDao.update(record);
        }
        saveFile(tEquipmentVO.getAttachments(), record.getId(), userId);
        return new ResultVO<>("完成");
    }

    /**
     * 删除
     *
     * @param ids
     * @return
     */
    public ResultVO<String> deleteByIDs(List<Long> ids) {
        this.tNoticeDao.deleteById(ids);
        this.tNoticeAttachmentDao.deleteByConditions(TNoticeAttachment.T_NOTICE_ATTACHMENT.QUALITY_NOTICE_ID.in(ids));
        return new ResultVO<>("完成");
    }

    /**
     * ·
     * 查询
     *
     * @param noticeQueryVO
     * @param pageSize
     * @param pageNumber
     * @return
     */
    public PageVO<TNoticeVO> getAllByQuery(TNoticeQueryVO noticeQueryVO, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(noticeQueryVO.getTitle())) {
            conditions.add(TNotice.T_NOTICE.TITLE.like("%" + noticeQueryVO.getTitle() + "%"));
        }
        if (StringUtils.isNotEmpty(noticeQueryVO.getStatus())) {
            conditions.add(TNotice.T_NOTICE.STATUS.eq(Integer.valueOf(noticeQueryVO.getStatus())));
        }
        if (StringUtils.isNotEmpty(noticeQueryVO.getStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(noticeQueryVO.getStartTime() + " 00:00:00");
            conditions.add(TNotice.T_NOTICE.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(noticeQueryVO.getEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(noticeQueryVO.getEndTime() + " 23:59:59");
            conditions.add(TNotice.T_NOTICE.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> list = Arrays.asList(TNotice.T_NOTICE.CREATE_TIME.asc(), TNotice.T_NOTICE.STATUS.desc());
        PageVO<TNoticeRecord> tSupplierVOPageVO = this.tNoticeDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), list);
        Map<Long, String> type = type();
        return new PageVO<>(tSupplierVOPageVO.getTotalCount(),
                tSupplierVOPageVO.getPageData().stream().map(r -> {
                    return getTSupplierVO(r, type);
                }).collect(Collectors.toList())
        );

    }

    /**
     * 置顶
     *
     * @param id
     * @param userId
     * @return
     */
    public ResultVO<String> top(Long id, Long userId) {
        TNoticeRecord record = this.tNoticeDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setFlag(true);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tNoticeDao.update(record);
        return new ResultVO<>("操作完成");
    }

    /**
     * 发布
     *
     * @param id
     * @param userId
     * @return
     */
    public ResultVO<String> push(Long id, Long userId) {
        TNoticeRecord record = this.tNoticeDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setStatus(1);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tNoticeDao.update(record);
        return new ResultVO<>("操作完成");
    }

    /**
     * 下线
     *
     * @param id
     * @param userId
     * @return
     */
    public ResultVO<String> line(Long id, Long userId) {
        TNoticeRecord record = this.tNoticeDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setStatus(0);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tNoticeDao.update(record);
        return new ResultVO<>("操作完成");
    }
}
