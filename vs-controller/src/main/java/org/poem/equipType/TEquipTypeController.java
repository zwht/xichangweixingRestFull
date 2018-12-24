package org.poem.equipType;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.authVO.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 设备类型
 * @author poem
 */
@RestController
@RequestMapping("/v1/equipType")
@Api(value = "/v1/equipType",tags = {"08-设备类型"})
public class TEquipTypeController {


    @Autowired
    private TEquipTypeService tEquipTypeService;


    /**
     * 获取全部
     * @return
     */
    @ApiOperation(value = "查询", httpMethod = "GET")
    @GetMapping("/getAll")
    public ResultVO<List<TEquipTypeVO>> getAll(){
        return new ResultVO<>(this.tEquipTypeService.getAll());
    }


}
