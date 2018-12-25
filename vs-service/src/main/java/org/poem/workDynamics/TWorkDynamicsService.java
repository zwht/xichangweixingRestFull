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
import org.poem.jooq.tables.TWorkDynamics;
import org.poem.jooq.tables.records.TWorkDynamicsRecord;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
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
        if (tNewQueryVO.getStatus() != null) {
            conditions.add(TWorkDynamics.T_WORK_DYNAMICS.STATUS.eq(tNewQueryVO.getStatus()));
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
        return getTWorkDynamicsVO(s, userMap);
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
        tNewsRecord.setFace(Long.valueOf(tNewsVO.getFace()));
        tNewsRecord.setTitle(tNewsVO.getTitle());
        tNewsRecord.setAbstract(tNewsVO.getAbstracts());
        tNewsRecord.setTop("1".equals(tNewsVO.getTop()));
        tNewsRecord.setFlag("1".equals(tNewsVO.getTop()));
        tNewsRecord.setContent(tNewsVO.getContent());

        if (save) {
            this.tWorkDynamicsDao.insert(tNewsRecord);
        } else {
            this.tWorkDynamicsDao.update(tNewsRecord);
        }
        return new ResultVO<>(0, "可以了");
    }

}
