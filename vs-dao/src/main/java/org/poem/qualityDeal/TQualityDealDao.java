package org.poem.qualityDeal;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.jooq.Table;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TQualityDeal;
import org.poem.jooq.tables.records.TQualityDealRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TQualityDealDao extends BaseDaoImpl<TQualityDealRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TQualityDealDao() {
        super(TQualityDeal.T_QUALITY_DEAL);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
