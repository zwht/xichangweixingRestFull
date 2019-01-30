package org.poem.division;

import org.jooq.Condition;
import org.jooq.Record;
import org.jooq.Result;
import org.jooq.SortField;
import org.poem.VoReTraversalUtil;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.jooq.tables.records.TDivisionRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static org.poem.jooq.tables.TDivision.T_DIVISION;


/**
 *  @author         jamie  
 *  @version        V1.0   
 *  @date           2018/6/19 10:45  
 */
@Service
public class DivisionService {

    @Autowired
    private DivisionDao divisionDao;


    /**
     * 获取所有行政区划列表
     *
     * @return
     */
    
    public ResultVO<List<DivisionListVo>> all() {
        Result<TDivisionRecord> all = divisionDao.all();
        ResultVO<List<DivisionListVo>> divisionRecordResultVo = new ResultVO<>();
        List<DivisionListVo> divisionListVos = new ArrayList<>();
        DivisionListVo divisionListVo = null;
        for(TDivisionRecord record:all){
            divisionListVo = VoReTraversalUtil.traversal(record, DivisionListVo.class);
            divisionListVos.add(divisionListVo);
        }
        divisionRecordResultVo.setData(divisionListVos);

        return divisionRecordResultVo;
    }




    /**
     * 分页查询行政区划
     *
     * @param queryVo
     * @param page
     * @param size
     * @return
     */
    
    public ResultVO<PageVO<DivisionListVo>> fetchPage(DivisionQueryVo queryVo, int page, int size) {
        List<Condition> conditions = new ArrayList<>();
        Long parentId = queryVo.getParentId();
        if(parentId != null){
            conditions.add(T_DIVISION.PARENT_ID.eq(parentId));
        }

        List<SortField<?>> sortList = new ArrayList<>();
        PageVO<TDivisionRecord> query = divisionDao.fetchByPage(conditions, new OffsetPagingVO(page, size), sortList);
        List<TDivisionRecord> records = query.getPageData();
        List<DivisionListVo> listVos = new ArrayList<>();
        DivisionListVo divisionListVo = null;
        for(Record record:records){
            divisionListVo = VoReTraversalUtil.traversal(record,DivisionListVo.class);
            listVos.add(divisionListVo);
        }
        PageVO<DivisionListVo> result = new PageVO<>();
        result.setPageData(listVos);
        result.setTotalCount(query.getTotalCount());
        return new ResultVO(0, result,"SUCCESS");
    }
}
