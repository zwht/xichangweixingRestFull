package org.poem.news;

import com.google.common.collect.Lists;
import org.jooq.Condition;
import org.jooq.Result;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.StringUtils;
import org.poem.common.IDService;
import org.poem.file.FileService;
import org.poem.file.TFileVO;
import org.poem.jooq.tables.TNews;
import org.poem.jooq.tables.TNewsAttachment;
import org.poem.jooq.tables.records.TNewsAttachmentRecord;
import org.poem.jooq.tables.records.TNewsRecord;
import org.poem.jooq.tables.records.TUserRecord;
import org.poem.user.UserDao;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 新闻
 *
 * @author poem
 */
@Service
public class TNewsService {


    @Autowired
    private NewsDao newsDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private UserDao userDao;

    @Autowired
    private NewsAttachmentDao newsAttachmentDao;

    @Autowired
    private FileService fileService;


    /**
     * 查询
     *
     * @param tNewQueryVO
     * @param pageNumber
     * @param pageSize
     * @return
     */
    public PageVO<TNewsVO> getAll(TNewQueryVO tNewQueryVO, Integer pageNumber, Integer pageSize) {
        List<Condition> conditions = Lists.newArrayList();
        if (StringUtils.isNotEmpty(tNewQueryVO.getName())) {
            conditions.add(TNews.T_NEWS.TITLE.like("%" + tNewQueryVO.getName() + "%"));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getStatus())) {
            conditions.add(TNews.T_NEWS.STATUS.eq(Integer.valueOf(tNewQueryVO.getStatus())));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getStartTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tNewQueryVO.getStartTime() + " 00:00:00");
            conditions.add(TNews.T_NEWS.UPDATE_TIME.greaterOrEqual(timestamp));
        }
        if (StringUtils.isNotEmpty(tNewQueryVO.getEndTime())) {
            Timestamp timestamp = DateUtils.formatTimestampDateTime(tNewQueryVO.getEndTime() + " 23:59:59");
            conditions.add(TNews.T_NEWS.UPDATE_TIME.lessOrEqual(timestamp));
        }
        List<SortField<?>> fields = Lists.newArrayList();
        fields.add(TNews.T_NEWS.FLAG.desc());
        fields.add(TNews.T_NEWS.CREATE_TIME.desc());
        PageVO<TNewsRecord> tNewsRecordPageVO = this.newsDao.fetchByPage(conditions, new OffsetPagingVO(pageNumber, pageSize), fields);
        PageVO<TNewsVO> tNewsVOPageVO = new PageVO<>();
        tNewsVOPageVO.setTotalCount(tNewsRecordPageVO.getTotalCount());
        List<TNewsVO> tNewsVOS = tNewsRecordPageVO.getPageData().stream().map(s -> {
            TNewsVO tNewsVO = new TNewsVO();
            tNewsVO.setId(String.valueOf(s.getId()));
            tNewsVO.setTitle(s.getTitle());
            tNewsVO.setAbstracts(s.getAbstract());
            tNewsVO.setFace(String.valueOf(s.getFace()));
            tNewsVO.setContent(s.getContent());
            tNewsVO.setReadCount(String.valueOf(s.getReadCount()));
            tNewsVO.setStatus(String.valueOf(s.getStatus()));
            tNewsVO.setUpdateTime(DateUtils.format(s.getUpdateTime(), "yyyy-MM-dd hh:mm:ss"));
            TUserRecord tUserRecord = this.userDao.findById(s.getUpdateUser());
            tNewsVO.setUpdateUser(tUserRecord  == null ? "" : tUserRecord.getName());
            return tNewsVO;
        }).collect(Collectors.toList());
        tNewsVOPageVO.setPageData(tNewsVOS);
        return tNewsVOPageVO;

    }

    /**
     * 获取文件附件
     *
     * @param newID
     * @return
     */
    private List<TFileVO> getFiles(Long newID) {
        List<TNewsAttachmentRecord> records = this.newsAttachmentDao.findByCondition(TNewsAttachment.T_NEWS_ATTACHMENT.NEW_ID.eq(newID));
        List<Long> ids = records.stream().map(s -> s.getId()).collect(Collectors.toList());
        return fileService.getByIds(ids);
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public TNewsVO getById(Long id, boolean add) {
        TNewsRecord s = this.newsDao.findById(id);
        TNewsVO tNewsVO = new TNewsVO();
        if (s != null) {
            tNewsVO.setId(String.valueOf(s.getId()));
            tNewsVO.setTitle(s.getTitle());
            tNewsVO.setAbstracts(s.getAbstract());
            tNewsVO.setFace(String.valueOf(s.getFace()));
            tNewsVO.setContent(s.getContent());
            tNewsVO.setReadCount(String.valueOf(s.getReadCount()));
            tNewsVO.setStatus(String.valueOf(s.getStatus()));
            tNewsVO.setUpdateTime(DateUtils.format(s.getUpdateTime(), "yyyy-MM-dd hh:mm:ss"));
            TUserRecord tUserRecord = this.userDao.findById(s.getUpdateUser());
            tNewsVO.setUpdateUser(tUserRecord == null ?  "" :tUserRecord.getName());
            tNewsVO.setAttachments(getFiles(s.getId()));
            if (add) {
                s.setReadCount(s.getReadCount() == null ? 0 : s.getReadCount() + 1);
                this.newsDao.update(s);
            }
        }
        return tNewsVO;
    }

    /**
     * 下线
     *
     * @param userId
     * @param id
     * @return
     */
    public ResultVO<String> line(Long id, Long userId) {
        TNewsRecord s = this.newsDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setStatus(0);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.newsDao.update(s);
        return new ResultVO<>(0, "可以了");
    }

    /**
     * 发布
     *
     * @param userId
     * @param id
     * @return
     */
    public ResultVO<String> push(Long id, Long userId) {
        TNewsRecord s = this.newsDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setStatus(1);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.newsDao.update(s);
        return new ResultVO<>(0, "可以了");
    }

    /**
     * 置顶
     *
     * @param userId
     * @param id
     * @return
     */
    public ResultVO<String> top(Long id, Long userId) {
        TNewsRecord s = this.newsDao.findById(id);
        if (s == null) {
            return new ResultVO<>(-1, "没记录");
        }
        s.setTop(true);
        s.setFlag(true);
        s.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        s.setUpdateUser(userId);
        this.newsDao.update(s);
        return new ResultVO<>(0, "可以了");
    }


    /**
     * 保存
     *
     * @param tFileVOS
     */
    public void saveFile(List<TFileVO> tFileVOS, Long id, Long userId) {
        this.newsAttachmentDao.deleteByConditions(TNewsAttachment.T_NEWS_ATTACHMENT.NEW_ID.eq(id));
        List<TNewsAttachmentRecord> records = Lists.newArrayList();
        if (CollectionUtils.isEmpty(tFileVOS)){
            return;
        }
        for (TFileVO tFileVO : tFileVOS) {
            TNewsAttachmentRecord record = new TNewsAttachmentRecord();
            record.setId(idService.getId());
            record.setFileId(tFileVO.getId());
            record.setNewId(id);
            record.setCreateTime(new Timestamp(System.currentTimeMillis()));
            record.setUpdateTime(new Timestamp(System.currentTimeMillis()));
            record.setCreateUser(userId);
            record.setUpdateUser(userId);
            records.add(record);
        }
        this.newsAttachmentDao.insert(records);
    }

    /**
     * 跟新或者是添加
     *
     * @param tNewsVO
     * @param userId
     * @return
     */
    public ResultVO<String> addAndUpdate(TNewsVO tNewsVO, Long userId) {
        TNewsRecord tNewsRecord = null;
        Boolean save = false;
        if (StringUtils.isNotEmpty(tNewsVO.getId())) {
            tNewsRecord = this.newsDao.findById(Long.valueOf(tNewsVO.getId()));
        }
        if (tNewsRecord == null) {
            tNewsRecord = new TNewsRecord();
            tNewsRecord.setId(idService.getId());
            tNewsRecord.setCreateTime(new Timestamp(System.currentTimeMillis()));
            tNewsRecord.setCreateUser(userId);
            save = true;
        }
        tNewsRecord.setUpdateUser(userId);
        tNewsRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        tNewsRecord.setFace(tNewsVO.getFace());
        tNewsRecord.setTitle(tNewsVO.getTitle());
        tNewsRecord.setAbstract(tNewsVO.getAbstracts());
        tNewsRecord.setTop("1".equals(tNewsVO.getTop()));
        tNewsRecord.setFlag("1".equals(tNewsVO.getTop()));
        tNewsRecord.setContent(tNewsVO.getContent());
        tNewsRecord.setStatus(Integer.valueOf(tNewsVO.getStatus()));
        if (save) {
            this.newsDao.insert(tNewsRecord);
        } else {
            this.newsDao.update(tNewsRecord);
        }
        saveFile(tNewsVO.getAttachments(), tNewsRecord.getId(), userId);
        return new ResultVO<>(0, "可以了");
    }

    public ResultVO<String> delete(List<Long> ids) {
        this.newsDao.deleteById(ids);
        this.newsAttachmentDao.deleteByConditions(TNewsAttachment.T_NEWS_ATTACHMENT.NEW_ID.in(ids));
        return new ResultVO<>("删除成功");
    }
}
