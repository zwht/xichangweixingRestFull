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
import org.poem.jooq.tables.records.TDepartRecord;


/**
 * 部门
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TDepart extends TableImpl<TDepartRecord> {

    private static final long serialVersionUID = -1227150331;

    /**
     * The reference instance of <code>public.t_depart</code>
     */
    public static final TDepart T_DEPART = new TDepart();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TDepartRecord> getRecordType() {
        return TDepartRecord.class;
    }

    /**
     * The column <code>public.t_depart.id</code>.
     */
    public final TableField<TDepartRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_depart.name</code>. 名字
     */
    public final TableField<TDepartRecord, String> NAME = createField("name", org.jooq.impl.SQLDataType.VARCHAR(100), this, "名字");

    /**
     * The column <code>public.t_depart.status</code>. 状态
     */
    public final TableField<TDepartRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_depart.create_time</code>. 创建时间
     */
    public final TableField<TDepartRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_depart.update_time</code>. 修改时间
     */
    public final TableField<TDepartRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_depart.create_user</code>. 创建人
     */
    public final TableField<TDepartRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_depart.update_user</code>. 修改人
     */
    public final TableField<TDepartRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_depart.flag</code>. 标记
     */
    public final TableField<TDepartRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标记");

    /**
     * Create a <code>public.t_depart</code> table reference
     */
    public TDepart() {
        this(DSL.name("t_depart"), null);
    }

    /**
     * Create an aliased <code>public.t_depart</code> table reference
     */
    public TDepart(String alias) {
        this(DSL.name(alias), T_DEPART);
    }

    /**
     * Create an aliased <code>public.t_depart</code> table reference
     */
    public TDepart(Name alias) {
        this(alias, T_DEPART);
    }

    private TDepart(Name alias, Table<TDepartRecord> aliased) {
        this(alias, aliased, null);
    }

    private TDepart(Name alias, Table<TDepartRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("部门"));
    }

    public <O extends Record> TDepart(Table<O> child, ForeignKey<O, TDepartRecord> key) {
        super(child, key, T_DEPART);
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
        return Arrays.<Index>asList(Indexes.PK_T_DEPART);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TDepartRecord> getPrimaryKey() {
        return Keys.PK_T_DEPART;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TDepartRecord>> getKeys() {
        return Arrays.<UniqueKey<TDepartRecord>>asList(Keys.PK_T_DEPART);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TDepart as(String alias) {
        return new TDepart(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TDepart as(Name alias) {
        return new TDepart(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TDepart rename(String name) {
        return new TDepart(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TDepart rename(Name name) {
        return new TDepart(name, null);
    }
}
