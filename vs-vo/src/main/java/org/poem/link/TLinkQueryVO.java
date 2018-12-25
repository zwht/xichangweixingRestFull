package org.poem.link;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

@Api("查询VO")
public class TLinkQueryVO {

    @ApiModelProperty(value = "名字")
    private String name;

    @ApiModelProperty(value = "状态，1已发布， 0等发布")
    private String status;

    @ApiModelProperty(value = "开始时间 ， yyyy-MM-dd hh:mm:ss")
    private String startTime;

    @ApiModelProperty(value = "结束时间, yyyy-MM-dd hh:mm:ss")
    private String endTime;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
