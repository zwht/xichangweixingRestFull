package org.poem.reports;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 投诉举报
 * @author poem
 */
@Api(value = "投诉举报")
public class TReportsHandVO {

    @ApiModelProperty(value = "id")
    private String id;

    @ApiModelProperty(value = "处理意见")
    private String suggestion;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSuggestion() {
        return suggestion;
    }

    public void setSuggestion(String suggestion) {
        this.suggestion = suggestion;
    }
}
