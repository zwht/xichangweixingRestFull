package org.poem.front;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.poem.RequestUtil;
import org.poem.authVO.ResultVO;
import org.poem.orderingMeals.TOrderingMealsService;
import org.poem.orderingMeals.TOrderingMealsVO;
import org.poem.roomReservation.TRoomReservationService;
import org.poem.roomReservation.TRoomReservationVO;
import org.poem.user.TUserService;
import org.poem.vehiclePick.TVehiclePickService;
import org.poem.vehiclePick.TVehiclePickVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 *
 */
@RestController
@RequestMapping("/v1/frontAuth")
@Api(value = "/v1/frontAuth", tags = {"31-前端-鉴权"})
public class FrontAuthController {


    private static final Logger logger = LoggerFactory.getLogger(FrontAuthController.class);

    @Autowired
    private TUserService userService;

    @Autowired
    private TVehiclePickService tVehiclePickService;

    @Autowired
    private TRoomReservationService tRoomReservationService;

    @Autowired
    private TOrderingMealsService tOrderingMealsService;

    /**
     * 添加车辆接送
     * @param tUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "添加车辆接送", httpMethod = "POST")
    @PostMapping("/saveVehiclePick")
    public ResultVO<String> saveVehiclePick(@RequestBody TVehiclePickVO tUserVO, HttpServletRequest request) {
        logger.info("TVehiclePickController: saveVehiclePick");
        logger.info("" + JSONObject.toJSONString(tUserVO));
        Long userId = RequestUtil.getUserId(request);
        return tVehiclePickService.saveOrUpdate(tUserVO, userId);
    }


    /**
     * 添加房屋预定
     * @param tRoomReservationVO
     * @param request
     * @return
     */
    @ApiOperation(value = "添加房屋预定", httpMethod = "POST")
    @PostMapping("/saveRoomReservation")
    public ResultVO<String> saveRoomReservation(@RequestBody TRoomReservationVO tRoomReservationVO, HttpServletRequest request) {
        logger.info("TRoomReservationController: saveRoomReservation");
        logger.info("" + JSONObject.toJSONString(tRoomReservationVO));
        Long userId = RequestUtil.getUserId(request);
        return tRoomReservationService.saveOrUpdate(tRoomReservationVO, userId);
    }


    /**
     * 添加网上订餐
     * @param tUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "添加网上订餐", httpMethod = "POST")
    @PostMapping("/saveOrderingMeals")
    public ResultVO<String> saveOrderingMeals(@RequestBody TOrderingMealsVO tUserVO, HttpServletRequest request) {
        logger.info("TOrderingMealsController: saveOrderingMeals");
        logger.info("" + JSONObject.toJSONString(tUserVO));
        Long userId = RequestUtil.getUserId(request);
        return tOrderingMealsService.saveOrUpdate(tUserVO, userId);
    }


    /**
     * @param password
     * @param userId
     * @return
     */
    @ApiOperation(value = "修改密码", httpMethod = "POST")
    @PostMapping("/updatePassword")
    public ResultVO<String> updatePassword(@ApiParam(value = "用户密码") String password,
                                           String userId, String lodPassword) {
        logger.info("TUserController: updatePassword");
        logger.info("" + JSONObject.toJSONString(password));
        return userService.updatePassword(password, userId, lodPassword);
    }
}
