package org.poem.news;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDao;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TArms;
import org.poem.jooq.tables.TNews;
import org.poem.jooq.tables.records.TNewsRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import sun.rmi.runtime.Log;

@Repository
public class NewsDao extends BaseDaoImpl<TNewsRecord, Long> {

    @Autowired
    DSLContext dsl;

    public NewsDao() {
        super(TNews.T_NEWS);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
