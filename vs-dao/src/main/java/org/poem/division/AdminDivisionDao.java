package org.poem.division;


import org.jooq.Condition;
import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.records.CAdminDivisionRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

import static org.poem.jooq.tables.CAdminDivision.C_ADMIN_DIVISION;


/**
 * 行政区划dao
 *  @author         jamie  
 *  @version        V1.0   
 *  @date           2018/3/12 14:16  
 */

@Repository
public class AdminDivisionDao extends BaseDaoImpl<CAdminDivisionRecord, Long> {

    @Autowired
    DSLContext dsl;

    public AdminDivisionDao() {
        super(C_ADMIN_DIVISION);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }


    public Boolean repeatCheck(String name,Integer level,Long parentId,Long id){
        List<Condition> conditions=new ArrayList<>();

        conditions.add(C_ADMIN_DIVISION.LEVEL.eq(level));
        if(id != null){
            conditions.add(C_ADMIN_DIVISION.ID.notEqual(id));
        }
        switch (level){
            case 1:
                conditions.add(C_ADMIN_DIVISION.PROVINCE_NAME.eq(name));
                break;
            case 2:
                conditions.add(C_ADMIN_DIVISION.CITY_NAME.eq(name));
                if(parentId != null) {
                    conditions.add(C_ADMIN_DIVISION.PROVINCE_CODE.eq(parentId));
                }
                break;
            case 3:
                conditions.add(C_ADMIN_DIVISION.COUNTY_NAME.eq(name));
                if(parentId != null) {
                    conditions.add(C_ADMIN_DIVISION.CITY_CODE.eq(parentId));
                }
                break;
            case 4:
                conditions.add(C_ADMIN_DIVISION.TOWN_NAME.eq(name));
                if(parentId != null) {
                    conditions.add(C_ADMIN_DIVISION.COUNTY_CODE.eq(parentId));
                }
                break;
            default:
                conditions.add(C_ADMIN_DIVISION.VILLAGE_NAME.eq(name));
                if(parentId != null) {
                    conditions.add(C_ADMIN_DIVISION.TOWN_CODE.eq(parentId));
                }
                break;
        }
        CAdminDivisionRecord cAdminDivisionRecord = dsl.selectFrom(C_ADMIN_DIVISION)
                .where(conditions)
                .fetchAny();
        if (cAdminDivisionRecord!=null && cAdminDivisionRecord.getId()!=null){
            return true;
        }else{
            return false;
        }
    }
}
