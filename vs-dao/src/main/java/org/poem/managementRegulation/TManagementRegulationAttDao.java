package org.poem.managementRegulation;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TManagementRegulation;
import org.poem.jooq.tables.TManagementRegulationAttachment;
import org.poem.jooq.tables.records.TManagementRegulationAttachmentRecord;
import org.poem.jooq.tables.records.TManagementRegulationRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TManagementRegulationAttDao extends BaseDaoImpl<TManagementRegulationAttachmentRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TManagementRegulationAttDao() {
        super(TManagementRegulationAttachment.T_MANAGEMENT_REGULATION_ATTACHMENT);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
