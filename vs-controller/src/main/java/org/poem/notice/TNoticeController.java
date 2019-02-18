package org.poem.notice;

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
import java.util.List;

/**
 * 质量公告
 * @author poem
 */
@RestController
@RequestMapping("/v1/notice")
@Api(value = "/v1/notice",tags = {"36-通知公告"})
public class TNoticeController {


    private static final Logger logger = LoggerFactory.getLogger(TNoticeController.class);
    /**
     *
     */
    @Autowired
    private TNoticeService tSupplierService;


    /**
     * 获取全部
     * @return
     */
    @ApiOperation(value = "select-查询", httpMethod = "GET")
    @GetMapping("/getAll")
    public ResultVO<List<TNoticeVO>> getAll(){
        return new ResultVO<>(this.tSupplierService.getAll());
    }



    /**
     * @param ids
     * @param request
     * @return
     */
    @ApiOperation(value = "删除", httpMethod = "POST")
    @PostMapping("/delete")
    public ResultVO<String> delete(Long[] ids, HttpServletRequest request) {
        logger.info("TNoticeController:delete " + JSONObject.toJSONString(ids));
        return this.tSupplierService.deleteByIDs(Arrays.asList(ids));
    }

    /**
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TNoticeVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TNoticeController:getById " + JSONObject.toJSONString(id));
        return this.tSupplierService.getById(id,false);
    }


    /**
     * @param tUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "添加或者添加", httpMethod = "POST")
    @PostMapping("/saveOrUpdate")
    public ResultVO<String> saveOrUpdate(@RequestBody TNoticeVO tUserVO, HttpServletRequest request) {
        logger.info("TNoticeController: saveOrUpdate");
        logger.info("" + JSONObject.toJSONString(tUserVO));
        Long userId = RequestUtil.getUserId(request);
        return tSupplierService.saveOrUpdate(tUserVO, userId);
    }


    /**
     * @param tEquipmentQuery
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件查询", httpMethod = "GET")
    @GetMapping("/getAllByQuery")
    public ResultVO<PageVO<TNoticeVO>> getAllByQuery(TNoticeQueryVO tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        logger.info("TNoticeController:getAllByQuery " + JSONObject.toJSONString(tEquipmentQuery) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tSupplierService.getAllByQuery(tEquipmentQuery, pageSize, pageNumber));
    }


    /**
     * 置顶
     * @param id
     * @param request
     * @return
     */
    @ApiOperation(value = "置顶", httpMethod = "POST")
    @PostMapping("/top")
    public ResultVO<String> top(Long id, HttpServletRequest request) {
        logger.info("TNoticeController:top");
        return this.tSupplierService.top(id, RequestUtil.getUserId(request));
    }

    /**
     * 发布
     * @param id
     * @param request
     * @return
     */
    @ApiOperation(value = "发布", httpMethod = "POST")
    @PostMapping("/push")
    public ResultVO<String> push(Long id, HttpServletRequest request) {
        logger.info("TNoticeController:push");
        return this.tSupplierService.push(id, RequestUtil.getUserId(request));
    }

    /**
     * 下线
     * @param id
     * @param request
     * @return
     */
    @ApiOperation(value = "下线", httpMethod = "POST")
    @PostMapping("/line")
    public ResultVO<String> line(Long id, HttpServletRequest request) {
        logger.info("TNoticeController:line");
        return this.tSupplierService.line(id, RequestUtil.getUserId(request));
    }
}
