package org.poem.roomReservation;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 客房预订
 * @author poem
 */
@Api(value = "客房预订")
public class TRoomReservationQueryVO {



    @ApiModelProperty(value = "房客姓名")
    private String name;


    @ApiModelProperty(value = "入住开始时间")
    private String livingStartTime;


    @ApiModelProperty(value = "入住开始时间")
    private String livingEndTime;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLivingStartTime() {
        return livingStartTime;
    }

    public void setLivingStartTime(String livingStartTime) {
        this.livingStartTime = livingStartTime;
    }

    public String getLivingEndTime() {
        return livingEndTime;
    }

    public void setLivingEndTime(String livingEndTime) {
        this.livingEndTime = livingEndTime;
    }
}
