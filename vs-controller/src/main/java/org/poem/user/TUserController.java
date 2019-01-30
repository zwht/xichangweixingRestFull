package org.poem.user;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.poem.RequestUtil;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 用户
 *
 * @author poem
 */
@RestController
@RequestMapping("/v1/user")
@Api(value = "/v1/user", tags = {"02-用户"})
public class TUserController {

    private static final Logger logger = LoggerFactory.getLogger(TUserController.class);

    @Autowired
    private TUserService userService;

    /**
     * @param tUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "02-01-添加用户", httpMethod = "POST")
    @PostMapping("/addUser")
    public ResultVO<String> addUser(@RequestBody TUserVO tUserVO, HttpServletRequest request) {
        logger.info("TUserController: addUser");
        logger.info("" + JSONObject.toJSONString(tUserVO));
        Long userId = RequestUtil.getUserId(request);
        return userService.AddUser(tUserVO, userId);
    }

    /**
     * @param userId
     * @param status
     * @param request
     * @return
     */
    @ApiOperation(value = "02-02-修改用户状态", httpMethod = "POST")
    @PostMapping("/disableUser")
    public ResultVO<String> disableUser(@ApiParam(value = "修改用户") String userId,
                                        @ApiParam(value = "状态 0 不可用 1 可用") Integer status,
                                        HttpServletRequest request) {
        logger.info("TUserController: disableUser");
        logger.info("" + JSONObject.toJSONString(userId) + "  " + JSONObject.toJSONString(status));
        Long user = RequestUtil.getUserId(request);
        return userService.disableUser(Long.valueOf(userId), user, status);
    }


    /**
     * @param tUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "02-03-修改用户", httpMethod = "POST")
    @PostMapping("/updateUser")
    public ResultVO<String> updateUser(@RequestBody TUserVO tUserVO, HttpServletRequest request) {
        logger.info("TUserController: updateUser");
        logger.info("" + JSONObject.toJSONString(tUserVO));
        Long userId = RequestUtil.getUserId(request);
        return userService.updateUser(tUserVO, userId);
    }

    /**
     * @param password
     * @param userId
     * @return
     */
    @ApiOperation(value = "02-04-修改密码", httpMethod = "POST")
    @PostMapping("/updatePassword")
    public ResultVO<String> updatePassword(@ApiParam(value = "用户密码") String password, String userId) {
        logger.info("TUserController: updatePassword");
        logger.info("" + JSONObject.toJSONString(password));
        return userService.updatePassword(password, userId);
    }


    /**
     * 跟新记录
     *
     * @param queryVO
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "02-05-查询", httpMethod = "GET")
    @GetMapping("/getAllUser")
    public ResultVO<PageVO<TUserVO>> getAllUser(UserQueryVO queryVO, Integer pageSize, Integer pageNumber) {
        logger.info("TUserController: getAllUser");
        logger.info("" + JSONObject.toJSONString(queryVO));
        return userService.getAllUser(queryVO, pageSize, pageNumber);
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "02-06-根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TUserVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TUserController: getById");
        logger.info("" + JSONObject.toJSONString(id));
        return userService.getById(id);
    }


    /**
     *
     * @param id
     * @param request
     * @return
     */
    @ApiOperation(value = "02-07-禁用", httpMethod = "POST")
    @PostMapping("/disable")
    public ResultVO<String> disable(Long id, HttpServletRequest request) {
        logger.info("TUserController: disable");
        logger.info("" + JSONObject.toJSONString(id));
        return userService.disable(id, RequestUtil.getUserId(request));
    }


    /**
     *
     * @param id
     * @param request
     * @return
     */
    @ApiOperation(value = "02-08-启用", httpMethod = "POST")
    @PostMapping("/able")
    public ResultVO<String> able(Long id, HttpServletRequest request) {
        logger.info("TUserController: able");
        logger.info("" + JSONObject.toJSONString(id));
        return userService.able(id, RequestUtil.getUserId(request));
    }
}
