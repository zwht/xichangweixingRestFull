package org.poem.industry;

import com.google.common.collect.Lists;
import org.poem.common.CommonVO;
import org.poem.jooq.tables.TIndustry;
import org.poem.jooq.tables.records.TIndustryRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 行业
 * @author poem
 */
@Service
public class TIndustryService {


    @Autowired
    private TIndustryDao industryDao;

    /**
     * 获取数据
     * @return
     */
    public List<CommonVO> getAll(){
        List<TIndustryRecord> tIndustryRecords = this.industryDao.findByCondition(TIndustry.T_INDUSTRY.ID.isNotNull());
        return  tIndustryRecords.stream().map(s->{
            return new CommonVO(s.getId(), s.getName());
        }).collect(Collectors.toList());
    }

}
