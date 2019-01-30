package org.poem.arms;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import org.poem.file.TFileVO;

import java.util.List;

/**
 * 强军管理
 * @author poem
 */
@Api(value = "强军管理")
public class TArmsQueryVO {

    @ApiModelProperty(value = "标题")
    private String title;


    @ApiModelProperty(value = "状态 0 未发布 1 发布")
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
