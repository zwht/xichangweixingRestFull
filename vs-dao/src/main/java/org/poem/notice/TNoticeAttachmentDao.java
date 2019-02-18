package org.poem.notice;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TNoticeAttachment;
import org.poem.jooq.tables.TQualityNoticeAttachment;
import org.poem.jooq.tables.records.TNoticeAttachmentRecord;
import org.poem.jooq.tables.records.TQualityNoticeAttachmentRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TNoticeAttachmentDao extends BaseDaoImpl<TNoticeAttachmentRecord, Long> {


    @Autowired
    DSLContext dsl;

    public TNoticeAttachmentDao() {
        super(TNoticeAttachment.T_NOTICE_ATTACHMENT);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
