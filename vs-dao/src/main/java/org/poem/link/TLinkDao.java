package org.poem.link;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TLink;
import org.poem.jooq.tables.records.TLinkRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TLinkDao  extends BaseDaoImpl<TLinkRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TLinkDao() {
        super(TLink.T_LINK);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }

}
