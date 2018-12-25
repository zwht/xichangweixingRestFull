package org.poem.orderingMeals;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

/**
 * 网上订餐
 * @author poem
 */
@Api(value = "网上订餐")
public class TOrderingMealsQueryVO {


    @ApiModelProperty(value = "用餐人姓名")
    private String name;



    @ApiModelProperty(value = "用餐时间")
    private String eatStartTime;

    @ApiModelProperty(value = "用餐时间")
    private String eatEndTime;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEatStartTime() {
        return eatStartTime;
    }

    public void setEatStartTime(String eatStartTime) {
        this.eatStartTime = eatStartTime;
    }

    public String getEatEndTime() {
        return eatEndTime;
    }

    public void setEatEndTime(String eatEndTime) {
        this.eatEndTime = eatEndTime;
    }
}
