package org.poem.reports;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.common.IDService;
import org.poem.jooq.tables.TReports;
import org.poem.jooq.tables.records.TReportsRecord;
import org.poem.systemnotice.SystemNoticeService;
import org.poem.user.UserDao;
import org.poem.workDynamics.TWorkDynamicsQueryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 投诉举报
 * @author poem
 */
@Service
public class TReportsService {

    @Autowired
    private TReportsDao tReportsDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private SystemNoticeService systemNoticeService;

    /**
     * 翻译
     * @param s
     * @param userMap
     * @return
     */
    public TReportsVO getTWorkDynamicsVO(TReportsRecord s, Map<Long, String> userMap){
        TReportsVO tNewsVO = new TReportsVO();
        tNewsVO.setId(String.valueOf(s.getId()));
        tNewsVO.setTitle(s.getTitle());
        tNewsVO.setReportName(s.getReportName());
        tNewsVO.setWorks(String.valueOf(s.getWorks()));
        tNewsVO.setPhone(s.getPhone());
        tNewsVO.setReportTime(DateUtils.format(s.getReportTime()));
        tNewsVO.setDealTime(DateUtils.format(s.getDealTime()));
        tNewsVO.setStatus(String.valueOf(s.getStatus()));
        tNewsVO.setContent(s.getContent());
        tNewsVO.setUpdateTime(DateUtils.format(s.getUpdateTime(), "yyyy-MM-dd hh:mm:ss"));
        tNewsVO.setUpdateUser(userMap.get(s.getUpdateUser()));
        return tNewsVO;

    }    /**
     * 查询
     *
     * @param tNewQueryVO
     * @param pageNumber
     * @param pageSize
     * @return
     */
    public PageVO<TReportsVO> getAll(TWorkDynamicsQueryVO tNewQueryVO, Integer pageNumber, Integer pageSize) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tNewQueryVO.getTitle())) {
            conditions.add(TReports.T_REPORTS.TITLE.like("%" + tNewQueryVO.getTitle() + "%"));
        }
        if (tNewQueryVO.getStatus() != null ) {
            conditions.add(TReports.T_REPORTS.STATUS.eq(tNewQueryVO.getStatus()));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getUpdateStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tNewQueryVO.getUpdateStartTime() + " 00:00:00");
            conditions.add(TReports.T_REPORTS.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getUpdateEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tNewQueryVO.getUpdateEndTime() + " 23:59:59");
            conditions.add(TReports.T_REPORTS.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> fields = Lists.newArrayList();
        fields.add(TReports.T_REPORTS.CREATE_TIME.desc());
        PageVO<TReportsRecord> tNewsRecordPageVO = this.tReportsDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), fields);
        PageVO<TReportsVO> tNewsVOPageVO = new PageVO<>();
        tNewsVOPageVO.setTotalCount(tNewsRecordPageVO.getTotalCount());
        Map<Long, String> userMap = userDao.getUseRMap();
        List<TReportsVO> tNewsVOS = tNewsRecordPageVO.getPageData().stream().map(s -> {
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
    public TReportsVO getById(Long id) {
        TReportsRecord s = this.tReportsDao.findById(id);
        Map<Long, String> userMap = userDao.getUseRMap();
        return getTWorkDynamicsVO(s, userMap);
    }



    /**
     * 跟新或者是添加
     *
     * @param tNewsVO
     * @param userId
     * @return
     */
    public ResultVO<String> addAndUpdate(TReportsVO tNewsVO, Long userId) {
        TReportsRecord tNewsRecord = null;
        Boolean save = false;
        if (StringUtils.isNotEmpty(tNewsVO.getId())) {
            tNewsRecord = this.tReportsDao.findById(Long.valueOf(tNewsVO.getId()));
        }
        if (tNewsRecord == null) {
            tNewsRecord = new TReportsRecord();
            tNewsRecord.setId(idService.getId());
            tNewsRecord.setCreateTime(new Timestamp(System.currentTimeMillis()));
            tNewsRecord.setCreateUser(userId);
            tNewsRecord.setStatus(1);
            save = true;
        }
        tNewsRecord.setUpdateUser(userId);
        tNewsRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        tNewsRecord.setReportName(tNewsVO.getReportName());
        tNewsRecord.setReportTime(DateUtils.formatTimestamp(tNewsVO.getReportTime()));
        tNewsRecord.setDealTime(DateUtils.formatTimestamp(tNewsVO.getDealTime()));
        tNewsRecord.setTitle(tNewsVO.getTitle());
        tNewsRecord.setFlag(true);

        if (save) {
            this.tReportsDao.insert(tNewsRecord);
            String content = "用户" + userDao.findById(userId).getName() +
                    "于" + DateUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss")
                    + "新增举报。";
            systemNoticeService.saveSystemNotice("新增 举报",userId, content);
        } else {
            this.tReportsDao.update(tNewsRecord);
        }
        return new ResultVO<>(0, "可以了");
    }


    /**
     * 处理
     * @param tNewsVO
     * @param userId
     * @return
     */
    public ResultVO<String> handl(TReportsHandVO tNewsVO, Long userId) {
        TReportsRecord s = this.tReportsDao.findById(Long.valueOf(tNewsVO.getId()));
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setSuggestion(tNewsVO.getSuggestion());
        s.setStatus(0);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.tReportsDao.update(s);
        return new ResultVO<>(0, "可以了");
    }
}
