package org.poem.sms;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.SmsUtil;
import org.poem.authVO.ResultVO;
import org.poem.constant.ErrorCode;
import org.poem.sme.MessageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/v1/sms")
@Api(value = "/v1/sms", tags = {"26-短信"})
public class SmsController {

    private static final Logger logger = LoggerFactory.getLogger(SmsController.class);

    @Autowired
    private SmsUtil smsUtil;

    @Autowired
    private MessageService messageService;


    /**
     *
     * @param phone
     * @return
     */
    @PostMapping("/getCode")
    @ApiOperation(value = "发送短信验证码", notes = "发送短信验证码", httpMethod = "POST")
    public ResultVO<String> getCode(@RequestParam("phone") String phone){
        logger.info("getCode :"+ phone);
        String code = String.valueOf((int) (Math.random() * 9000 + 1000));
        try {
            smsUtil.sendCode(phone,code);
            messageService.saveCode(phone,code);
            return new ResultVO<>();
        }catch (Exception e){
            e.printStackTrace();
            return new ResultVO<>(ErrorCode.UnknownError.getErrorCode(),e.getMessage());
        }
    }

}
