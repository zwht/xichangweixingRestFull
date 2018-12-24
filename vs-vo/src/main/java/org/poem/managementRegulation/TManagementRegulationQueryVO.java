package org.poem.managementRegulation;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 管理规定
 * @author poem
 */
@Api(value = "管理规定")
public class TManagementRegulationQueryVO {


    @ApiModelProperty(value = "标题")
    private String title;

    @ApiModelProperty(value = "发布部门")
    private String departId;

    @ApiModelProperty(value = "状态 0 没有发布 1 发布")
    private String status;

    @ApiModelProperty(value = "修改开始时间")
    private String updateStartTime;


    @ApiModelProperty(value = "修改结束时间")
    private String updateEndTime;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDepartId() {
        return departId;
    }

    public void setDepartId(String departId) {
        this.departId = departId;
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
