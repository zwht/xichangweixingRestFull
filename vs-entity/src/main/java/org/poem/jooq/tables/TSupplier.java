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
import org.poem.jooq.tables.records.TSupplierRecord;


/**
 * 供应商
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TSupplier extends TableImpl<TSupplierRecord> {

    private static final long serialVersionUID = 1370237179;

    /**
     * The reference instance of <code>public.t_supplier</code>
     */
    public static final TSupplier T_SUPPLIER = new TSupplier();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TSupplierRecord> getRecordType() {
        return TSupplierRecord.class;
    }

    /**
     * The column <code>public.t_supplier.id</code>.
     */
    public final TableField<TSupplierRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_supplier.name</code>. 标题
     */
    public final TableField<TSupplierRecord, String> NAME = createField("name", org.jooq.impl.SQLDataType.VARCHAR(200), this, "标题");

    /**
     * The column <code>public.t_supplier.type</code>. 摘要
     */
    public final TableField<TSupplierRecord, Long> TYPE = createField("type", org.jooq.impl.SQLDataType.BIGINT, this, "摘要");

    /**
     * The column <code>public.t_supplier.region</code>. 封面
     */
    public final TableField<TSupplierRecord, String> REGION = createField("region", org.jooq.impl.SQLDataType.VARCHAR(200), this, "封面");

    /**
     * The column <code>public.t_supplier.address</code>. 置顶
     */
    public final TableField<TSupplierRecord, String> ADDRESS = createField("address", org.jooq.impl.SQLDataType.VARCHAR(500), this, "置顶");

    /**
     * The column <code>public.t_supplier.social_credit_code</code>. 内容
     */
    public final TableField<TSupplierRecord, String> SOCIAL_CREDIT_CODE = createField("social_credit_code", org.jooq.impl.SQLDataType.VARCHAR(50), this, "内容");

    /**
     * The column <code>public.t_supplier.regist_date</code>. 阅读量
     */
    public final TableField<TSupplierRecord, Timestamp> REGIST_DATE = createField("regist_date", org.jooq.impl.SQLDataType.TIMESTAMP, this, "阅读量");

    /**
     * The column <code>public.t_supplier.legal_person</code>.
     */
    public final TableField<TSupplierRecord, String> LEGAL_PERSON = createField("legal_person", org.jooq.impl.SQLDataType.VARCHAR(20), this, "");

    /**
     * The column <code>public.t_supplier.legal_person_name</code>.
     */
    public final TableField<TSupplierRecord, String> LEGAL_PERSON_NAME = createField("legal_person_name", org.jooq.impl.SQLDataType.VARCHAR(50), this, "");

    /**
     * The column <code>public.t_supplier.contacts_user_name</code>.
     */
    public final TableField<TSupplierRecord, String> CONTACTS_USER_NAME = createField("contacts_user_name", org.jooq.impl.SQLDataType.VARCHAR(50), this, "");

    /**
     * The column <code>public.t_supplier.contacts_use_idnum</code>.
     */
    public final TableField<TSupplierRecord, String> CONTACTS_USE_IDNUM = createField("contacts_use_idnum", org.jooq.impl.SQLDataType.VARCHAR(50), this, "");

    /**
     * The column <code>public.t_supplier.phone</code>.
     */
    public final TableField<TSupplierRecord, String> PHONE = createField("phone", org.jooq.impl.SQLDataType.VARCHAR(50), this, "");

    /**
     * The column <code>public.t_supplier.logo</code>.
     */
    public final TableField<TSupplierRecord, Long> LOGO = createField("logo", org.jooq.impl.SQLDataType.BIGINT, this, "");

    /**
     * The column <code>public.t_supplier.remark</code>.
     */
    public final TableField<TSupplierRecord, String> REMARK = createField("remark", org.jooq.impl.SQLDataType.VARCHAR(500), this, "");

    /**
     * The column <code>public.t_supplier.status</code>. 状态
     */
    public final TableField<TSupplierRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_supplier.create_user</code>. 创建人
     */
    public final TableField<TSupplierRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_supplier.create_time</code>. 创建时间
     */
    public final TableField<TSupplierRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_supplier.update_user</code>. 修改人
     */
    public final TableField<TSupplierRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_supplier.update_time</code>. 修改时间
     */
    public final TableField<TSupplierRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_supplier.flag</code>. 标识
     */
    public final TableField<TSupplierRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标识");

    /**
     * Create a <code>public.t_supplier</code> table reference
     */
    public TSupplier() {
        this(DSL.name("t_supplier"), null);
    }

    /**
     * Create an aliased <code>public.t_supplier</code> table reference
     */
    public TSupplier(String alias) {
        this(DSL.name(alias), T_SUPPLIER);
    }

    /**
     * Create an aliased <code>public.t_supplier</code> table reference
     */
    public TSupplier(Name alias) {
        this(alias, T_SUPPLIER);
    }

    private TSupplier(Name alias, Table<TSupplierRecord> aliased) {
        this(alias, aliased, null);
    }

    private TSupplier(Name alias, Table<TSupplierRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("供应商"));
    }

    public <O extends Record> TSupplier(Table<O> child, ForeignKey<O, TSupplierRecord> key) {
        super(child, key, T_SUPPLIER);
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
        return Arrays.<Index>asList(Indexes.PK_T_SUPPLIER);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TSupplierRecord> getPrimaryKey() {
        return Keys.PK_T_SUPPLIER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TSupplierRecord>> getKeys() {
        return Arrays.<UniqueKey<TSupplierRecord>>asList(Keys.PK_T_SUPPLIER);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSupplier as(String alias) {
        return new TSupplier(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSupplier as(Name alias) {
        return new TSupplier(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TSupplier rename(String name) {
        return new TSupplier(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TSupplier rename(Name name) {
        return new TSupplier(name, null);
    }
}
