package org.poem.equiptype;

import com.google.common.collect.Maps;
import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TEquipType;
import org.poem.jooq.tables.TSupplier;
import org.poem.jooq.tables.records.TEquipTypeRecord;
import org.poem.jooq.tables.records.TSupplierRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class TEquipTypeDao extends BaseDaoImpl<TEquipTypeRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TEquipTypeDao() {
        super(TEquipType.T_EQUIP_TYPE);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }


    public Map<Long, String> getTEquipTypeMap() {
        Map<Long, String> map = Maps.newHashMap();
        List<TEquipTypeRecord> records = this.findByCondition(TEquipType.T_EQUIP_TYPE.ID.isNotNull());
        for (TEquipTypeRecord record : records) {
            map.put(record.getId(), record.getName());
        }
        return map;
    }
}
