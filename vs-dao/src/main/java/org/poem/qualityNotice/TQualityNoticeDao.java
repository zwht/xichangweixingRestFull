package org.poem.qualityNotice;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TParty;
import org.poem.jooq.tables.TQualityNotice;
import org.poem.jooq.tables.records.TQualityNoticeRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TQualityNoticeDao extends BaseDaoImpl<TQualityNoticeRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TQualityNoticeDao() {
        super(TQualityNotice.T_QUALITY_NOTICE);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
