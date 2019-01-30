package org.poem.party;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.RequestUtil;
import org.poem.news.TNewsController;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;

/**
 * 强军
 * @author poem
 */
@RestController
@RequestMapping("/v1/party")
@Api(value = "/v1/party",tags = {"07-党建"})
public class TPartyController {

    private static final Logger logger = LoggerFactory.getLogger(TNewsController.class);

    @Autowired
    private TPartyService tNewsService;

    @ApiOperation(value = "查询", httpMethod = "GET")
    @GetMapping("/getAll/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TPartyVO>> getAll(TPartQueryVO tNewQueryVO,
                                            @PathVariable(value = "pageSize") Integer pageSize,
                                            @PathVariable(value = "pageNumber") Integer pageNumber) {
        logger.info("TNewsController:getAll" + JSONObject.toJSONString(tNewQueryVO));
        return new ResultVO<>(this.tNewsService.getAll(tNewQueryVO, pageSize, pageNumber));
    }

    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TPartyVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TNewsController:getById" + JSONObject.toJSONString(id));
        return new ResultVO<>(this.tNewsService.getById(id,false));
    }

    @ApiOperation(value = "下线", httpMethod = "POST")
    @PostMapping("/line")
    public ResultVO<String> line(Long id, HttpServletRequest request) {
        logger.info("TNewsController:line");
        return this.tNewsService.line(RequestUtil.getUserId(request), id);
    }


    @ApiOperation(value = "发布", httpMethod = "POST")
    @PostMapping("/push")
    public ResultVO<String> push(Long id, HttpServletRequest request) {
        logger.info("TNewsController:push");
        return this.tNewsService.push(RequestUtil.getUserId(request),id);
    }


    @ApiOperation(value = "置顶", httpMethod = "POST")
    @PostMapping("/top")
    public ResultVO<String> top(Long id, HttpServletRequest request) {
        logger.info("TNewsController:top");
        return this.tNewsService.top(RequestUtil.getUserId(request), id);
    }

    @ApiOperation(value = "修改或者添加", httpMethod = "POST")
    @PostMapping("/addAndUpdate")
    public ResultVO<String> addAndUpdate(@RequestBody TPartyVO tNewsVO, HttpServletRequest request) {
        logger.info("TNewsController:addAndUpdate :" + JSONObject.toJSONString(tNewsVO));
        return this.tNewsService.addAndUpdate(tNewsVO, RequestUtil.getUserId(request));
    }


    @ApiOperation(value = "删除", httpMethod = "POST")
    @PostMapping("/delete")
    public ResultVO<String> delete(Long[] ids) {
        logger.info("TNewsController:addAndUpdate :" + JSONObject.toJSONString(ids));
        return this.tNewsService.delete(Arrays.asList(ids));
    }

}
