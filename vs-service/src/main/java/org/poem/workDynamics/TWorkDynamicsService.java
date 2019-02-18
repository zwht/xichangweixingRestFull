package org.poem.workDynamics;

import com.google.common.collect.Lists;
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
import org.poem.jooq.tables.TQualityNoticeAttachment;
import org.poem.jooq.tables.TWorkDynamics;
import org.poem.jooq.tables.TWorkDynamicsAttachment;
import org.poem.jooq.tables.records.TQualityNoticeAttachmentRecord;
import org.poem.jooq.tables.records.TWorkDynamicsAttachmentRecord;
import org.poem.jooq.tables.records.TWorkDynamicsRecord;
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
 * 工作动态
 *
 * @author poem
 */
@Service
public class TWorkDynamicsService {


    @Autowired
    private TWorkDynamicsDao tWorkDynamicsDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private TWorkDynamicsAttachmentDao tWorkDynamicsAttachmentDao;

    @Autowired
    private FileService fileService;


    /**
     * 翻译
     *
     * @param s
     * @param userMap
     * @return
     */
    public TWorkDynamicsVO getTWorkDynamicsVO(TWorkDynamicsRecord s, Map<Long, String> userMap) {
        TWorkDynamicsVO tNewsVO = new TWorkDynamicsVO();
        tNewsVO.setId(String.valueOf(s.getId()));
        tNewsVO.setTitle(s.getTitle());
        tNewsVO.setAbstracts(s.getAbstract());
        tNewsVO.setFace(String.valueOf(s.getFace()));
        tNewsVO.setTop(String.valueOf(s.getTop()));
        tNewsVO.setContent(s.getContent());
        tNewsVO.setContent(s.getContent());
        tNewsVO.setReadCount(String.valueOf(s.getReadCount()));
        tNewsVO.setStatus(String.valueOf(s.getStatus()));
        tNewsVO.setUpdateTime(DateUtils.format(s.getUpdateTime(), "yyyy-MM-dd hh:mm:ss"));
        tNewsVO.setUpdateUser(userMap.get(s.getUpdateUser()));
        return tNewsVO;

    }

