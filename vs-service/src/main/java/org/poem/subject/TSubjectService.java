package org.poem.subject;

import org.apache.shiro.mgt.SubjectDAO;
import org.poem.common.CommonVO;
import org.poem.jooq.tables.TSubject;
import org.poem.jooq.tables.records.TSubjectRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 学科
 *
 * @author poem
 */
@Service
public class TSubjectService {


    @Autowired
    private TSubjectDao subjectDAO;

    /**
     * @return
     */
    public List<CommonVO> getAll() {
        List<TSubjectRecord> records = this.subjectDAO.findByCondition(TSubject.T_SUBJECT.ID.isNotNull());
        return records.stream().map(r -> {
            return new CommonVO(r.getId(), r.getName());
        }).collect(Collectors.toList());
    }
}
