package org.poem.reports;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TReports;
import org.poem.jooq.tables.records.TReportsRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TReportsDao extends BaseDaoImpl<TReportsRecord, Long> {


    @Autowired
    DSLContext dsl;

    public TReportsDao() {
        super(TReports.T_REPORTS);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
