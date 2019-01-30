package org.poem.party;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TParty;
import org.poem.jooq.tables.TPartyAttachment;
import org.poem.jooq.tables.records.TPartyAttachmentRecord;
import org.poem.jooq.tables.records.TPartyRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class PartyAttachmentDao extends BaseDaoImpl<TPartyAttachmentRecord, Long> {


    @Autowired
    DSLContext dsl;

    public PartyAttachmentDao() {
        super(TPartyAttachment.T_PARTY_ATTACHMENT);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
