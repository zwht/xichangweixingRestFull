package org.poem.dataDownload;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * 资料下载
 * @author poem
 */
@Api(value = "资料下载")
public class TDataDownloadQueryVO {



    @ApiModelProperty(value = "资料名称")
    private String reportName;

    @ApiModelProperty(value = "学科")
    private String subjectId;

    @ApiModelProperty(value = "状态 1 已发布 0 没有发布")
    private String status;

    @ApiModelProperty(value = "修改开始时间")
    private String updateStartTime;

    @ApiModelProperty(value = "修改结束时间时间")
    private String updateEndTime;


    public String getReportName() {
        return reportName;
    }

    public void setReportName(String reportName) {
        this.reportName = reportName;
    }

    public String getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(String subjectId) {
        this.subjectId = subjectId;
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
