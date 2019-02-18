package org.poem.systemnotice;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TSystemNotice;
import org.poem.jooq.tables.records.TSystemNoticeRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SystemNoticeDao extends BaseDaoImpl<TSystemNoticeRecord, Long> {

    @Autowired
    DSLContext dsl;

    public SystemNoticeDao() {
        super(TSystemNotice.T_SYSTEM_NOTICE);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
