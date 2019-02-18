package org.poem.marketInformation;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TMarketInformation;
import org.poem.jooq.tables.TMarketInformationAttachment;
import org.poem.jooq.tables.records.TMarketInformationAttachmentRecord;
import org.poem.jooq.tables.records.TMarketInformationRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 */
@Repository
public class MarketInformationAttachmentDao extends BaseDaoImpl<TMarketInformationAttachmentRecord, Long> {

    @Autowired
    DSLContext dsl;

    public MarketInformationAttachmentDao() {
        super(TMarketInformationAttachment.T_MARKET_INFORMATION_ATTACHMENT);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
