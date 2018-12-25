package org.poem.suppliertype;

import org.poem.common.CommonVO;
import org.poem.jooq.tables.TSupplierType;
import org.poem.jooq.tables.records.TSupplierRecord;
import org.poem.jooq.tables.records.TSupplierTypeRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * t_supplier_type
 *
 * @author poem
 */
@Service
public class SupplierTypeService {


    @Autowired
    private SupplierTypeDao supplierTypeDao;

    /**
     * @return
     */
    public List<CommonVO> getAll() {
        List<TSupplierTypeRecord> records = this.supplierTypeDao.findByCondition(TSupplierType.T_SUPPLIER_TYPE.ID
                .isNotNull());
        return records.stream().map(r -> {
            return new CommonVO(r.getId(), r.getName());
        }).collect(Collectors.toList());
    }
}
