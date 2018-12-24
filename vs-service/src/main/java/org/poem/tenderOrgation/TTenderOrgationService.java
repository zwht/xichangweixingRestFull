package org.poem.tenderOrgation;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.common.IDService;
import org.poem.jooq.tables.TTenderOrgation;
import org.poem.jooq.tables.records.TTenderOrgationRecord;
import org.poem.suppliertype.SupplierTypeService;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 投标机构
 *
 * @author poem
 */
@Service
public class TTenderOrgationService {
    @Autowired
    private TTenderOrgationDao tTenderOrgationDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private UserDao userDao;

    @Autowired
    private SupplierTypeService supplierTypeService;


    /**
     * 翻译
     *
     * @param t
     * @return
     */
    private static TTenderOrgationVO getTSupplierVO(TTenderOrgationRecord t) {
        TTenderOrgationVO tSupplierVO = new TTenderOrgationVO();
        tSupplierVO.setId(String.valueOf(t.getId()));
        tSupplierVO.setName(t.getName());
        tSupplierVO.setCode(String.valueOf(t.getCode()));
        tSupplierVO.setRegion(t.getRegion());
        tSupplierVO.setAddress(t.getAddress());
        tSupplierVO.setSocialCreditCode(t.getSocialCreditCode());
        tSupplierVO.setRegistDate(DateUtils.format(t.getRegistDate()));
        tSupplierVO.setLegalPerson(t.getLegalPerson());
        tSupplierVO.setLegalPersonName(t.getLegalPersonName());
        tSupplierVO.setContactsUseIdnum(t.getContactsUseIdnum());
        tSupplierVO.setContactsUserName(t.getContactsUserName());
        tSupplierVO.setPhone(t.getPhone());
        tSupplierVO.setStatus(String.valueOf(t.getStatus()));
        tSupplierVO.setGrade(String.valueOf(t.getGrade()));
        return tSupplierVO;
    }


    /**
     * 获取全部
     *
     * @return
     */
    public List<TTenderOrgationVO> getAll() {
        List<TTenderOrgationRecord> records = this.tTenderOrgationDao.findByCondition(TTenderOrgation.T_TENDER_ORGATION.ID.isNotNull());
        return records.stream().map(r -> getTSupplierVO(r)).collect(Collectors.toList());
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public ResultVO<TTenderOrgationVO> getById(Long id) {
        TTenderOrgationRecord tSupplierRecord = this.tTenderOrgationDao.findById(id);
        if (tSupplierRecord == null) {
            return new ResultVO<>(-1, null, "没记录");
        }
        return new ResultVO<>(getTSupplierVO(tSupplierRecord));
    }

    /**
     * 添加
     *
     * @param tEquipmentVO
     * @param userId
     * @return
     */
    public ResultVO<String> saveOrUpdate(TTenderOrgationVO tEquipmentVO, Long userId) {
        TTenderOrgationRecord record = null;
        boolean save = false;
        if (StringUtils.isNotEmpty(tEquipmentVO.getId())) {
            record = this.tTenderOrgationDao.findById(Long.valueOf(tEquipmentVO.getId()));
        }
        if (record == null) {
            record = new TTenderOrgationRecord();
            record.setId(idService.getId());
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setStatus(0);
            record.setFlag(true);
            save = true;
        }
        record.setCode(tEquipmentVO.getCode());
        record.setName(tEquipmentVO.getName());
        record.setAddress(tEquipmentVO.getAddress());
        record.setRegion(tEquipmentVO.getRegion());
        record.setSocialCreditCode(tEquipmentVO.getSocialCreditCode());
        record.setRegistDate(DateUtils.formatTimestamp(tEquipmentVO.getRegistDate()));
        record.setLegalPerson(tEquipmentVO.getLegalPerson());
        record.setLegalPersonName(tEquipmentVO.getLegalPersonName());
        record.setContactsUseIdnum(tEquipmentVO.getContactsUseIdnum());
        record.setContactsUserName(tEquipmentVO.getContactsUserName());
        record.setPhone(tEquipmentVO.getPhone());
        record.setRemark(tEquipmentVO.getRemark());
        record.setGrade(Long.valueOf(tEquipmentVO.getGrade()));
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        if (save) {
            this.tTenderOrgationDao.insert(record);
        } else {
            this.tTenderOrgationDao.update(record);
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
        this.tTenderOrgationDao.deleteById(ids);
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
    public PageVO<TTenderOrgationVO> getAllByQuery(TTenderOrgationQueryVO tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tEquipmentQuery.getName())) {
            conditions.add(TTenderOrgation.T_TENDER_ORGATION.NAME.like("%" + tEquipmentQuery.getName() + "%"));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getStatus())) {
            conditions.add(TTenderOrgation.T_TENDER_ORGATION.STATUS.eq(Integer.valueOf(tEquipmentQuery.getStatus())));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getGrade())) {
            conditions.add(TTenderOrgation.T_TENDER_ORGATION.GRADE.eq(Long.valueOf(tEquipmentQuery.getGrade())));
        }
        if (StringUtils.isNotEmpty(tEquipmentQuery.getRegion())) {
            conditions.add(TTenderOrgation.T_TENDER_ORGATION.REGION.eq(tEquipmentQuery.getRegion()));
        }
        List<SortField<?>> list = Arrays.asList(TTenderOrgation.T_TENDER_ORGATION.CREATE_TIME.asc(), TTenderOrgation.T_TENDER_ORGATION.STATUS.desc());
        PageVO<TTenderOrgationRecord> tSupplierVOPageVO = this.tTenderOrgationDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), list);
        return new PageVO<>(tSupplierVOPageVO.getTotalCount(),
                tSupplierVOPageVO.getPageData().stream().map(r -> {
                    return getTSupplierVO(r);
                }).collect(Collectors.toList())
        );

    }

}
