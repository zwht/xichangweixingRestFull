/*
 * This file is generated by jOOQ.
 */
package org.poem.jooq.tables;


import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Generated;

import org.jooq.Field;
import org.jooq.ForeignKey;
import org.jooq.Index;
import org.jooq.Name;
import org.jooq.Record;
import org.jooq.Schema;
import org.jooq.Table;
import org.jooq.TableField;
import org.jooq.UniqueKey;
import org.jooq.impl.DSL;
import org.jooq.impl.TableImpl;
import org.poem.jooq.Indexes;
import org.poem.jooq.Keys;
import org.poem.jooq.Public;
import org.poem.jooq.tables.records.TRoomReservationRecord;


/**
 * 客房预订
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TRoomReservation extends TableImpl<TRoomReservationRecord> {

    private static final long serialVersionUID = -884884793;

    /**
     * The reference instance of <code>public.t_room_reservation</code>
     */
    public static final TRoomReservation T_ROOM_RESERVATION = new TRoomReservation();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TRoomReservationRecord> getRecordType() {
        return TRoomReservationRecord.class;
    }

    /**
     * The column <code>public.t_room_reservation.id</code>.
     */
    public final TableField<TRoomReservationRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_room_reservation.name</code>. 房客姓名
     */
    public final TableField<TRoomReservationRecord, String> NAME = createField("name", org.jooq.impl.SQLDataType.VARCHAR(200), this, "房客姓名");

    /**
     * The column <code>public.t_room_reservation.idnum</code>. 身份证
     */
    public final TableField<TRoomReservationRecord, String> IDNUM = createField("idnum", org.jooq.impl.SQLDataType.VARCHAR(200), this, "身份证");

    /**
     * The column <code>public.t_room_reservation.workers</code>. 工作单位
     */
    public final TableField<TRoomReservationRecord, String> WORKERS = createField("workers", org.jooq.impl.SQLDataType.VARCHAR(200), this, "工作单位");

    /**
     * The column <code>public.t_room_reservation.persons</code>. 入住人数
     */
    public final TableField<TRoomReservationRecord, Integer> PERSONS = createField("persons", org.jooq.impl.SQLDataType.INTEGER, this, "入住人数");

    /**
     * The column <code>public.t_room_reservation.rooms</code>. 预订房间数
     */
    public final TableField<TRoomReservationRecord, Integer> ROOMS = createField("rooms", org.jooq.impl.SQLDataType.INTEGER, this, "预订房间数");

    /**
     * The column <code>public.t_room_reservation.living_time</code>. 入住时间
     */
    public final TableField<TRoomReservationRecord, Timestamp> LIVING_TIME = createField("living_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "入住时间");

    /**
     * The column <code>public.t_room_reservation.remark</code>. 备注
     */
    public final TableField<TRoomReservationRecord, String> REMARK = createField("remark", org.jooq.impl.SQLDataType.VARCHAR(200), this, "备注");

    /**
     * The column <code>public.t_room_reservation.status</code>. 状态
     */
    public final TableField<TRoomReservationRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_room_reservation.create_user</code>. 创建人
     */
    public final TableField<TRoomReservationRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_room_reservation.create_time</code>. 创建时间
     */
    public final TableField<TRoomReservationRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_room_reservation.update_user</code>. 修改人
     */
    public final TableField<TRoomReservationRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_room_reservation.update_time</code>. 修改时间
     */
    public final TableField<TRoomReservationRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_room_reservation.flag</code>. 标识
     */
    public final TableField<TRoomReservationRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标识");

    /**
     * Create a <code>public.t_room_reservation</code> table reference
     */
    public TRoomReservation() {
        this(DSL.name("t_room_reservation"), null);
    }

    /**
     * Create an aliased <code>public.t_room_reservation</code> table reference
     */
    public TRoomReservation(String alias) {
        this(DSL.name(alias), T_ROOM_RESERVATION);
    }

    /**
     * Create an aliased <code>public.t_room_reservation</code> table reference
     */
    public TRoomReservation(Name alias) {
        this(alias, T_ROOM_RESERVATION);
    }

    private TRoomReservation(Name alias, Table<TRoomReservationRecord> aliased) {
        this(alias, aliased, null);
    }

    private TRoomReservation(Name alias, Table<TRoomReservationRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("客房预订"));
    }

    public <O extends Record> TRoomReservation(Table<O> child, ForeignKey<O, TRoomReservationRecord> key) {
        super(child, key, T_ROOM_RESERVATION);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Schema getSchema() {
        return Public.PUBLIC;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<Index> getIndexes() {
        return Arrays.<Index>asList(Indexes.PK_T_ROOM_RESERVATION);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TRoomReservationRecord> getPrimaryKey() {
        return Keys.PK_T_ROOM_RESERVATION;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TRoomReservationRecord>> getKeys() {
        return Arrays.<UniqueKey<TRoomReservationRecord>>asList(Keys.PK_T_ROOM_RESERVATION);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoomReservation as(String alias) {
        return new TRoomReservation(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoomReservation as(Name alias) {
        return new TRoomReservation(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TRoomReservation rename(String name) {
        return new TRoomReservation(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TRoomReservation rename(Name name) {
        return new TRoomReservation(name, null);
    }
}