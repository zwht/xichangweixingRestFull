package org.poem.division;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.config.annotation.ShiroOauthodIgnore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author poem
 */
@ShiroOauthodIgnore
@RestController
@RequestMapping("/v1/division")
@Api(value = "/v1/division", tags= "33-行政区划")
public class DivisionController {

    private static final Logger logger = LoggerFactory.getLogger(DivisionController.class);

    @Autowired
    private DivisionService divisionService;

    @GetMapping("/all")
    @ApiOperation(value = "获取所有行政区划", notes = "all", httpMethod = "GET")
    public ResultVO<List<DivisionListVo>> all(){
        return divisionService.all();
    }


    @PostMapping("/queryPage/{page}/{size}")
    @ApiOperation(value = "分页查询行政区划", notes = "查询", httpMethod = "POST")
    public ResultVO<PageVO<DivisionListVo>> queryPage(
            @PathVariable("page") int page,
            @PathVariable("size") int size,
            @RequestBody DivisionQueryVo divisionQueryVo){
        return divisionService.fetchPage(divisionQueryVo,page,size);
    }

}
