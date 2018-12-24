package org.poem.workDynamics;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 工作动态
 * @author poem
 */
@Api(value = "工作动态")
public class TWorkDynamicsQueryVO {


    @ApiModelProperty(value = "标题")
    private String title;

    @ApiModelProperty(value = "状态 0 未发布 1 发布")
    private Integer status;

    @ApiModelProperty(value = "修改开始时间")
    private String updateStartTime;

    @ApiModelProperty(value = "修改开始时间")
    private String updateEndTime;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
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
