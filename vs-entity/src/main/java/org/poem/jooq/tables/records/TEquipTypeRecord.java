/*
 * This file is generated by jOOQ.
 */
package org.poem.jooq.tables.records;


import java.sql.Timestamp;

import javax.annotation.Generated;

import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record8;
import org.jooq.Row8;
import org.jooq.impl.UpdatableRecordImpl;
import org.poem.jooq.tables.TEquipType;


/**
 * 设备类型
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TEquipTypeRecord extends UpdatableRecordImpl<TEquipTypeRecord> implements Record8<Long, String, Integer, Long, Timestamp, Long, Timestamp, Boolean> {

    private static final long serialVersionUID = 934065517;

    /**
     * Setter for <code>public.t_equip_type.id</code>.
     */
    public void setId(Long value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.t_equip_type.id</code>.
     */
    public Long getId() {
        return (Long) get(0);
    }

    /**
     * Setter for <code>public.t_equip_type.name</code>. 名字
     */
    public void setName(String value) {
        set(1, value);
    }

    /**
     * Getter for <code>public.t_equip_type.name</code>. 名字
     */
    public String getName() {
        return (String) get(1);
    }

    /**
     * Setter for <code>public.t_equip_type.status</code>. 状态
     */
    public void setStatus(Integer value) {
        set(2, value);
    }

    /**
     * Getter for <code>public.t_equip_type.status</code>. 状态
     */
    public Integer getStatus() {
        return (Integer) get(2);
    }

    /**
     * Setter for <code>public.t_equip_type.create_user</code>. 创建人
     */
    public void setCreateUser(Long value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.t_equip_type.create_user</code>. 创建人
     */
    public Long getCreateUser() {
        return (Long) get(3);
    }

    /**
     * Setter for <code>public.t_equip_type.create_time</code>. 创建时间
     */
    public void setCreateTime(Timestamp value) {
        set(4, value);
    }

    /**
     * Getter for <code>public.t_equip_type.create_time</code>. 创建时间
     */
    public Timestamp getCreateTime() {
        return (Timestamp) get(4);
    }

    /**
     * Setter for <code>public.t_equip_type.update_user</code>. 修改人
     */
    public void setUpdateUser(Long value) {
        set(5, value);
    }

    /**
     * Getter for <code>public.t_equip_type.update_user</code>. 修改人
     */
    public Long getUpdateUser() {
        return (Long) get(5);
    }

    /**
     * Setter for <code>public.t_equip_type.update_time</code>. 修改时间
     */
    public void setUpdateTime(Timestamp value) {
        set(6, value);
    }

    /**
     * Getter for <code>public.t_equip_type.update_time</code>. 修改时间
     */
    public Timestamp getUpdateTime() {
        return (Timestamp) get(6);
    }

    /**
     * Setter for <code>public.t_equip_type.flag</code>. 标识
     */
    public void setFlag(Boolean value) {
        set(7, value);
    }

    /**
     * Getter for <code>public.t_equip_type.flag</code>. 标识
     */
    public Boolean getFlag() {
        return (Boolean) get(7);
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
    // Record8 type implementation
    // -------------------------------------------------------------------------

    /**
     * {@inheritDoc}
     */
    @Override
    public Row8<Long, String, Integer, Long, Timestamp, Long, Timestamp, Boolean> fieldsRow() {
        return (Row8) super.fieldsRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Row8<Long, String, Integer, Long, Timestamp, Long, Timestamp, Boolean> valuesRow() {
        return (Row8) super.valuesRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field1() {
        return TEquipType.T_EQUIP_TYPE.ID;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field2() {
        return TEquipType.T_EQUIP_TYPE.NAME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Integer> field3() {
        return TEquipType.T_EQUIP_TYPE.STATUS;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field4() {
        return TEquipType.T_EQUIP_TYPE.CREATE_USER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field5() {
        return TEquipType.T_EQUIP_TYPE.CREATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field6() {
        return TEquipType.T_EQUIP_TYPE.UPDATE_USER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field7() {
        return TEquipType.T_EQUIP_TYPE.UPDATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Boolean> field8() {
        return TEquipType.T_EQUIP_TYPE.FLAG;
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
    public Integer component3() {
        return getStatus();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long component4() {
        return getCreateUser();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp component5() {
        return getCreateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long component6() {
        return getUpdateUser();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp component7() {
        return getUpdateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Boolean component8() {
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
    public Integer value3() {
        return getStatus();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long value4() {
        return getCreateUser();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp value5() {
        return getCreateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long value6() {
        return getUpdateUser();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Timestamp value7() {
        return getUpdateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Boolean value8() {
        return getFlag();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TEquipTypeRecord value1(Long value) {
        setId(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TEquipTypeRecord value2(String value) {
        setName(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TEquipTypeRecord value3(Integer value) {
        setStatus(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TEquipTypeRecord value4(Long value) {
        setCreateUser(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TEquipTypeRecord value5(Timestamp value) {
        setCreateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TEquipTypeRecord value6(Long value) {
        setUpdateUser(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TEquipTypeRecord value7(Timestamp value) {
        setUpdateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TEquipTypeRecord value8(Boolean value) {
        setFlag(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TEquipTypeRecord values(Long value1, String value2, Integer value3, Long value4, Timestamp value5, Long value6, Timestamp value7, Boolean value8) {
        value1(value1);
        value2(value2);
        value3(value3);
        value4(value4);
        value5(value5);
        value6(value6);
        value7(value7);
        value8(value8);
        return this;
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached TEquipTypeRecord
     */
    public TEquipTypeRecord() {
        super(TEquipType.T_EQUIP_TYPE);
    }

    /**
     * Create a detached, initialised TEquipTypeRecord
     */
    public TEquipTypeRecord(Long id, String name, Integer status, Long createUser, Timestamp createTime, Long updateUser, Timestamp updateTime, Boolean flag) {
        super(TEquipType.T_EQUIP_TYPE);

        set(0, id);
        set(1, name);
        set(2, status);
        set(3, createUser);
        set(4, createTime);
        set(5, updateUser);
        set(6, updateTime);
        set(7, flag);
    }
}
