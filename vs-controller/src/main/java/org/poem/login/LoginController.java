package org.poem.login;

import com.alibaba.fastjson.JSON;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.StringUtils;
import org.poem.Constant;
import org.poem.IpUtils;
import org.poem.SpringUtils;
import org.poem.config.annotation.ShiroOauthodIgnore;
import org.poem.jwt.JwtHelper;
import org.poem.user.UserInfoService;
import org.poem.authVO.ResultVO;
import org.poem.authVO.UserInfoVO;
import org.poem.authVO.auth.LoginSuccessVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.Result;
import java.util.HashMap;
import java.util.Map;

import static org.poem.Constant.AUTHORIZATION;

/**
 * @author poem
 */
@ShiroOauthodIgnore
@RestController
@RequestMapping("/v1/auth")
@Api(value = "/v1/auth", tags = {"01-授权管理"}, description = "用户")
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);


    /**
     * 登陆
     *
     * @param userName
     * @param password
     * @param request
     * @return
     */
    @PostMapping("/login")
    @ApiOperation(value = "0101-用户登陆", notes = "01-授权管理", httpMethod = "POST")
    public ResultVO<LoginSuccessVO> login(String userName, String password, HttpServletRequest request, HttpServletResponse response) {
        logger.info("find :userName: " + userName + " password:" + password);
        String ipAddr = IpUtils.getIpAddr(request);
        if (StringUtils.isBlank(userName)) {
            return new ResultVO<>(-9999, null, "用户名不能为空");
        }
        if (StringUtils.isBlank(password)) {
            return new ResultVO<>(-9999, null, "密码不能为空。");
        }
        UserInfoService userInfoService = SpringUtils.getBean(UserInfoService.class);
        ResultVO<UserInfoVO> userInfoVO = userInfoService.login(userName, password, ipAddr);
        if (userInfoVO.getErrorCode() != 0){
            return new ResultVO<>(-9999, null, userInfoVO.getMsg());
        }
        if (userInfoVO.getData() == null) {
            return new ResultVO<>(-9999, null, "用户名不存在。");
        }
        if (userInfoVO.getData().getLocked() != null && !userInfoVO.getData().getLocked()) {
            return new ResultVO<>(-9999, null, "账号被锁定。");
        }
        Map<String, Object> claims = new HashMap<>(0);
        claims.put(Constant.JWT_CLAIM_KEY, JSON.toJSONString(userInfoVO));
        String token = JwtHelper.createJWT(claims, Constant.JWT_TTL);
        LoginSuccessVO loginSuccessVO = new LoginSuccessVO();
        loginSuccessVO.setToken(token);
        loginSuccessVO.setUserInfoVO(userInfoVO.getData());
        response.addHeader(AUTHORIZATION,token);
        return new ResultVO<>(0, loginSuccessVO, "完成");
    }

    /**
     * 登出
     *
     * @param request
     * @return
     */
    @PostMapping("/loginout")
    @ApiOperation(value = "0102-用户登出", notes = "登出", httpMethod = "POST")
    public ResultVO<String> loginout(HttpServletRequest request) {
        //清空session
        request.getSession().setMaxInactiveInterval(-1);
        return new ResultVO<>(0, "登出成功");
    }

}
