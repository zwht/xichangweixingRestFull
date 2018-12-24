package org.poem.managementRegulation;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.RequestUtil;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.marketInformation.MarketInformationController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 * 管理规定
 * @author poem
 */
@RestController
@RequestMapping("/v1/managementRegulation")
@Api(value = "/v1/managementRegulation",tags = {"22-管理规定"})
public class TManagementRegulationController {


    private static final Logger logger = LoggerFactory.getLogger(MarketInformationController.class);

    @Autowired
    private TManagementRegulationService marketInformationService;

    @ApiOperation(value = "查询", httpMethod = "GET")
    @GetMapping("/getAll/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TManagementRegulationVO>> getAll(TManagementRegulationQueryVO tNewQueryVO,
                                                        @PathVariable(value = "pageSize") Integer pageSize,
                                                        @PathVariable(value = "pageNumber") Integer pageNumber) {
        logger.info("MarketInformationController:getAll" + JSONObject.toJSONString(tNewQueryVO));
        return new ResultVO<>(this.marketInformationService.getAll(tNewQueryVO, pageSize, pageNumber));
    }

    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TManagementRegulationVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("MarketInformationController:getById" + JSONObject.toJSONString(id));
        return new ResultVO<>(this.marketInformationService.getById(id));
    }

    @ApiOperation(value = "下线", httpMethod = "POST")
    @PostMapping("/line")
    public ResultVO<String> line(Long id, HttpServletRequest request) {
        logger.info("MarketInformationController:line");
        return this.marketInformationService.line(id, RequestUtil.getUserId(request));
    }


    @ApiOperation(value = "发布", httpMethod = "POST")
    @PostMapping("/push")
    public ResultVO<String> push(Long id, HttpServletRequest request) {
        logger.info("MarketInformationController:push");
        return this.marketInformationService.push(id, RequestUtil.getUserId(request));
    }


    @ApiOperation(value = "置顶", httpMethod = "POST")
    @PostMapping("/top")
    public ResultVO<String> top(Long id, HttpServletRequest request) {
        logger.info("MarketInformationController:top");
        return this.marketInformationService.top(id, RequestUtil.getUserId(request));
    }

    @ApiOperation(value = "更新/添加", httpMethod = "POST")
    @PostMapping("/addAndUpdate")
    public ResultVO<String> addAndUpdate(@RequestBody TManagementRegulationVO tNewsVO, HttpServletRequest request) {
        logger.info("MarketInformationController:addAndUpdate :" + JSONObject.toJSONString(tNewsVO));
        return this.marketInformationService.addAndUpdate(tNewsVO, RequestUtil.getUserId(request));
    }
}
