package org.poem.qualityEvent;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 质量事件
 *
 * @author poem
 */
@Api(value = "质量事件")
public class TQualityEventQueryVO {


    @ApiModelProperty(value = "事件名称")
    private String name;

    @ApiModelProperty(value = "事件级别 1问题, 2事件,3事故")
    private String eventLevel;


    @ApiModelProperty(value = "供应商")
    private String supplierId;


    @ApiModelProperty(value = "发生时间")
    private String occurrenceTime;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEventLevel() {
        return eventLevel;
    }

    public void setEventLevel(String eventLevel) {
        this.eventLevel = eventLevel;
    }


    public String getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(String supplierId) {
        this.supplierId = supplierId;
    }

    public String getOccurrenceTime() {
        return occurrenceTime;
    }

    public void setOccurrenceTime(String occurrenceTime) {
        this.occurrenceTime = occurrenceTime;
    }
}



