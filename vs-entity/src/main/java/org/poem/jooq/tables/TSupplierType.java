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
import org.poem.jooq.tables.records.TSupplierTypeRecord;


/**
 * 供应商类型
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TSupplierType extends TableImpl<TSupplierTypeRecord> {

    private static final long serialVersionUID = 1701678258;

    /**
     * The reference instance of <code>public.t_supplier_type</code>
     */
    public static final TSupplierType T_SUPPLIER_TYPE = new TSupplierType();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TSupplierTypeRecord> getRecordType() {
        return TSupplierTypeRecord.class;
    }

    /**
     * The column <code>public.t_supplier_type.id</code>.
     */
    public final TableField<TSupplierTypeRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_supplier_type.name</code>. 名字
     */
    public final TableField<TSupplierTypeRecord, String> NAME = createField("name", org.jooq.impl.SQLDataType.VARCHAR(200), this, "名字");

    /**
     * The column <code>public.t_supplier_type.status</code>. 状态
     */
    public final TableField<TSupplierTypeRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_supplier_type.create_user</code>. 创建人
     */
    public final TableField<TSupplierTypeRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_supplier_type.create_time</code>. 创建时间
     */
    public final TableField<TSupplierTypeRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_supplier_type.update_user</code>. 修改人
     */
    public final TableField<TSupplierTypeRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_supplier_type.update_time</code>. 修改时间
     */
    public final TableField<TSupplierTypeRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_supplier_type.flag</code>. 标识
     */
    public final TableField<TSupplierTypeRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标识");

    /**
     * Create a <code>public.t_supplier_type</code> table reference
     */
    public TSupplierType() {
        this(DSL.name("t_supplier_type"), null);
    }

    /**
     * Create an aliased <code>public.t_supplier_type</code> table reference
     */
    public TSupplierType(String alias) {
        this(DSL.name(alias), T_SUPPLIER_TYPE);
    }

    /**
     * Create an aliased <code>public.t_supplier_type</code> table reference
     */
    public TSupplierType(Name alias) {
        this(alias, T_SUPPLIER_TYPE);
    }

    private TSupplierType(Name alias, Table<TSupplierTypeRecord> aliased) {
        this(alias, aliased, null);
    }

    private TSupplierType(Name alias, Table<TSupplierTypeRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("供应商类型"));
    }

    public <O extends Record> TSupplierType(Table<O> child, ForeignKey<O, TSupplierTypeRecord> key) {
        super(child, key, T_SUPPLIER_TYPE);
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
        return Arrays.<Index>asList(Indexes.PK_T_SUPPLIER_TYPE);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TSupplierTypeRecord> getPrimaryKey() {
        return Keys.PK_T_SUPPLIER_TYPE;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TSupplierTypeRecord>> getKeys() {
        return Arrays.<UniqueKey<TSupplierTypeRecord>>asList(Keys.PK_T_SUPPLIER_TYPE);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSupplierType as(String alias) {
        return new TSupplierType(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSupplierType as(Name alias) {
        return new TSupplierType(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TSupplierType rename(String name) {
        return new TSupplierType(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TSupplierType rename(Name name) {
        return new TSupplierType(name, null);
    }
}