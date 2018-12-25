package org.poem.workDynamics;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.jooq.Table;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TWorkDynamics;
import org.poem.jooq.tables.records.TWorkDynamicsRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TWorkDynamicsDao extends BaseDaoImpl<TWorkDynamicsRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TWorkDynamicsDao() {
        super(TWorkDynamics.T_WORK_DYNAMICS);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
