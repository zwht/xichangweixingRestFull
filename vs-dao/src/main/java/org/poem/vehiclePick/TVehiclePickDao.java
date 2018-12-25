package org.poem.vehiclePick;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TVehiclePick;
import org.poem.jooq.tables.records.TVehiclePickRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import static org.poem.jooq.Tables.T_USER;

@Repository
public class TVehiclePickDao extends BaseDaoImpl<TVehiclePickRecord, Long> {
    @Autowired
    DSLContext dsl;

    public TVehiclePickDao() {
        super(TVehiclePick.T_VEHICLE_PICK);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }

}
