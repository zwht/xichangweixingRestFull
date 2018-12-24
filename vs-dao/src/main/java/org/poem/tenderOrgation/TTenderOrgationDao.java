package org.poem.tenderOrgation;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TTenderOrgation;
import org.poem.jooq.tables.records.TTenderOrgationRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TTenderOrgationDao extends BaseDaoImpl<TTenderOrgationRecord, Long> {
    @Autowired
    DSLContext dsl;

    public TTenderOrgationDao() {
        super(TTenderOrgation.T_TENDER_ORGATION);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
