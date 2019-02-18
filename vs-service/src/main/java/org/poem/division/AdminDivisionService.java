package org.poem.division;

import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.VoReTraversalUtil;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.common.IDService;
import org.poem.jooq.tables.CAdminDivision;
import org.poem.jooq.tables.records.CAdminDivisionRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import static org.poem.jooq.tables.CAdminDivision.C_ADMIN_DIVISION;

/**
 * 地区信息的实现
 */
@Service
@Transactional(rollbackFor = {Exception.class, RuntimeException.class})
public class AdminDivisionService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private AdminDivisionDao adminDivisionDao;

    @Autowired
    private IDService<Long> idService;
    

    /**
     * 地区信息列表查询
     * @param adminDivisionQueryVo
     * @param userId
     * @param page
     * @param size
     * @return
     */
    public ResultVO<PageVO<List<AdminDivisionListVo>>> list(AdminDivisionQueryVo adminDivisionQueryVo, Long userId, Integer page, Integer size) {
        List<SortField<?>> sortList = new ArrayList<>();
        //添加排序字段
        sortList.add(CAdminDivision.C_ADMIN_DIVISION.ID.asc());
        //添加条件字段
        List<Condition> conditions = innerAddListCondition(adminDivisionQueryVo);
        //查询赋值返回
        PageVO<CAdminDivisionRecord> query = adminDivisionDao.fetchByPage(conditions, new OffsetPagingVO(page, size), sortList);
        List<CAdminDivisionRecord> cAdminDivisionRecords;
        cAdminDivisionRecords = query.getPageData();
        List<AdminDivisionListVo> list = new ArrayList<>();
        for (CAdminDivisionRecord cAdminDivisionRecord : cAdminDivisionRecords
                ) {
            AdminDivisionListVo adminDivisionListVo = (AdminDivisionListVo) VoReTraversalUtil.traversalTwo(cAdminDivisionRecord, AdminDivisionListVo.class);
            list.add(adminDivisionListVo);
        }
        PageVO<AdminDivisionListVo> result = new PageVO<>();
        result.setPageData(list);
        result.setTotalCount(query.getTotalCount());
        return new ResultVO(0, result);
    }

    /**
     * 为list添加条件字段的方法
     * @param adminDivisionQueryVo
     * @return
     */
    private List<Condition> innerAddListCondition(AdminDivisionQueryVo adminDivisionQueryVo) {
        List<Condition> conditions = new ArrayList<>();
        //添加条件字段
        Long id=adminDivisionQueryVo.getId();
        if (id!=null){
            conditions.add(C_ADMIN_DIVISION.ID.eq(id));
        }
        Long provinceCode=adminDivisionQueryVo.getProvinceCode();
        if (provinceCode!=null){
            conditions.add(C_ADMIN_DIVISION.PROVINCE_CODE.eq(provinceCode));
        }
        String provinceName=adminDivisionQueryVo.getProvinceName();
        if (provinceName!=null){
            conditions.add(C_ADMIN_DIVISION.PROVINCE_NAME.like("%"+provinceName+"%"));
        }
        Long cityCode=adminDivisionQueryVo.getCityCode();
        if (cityCode!=null){
            conditions.add(C_ADMIN_DIVISION.CITY_CODE.eq(cityCode));
        }
        String cityName=adminDivisionQueryVo.getCityName();
        if (cityName!=null){
            conditions.add(C_ADMIN_DIVISION.CITY_NAME.like("%"+cityName+"%"));
        }
        Long countyCode=adminDivisionQueryVo.getCountyCode();
        if (countyCode!=null){
            conditions.add(C_ADMIN_DIVISION.COUNTY_CODE.eq(countyCode));
        }
        String countyName=adminDivisionQueryVo.getCountyName();
        if (countyName!=null){
            conditions.add(C_ADMIN_DIVISION.COUNTY_NAME.like("%"+countyName+"%"));
        }
        Long townCode=adminDivisionQueryVo.getTownCode();
        if (townCode!=null){
            conditions.add(C_ADMIN_DIVISION.TOWN_CODE.eq(townCode));
        }
        String townName=adminDivisionQueryVo.getTownName();
        if (townName!=null){
            conditions.add(C_ADMIN_DIVISION.TOWN_NAME.like("%"+townName+"%"));
        }
        Long villageCode=adminDivisionQueryVo.getVillageCode();
        if (villageCode!=null){
            conditions.add(C_ADMIN_DIVISION.VILLAGE_CODE.eq(villageCode));
        }
        String villageName=adminDivisionQueryVo.getVillageName();
        if (villageName!=null){
            conditions.add(C_ADMIN_DIVISION.VILLAGE_NAME.like("%"+villageName+"%"));
        }
        Integer level = adminDivisionQueryVo.getLevel();
        if (level!=null){
            conditions.add(C_ADMIN_DIVISION.LEVEL.eq(level));
        }
        return conditions;
    }
}
