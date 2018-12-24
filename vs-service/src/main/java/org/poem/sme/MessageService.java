package org.poem.sme;

import com.google.common.collect.Lists;
import org.apache.commons.collections.CollectionUtils;
import org.jooq.Condition;
import org.jooq.SortField;
import org.poem.StringUtils;
import org.poem.authVO.ResultVO;
import org.poem.common.IDService;
import org.poem.jooq.tables.TMessage;
import org.poem.jooq.tables.records.TMessageRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageDao messageDao;

    @Autowired
    private IDService<Long> idService;

    /**
     * 保存
     *
     * @param phone
     * @param code
     * @return
     */
    public ResultVO<String> saveCode(String phone, String code) {
        TMessageRecord record = new TMessageRecord();
        record.setId(idService.getId());
        record.setPhone(phone);
        record.setCode(code);
        record.setStatus(0);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setCreateTime(new Timestamp(System.currentTimeMillis()));
        this.messageDao.insert(record);
        return new ResultVO<>("");
    }

    /**
     * 验证
     *
     * @param phone
     * @param code
     * @return
     */
    public ResultVO<String> validate(String phone, String code) {
        if (StringUtils.isEmpty(phone) || StringUtils.isEmpty(code)) {
            return new ResultVO<>(-1, "参数不对。");
        }
        List<Condition> conditions = Lists.newArrayList();
        conditions.add(TMessage.T_MESSAGE.PHONE.eq(phone));
        List<SortField<?>> sortFields = Lists.newArrayList();
        sortFields.add(TMessage.T_MESSAGE.CREATE_TIME.desc());

        List<TMessageRecord> records = this.messageDao.findByConditions(conditions, sortFields);
        if (CollectionUtils.isEmpty(records)) {
            return new ResultVO<>(-1, "没有记录");
        }
        TMessageRecord record = records.get(0);
        if (record.getStatus() == 1) {
            return new ResultVO<>(-1, "请重新获取验证码");
        }
        if (!code.equals(record.getCode())) {
            return new ResultVO<>(-1, "验证码不正确");
        }
        record.setStatus(1);
        this.messageDao.update(record);
        return new ResultVO<>("");
    }
}
