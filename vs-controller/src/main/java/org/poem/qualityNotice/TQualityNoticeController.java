package org.poem.qualityNotice;

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
@RequestMapping("/v1/qualityNotice")
@Api(value = "/v1/qualityNotice",tags = {"13-质量公告"})
public class TQualityNoticeController {


    private static final Logger logger = LoggerFactory.getLogger(TQualityNoticeController.class);
    /**
     *
     */
    @Autowired
    private TQualityNoticeService tSupplierService;


    /**
     * 获取全部
     * @return
     */
    @ApiOperation(value = "select-查询", httpMethod = "GET")
    @GetMapping("/getAll")
    public ResultVO<List<TQualityNoticeVO>> getAll(){
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
        logger.info("TQualityNoticeController:delete " + JSONObject.toJSONString(ids));
        return this.tSupplierService.deleteByIDs(Arrays.asList(ids));
    }

    /**
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TQualityNoticeVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TQualityNoticeController:getById " + JSONObject.toJSONString(id));
        return this.tSupplierService.getById(id);
    }


    /**
     * @param tUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "添加或者添加", httpMethod = "POST")
    @PostMapping("/saveOrUpdate")
    public ResultVO<String> saveOrUpdate(@RequestBody TQualityNoticeVO tUserVO, HttpServletRequest request) {
        logger.info("TQualityNoticeController: saveOrUpdate");
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
    public ResultVO<PageVO<TQualityNoticeVO>> getAllByQuery(TQualityNoticeQueryVO tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        logger.info("TQualityNoticeController:getAllByQuery " + JSONObject.toJSONString(tEquipmentQuery) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
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
        logger.info("TQualityNoticeController:top");
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
        logger.info("TQualityNoticeController:push");
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
        logger.info("TQualityNoticeController:line");
        return this.tSupplierService.line(id, RequestUtil.getUserId(request));
    }
}
