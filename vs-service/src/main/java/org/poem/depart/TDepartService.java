package org.poem.depart;

import com.google.common.collect.Lists;
import org.poem.DateUtils;
import org.poem.jooq.tables.TDepart;
import org.poem.jooq.tables.records.TDepartRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 部门
 * @author poem
 */
@Service
public class TDepartService {

    @Autowired
    private TDepartDao tDepartDao;
    /**
     * 查询所欧
     * @return
     */
    public List<TDepartVO> getAllDepat(){

        List<TDepartRecord> records = this.tDepartDao.findByCondition(TDepart.T_DEPART.ID.isNotNull());
        List<TDepartVO> tDepartVOS = Lists.newArrayList();
        for (TDepartRecord record : records) {
            TDepartVO tDepartVO = new TDepartVO();
            tDepartVO.setId(String.valueOf( record.getId()));
            tDepartVO.setName(record.getName());
            tDepartVO.setCreateTime(DateUtils.format(record.getCreateTime()));
            tDepartVO.setUpdateTime(DateUtils.format(record.getUpdateTime()));
            tDepartVO.setFlag(String.valueOf(record.getFlag()));
            tDepartVO.setStatus(String.valueOf(record.getStatus()));
            tDepartVOS.add(tDepartVO);
        }
        return  tDepartVOS;
    }

}
