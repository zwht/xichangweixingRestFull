package org.poem.account;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.authVO.ResultVO;
import org.poem.user.TUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 账户
 *
 * @author poem
 */
@RestController
@RequestMapping("/v1/account")
@Api(value = "/v1/account", tags = {"27-账户管理"})
public class AccountController {

    private static final Logger logger = LoggerFactory.getLogger(AccountController.class);

    @Autowired
    private TUserService userInfoService;


    /**
     * 找回密码
     *
     * @param account 账户
     * @param name    名字
     * @param phone   嗲话
     * @param code    验证码
     * @return
     */
    @ApiOperation(value = "找回密码", httpMethod = "POST")
    @PostMapping("/findPasswd")
    public ResultVO<String> findPasswd(String account, String name, String phone, String code) {
        logger.info("AccountController:findPasswd");
        return this.userInfoService.forgetPassword(account, name, phone, code);
    }
}
