package org.poem.suppliertype;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.authVO.ResultVO;
import org.poem.common.CommonVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/supplierType")
@Api(value = "/v1/supplierType", tags = {"09-供应商类型"})
public class SupplierTypeContoller {

    @Autowired
    private SupplierTypeService supplierTypeService;

    /**
     * 获取全部
     * @return
     */
    @ApiOperation(value = "查询", httpMethod = "GET")
    @GetMapping("/getAll")
    public ResultVO<List<CommonVO>> getAll(){
        return new ResultVO<>(this.supplierTypeService.getAll());
    }
}
