package org.poem.equipment;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TEquipment;
import org.poem.jooq.tables.records.TEquipmentRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TEquipmentDao extends BaseDaoImpl<TEquipmentRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TEquipmentDao() {
        super(TEquipment.T_EQUIPMENT);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
