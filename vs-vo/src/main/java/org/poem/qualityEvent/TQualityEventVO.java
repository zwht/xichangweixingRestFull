package org.poem.qualityEvent;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 质量事件
 * @author poem
 */
@Api(value = "质量事件")
public class TQualityEventVO {

    @ApiModelProperty(value = "id")
    private String id;

    @ApiModelProperty(value = "事件名称")
    private String name;

    @ApiModelProperty(value = "事件级别 1问题, 2事件,3事故")
    private String eventLevel;

    @ApiModelProperty(value = "事件级别")
    private String eventLevelName;

    @ApiModelProperty(value = "供应商")
    private String supplierId;

    @ApiModelProperty(value = "供应商")
    private String supplierName;

    @ApiModelProperty(value = "涉及物料")
    private String materials;

    @ApiModelProperty(value = "发生时间")
    private String occurrenceTime;

    @ApiModelProperty(value = "发生部门")
    private String departId;

    @ApiModelProperty(value = "发生部门")
    private String departName;

    @ApiModelProperty(value = "事件描述")
    private String remark;

    @ApiModelProperty(value = "置顶")
    private String top;

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

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    public String getDepartName() {
        return departName;
    }

    public void setDepartName(String departName) {
        this.departName = departName;
    }

    public String getEventLevelName() {
        return eventLevelName;
    }

    public void setEventLevelName(String eventLevelName) {
        this.eventLevelName = eventLevelName;
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

    public String getEventLevel() {
        return eventLevel;
    }

    public void setEventLevel(String eventLevel) {
        this.eventLevel = eventLevel;
    }

    public String getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(String supplierId) {
        this.supplierId = supplierId;
    }

    public String getMaterials() {
        return materials;
    }

    public void setMaterials(String materials) {
        this.materials = materials;
    }

    public String getOccurrenceTime() {
        return occurrenceTime;
    }

    public void setOccurrenceTime(String occurrenceTime) {
        this.occurrenceTime = occurrenceTime;
    }

    public String getDepartId() {
        return departId;
    }

    public void setDepartId(String departId) {
        this.departId = departId;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getTop() {
        return top;
    }

    public void setTop(String top) {
        this.top = top;
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
