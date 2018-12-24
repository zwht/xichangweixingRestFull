package org.poem.marketInformation;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 市场信息
 *
 * @author poem
 */
@Api(value = "市场信息")
public class MarketInformationQueryVO {

    @ApiModelProperty(value = "id")
    private String id;

    @ApiModelProperty(value = "标题")
    private String title;

    @ApiModelProperty(value = "行业")
    private String industry;

    @ApiModelProperty(value = "状态 0 没有发布 1 发布")
    private String status;

    @ApiModelProperty(value = "修改时间")
    private String updateStartTime;


    @ApiModelProperty(value = "修改时间")
    private String updateEndTime;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUpdateStartTime() {
        return updateStartTime;
    }

    public void setUpdateStartTime(String updateStartTime) {
        this.updateStartTime = updateStartTime;
    }

    public String getUpdateEndTime() {
        return updateEndTime;
    }

    public void setUpdateEndTime(String updateEndTime) {
        this.updateEndTime = updateEndTime;
    }
}
