/*
 * This file is generated by jOOQ.
 */
package org.poem.jooq.tables.records;


import java.sql.Timestamp;

import javax.annotation.Generated;

import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record9;
import org.jooq.Row9;
import org.jooq.impl.UpdatableRecordImpl;
import org.poem.jooq.tables.TMessage;


/**
 * 短信
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TMessageRecord extends UpdatableRecordImpl<TMessageRecord> implements Record9<Long, String, String, Integer, Long, Timestamp, Long, Timestamp, Boolean> {

    private static final long serialVersionUID = 833922505;

    /**
     * Setter for <code>public.t_message.id</code>.
     */
    public void setId(Long value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.t_message.id</code>.
     */
    public Long getId() {
        return (Long) get(0);
    }

    /**
     * Setter for <code>public.t_message.phone</code>. 标题
     */
    public void setPhone(String value) {
        set(1, value);
    }

    /**
     * Getter for <code>public.t_message.phone</code>. 标题
     */
    public String getPhone() {
        return (String) get(1);
    }

    /**
     * Setter for <code>public.t_message.code</code>. 摘要
     */
    public void setCode(String value) {
        set(2, value);
    }

    /**
     * Getter for <code>public.t_message.code</code>. 摘要
     */
    public String getCode() {
        return (String) get(2);
    }

    /**
     * Setter for <code>public.t_message.status</code>. 状态
     */
    public void setStatus(Integer value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.t_message.status</code>. 状态
     */
    public Integer getStatus() {
        return (Integer) get(3);
    }

    /**
     * Setter for <code>public.t_message.create_user</code>. 创建人
     */
    public void setCreateUser(Long value) {
        set(4, value);
    }

    /**
     * Getter for <code>public.t_message.create_user</code>. 创建人
     */
    public Long getCreateUser() {
        return (Long) get(4);
    }

    /**
     * Setter for <code>public.t_message.create_time</code>. 创建时间
     */
    public void setCreateTime(Timestamp value) {
        set(5, value);
    }

    /**
     * Getter for <code>public.t_message.create_time</code>. 创建时间
     */
    public Timestamp getCreateTime() {
        return (Timestamp) get(5);
    }

    /**
     * Setter for <code>public.t_message.update_user</code>. 修改人
     */
    public void setUpdateUser(Long value) {
        set(6, value);
    }

    /**
     * Getter for <code>public.t_message.update_user</code>. 修改人
     */
    public Long getUpdateUser() {
        return (Long) get(6);
    }

    /**
     * Setter for <code>public.t_message.update_time</code>. 修改时间
     */
    public void setUpdateTime(Timestamp value) {
        set(7, value);
    }

    /**
     * Getter for <code>public.t_message.update_time</code>. 修改时间
     */
    public Timestamp getUpdateTime() {
        return (Timestamp) get(7);
    }

    /**
     * Setter for <code>public.t_message.flag</code>. 标识
     */
    public void setFlag(Boolean value) {
        set(8, value);
    }

    /**
     * Getter for <code>public.t_message.flag</code>. 标识
     */
    public Boolean getFlag() {
        return (Boolean) get(8);
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
    // Record9 type implementation
    // -------------------------------------------------------------------------

    /**
     * {@inheritDoc}
     */
    @Override
    public Row9<Long, String, String, Integer, Long, Timestamp, Long, Timestamp, Boolean> fieldsRow() {
        return (Row9) super.fieldsRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Row9<Long, String, String, Integer, Long, Timestamp, Long, Timestamp, Boolean> valuesRow() {
        return (Row9) super.valuesRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field1() {
        return TMessage.T_MESSAGE.ID;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field2() {
        return TMessage.T_MESSAGE.PHONE;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field3() {
        return TMessage.T_MESSAGE.CODE;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Integer> field4() {
        return TMessage.T_MESSAGE.STATUS;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field5() {
        return TMessage.T_MESSAGE.CREATE_USER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field6() {
        return TMessage.T_MESSAGE.CREATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field7() {
        return TMessage.T_MESSAGE.UPDATE_USER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field8() {
        return TMessage.T_MESSAGE.UPDATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Boolean> field9() {
        return TMessage.T_MESSAGE.FLAG;
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
        return getPhone();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component3() {
        return getCode();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Integer component4() {
        return getStatus();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long component5() {
        return getCreateUser();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp component6() {
        return getCreateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long component7() {
        return getUpdateUser();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp component8() {
        return getUpdateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Boolean component9() {
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
        return getPhone();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value3() {
        return getCode();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Integer value4() {
        return getStatus();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long value5() {
        return getCreateUser();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp value6() {
        return getCreateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long value7() {
        return getUpdateUser();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp value8() {
        return getUpdateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Boolean value9() {
        return getFlag();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TMessageRecord value1(Long value) {
        setId(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TMessageRecord value2(String value) {
        setPhone(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TMessageRecord value3(String value) {
        setCode(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TMessageRecord value4(Integer value) {
        setStatus(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TMessageRecord value5(Long value) {
        setCreateUser(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TMessageRecord value6(Timestamp value) {
        setCreateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TMessageRecord value7(Long value) {
        setUpdateUser(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TMessageRecord value8(Timestamp value) {
        setUpdateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TMessageRecord value9(Boolean value) {
        setFlag(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TMessageRecord values(Long value1, String value2, String value3, Integer value4, Long value5, Timestamp value6, Long value7, Timestamp value8, Boolean value9) {
        value1(value1);
        value2(value2);
        value3(value3);
        value4(value4);
        value5(value5);
        value6(value6);
        value7(value7);
        value8(value8);
        value9(value9);
        return this;
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached TMessageRecord
     */
    public TMessageRecord() {
        super(TMessage.T_MESSAGE);
    }

    /**
     * Create a detached, initialised TMessageRecord
     */
    public TMessageRecord(Long id, String phone, String code, Integer status, Long createUser, Timestamp createTime, Long updateUser, Timestamp updateTime, Boolean flag) {
        super(TMessage.T_MESSAGE);

        set(0, id);
        set(1, phone);
        set(2, code);
        set(3, status);
        set(4, createUser);
        set(5, createTime);
        set(6, updateUser);
        set(7, updateTime);
        set(8, flag);
    }
}
