package org.poem.qualityDeal;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 质量处理
 * @author poem
 */
@Api(value = "质量处理")
public class TQualityDealQueryVO {

    @ApiModelProperty(value = "id")
    private String id;

    @ApiModelProperty(value = "供应商")
    private String supplierId;

    @ApiModelProperty(value = "涉及物料")
    private String materials;

    @ApiModelProperty(value = "处理时间")
    private String dealTime;


    @ApiModelProperty(value = "状态")
    private String status;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getDealTime() {
        return dealTime;
    }

    public void setDealTime(String dealTime) {
        this.dealTime = dealTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
