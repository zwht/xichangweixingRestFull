package org.poem.dataDownload;

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
 * 资料下载
 *
 * @author poem
 */
@RestController
@RequestMapping("/v1/dataDownload")
@Api(value = "/v1/dataDownload", tags = {"24-资料下载"})
public class TDataDownloadController {


    private static final Logger logger = LoggerFactory.getLogger(TDataDownloadController.class);

    @Autowired
    private TDataDownloadService tDataDownloadService;

    @ApiOperation(value = "查询", httpMethod = "GET")
    @GetMapping("/getAll/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TDataDownloadVO>> getAll(TDataDownloadQueryVO tNewQueryVO,
                                                    @PathVariable(value = "pageSize") Integer pageSize,
                                                    @PathVariable(value = "pageNumber") Integer pageNumber) {
        logger.info("TDataDownloadController:getAll" + JSONObject.toJSONString(tNewQueryVO));
        return new ResultVO<>(this.tDataDownloadService.getAll(tNewQueryVO, pageNumber,pageSize));
    }

    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TDataDownloadVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TDataDownloadController:getById" + JSONObject.toJSONString(id));
        return new ResultVO<>(this.tDataDownloadService.getById(id));
    }

    @ApiOperation(value = "下线", httpMethod = "POST")
    @PostMapping("/line")
    public ResultVO<String> line(Long id, HttpServletRequest request) {
        logger.info("TDataDownloadController:line");
        return this.tDataDownloadService.line(RequestUtil.getUserId(request),id);
    }


    @ApiOperation(value = "发布", httpMethod = "POST")
    @PostMapping("/push")
    public ResultVO<String> push(Long id, HttpServletRequest request) {
        logger.info("TDataDownloadController:push");
        return this.tDataDownloadService.push(RequestUtil.getUserId(request), id);
    }


    @ApiOperation(value = "置顶", httpMethod = "POST")
    @PostMapping("/top")
    public ResultVO<String> top(Long id, HttpServletRequest request) {
        logger.info("TDataDownloadController:top");
        return this.tDataDownloadService.top(RequestUtil.getUserId(request), id );
    }

    @ApiOperation(value = "更新/添加", httpMethod = "POST")
    @PostMapping("/addAndUpdate")
    public ResultVO<String> addAndUpdate(@RequestBody TDataDownloadVO tNewsVO, HttpServletRequest request) {
        logger.info("TDataDownloadController:addAndUpdate :" + JSONObject.toJSONString(tNewsVO));
        return this.tDataDownloadService.addAndUpdate(tNewsVO, RequestUtil.getUserId(request));
    }

    /**
     * @param ids
     * @param request
     * @return
     */
    @ApiOperation(value = "删除", httpMethod = "POST")
    @PostMapping("/delete")
    public ResultVO<String> delete(@RequestBody Long[] ids, HttpServletRequest request) {
        logger.info("TDataDownloadController:delete " + JSONObject.toJSONString(ids));
        return this.tDataDownloadService.deleteByIDs(Arrays.asList(ids));
    }
}
