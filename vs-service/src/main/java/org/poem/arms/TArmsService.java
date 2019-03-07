package org.poem.arms;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.common.IDService;
import org.poem.file.FileService;
import org.poem.file.TFileVO;
import org.poem.jooq.tables.*;
import org.poem.jooq.tables.records.*;
import org.poem.user.UserDao;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 强军管理
 *
 * @author poem
 */
@Service
public class TArmsService {

    @Autowired
    private TArmsDao tArmsDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private UserDao userDao;

    @Autowired
    private TArmsAttachmentDao tArmsAttachmentDao;

    @Autowired
    private FileService fileService;

    /**
     * 保存
     *
     * @param tFileVOS
     */
    public void saveFile(List<TFileVO> tFileVOS, Long id, Long userId) {
        this.tArmsAttachmentDao.deleteByConditions(TArmsAttachment.T_ARMS_ATTACHMENT.ARMS_ID.eq(id));
        List<TArmsAttachmentRecord> records = Lists.newArrayList();
        if (CollectionUtils.isEmpty(tFileVOS)){
            return;
        }
        for (TFileVO tFileVO : tFileVOS) {
            TArmsAttachmentRecord record = new TArmsAttachmentRecord();
            record.setId(idService.getId());
            record.setFileId(tFileVO.getId());
            record.setArmsId(id);
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setUpdateUser(userId);
            records.add(record);
        }
        this.tArmsAttachmentDao.insert(records);
    }


    /**
     * 添加或者删除
     *
     * @param tArmsVO
     * @param userId
     * @return
     */
    public ResultVO<String> saveOrUpdate(TArmsVO tArmsVO, Long userId) {
        TArmsRecord tArmsRecord = null;
        boolean save = false;
        if (StringUtils.isNotEmpty(tArmsVO.getId())) {
            tArmsRecord = this.tArmsDao.findById(Long.valueOf(tArmsVO.getId()));
        }
        if (tArmsRecord == null) {
            tArmsRecord = new TArmsRecord();
            tArmsRecord.setId(idService.getId());
            tArmsRecord.setCreateTime(new Timestamp(System.currentTimeMillis()));
            tArmsRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            tArmsRecord.setCreateUser(userId);
            tArmsRecord.setUpdateUser(userId);
            tArmsRecord.setFlag(false);
            tArmsRecord.setStatus(1);
            save = true;
        }
        tArmsRecord.setTitle(tArmsVO.getTitle());
        tArmsRecord.setContent(tArmsVO.getContent());
        if (save) {
            tArmsRecord.setReadCount((long)0);
            this.tArmsDao.insert(tArmsRecord);
        } else {
            this.tArmsDao.update(tArmsRecord);
        }
        saveFile(tArmsVO.getAttachments(), tArmsRecord.getId(), userId);
        return new ResultVO<>("完成");
    }

