package org.poem.equipment;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.common.IDService;
import org.poem.equipType.TEquipTypeService;
import org.poem.equipType.TEquipTypeVO;
import org.poem.jooq.tables.TEquipment;
import org.poem.jooq.tables.records.TEquipmentRecord;
import org.poem.supplier.TSupplierService;
import org.poem.supplier.TSupplierVO;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 新闻
 *
 * @author poem
 */
@Service
public class TEquipmentService {


    @Autowired
    private TEquipmentDao tEquipmentDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private UserDao userDao;

    @Autowired
    private TEquipTypeService tEquipTypeService;

    @Autowired
    private TSupplierService tSupplierService;


    /**
     * 翻译
     *
     * @param tEquipmentRecord
     * @return
     */
    private static TEquipmentVO getTEquipmentVO(TEquipmentRecord tEquipmentRecord,
                                                Map<String, String> tEquipTypeMap,
                                                Map<String, String> supplierMap) {
        TEquipmentVO t = new TEquipmentVO();
        t.setId(String.valueOf(tEquipmentRecord.getId()));
        t.setCode(tEquipmentRecord.getCode());
        t.setName(tEquipmentRecord.getName());
        t.setEquipType(String.valueOf(tEquipmentRecord.getEquipType()));
        t.setEquipTypeName(tEquipTypeMap.get(t.getEquipType()));
        t.setFormat(tEquipmentRecord.getFormat());
        t.setPackageFormat(tEquipmentRecord.getPackageFormat());
        t.setMeasurement(tEquipmentRecord.getMeasurement());
        t.setStandard(tEquipmentRecord.getStandard());
        t.setMeasurement(DateUtils.format(tEquipmentRecord.getManufactureDate()));
        t.setValidity(DateUtils.format(tEquipmentRecord.getValidity()));
        t.setSupplierId(String.valueOf(tEquipmentRecord.getSupplierId()));
        t.setSupplierName(supplierMap.get(t.getSupplierId()));
        t.setImages(String.valueOf(tEquipmentRecord.getImages()));
        t.setRemark(tEquipmentRecord.getRemark());
        t.setStatus(String.valueOf(tEquipmentRecord.getStatus()));
        t.setCreateTime(DateUtils.format(tEquipmentRecord.getCreateTime()));
        t.setUpdateTime(DateUtils.format(tEquipmentRecord.getUpdateTime()));
        return t;
    }

    /**
     * 获取参数
     *
     * @return
     */
    private Map<String, String> tEquipTypeMap() {
        Map<String, String> tEquipTypeMap = Maps.newHashMap();
        List<TEquipTypeVO> vos = this.tEquipTypeService.getAll();
        for (TEquipTypeVO vo : vos) {
            tEquipTypeMap.put(vo.getId(), vo.getName());
        }
        return tEquipTypeMap;
    }

    /**
     * 供应商
     *
     * @return
     */
    private Map<String, String> getSupplierName() {
        List<TSupplierVO> tSupplierVOS = tSupplierService.getAll();
        Map<String, String> map = Maps.newHashMap();
        for (TSupplierVO tSupplierVO : tSupplierVOS) {
            map.put(tSupplierVO.getId(), tSupplierVO.getName());
        }
        return map;
    }

    /**
     * 查询
     *
     * @param tEquipmentQuery
     * @param pageSize
     * @param pageNumber
     * @return
     */
    public PageVO<TEquipmentVO> getAllByQuery(TEquipmentQuery tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tEquipmentQuery.getName())) {
            conditions.add(TEquipment.T_EQUIPMENT.NAME.like("%" + tEquipmentQuery.getName() + "%"));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getStatus())) {
            conditions.add(TEquipment.T_EQUIPMENT.STATUS.eq(Integer.valueOf(tEquipmentQuery.getStatus())));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getEquipType())) {
            conditions.add(TEquipment.T_EQUIPMENT.EQUIP_TYPE.eq(Long.valueOf(tEquipmentQuery.getEquipType())));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getSupplierId())) {
            conditions.add(TEquipment.T_EQUIPMENT.SUPPLIER_ID.eq(Long.valueOf(tEquipmentQuery.getSupplierId())));
        }
        List<SortField<?>> fields = Lists.newArrayList();
        fields.add(TEquipment.T_EQUIPMENT.STATUS.asc());
        fields.add(TEquipment.T_EQUIPMENT.CREATE_TIME.desc());
        PageVO<TEquipmentRecord> tEquipmentPageVO = this.tEquipmentDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), fields);
        PageVO<TEquipmentVO> equipmentVOPageVO = new PageVO<>();
        equipmentVOPageVO.setTotalCount(tEquipmentPageVO.getTotalCount());
        Map<String, String> tEquipTypeMap = tEquipTypeMap();
        Map<String, String> supplierName = getSupplierName();
        List<TEquipmentVO> tEquipmentVOS = tEquipmentPageVO.getPageData().stream().map(
                r -> {
                    return getTEquipmentVO(r, tEquipTypeMap, supplierName);
                }
        ).collect(Collectors.toList());
        equipmentVOPageVO.setPageData(tEquipmentVOS);
        return equipmentVOPageVO;
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public ResultVO<TEquipmentVO> getById(Long id) {
        Map<String, String> tEquipTypeMap = tEquipTypeMap();
        Map<String, String> supplierName = getSupplierName();
        TEquipmentRecord record = this.tEquipmentDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, null, "没数据");
        }
        return new ResultVO<>(getTEquipmentVO(record, tEquipTypeMap, supplierName));
    }

    /**
     * 添加
     *
     * @param tEquipmentVO
     * @param userId
     * @return
     */
    public ResultVO<String> saveOrUpdate(TEquipmentVO tEquipmentVO, Long userId) {
        TEquipmentRecord record = null;
        boolean save = false;
        if (StringUtils.isNotEmpty(tEquipmentVO.getId())) {
            record = this.tEquipmentDao.findById(Long.valueOf(tEquipmentVO.getId()));
        }
        if (record == null) {
            record = new TEquipmentRecord();
            record.setId(idService.getId());
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setStatus(0);
            record.setFlag(true);
            save = true;
        }
        record.setName(tEquipmentVO.getName());
        record.setCode(tEquipmentVO.getCode());
        record.setEquipType(Long.valueOf(tEquipmentVO.getEquipType()));
        record.setFormat(tEquipmentVO.getFormat());
        record.setPackageFormat(tEquipmentVO.getPackageFormat());
        record.setMeasurement(tEquipmentVO.getMeasurement());
        record.setStandard(tEquipmentVO.getStandard());
        record.setManufactureDate(DateUtils.formatTimestamp(tEquipmentVO.getManufactureDate()));
        record.setValidity(DateUtils.formatTimestamp(tEquipmentVO.getValidity()));
        record.setSupplierId(Long.valueOf(tEquipmentVO.getSupplierId()));
        record.setImages(Long.valueOf(tEquipmentVO.getImages()));
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        if (save) {
            this.tEquipmentDao.insert(record);
        } else {
            this.tEquipmentDao.update(record);
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
        this.tEquipmentDao.deleteById(ids);
        return new ResultVO<>("完成");
    }

}
