package org.poem.reports;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.RequestUtil;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.workDynamics.TWorkDynamicsQueryVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 * 投诉举报
 * @author poem
 */
@RestController
@RequestMapping("/v1/reports")
@Api(value = "/v1/reports",tags = {"23-投诉举报"})
public class TReportsController {

    private static final Logger logger = LoggerFactory.getLogger(TReportsController.class);

    @Autowired
    private TReportsService tReportsService;

    @ApiOperation(value = "查询", httpMethod = "GET")
    @GetMapping("/getAll/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TReportsVO>> getAll(TWorkDynamicsQueryVO tNewQueryVO,
                                                    @PathVariable(value = "pageSize") Integer pageSize,
                                                    @PathVariable(value = "pageNumber") Integer pageNumber) {
        logger.info("TReportsController:getAll" + JSONObject.toJSONString(tNewQueryVO));
        return new ResultVO<>(this.tReportsService.getAll(tNewQueryVO, pageSize, pageNumber));
    }

    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TReportsVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TReportsController:getById" + JSONObject.toJSONString(id));
        return new ResultVO<>(this.tReportsService.getById(id));
    }

    @ApiOperation(value = "下线", httpMethod = "POST")
    @PostMapping("/line")
    public ResultVO<String> line(Long id, HttpServletRequest request) {
        logger.info("TReportsController:line");
        return this.tReportsService.line(id, RequestUtil.getUserId(request));
    }


    @ApiOperation(value = "发布", httpMethod = "POST")
    @PostMapping("/push")
    public ResultVO<String> push(Long id, HttpServletRequest request) {
        logger.info("TReportsController:push");
        return this.tReportsService.push(id, RequestUtil.getUserId(request));
    }


    @ApiOperation(value = "置顶", httpMethod = "POST")
    @PostMapping("/top")
    public ResultVO<String> top(Long id, HttpServletRequest request) {
        logger.info("TReportsController:top");
        return this.tReportsService.top(id, RequestUtil.getUserId(request));
    }

    @ApiOperation(value = "更新/添加", httpMethod = "POST")
    @PostMapping("/addAndUpdate")
    public ResultVO<String> addAndUpdate(@RequestBody TReportsVO tNewsVO, HttpServletRequest request) {
        logger.info("TReportsController:addAndUpdate :" + JSONObject.toJSONString(tNewsVO));
        return this.tReportsService.addAndUpdate(tNewsVO, RequestUtil.getUserId(request));
    }

}
