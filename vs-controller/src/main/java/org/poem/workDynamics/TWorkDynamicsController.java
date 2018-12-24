package org.poem.workDynamics;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.RequestUtil;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 * 工作动态
 * @author poem
 */
@RestController
@RequestMapping("/v1/workDynamics")
@Api(value = "/v1/workDynamics",tags = {"19-工作动态"})
public class TWorkDynamicsController {


    private static final Logger logger = LoggerFactory.getLogger(TWorkDynamicsController.class);

    @Autowired
    private TWorkDynamicsService tNewsService;

    @ApiOperation(value = "查询", httpMethod = "GET")
    @GetMapping("/getAll/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TWorkDynamicsVO>> getAll(TWorkDynamicsQueryVO tNewQueryVO,
                                            @PathVariable(value = "pageSize") Integer pageSize,
                                            @PathVariable(value = "pageNumber") Integer pageNumber) {
        logger.info("TWorkDynamicsController:getAll" + JSONObject.toJSONString(tNewQueryVO));
        return new ResultVO<>(this.tNewsService.getAll(tNewQueryVO, pageSize, pageNumber));
    }

    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TWorkDynamicsVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TWorkDynamicsController:getById" + JSONObject.toJSONString(id));
        return new ResultVO<>(this.tNewsService.getById(id));
    }

    @ApiOperation(value = "下线", httpMethod = "POST")
    @PostMapping("/line")
    public ResultVO<String> line(Long id, HttpServletRequest request) {
        logger.info("TWorkDynamicsController:line");
        return this.tNewsService.line(id, RequestUtil.getUserId(request));
    }


    @ApiOperation(value = "发布", httpMethod = "POST")
    @PostMapping("/push")
    public ResultVO<String> push(Long id, HttpServletRequest request) {
        logger.info("TWorkDynamicsController:push");
        return this.tNewsService.push(id, RequestUtil.getUserId(request));
    }


    @ApiOperation(value = "置顶", httpMethod = "POST")
    @PostMapping("/top")
    public ResultVO<String> top(Long id, HttpServletRequest request) {
        logger.info("TWorkDynamicsController:top");
        return this.tNewsService.top(id, RequestUtil.getUserId(request));
    }

    @ApiOperation(value = "更新/添加", httpMethod = "POST")
    @PostMapping("/addAndUpdate")
    public ResultVO<String> addAndUpdate(@RequestBody TWorkDynamicsVO tNewsVO, HttpServletRequest request) {
        logger.info("TWorkDynamicsController:addAndUpdate :" + JSONObject.toJSONString(tNewsVO));
        return this.tNewsService.addAndUpdate(tNewsVO, RequestUtil.getUserId(request));
    }
}
