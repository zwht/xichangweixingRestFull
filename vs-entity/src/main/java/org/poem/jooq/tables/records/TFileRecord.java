/*
 * This file is generated by jOOQ.
 */
package org.poem.jooq.tables.records;


import java.sql.Timestamp;

import javax.annotation.Generated;

import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record11;
import org.jooq.Row11;
import org.jooq.impl.UpdatableRecordImpl;
import org.poem.jooq.tables.TFile;


/**
 * 文件
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TFileRecord extends UpdatableRecordImpl<TFileRecord> implements Record11<Long, String, String, String, Long, Integer, Long, Timestamp, Long, Timestamp, Boolean> {

    private static final long serialVersionUID = -1210254737;

    /**
     * Setter for <code>public.t_file.id</code>.
     */
    public void setId(Long value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.t_file.id</code>.
     */
    public Long getId() {
        return (Long) get(0);
    }

    /**
     * Setter for <code>public.t_file.name</code>. 名字
     */
    public void setName(String value) {
        set(1, value);
    }

    /**
     * Getter for <code>public.t_file.name</code>. 名字
     */
    public String getName() {
        return (String) get(1);
    }

    /**
     * Setter for <code>public.t_file.file_type</code>. 文件类型
     */
    public void setFileType(String value) {
        set(2, value);
    }

    /**
     * Getter for <code>public.t_file.file_type</code>. 文件类型
     */
    public String getFileType() {
        return (String) get(2);
    }

    /**
     * Setter for <code>public.t_file.file_url</code>.
     */
    public void setFileUrl(String value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.t_file.file_url</code>.
     */
    public String getFileUrl() {
        return (String) get(3);
    }

    /**
     * Setter for <code>public.t_file.file_size</code>. 文件大小
     */
    public void setFileSize(Long value) {
        set(4, value);
    }

    /**
     * Getter for <code>public.t_file.file_size</code>. 文件大小
     */
    public Long getFileSize() {
        return (Long) get(4);
    }

    /**
     * Setter for <code>public.t_file.status</code>. 状态
     */
    public void setStatus(Integer value) {
        set(5, value);
    }

    /**
     * Getter for <code>public.t_file.status</code>. 状态
     */
    public Integer getStatus() {
        return (Integer) get(5);
    }

    /**
     * Setter for <code>public.t_file.create_user</code>. 创建人
     */
    public void setCreateUser(Long value) {
        set(6, value);
    }

    /**
     * Getter for <code>public.t_file.create_user</code>. 创建人
     */
    public Long getCreateUser() {
        return (Long) get(6);
    }

    /**
     * Setter for <code>public.t_file.create_time</code>. 创建时间
     */
    public void setCreateTime(Timestamp value) {
        set(7, value);
    }

    /**
     * Getter for <code>public.t_file.create_time</code>. 创建时间
     */
    public Timestamp getCreateTime() {
        return (Timestamp) get(7);
    }

    /**
     * Setter for <code>public.t_file.update_user</code>. 修改人
     */
    public void setUpdateUser(Long value) {
        set(8, value);
    }

    /**
     * Getter for <code>public.t_file.update_user</code>. 修改人
     */
    public Long getUpdateUser() {
        return (Long) get(8);
    }

    /**
     * Setter for <code>public.t_file.update_time</code>. 修改时间
     */
    public void setUpdateTime(Timestamp value) {
        set(9, value);
    }

    /**
     * Getter for <code>public.t_file.update_time</code>. 修改时间
     */
    public Timestamp getUpdateTime() {
        return (Timestamp) get(9);
    }

    /**
     * Setter for <code>public.t_file.flag</code>. 标识
     */
    public void setFlag(Boolean value) {
        set(10, value);
    }

    /**
     * Getter for <code>public.t_file.flag</code>. 标识
     */
    public Boolean getFlag() {
        return (Boolean) get(10);
    }

    // -------------------------------------------------------------------------
    // Primary key information
    // -------------------------------------------------------------------------

    /**
     * {@inheritDoc}
     */
    @Override
    public Record1<Long> key() {
        return (Record1) super.key();
    }

    // -------------------------------------------------------------------------
    // Record11 type implementation
    // -------------------------------------------------------------------------

    /**
     * {@inheritDoc}
     */
    @Override
    public Row11<Long, String, String, String, Long, Integer, Long, Timestamp, Long, Timestamp, Boolean> fieldsRow() {
        return (Row11) super.fieldsRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Row11<Long, String, String, String, Long, Integer, Long, Timestamp, Long, Timestamp, Boolean> valuesRow() {
        return (Row11) super.valuesRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field1() {
        return TFile.T_FILE.ID;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field2() {
        return TFile.T_FILE.NAME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field3() {
        return TFile.T_FILE.FILE_TYPE;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field4() {
        return TFile.T_FILE.FILE_URL;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field5() {
        return TFile.T_FILE.FILE_SIZE;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Integer> field6() {
        return TFile.T_FILE.STATUS;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field7() {
        return TFile.T_FILE.CREATE_USER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field8() {
        return TFile.T_FILE.CREATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field9() {
        return TFile.T_FILE.UPDATE_USER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field10() {
        return TFile.T_FILE.UPDATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Boolean> field11() {
        return TFile.T_FILE.FLAG;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long component1() {
        return getId();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component2() {
        return getName();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component3() {
        return getFileType();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component4() {
        return getFileUrl();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long component5() {
        return getFileSize();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Integer component6() {
        return getStatus();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long component7() {
        return getCreateUser();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp component8() {
        return getCreateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long component9() {
        return getUpdateUser();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp component10() {
        return getUpdateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Boolean component11() {
        return getFlag();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long value1() {
        return getId();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value2() {
        return getName();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value3() {
        return getFileType();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value4() {
        return getFileUrl();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long value5() {
        return getFileSize();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Integer value6() {
        return getStatus();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long value7() {
        return getCreateUser();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp value8() {
        return getCreateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long value9() {
        return getUpdateUser();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp value10() {
        return getUpdateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Boolean value11() {
        return getFlag();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TFileRecord value1(Long value) {
        setId(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TFileRecord value2(String value) {
        setName(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TFileRecord value3(String value) {
        setFileType(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TFileRecord value4(String value) {
        setFileUrl(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TFileRecord value5(Long value) {
        setFileSize(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TFileRecord value6(Integer value) {
        setStatus(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TFileRecord value7(Long value) {
        setCreateUser(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TFileRecord value8(Timestamp value) {
        setCreateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TFileRecord value9(Long value) {
        setUpdateUser(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TFileRecord value10(Timestamp value) {
        setUpdateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TFileRecord value11(Boolean value) {
        setFlag(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TFileRecord values(Long value1, String value2, String value3, String value4, Long value5, Integer value6, Long value7, Timestamp value8, Long value9, Timestamp value10, Boolean value11) {
        value1(value1);
        value2(value2);
        value3(value3);
        value4(value4);
        value5(value5);
        value6(value6);
        value7(value7);
        value8(value8);
        value9(value9);
        value10(value10);
        value11(value11);
        return this;
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached TFileRecord
     */
    public TFileRecord() {
        super(TFile.T_FILE);
    }

    /**
     * Create a detached, initialised TFileRecord
     */
    public TFileRecord(Long id, String name, String fileType, String fileUrl, Long fileSize, Integer status, Long createUser, Timestamp createTime, Long updateUser, Timestamp updateTime, Boolean flag) {
        super(TFile.T_FILE);

        set(0, id);
        set(1, name);
        set(2, fileType);
        set(3, fileUrl);
        set(4, fileSize);
        set(5, status);
        set(6, createUser);
        set(7, createTime);
        set(8, updateUser);
        set(9, updateTime);
        set(10, flag);
    }
}
