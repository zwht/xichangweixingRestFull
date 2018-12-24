package org.poem.supplier;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 供应商
 * @author poem
 */
@Api(value = "供应商")
public class TSupplierVO {

    @ApiModelProperty(value = "id")
    private String id;

    @ApiModelProperty(value = "供应商名字")
    private String name;

    @ApiModelProperty(value = "类型")
    private String type;


    @ApiModelProperty(value = "类型")
    private String typeName;


    @ApiModelProperty(value = "所在地区")
    private String region;

    @ApiModelProperty(value = "详细地址")
    private String address;

    @ApiModelProperty(value = "统一社会信用代码")
    private String socialCreditCode;

    @ApiModelProperty(value = "注册日期")
    private String registDate;

    @ApiModelProperty(value = "法人姓名")
    private String legalPerson;

    @ApiModelProperty(value = "法人身份证")
    private String legalPersonName;

    @ApiModelProperty(value = "联系人姓名")
    private String contactsUserName;

    @ApiModelProperty(value = "联系人身份证")
    private String contactsUseIdnum;

    @ApiModelProperty(value = "联系电话")
    private String phone;

    @ApiModelProperty(value = "供应商logo")
    private String logo;

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSocialCreditCode() {
        return socialCreditCode;
    }

    public void setSocialCreditCode(String socialCreditCode) {
        this.socialCreditCode = socialCreditCode;
    }

    public String getRegistDate() {
        return registDate;
    }

    public void setRegistDate(String registDate) {
        this.registDate = registDate;
    }

    public String getLegalPerson() {
        return legalPerson;
    }

    public void setLegalPerson(String legalPerson) {
        this.legalPerson = legalPerson;
    }

    public String getLegalPersonName() {
        return legalPersonName;
    }

    public void setLegalPersonName(String legalPersonName) {
        this.legalPersonName = legalPersonName;
    }

    public String getContactsUserName() {
        return contactsUserName;
    }

    public void setContactsUserName(String contactsUserName) {
        this.contactsUserName = contactsUserName;
    }

    public String getContactsUseIdnum() {
        return contactsUseIdnum;
    }

    public void setContactsUseIdnum(String contactsUseIdnum) {
        this.contactsUseIdnum = contactsUseIdnum;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
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

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }
}
