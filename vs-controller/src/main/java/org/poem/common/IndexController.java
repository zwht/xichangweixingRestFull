package org.poem.common;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.config.annotation.ShiroOauthodIgnore;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author：zhaowei
 * @Date：2018/12/20
 * @Time：上午11:54
 */
@ShiroOauthodIgnore
@Api(description = "静态文件路由",hidden = true)
@Controller
public class IndexController {

    @RequestMapping(value = "/")
    @ApiOperation(value = "门户",hidden = true)
    public String index(){
        return "/frontend/index";
    }

    @RequestMapping(value = "/admin")
    @ApiOperation(value = "admin",hidden = true)
    public String swagger2(){
        return "/admin/index";
    }
}
