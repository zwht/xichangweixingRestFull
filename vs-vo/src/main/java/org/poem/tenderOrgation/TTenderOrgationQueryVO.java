package org.poem.tenderOrgation;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 投标机构
 * @author poem
 */
@Api(value = "投标机构")
public class TTenderOrgationQueryVO {



    @ApiModelProperty(value = "机构名字")
    private String name;

    @ApiModelProperty(value = "所在地区")
    private String region;

    @ApiModelProperty(value = "评级")
    private String grade;

    @ApiModelProperty(value = "状态")
    private String status;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
