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
import org.poem.jooq.tables.records.TSystemlogRecord;


/**
 * 系统日志
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TSystemlog extends TableImpl<TSystemlogRecord> {

    private static final long serialVersionUID = 1810054043;

    /**
     * The reference instance of <code>public.t_systemlog</code>
     */
    public static final TSystemlog T_SYSTEMLOG = new TSystemlog();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TSystemlogRecord> getRecordType() {
        return TSystemlogRecord.class;
    }

    /**
     * The column <code>public.t_systemlog.id</code>.
     */
    public final TableField<TSystemlogRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_systemlog.user_id</code>. 用户id
     */
    public final TableField<TSystemlogRecord, Long> USER_ID = createField("user_id", org.jooq.impl.SQLDataType.BIGINT, this, "用户id");

    /**
     * The column <code>public.t_systemlog.ip_address</code>. ip地址
     */
    public final TableField<TSystemlogRecord, String> IP_ADDRESS = createField("ip_address", org.jooq.impl.SQLDataType.VARCHAR(50), this, "ip地址");

    /**
     * The column <code>public.t_systemlog.create_time</code>. 创建时间
     */
    public final TableField<TSystemlogRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP.defaultValue(org.jooq.impl.DSL.field("CURRENT_TIMESTAMP", org.jooq.impl.SQLDataType.TIMESTAMP)), this, "创建时间");

    /**
     * The column <code>public.t_systemlog.log_type</code>. 日志类型
     */
    public final TableField<TSystemlogRecord, Integer> LOG_TYPE = createField("log_type", org.jooq.impl.SQLDataType.INTEGER, this, "日志类型");

    /**
     * Create a <code>public.t_systemlog</code> table reference
     */
    public TSystemlog() {
        this(DSL.name("t_systemlog"), null);
    }

    /**
     * Create an aliased <code>public.t_systemlog</code> table reference
     */
    public TSystemlog(String alias) {
        this(DSL.name(alias), T_SYSTEMLOG);
    }

    /**
     * Create an aliased <code>public.t_systemlog</code> table reference
     */
    public TSystemlog(Name alias) {
        this(alias, T_SYSTEMLOG);
    }

    private TSystemlog(Name alias, Table<TSystemlogRecord> aliased) {
        this(alias, aliased, null);
    }

    private TSystemlog(Name alias, Table<TSystemlogRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("系统日志"));
    }

    public <O extends Record> TSystemlog(Table<O> child, ForeignKey<O, TSystemlogRecord> key) {
        super(child, key, T_SYSTEMLOG);
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
        return Arrays.<Index>asList(Indexes.T_SYSTEMLOG_PKEY);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TSystemlogRecord> getPrimaryKey() {
        return Keys.T_SYSTEMLOG_PKEY;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TSystemlogRecord>> getKeys() {
        return Arrays.<UniqueKey<TSystemlogRecord>>asList(Keys.T_SYSTEMLOG_PKEY);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSystemlog as(String alias) {
        return new TSystemlog(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSystemlog as(Name alias) {
        return new TSystemlog(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TSystemlog rename(String name) {
        return new TSystemlog(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TSystemlog rename(Name name) {
        return new TSystemlog(name, null);
    }
}