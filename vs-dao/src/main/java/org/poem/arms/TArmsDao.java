package org.poem.arms;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TArms;
import org.poem.jooq.tables.records.TArmsRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TArmsDao extends BaseDaoImpl<TArmsRecord , Long> {

    @Autowired
    DSLContext dsl;

    public TArmsDao() {
        super(TArms.T_ARMS);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
