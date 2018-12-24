package org.poem.supplier;

import com.google.common.collect.Maps;
import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TSupplier;
import org.poem.jooq.tables.records.TSupplierRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class SupplierDao extends BaseDaoImpl<TSupplierRecord, Long> {

    @Autowired
    DSLContext dsl;

    public SupplierDao() {
        super(TSupplier.T_SUPPLIER);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }

    public Map<Long, String> getTSupplierMap() {
        Map<Long, String> map = Maps.newHashMap();
        List<TSupplierRecord> records = this.findByCondition(TSupplier.T_SUPPLIER.ID.isNotNull());
        for (TSupplierRecord record : records) {
            map.put(record.getId(), record.getName());
        }
        return map;
    }
}
