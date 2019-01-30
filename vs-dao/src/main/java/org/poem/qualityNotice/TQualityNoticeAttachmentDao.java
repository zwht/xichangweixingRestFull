package org.poem.qualityNotice;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TQualityNotice;
import org.poem.jooq.tables.TQualityNoticeAttachment;
import org.poem.jooq.tables.records.TQualityNoticeAttachmentRecord;
import org.poem.jooq.tables.records.TQualityNoticeRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TQualityNoticeAttachmentDao extends BaseDaoImpl<TQualityNoticeAttachmentRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TQualityNoticeAttachmentDao() {
        super(TQualityNoticeAttachment.T_QUALITY_NOTICE_ATTACHMENT);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
