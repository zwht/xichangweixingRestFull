package org.poem.vehiclePick;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 接送
 * @author poem
 */
@Api(value = "接送")
public class TVehiclePickVO {

    @ApiModelProperty(value = "id")
    private String id;

    @ApiModelProperty(value = "房客姓名")
    private String name;

    @ApiModelProperty(value = "身份证")
    private String idnum;

    @ApiModelProperty(value = "电话号码")
    private String phone;

    @ApiModelProperty(value = "工作单位")
    private String workers;

    @ApiModelProperty(value = "乘客总数")
    private String persons;

    @ApiModelProperty(value = "出发地")
    private String departurePlace;

    @ApiModelProperty(value = "目的地")
    private String destination;

    @ApiModelProperty(value = "接送时间")
    private String vehicleTime;

    @ApiModelProperty(value = "备注")
    private String remark;

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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
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

    public String getDeparturePlace() {
        return departurePlace;
    }

    public void setDeparturePlace(String departurePlace) {
        this.departurePlace = departurePlace;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getVehicleTime() {
        return vehicleTime;
    }

    public void setVehicleTime(String vehicleTime) {
        this.vehicleTime = vehicleTime;
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
}
