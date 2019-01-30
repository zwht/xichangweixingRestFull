package org.poem.qualityDeal;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.common.IDService;
import org.poem.jooq.tables.TQualityDeal;
import org.poem.jooq.tables.TQualityEvent;
import org.poem.jooq.tables.records.TQualityDealRecord;
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
 * 质量处理
 *
 * @author poem
 */
@Service
public class TQualityDealService {


    @Autowired
    private TQualityDealDao tQualityDealDao;


    @Autowired
    private UserDao userDao;

    @Autowired
    private IDService<Long> idService;


    @Autowired
    private SupplierDao supplierDao;


    /**
     * 翻译
     *
     * @param t
     * @return
     */
    private static TQualityDealVO getTSupplierVO(TQualityDealRecord t,
                                                 Map<Long, String> userMap,
                                                 Map<Long, String> supplier) {
        TQualityDealVO tSupplierVO = new TQualityDealVO();
        tSupplierVO.setId(String.valueOf(t.getId()));
        tSupplierVO.setMaterials(t.getMaterials());
        tSupplierVO.setDealEndTime(DateUtils.format(t.getDealEndTime()));
        tSupplierVO.setDealStartTime(String.valueOf(t.getDealStartTime()));
        tSupplierVO.setRemark(t.getRemark());
        tSupplierVO.setSupplierId(String.valueOf(t.getSupplierId()));
        tSupplierVO.setSupplierName(supplier.get(t.getSupplierId()));
        tSupplierVO.setUpdateTime(DateUtils.format(t.getUpdateTime()));
        tSupplierVO.setStatus(String.valueOf(t.getStatus()));
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
    public ResultVO<TQualityDealVO> getById(Long id) {
        TQualityDealRecord tSupplierRecord = this.tQualityDealDao.findById(id);
        if (tSupplierRecord == null) {
            return new ResultVO<>(-1, null, "没记录");
        }
        return new ResultVO<>(getTSupplierVO(tSupplierRecord, userDao.getUseRMap(), supplierDao.getTSupplierMap()));
    }

    /**
     * 添加
     *
     * @param tEquipmentVO
     * @param userId
     * @return
     */
    public ResultVO<String> saveOrUpdate(TQualityDealVO tEquipmentVO, Long userId) {
        TQualityDealRecord record = null;
        boolean save = false;
        if (StringUtils.isNotEmpty(tEquipmentVO.getId())) {
            record = this.tQualityDealDao.findById(Long.valueOf(tEquipmentVO.getId()));
        }
        if (record == null) {
            record = new TQualityDealRecord();
            record.setId(idService.getId());
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setStatus(0);
            record.setFlag(true);
            save = true;
        }
        record.setSupplierId(Long.valueOf(tEquipmentVO.getSupplierId()));
        record.setMaterials(tEquipmentVO.getMaterials());
        record.setDealEndTime(DateUtils.formatTimestamp(tEquipmentVO.getDealEndTime()));
        record.setDealStartTime(DateUtils.formatTimestamp(tEquipmentVO.getDealStartTime()));
        record.setRemark(tEquipmentVO.getRemark());
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        if (save) {
            this.tQualityDealDao.insert(record);
        } else {
            this.tQualityDealDao.update(record);
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
        this.tQualityDealDao.deleteById(ids);
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
    public PageVO<TQualityDealVO> getAllByQuery(TQualityDealQueryVO tQualityNoticeQueryVO, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getSupplierId())) {
            conditions.add(TQualityDeal.T_QUALITY_DEAL.SUPPLIER_ID.eq(Long.valueOf(tQualityNoticeQueryVO.getSupplierId())));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getMaterials())) {
            conditions.add(TQualityDeal.T_QUALITY_DEAL.MATERIALS.like("%" + tQualityNoticeQueryVO.getMaterials() + "%"));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getStatus())) {
            conditions.add(TQualityDeal.T_QUALITY_DEAL.STATUS.eq(Integer.valueOf(tQualityNoticeQueryVO.getStatus())));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getDealTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tQualityNoticeQueryVO.getDealTime() + " 00:00:00");
            conditions.add(TQualityDeal.T_QUALITY_DEAL.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getDealTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tQualityNoticeQueryVO.getDealTime() + " 23:59:59");
            conditions.add(TQualityDeal.T_QUALITY_DEAL.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> list = Arrays.asList(TQualityDeal.T_QUALITY_DEAL.CREATE_TIME.asc(), TQualityDeal.T_QUALITY_DEAL.STATUS.desc());
        PageVO<TQualityDealRecord> tSupplierVOPageVO = this.tQualityDealDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), list);
        Map<Long, String> useMap = userDao.getUseRMap();
        Map<Long, String> stringMap = supplierDao.getTSupplierMap();
        return new PageVO<>(tSupplierVOPageVO.getTotalCount(),
                tSupplierVOPageVO.getPageData().stream().map(r -> {
                    return getTSupplierVO(r, useMap, stringMap);
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
        TQualityDealRecord record = this.tQualityDealDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setFlag(true);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tQualityDealDao.update(record);
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
        TQualityDealRecord record = this.tQualityDealDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setStatus(1);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tQualityDealDao.update(record);
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
        TQualityDealRecord record = this.tQualityDealDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setStatus(0);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        this.tQualityDealDao.update(record);
        return new ResultVO<>("操作完成");
    }
}
