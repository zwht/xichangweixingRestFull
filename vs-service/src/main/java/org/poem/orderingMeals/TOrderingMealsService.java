package org.poem.orderingMeals;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.common.IDService;
import org.poem.jooq.tables.TOrderingMeals;
import org.poem.jooq.tables.records.TOrderingMealsRecord;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 网上订餐
 *
 * @author poem
 */
@Service
public class TOrderingMealsService {

    @Autowired
    private TOrderingMealsDao tOrderingMealsDao;
    @Autowired
    private UserDao userDao;

    @Autowired
    private IDService<Long> idService;


    /**
     * 翻译
     *
     * @param t
     * @return
     */
    private static TOrderingMealsVO getTSupplierVO(TOrderingMealsRecord t,
                                                   Map<Long, String> userMap) {
        TOrderingMealsVO tSupplierVO = new TOrderingMealsVO();
        tSupplierVO.setId(String.valueOf(t.getId()));
        tSupplierVO.setName(t.getName());
        tSupplierVO.setIdnum(t.getIdnum());
        tSupplierVO.setPhone(t.getPhone());
        tSupplierVO.setRemark(t.getRemark());
        tSupplierVO.setWorkers(t.getWorkers());
        tSupplierVO.setEatsCount(String.valueOf(t.getEatsCount()));
        tSupplierVO.setEatTime(DateUtils.format(t.getEatTime()));

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
    public ResultVO<TOrderingMealsVO> getById(Long id) {
        TOrderingMealsRecord tSupplierRecord = this.tOrderingMealsDao.findById(id);
        if (tSupplierRecord == null) {
            return new ResultVO<>(-1, null, "没记录");
        }
        return new ResultVO<>(getTSupplierVO(tSupplierRecord, userDao.getUseRMap()));
    }

    /**
     * 添加
     *
     * @param tEquipmentVO
     * @param userId
     * @return
     */
    public ResultVO<String> saveOrUpdate(TOrderingMealsVO tEquipmentVO, Long userId) {
        TOrderingMealsRecord record = null;
        boolean save = false;
        if (StringUtils.isNotEmpty(tEquipmentVO.getId())) {
            record = this.tOrderingMealsDao.findById(Long.valueOf(tEquipmentVO.getId()));
        }
        if (record == null) {
            record = new TOrderingMealsRecord();
            record.setId(idService.getId());
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setStatus(0);
            record.setFlag(true);
            save = true;
        }
        record.setName(tEquipmentVO.getName());
        record.setIdnum(tEquipmentVO.getIdnum());
        record.setPhone(tEquipmentVO.getPhone());
        record.setWorkers(tEquipmentVO.getWorkers());
        record.setEatsCount(Integer.valueOf(tEquipmentVO.getEatsCount()));
        record.setEatTime(DateUtils.formatTimestamp(tEquipmentVO.getEatTime()));
        record.setRemark(tEquipmentVO.getRemark());
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        if (save) {
            this.tOrderingMealsDao.insert(record);
        } else {
            this.tOrderingMealsDao.update(record);
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
        this.tOrderingMealsDao.deleteById(ids);
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
    public PageVO<TOrderingMealsVO> getAllByQuery(TOrderingMealsQueryVO tQualityNoticeQueryVO, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();


        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getName())) {
            conditions.add(TOrderingMeals.T_ORDERING_MEALS.NAME.like("%" + tQualityNoticeQueryVO.getName() + "%"));
        }

        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getEatStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestamp(tQualityNoticeQueryVO.getEatStartTime());
            conditions.add(TOrderingMeals.T_ORDERING_MEALS.EAT_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getEatEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestamp(tQualityNoticeQueryVO.getEatEndTime());
            conditions.add(TOrderingMeals.T_ORDERING_MEALS.EAT_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> list = Arrays.asList(TOrderingMeals.T_ORDERING_MEALS.CREATE_TIME.asc(), TOrderingMeals.T_ORDERING_MEALS.STATUS.desc());
        PageVO<TOrderingMealsRecord> tSupplierVOPageVO = this.tOrderingMealsDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), list);
        Map<Long, String> useMap = userDao.getUseRMap();
        return new PageVO<>(tSupplierVOPageVO.getTotalCount(),
                tSupplierVOPageVO.getPageData().stream().map(r -> {
                    return getTSupplierVO(r, useMap);
                }).collect(Collectors.toList())
        );

    }

}
