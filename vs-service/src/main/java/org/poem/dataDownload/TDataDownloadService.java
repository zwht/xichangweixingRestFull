package org.poem.dataDownload;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.common.IDService;
import org.poem.industry.TIndustryDao;
import org.poem.jooq.tables.TDataDownload;
import org.poem.jooq.tables.records.TDataDownloadRecord;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 资料下载
 *
 * @author poem
 */
@Service
public class TDataDownloadService {


    @Autowired
    private TDataDownloadDao tDataDownloadDao;


    @Autowired
    private UserDao userDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private TIndustryDao tIndustryDao;

    /**
     * 翻译
     *
     * @param s
     * @param userMap
     * @return
     */
    public TDataDownloadVO getTWorkDynamicsVO(TDataDownloadRecord s, Map<Long, String> userMap, Map<Long, String> subjectMap) {
        TDataDownloadVO tNewsVO = new TDataDownloadVO();
        tNewsVO.setId(String.valueOf(s.getId()));
        tNewsVO.setReportName(s.getReportName());
        tNewsVO.setSubjectId(String.valueOf(s.getSubjectId()));
        tNewsVO.setSubjectName(subjectMap.get(Long.valueOf(s.getSubjectId())));
        tNewsVO.setDownloads(String.valueOf(s.getDownloads()));
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
    public PageVO<TDataDownloadVO> getAll(TDataDownloadQueryVO tNewQueryVO, Integer pageNumber, Integer pageSize) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tNewQueryVO.getReportName())) {
            conditions.add(TDataDownload.T_DATA_DOWNLOAD.REPORT_NAME.like("%" + tNewQueryVO.getReportName() + "%"));
        }
        if (tNewQueryVO.getStatus() != null) {
            conditions.add(TDataDownload.T_DATA_DOWNLOAD.STATUS.eq(Integer.valueOf(tNewQueryVO.getStatus())));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getUpdateStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestamp(tNewQueryVO.getUpdateStartTime());
            conditions.add(TDataDownload.T_DATA_DOWNLOAD.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getUpdateEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestamp(tNewQueryVO.getUpdateEndTime());
            conditions.add(TDataDownload.T_DATA_DOWNLOAD.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> fields = Lists.newArrayList();
        fields.add(TDataDownload.T_DATA_DOWNLOAD.CREATE_TIME.desc());
        PageVO<TDataDownloadRecord> tNewsRecordPageVO = this.tDataDownloadDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), fields);
        PageVO<TDataDownloadVO> tNewsVOPageVO = new PageVO<>();
        tNewsVOPageVO.setTotalCount(tNewsRecordPageVO.getTotalCount());
        Map<Long, String> industryMap = this.tIndustryDao.mapIndustry();
        Map<Long, String> userMap = userDao.getUseRMap();
        List<TDataDownloadVO> tNewsVOS = tNewsRecordPageVO.getPageData().stream().map(s -> {
            return getTWorkDynamicsVO(s, userMap, industryMap);
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
    public TDataDownloadVO getById(Long id) {
        TDataDownloadRecord s = this.tDataDownloadDao.findById(id);
        Map<Long, String> userMap = userDao.getUseRMap();
        Map<Long, String> industry = this.tIndustryDao.mapIndustry();
        return getTWorkDynamicsVO(s, userMap, industry);
    }

    /**
     * 下线
     *
     * @param userId
     * @param id
     * @return
     */
    public ResultVO<String> line(Long userId, Long id) {
        TDataDownloadRecord s = this.tDataDownloadDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setStatus(0);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.tDataDownloadDao.update(s);
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
        TDataDownloadRecord s = this.tDataDownloadDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setStatus(1);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.tDataDownloadDao.update(s);
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
        TDataDownloadRecord s = this.tDataDownloadDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setFlag(true);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.tDataDownloadDao.update(s);
        return new ResultVO<>(0, "可以了");
    }


    /**
     * 跟新或者是添加
     *
     * @param tNewsVO
     * @param userId
     * @return
     */
    public ResultVO<String> addAndUpdate(TDataDownloadVO tNewsVO, Long userId) {
        TDataDownloadRecord tNewsRecord = null;
        Boolean save = false;
        if (StringUtils.isNotEmpty(tNewsVO.getId())) {
            tNewsRecord = this.tDataDownloadDao.findById(Long.valueOf(tNewsVO.getId()));
        }
        if (tNewsRecord == null) {
            tNewsRecord = new TDataDownloadRecord();
            tNewsRecord.setId(idService.getId());
            tNewsRecord.setCreateTime(new Timestamp(System.currentTimeMillis()));
            tNewsRecord.setCreateUser(userId);
            tNewsRecord.setDownloads(0);
            save = true;
        }
        tNewsRecord.setUpdateUser(userId);
        tNewsRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        tNewsRecord.setReportName(tNewsVO.getReportName());
        tNewsRecord.setSubjectId(tNewsVO.getSubjectId());
        tNewsRecord.setStatus(Integer.valueOf(tNewsVO.getStatus()));
        tNewsRecord.setFlag(true);

        if (save) {
            this.tDataDownloadDao.insert(tNewsRecord);
        } else {
            this.tDataDownloadDao.update(tNewsRecord);
        }
        return new ResultVO<>(0, "可以了");
    }
}
