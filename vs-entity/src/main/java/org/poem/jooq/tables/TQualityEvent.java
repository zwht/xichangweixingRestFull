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
import org.poem.jooq.tables.records.TQualityEventRecord;


/**
 * 质量事件
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TQualityEvent extends TableImpl<TQualityEventRecord> {

    private static final long serialVersionUID = 649374165;

    /**
     * The reference instance of <code>public.t_quality_event</code>
     */
    public static final TQualityEvent T_QUALITY_EVENT = new TQualityEvent();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TQualityEventRecord> getRecordType() {
        return TQualityEventRecord.class;
    }

    /**
     * The column <code>public.t_quality_event.id</code>.
     */
    public final TableField<TQualityEventRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_quality_event.name</code>. 事件名称
     */
    public final TableField<TQualityEventRecord, String> NAME = createField("name", org.jooq.impl.SQLDataType.VARCHAR(200), this, "事件名称");

    /**
     * The column <code>public.t_quality_event.event_level</code>. 事件级别
     */
    public final TableField<TQualityEventRecord, Long> EVENT_LEVEL = createField("event_level", org.jooq.impl.SQLDataType.BIGINT, this, "事件级别");

    /**
     * The column <code>public.t_quality_event.supplier_id</code>. 供应商
     */
    public final TableField<TQualityEventRecord, Long> SUPPLIER_ID = createField("supplier_id", org.jooq.impl.SQLDataType.BIGINT, this, "供应商");

    /**
     * The column <code>public.t_quality_event.materials</code>. 涉及物料
     */
    public final TableField<TQualityEventRecord, String> MATERIALS = createField("materials", org.jooq.impl.SQLDataType.VARCHAR(200), this, "涉及物料");

    /**
     * The column <code>public.t_quality_event.occurrence_time</code>. 发生时间
     */
    public final TableField<TQualityEventRecord, Timestamp> OCCURRENCE_TIME = createField("occurrence_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "发生时间");

    /**
     * The column <code>public.t_quality_event.depart_id</code>. 发生部门
     */
    public final TableField<TQualityEventRecord, Integer> DEPART_ID = createField("depart_id", org.jooq.impl.SQLDataType.INTEGER, this, "发生部门");

    /**
     * The column <code>public.t_quality_event.remark</code>. 事件描述
     */
    public final TableField<TQualityEventRecord, String> REMARK = createField("remark", org.jooq.impl.SQLDataType.VARCHAR(200), this, "事件描述");

    /**
     * The column <code>public.t_quality_event.top</code>. 置顶
     */
    public final TableField<TQualityEventRecord, Boolean> TOP = createField("top", org.jooq.impl.SQLDataType.BOOLEAN, this, "置顶");

    /**
     * The column <code>public.t_quality_event.status</code>. 状态
     */
    public final TableField<TQualityEventRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_quality_event.create_user</code>. 创建人
     */
    public final TableField<TQualityEventRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_quality_event.create_time</code>. 创建时间
     */
    public final TableField<TQualityEventRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_quality_event.update_user</code>. 修改人
     */
    public final TableField<TQualityEventRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_quality_event.update_time</code>. 修改时间
     */
    public final TableField<TQualityEventRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_quality_event.flag</code>. 标识
     */
    public final TableField<TQualityEventRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标识");

    /**
     * Create a <code>public.t_quality_event</code> table reference
     */
    public TQualityEvent() {
        this(DSL.name("t_quality_event"), null);
    }

    /**
     * Create an aliased <code>public.t_quality_event</code> table reference
     */
    public TQualityEvent(String alias) {
        this(DSL.name(alias), T_QUALITY_EVENT);
    }

    /**
     * Create an aliased <code>public.t_quality_event</code> table reference
     */
    public TQualityEvent(Name alias) {
        this(alias, T_QUALITY_EVENT);
    }

    private TQualityEvent(Name alias, Table<TQualityEventRecord> aliased) {
        this(alias, aliased, null);
    }

    private TQualityEvent(Name alias, Table<TQualityEventRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("质量事件"));
    }

    public <O extends Record> TQualityEvent(Table<O> child, ForeignKey<O, TQualityEventRecord> key) {
        super(child, key, T_QUALITY_EVENT);
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
        return Arrays.<Index>asList(Indexes.PK_T_QUALITY_EVENT);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TQualityEventRecord> getPrimaryKey() {
        return Keys.PK_T_QUALITY_EVENT;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TQualityEventRecord>> getKeys() {
        return Arrays.<UniqueKey<TQualityEventRecord>>asList(Keys.PK_T_QUALITY_EVENT);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TQualityEvent as(String alias) {
        return new TQualityEvent(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TQualityEvent as(Name alias) {
        return new TQualityEvent(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TQualityEvent rename(String name) {
        return new TQualityEvent(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TQualityEvent rename(Name name) {
        return new TQualityEvent(name, null);
    }
}
