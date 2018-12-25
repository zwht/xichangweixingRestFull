package org.poem.equipment;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.RequestUtil;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.user.TUserVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;

/**
 * 装备
 *
 * @author poem
 */
@RestController
@RequestMapping("/v1/equipment")
@Api(value = "/v1/equipment", tags = {"10-装备"})
public class TEquipmentController {

    private static final Logger logger = LoggerFactory.getLogger(TEquipmentController.class);

    @Autowired
    private TEquipmentService tEquipmentService;


    /**
     * @param ids
     * @param request
     * @return
     */
    @ApiOperation(value = "删除", httpMethod = "POST")
    @PostMapping("/delete")
    public ResultVO<String> delete(Long[] ids, HttpServletRequest request) {
        logger.info("TEquipmentController:delete " + JSONObject.toJSONString(ids));
        return this.tEquipmentService.deleteByIDs(Arrays.asList(ids));
    }

    /**
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TEquipmentVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TEquipmentController:getById " + JSONObject.toJSONString(id));
        return this.tEquipmentService.getById(id);
    }


    /**
     * @param tUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "添加或者添加", httpMethod = "POST")
    @PostMapping("/saveOrUpdate")
    public ResultVO<String> saveOrUpdate(@RequestBody TEquipmentVO tUserVO, HttpServletRequest request) {
        logger.info("TEquipmentController: saveOrUpdate");
        logger.info("" + JSONObject.toJSONString(tUserVO));
        Long userId = RequestUtil.getUserId(request);
        return tEquipmentService.saveOrUpdate(tUserVO, userId);
    }


    /**
     * @param tEquipmentQuery
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件查询", httpMethod = "GET")
    @GetMapping("/getAllByQuery")
    public ResultVO<PageVO<TEquipmentVO>> getAllByQuery(TEquipmentQuery tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        logger.info("TEquipmentController:getAllByQuery " + JSONObject.toJSONString(tEquipmentQuery) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tEquipmentService.getAllByQuery(tEquipmentQuery, pageSize, pageNumber));
    }


}
