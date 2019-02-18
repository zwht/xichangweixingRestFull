package org.poem.notice;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TNotice;
import org.poem.jooq.tables.TQualityNotice;
import org.poem.jooq.tables.records.TNoticeRecord;
import org.poem.jooq.tables.records.TQualityNoticeRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TNoticeDao extends BaseDaoImpl<TNoticeRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TNoticeDao() {
        super(TNotice.T_NOTICE);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