    /**
     * 查询
     *
     * @param pagesize
     * @param pageNumber
     * @return
     */
    public PageVO<TArmsVO> getArms(TArmsQueryVO tArmsQueryVO,Integer pagesize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tArmsQueryVO.getTitle())) {
            conditions.add(TArms.T_ARMS.TITLE.like("%" + tArmsQueryVO.getTitle() + "%"));
        }
        if (StringUtils.isNotEmpty(tArmsQueryVO.getStatus())) {
            conditions.add(TArms.T_ARMS.STATUS.eq(Integer.valueOf(tArmsQueryVO.getStatus())));
        }
        if (StringUtils.isNotEmpty(tArmsQueryVO.getUpdateStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tArmsQueryVO.getUpdateStartTime() + " 00:00:00");
            conditions.add(TArms.T_ARMS.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tArmsQueryVO.getUpdateEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tArmsQueryVO.getUpdateEndTime() + " 23:59:59");
            conditions.add(TArms.T_ARMS.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> list = Lists.newArrayList();
        list.add(TArms.T_ARMS.FLAG.desc());
        list.add(TArms.T_ARMS.UPDATE_TIME.desc());
        list.add(TArms.T_ARMS.CREATE_TIME.desc());
        PageVO<TArmsRecord> tArmsRecordPageVO = this.tArmsDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pagesize), list);
        PageVO<TArmsVO> tArmsVOPageVO = new PageVO<>();
        tArmsVOPageVO.setTotalCount(tArmsRecordPageVO.getTotalCount());
        List<TArmsVO> tArmsVOS = Lists.newArrayList();
        for (TArmsRecord pageDatum : tArmsRecordPageVO.getPageData()) {
            TArmsVO tArmsVO = new TArmsVO();
            tArmsVO.setId(String.valueOf(pageDatum.getId()));
            tArmsVO.setTitle(pageDatum.getTitle());
            tArmsVO.setContent(pageDatum.getContent());
            tArmsVO.setAttachment(String.valueOf(pageDatum.getAttachment()));
            tArmsVO.setReadCount(String.valueOf(pageDatum.getReadCount()));
            tArmsVO.setStatus(String.valueOf(pageDatum.getStatus()));
            tArmsVO.setCreateTime(DateUtils.format(pageDatum.getCreateTime()));
            tArmsVO.setUpdateTime(DateUtils.format(pageDatum.getUpdateTime()));
            TUserRecord tUserRecord = this.userDao.findById(pageDatum.getUpdateUser());
            tArmsVO.setUpdateUser(tUserRecord == null ? "": tUserRecord.getName());
            tArmsVOS.add(tArmsVO);
        }
        tArmsVOPageVO.setPageData(tArmsVOS);
        return tArmsVOPageVO;
    }

    /**
     * 置顶
     *
     * @param id
     * @param userId
     * @return
     */
    public ResultVO<String> top(Long id, Long userId) {
        TArmsRecord record = this.tArmsDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setFlag(true);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tArmsDao.update(record);
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
        TArmsRecord record = this.tArmsDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setStatus(1);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tArmsDao.update(record);
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
        TArmsRecord record = this.tArmsDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setStatus(0);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tArmsDao.update(record);
        return new ResultVO<>("操作完成");
    }

    /**
     * 删除
     *
     * @param ids
     * @return
     */
    public ResultVO<String> delete(List<Long> ids) {
        this.tArmsDao.deleteById(ids);
        this.tArmsAttachmentDao.deleteByConditions(TArmsAttachment.T_ARMS_ATTACHMENT.ARMS_ID.in(ids));
        return new ResultVO<>("操作完成");
    }


    /**
     * 获取文件附件
     *
     * @param newID
     * @return
     */
    private List<TFileVO> getFiles(Long newID) {
        List<TArmsAttachmentRecord> records = this.tArmsAttachmentDao.findByCondition(TArmsAttachment.T_ARMS_ATTACHMENT.ARMS_ID.eq(newID));
        List<Long> ids = records.stream().map(s -> s.getId()).collect(Collectors.toList());
        return fileService.getByIds(ids);
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public ResultVO<TArmsVO> getById(Long id, boolean add) {
        TArmsRecord pageDatum = this.tArmsDao.findById(id);
        if (pageDatum == null) {
            return new ResultVO<>(-1, null, "没有记录");
        }
        TArmsVO tArmsVO = new TArmsVO();
        tArmsVO.setId(String.valueOf(pageDatum.getId()));
        tArmsVO.setTitle(pageDatum.getTitle());
        tArmsVO.setContent(pageDatum.getContent());
        tArmsVO.setAttachment(String.valueOf(pageDatum.getAttachment()));
        tArmsVO.setReadCount(String.valueOf(pageDatum.getReadCount()));
        tArmsVO.setStatus(String.valueOf(pageDatum.getStatus()));
        tArmsVO.setCreateTime(DateUtils.format(pageDatum.getCreateTime()));
        tArmsVO.setUpdateTime(DateUtils.format(pageDatum.getUpdateTime()));
        TUserRecord tUserRecord = this.userDao.findById(pageDatum.getUpdateUser());
        tArmsVO.setUpdateUser(tUserRecord == null ? "" : tUserRecord.getName());
        tArmsVO.setAttachments(getFiles(id));
        if (add) {
            pageDatum.setReadCount(pageDatum.getReadCount() == null ? 1 : pageDatum.getReadCount() + 1);
            this.tArmsDao.update(pageDatum);
        }
        return new ResultVO<>(tArmsVO);
    }
}
