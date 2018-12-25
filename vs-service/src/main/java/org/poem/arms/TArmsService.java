package org.poem.arms;

import com.google.common.collect.Lists;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.common.IDService;
import org.poem.jooq.tables.TArms;
import org.poem.jooq.tables.records.TArmsRecord;
import org.poem.jooq.tables.records.TUserRecord;
import org.poem.user.UserDao;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

/**
 * 强军管理
 *
 * @author poem
 */
@Service
public class TArmsService {

    @Autowired
    private TArmsDao tArmsDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private UserDao userDao;

    /**
     * 添加或者删除
     *
     * @param tArmsVO
     * @param userId
     * @return
     */
    public ResultVO<String> saveOrUpdate(TArmsVO tArmsVO, Long userId) {
        TArmsRecord tArmsRecord = null;
        boolean save = false;
        if (StringUtils.isNotEmpty(tArmsVO.getId())) {
            tArmsRecord = this.tArmsDao.findById(Long.valueOf(tArmsVO.getId()));
        }
        if (tArmsRecord == null) {
            tArmsRecord = new TArmsRecord();
            tArmsRecord.setId(idService.getId());
            tArmsRecord.setCreateTime(new Timestamp(System.currentTimeMillis()));
            tArmsRecord.setCreateUser(userId);
            tArmsRecord.setFlag(false);
            tArmsRecord.setStatus(1);
            save = true;
        }
        tArmsRecord.setTitle(tArmsVO.getTitle());
        tArmsRecord.setAttachment(Long.valueOf(tArmsVO.getAttachment()));
        tArmsRecord.setContent(tArmsVO.getContent());
        if (save) {
            this.tArmsDao.insert(tArmsRecord);
        } else {
            this.tArmsDao.update(tArmsRecord);
        }
        return new ResultVO<>("完成");
    }

    /**
     * 查询
     *
     * @param pagesize
     * @param pageNumber
     * @return
     */
    public PageVO<TArmsVO> getArms(Integer pagesize, Integer pageNumber) {
        List<SortField<?>> list = Lists.newArrayList();
        list.add(TArms.T_ARMS.FLAG.desc());
        list.add(TArms.T_ARMS.UPDATE_TIME.desc());
        PageVO<TArmsRecord> tArmsRecordPageVO = this.tArmsDao.fetchByPage(Lists.newArrayList(), new OffsetPagingVO(pageNumber, pagesize), list);
        PageVO<TArmsVO> tArmsVOPageVO = new PageVO<>();
        tArmsVOPageVO.setTotalCount(tArmsRecordPageVO.getTotalCount());
        List<TArmsVO> tArmsVOS = Lists.newArrayList();
        for (TArmsRecord pageDatum : tArmsRecordPageVO.getPageData()) {
            TArmsVO tArmsVO = new TArmsVO();
            tArmsVO.setId(String.valueOf(pageDatum.getId()));
            tArmsVO.setTitle(pageDatum.getTitle());
            tArmsVO.setContent(pageDatum.getContent());
            tArmsVO.setAttachment(String.valueOf(pageDatum.getAttachment()));
            tArmsVO.setReadCount(String.valueOf(pageDatum.getReadCount()));
            tArmsVO.setStatus(String.valueOf(pageDatum.getStatus()));
            tArmsVO.setCreateTime(DateUtils.format(pageDatum.getCreateTime()));
            tArmsVO.setUpdateTime(DateUtils.format(pageDatum.getUpdateTime()));
            TUserRecord tUserRecord = this.userDao.findById(pageDatum.getUpdateUser());
            tArmsVO.setUpdateUser(tUserRecord.getName());
            tArmsVOS.add(tArmsVO);
        }
        tArmsVOPageVO.setPageData(tArmsVOS);
        return tArmsVOPageVO;
    }

    /**
     * 置顶
     *
     * @param id
     * @param userId
     * @return
     */
    public ResultVO<String> top(Long id, Long userId) {
        TArmsRecord record = this.tArmsDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setFlag(true);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        return new ResultVO<>("操作完成");
    }

    /**
     * 发布
     *
     * @param id
     * @param userId
     * @return
     */
    public ResultVO<String> push(Long id, Long userId) {
        TArmsRecord record = this.tArmsDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setStatus(1);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        return new ResultVO<>("操作完成");
    }

    /**
     * 下线
     *
     * @param id
     * @param userId
     * @return
     */
    public ResultVO<String> line(Long id, Long userId) {
        TArmsRecord record = this.tArmsDao.findById(id);
        if (record == null) {
            return new ResultVO<>(-1, "没有记录");
        }
        record.setStatus(0);
        record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        record.setUpdateUser(userId);
        return new ResultVO<>("操作完成");
    }

    /**
     * 删除
     *
     * @param ids
     * @return
     */
    public ResultVO<String> delete(List<Long> ids) {
        this.tArmsDao.deleteById(ids);
        return new ResultVO<>("操作完成");
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public ResultVO<TArmsVO> getById(Long id , boolean add) {
        TArmsRecord pageDatum = this.tArmsDao.findById(id);
        if (pageDatum == null) {
            return new ResultVO<>(-1, null, "没有记录");
        }
        TArmsVO tArmsVO = new TArmsVO();
        tArmsVO.setId(String.valueOf(pageDatum.getId()));
        tArmsVO.setTitle(pageDatum.getTitle());
        tArmsVO.setContent(pageDatum.getContent());
        tArmsVO.setAttachment(String.valueOf(pageDatum.getAttachment()));
        tArmsVO.setReadCount(String.valueOf(pageDatum.getReadCount()));
        tArmsVO.setStatus(String.valueOf(pageDatum.getStatus()));
        tArmsVO.setCreateTime(DateUtils.format(pageDatum.getCreateTime()));
        tArmsVO.setUpdateTime(DateUtils.format(pageDatum.getUpdateTime()));
        TUserRecord tUserRecord = this.userDao.findById(pageDatum.getUpdateUser());
        tArmsVO.setUpdateUser(tUserRecord.getName());
        if (add){
            pageDatum.setReadCount(pageDatum.getReadCount() == null ? 1:pageDatum.getReadCount()+1);
            this.tArmsDao.update(pageDatum);
        }
        return new ResultVO<>(tArmsVO);
    }
}
