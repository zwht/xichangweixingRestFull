package org.poem.division;

import com.alibaba.fastjson.JSON;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.RequestUtil;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.config.annotation.ShiroOauthodIgnore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author poem
 */
@ShiroOauthodIgnore
@RestController
@RequestMapping(value = "/v1/adminDivision")
@Api(value = "/adminDivisionManage", tags = "34-地区信息")
public class AdminDivisionController {
    private static Logger logger = LoggerFactory.getLogger(AdminDivisionController.class);

    @Autowired
    private AdminDivisionService adminDivisionService;

    

    /**
     * 地区信息信息列表查询
     *
     * @param adminDivisionQueryVo
     * @param page
     * @param size
     * @param request
     * @return
     */
    @RequestMapping(value = "/list/{page}/{size}", method = RequestMethod.POST)
    @ResponseBody
    @ApiOperation(value = "查询地区信息信息列表", notes = "查询列表", httpMethod = "POST")
    public ResultVO<PageVO<List<AdminDivisionListVo>>> listAdminDivision(@RequestBody AdminDivisionQueryVo adminDivisionQueryVo, @PathVariable("page") int page,
                                                                         @PathVariable("size") int size, HttpServletRequest request) {
        logger.info("AdminDivisionController-listAdminDivision:adminDivisionQueryVo="+ JSON.toJSONString(adminDivisionQueryVo));
        try{
            Long userId = RequestUtil.getUserId(request);
            return adminDivisionService.list(adminDivisionQueryVo, userId, page, size);
        }catch (Exception e){
            e.printStackTrace();
            return new ResultVO<>(-1,null, "发生错误 ");
        }
    }

}
