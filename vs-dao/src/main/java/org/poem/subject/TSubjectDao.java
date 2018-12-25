package org.poem.subject;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TMessage;
import org.poem.jooq.tables.TSubject;
import org.poem.jooq.tables.records.TSubjectRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TSubjectDao extends BaseDaoImpl<TSubjectRecord, Long> {
    @Autowired
    DSLContext dsl;

    public TSubjectDao() {
        super(TSubject.T_SUBJECT);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
