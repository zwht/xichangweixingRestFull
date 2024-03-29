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
import org.poem.jooq.tables.records.TQualityNoticeRecord;


/**
 * 质量公告
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TQualityNotice extends TableImpl<TQualityNoticeRecord> {

    private static final long serialVersionUID = 1258066075;

    /**
     * The reference instance of <code>public.t_quality_notice</code>
     */
    public static final TQualityNotice T_QUALITY_NOTICE = new TQualityNotice();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TQualityNoticeRecord> getRecordType() {
        return TQualityNoticeRecord.class;
    }

    /**
     * The column <code>public.t_quality_notice.id</code>.
     */
    public final TableField<TQualityNoticeRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_quality_notice.title</code>. 标题
     */
    public final TableField<TQualityNoticeRecord, String> TITLE = createField("title", org.jooq.impl.SQLDataType.VARCHAR(200), this, "标题");

    /**
     * The column <code>public.t_quality_notice.top</code>. 置顶
     */
    public final TableField<TQualityNoticeRecord, Boolean> TOP = createField("top", org.jooq.impl.SQLDataType.BOOLEAN, this, "置顶");

    /**
     * The column <code>public.t_quality_notice.content</code>. 内容
     */
    public final TableField<TQualityNoticeRecord, String> CONTENT = createField("content", org.jooq.impl.SQLDataType.CLOB, this, "内容");

    /**
     * The column <code>public.t_quality_notice.read_count</code>. 阅读量
     */
    public final TableField<TQualityNoticeRecord, Long> READ_COUNT = createField("read_count", org.jooq.impl.SQLDataType.BIGINT, this, "阅读量");

    /**
     * The column <code>public.t_quality_notice.status</code>. 状态
     */
    public final TableField<TQualityNoticeRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_quality_notice.create_user</code>. 创建人
     */
    public final TableField<TQualityNoticeRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_quality_notice.create_time</code>. 创建时间
     */
    public final TableField<TQualityNoticeRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_quality_notice.update_user</code>. 修改人
     */
    public final TableField<TQualityNoticeRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_quality_notice.update_time</code>. 修改时间
     */
    public final TableField<TQualityNoticeRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_quality_notice.flag</code>. 标识
     */
    public final TableField<TQualityNoticeRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标识");

    /**
     * Create a <code>public.t_quality_notice</code> table reference
     */
    public TQualityNotice() {
        this(DSL.name("t_quality_notice"), null);
    }

    /**
     * Create an aliased <code>public.t_quality_notice</code> table reference
     */
    public TQualityNotice(String alias) {
        this(DSL.name(alias), T_QUALITY_NOTICE);
    }

    /**
     * Create an aliased <code>public.t_quality_notice</code> table reference
     */
    public TQualityNotice(Name alias) {
        this(alias, T_QUALITY_NOTICE);
    }

    private TQualityNotice(Name alias, Table<TQualityNoticeRecord> aliased) {
        this(alias, aliased, null);
    }

    private TQualityNotice(Name alias, Table<TQualityNoticeRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("质量公告"));
    }

    public <O extends Record> TQualityNotice(Table<O> child, ForeignKey<O, TQualityNoticeRecord> key) {
        super(child, key, T_QUALITY_NOTICE);
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
        return Arrays.<Index>asList(Indexes.PK_T_QUALITY_NOTICE);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TQualityNoticeRecord> getPrimaryKey() {
        return Keys.PK_T_QUALITY_NOTICE;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TQualityNoticeRecord>> getKeys() {
        return Arrays.<UniqueKey<TQualityNoticeRecord>>asList(Keys.PK_T_QUALITY_NOTICE);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TQualityNotice as(String alias) {
        return new TQualityNotice(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TQualityNotice as(Name alias) {
        return new TQualityNotice(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TQualityNotice rename(String name) {
        return new TQualityNotice(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TQualityNotice rename(Name name) {
        return new TQualityNotice(name, null);
    }
}
