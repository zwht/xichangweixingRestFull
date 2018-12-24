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
import org.poem.jooq.tables.records.TSubjectRecord;


/**
 * 学科
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TSubject extends TableImpl<TSubjectRecord> {

    private static final long serialVersionUID = 1115670486;

    /**
     * The reference instance of <code>public.t_subject</code>
     */
    public static final TSubject T_SUBJECT = new TSubject();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TSubjectRecord> getRecordType() {
        return TSubjectRecord.class;
    }

    /**
     * The column <code>public.t_subject.id</code>.
     */
    public final TableField<TSubjectRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_subject.name</code>. 标题
     */
    public final TableField<TSubjectRecord, String> NAME = createField("name", org.jooq.impl.SQLDataType.VARCHAR(200), this, "标题");

    /**
     * The column <code>public.t_subject.status</code>. 状态
     */
    public final TableField<TSubjectRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_subject.create_user</code>. 创建人
     */
    public final TableField<TSubjectRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_subject.create_time</code>. 创建时间
     */
    public final TableField<TSubjectRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_subject.update_user</code>. 修改人
     */
    public final TableField<TSubjectRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_subject.update_time</code>. 修改时间
     */
    public final TableField<TSubjectRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_subject.flag</code>. 标识
     */
    public final TableField<TSubjectRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标识");

    /**
     * Create a <code>public.t_subject</code> table reference
     */
    public TSubject() {
        this(DSL.name("t_subject"), null);
    }

    /**
     * Create an aliased <code>public.t_subject</code> table reference
     */
    public TSubject(String alias) {
        this(DSL.name(alias), T_SUBJECT);
    }

    /**
     * Create an aliased <code>public.t_subject</code> table reference
     */
    public TSubject(Name alias) {
        this(alias, T_SUBJECT);
    }

    private TSubject(Name alias, Table<TSubjectRecord> aliased) {
        this(alias, aliased, null);
    }

    private TSubject(Name alias, Table<TSubjectRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("学科"));
    }

    public <O extends Record> TSubject(Table<O> child, ForeignKey<O, TSubjectRecord> key) {
        super(child, key, T_SUBJECT);
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
        return Arrays.<Index>asList(Indexes.PK_T_SUBJECT);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TSubjectRecord> getPrimaryKey() {
        return Keys.PK_T_SUBJECT;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TSubjectRecord>> getKeys() {
        return Arrays.<UniqueKey<TSubjectRecord>>asList(Keys.PK_T_SUBJECT);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSubject as(String alias) {
        return new TSubject(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSubject as(Name alias) {
        return new TSubject(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TSubject rename(String name) {
        return new TSubject(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TSubject rename(Name name) {
        return new TSubject(name, null);
    }
}