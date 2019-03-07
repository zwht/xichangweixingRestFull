package org.poem.qualityNotice;

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
import org.poem.jooq.tables.records.*;
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
 * 质量公告
 *
 * @author poem
 */
@Service
public class TQualityNoticeService {

    @Autowired
    private TQualityNoticeDao tQualityNoticeDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private UserDao userDao;

    @Autowired
    private FileService fileService;

    @Autowired
    private TQualityNoticeAttachmentDao tQualityNoticeAttachmentDao;

    /**
     * 翻译
     *
     * @param t
     * @return
     */
    private static TQualityNoticeVO getTSupplierVO(TQualityNoticeRecord t, Map<Long, String> tSupplierType) {
        TQualityNoticeVO tSupplierVO = new TQualityNoticeVO();
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
    public List<TQualityNoticeVO> getAll() {
        List<TQualityNoticeRecord> records = this.tQualityNoticeDao.findByCondition(TQualityNotice.T_QUALITY_NOTICE.ID.isNotNull());
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
        List<TQualityNoticeAttachmentRecord> records = this.tQualityNoticeAttachmentDao.findByCondition(TQualityNoticeAttachment.T_QUALITY_NOTICE_ATTACHMENT.QUALITY_NOTICE_ID.eq(newID));
        List<Long> ids = records.stream().map(s -> s.getId()).collect(Collectors.toList());
        return fileService.getByIds(ids);
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public ResultVO<TQualityNoticeVO> getById(Long id) {
        TQualityNoticeRecord tSupplierRecord = this.tQualityNoticeDao.findById(id);
        if (tSupplierRecord == null) {
            return new ResultVO<>(-1, null, "没记录");
        }
        TQualityNoticeVO vo = getTSupplierVO(tSupplierRecord, type());
        vo.setAttachments(getFiles(id));
        return new ResultVO<>(vo);
    }


    /**
     * 保存
     *
     * @param tFileVOS
     */
    public void saveFile(List<TFileVO> tFileVOS, Long id, Long userId) {
        this.tQualityNoticeAttachmentDao.deleteByConditions(TQualityNoticeAttachment.T_QUALITY_NOTICE_ATTACHMENT.QUALITY_NOTICE_ID.eq(id));
        List<TQualityNoticeAttachmentRecord> records = Lists.newArrayList();
        if (CollectionUtils.isEmpty(tFileVOS)){
            return;
        }
        for (TFileVO tFileVO : tFileVOS) {
            TQualityNoticeAttachmentRecord record = new TQualityNoticeAttachmentRecord();
            record.setId(idService.getId());
            record.setFileId(tFileVO.getId());
            record.setQualityNoticeId(id);
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setUpdateUser(userId);
            records.add(record);
        }
        this.tQualityNoticeAttachmentDao.insert(records);
    }

    /**
     * 添加
     *
     * @param tEquipmentVO
     * @param userId
     * @return
     */
    public ResultVO<String> saveOrUpdate(TQualityNoticeVO tEquipmentVO, Long userId) {
        TQualityNoticeRecord record = null;
        boolean save = false;
        if (StringUtils.isNotEmpty(tEquipmentVO.getId())) {
            record = this.tQualityNoticeDao.findById(Long.valueOf(tEquipmentVO.getId()));
        }
        if (record == null) {
            record = new TQualityNoticeRecord();
            record.setId(idService.getId());
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateUser(userId);
            record.setStatus(0);
            record.setFlag(true);
            record.setReadCount(0L);
            save = true;
        }
        record.setStatus(StringUtils.isEmpty(tEquipmentVO.getStatus()) ? 0 : Integer.valueOf(tEquipmentVO.getStatus()) );
        record.setTitle(tEquipmentVO.getTitle());
        record.setTop(false);
        record.setContent(tEquipmentVO.getContent());
        record.setUpdateUser(userId);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        if (save) {
            this.tQualityNoticeDao.insert(record);
        } else {
            this.tQualityNoticeDao.update(record);
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
        this.tQualityNoticeDao.deleteById(ids);
        this.tQualityNoticeAttachmentDao.deleteByConditions(TQualityNoticeAttachment.T_QUALITY_NOTICE_ATTACHMENT.QUALITY_NOTICE_ID.in(ids));
        return new ResultVO<>("完成");
    }

    /**
     * 查询
     *
     * @param tQualityNoticeQueryVO
     * @param pageSize
     * @param pageNumber
     * @return
     */
    public PageVO<TQualityNoticeVO> getAllByQuery(TQualityNoticeQueryVO tQualityNoticeQueryVO, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getTitle())) {
            conditions.add(TQualityNotice.T_QUALITY_NOTICE.TITLE.like("%" + tQualityNoticeQueryVO.getTitle() + "%"));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getStatus())) {
            conditions.add(TQualityNotice.T_QUALITY_NOTICE.STATUS.eq(Integer.valueOf(tQualityNoticeQueryVO.getStatus())));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tQualityNoticeQueryVO.getStartTime() + " 00:00:00");
            conditions.add(TQualityNotice.T_QUALITY_NOTICE.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tQualityNoticeQueryVO.getEndTime() + " 23:59:59");
            conditions.add(TQualityNotice.T_QUALITY_NOTICE.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> list = Arrays.asList(TQualityNotice.T_QUALITY_NOTICE.FLAG.desc(),TQualityNotice.T_QUALITY_NOTICE.UPDATE_TIME.desc(), TQualityNotice.T_QUALITY_NOTICE.STATUS.desc());
        PageVO<TQualityNoticeRecord> tSupplierVOPageVO = this.tQualityNoticeDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), list);
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
        TQualityNoticeRecord record = this.tQualityNoticeDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setFlag(true);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tQualityNoticeDao.update(record);
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
        TQualityNoticeRecord record = this.tQualityNoticeDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setStatus(1);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tQualityNoticeDao.update(record);
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
        TQualityNoticeRecord record = this.tQualityNoticeDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setStatus(0);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tQualityNoticeDao.update(record);
        return new ResultVO<>("操作完成");
    }
}