    /**
     * 查询
     *
     * @param tNewQueryVO
     * @param pageNumber
     * @param pageSize
     * @return
     */
    public PageVO<TWorkDynamicsVO> getAll(TWorkDynamicsQueryVO tNewQueryVO, Integer pageNumber, Integer pageSize) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tNewQueryVO.getTitle())) {
            conditions.add(TWorkDynamics.T_WORK_DYNAMICS.TITLE.like("%" + tNewQueryVO.getTitle() + "%"));
        }
        if (tNewQueryVO.getStatus() != null ) {
            conditions.add(TWorkDynamics.T_WORK_DYNAMICS.STATUS.eq(tNewQueryVO.getStatus()));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getUpdateStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tNewQueryVO.getUpdateStartTime() + " 00:00:00");
            conditions.add(TWorkDynamics.T_WORK_DYNAMICS.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getUpdateEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tNewQueryVO.getUpdateEndTime() + " 23:59:59");
            conditions.add(TWorkDynamics.T_WORK_DYNAMICS.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> fields = Lists.newArrayList();
        fields.add(TWorkDynamics.T_WORK_DYNAMICS.TOP.desc());
        fields.add(TWorkDynamics.T_WORK_DYNAMICS.CREATE_TIME.desc());
        PageVO<TWorkDynamicsRecord> tNewsRecordPageVO = this.tWorkDynamicsDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), fields);
        PageVO<TWorkDynamicsVO> tNewsVOPageVO = new PageVO<>();
        tNewsVOPageVO.setTotalCount(tNewsRecordPageVO.getTotalCount());
        Map<Long, String> userMap = userDao.getUseRMap();
        List<TWorkDynamicsVO> tNewsVOS = tNewsRecordPageVO.getPageData().stream().map(s -> {
            return getTWorkDynamicsVO(s, userMap);
        }).collect(Collectors.toList());
        tNewsVOPageVO.setPageData(tNewsVOS);
        return tNewsVOPageVO;

    }

    /**
     * 获取文件附件
     *
     * @param newID
     * @return
     */
    private List<TFileVO> getFiles(Long newID) {
        List<TWorkDynamicsAttachmentRecord> records = this.tWorkDynamicsAttachmentDao
                .findByCondition(TWorkDynamicsAttachment.T_WORK_DYNAMICS_ATTACHMENT.WORK_DYNAMICS_ID.eq(newID));
        List<Long> ids = records.stream().map(s -> s.getId()).collect(Collectors.toList());
        return fileService.getByIds(ids);
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public TWorkDynamicsVO getById(Long id, boolean add) {
        TWorkDynamicsRecord s = this.tWorkDynamicsDao.findById(id);
        if (add) {
            s.setReadCount(s.getReadCount() == null ? 0 : s.getReadCount() + 1);
            this.tWorkDynamicsDao.update(s);
        }
        Map<Long, String> userMap = userDao.getUseRMap();
        TWorkDynamicsVO tWorkDynamicsVO = getTWorkDynamicsVO(s, userMap);
        tWorkDynamicsVO.setAttachments(getFiles(id));
        return tWorkDynamicsVO;
    }

    /**
     * 下线
     *
     * @param userId
     * @param id
     * @return
     */
    public ResultVO<String> line(Long userId, Long id) {
        TWorkDynamicsRecord s = this.tWorkDynamicsDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setStatus(0);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.tWorkDynamicsDao.update(s);
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
        TWorkDynamicsRecord s = this.tWorkDynamicsDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setStatus(1);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.tWorkDynamicsDao.update(s);
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
        TWorkDynamicsRecord s = this.tWorkDynamicsDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setTop(true);
        s.setFlag(true);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.tWorkDynamicsDao.update(s);
        return new ResultVO<>(0, "可以了");
    }


    /**
     * 保存
     *
     * @param tFileVOS
     */
    public void saveFile(List<TFileVO> tFileVOS, Long id, Long userId) {
        this.tWorkDynamicsAttachmentDao.deleteByConditions(TWorkDynamicsAttachment.T_WORK_DYNAMICS_ATTACHMENT.WORK_DYNAMICS_ID.eq(id));
        List<TWorkDynamicsAttachmentRecord> records = Lists.newArrayList();
        if (CollectionUtils.isEmpty(tFileVOS)){
            return;
        }
        for (TFileVO tFileVO : tFileVOS) {
            TWorkDynamicsAttachmentRecord record = new TWorkDynamicsAttachmentRecord();
            record.setId(idService.getId());
            record.setFileId(tFileVO.getId());
            record.setWorkDynamicsId(id);
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setUpdateUser(userId);
            records.add(record);
        }
        this.tWorkDynamicsAttachmentDao.insert(records);
    }

    /**
     * 跟新或者是添加
     *
     * @param tNewsVO
     * @param userId
     * @return
     */
    public ResultVO<String> addAndUpdate(TWorkDynamicsVO tNewsVO, Long userId) {
        TWorkDynamicsRecord tNewsRecord = null;
        Boolean save = false;
        if (StringUtils.isNotEmpty(tNewsVO.getId())) {
            tNewsRecord = this.tWorkDynamicsDao.findById(Long.valueOf(tNewsVO.getId()));
        }
        if (tNewsRecord == null) {
            tNewsRecord = new TWorkDynamicsRecord();
            tNewsRecord.setId(idService.getId());
            tNewsRecord.setCreateTime(new Timestamp(System.currentTimeMillis()));
            tNewsRecord.setCreateUser(userId);
            tNewsRecord.setStatus(0);
            save = true;
        }
        tNewsRecord.setUpdateUser(userId);
        tNewsRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        tNewsRecord.setFace(tNewsVO.getFace());
        tNewsRecord.setTitle(tNewsVO.getTitle());
        tNewsRecord.setAbstract(tNewsVO.getAbstracts());
        tNewsRecord.setStatus(StringUtils.isEmpty(tNewsVO.getStatus()) ? 0 : Integer.valueOf(tNewsVO.getStatus()));
        tNewsRecord.setTop("1".equals(tNewsVO.getTop()));
        tNewsRecord.setFlag("1".equals(tNewsVO.getTop()));
        tNewsRecord.setContent(tNewsVO.getContent());

        if (save) {
            this.tWorkDynamicsDao.insert(tNewsRecord);
        } else {
            this.tWorkDynamicsDao.update(tNewsRecord);
        }
        saveFile(tNewsVO.getAttachments(), tNewsRecord.getId(), userId);
        return new ResultVO<>(0, "可以了");
    }

    /**
     * @param ids
     * @return
     */
    public ResultVO<String> delete(Long[] ids) {
        this.tWorkDynamicsDao.deleteById(Arrays.asList(ids));
        this.tWorkDynamicsAttachmentDao.deleteByConditions(TWorkDynamicsAttachment.T_WORK_DYNAMICS_ATTACHMENT.WORK_DYNAMICS_ID.in(Arrays.asList(ids)));
        return new ResultVO<>("删除数据");
    }
}
