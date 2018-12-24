package org.poem.supplier;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 供应商
 *
 * @author poem
 */
@Api(value = "供应商")
public class TSupplierQueryVO {


    @ApiModelProperty(value = "供应商名字")
    private String name;

    @ApiModelProperty(value = "类型")
    private String type;


    @ApiModelProperty(value = "所在地区")
    private String region;


    @ApiModelProperty(value = "0 停用 1 正常 状态")
    private String status;


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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
