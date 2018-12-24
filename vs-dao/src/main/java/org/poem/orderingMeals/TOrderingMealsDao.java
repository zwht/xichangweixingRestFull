package org.poem.orderingMeals;

import org.jooq.Configuration;
import org.jooq.DSLContext;
import org.poem.base.BaseDaoImpl;
import org.poem.jooq.tables.TOrderingMeals;
import org.poem.jooq.tables.records.TOrderingMealsRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TOrderingMealsDao extends BaseDaoImpl<TOrderingMealsRecord, Long> {

    @Autowired
    DSLContext dsl;

    public TOrderingMealsDao() {
        super(TOrderingMeals.T_ORDERING_MEALS);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }

}