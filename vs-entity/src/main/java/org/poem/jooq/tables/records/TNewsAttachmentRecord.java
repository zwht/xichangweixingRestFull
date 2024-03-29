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
import org.poem.jooq.tables.TNewsAttachment;


/**
 * 新闻-附件
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TNewsAttachmentRecord extends UpdatableRecordImpl<TNewsAttachmentRecord> implements Record9<Long, Long, String, Integer, Long, Timestamp, Long, Timestamp, Boolean> {

    private static final long serialVersionUID = 1531323575;

    /**
     * Setter for <code>public.t_news_attachment.id</code>.
     */
    public void setId(Long value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.t_news_attachment.id</code>.
     */
    public Long getId() {
        return (Long) get(0);
    }

    /**
     * Setter for <code>public.t_news_attachment.new_id</code>. 新闻
     */
    public void setNewId(Long value) {
        set(1, value);
    }

    /**
     * Getter for <code>public.t_news_attachment.new_id</code>. 新闻
     */
    public Long getNewId() {
        return (Long) get(1);
    }

    /**
     * Setter for <code>public.t_news_attachment.file_id</code>. 文件
     */
    public void setFileId(String value) {
        set(2, value);
    }

    /**
     * Getter for <code>public.t_news_attachment.file_id</code>. 文件
     */
    public String getFileId() {
        return (String) get(2);
    }

    /**
     * Setter for <code>public.t_news_attachment.status</code>. 状态
     */
    public void setStatus(Integer value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.t_news_attachment.status</code>. 状态
     */
    public Integer getStatus() {
        return (Integer) get(3);
    }

    /**
     * Setter for <code>public.t_news_attachment.create_user</code>. 创建人
     */
    public void setCreateUser(Long value) {
        set(4, value);
    }

    /**
     * Getter for <code>public.t_news_attachment.create_user</code>. 创建人
     */
    public Long getCreateUser() {
        return (Long) get(4);
    }

    /**
     * Setter for <code>public.t_news_attachment.create_time</code>. 创建时间
     */
    public void setCreateTime(Timestamp value) {
        set(5, value);
    }

    /**
     * Getter for <code>public.t_news_attachment.create_time</code>. 创建时间
     */
    public Timestamp getCreateTime() {
        return (Timestamp) get(5);
    }

    /**
     * Setter for <code>public.t_news_attachment.update_user</code>. 修改人
     */
    public void setUpdateUser(Long value) {
        set(6, value);
    }

    /**
     * Getter for <code>public.t_news_attachment.update_user</code>. 修改人
     */
    public Long getUpdateUser() {
        return (Long) get(6);
    }

    /**
     * Setter for <code>public.t_news_attachment.update_time</code>. 修改时间
     */
    public void setUpdateTime(Timestamp value) {
        set(7, value);
    }

    /**
     * Getter for <code>public.t_news_attachment.update_time</code>. 修改时间
     */
    public Timestamp getUpdateTime() {
        return (Timestamp) get(7);
    }

    /**
     * Setter for <code>public.t_news_attachment.flag</code>. 标识
     */
    public void setFlag(Boolean value) {
        set(8, value);
    }

    /**
     * Getter for <code>public.t_news_attachment.flag</code>. 标识
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
    public Row9<Long, Long, String, Integer, Long, Timestamp, Long, Timestamp, Boolean> fieldsRow() {
        return (Row9) super.fieldsRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Row9<Long, Long, String, Integer, Long, Timestamp, Long, Timestamp, Boolean> valuesRow() {
        return (Row9) super.valuesRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field1() {
        return TNewsAttachment.T_NEWS_ATTACHMENT.ID;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field2() {
        return TNewsAttachment.T_NEWS_ATTACHMENT.NEW_ID;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field3() {
        return TNewsAttachment.T_NEWS_ATTACHMENT.FILE_ID;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Integer> field4() {
        return TNewsAttachment.T_NEWS_ATTACHMENT.STATUS;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field5() {
        return TNewsAttachment.T_NEWS_ATTACHMENT.CREATE_USER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field6() {
        return TNewsAttachment.T_NEWS_ATTACHMENT.CREATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field7() {
        return TNewsAttachment.T_NEWS_ATTACHMENT.UPDATE_USER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field8() {
        return TNewsAttachment.T_NEWS_ATTACHMENT.UPDATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Boolean> field9() {
        return TNewsAttachment.T_NEWS_ATTACHMENT.FLAG;
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
    public Long component2() {
        return getNewId();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component3() {
        return getFileId();
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
    public Long value2() {
        return getNewId();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value3() {
        return getFileId();
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
    public TNewsAttachmentRecord value1(Long value) {
        setId(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNewsAttachmentRecord value2(Long value) {
        setNewId(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNewsAttachmentRecord value3(String value) {
        setFileId(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNewsAttachmentRecord value4(Integer value) {
        setStatus(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNewsAttachmentRecord value5(Long value) {
        setCreateUser(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNewsAttachmentRecord value6(Timestamp value) {
        setCreateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNewsAttachmentRecord value7(Long value) {
        setUpdateUser(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNewsAttachmentRecord value8(Timestamp value) {
        setUpdateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNewsAttachmentRecord value9(Boolean value) {
        setFlag(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TNewsAttachmentRecord values(Long value1, Long value2, String value3, Integer value4, Long value5, Timestamp value6, Long value7, Timestamp value8, Boolean value9) {
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
     * Create a detached TNewsAttachmentRecord
     */
    public TNewsAttachmentRecord() {
        super(TNewsAttachment.T_NEWS_ATTACHMENT);
    }

    /**
     * Create a detached, initialised TNewsAttachmentRecord
     */
    public TNewsAttachmentRecord(Long id, Long newId, String fileId, Integer status, Long createUser, Timestamp createTime, Long updateUser, Timestamp updateTime, Boolean flag) {
        super(TNewsAttachment.T_NEWS_ATTACHMENT);

        set(0, id);
        set(1, newId);
        set(2, fileId);
        set(3, status);
        set(4, createUser);
        set(5, createTime);
        set(6, updateUser);
        set(7, updateTime);
        set(8, flag);
    }
}
