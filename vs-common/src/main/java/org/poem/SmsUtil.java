package org.poem;

import com.github.qcloudsms.SmsSingleSender;
import com.github.qcloudsms.SmsSingleSenderResult;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;


@Component
public class SmsUtil {

    @Value("${sms.appid}")
    private String appid;
    @Value("${sms.appkey}")
    private String appkey;

    @Value("${sms.codeTemplateid}")
    private String templateId;
    @Value("${sms.smsSign}")
    private String smsSign;

    @Value("${sms.replayReportTemplateid}")
    private String replayReportTemplateid;
    @Value("${sms.addReportTemplateid}")
    //添加举报
    private String addReportTemplateid;

    /**
     * 发送验证码
     * @param phone
     * @param context
     * @throws Exception
     */
    public void sendCode(String phone,String context) throws Exception {
        String[] params = {context};
        send(phone,params,Integer.valueOf(templateId));
    }

    /**
     * 举报回复通知
     * @param phone
     * @throws Exception
     */
    public void sendReplayReport(String phone,String title,String code) throws Exception {
        String date = DateUtils.format(new Date(), "yyyy年MM月dd日");
        String[] params = {date,title,code};
        //数组具体的元素个数和模板中变量个数必须一致，例如事例中templateId:5678对应一个变量，参数数组中元素个数也必须是一个
        send(phone,params,Integer.valueOf(replayReportTemplateid));
    }

    /**
     * 添加举报
     * @param phone
     * @throws Exception
     */
    public void sendReport(String phone,String title,String code) throws Exception {
        String[] params = {title,code};
        //数组具体的元素个数和模板中变量个数必须一致，例如事例中templateId:5678对应一个变量，参数数组中元素个数也必须是一个
        send(phone,params,Integer.valueOf(addReportTemplateid));
    }

    public void send(String phone,String[] params,Integer templateId) throws Exception {
        SmsSingleSender ssender = new SmsSingleSender(Integer.valueOf(appid), appkey);
        // 签名参数未提供或者为空时，会使用默认签名发送短信
        SmsSingleSenderResult result = ssender.sendWithParam("86", phone, templateId, params, smsSign, "", "");
        System.out.println(result);
        if(result.result != 0){
            throw new Exception("发送失败 ："+result.errMsg);
        }
    }
}
