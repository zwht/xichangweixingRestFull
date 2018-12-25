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
import org.poem.jooq.tables.TWorkDynamics;
import org.poem.jooq.tables.records.TManagementRegulationRecord;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        tNewsVO.setDepartId(String.valueOf(s.getDepartId()));
        tNewsVO.setDepartName(deparMap.get(s.getDepartId()));
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
    public PageVO<TManagementRegulationVO> getAll(TManagementRegulationQueryVO tNewQueryVO, Integer pageNumber, Integer pageSize) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tNewQueryVO.getTitle())) {
            conditions.add(TWorkDynamics.T_WORK_DYNAMICS.TITLE.like("%" + tNewQueryVO.getTitle() + "%"));
        }
        if (tNewQueryVO.getStatus() != null) {
            conditions.add(TWorkDynamics.T_WORK_DYNAMICS.STATUS.eq(Integer.valueOf(tNewQueryVO.getStatus())));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getUpdateStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestamp(tNewQueryVO.getUpdateStartTime());
            conditions.add(TWorkDynamics.T_WORK_DYNAMICS.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getUpdateEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestamp(tNewQueryVO.getUpdateEndTime());
            conditions.add(TWorkDynamics.T_WORK_DYNAMICS.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> fields = Lists.newArrayList();
        fields.add(TWorkDynamics.T_WORK_DYNAMICS.TOP.desc());
        fields.add(TWorkDynamics.T_WORK_DYNAMICS.CREATE_TIME.desc());
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
        return getTWorkDynamicsVO(s, userMap, tindusMap);
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
        tNewsRecord.setDepartId(Long.valueOf(tNewsVO.getDepartId()));
        tNewsRecord.setTitle(tNewsVO.getTitle());
        tNewsRecord.setTop("1".equals(tNewsVO.getTop()));
        tNewsRecord.setFlag("1".equals(tNewsVO.getTop()));
        tNewsRecord.setContent(tNewsVO.getContent());

        if (save) {
            this.tManagementRegulationDao.insert(tNewsRecord);
        } else {
            this.tManagementRegulationDao.update(tNewsRecord);
        }
        return new ResultVO<>(0, "可以了");
    }
}
