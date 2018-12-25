package org.poem.vehiclePick;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.common.IDService;
import org.poem.jooq.tables.TVehiclePick;
import org.poem.jooq.tables.records.TVehiclePickRecord;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 接送
 * @author poem
 */
@Service
public class TVehiclePickService {

    @Autowired
    private TVehiclePickDao tVehiclePickDao;

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
    private static TVehiclePickVO getTSupplierVO(TVehiclePickRecord t,
                                                 Map<Long, String> userMap) {
        TVehiclePickVO tSupplierVO = new TVehiclePickVO();
        tSupplierVO.setId(String.valueOf(t.getId()));
        tSupplierVO.setName(t.getName());
        tSupplierVO.setIdnum(t.getIdnum());
        tSupplierVO.setPhone(t.getPhone());
        tSupplierVO.setRemark(t.getRemark());
        tSupplierVO.setWorkers(t.getWorkers());
        tSupplierVO.setPersons(String.valueOf(t.getPersons()));
        tSupplierVO.setDeparturePlace(t.getDeparturePlace());
        tSupplierVO.setDestination(t.getDestination());
        tSupplierVO.setVehicleTime(DateUtils.format(t.getVehicleTime()));

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
    public ResultVO<TVehiclePickVO> getById(Long id) {
        TVehiclePickRecord tSupplierRecord = this.tVehiclePickDao.findById(id);
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
    public ResultVO<String> saveOrUpdate(TVehiclePickVO tEquipmentVO, Long userId) {
        TVehiclePickRecord record = null;
        boolean save = false;
        if (StringUtils.isNotEmpty(tEquipmentVO.getId())) {
            record = this.tVehiclePickDao.findById(Long.valueOf(tEquipmentVO.getId()));
        }
        if (record == null) {
            record = new TVehiclePickRecord();
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
        record.setPersons(Integer.valueOf(tEquipmentVO.getPersons()));
        record.setDeparturePlace(tEquipmentVO.getDeparturePlace());
        record.setDestination(tEquipmentVO.getDestination());
        record.setVehicleTime(DateUtils.formatTimestamp(tEquipmentVO.getVehicleTime()));
        record.setRemark(tEquipmentVO.getRemark());
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        if (save) {
            this.tVehiclePickDao.insert(record);
        } else {
            this.tVehiclePickDao.update(record);
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
        this.tVehiclePickDao.deleteById(ids);
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
    public PageVO<TVehiclePickVO> getAllByQuery(TVehiclePickQueryVO tQualityNoticeQueryVO, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();


        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getName())) {
            conditions.add(TVehiclePick.T_VEHICLE_PICK.NAME.like("%" + tQualityNoticeQueryVO.getName() + "%"));
        }

        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getVehicleStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestamp(tQualityNoticeQueryVO.getVehicleStartTime());
            conditions.add(TVehiclePick.T_VEHICLE_PICK.VEHICLE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getVehicleEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestamp(tQualityNoticeQueryVO.getVehicleEndTime());
            conditions.add(TVehiclePick.T_VEHICLE_PICK.VEHICLE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> list = Arrays.asList(TVehiclePick.T_VEHICLE_PICK.CREATE_TIME.asc(), TVehiclePick.T_VEHICLE_PICK.STATUS.desc());
        PageVO<TVehiclePickRecord> tSupplierVOPageVO = this.tVehiclePickDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), list);
        Map<Long, String> useMap = userDao.getUseRMap();
        return new PageVO<>(tSupplierVOPageVO.getTotalCount(),
                tSupplierVOPageVO.getPageData().stream().map(r -> {
                    return getTSupplierVO(r, useMap);
                }).collect(Collectors.toList())
        );

    }
}
