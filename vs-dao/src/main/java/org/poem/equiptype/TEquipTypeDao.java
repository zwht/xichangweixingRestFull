package org.poem.equiptype;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TEquipType;
import org.poem.jooq.tables.records.TEquipTypeRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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
}
