package org.poem.subject;

import com.google.common.collect.Maps;
import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TMessage;
import org.poem.jooq.tables.TSubject;
import org.poem.jooq.tables.records.TSubjectRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

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


    public Map<Long, String> getAllSubject(){
        List<TSubjectRecord> all = this.findByCondition(TSubject.T_SUBJECT.ID.isNotNull());
        Map<Long, String> map = Maps.newHashMap();
        for (TSubjectRecord tSubjectRecord : all) {
            map.put(tSubjectRecord.getId(), tSubjectRecord.getName());
        }
        return map;
    }
}
