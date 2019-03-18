package org.poem.qualityEvent;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.RequestUtil;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.qualityNotice.TQualityNoticeQueryVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;

/**
 * 质量事件
 * @author poem
 */
@RestController
@RequestMapping("/v1/qualityEvent")
@Api(value = "/v1/qualityEvent",tags = {"14-质量事件"})
public class TQualityEventController {

    private static final Logger logger = LoggerFactory.getLogger(TQualityEventController.class);
    /**
     *
     */
    @Autowired
    private TQualityEventService tSupplierService;
    


    /**
     * @param ids
     * @param request
     * @return
     */
    @ApiOperation(value = "删除", httpMethod = "POST")
    @PostMapping("/delete")
    public ResultVO<String> delete(Long[] ids, HttpServletRequest request) {
        logger.info("TQualityEventController:delete " + JSONObject.toJSONString(ids));
        return this.tSupplierService.deleteByIDs(Arrays.asList(ids));
    }

    /**
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TQualityEventVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TQualityEventController:getById " + JSONObject.toJSONString(id));
        return this.tSupplierService.getById(id);
    }


    /**
     * @param tUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "添加或者添加", httpMethod = "POST")
    @PostMapping("/saveOrUpdate")
    public ResultVO<String> saveOrUpdate(@RequestBody TQualityEventVO tUserVO, HttpServletRequest request) {
        logger.info("TQualityEventController: saveOrUpdate");
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
    public ResultVO<PageVO<TQualityEventVO>> getAllByQuery(TQualityEventQueryVO tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        logger.info("TQualityEventController:getAllByQuery " + JSONObject.toJSONString(tEquipmentQuery) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tSupplierService.getAllByQuery(tEquipmentQuery, pageSize, pageNumber));
    }

    /**
     * 修改处理状态
     * @param id
     * @param request
     * @return
     */
    @ApiOperation(value = "设置处理状态", httpMethod = "POST")
    @PostMapping("/hdSet")
    public ResultVO<String> hdSet(Long id, String key, HttpServletRequest request) {
        logger.info("TQualityDealController:top");
        return this.tSupplierService.hdSet(id, RequestUtil.getUserId(request), key);
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
        logger.info("TQualityEventController:top");
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
        logger.info("TQualityEventController:push");
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
        logger.info("TQualityEventController:line");
        return this.tSupplierService.line(id, RequestUtil.getUserId(request));
    }
}
