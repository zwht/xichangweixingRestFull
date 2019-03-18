package org.poem.qualityEvent;

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
import org.poem.jooq.tables.TQualityEvent;
import org.poem.jooq.tables.records.TQualityEventRecord;
import org.poem.qualityNotice.TQualityNoticeQueryVO;
import org.poem.supplier.SupplierDao;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 质量事件
 *
 * @author poem
 */
@Service
public class TQualityEventService {

    @Autowired
    private TQualityEventDao tQualityEventDao;
    @Autowired
    private IDService<Long> idService;

    @Autowired
    private UserDao userDao;

    @Autowired
    private TDepartDao tDepartDao;

    @Autowired
    private SupplierDao supplierDao;

    /**
     * 质量问题
     *
     * @param eventLevel
     * @return
     */
    private static String getEventLevelName(String eventLevel) {
        switch (eventLevel) {
            case "1":
                return "质量问题";
            case "2":
                return "质量事件";
            case "3":
                return "质量事故";
            default:
                return "";
        }
    }

    /**
     * 翻译
     *
     * @param t
     * @return
     */
    private static TQualityEventVO getTSupplierVO(TQualityEventRecord t,
                                                  Map<Long, String> userMap,
                                                  Map<Long, String> departMap,
                                                  Map<Long, String> supplier) {
        TQualityEventVO tSupplierVO = new TQualityEventVO();
        tSupplierVO.setId(String.valueOf(t.getId()));
        tSupplierVO.setName(t.getName());
        tSupplierVO.setTop(String.valueOf(t.getTop()));
        tSupplierVO.setEventLevel(String.valueOf(t.getEventLevel()));
        tSupplierVO.setEventLevelName(getEventLevelName(tSupplierVO.getEventLevel()));
        tSupplierVO.setMaterials(t.getMaterials());
        tSupplierVO.setOccurrenceTime(DateUtils.format(t.getOccurrenceTime()));
        tSupplierVO.setDepartId(String.valueOf(t.getDepartId()));
        tSupplierVO.setDepartName(departMap.get(t.getDepartId()));
        tSupplierVO.setRemark(t.getRemark());
        tSupplierVO.setFileUrl(t.getFileUrl());
        tSupplierVO.setHandle(t.getHandle());
        tSupplierVO.setTop(String.valueOf(t.getTop()));
        tSupplierVO.setSupplierId(String.valueOf(t.getSupplierId()));
        tSupplierVO.setSupplierName(supplier.get(t.getSupplierId()));
        tSupplierVO.setUpdateTime(DateUtils.format(t.getUpdateTime()));
        tSupplierVO.setStatus(String.valueOf(t.getStatus()));
        tSupplierVO.setFlag(String.valueOf(t.getFlag()));
        tSupplierVO.setCreateTime(DateUtils.format(t.getCreateTime()));
        tSupplierVO.setUpdateUser(userMap.get(t.getUpdateUser()));
        tSupplierVO.setCreateUser(userMap.get(t.getCreateUser()));
        return tSupplierVO;
    }


    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public ResultVO<TQualityEventVO> getById(Long id) {
        TQualityEventRecord tSupplierRecord = this.tQualityEventDao.findById(id);
        if (tSupplierRecord == null) {
            return new ResultVO<>(-1, null, "没记录");
        }
        return new ResultVO<>(getTSupplierVO(tSupplierRecord, userDao.getUseRMap(), tDepartDao.getDepartMap(), supplierDao.getTSupplierMap()));
    }

