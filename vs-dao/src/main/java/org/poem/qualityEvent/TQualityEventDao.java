package org.poem.qualityEvent;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TQualityEvent;
import org.poem.jooq.tables.TQualityNotice;
import org.poem.jooq.tables.records.TQualityEventRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TQualityEventDao extends BaseDaoImpl<TQualityEventRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TQualityEventDao() {
        super(TQualityEvent.T_QUALITY_EVENT);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
