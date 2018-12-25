package org.poem.dataDownload;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TDataDownload;
import org.poem.jooq.tables.records.TDataDownloadRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TDataDownloadDao extends BaseDaoImpl<TDataDownloadRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TDataDownloadDao() {
        super(TDataDownload.T_DATA_DOWNLOAD);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }

}
