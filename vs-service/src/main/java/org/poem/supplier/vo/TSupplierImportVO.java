package org.poem.supplier.vo;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import org.poem.excel.annotation.ColumnField;

@Api("供应商")
public class TSupplierImportVO {

    @ApiModelProperty(value = "供应商名字")
    @ColumnField(value = "供应商名字")
    private String name;


    @ApiModelProperty(value = "类型")
    @ColumnField(value = "类型")
    private String typeName;

    @ApiModelProperty(value = "所在地区")
    @ColumnField(value = "所在地区")
    private String region;

    @ApiModelProperty(value = "详细地址")
    @ColumnField(value = "详细地址")
    private String address;

    @ApiModelProperty(value = "统一社会信用代码")
    @ColumnField(value = "统一社会信用代码")
    private String socialCreditCode;

    @ApiModelProperty(value = "注册日期")
    @ColumnField(value = "注册日期", isDate =  true)
    private String registDate;

    @ApiModelProperty(value = "法人姓名")
    @ColumnField(value = "法人姓名")
    private String legalPerson;

    @ApiModelProperty(value = "法人身份证")
    @ColumnField(value = "法人身份证", isNumber = true)
    private String legalPersonName;

    @ApiModelProperty(value = "联系人姓名")
    @ColumnField(value = "联系人姓名")
    private String contactsUserName;

    @ApiModelProperty(value = "联系人身份证")
    @ColumnField(value = "联系人身份证", isNumber = true)
    private String contactsUseIdnum;

    @ApiModelProperty(value = "联系人电话")
    @ColumnField(value = "联系人电话")
    private String phone;

    @ApiModelProperty(value = "备注")
    @ColumnField(value = "备注")
    private String remark;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
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

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
