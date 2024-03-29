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
import org.poem.jooq.tables.records.TPartyRecord;


/**
 * 新闻
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TParty extends TableImpl<TPartyRecord> {

    private static final long serialVersionUID = -389927491;

    /**
     * The reference instance of <code>public.t_party</code>
     */
    public static final TParty T_PARTY = new TParty();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TPartyRecord> getRecordType() {
        return TPartyRecord.class;
    }

    /**
     * The column <code>public.t_party.id</code>.
     */
    public final TableField<TPartyRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_party.title</code>. 标题
     */
    public final TableField<TPartyRecord, String> TITLE = createField("title", org.jooq.impl.SQLDataType.VARCHAR(200), this, "标题");

    /**
     * The column <code>public.t_party.attachment</code>. 封面
     */
    public final TableField<TPartyRecord, String> ATTACHMENT = createField("attachment", org.jooq.impl.SQLDataType.VARCHAR(300), this, "封面");

    /**
     * The column <code>public.t_party.content</code>. 内容
     */
    public final TableField<TPartyRecord, String> CONTENT = createField("content", org.jooq.impl.SQLDataType.CLOB, this, "内容");

    /**
     * The column <code>public.t_party.read_count</code>. 阅读量
     */
    public final TableField<TPartyRecord, Long> READ_COUNT = createField("read_count", org.jooq.impl.SQLDataType.BIGINT, this, "阅读量");

    /**
     * The column <code>public.t_party.status</code>. 状态
     */
    public final TableField<TPartyRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_party.create_user</code>. 创建人
     */
    public final TableField<TPartyRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_party.create_time</code>. 创建时间
     */
    public final TableField<TPartyRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_party.update_user</code>. 修改人
     */
    public final TableField<TPartyRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_party.update_time</code>. 修改时间
     */
    public final TableField<TPartyRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_party.flag</code>. 标识
     */
    public final TableField<TPartyRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标识");

    /**
     * Create a <code>public.t_party</code> table reference
     */
    public TParty() {
        this(DSL.name("t_party"), null);
    }

    /**
     * Create an aliased <code>public.t_party</code> table reference
     */
    public TParty(String alias) {
        this(DSL.name(alias), T_PARTY);
    }

    /**
     * Create an aliased <code>public.t_party</code> table reference
     */
    public TParty(Name alias) {
        this(alias, T_PARTY);
    }

    private TParty(Name alias, Table<TPartyRecord> aliased) {
        this(alias, aliased, null);
    }

    private TParty(Name alias, Table<TPartyRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("新闻"));
    }

    public <O extends Record> TParty(Table<O> child, ForeignKey<O, TPartyRecord> key) {
        super(child, key, T_PARTY);
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
        return Arrays.<Index>asList(Indexes.PK_T_PARTY);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TPartyRecord> getPrimaryKey() {
        return Keys.PK_T_PARTY;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TPartyRecord>> getKeys() {
        return Arrays.<UniqueKey<TPartyRecord>>asList(Keys.PK_T_PARTY);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TParty as(String alias) {
        return new TParty(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TParty as(Name alias) {
        return new TParty(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TParty rename(String name) {
        return new TParty(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TParty rename(Name name) {
        return new TParty(name, null);
    }
}
