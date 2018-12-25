package org.poem.roomReservation;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TRoomReservation;
import org.poem.jooq.tables.records.TRoomReservationRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TRoomReservationDao  extends BaseDaoImpl<TRoomReservationRecord, Long> {
    @Autowired
    DSLContext dsl;

    public TRoomReservationDao() {
        super(TRoomReservation.T_ROOM_RESERVATION);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }

}