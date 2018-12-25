package org.poem.qualityDeal;

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
 * 质量处理
 *
 * @author poem
 */
@RestController
@RequestMapping("/v1/qualityDeal")
@Api(value = "/v1/qualityDeal", tags = {"15-质量处理"})
public class TQualityDealController {


    private static final Logger logger = LoggerFactory.getLogger(TQualityDealController.class);
    /**
     *
     */
    @Autowired
    private TQualityDealService tSupplierService;


    /**
     * @param ids
     * @param request
     * @return
     */
    @ApiOperation(value = "删除", httpMethod = "POST")
    @PostMapping("/delete")
    public ResultVO<String> delete(Long[] ids, HttpServletRequest request) {
        logger.info("TQualityDealController:delete " + JSONObject.toJSONString(ids));
        return this.tSupplierService.deleteByIDs(Arrays.asList(ids));
    }

    /**
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TQualityDealVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TQualityDealController:getById " + JSONObject.toJSONString(id));
        return this.tSupplierService.getById(id);
    }


    /**
     * @param tUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "添加或者添加", httpMethod = "POST")
    @PostMapping("/saveOrUpdate")
    public ResultVO<String> saveOrUpdate(@RequestBody TQualityDealVO tUserVO, HttpServletRequest request) {
        logger.info("TQualityDealController: saveOrUpdate");
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
    public ResultVO<PageVO<TQualityDealVO>> getAllByQuery(TQualityDealQueryVO tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        logger.info("TQualityDealController:getAllByQuery " + JSONObject.toJSONString(tEquipmentQuery) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tSupplierService.getAllByQuery(tEquipmentQuery, pageSize, pageNumber));
    }
}
