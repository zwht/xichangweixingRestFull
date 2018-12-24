package org.poem.industry;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.authVO.ResultVO;
import org.poem.common.CommonVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 行业
 * @author poem
 */
@RestController
@RequestMapping("/v1/industry")
@Api(value = "/v1/industry",tags = {"20-行业"})
public class TIndustryController {

    @Autowired
    private TIndustryService tIndustryService;


    @ApiOperation(value = "查询", httpMethod = "GET")
    @GetMapping("/getAll")
    private ResultVO<List<CommonVO>> getAll(){
        return new ResultVO<>(this.tIndustryService.getAll());

    }
}
