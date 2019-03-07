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
import org.poem.systemnotice.SystemNoticeService;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Date;
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

    @Autowired
    private SystemNoticeService systemNoticeService;



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
        tSupplierVO.setApplicationReason(t.getApplicationReason());
        tSupplierVO.setApplicationTime(DateUtils.format(t.getApplicationTime(), "yyyy-MM-dd HH:mm" ));
        tSupplierVO.setAddress(t.getAddress());
        tSupplierVO.setFlight(t.getFlight());
        tSupplierVO.setTrainNumber(t.getTrainNumber());
        tSupplierVO.setTrainPersons(t.getTrainPersons());
        tSupplierVO.setVehicleArea(t.getVehicleArea());
        tSupplierVO.setVehicleType(t.getVehicleType());
        tSupplierVO.setPhone(t.getPhone());
        tSupplierVO.setUpdateTime(DateUtils.format(t.getUpdateTime()));
        tSupplierVO.setStatus(String.valueOf(t.getStatus()));
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
        record.setName(tEquipmentVO.getName());
        record.setApplicationReason(tEquipmentVO.getApplicationReason());
        record.setApplicationTime(DateUtils.formatTimestampM(tEquipmentVO.getApplicationTime()));
        record.setAddress(tEquipmentVO.getAddress());
        record.setFlight(tEquipmentVO.getFlight());
        record.setTrainNumber(tEquipmentVO.getTrainNumber());
        record.setTrainPersons(tEquipmentVO.getTrainPersons());
        record.setVehicleArea(tEquipmentVO.getVehicleArea());
        record.setVehicleType(tEquipmentVO.getVehicleType());
        record.setPhone(tEquipmentVO.getPhone());
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        if(StringUtils.isNotEmpty(tEquipmentVO.getStatus())){
            record.setStatus(Integer.parseInt(tEquipmentVO.getStatus()));
        }
        if (save) {
            this.tVehiclePickDao.insert(record);
            String content = "用户" + userDao.findById(userId).getName() +
                    "于" + DateUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss")
                    + "新增车辆接送。";
            systemNoticeService.saveSystemNotice("新增 车辆接送",userId, content);
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
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tQualityNoticeQueryVO.getVehicleStartTime() + " 00:00:00");
            conditions.add(TVehiclePick.T_VEHICLE_PICK.APPLICATION_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getVehicleEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tQualityNoticeQueryVO.getVehicleEndTime() + " 23:59:59");
            conditions.add(TVehiclePick.T_VEHICLE_PICK.APPLICATION_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> list = Arrays.asList( TVehiclePick.T_VEHICLE_PICK.STATUS.asc(),TVehiclePick.T_VEHICLE_PICK.CREATE_TIME.desc());
        PageVO<TVehiclePickRecord> tSupplierVOPageVO = this.tVehiclePickDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), list);
        Map<Long, String> useMap = userDao.getUseRMap();
        return new PageVO<>(tSupplierVOPageVO.getTotalCount(),
                tSupplierVOPageVO.getPageData().stream().map(r -> {
                    return getTSupplierVO(r, useMap);
                }).collect(Collectors.toList())
        );

    }
}
