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
import org.poem.jooq.tables.TArms;


/**
 * 强军管理
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TArmsRecord extends UpdatableRecordImpl<TArmsRecord> implements Record11<Long, String, Long, String, Long, Integer, Long, Timestamp, Long, Timestamp, Boolean> {

    private static final long serialVersionUID = -211150845;

    /**
     * Setter for <code>public.t_arms.id</code>.
     */
    public void setId(Long value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.t_arms.id</code>.
     */
    public Long getId() {
        return (Long) get(0);
    }

    /**
     * Setter for <code>public.t_arms.title</code>. 标题
     */
    public void setTitle(String value) {
        set(1, value);
    }

    /**
     * Getter for <code>public.t_arms.title</code>. 标题
     */
    public String getTitle() {
        return (String) get(1);
    }

    /**
     * Setter for <code>public.t_arms.attachment</code>. 附件
     */
    public void setAttachment(Long value) {
        set(2, value);
    }

    /**
     * Getter for <code>public.t_arms.attachment</code>. 附件
     */
    public Long getAttachment() {
        return (Long) get(2);
    }

    /**
     * Setter for <code>public.t_arms.content</code>. 内容
     */
    public void setContent(String value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.t_arms.content</code>. 内容
     */
    public String getContent() {
        return (String) get(3);
    }

    /**
     * Setter for <code>public.t_arms.read_count</code>. 阅读量
     */
    public void setReadCount(Long value) {
        set(4, value);
    }

    /**
     * Getter for <code>public.t_arms.read_count</code>. 阅读量
     */
    public Long getReadCount() {
        return (Long) get(4);
    }

    /**
     * Setter for <code>public.t_arms.status</code>. 状态
     */
    public void setStatus(Integer value) {
        set(5, value);
    }

    /**
     * Getter for <code>public.t_arms.status</code>. 状态
     */
    public Integer getStatus() {
        return (Integer) get(5);
    }

    /**
     * Setter for <code>public.t_arms.create_user</code>. 创建人
     */
    public void setCreateUser(Long value) {
        set(6, value);
    }

    /**
     * Getter for <code>public.t_arms.create_user</code>. 创建人
     */
    public Long getCreateUser() {
        return (Long) get(6);
    }

    /**
     * Setter for <code>public.t_arms.create_time</code>. 创建时间
     */
    public void setCreateTime(Timestamp value) {
        set(7, value);
    }

    /**
     * Getter for <code>public.t_arms.create_time</code>. 创建时间
     */
    public Timestamp getCreateTime() {
        return (Timestamp) get(7);
    }

    /**
     * Setter for <code>public.t_arms.update_user</code>. 修改人
     */
    public void setUpdateUser(Long value) {
        set(8, value);
    }

    /**
     * Getter for <code>public.t_arms.update_user</code>. 修改人
     */
    public Long getUpdateUser() {
        return (Long) get(8);
    }

    /**
     * Setter for <code>public.t_arms.update_time</code>. 修改时间
     */
    public void setUpdateTime(Timestamp value) {
        set(9, value);
    }

    /**
     * Getter for <code>public.t_arms.update_time</code>. 修改时间
     */
    public Timestamp getUpdateTime() {
        return (Timestamp) get(9);
    }

    /**
     * Setter for <code>public.t_arms.flag</code>. 标识
     */
    public void setFlag(Boolean value) {
        set(10, value);
    }

    /**
     * Getter for <code>public.t_arms.flag</code>. 标识
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
    public Row11<Long, String, Long, String, Long, Integer, Long, Timestamp, Long, Timestamp, Boolean> fieldsRow() {
        return (Row11) super.fieldsRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Row11<Long, String, Long, String, Long, Integer, Long, Timestamp, Long, Timestamp, Boolean> valuesRow() {
        return (Row11) super.valuesRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field1() {
        return TArms.T_ARMS.ID;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field2() {
        return TArms.T_ARMS.TITLE;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field3() {
        return TArms.T_ARMS.ATTACHMENT;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field4() {
        return TArms.T_ARMS.CONTENT;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field5() {
        return TArms.T_ARMS.READ_COUNT;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Integer> field6() {
        return TArms.T_ARMS.STATUS;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field7() {
        return TArms.T_ARMS.CREATE_USER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field8() {
        return TArms.T_ARMS.CREATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field9() {
        return TArms.T_ARMS.UPDATE_USER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field10() {
        return TArms.T_ARMS.UPDATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Boolean> field11() {
        return TArms.T_ARMS.FLAG;
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
        return getTitle();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long component3() {
        return getAttachment();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component4() {
        return getContent();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long component5() {
        return getReadCount();
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
        return getTitle();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long value3() {
        return getAttachment();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value4() {
        return getContent();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long value5() {
        return getReadCount();
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
    public TArmsRecord value1(Long value) {
        setId(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsRecord value2(String value) {
        setTitle(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsRecord value3(Long value) {
        setAttachment(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsRecord value4(String value) {
        setContent(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsRecord value5(Long value) {
        setReadCount(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsRecord value6(Integer value) {
        setStatus(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsRecord value7(Long value) {
        setCreateUser(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsRecord value8(Timestamp value) {
        setCreateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsRecord value9(Long value) {
        setUpdateUser(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsRecord value10(Timestamp value) {
        setUpdateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsRecord value11(Boolean value) {
        setFlag(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TArmsRecord values(Long value1, String value2, Long value3, String value4, Long value5, Integer value6, Long value7, Timestamp value8, Long value9, Timestamp value10, Boolean value11) {
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
     * Create a detached TArmsRecord
     */
    public TArmsRecord() {
        super(TArms.T_ARMS);
    }

    /**
     * Create a detached, initialised TArmsRecord
     */
    public TArmsRecord(Long id, String title, Long attachment, String content, Long readCount, Integer status, Long createUser, Timestamp createTime, Long updateUser, Timestamp updateTime, Boolean flag) {
        super(TArms.T_ARMS);

        set(0, id);
        set(1, title);
        set(2, attachment);
        set(3, content);
        set(4, readCount);
        set(5, status);
        set(6, createUser);
        set(7, createTime);
        set(8, updateUser);
        set(9, updateTime);
        set(10, flag);
    }
}
