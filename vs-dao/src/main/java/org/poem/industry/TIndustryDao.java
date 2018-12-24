package org.poem.industry;

import com.google.common.collect.Maps;
import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TIndustry;
import org.poem.jooq.tables.records.TIndustryRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class TIndustryDao extends BaseDaoImpl<TIndustryRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TIndustryDao() {
        super(TIndustry.T_INDUSTRY);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }

    /**
     * 行业
     * @return
     */
    public Map<Long, String> mapIndustry() {
        List<TIndustryRecord> records = this.findByCondition(TIndustry.T_INDUSTRY.ID.isNotNull());
        Map<Long, String> map = Maps.newHashMap();
        for (TIndustryRecord record : records) {
            map.put(record.getId(), record.getName());
        }
        return map;

    }
}
