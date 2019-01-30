package org.poem.division;


import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.jooq.Result;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.records.TDivisionRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Map;

import static org.poem.jooq.tables.TDivision.T_DIVISION;


/**
 * 行政区划dao
 *  @author         jamie  
 *  @version        V1.0   
 *  @date           2018/3/12 14:16  
 */

@Repository
public class DivisionDao extends BaseDaoImpl<TDivisionRecord, Integer> {

    @Autowired
    DSLContext dsl;

    public DivisionDao() {
        super(T_DIVISION);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }

    /**
     * 获取所有行政区划
     * @return
     */
    public Result<TDivisionRecord> all(){
        return dsl.selectFrom(T_DIVISION).fetch();
    }

    /**
     *
     * @param name
     * @return
     */
    public boolean isExitedName(String name){
        return dsl.selectCount().from(T_DIVISION).where(T_DIVISION.NAME.eq(name)).fetchAny().value1() > 0;
    }

}
