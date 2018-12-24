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
import org.poem.jooq.tables.records.TDataDownloadRecord;


/**
 * 资料下载
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TDataDownload extends TableImpl<TDataDownloadRecord> {

    private static final long serialVersionUID = -1827408562;

    /**
     * The reference instance of <code>public.t_data_download</code>
     */
    public static final TDataDownload T_DATA_DOWNLOAD = new TDataDownload();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TDataDownloadRecord> getRecordType() {
        return TDataDownloadRecord.class;
    }

    /**
     * The column <code>public.t_data_download.id</code>.
     */
    public final TableField<TDataDownloadRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_data_download.report_name</code>. 资料名称
     */
    public final TableField<TDataDownloadRecord, String> REPORT_NAME = createField("report_name", org.jooq.impl.SQLDataType.VARCHAR(50), this, "资料名称");

    /**
     * The column <code>public.t_data_download.subject_id</code>. 学科
     */
    public final TableField<TDataDownloadRecord, String> SUBJECT_ID = createField("subject_id", org.jooq.impl.SQLDataType.VARCHAR(200), this, "学科");

    /**
     * The column <code>public.t_data_download.downloads</code>. 下载量
     */
    public final TableField<TDataDownloadRecord, Integer> DOWNLOADS = createField("downloads", org.jooq.impl.SQLDataType.INTEGER, this, "下载量");

    /**
     * The column <code>public.t_data_download.status</code>. 状态
     */
    public final TableField<TDataDownloadRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_data_download.create_user</code>. 创建人
     */
    public final TableField<TDataDownloadRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_data_download.create_time</code>. 创建时间
     */
    public final TableField<TDataDownloadRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_data_download.update_user</code>. 修改人
     */
    public final TableField<TDataDownloadRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_data_download.update_time</code>. 修改时间
     */
    public final TableField<TDataDownloadRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_data_download.flag</code>. 标识
     */
    public final TableField<TDataDownloadRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标识");

    /**
     * Create a <code>public.t_data_download</code> table reference
     */
    public TDataDownload() {
        this(DSL.name("t_data_download"), null);
    }

    /**
     * Create an aliased <code>public.t_data_download</code> table reference
     */
    public TDataDownload(String alias) {
        this(DSL.name(alias), T_DATA_DOWNLOAD);
    }

    /**
     * Create an aliased <code>public.t_data_download</code> table reference
     */
    public TDataDownload(Name alias) {
        this(alias, T_DATA_DOWNLOAD);
    }

    private TDataDownload(Name alias, Table<TDataDownloadRecord> aliased) {
        this(alias, aliased, null);
    }

    private TDataDownload(Name alias, Table<TDataDownloadRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("资料下载"));
    }

    public <O extends Record> TDataDownload(Table<O> child, ForeignKey<O, TDataDownloadRecord> key) {
        super(child, key, T_DATA_DOWNLOAD);
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
        return Arrays.<Index>asList(Indexes.PK_T_DATA_DOWNLOAD);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TDataDownloadRecord> getPrimaryKey() {
        return Keys.PK_T_DATA_DOWNLOAD;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TDataDownloadRecord>> getKeys() {
        return Arrays.<UniqueKey<TDataDownloadRecord>>asList(Keys.PK_T_DATA_DOWNLOAD);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TDataDownload as(String alias) {
        return new TDataDownload(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TDataDownload as(Name alias) {
        return new TDataDownload(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TDataDownload rename(String name) {
        return new TDataDownload(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TDataDownload rename(Name name) {
        return new TDataDownload(name, null);
    }
}
