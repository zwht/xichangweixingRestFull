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
import org.poem.jooq.tables.records.TTenderOrgationRecord;


/**
 * 投标机构
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TTenderOrgation extends TableImpl<TTenderOrgationRecord> {

    private static final long serialVersionUID = 1739986007;

    /**
     * The reference instance of <code>public.t_tender_orgation</code>
     */
    public static final TTenderOrgation T_TENDER_ORGATION = new TTenderOrgation();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TTenderOrgationRecord> getRecordType() {
        return TTenderOrgationRecord.class;
    }

    /**
     * The column <code>public.t_tender_orgation.id</code>.
     */
    public final TableField<TTenderOrgationRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.t_tender_orgation.code</code>. 机构编码
     */
    public final TableField<TTenderOrgationRecord, String> CODE = createField("code", org.jooq.impl.SQLDataType.VARCHAR(200), this, "机构编码");

    /**
     * The column <code>public.t_tender_orgation.name</code>. 机构名字
     */
    public final TableField<TTenderOrgationRecord, String> NAME = createField("name", org.jooq.impl.SQLDataType.VARCHAR(200), this, "机构名字");

    /**
     * The column <code>public.t_tender_orgation.region</code>. 所在地区
     */
    public final TableField<TTenderOrgationRecord, String> REGION = createField("region", org.jooq.impl.SQLDataType.VARCHAR(200), this, "所在地区");

    /**
     * The column <code>public.t_tender_orgation.address</code>. 详细地址
     */
    public final TableField<TTenderOrgationRecord, String> ADDRESS = createField("address", org.jooq.impl.SQLDataType.VARCHAR(500), this, "详细地址");

    /**
     * The column <code>public.t_tender_orgation.social_credit_code</code>. 统一社会信用代码
     */
    public final TableField<TTenderOrgationRecord, String> SOCIAL_CREDIT_CODE = createField("social_credit_code", org.jooq.impl.SQLDataType.VARCHAR(50), this, "统一社会信用代码");

    /**
     * The column <code>public.t_tender_orgation.regist_date</code>. 注册日期
     */
    public final TableField<TTenderOrgationRecord, Timestamp> REGIST_DATE = createField("regist_date", org.jooq.impl.SQLDataType.TIMESTAMP, this, "注册日期");

    /**
     * The column <code>public.t_tender_orgation.legal_person</code>. 法人姓名
     */
    public final TableField<TTenderOrgationRecord, String> LEGAL_PERSON = createField("legal_person", org.jooq.impl.SQLDataType.VARCHAR(20), this, "法人姓名");

    /**
     * The column <code>public.t_tender_orgation.legal_person_name</code>. 法人身份证
     */
    public final TableField<TTenderOrgationRecord, String> LEGAL_PERSON_NAME = createField("legal_person_name", org.jooq.impl.SQLDataType.VARCHAR(50), this, "法人身份证");

    /**
     * The column <code>public.t_tender_orgation.contacts_user_name</code>. 联系人姓名
     */
    public final TableField<TTenderOrgationRecord, String> CONTACTS_USER_NAME = createField("contacts_user_name", org.jooq.impl.SQLDataType.VARCHAR(50), this, "联系人姓名");

    /**
     * The column <code>public.t_tender_orgation.contacts_use_idnum</code>. 联系人身份证
     */
    public final TableField<TTenderOrgationRecord, String> CONTACTS_USE_IDNUM = createField("contacts_use_idnum", org.jooq.impl.SQLDataType.VARCHAR(50), this, "联系人身份证");

    /**
     * The column <code>public.t_tender_orgation.phone</code>. 联系电话
     */
    public final TableField<TTenderOrgationRecord, String> PHONE = createField("phone", org.jooq.impl.SQLDataType.VARCHAR(50), this, "联系电话");

    /**
     * The column <code>public.t_tender_orgation.grade</code>. 评级
     */
    public final TableField<TTenderOrgationRecord, Long> GRADE = createField("grade", org.jooq.impl.SQLDataType.BIGINT, this, "评级");

    /**
     * The column <code>public.t_tender_orgation.remark</code>. 备注
     */
    public final TableField<TTenderOrgationRecord, String> REMARK = createField("remark", org.jooq.impl.SQLDataType.VARCHAR(500), this, "备注");

    /**
     * The column <code>public.t_tender_orgation.status</code>. 状态
     */
    public final TableField<TTenderOrgationRecord, Integer> STATUS = createField("status", org.jooq.impl.SQLDataType.INTEGER, this, "状态");

    /**
     * The column <code>public.t_tender_orgation.create_user</code>. 创建人
     */
    public final TableField<TTenderOrgationRecord, Long> CREATE_USER = createField("create_user", org.jooq.impl.SQLDataType.BIGINT, this, "创建人");

    /**
     * The column <code>public.t_tender_orgation.create_time</code>. 创建时间
     */
    public final TableField<TTenderOrgationRecord, Timestamp> CREATE_TIME = createField("create_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "创建时间");

    /**
     * The column <code>public.t_tender_orgation.update_user</code>. 修改人
     */
    public final TableField<TTenderOrgationRecord, Long> UPDATE_USER = createField("update_user", org.jooq.impl.SQLDataType.BIGINT, this, "修改人");

    /**
     * The column <code>public.t_tender_orgation.update_time</code>. 修改时间
     */
    public final TableField<TTenderOrgationRecord, Timestamp> UPDATE_TIME = createField("update_time", org.jooq.impl.SQLDataType.TIMESTAMP, this, "修改时间");

    /**
     * The column <code>public.t_tender_orgation.flag</code>. 标识
     */
    public final TableField<TTenderOrgationRecord, Boolean> FLAG = createField("flag", org.jooq.impl.SQLDataType.BOOLEAN, this, "标识");

    /**
     * The column <code>public.t_tender_orgation.logo</code>. logo
     */
    public final TableField<TTenderOrgationRecord, String> LOGO = createField("logo", org.jooq.impl.SQLDataType.VARCHAR(300), this, "logo");

    /**
     * Create a <code>public.t_tender_orgation</code> table reference
     */
    public TTenderOrgation() {
        this(DSL.name("t_tender_orgation"), null);
    }

    /**
     * Create an aliased <code>public.t_tender_orgation</code> table reference
     */
    public TTenderOrgation(String alias) {
        this(DSL.name(alias), T_TENDER_ORGATION);
    }

    /**
     * Create an aliased <code>public.t_tender_orgation</code> table reference
     */
    public TTenderOrgation(Name alias) {
        this(alias, T_TENDER_ORGATION);
    }

    private TTenderOrgation(Name alias, Table<TTenderOrgationRecord> aliased) {
        this(alias, aliased, null);
    }

    private TTenderOrgation(Name alias, Table<TTenderOrgationRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment("投标机构"));
    }

    public <O extends Record> TTenderOrgation(Table<O> child, ForeignKey<O, TTenderOrgationRecord> key) {
        super(child, key, T_TENDER_ORGATION);
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
        return Arrays.<Index>asList(Indexes.PK_T_TENDER_ORGATION);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TTenderOrgationRecord> getPrimaryKey() {
        return Keys.PK_T_TENDER_ORGATION;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TTenderOrgationRecord>> getKeys() {
        return Arrays.<UniqueKey<TTenderOrgationRecord>>asList(Keys.PK_T_TENDER_ORGATION);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TTenderOrgation as(String alias) {
        return new TTenderOrgation(DSL.name(alias), this);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TTenderOrgation as(Name alias) {
        return new TTenderOrgation(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TTenderOrgation rename(String name) {
        return new TTenderOrgation(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TTenderOrgation rename(Name name) {
        return new TTenderOrgation(name, null);
    }
}
