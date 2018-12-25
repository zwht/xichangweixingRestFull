package org.poem.arms;

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
 * 强军管理
 *
 * @author poem
 */
@RestController
@RequestMapping("/v1/arms")
@Api(value = "/v1/arms", tags = {"04-强军管理"})
public class TArmsController {


    private static final Logger logger = LoggerFactory.getLogger(TArmsController.class);

    @Autowired
    private TArmsService tArmsService;

    @ApiOperation(value = "02-01-查询", httpMethod = "GET")
    @GetMapping("/getArms/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TArmsVO>> getArms(@PathVariable(value = "pageSize") Integer pageSize,
                                             @PathVariable(value = "pageNumber") Integer pageNumber) {
        return new ResultVO<>(this.tArmsService.getArms(pageSize, pageNumber));
    }

    @ApiOperation(value = "02-02-置顶", httpMethod = "POST")
    @PostMapping("/top")
    public ResultVO<String> top(Long id, HttpServletRequest request) {
        logger.info("TArmsController:top");
        return this.tArmsService.top(id, RequestUtil.getUserId(request));
    }

    @ApiOperation(value = "02-03-发布", httpMethod = "POST")
    @PostMapping("/push")
    public ResultVO<String> push(Long id, HttpServletRequest request) {
        logger.info("TArmsController:push");
        return this.tArmsService.push(id, RequestUtil.getUserId(request));
    }

    @ApiOperation(value = "02-04-下线", httpMethod = "POST")
    @PostMapping("/line")
    public ResultVO<String> line(Long id, HttpServletRequest request) {
        logger.info("TArmsController:line");
        return this.tArmsService.line(id, RequestUtil.getUserId(request));
    }

    @ApiOperation(value = "02-05-删除", httpMethod = "POST")
    @PostMapping("/delete")
    public ResultVO<String> delete(Long[] ids, HttpServletRequest request) {
        logger.info("TArmsController:delete " + JSONObject.toJSONString(ids));
        return this.tArmsService.delete(Arrays.asList(ids));
    }

    @ApiOperation(value = "02-06-根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TArmsVO> getById(@PathVariable(value = "id") Long id) {
        return this.tArmsService.getById(id, false);
    }

    @ApiOperation(value = "02-07-保存或者更新", httpMethod = "GET")
    @GetMapping("/saveOrUpdate")
    public ResultVO<String> saveOrUpdate(@RequestBody TArmsVO tArmsVO, HttpServletRequest request) {
        return this.tArmsService.saveOrUpdate(tArmsVO, RequestUtil.getUserId(request));
    }
}
