package org.poem.front;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.SCaptcha;
import org.poem.config.annotation.ShiroOauthodIgnore;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@ShiroOauthodIgnore
@RequestMapping("/v1/captcha")
@Api(value = "/v1/captcha", tags = {"32-验证码"})
public class CaptchaController {


    /**
     * 验证码
     * @param response
     * @throws IOException
     */
    @RequestMapping(value = "/verification", method = { RequestMethod.GET})
    @ApiOperation(value = "验证码", httpMethod = "GET")
    public void verification(HttpServletResponse response, HttpServletRequest request) throws IOException {
        // 设置响应的类型格式为图片格式
        response.setContentType("image/jpeg");
        // 禁止图像缓存。
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0);
        //实例生成验证码对象
        SCaptcha instance = new SCaptcha();
        //将验证码存入session
        request.getSession(true).setAttribute("verification", instance.getCode());
        //向页面输出验证码图片
        instance.write(response.getOutputStream());
    }
}
