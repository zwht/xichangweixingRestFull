package org.poem.link;

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
 * 外部链接
 *
 * @author poem
 */
@RestController
@RequestMapping("/v1/link")
@Api(value = "/v1/link", tags = {"03-外部链接"})
public class TLinkController {

    private static final Logger logger = LoggerFactory.getLogger(TLinkController.class);

    @Autowired
    private TLinkService tLinkService;

    /**
     * @return
     */
    @ApiOperation(value = "03-01-查询", httpMethod = "GET")
    @GetMapping("/getLinked")
    public ResultVO<PageVO<TLinkVO>> getLinked(TLinkQueryVO tLinkQueryVO, Integer pageSize, Integer pageNumber) {
        logger.info("TLinkController: getLinked:" + JSONObject.toJSONString(tLinkQueryVO) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tLinkService.getLinked(tLinkQueryVO, pageSize, pageNumber));
    }

    @ApiOperation(value = "03-02-添加", httpMethod = "POST")
    @PostMapping("/addLink")
    public ResultVO<String> addLink(@RequestBody TLinkVO tLinkVO, HttpServletRequest request) {
        Long userId = RequestUtil.getUserId(request);
        logger.info("TLinkController: addLink:" + JSONObject.toJSONString(tLinkVO));
        return tLinkService.addLink(tLinkVO, userId);
    }


    @ApiOperation(value = "03-03-修改", httpMethod = "POST")
    @PostMapping("/update")
    public ResultVO<String> update(@RequestBody TLinkVO tLinkVO, HttpServletRequest request) {
        Long userId = RequestUtil.getUserId(request);
        logger.info("TLinkController: update:" + JSONObject.toJSONString(tLinkVO));
        return tLinkService.addLink(tLinkVO, userId);
    }

    @ApiOperation(value = "03-04-删除", httpMethod = "POST")
    @PostMapping("/delete")
    public ResultVO<String> delete(Long[] ids, HttpServletRequest request) {
        logger.info("TLinkController: delete:" + JSONObject.toJSONString(ids));
        return tLinkService.delele(Arrays.asList(ids));
    }

    @ApiOperation(value = "03-05-置顶", httpMethod = "POST")
    @PostMapping("/top")
    public ResultVO<String> top(Long[] ids, HttpServletRequest request) {
        logger.info("TLinkController: top:" + JSONObject.toJSONString(ids));
        Long userId = RequestUtil.getUserId(request);
        return tLinkService.top(Arrays.asList(ids), userId);
    }

    @ApiOperation(value = "03-06-下线", httpMethod = "POST")
    @PostMapping("/line")
    public ResultVO<String> line(Long[] ids, HttpServletRequest request) {
        logger.info("TLinkController: line:" + JSONObject.toJSONString(ids));
        Long userId = RequestUtil.getUserId(request);
        return tLinkService.line(Arrays.asList(ids), userId);
    }

    @ApiOperation(value = "03-07-发布", httpMethod = "POST")
    @PostMapping("/push")
    public ResultVO<String> push(Long[] ids, HttpServletRequest request) {
        logger.info("TLinkController: push:" + JSONObject.toJSONString(ids));
        Long userId = RequestUtil.getUserId(request);
        return tLinkService.push(Arrays.asList(ids), userId);
    }

    @ApiOperation(value = "03-08-根据id查询记录", httpMethod = "POST")
    @PostMapping("/getById/{id}")
    public ResultVO<TLinkVO> getById(@PathVariable(value = "id") Long id, HttpServletRequest request) {
        logger.info("TLinkController: push:" + JSONObject.toJSONString(id));
        return tLinkService.getById(id);
    }
}
