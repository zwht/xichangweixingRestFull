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
import org.poem.jooq.tables.records.TArmsAttachmentRecord;


/**
 * 强军新闻附件
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TArmsAttachment extends TableImpl<TArmsAttachmentRecord> {

    private static final long serialVersionUID = -1342672762;

    /**
     * The reference instance of <code>public.t_arms_attachment</code>
     */
    public static final TArmsAttachment T_ARMS_ATTACHMENT = new TArmsAttachment();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TArmsAttachmentRecord> getRecordType() {
        return TArmsAttachmentRecord.class;
    }

    /**
     * The column <code>public.t_arms_attachment.id</code>.
     */
    public final TableField<TArmsAttachmentRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_arms_attachment.arms_id</code>. 党建
     */
    public final TableField<TArmsAttachmentRecord, Long> ARMS_ID = createField("arms_id", org.jooq.impl.SQLDataType.BIGINT, this, "党建");

    /**
     * The column <code>public.t_arms_attachment.file_id</code>. 文件
     */
    public final TableField<TArmsAttachmentRecord, String> FILE_ID = createField("file_id", org.jooq.impl.SQLDataType.VARCHAR(200), this, "文件");

    /**
     * The column <code>public.t_arms_attachment.status</code>. 状态
     */
    public final TableField<TArmsAttachmentRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_arms_attachment.create_user</code>. 创建人
     */
    public final TableField<TArmsAttachmentRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_arms_attachment.create_time</code>. 创建时间
     */
    public final TableField<TArmsAttachmentRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_arms_attachment.update_user</code>. 修改人
     */
    public final TableField<TArmsAttachmentRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_arms_attachment.update_time</code>. 修改时间
     */
    public final TableField<TArmsAttachmentRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_arms_attachment.flag</code>. 标识
     */
    public final TableField<TArmsAttachmentRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标识");

    /**
     * Create a <code>public.t_arms_attachment</code> table reference
     */
    public TArmsAttachment() {
        this(DSL.name("t_arms_attachment"), null);
    }

    /**
     * Create an aliased <code>public.t_arms_attachment</code> table reference
     */
    public TArmsAttachment(String alias) {
        this(DSL.name(alias), T_ARMS_ATTACHMENT);
    }

    /**
     * Create an aliased <code>public.t_arms_attachment</code> table reference
     */
    public TArmsAttachment(Name alias) {
        this(alias, T_ARMS_ATTACHMENT);
    }

    private TArmsAttachment(Name alias, Table<TArmsAttachmentRecord> aliased) {
        this(alias, aliased, null);
    }

    private TArmsAttachment(Name alias, Table<TArmsAttachmentRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("强军新闻附件"));
    }

    public <O extends Record> TArmsAttachment(Table<O> child, ForeignKey<O, TArmsAttachmentRecord> key) {
        super(child, key, T_ARMS_ATTACHMENT);
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
        return Arrays.<Index>asList(Indexes.PK_T_ARMS_ATTACHMENT);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TArmsAttachmentRecord> getPrimaryKey() {
        return Keys.PK_T_ARMS_ATTACHMENT;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TArmsAttachmentRecord>> getKeys() {
        return Arrays.<UniqueKey<TArmsAttachmentRecord>>asList(Keys.PK_T_ARMS_ATTACHMENT);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsAttachment as(String alias) {
        return new TArmsAttachment(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsAttachment as(Name alias) {
        return new TArmsAttachment(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TArmsAttachment rename(String name) {
        return new TArmsAttachment(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TArmsAttachment rename(Name name) {
        return new TArmsAttachment(name, null);
    }
}
