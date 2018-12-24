package org.poem.equipment;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

@Api(value = "查询")
public class TEquipmentQuery {

    @ApiModelProperty(value = "设备名称")
    private String name;

    @ApiModelProperty(value = "设备类型")
    private String equipType;

    @ApiModelProperty(value = "供应商")
    private String supplierId;


    @ApiModelProperty(value = "状态 0库存保管 1 使用中 2 已使用 3 已废弃")
    private String status;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEquipType() {
        return equipType;
    }

    public void setEquipType(String equipType) {
        this.equipType = equipType;
    }

    public String getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(String supplierId) {
        this.supplierId = supplierId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
