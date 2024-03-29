package org.poem.roomReservation;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 客房预订
 * @author poem
 */
@Api(value = "客房预订")
public class TRoomReservationVO {

    @ApiModelProperty(value = "id")
    private String id;

    @ApiModelProperty(value = "房客姓名")
    private String name;

    @ApiModelProperty(value = "身份证")
    private String idnum;

    @ApiModelProperty(value = "工作单位")
    private String workers;

    @ApiModelProperty(value = "入住人数")
    private String persons;

    @ApiModelProperty(value = "入住时间")
    private String livingTime;

    @ApiModelProperty(value = "离开时间")
    private String leavingDate;

    @ApiModelProperty(value = "住房类型 1 单间 2 标间 3 小套间 4 大套房")
    private String roomsType;

    @ApiModelProperty(value = "预订房间数")
    private String rooms;

    @ApiModelProperty(value = "是否是军人")
    private Short isArm;

    @ApiModelProperty(value = "军官证")
    private String armNum ;

    @ApiModelProperty(value = "军官证")
    private String withArm ;

    @ApiModelProperty(value = "留房时间")
    private String allotment;

    @ApiModelProperty(value = "备注")
    private String remark;

    @ApiModelProperty(value = "联系电话")
    private String phone;

    @ApiModelProperty(value = "状态")
    private String status;

    @ApiModelProperty(value = "创建人")
    private String createUser;

    @ApiModelProperty(value = "创建时间")
    private String createTime;

    @ApiModelProperty(value = "修改人")
    private String updateUser;

    @ApiModelProperty(value = "修改时间")
    private String updateTime;

    @ApiModelProperty(value = "标识")
    private String flag;

    public Short getIsArm() {
        return isArm;
    }

    public void setIsArm(Short isArm) {
        this.isArm = isArm;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdnum() {
        return idnum;
    }

    public void setIdnum(String idnum) {
        this.idnum = idnum;
    }

    public String getWorkers() {
        return workers;
    }

    public void setWorkers(String workers) {
        this.workers = workers;
    }

    public String getPersons() {
        return persons;
    }

    public void setPersons(String persons) {
        this.persons = persons;
    }

    public String getRooms() {
        return rooms;
    }

    public void setRooms(String rooms) {
        this.rooms = rooms;
    }

    public String getLivingTime() {
        return livingTime;
    }

    public void setLivingTime(String livingTime) {
        this.livingTime = livingTime;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getUpdateUser() {
        return updateUser;
    }

    public void setUpdateUser(String updateUser) {
        this.updateUser = updateUser;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public String getLeavingDate() {
        return leavingDate;
    }

    public void setLeavingDate(String leavingDate) {
        this.leavingDate = leavingDate;
    }

    public String getRoomsType() {
        return roomsType;
    }

    public void setRoomsType(String roomsType) {
        this.roomsType = roomsType;
    }

    public Short getArm() {
        return isArm;
    }

    public void setArm(Short arm) {
        isArm = arm;
    }

    public String getArmNum() {
        return armNum;
    }

    public void setArmNum(String armNum) {
        this.armNum = armNum;
    }

    public String getWithArm() {
        return withArm;
    }

    public void setWithArm(String withArm) {
        this.withArm = withArm;
    }

    public String getAllotment() {
        return allotment;
    }

    public void setAllotment(String allotment) {
        this.allotment = allotment;
    }
}