    /**
     * 添加
     *
     * @param tEquipmentVO
     * @param userId
     * @return
     */
    public ResultVO<String> saveOrUpdate(TQualityEventVO tEquipmentVO, Long userId) {
        TQualityEventRecord record = null;
        boolean save = false;
        if (StringUtils.isNotEmpty(tEquipmentVO.getId())) {
            record = this.tQualityEventDao.findById(Long.valueOf(tEquipmentVO.getId()));
        }
        if (record == null) {
            record = new TQualityEventRecord();
            record.setId(idService.getId());
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateUser(userId);
            record.setStatus(0);
            record.setHandle("1");
            record.setFlag(false);
            record.setTop(false);
            save = true;
        }
        record.setEventLevel(Long.valueOf(tEquipmentVO.getEventLevel()));
        record.setSupplierId(Long.valueOf(tEquipmentVO.getSupplierId()));
        record.setMaterials(tEquipmentVO.getMaterials());
        record.setOccurrenceTime(DateUtils.formatTimestamp(tEquipmentVO.getOccurrenceTime()));
        record.setName(tEquipmentVO.getName());
        record.setFileUrl(tEquipmentVO.getFileUrl());
        record.setHandle(tEquipmentVO.getHandle());
        record.setRemark(tEquipmentVO.getRemark());
        record.setStatus(StringUtils.isEmpty(tEquipmentVO.getStatus()) ? 0 : Integer.valueOf(tEquipmentVO.getStatus()));
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        if (save) {
            this.tQualityEventDao.insert(record);
        } else {
            this.tQualityEventDao.update(record);
        }
        return new ResultVO<>("完成");
    }

    /**
     * 删除
     *
     * @param ids
     * @return
     */
    public ResultVO<String> deleteByIDs(List<Long> ids) {
        this.tQualityEventDao.deleteById(ids);
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
    public PageVO<TQualityEventVO> getAllByQuery(TQualityEventQueryVO tQualityNoticeQueryVO, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getName())) {
            conditions.add(TQualityEvent.T_QUALITY_EVENT.NAME.like("%" + tQualityNoticeQueryVO.getName() + "%"));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getEventLevel())) {
            conditions.add(TQualityEvent.T_QUALITY_EVENT.EVENT_LEVEL.eq(Long.valueOf(tQualityNoticeQueryVO.getEventLevel())));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getSupplierId())) {
            conditions.add(TQualityEvent.T_QUALITY_EVENT.SUPPLIER_ID.eq(Long.valueOf(tQualityNoticeQueryVO.getSupplierId())));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getOccurrenceTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tQualityNoticeQueryVO.getOccurrenceTime() + " 00:00:00");
            conditions.add(TQualityEvent.T_QUALITY_EVENT.OCCURRENCE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getOccurrenceTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tQualityNoticeQueryVO.getOccurrenceTime() + " 23:59:59");
            conditions.add(TQualityEvent.T_QUALITY_EVENT.OCCURRENCE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> list = Arrays.asList(TQualityEvent.T_QUALITY_EVENT.FLAG.desc(),TQualityEvent.T_QUALITY_EVENT.UPDATE_TIME.desc(), TQualityEvent.T_QUALITY_EVENT.STATUS.desc());
        PageVO<TQualityEventRecord> tSupplierVOPageVO = this.tQualityEventDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), list);
        Map<Long, String> useMap = userDao.getUseRMap();
        Map<Long, String> departMap = tDepartDao.getDepartMap();
        Map<Long, String> stringMap = supplierDao.getTSupplierMap();
        return new PageVO<>(tSupplierVOPageVO.getTotalCount(),
                tSupplierVOPageVO.getPageData().stream().map(r -> {
                    return getTSupplierVO(r, useMap, departMap, stringMap);
                }).collect(Collectors.toList())
        );

    }

    public ResultVO<String> hdSet(Long id, Long userId, String key) {
        TQualityEventRecord record = this.tQualityEventDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setHandle(key);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tQualityEventDao.update(record);
        return new ResultVO<>("操作完成");
    }
    /**
     * 置顶
     *
     * @param id
     * @param userId
     * @return
     */
    public ResultVO<String> top(Long id, Long userId) {
        TQualityEventRecord record = this.tQualityEventDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setFlag(true);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tQualityEventDao.update(record);
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
        TQualityEventRecord record = this.tQualityEventDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setStatus(1);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tQualityEventDao.update(record);
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
        TQualityEventRecord record = this.tQualityEventDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setStatus(0);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tQualityEventDao.update(record);
        return new ResultVO<>("操作完成");
    }

}
