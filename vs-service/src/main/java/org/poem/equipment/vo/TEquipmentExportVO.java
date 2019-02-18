package org.poem.equipment.vo;


import org.poem.excel.annotation.ColumnField;

/**
 * 装备
 *
 * @author poem
 */
public class TEquipmentExportVO {


    @ColumnField(value = "编号")
    private String code;

    @ColumnField(value = "设备名称")
    private String name;

    @ColumnField(value = "型号")
    private String model;

    @ColumnField(value = "设备类型")
    private String equipTypeName;

    @ColumnField(value = "规格")
    private String format;

    @ColumnField(value = "包装规格")
    private String packageFormat;

    @ColumnField(value = "计量单位")
    private String measurement;

    @ColumnField(value = "标准或批号")
    private String standard;

    @ColumnField(value = "采购负责人")
    private String leadingPerson;

    @ColumnField(value = "生产日期", isDate = true)
    private String manufactureDate;

    @ColumnField(value = "有效期", isDate = true)
    private String validity;


    @ColumnField(value = "供应商")
    private String supplierName;


    @ColumnField(value = "备注")
    private String remark;


    public String getLeadingPerson() {
        return leadingPerson;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setLeadingPerson(String leadingPerson) {
        this.leadingPerson = leadingPerson;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEquipTypeName() {
        return equipTypeName;
    }

    public void setEquipTypeName(String equipTypeName) {
        this.equipTypeName = equipTypeName;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public String getPackageFormat() {
        return packageFormat;
    }

    public void setPackageFormat(String packageFormat) {
        this.packageFormat = packageFormat;
    }

    public String getMeasurement() {
        return measurement;
    }

    public void setMeasurement(String measurement) {
        this.measurement = measurement;
    }

    public String getStandard() {
        return standard;
    }

    public void setStandard(String standard) {
        this.standard = standard;
    }

    public String getManufactureDate() {
        return manufactureDate;
    }

    public void setManufactureDate(String manufactureDate) {
        this.manufactureDate = manufactureDate;
    }

    public String getValidity() {
        return validity;
    }

    public void setValidity(String validity) {
        this.validity = validity;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }


    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
