package org.poem.workDynamics;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TWorkDynamics;
import org.poem.jooq.tables.TWorkDynamicsAttachment;
import org.poem.jooq.tables.records.TWorkDynamicsAttachmentRecord;
import org.poem.jooq.tables.records.TWorkDynamicsRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TWorkDynamicsAttachmentDao extends BaseDaoImpl<TWorkDynamicsAttachmentRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TWorkDynamicsAttachmentDao() {
        super(TWorkDynamicsAttachment.T_WORK_DYNAMICS_ATTACHMENT);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
