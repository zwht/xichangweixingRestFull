/*
 * This file is generated by jOOQ.
 */
package org.poem.jooq.tables.records;


import java.sql.Timestamp;

import javax.annotation.Generated;

import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record10;
import org.jooq.Row10;
import org.jooq.impl.UpdatableRecordImpl;
import org.poem.jooq.tables.TRole;


/**
 * 角色
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.7"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TRoleRecord extends UpdatableRecordImpl<TRoleRecord> implements Record10<Long, String, String, Boolean, Integer, Timestamp, Timestamp, Long, Long, Boolean> {

    private static final long serialVersionUID = -2134705257;

    /**
     * Setter for <code>public.t_role.id</code>.
     */
    public void setId(Long value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.t_role.id</code>.
     */
    public Long getId() {
        return (Long) get(0);
    }

    /**
     * Setter for <code>public.t_role.name</code>. 名字
     */
    public void setName(String value) {
        set(1, value);
    }

    /**
     * Getter for <code>public.t_role.name</code>. 名字
     */
    public String getName() {
        return (String) get(1);
    }

    /**
     * Setter for <code>public.t_role.remark</code>. 描述
     */
    public void setRemark(String value) {
        set(2, value);
    }

    /**
     * Getter for <code>public.t_role.remark</code>. 描述
     */
    public String getRemark() {
        return (String) get(2);
    }

    /**
     * Setter for <code>public.t_role.admin</code>. 是否是admin
     */
    public void setAdmin(Boolean value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.t_role.admin</code>. 是否是admin
     */
    public Boolean getAdmin() {
        return (Boolean) get(3);
    }

    /**
     * Setter for <code>public.t_role.status</code>. 状态
     */
    public void setStatus(Integer value) {
        set(4, value);
    }

    /**
     * Getter for <code>public.t_role.status</code>. 状态
     */
    public Integer getStatus() {
        return (Integer) get(4);
    }

    /**
     * Setter for <code>public.t_role.create_time</code>. 创建时间
     */
    public void setCreateTime(Timestamp value) {
        set(5, value);
    }

    /**
     * Getter for <code>public.t_role.create_time</code>. 创建时间
     */
    public Timestamp getCreateTime() {
        return (Timestamp) get(5);
    }

    /**
     * Setter for <code>public.t_role.update_time</code>. 修改时间
     */
    public void setUpdateTime(Timestamp value) {
        set(6, value);
    }

    /**
     * Getter for <code>public.t_role.update_time</code>. 修改时间
     */
    public Timestamp getUpdateTime() {
        return (Timestamp) get(6);
    }

    /**
     * Setter for <code>public.t_role.create_user</code>. 创建人
     */
    public void setCreateUser(Long value) {
        set(7, value);
    }

    /**
     * Getter for <code>public.t_role.create_user</code>. 创建人
     */
    public Long getCreateUser() {
        return (Long) get(7);
    }

    /**
     * Setter for <code>public.t_role.update_user</code>. 修改人
     */
    public void setUpdateUser(Long value) {
        set(8, value);
    }

    /**
     * Getter for <code>public.t_role.update_user</code>. 修改人
     */
    public Long getUpdateUser() {
        return (Long) get(8);
    }

    /**
     * Setter for <code>public.t_role.flag</code>. 标记
     */
    public void setFlag(Boolean value) {
        set(9, value);
    }

    /**
     * Getter for <code>public.t_role.flag</code>. 标记
     */
    public Boolean getFlag() {
        return (Boolean) get(9);
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
    // Record10 type implementation
    // -------------------------------------------------------------------------

    /**
     * {@inheritDoc}
     */
    @Override
    public Row10<Long, String, String, Boolean, Integer, Timestamp, Timestamp, Long, Long, Boolean> fieldsRow() {
        return (Row10) super.fieldsRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Row10<Long, String, String, Boolean, Integer, Timestamp, Timestamp, Long, Long, Boolean> valuesRow() {
        return (Row10) super.valuesRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field1() {
        return TRole.T_ROLE.ID;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field2() {
        return TRole.T_ROLE.NAME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field3() {
        return TRole.T_ROLE.REMARK;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Boolean> field4() {
        return TRole.T_ROLE.ADMIN;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Integer> field5() {
        return TRole.T_ROLE.STATUS;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field6() {
        return TRole.T_ROLE.CREATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Timestamp> field7() {
        return TRole.T_ROLE.UPDATE_TIME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field8() {
        return TRole.T_ROLE.CREATE_USER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Long> field9() {
        return TRole.T_ROLE.UPDATE_USER;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Boolean> field10() {
        return TRole.T_ROLE.FLAG;
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
        return getRemark();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Boolean component4() {
        return getAdmin();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Integer component5() {
        return getStatus();
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
    public Timestamp component7() {
        return getUpdateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long component8() {
        return getCreateUser();
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
    public Boolean component10() {
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
        return getRemark();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Boolean value4() {
        return getAdmin();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Integer value5() {
        return getStatus();
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
    public Timestamp value7() {
        return getUpdateTime();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Long value8() {
        return getCreateUser();
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
    public Boolean value10() {
        return getFlag();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoleRecord value1(Long value) {
        setId(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoleRecord value2(String value) {
        setName(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoleRecord value3(String value) {
        setRemark(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoleRecord value4(Boolean value) {
        setAdmin(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoleRecord value5(Integer value) {
        setStatus(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoleRecord value6(Timestamp value) {
        setCreateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoleRecord value7(Timestamp value) {
        setUpdateTime(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoleRecord value8(Long value) {
        setCreateUser(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoleRecord value9(Long value) {
        setUpdateUser(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoleRecord value10(Boolean value) {
        setFlag(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TRoleRecord values(Long value1, String value2, String value3, Boolean value4, Integer value5, Timestamp value6, Timestamp value7, Long value8, Long value9, Boolean value10) {
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
        return this;
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached TRoleRecord
     */
    public TRoleRecord() {
        super(TRole.T_ROLE);
    }

    /**
     * Create a detached, initialised TRoleRecord
     */
    public TRoleRecord(Long id, String name, String remark, Boolean admin, Integer status, Timestamp createTime, Timestamp updateTime, Long createUser, Long updateUser, Boolean flag) {
        super(TRole.T_ROLE);

        set(0, id);
        set(1, name);
        set(2, remark);
        set(3, admin);
        set(4, status);
        set(5, createTime);
        set(6, updateTime);
        set(7, createUser);
        set(8, updateUser);
        set(9, flag);
    }
}
