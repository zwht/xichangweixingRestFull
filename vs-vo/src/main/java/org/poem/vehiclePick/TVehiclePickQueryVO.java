package org.poem.vehiclePick;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 接送
 * @author poem
 */
@Api(value = "接送")
public class TVehiclePickQueryVO {



    @ApiModelProperty(value = "房客姓名")
    private String name;


    @ApiModelProperty(value = "接送开始时间")
    private String vehicleStartTime;

    @ApiModelProperty(value = "接送结束时间")
    private String vehicleEndTime;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVehicleStartTime() {
        return vehicleStartTime;
    }

    public void setVehicleStartTime(String vehicleStartTime) {
        this.vehicleStartTime = vehicleStartTime;
    }

    public String getVehicleEndTime() {
        return vehicleEndTime;
    }

    public void setVehicleEndTime(String vehicleEndTime) {
        this.vehicleEndTime = vehicleEndTime;
    }
}
