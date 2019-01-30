package org.poem.vehiclePick;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 接送
 *
 * @author poem
 */
@Api(value = "接送")
public class TVehiclePickVO {

    @ApiModelProperty(value = "id")
    private String id;

    @ApiModelProperty(value = "用车人员姓名/用车单位")
    private String name;

    @ApiModelProperty(value = "用申请事由")
    private String applicationReason;

    @ApiModelProperty(value = "用车时间")
    private String applicationTime;


    @ApiModelProperty(value = "接送地点")
    private String address;


    @ApiModelProperty(value = "航班")
    private String flight;

    @ApiModelProperty(value = "车次")
    private String trainNumber;

    @ApiModelProperty(value = "用车人数")
    private String trainPersons;

    @ApiModelProperty(value = "申请车型")
    private String vehicleType;

    @ApiModelProperty(value = "行驶区域")
    private String vehicleArea;

    @ApiModelProperty(value = "联系电话")
    private String phone;

    @ApiModelProperty(value = "状态")
    private String status;

    @ApiModelProperty(value = "跟新时间")
    private String updateTime;


    @ApiModelProperty(value = "跟新人员")
    private String updateUser;


    @ApiModelProperty(value = "创建人员")
    private String createUser;


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

    public String getApplicationReason() {
        return applicationReason;
    }

    public void setApplicationReason(String applicationReason) {
        this.applicationReason = applicationReason;
    }

    public String getApplicationTime() {
        return applicationTime;
    }

    public void setApplicationTime(String applicationTime) {
        this.applicationTime = applicationTime;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFlight() {
        return flight;
    }

    public void setFlight(String flight) {
        this.flight = flight;
    }

    public String getTrainNumber() {
        return trainNumber;
    }

    public void setTrainNumber(String trainNumber) {
        this.trainNumber = trainNumber;
    }

    public String getTrainPersons() {
        return trainPersons;
    }

    public void setTrainPersons(String trainPersons) {
        this.trainPersons = trainPersons;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public String getVehicleArea() {
        return vehicleArea;
    }

    public void setVehicleArea(String vehicleArea) {
        this.vehicleArea = vehicleArea;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    public String getUpdateUser() {
        return updateUser;
    }

    public void setUpdateUser(String updateUser) {
        this.updateUser = updateUser;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }
}
