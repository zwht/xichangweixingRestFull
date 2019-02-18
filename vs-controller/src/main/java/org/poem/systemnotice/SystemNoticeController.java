package org.poem.systemnotice;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.RequestUtil;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.roomReservation.TRoomReservationQueryVO;
import org.poem.roomReservation.TRoomReservationService;
import org.poem.roomReservation.TRoomReservationVO;
import org.poem.systemnotice.vo.SystemNoticeVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;


/**
 * 系统消息
 *
 * @author poem
 */
@RestController
@RequestMapping("/v1/systemnotice")
@Api(value = "/v1/systemnotice", tags = {"35-系统消息"})
public class SystemNoticeController {


    private static final Logger logger = LoggerFactory.getLogger(SystemNoticeController.class);
    /**
     *
     */
    @Autowired
    private SystemNoticeService systemNoticeService;


    /**
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<SystemNoticeVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("SystemNoticeController:getById " + JSONObject.toJSONString(id));
        return new ResultVO<>(this.systemNoticeService.getById(id));
    }


    /**
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件查询", httpMethod = "GET")
    @GetMapping("/getAllByQuery")
    public ResultVO<PageVO<SystemNoticeVO>> getAllByQuery(Integer pageSize, Integer pageNumber) {
        logger.info("SystemNoticeController:getAllByQuery " + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.systemNoticeService.getPage(pageSize, pageNumber));
    }
}
