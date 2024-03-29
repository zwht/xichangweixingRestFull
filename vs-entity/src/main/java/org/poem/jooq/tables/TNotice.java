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
import org.poem.jooq.tables.records.TNoticeRecord;


/**
 * 通知公告
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TNotice extends TableImpl<TNoticeRecord> {

    private static final long serialVersionUID = 1632482457;

    /**
     * The reference instance of <code>public.t_notice</code>
     */
    public static final TNotice T_NOTICE = new TNotice();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TNoticeRecord> getRecordType() {
        return TNoticeRecord.class;
    }

    /**
     * The column <code>public.t_notice.id</code>.
     */
    public final TableField<TNoticeRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_notice.title</code>. 标题
     */
    public final TableField<TNoticeRecord, String> TITLE = createField("title", org.jooq.impl.SQLDataType.VARCHAR(200), this, "标题");

    /**
     * The column <code>public.t_notice.top</code>. 置顶
     */
    public final TableField<TNoticeRecord, Boolean> TOP = createField("top", org.jooq.impl.SQLDataType.BOOLEAN, this, "置顶");

    /**
     * The column <code>public.t_notice.content</code>. 内容
     */
    public final TableField<TNoticeRecord, String> CONTENT = createField("content", org.jooq.impl.SQLDataType.CLOB, this, "内容");

    /**
     * The column <code>public.t_notice.read_count</code>. 阅读量
     */
    public final TableField<TNoticeRecord, Long> READ_COUNT = createField("read_count", org.jooq.impl.SQLDataType.BIGINT, this, "阅读量");

    /**
     * The column <code>public.t_notice.status</code>. 状态
     */
    public final TableField<TNoticeRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_notice.create_user</code>. 创建人
     */
    public final TableField<TNoticeRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_notice.create_time</code>. 创建时间
     */
    public final TableField<TNoticeRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_notice.update_user</code>. 修改人
     */
    public final TableField<TNoticeRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_notice.update_time</code>. 修改时间
     */
    public final TableField<TNoticeRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_notice.flag</code>. 标识
     */
    public final TableField<TNoticeRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标识");

    /**
     * Create a <code>public.t_notice</code> table reference
     */
    public TNotice() {
        this(DSL.name("t_notice"), null);
    }

    /**
     * Create an aliased <code>public.t_notice</code> table reference
     */
    public TNotice(String alias) {
        this(DSL.name(alias), T_NOTICE);
    }

    /**
     * Create an aliased <code>public.t_notice</code> table reference
     */
    public TNotice(Name alias) {
        this(alias, T_NOTICE);
    }

    private TNotice(Name alias, Table<TNoticeRecord> aliased) {
        this(alias, aliased, null);
    }

    private TNotice(Name alias, Table<TNoticeRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("通知公告"));
    }

    public <O extends Record> TNotice(Table<O> child, ForeignKey<O, TNoticeRecord> key) {
        super(child, key, T_NOTICE);
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
        return Arrays.<Index>asList(Indexes.PK_T_NOTICE);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TNoticeRecord> getPrimaryKey() {
        return Keys.PK_T_NOTICE;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TNoticeRecord>> getKeys() {
        return Arrays.<UniqueKey<TNoticeRecord>>asList(Keys.PK_T_NOTICE);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNotice as(String alias) {
        return new TNotice(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNotice as(Name alias) {
        return new TNotice(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TNotice rename(String name) {
        return new TNotice(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TNotice rename(Name name) {
        return new TNotice(name, null);
    }
}
