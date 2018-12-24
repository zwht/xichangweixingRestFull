package org.poem.marketInformation;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TMarketInformation;
import org.poem.jooq.tables.records.TMarketInformationRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 */
@Repository
public class MarketInformationDao extends BaseDaoImpl<TMarketInformationRecord, Long> {

    @Autowired
    DSLContext dsl;

    public MarketInformationDao() {
        super(TMarketInformation.T_MARKET_INFORMATION);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
