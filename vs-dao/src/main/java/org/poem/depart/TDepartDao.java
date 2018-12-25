package org.poem.depart;

import com.google.common.collect.Maps;
import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TDepart;
import org.poem.jooq.tables.records.TDepartRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class TDepartDao extends BaseDaoImpl<TDepartRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TDepartDao() {
        super(TDepart.T_DEPART);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }

    public Map<Long, String> getDepartMap(){
        List<TDepartRecord> records = this.findByCondition(TDepart.T_DEPART.ID.isNotNull());
        Map<Long, String> map = Maps.newHashMap();
        for (TDepartRecord record : records) {
            map.put(record.getId(), record.getName());
        }
        return map;
    }
}
