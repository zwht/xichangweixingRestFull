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
public class  TReportsController {

    private static final Logger logger = LoggerFactory.getLogger(TReportsController.class);

    @Autowired
    private TReportsService tReportsService;

    @ApiOperation(value = "查询", httpMethod = "GET")
    @GetMapping("/getAll/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TReportsVO>> getAll(TWorkDynamicsQueryVO tNewQueryVO,
                                                    @PathVariable(value = "pageSize") Integer pageSize,
                                                    @PathVariable(value = "pageNumber") Integer pageNumber) {
        logger.info("TReportsController:getAll" + JSONObject.toJSONString(tNewQueryVO));
        return new ResultVO<>(this.tReportsService.getAll(tNewQueryVO, pageNumber,pageSize));
    }

    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TReportsVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TReportsController:getById" + JSONObject.toJSONString(id));
        return new ResultVO<>(this.tReportsService.getById(id));
    }



    @ApiOperation(value = "更新/添加", httpMethod = "POST")
    @PostMapping("/addAndUpdate")
    public ResultVO<String> addAndUpdate(@RequestBody TReportsVO tNewsVO, HttpServletRequest request) {
        logger.info("TReportsController:addAndUpdate :" + JSONObject.toJSONString(tNewsVO));
        return this.tReportsService.addAndUpdate(tNewsVO, RequestUtil.getUserId(request));
    }
    @ApiOperation(value = "处理", httpMethod = "POST")
    @PostMapping("/handl")
    public ResultVO<String> handl(@RequestBody TReportsHandVO tNewsVO, HttpServletRequest request) {
        logger.info("TReportsController:addAndUpdate :" + JSONObject.toJSONString(tNewsVO));
        return this.tReportsService.handl(tNewsVO, RequestUtil.getUserId(request));
    }


}
