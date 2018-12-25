package org.poem.depart;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.authVO.ResultVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 部门
 *
 * @author poem
 */
@RestController
@RequestMapping("/v1/depart")
@Api(value = "/v1/depart", tags = {"05-部门"})
public class TDepartController {

    private static final Logger logger = LoggerFactory.getLogger(TDepartController.class);

    @Autowired
    private TDepartService tDepartService;


    /**
     * @return
     */
    @ApiOperation(value = "05-01-查询", httpMethod = "GET")
    @GetMapping("/getAllDepat")
    public ResultVO<List<TDepartVO>> getAllDepat() {
        return new ResultVO<>(this.tDepartService.getAllDepat());
    }

}
