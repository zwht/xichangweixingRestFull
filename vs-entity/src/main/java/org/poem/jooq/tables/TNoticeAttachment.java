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
import org.poem.jooq.tables.records.TNoticeAttachmentRecord;


/**
 * 通知公告-附件
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TNoticeAttachment extends TableImpl<TNoticeAttachmentRecord> {

    private static final long serialVersionUID = -1177741766;

    /**
     * The reference instance of <code>public.t_notice_attachment</code>
     */
    public static final TNoticeAttachment T_NOTICE_ATTACHMENT = new TNoticeAttachment();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TNoticeAttachmentRecord> getRecordType() {
        return TNoticeAttachmentRecord.class;
    }

    /**
     * The column <code>public.t_notice_attachment.id</code>.
     */
    public final TableField<TNoticeAttachmentRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_notice_attachment.quality_notice_id</code>. 通知公告
     */
    public final TableField<TNoticeAttachmentRecord, Long> QUALITY_NOTICE_ID = createField("quality_notice_id", org.jooq.impl.SQLDataType.BIGINT, this, "通知公告");

    /**
     * The column <code>public.t_notice_attachment.file_id</code>. 文件
     */
    public final TableField<TNoticeAttachmentRecord, String> FILE_ID = createField("file_id", org.jooq.impl.SQLDataType.VARCHAR(200), this, "文件");

    /**
     * The column <code>public.t_notice_attachment.status</code>. 状态
     */
    public final TableField<TNoticeAttachmentRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_notice_attachment.create_user</code>. 创建人
     */
    public final TableField<TNoticeAttachmentRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_notice_attachment.create_time</code>. 创建时间
     */
    public final TableField<TNoticeAttachmentRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_notice_attachment.update_user</code>. 修改人
     */
    public final TableField<TNoticeAttachmentRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_notice_attachment.update_time</code>. 修改时间
     */
    public final TableField<TNoticeAttachmentRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_notice_attachment.flag</code>. 标识
     */
    public final TableField<TNoticeAttachmentRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标识");

    /**
     * Create a <code>public.t_notice_attachment</code> table reference
     */
    public TNoticeAttachment() {
        this(DSL.name("t_notice_attachment"), null);
    }

    /**
     * Create an aliased <code>public.t_notice_attachment</code> table reference
     */
    public TNoticeAttachment(String alias) {
        this(DSL.name(alias), T_NOTICE_ATTACHMENT);
    }

    /**
     * Create an aliased <code>public.t_notice_attachment</code> table reference
     */
    public TNoticeAttachment(Name alias) {
        this(alias, T_NOTICE_ATTACHMENT);
    }

    private TNoticeAttachment(Name alias, Table<TNoticeAttachmentRecord> aliased) {
        this(alias, aliased, null);
    }

    private TNoticeAttachment(Name alias, Table<TNoticeAttachmentRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("通知公告-附件"));
    }

    public <O extends Record> TNoticeAttachment(Table<O> child, ForeignKey<O, TNoticeAttachmentRecord> key) {
        super(child, key, T_NOTICE_ATTACHMENT);
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
        return Arrays.<Index>asList(Indexes.PK_T_NOTICE_ATTACHMENT);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TNoticeAttachmentRecord> getPrimaryKey() {
        return Keys.PK_T_NOTICE_ATTACHMENT;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TNoticeAttachmentRecord>> getKeys() {
        return Arrays.<UniqueKey<TNoticeAttachmentRecord>>asList(Keys.PK_T_NOTICE_ATTACHMENT);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNoticeAttachment as(String alias) {
        return new TNoticeAttachment(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNoticeAttachment as(Name alias) {
        return new TNoticeAttachment(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TNoticeAttachment rename(String name) {
        return new TNoticeAttachment(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TNoticeAttachment rename(Name name) {
        return new TNoticeAttachment(name, null);
    }
}