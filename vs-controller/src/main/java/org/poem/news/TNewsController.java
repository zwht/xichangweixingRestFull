package org.poem.news;

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
import java.util.Arrays;

/**
 * 新闻
 *
 * @author poem
 */
@RestController
@RequestMapping("/v1/news")
@Api(value = "/v1/news", tags = {"06-新闻"})
public class TNewsController {

    private static final Logger logger = LoggerFactory.getLogger(TNewsController.class);

    @Autowired
    private TNewsService tNewsService;

    @ApiOperation(value = "06-01-查询", httpMethod = "GET")
    @GetMapping("/getAll/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TNewsVO>> getAll(TNewQueryVO tNewQueryVO,
                                            @PathVariable(value = "pageSize") Integer pageSize,
                                            @PathVariable(value = "pageNumber") Integer pageNumber) {
        logger.info("TNewsController:getAll" + JSONObject.toJSONString(tNewQueryVO));
        return new ResultVO<>(this.tNewsService.getAll(tNewQueryVO, pageNumber, pageSize));
    }

    @ApiOperation(value = "06-02-根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TNewsVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TNewsController:getById" + JSONObject.toJSONString(id));
        return new ResultVO<>(this.tNewsService.getById(id, false));
    }

    @ApiOperation(value = "06-03-下线", httpMethod = "POST")
    @PostMapping("/line")
    public ResultVO<String> line(Long id, HttpServletRequest request) {
        logger.info("TNewsController:line " + id);
        return this.tNewsService.line(id, RequestUtil.getUserId(request));
    }


    @ApiOperation(value = "06-04-发布", httpMethod = "POST")
    @PostMapping("/push")
    public ResultVO<String> push(Long id, HttpServletRequest request) {
        logger.info("TNewsController:push   "  + id );
        return this.tNewsService.push(id, RequestUtil.getUserId(request));
    }


    @ApiOperation(value = "06-05-置顶", httpMethod = "POST")
    @PostMapping("/top")
    public ResultVO<String> top(Long id, HttpServletRequest request) {
        logger.info("TNewsController:top    "  + id );
        return this.tNewsService.top(id, RequestUtil.getUserId(request));
    }

    @ApiOperation(value = "06-06-修改或者添加", httpMethod = "POST")
    @PostMapping("/addAndUpdate")
    public ResultVO<String> addAndUpdate(@RequestBody TNewsVO tNewsVO, HttpServletRequest request) {
        logger.info("TNewsController:addAndUpdate :" + JSONObject.toJSONString(tNewsVO));
        return this.tNewsService.addAndUpdate(tNewsVO, RequestUtil.getUserId(request));
    }

    @ApiOperation(value = "06-07-删除", httpMethod = "POST")
    @PostMapping("/delete")
    public ResultVO<String> delete(Long[] ids, HttpServletRequest request) {
        logger.info("TNewsController:addAndUpdate :" + JSONObject.toJSONString(ids));
        return this.tNewsService.delete(Arrays.asList(ids));
    }

}
