package org.poem.roomReservation;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.common.IDService;
import org.poem.jooq.tables.TRoomReservation;
import org.poem.jooq.tables.records.TRoomReservationRecord;
import org.poem.orderingMeals.TOrderingMealsQueryVO;
import org.poem.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 客房预订
 * @author poem
 */
@Service
public class TRoomReservationService {

    @Autowired
    private TRoomReservationDao tRoomReservationDao;
    
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
    private static TRoomReservationVO getTSupplierVO(TRoomReservationRecord t,
                                                   Map<Long, String> userMap) {
        TRoomReservationVO tSupplierVO = new TRoomReservationVO();
        tSupplierVO.setId(String.valueOf(t.getId()));
        tSupplierVO.setName(t.getName());
        tSupplierVO.setIdnum(t.getIdnum());
        tSupplierVO.setRemark(t.getRemark());
        tSupplierVO.setWorkers(t.getWorkers());
        tSupplierVO.setPersons(String.valueOf(t.getPersons()));
        tSupplierVO.setRooms(String.valueOf(t.getRooms()));
        tSupplierVO.setLivingTime(DateUtils.format(t.getLivingTime()));

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
    public ResultVO<TRoomReservationVO> getById(Long id) {
        TRoomReservationRecord tSupplierRecord = this.tRoomReservationDao.findById(id);
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
    public ResultVO<String> saveOrUpdate(TRoomReservationVO tEquipmentVO, Long userId) {
        TRoomReservationRecord record = null;
        boolean save = false;
        if (StringUtils.isNotEmpty(tEquipmentVO.getId())) {
            record = this.tRoomReservationDao.findById(Long.valueOf(tEquipmentVO.getId()));
        }
        if (record == null) {
            record = new TRoomReservationRecord();
            record.setId(idService.getId());
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setStatus(0);
            record.setFlag(true);
            save = true;
        }
        record.setName(tEquipmentVO.getName());
        record.setIdnum(tEquipmentVO.getIdnum());
        record.setRooms(Integer.valueOf(tEquipmentVO.getPersons()));
        record.setWorkers(tEquipmentVO.getWorkers());
        record.setPersons(Integer.valueOf(tEquipmentVO.getPersons()));
        record.setLivingTime(DateUtils.formatTimestamp(tEquipmentVO.getLivingTime()));
        record.setRemark(tEquipmentVO.getRemark());
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        if (save) {
            this.tRoomReservationDao.insert(record);
        } else {
            this.tRoomReservationDao.update(record);
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
        this.tRoomReservationDao.deleteById(ids);
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
    public PageVO<TRoomReservationVO> getAllByQuery(TRoomReservationQueryVO tQualityNoticeQueryVO, Integer pageSize, Integer pageNumber) {
        List<Condition> conditions = Lists.newArrayList();

        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getName())) {
            conditions.add(TRoomReservation.T_ROOM_RESERVATION.NAME.like("%" + tQualityNoticeQueryVO.getName() + "%"));
        }

        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getLivingStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestamp(tQualityNoticeQueryVO.getLivingStartTime());
            conditions.add(TRoomReservation.T_ROOM_RESERVATION.LIVING_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tQualityNoticeQueryVO.getLivingEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestamp(tQualityNoticeQueryVO.getLivingEndTime());
            conditions.add(TRoomReservation.T_ROOM_RESERVATION.LIVING_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> list = Arrays.asList(TRoomReservation.T_ROOM_RESERVATION.CREATE_TIME.asc(), TRoomReservation.T_ROOM_RESERVATION.STATUS.desc());
        PageVO<TRoomReservationRecord> tSupplierVOPageVO = this.tRoomReservationDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), list);
        Map<Long, String> useMap = userDao.getUseRMap();
        return new PageVO<>(tSupplierVOPageVO.getTotalCount(),
                tSupplierVOPageVO.getPageData().stream().map(r -> {
                    return getTSupplierVO(r, useMap);
                }).collect(Collectors.toList())
        );

    }

}
