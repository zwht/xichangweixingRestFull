package org.poem.managementRegulation;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TManagementRegulation;
import org.poem.jooq.tables.records.TManagementRegulationRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TManagementRegulationDao extends BaseDaoImpl<TManagementRegulationRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TManagementRegulationDao() {
        super(TManagementRegulation.T_MANAGEMENT_REGULATION);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
