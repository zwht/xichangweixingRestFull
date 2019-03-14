package org.poem.supplier;

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
import org.poem.common.CommonVO;
import org.poem.common.IDService;
import org.poem.division.AdminDivisionDao;
import org.poem.jooq.tables.CAdminDivision;
import org.poem.jooq.tables.TSupplier;
import org.poem.jooq.tables.records.CAdminDivisionRecord;
import org.poem.jooq.tables.records.TSupplierRecord;
import org.poem.supplier.vo.TSupplierDataContainerVO;
import org.poem.supplier.vo.TSupplierExportVO;
import org.poem.supplier.vo.TSupplierImportVO;
import org.poem.suppliertype.SupplierTypeService;
import org.poem.tenderOrgation.vo.TenderOrgationContainerVO;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 供应商
 *
 * @author poem
 */
@Service
public class TSupplierService {


    @Autowired
    private SupplierDao supplierDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private UserDao userDao;

    @Autowired
    private AdminDivisionDao divisionDao;

    @Autowired
    private SupplierTypeService supplierTypeService;


    /**
     * 翻译
     *
     * @param t
     * @return
     */
    private static TSupplierVO getTSupplierVO(TSupplierRecord t, Map<Long, String> tSupplierType) {
        TSupplierVO tSupplierVO = new TSupplierVO();
        tSupplierVO.setId(String.valueOf(t.getId()));
        tSupplierVO.setName(t.getName());
        tSupplierVO.setType(String.valueOf(t.getType()));
        tSupplierVO.setTypeName(tSupplierType.get(t.getType()));
        tSupplierVO.setRegion(String.valueOf(t.getRegion()));
        tSupplierVO.setAddress(t.getAddress());
        tSupplierVO.setSocialCreditCode(t.getSocialCreditCode());
        tSupplierVO.setRegistDate(DateUtils.format(t.getRegistDate()));
        tSupplierVO.setLegalPerson(t.getLegalPerson());
        tSupplierVO.setLegalPersonName(t.getLegalPersonName());
        tSupplierVO.setContactsUseIdnum(t.getContactsUseIdnum());
        tSupplierVO.setContactsUserName(t.getContactsUserName());
        tSupplierVO.setPhone(t.getPhone());
        tSupplierVO.setLogo(String.valueOf(t.getLogo()));
        tSupplierVO.setStatus(String.valueOf(t.getStatus()));
        return tSupplierVO;
    }

    /**
     * @return
     */
    private Map<Long, String> type() {
        List<CommonVO> commonVOS = supplierTypeService.getAll();
        Map<Long, String> map = Maps.newHashMap();
        for (CommonVO commonVO : commonVOS) {
            map.put(commonVO.getId(), commonVO.getName());
        }
        return map;
    }

