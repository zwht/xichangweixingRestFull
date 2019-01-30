package org.poem.managementRegulation;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.common.IDService;
import org.poem.depart.TDepartDao;
import org.poem.file.FileService;
import org.poem.file.TFileVO;
import org.poem.jooq.tables.TManagementRegulation;
import org.poem.jooq.tables.TManagementRegulationAttachment;
import org.poem.jooq.tables.TMarketInformationAttachment;
import org.poem.jooq.tables.TWorkDynamics;
import org.poem.jooq.tables.records.TManagementRegulationAttachmentRecord;
import org.poem.jooq.tables.records.TManagementRegulationRecord;
import org.poem.jooq.tables.records.TMarketInformationAttachmentRecord;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 管理规定
 *
 * @author poem
 */
@Service
public class TManagementRegulationService {

    @Autowired
    private TManagementRegulationDao tManagementRegulationDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private TDepartDao tDepartDao;

    @Autowired
    private TManagementRegulationAttDao tManagementRegulationAttDao;

    @Autowired
    private FileService fileService;


    /**
     * 翻译
     *
     * @param s
     * @param userMap
     * @return
     */
    public TManagementRegulationVO getTWorkDynamicsVO(TManagementRegulationRecord s, Map<Long, String> userMap,
                                                      Map<Long, String> deparMap) {
        TManagementRegulationVO tNewsVO = new TManagementRegulationVO();
        tNewsVO.setId(String.valueOf(s.getId()));
        tNewsVO.setTitle(s.getTitle());
//        tNewsVO.setDepartId(String.valueOf(s.getDepartId()));
//        tNewsVO.setDepartName(deparMap.get(s.getDepartId()));
        tNewsVO.setTop(String.valueOf(s.getTop()));
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
    public PageVO<TManagementRegulationVO> getAll(TManagementRegulationQueryVO tNewQueryVO, Integer pageSize , Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tNewQueryVO.getTitle())) {
            conditions.add(TManagementRegulation.T_MANAGEMENT_REGULATION.TITLE.like("%" + tNewQueryVO.getTitle() + "%"));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getStatus())) {
            conditions.add(TManagementRegulation.T_MANAGEMENT_REGULATION.STATUS.eq(Integer.valueOf(tNewQueryVO.getStatus())));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getUpdateStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tNewQueryVO.getUpdateStartTime() + " 00:00:00");
            conditions.add(TManagementRegulation.T_MANAGEMENT_REGULATION.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getUpdateEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tNewQueryVO.getUpdateEndTime() + " 23:59:59");
            conditions.add(TManagementRegulation.T_MANAGEMENT_REGULATION.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> fields = Lists.newArrayList();
        fields.add(TManagementRegulation.T_MANAGEMENT_REGULATION.TOP.desc());
        fields.add(TManagementRegulation.T_MANAGEMENT_REGULATION.CREATE_TIME.desc());
        PageVO<TManagementRegulationRecord> tNewsRecordPageVO = this.tManagementRegulationDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), fields);
        PageVO<TManagementRegulationVO> tNewsVOPageVO = new PageVO<>();
        tNewsVOPageVO.setTotalCount(tNewsRecordPageVO.getTotalCount());
        Map<Long, String> userMap = userDao.getUseRMap();
        Map<Long, String> tindusMap = this.tDepartDao.getDepartMap();
        List<TManagementRegulationVO> tNewsVOS = tNewsRecordPageVO.getPageData().stream().map(s -> {
            return getTWorkDynamicsVO(s, userMap, tindusMap);
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
        List<TManagementRegulationAttachmentRecord> records = this.tManagementRegulationAttDao
                .findByCondition(TManagementRegulationAttachment.T_MANAGEMENT_REGULATION_ATTACHMENT.MANAGEMENT_REGULATION_ATTACHMENT_ID.eq(newID));
        List<Long> ids = records.stream().map(s -> s.getId()).collect(Collectors.toList());
        return fileService.getByIds(ids);
    }

    /**
     * 保存
     *
     * @param tFileVOS
     */
    public void saveFile(List<TFileVO> tFileVOS, Long id, Long userId) {
        this.tManagementRegulationAttDao.deleteByConditions(TManagementRegulationAttachment.T_MANAGEMENT_REGULATION_ATTACHMENT.MANAGEMENT_REGULATION_ATTACHMENT_ID.eq(id));
        List<TManagementRegulationAttachmentRecord> records = Lists.newArrayList();
        if (CollectionUtils.isEmpty(tFileVOS)){
            return;
        }
        for (TFileVO tFileVO : tFileVOS) {
            TManagementRegulationAttachmentRecord record = new TManagementRegulationAttachmentRecord();
            record.setId(idService.getId());
            record.setFileId(tFileVO.getId());
            record.setManagementRegulationAttachmentId(id);
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setUpdateUser(userId);
            records.add(record);
        }
        this.tManagementRegulationAttDao.insert(records);
    }
    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public TManagementRegulationVO getById(Long id, boolean add) {
        TManagementRegulationRecord s = this.tManagementRegulationDao.findById(id);
        Map<Long, String> userMap = userDao.getUseRMap();
        Map<Long, String> tindusMap = this.tDepartDao.getDepartMap();
        if (add) {
            s.setReadCount(s.getReadCount() == null ? 1 : s.getReadCount() + 1);
            this.tManagementRegulationDao.update(s);
        }
        TManagementRegulationVO vo = getTWorkDynamicsVO(s, userMap, tindusMap);
        vo.setAttachments(getFiles(id));
        return vo;
    }

    /**
     * 下线
     *
     * @param userId
     * @param id
     * @return
     */
    public ResultVO<String> line(Long userId, Long id) {
        TManagementRegulationRecord s = this.tManagementRegulationDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setStatus(0);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.tManagementRegulationDao.update(s);
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
        TManagementRegulationRecord s = this.tManagementRegulationDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setStatus(1);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.tManagementRegulationDao.update(s);
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
        TManagementRegulationRecord s = this.tManagementRegulationDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setTop(true);
        s.setFlag(true);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.tManagementRegulationDao.update(s);
        return new ResultVO<>(0, "可以了");
    }


    /**
     * 跟新或者是添加
     *
     * @param tNewsVO
     * @param userId
     * @return
     */
    public ResultVO<String> addAndUpdate(TManagementRegulationVO tNewsVO, Long userId) {
        TManagementRegulationRecord tNewsRecord = null;
        Boolean save = false;
        if (StringUtils.isNotEmpty(tNewsVO.getId())) {
            tNewsRecord = this.tManagementRegulationDao.findById(Long.valueOf(tNewsVO.getId()));
        }
        if (tNewsRecord == null) {
            tNewsRecord = new TManagementRegulationRecord();
            tNewsRecord.setId(idService.getId());
            tNewsRecord.setCreateTime(new Timestamp(System.currentTimeMillis()));
            tNewsRecord.setCreateUser(userId);
            tNewsRecord.setStatus(0);
            tNewsRecord.setReadCount(0L);
            save = true;
        }
        tNewsRecord.setUpdateUser(userId);
        tNewsRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        tNewsRecord.setTitle(tNewsVO.getTitle());
        tNewsRecord.setTop("1".equals(tNewsVO.getTop()));
        tNewsRecord.setFlag("1".equals(tNewsVO.getTop()));
        tNewsRecord.setContent(tNewsVO.getContent());
        tNewsRecord.setStatus(StringUtils.isEmpty(tNewsVO.getStatus()) ? 0 : Integer.valueOf(tNewsVO.getStatus()));

        if (save) {
            this.tManagementRegulationDao.insert(tNewsRecord);
        } else {
            this.tManagementRegulationDao.update(tNewsRecord);
        }
        saveFile(tNewsVO.getAttachments(), tNewsRecord.getId(), userId);
        return new ResultVO<>(0, "可以了");
    }


    public ResultVO<String> delete(List<Long> ids){
        this.tManagementRegulationDao.deleteById(ids);
        this.tManagementRegulationAttDao.deleteByConditions(TManagementRegulationAttachment.T_MANAGEMENT_REGULATION_ATTACHMENT.MANAGEMENT_REGULATION_ATTACHMENT_ID.in(ids));
        return new ResultVO<>("删除完成");
    }
}
