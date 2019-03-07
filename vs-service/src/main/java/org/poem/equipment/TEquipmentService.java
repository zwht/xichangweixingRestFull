package org.poem.equipment;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.apache.commons.collections.CollectionUtils;
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
import org.poem.equipment.vo.EquipmentDataContainer;
import org.poem.equipment.vo.TEquipmentExportVO;
import org.poem.equipment.vo.TEquipmentImportVO;
import org.poem.equiptype.TEquipTypeDao;
import org.poem.jooq.tables.TEquipment;
import org.poem.jooq.tables.TSupplier;
import org.poem.jooq.tables.records.TEquipmentRecord;
import org.poem.jooq.tables.records.TSupplierRecord;
import org.poem.supplier.SupplierDao;
import org.poem.supplier.TSupplierService;
import org.poem.supplier.TSupplierVO;
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
    private TEquipTypeService tEquipTypeService;

    @Autowired
    private TSupplierService tSupplierService;

    @Autowired
    private TEquipTypeDao tEquipTypeDao;

    @Autowired
    private SupplierDao supplierDao;


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
        t.setLeadingPerson(tEquipmentRecord.getLeadingPserson());
        t.setManufactureDate(DateUtils.format(tEquipmentRecord.getManufactureDate()));
        t.setValidity(DateUtils.format(tEquipmentRecord.getValidity()));
        t.setSupplierId(String.valueOf(tEquipmentRecord.getSupplierId()));
        t.setSupplierName(supplierMap.get(t.getSupplierId()));
        t.setImages(String.valueOf(tEquipmentRecord.getImages()));
        t.setRemark(tEquipmentRecord.getRemark());
        t.setModel(tEquipmentRecord.getModel());
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
            conditions.add(TEquipment.T_EQUIPMENT.EQUIP_TYPE.eq(tEquipmentQuery.getEquipType()));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getSupplierName())) {
            List<TSupplierRecord> records = supplierDao.findByCondition(TSupplier.T_SUPPLIER.NAME.like("%" + tEquipmentQuery.getSupplierName() + "%"));
            List<Long> ids = records.stream().map(TSupplierRecord::getId).collect(Collectors.toList());
            conditions.add(TEquipment.T_EQUIPMENT.SUPPLIER_ID.in(ids));
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
        record.setEquipType(tEquipmentVO.getEquipType());
        record.setFormat(tEquipmentVO.getFormat());
        record.setPackageFormat(tEquipmentVO.getPackageFormat());
        record.setMeasurement(tEquipmentVO.getMeasurement());
        record.setStandard(tEquipmentVO.getStandard());
        record.setLeadingPserson(tEquipmentVO.getLeadingPerson());
        record.setManufactureDate(DateUtils.formatTimestamp(tEquipmentVO.getManufactureDate()));
        if(StringUtils.isNotEmpty(tEquipmentVO.getValidity())){
            record.setValidity(DateUtils.formatTimestamp(tEquipmentVO.getValidity()));
        }
        if(StringUtils.isNotEmpty(tEquipmentVO.getSupplierId())){
            record.setSupplierId(Long.valueOf(tEquipmentVO.getSupplierId()));
        }
        record.setImages(tEquipmentVO.getImages());
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        record.setModel(tEquipmentVO.getModel());
        record.setRemark(tEquipmentVO.getRemark());
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

    /**
     * 初始化数据
     *
     * @return
     */
    private EquipmentDataContainer intData() {
        EquipmentDataContainer container = new EquipmentDataContainer();
        Map<Long, String> supplierMap = supplierDao.getTSupplierMap();
        //Map<Long, String> equipTypeMap = tEquipTypeDao.getTEquipTypeMap();

        Map<String, Long> supplierMap_ = Maps.newHashMap();
        Map<String, Long> equipTypeMap_ = Maps.newHashMap();

        supplierMap.forEach((k, v) -> {
            supplierMap_.put(v, k);
        });

//        equipTypeMap.forEach((k, v) -> {
//            equipTypeMap_.put(v, k);
//        });
        container.setEquipTypeMap(equipTypeMap_);
        container.setSupplierMap(supplierMap_);
        return container;
    }


    /**
     * 倒入数据
     *
     * @param data
     * @param userId
     */
    public List<String> importData(List<JSONObject> data, Long userId) {
        List<String> strings = Lists.newArrayList();
        EquipmentDataContainer container = intData();
        List<TEquipmentRecord> records = Lists.newArrayList();
        for (JSONObject datum : data) {
            //设备类型
            List<String> message = Lists.newArrayList();
            TEquipmentRecord record = new TEquipmentRecord();
            record.setId(idService.getId());
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setStatus(0);
            record.setFlag(true);
            record.setName(datum.getString("name"));
            record.setLeadingPserson(datum.getString("leadingPerson"));
            record.setCode(datum.getString("code"));
            record.setFormat(datum.getString("format"));
            record.setPackageFormat(datum.getString("packageFormat"));
            record.setMeasurement(datum.getString("measurement"));
            record.setStandard(datum.getString("standard"));
            record.setModel(datum.getString("model"));
            record.setManufactureDate(DateUtils.formatTimestamp(datum.getString("manufactureDate")));
            record.setValidity(DateUtils.formatTimestamp(datum.getString("validity")));
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateUser(userId);
            record.setEquipType(datum.getString("equipTypeName"));

            if (container.getSupplierMap().get(datum.getString("supplierName")) == null) {
                message.add("供应商 [" + datum.getString("supplierName") + " ]不存在");
            }else {
                record.setSupplierId(container.getSupplierMap().get(datum.getString("supplierName")));
            }
            if (CollectionUtils.isEmpty(message)) {
                records.add(record);
            } else {
                strings.addAll(message);
            }
        }
        if (CollectionUtils.isNotEmpty(records) && CollectionUtils.isEmpty(strings)) {
            this.tEquipmentDao.insert(records);
        }
        return strings;
    }

    /**
     * @return
     */
    private static TEquipmentExportVO getTEquipmentExportVO(TEquipmentRecord tEquipmentRecord,
                                                            Map<String, String> tEquipTypeMap,
                                                            Map<String, String> supplierMap) {
        TEquipmentExportVO t = new TEquipmentExportVO();
        t.setCode(tEquipmentRecord.getCode());
        t.setName(tEquipmentRecord.getName());
        t.setLeadingPerson(tEquipmentRecord.getLeadingPserson());
        t.setEquipTypeName(tEquipTypeMap.get(String.valueOf(tEquipmentRecord.getEquipType())));
        t.setFormat(tEquipmentRecord.getFormat());
        t.setPackageFormat(tEquipmentRecord.getPackageFormat());
        t.setMeasurement(tEquipmentRecord.getMeasurement());
        t.setStandard(tEquipmentRecord.getStandard());
        t.setModel(tEquipmentRecord.getModel());
        t.setMeasurement(DateUtils.format(tEquipmentRecord.getManufactureDate()));
        t.setValidity(DateUtils.format(tEquipmentRecord.getValidity()));
        t.setSupplierName(supplierMap.get(String.valueOf(tEquipmentRecord.getSupplierId())));
        t.setRemark(tEquipmentRecord.getRemark());
        return t;
    }


    /**
     * 根据条件导出数据
     *
     * @param tEquipmentQuery
     * @return
     */
    public List<TEquipmentExportVO> exportByCondition(TEquipmentQuery tEquipmentQuery) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tEquipmentQuery.getName())) {
            conditions.add(TEquipment.T_EQUIPMENT.NAME.like("%" + tEquipmentQuery.getName() + "%"));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getStatus())) {
            conditions.add(TEquipment.T_EQUIPMENT.STATUS.eq(Integer.valueOf(tEquipmentQuery.getStatus())));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getEquipType())) {
            conditions.add(TEquipment.T_EQUIPMENT.EQUIP_TYPE.eq(tEquipmentQuery.getEquipType()));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getLeadingPerson())){
            conditions.add(TEquipment.T_EQUIPMENT.LEADING_PSERSON.like("%" + tEquipmentQuery.getLeadingPerson() + "%"));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getSupplierName())) {
            List<TSupplierRecord> records = supplierDao.findByCondition(TSupplier.T_SUPPLIER.NAME.like("%" + tEquipmentQuery.getSupplierName() + "%"));
            List<Long> ids = records.stream().map(TSupplierRecord::getId).collect(Collectors.toList());
            conditions.add(TEquipment.T_EQUIPMENT.SUPPLIER_ID.in(ids));
        }
        List<SortField<?>> fields = Lists.newArrayList();
        fields.add(TEquipment.T_EQUIPMENT.STATUS.asc());
        fields.add(TEquipment.T_EQUIPMENT.CREATE_TIME.desc());
        PageVO<TEquipmentRecord> tEquipmentPageVO = this.tEquipmentDao.fetchByPage(conditions, new OffsetPagingVO(1, Integer.MAX_VALUE), fields);
        PageVO<TEquipmentVO> equipmentVOPageVO = new PageVO<>();
        equipmentVOPageVO.setTotalCount(tEquipmentPageVO.getTotalCount());
        Map<String, String> tEquipTypeMap = tEquipTypeMap();
        Map<String, String> supplierName = getSupplierName();
        return tEquipmentPageVO.getPageData().stream().map(
                r -> {
                    return getTEquipmentExportVO(r, tEquipTypeMap, supplierName);
                }
        ).collect(Collectors.toList());
    }

    /**
     * 根据id导出
     *
     * @param ids
     * @return
     */
    public List<TEquipmentExportVO> exportByIds(List<Long> ids) {
        List<TEquipmentRecord> records = this.tEquipmentDao.findByCondition(TEquipment.T_EQUIPMENT.ID.in(ids));
        Map<String, String> tEquipTypeMap = tEquipTypeMap();
        Map<String, String> supplierName = getSupplierName();
        return records.stream().map(r -> {
                    return getTEquipmentExportVO(r, tEquipTypeMap, supplierName);
                }
        ).collect(Collectors.toList());
    }
}