    /**
     * 获取全部
     *
     * @return
     */
    public List<TSupplierVO> getAll() {
        List<TSupplierRecord> records = this.supplierDao.findByCondition(TSupplier.T_SUPPLIER.ID.isNotNull());
        Map<Long, String> m = type();
        return records.stream().map(r -> getTSupplierVO(r, m)).collect(Collectors.toList());
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public ResultVO<TSupplierVO> getById(Long id) {
        TSupplierRecord tSupplierRecord = this.supplierDao.findById(id);
        if (tSupplierRecord == null) {
            return new ResultVO<>(-1, null, "没记录");
        }
        return new ResultVO<>(getTSupplierVO(tSupplierRecord, type()));
    }

    /**
     * 添加
     *
     * @param tEquipmentVO
     * @param userId
     * @return
     */
    public ResultVO<String> saveOrUpdate(TSupplierVO tEquipmentVO, Long userId) {
        TSupplierRecord record = null;
        boolean save = false;
        if (StringUtils.isNotEmpty(tEquipmentVO.getId())) {
            record = this.supplierDao.findById(Long.valueOf(tEquipmentVO.getId()));
        }
        if (record == null) {
            record = new TSupplierRecord();
            record.setId(idService.getId());
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateUser(userId);
            record.setStatus(0);
            record.setFlag(true);
            save = true;
        }
        record.setName(tEquipmentVO.getName());
        record.setAddress(tEquipmentVO.getAddress());
        record.setType(Long.valueOf(tEquipmentVO.getType()));
        record.setRegion(tEquipmentVO.getRegion());
        record.setSocialCreditCode(tEquipmentVO.getSocialCreditCode());
        record.setRegistDate(DateUtils.formatTimestamp(tEquipmentVO.getRegistDate()));
        record.setLegalPerson(tEquipmentVO.getLegalPerson());
        record.setLegalPersonName(tEquipmentVO.getLegalPersonName());
        record.setContactsUseIdnum(tEquipmentVO.getContactsUseIdnum());
        record.setContactsUserName(tEquipmentVO.getContactsUserName());
        record.setPhone(tEquipmentVO.getPhone());
        record.setLogo(tEquipmentVO.getLogo());
        record.setRemark(tEquipmentVO.getRemark());
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        if (save) {
            this.supplierDao.insert(record);
        } else {
            this.supplierDao.update(record);
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
        this.supplierDao.deleteById(ids);
        return new ResultVO<>("完成");
    }

    /**
     * 查询
     *
     * @param tEquipmentQuery
     * @param pageSize
     * @param pageNumber
     * @return
     */
    public PageVO<TSupplierVO> getAllByQuery(TSupplierQueryVO tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tEquipmentQuery.getName())) {
            conditions.add(TSupplier.T_SUPPLIER.NAME.like("%" + tEquipmentQuery.getName() + "%"));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getStatus())) {
            conditions.add(TSupplier.T_SUPPLIER.STATUS.eq(Integer.valueOf(tEquipmentQuery.getStatus())));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getType())) {
            conditions.add(TSupplier.T_SUPPLIER.TYPE.eq(Long.valueOf(tEquipmentQuery.getType())));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getRegion())) {
            conditions.add(TSupplier.T_SUPPLIER.REGION.eq(tEquipmentQuery.getRegion()));
        }
        List<SortField<?>> list = Arrays.asList(TSupplier.T_SUPPLIER.UPDATE_TIME.desc(), TSupplier.T_SUPPLIER.STATUS.desc());
        PageVO<TSupplierRecord> tSupplierVOPageVO = this.supplierDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), list);
        Map<Long, String> type = type();
        return new PageVO<>(tSupplierVOPageVO.getTotalCount(),
                tSupplierVOPageVO.getPageData().stream().map(r -> {
                    return getTSupplierVO(r, type);
                }).collect(Collectors.toList())
        );

    }

    /**
     * 类型
     *
     * @return
     */
    private TSupplierDataContainerVO getTSupplierDataContainerVO() {
        TSupplierDataContainerVO vo = new TSupplierDataContainerVO();
        Map<String, Long> maps = Maps.newHashMap();
        List<CommonVO> commonVOS = supplierTypeService.getAll();
        for (CommonVO commonVO : commonVOS) {
            maps.put(commonVO.getName(), commonVO.getId());
        }
        vo.setTypeMap(maps);
        return vo;
    }

    /**
     * 数据验证
     *
     * @param data
     * @param userId
     * @return
     */
    public List<String> importData(List<JSONObject> data, Long userId) {
        List<String> strings = Lists.newArrayList();
        TSupplierDataContainerVO vo = getTSupplierDataContainerVO();
        List<String> message = Lists.newArrayList();
        List<TSupplierRecord> records = Lists.newArrayList();
        for (JSONObject datum : data) {
            TSupplierRecord record = new TSupplierRecord();
            record.setId(idService.getId());
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setStatus(0);
            record.setFlag(true);
            record.setName(datum.getString("name"));
            record.setAddress(datum.getString("address"));
            record.setSocialCreditCode(datum.getString("socialCreditCode"));
            record.setRegistDate(DateUtils.formatTimestamp(datum.getString("registDate")));
            record.setLegalPerson(datum.getString("legalPerson"));
            record.setLegalPersonName(datum.getString("legalPersonName"));
            record.setContactsUseIdnum(datum.getString("contactsUseIdnum"));
            record.setContactsUserName(datum.getString("contactsUserName"));
            record.setPhone(datum.getString("phone"));
            record.setRemark(datum.getString("remark"));
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateUser(userId);

            record.setRegion(datum.getString("region"));
            if (vo.getTypeMap().containsKey(datum.getString("typeName"))){
                record.setType(vo.getTypeMap().get(datum.getString("typeName")));
            }else{
                message.add(datum.getString("typeName") + "在系统中不存在。");
            }
            if (CollectionUtils.isEmpty(message)) {
                records.add(record);
            } else {
                strings.addAll(message);
            }
        }

        if (CollectionUtils.isNotEmpty(records) && CollectionUtils.isEmpty(strings)) {
            this.supplierDao.insert(records);
        }
        return strings;
    }

    /**
     * SHUJU
     * @param t
     * @param tSupplierType
     * @return
     */
    private static TSupplierExportVO getTSupplierExportVO(TSupplierRecord t, Map<Long, String> tSupplierType) {
        TSupplierExportVO tSupplierVO = new TSupplierExportVO();
        tSupplierVO.setName(t.getName());
        tSupplierVO.setTypeName(tSupplierType.get(t.getType()));
        tSupplierVO.setRegion(String.valueOf(t.getRegion()));
        tSupplierVO.setAddress(t.getAddress());
        tSupplierVO.setSocialCreditCode(t.getSocialCreditCode());
        tSupplierVO.setRegistDate(DateUtils.format(t.getRegistDate()));
        tSupplierVO.setLegalPerson(t.getLegalPerson());
        tSupplierVO.setLegalPersonName(t.getLegalPersonName());
        tSupplierVO.setContactsUseIdnum(t.getContactsUseIdnum());
        tSupplierVO.setContactsUserName(t.getContactsUserName());
        tSupplierVO.setPhone(t.getPhone());
        return tSupplierVO;
    }

    /**
     * 条件导出
     * @param tEquipmentQuery
     * @return
     */
    public List<TSupplierExportVO> exportByCondition(TSupplierQueryVO tEquipmentQuery){
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tEquipmentQuery.getName())) {
            conditions.add(TSupplier.T_SUPPLIER.NAME.like("%" + tEquipmentQuery.getName() + "%"));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getStatus())) {
            conditions.add(TSupplier.T_SUPPLIER.STATUS.eq(Integer.valueOf(tEquipmentQuery.getStatus())));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getType())) {
            conditions.add(TSupplier.T_SUPPLIER.TYPE.eq(Long.valueOf(tEquipmentQuery.getType())));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getRegion())) {
            conditions.add(TSupplier.T_SUPPLIER.REGION.eq(tEquipmentQuery.getRegion()));
        }
        List<SortField<?>> list = Arrays.asList(TSupplier.T_SUPPLIER.CREATE_TIME.asc(), TSupplier.T_SUPPLIER.STATUS.desc());
        PageVO<TSupplierRecord> tSupplierVOPageVO = this.supplierDao.fetchByPage(conditions, new OffsetPagingVO(1, Integer.MAX_VALUE), list);
        Map<Long, String> type = type();
        return tSupplierVOPageVO.getPageData().stream().map(
                r -> {
                    return getTSupplierExportVO(r, type);
                }).collect(Collectors.toList());
    }


    /**
     * 按照id导出
     * @param ids
     * @return
     */
    public List<TSupplierExportVO> exportById(List<Long> ids){
        List<TSupplierRecord> records = this.supplierDao.findByCondition(TSupplier.T_SUPPLIER.ID.in(ids));
        Map<Long, String> type = type();
        return records.stream().map(
                r -> {
                    return getTSupplierExportVO(r, type);
                }).collect(Collectors.toList());
    }

}
