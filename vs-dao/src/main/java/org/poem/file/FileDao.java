package org.poem.file;


import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.records.TFileRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.poem.jooq.tables.TFile.T_FILE;


/**
 *  @author         jamie  
 *  @version        V1.0   
 *  @date           2018/3/12 14:16  
 */

@Repository
public class FileDao extends BaseDaoImpl<TFileRecord, Long> {

    @Autowired
    DSLContext dsl;

    public FileDao() {
        super(T_FILE);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }


}
