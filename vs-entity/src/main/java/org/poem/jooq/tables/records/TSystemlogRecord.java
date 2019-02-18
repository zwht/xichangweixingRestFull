/*
 * This file is generated by jOOQ.
 */
package org.poem.jooq.tables.records;


import java.sql.Timestamp;

import javax.annotation.Generated;

import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record5;
import org.jooq.Row5;
import org.jooq.impl.UpdatableRecordImpl;
import org.poem.jooq.tables.TSystemlog;


/**
 * 系统日志
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TSystemlogRecord extends UpdatableRecordImpl<TSystemlogRecord> implements Record5<Long, Long, String, Timestamp, Integer> {

    private static final long serialVersionUID = 100417535;

    /**
     * Setter for <code>public.t_systemlog.id</code>.
     */
    public void setId(Long value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.t_systemlog.id</code>.
     */
    public Long getId() {
        return (Long) get(0);
    }

    /**
     * Setter for <code>public.t_systemlog.user_id</code>. 用户id
     */
    public void setUserId(Long value) {
        set(1, value);
    }

    /**
     * Getter for <code>public.t_systemlog.user_id</code>. 用户id
     */
    public Long getUserId() {
        return (Long) get(1);
    }

    /**
     * Setter for <code>public.t_systemlog.ip_address</code>. ip地址
     */
    public void setIpAddress(String value) {
        set(2, value);
    }

    /**
     * Getter for <code>public.t_systemlog.ip_address</code>. ip地址
     */
    public String getIpAddress() {
        return (String) get(2);
    }

    /**
     * Setter for <code>public.t_systemlog.create_time</code>. 创建时间
     */
    public void setCreateTime(Timestamp value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.t_systemlog.create_time</code>. 创建时间
     */
    public Timestamp getCreateTime() {
        return (Timestamp) get(3);
    }

    /**
     * Setter for <code>public.t_systemlog.log_type</code>. 日志类型
     */
    public void setLogType(Integer value) {
        set(4, value);
    }

    /**
     * Getter for <code>public.t_systemlog.log_type</code>. 日志类型
     */
    public Integer getLogType() {
        return (Integer) get(4);
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
    // Record5 type implementation
    // -------------------------------------------------------------------------

    /**
     * {@inheritDoc}
     */
    @Override
    public Row5<Long, Long, String, Timestamp, Integer> fieldsRow() {
        return (Row5) super.fieldsRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Row5<Long, Long, String, Timestamp, Integer> valuesRow() {
        return (Row5) super.valuesRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field1() {
        return TSystemlog.T_SYSTEMLOG.ID;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field2() {
        return TSystemlog.T_SYSTEMLOG.USER_ID;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field3() {
        return TSystemlog.T_SYSTEMLOG.IP_ADDRESS;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field4() {
        return TSystemlog.T_SYSTEMLOG.CREATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Integer> field5() {
        return TSystemlog.T_SYSTEMLOG.LOG_TYPE;
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
        return getUserId();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component3() {
        return getIpAddress();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp component4() {
        return getCreateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Integer component5() {
        return getLogType();
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
        return getUserId();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value3() {
        return getIpAddress();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp value4() {
        return getCreateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Integer value5() {
        return getLogType();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSystemlogRecord value1(Long value) {
        setId(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSystemlogRecord value2(Long value) {
        setUserId(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSystemlogRecord value3(String value) {
        setIpAddress(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSystemlogRecord value4(Timestamp value) {
        setCreateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSystemlogRecord value5(Integer value) {
        setLogType(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TSystemlogRecord values(Long value1, Long value2, String value3, Timestamp value4, Integer value5) {
        value1(value1);
        value2(value2);
        value3(value3);
        value4(value4);
        value5(value5);
        return this;
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached TSystemlogRecord
     */
    public TSystemlogRecord() {
        super(TSystemlog.T_SYSTEMLOG);
    }

    /**
     * Create a detached, initialised TSystemlogRecord
     */
    public TSystemlogRecord(Long id, Long userId, String ipAddress, Timestamp createTime, Integer logType) {
        super(TSystemlog.T_SYSTEMLOG);

        set(0, id);
        set(1, userId);
        set(2, ipAddress);
        set(3, createTime);
        set(4, logType);
    }
}