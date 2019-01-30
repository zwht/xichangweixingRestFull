package org.poem.arms;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TArms;
import org.poem.jooq.tables.TArmsAttachment;
import org.poem.jooq.tables.records.TArmsAttachmentRecord;
import org.poem.jooq.tables.records.TArmsRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TArmsAttachmentDao extends BaseDaoImpl<TArmsAttachmentRecord , Long> {

    @Autowired
    DSLContext dsl;

    public TArmsAttachmentDao() {
        super(TArmsAttachment.T_ARMS_ATTACHMENT);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
