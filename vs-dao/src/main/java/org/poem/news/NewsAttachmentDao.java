package org.poem.news;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TNews;
import org.poem.jooq.tables.TNewsAttachment;
import org.poem.jooq.tables.records.TNewsAttachmentRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * @author poem
 */
@Repository
public class NewsAttachmentDao extends BaseDaoImpl<TNewsAttachmentRecord, Long> {

    @Autowired
    DSLContext dsl;

    public NewsAttachmentDao() {
        super(TNewsAttachment.T_NEWS_ATTACHMENT);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
