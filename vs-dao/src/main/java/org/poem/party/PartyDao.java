package org.poem.party;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TParty;
import org.poem.jooq.tables.records.TPartyRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class PartyDao extends BaseDaoImpl<TPartyRecord, Long> {


    @Autowired
    DSLContext dsl;

    public PartyDao() {
        super(TParty.T_PARTY);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
