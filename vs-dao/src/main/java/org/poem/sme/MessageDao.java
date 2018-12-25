package org.poem.sme;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TMessage;
import org.poem.jooq.tables.records.TMessageRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MessageDao extends BaseDaoImpl<TMessageRecord,Long> {

    @Autowired
    DSLContext dsl;

    public MessageDao() {
        super(TMessage.T_MESSAGE);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
