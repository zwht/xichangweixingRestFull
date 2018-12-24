package org.poem.user;


import com.google.common.collect.Maps;
import org.jooq.*;
import org.poem.base.BaseDaoImpl;
import org.poem.constant.RecordStatus;
import org.poem.jooq.tables.TUser;
import org.poem.jooq.tables.records.TUserRecord;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.*;

import static org.poem.jooq.Tables.T_ROLE;
import static org.poem.jooq.Tables.T_USER;


/**
 *  @author         jamie  
 *  @version        V1.0   
 *  @date           2018/3/12 14:16  
 */

@Repository
public class UserDao extends BaseDaoImpl<TUserRecord, Long> {

    @Autowired
    DSLContext dsl;

    public UserDao() {
        super(T_USER);
    }

    @Override
    public Configuration getConfiguration() {
        return dsl.configuration();
    }


    public void updateStatus(Long id, Integer status) {
        dsl.update(T_USER).set(T_USER.STATUS, status)
                .where(T_USER.ID.eq(id)).execute();
    }

    public void updateState(Long id, Integer state) {
        dsl.update(T_USER)
                .set(T_USER.STATUS, state)
                .set(T_USER.UPDATE_TIME, new Timestamp(System.currentTimeMillis()))
                .where(T_USER.ID.eq(id)).execute();
    }


    public Result<TUserRecord> findUser(String userAccount) {
        return dsl.selectFrom(T_USER)
                .where(T_USER.LOGIN_NAME.eq(userAccount)
//                        .or(T_USER.MOBILE.eq(userAccount))
//                        .or(T_USER.NAME.eq(userAccount))
                )
                .fetch();
    }

    public Result<TUserRecord> findByName(String name) {
        return dsl.selectFrom(T_USER).where(T_USER.NAME.eq(name)).fetch();
    }

    /**
     * @param userAccount
     * @return
     */
    public TUserRecord findByUserAccount(String userAccount) {
        return dsl.selectFrom(T_USER).where(T_USER.LOGIN_NAME.eq(userAccount), T_USER.STATUS.eq(RecordStatus.Effective.getStatus())).fetchAny();
    }

    public PageVO<Record> findByPage(List<Condition> conditions, OffsetPagingVO offsetPagingVo, Collection<SortField<?>> sortFields) {
        PageVO<Record> PageVO = new PageVO<>();
        ArrayList<Record> arrayList = new ArrayList<>(Arrays.asList(dsl.select().from(T_USER)
                .leftJoin(T_ROLE).on(T_USER.ROLE_ID.eq(T_ROLE.ID))
                .where(conditions)
                .orderBy(sortFields)
                .limit(offsetPagingVo.getOffset(), offsetPagingVo.getSize())
                .fetchArray()));
        PageVO.setPageData(arrayList);
        Integer total = dsl.selectCount().from(T_USER)
                .leftJoin(T_ROLE).on(T_USER.ROLE_ID.eq(T_ROLE.ID))
                .where(conditions).fetchAny().value1();
        PageVO.setTotalCount(total);
        return PageVO;
    }


    public List<Long> findByIdsByAccount(String account) {
        return dsl.select(T_USER.ID).from(T_USER)
                .where(T_USER.NAME.like("%" + account + "%").or(T_USER.LOGIN_NAME.like("%" + account + "%")))
                .fetch(T_USER.ID);
    }

    public Map<Long, String> getUseRMap(){
        Map<Long , String> map = Maps.newHashMap();
        List<TUserRecord> records = this.findByCondition(TUser.T_USER.ID.isNotNull());
        for (TUserRecord record : records) {
            map.put(record.getId(),record.getName());
        }
        return map;
    }
}