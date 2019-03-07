package org.poem.marketInformation;

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
import org.poem.industry.TIndustryDao;
import org.poem.jooq.tables.TMarketInformation;
import org.poem.jooq.tables.TMarketInformationAttachment;
import org.poem.jooq.tables.records.TMarketInformationAttachmentRecord;
import org.poem.jooq.tables.records.TMarketInformationRecord;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 市场信息
 *
 * @author poem
 */
@Service
public class MarketInformationService {


    @Autowired
    private MarketInformationDao marketInformationDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private TIndustryDao industryDao;

    @Autowired
    private MarketInformationAttachmentDao marketInformationAttachmentDao;

    @Autowired
    private FileService fileService;

    /**
     * 翻译
     *
     * @param s
     * @param userMap
     * @return
     */
    public MarketInformationVO getTWorkDynamicsVO(TMarketInformationRecord s, Map<Long, String> userMap,
                                                  Map<Long, String> industry) {
        MarketInformationVO tNewsVO = new MarketInformationVO();
        tNewsVO.setId(String.valueOf(s.getId()));
        tNewsVO.setTitle(s.getTitle());
        tNewsVO.setIndustry(String.valueOf(s.getIndustry()));
        tNewsVO.setIndustryName(industry.get(s.getIndustry()));
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
    public PageVO<MarketInformationVO> getAll(MarketInformationQueryVO tNewQueryVO, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tNewQueryVO.getTitle())) {
            conditions.add(TMarketInformation.T_MARKET_INFORMATION.TITLE.like("%" + tNewQueryVO.getTitle() + "%"));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getStatus())) {
            conditions.add(TMarketInformation.T_MARKET_INFORMATION.STATUS.eq(Integer.valueOf(tNewQueryVO.getStatus())));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getUpdateStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tNewQueryVO.getUpdateStartTime() + " 00:00:00");
            conditions.add(TMarketInformation.T_MARKET_INFORMATION.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getUpdateEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tNewQueryVO.getUpdateEndTime() + " 23:59:59");
            conditions.add(TMarketInformation.T_MARKET_INFORMATION.UPDATE_TIME.lessOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getIndustry())) {
            conditions.add(TMarketInformation.T_MARKET_INFORMATION.INDUSTRY.eq(Long.valueOf(tNewQueryVO.getIndustry())));
        }
        List<SortField<?>> fields = Lists.newArrayList();
        fields.add(TMarketInformation.T_MARKET_INFORMATION.TOP.desc());
        fields.add(TMarketInformation.T_MARKET_INFORMATION.UPDATE_TIME.desc());
        PageVO<TMarketInformationRecord> tNewsRecordPageVO = this.marketInformationDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), fields);
        PageVO<MarketInformationVO> tNewsVOPageVO = new PageVO<>();
        tNewsVOPageVO.setTotalCount(tNewsRecordPageVO.getTotalCount());
        Map<Long, String> userMap = userDao.getUseRMap();
        Map<Long, String> tindusMap = this.industryDao.mapIndustry();
        List<MarketInformationVO> tNewsVOS = tNewsRecordPageVO.getPageData().stream().map(s -> {
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
        List<TMarketInformationAttachmentRecord> records = this.marketInformationAttachmentDao
                .findByCondition(TMarketInformationAttachment.T_MARKET_INFORMATION_ATTACHMENT.MARKET_INFORMATION_ID.eq(newID));
        List<Long> ids = records.stream().map(s -> s.getId()).collect(Collectors.toList());
        return fileService.getByIds(ids);
    }

    /**
     * 保存
     *
     * @param tFileVOS
     */
    public void saveFile(List<TFileVO> tFileVOS, Long id, Long userId) {
        this.marketInformationAttachmentDao.deleteByConditions(TMarketInformationAttachment.T_MARKET_INFORMATION_ATTACHMENT.MARKET_INFORMATION_ID.eq(id));
        List<TMarketInformationAttachmentRecord> records = Lists.newArrayList();
        if (CollectionUtils.isEmpty(tFileVOS)){
            return;
        }
        for (TFileVO tFileVO : tFileVOS) {
            TMarketInformationAttachmentRecord record = new TMarketInformationAttachmentRecord();
            record.setId(idService.getId());
            record.setFileId(tFileVO.getId());
            record.setMarketInformationId(id);
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setUpdateUser(userId);
            records.add(record);
        }
        this.marketInformationAttachmentDao.insert(records);
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public MarketInformationVO getById(Long id, boolean add) {
        TMarketInformationRecord s = this.marketInformationDao.findById(id);
        Map<Long, String> userMap = userDao.getUseRMap();
        Map<Long, String> tindusMap = this.industryDao.mapIndustry();
        if (add){
            s.setReadCount( s.getReadCount() == null ? 1: s.getReadCount() + 1);
            this.marketInformationDao.update(s);
        }
        MarketInformationVO vo = getTWorkDynamicsVO(s, userMap, tindusMap);
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
        TMarketInformationRecord s = this.marketInformationDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setStatus(0);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.marketInformationDao.update(s);
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
        TMarketInformationRecord s = this.marketInformationDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setStatus(1);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.marketInformationDao.update(s);
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
        TMarketInformationRecord s = this.marketInformationDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setTop(true);
        s.setFlag(true);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.marketInformationDao.update(s);
        return new ResultVO<>(0, "可以了");
    }


    /**
     * 跟新或者是添加
     *
     * @param tNewsVO
     * @param userId
     * @return
     */
    public ResultVO<String> addAndUpdate(MarketInformationVO tNewsVO, Long userId) {
        TMarketInformationRecord tNewsRecord = null;
        Boolean save = false;
        if (StringUtils.isNotEmpty(tNewsVO.getId())) {
            tNewsRecord = this.marketInformationDao.findById(Long.valueOf(tNewsVO.getId()));
        }
        if (tNewsRecord == null) {
            tNewsRecord = new TMarketInformationRecord();
            tNewsRecord.setId(idService.getId());
            tNewsRecord.setCreateTime(new Timestamp(System.currentTimeMillis()));
            tNewsRecord.setCreateUser(userId);
            tNewsRecord.setStatus(0);
            tNewsRecord.setReadCount(0L);
            save = true;
        }
        tNewsRecord.setUpdateUser(userId);
        tNewsRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        tNewsRecord.setIndustry(Long.valueOf(tNewsVO.getIndustry()));
        tNewsRecord.setTitle(tNewsVO.getTitle());
        tNewsRecord.setTop("1".equals(tNewsVO.getTop()));
        tNewsRecord.setFlag("1".equals(tNewsVO.getTop()));
        tNewsRecord.setContent(tNewsVO.getContent());

        if (save) {
            this.marketInformationDao.insert(tNewsRecord);
        } else {
            this.marketInformationDao.update(tNewsRecord);
        }
        saveFile(tNewsVO.getAttachments(), tNewsRecord.getId(), userId);
        return new ResultVO<>(0, "可以了");
    }


    public ResultVO<String> delete(List<Long> ids){
        this.marketInformationDao.deleteById(ids);
        this.marketInformationAttachmentDao.deleteByConditions(TMarketInformationAttachment.T_MARKET_INFORMATION_ATTACHMENT.MARKET_INFORMATION_ID.in(ids));
        return new ResultVO<>("删除完成");
    }
}
