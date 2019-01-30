package org.poem.notice;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 质量公告
 * @author poem
 */
@Api(value = "通知公告")
public class TNoticeQueryVO {


    @ApiModelProperty(value = "标题")
    private String title;

    @ApiModelProperty(value = "置顶")
    private String top;


    @ApiModelProperty(value = "状态 0 未发布 1 发布")
    private String status;


    @ApiModelProperty(value = "开始时间时间")
    private String startTime;

    @ApiModelProperty(value = "结束时间")
    private String endTime;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTop() {
        return top;
    }

    public void setTop(String top) {
        this.top = top;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }
}
