package org.poem.suppliertype;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TSupplier;
import org.poem.jooq.tables.TSupplierType;
import org.poem.jooq.tables.records.TSupplierRecord;
import org.poem.jooq.tables.records.TSupplierTypeRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SupplierTypeDao extends BaseDaoImpl<TSupplierTypeRecord, Long> {

    @Autowired
    DSLContext dsl;

    public SupplierTypeDao() {
        super(TSupplierType.T_SUPPLIER_TYPE);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }
}
