package org.poem.subject;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.authVO.ResultVO;
import org.poem.common.CommonVO;
import org.poem.config.annotation.ShiroOauthodIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 学科
 *
 * @author poem
 */
@RestController
@ShiroOauthodIgnore
@RequestMapping("/v1/subject")
@Api(value = "/v1/subject", tags = {"29-学科"})
public class TSubjectController {


    @Autowired
    private TSubjectService tSubjectService;


    /**
     * 获取全部
     *
     * @return
     */
    @ApiOperation(value = "查询", httpMethod = "GET")
    @GetMapping("/getAll")
    public ResultVO<List<CommonVO>> getAll() {
        return new ResultVO<>(this.tSubjectService.getAll());
    }
}
