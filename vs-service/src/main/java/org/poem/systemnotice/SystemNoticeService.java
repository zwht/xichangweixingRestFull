package org.poem.systemnotice;

import com.google.common.collect.Lists;
import org.jooq.SortField;
import org.poem.DateUtils;
import org.poem.authVO.OffsetPagingVO;
import org.poem.authVO.PageVO;
import org.poem.common.IDService;
import org.poem.jooq.tables.TSystemNotice;
import org.poem.jooq.tables.records.TSystemNoticeRecord;
import org.poem.systemnotice.vo.SystemNoticeVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SystemNoticeService {

    @Autowired
    private IDService<Long> idService;

    @Autowired
    private SystemNoticeDao systemNoticeDao;


    /**
     * 创建
     *
     * @param notice
     * @param user
     * @param content
     */
    public void saveSystemNotice(String notice, Long user, String content) {
        TSystemNoticeRecord tSystemNoticeRecord = new TSystemNoticeRecord();
        tSystemNoticeRecord.setContents(content);
        tSystemNoticeRecord.setId(idService.getId());
        tSystemNoticeRecord.setStatus(0);
        tSystemNoticeRecord.setTitle(notice);
        tSystemNoticeRecord.setCreateTime(new Timestamp(System.currentTimeMillis()));
        tSystemNoticeRecord.setCreateUser(user);
        tSystemNoticeRecord.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        tSystemNoticeRecord.setUpdateUser(user);
        tSystemNoticeRecord.setSendTime(new Timestamp(System.currentTimeMillis()));
        this.systemNoticeDao.insert(tSystemNoticeRecord);
    }


    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public SystemNoticeVO getById(Long id) {
        TSystemNoticeRecord r = this.systemNoticeDao.findById(id);
        SystemNoticeVO vo = new SystemNoticeVO();
        if (r != null) {
            vo.setId(String.valueOf(r.getId()));
            vo.setContent(r.getContents());
            vo.setStatus(String.valueOf(r.getStatus()));
            vo.setTitle(r.getTitle());
            vo.setSendTime(DateUtils.format(r.getSendTime()));

            r.setStatus(1);
            this.systemNoticeDao.update(r);
            return vo;
        }
        return null;
    }


    /**
     * @param pageSize
     * @param pageNumner
     * @return
     */
    public PageVO<SystemNoticeVO> getPage(Integer pageSize, Integer pageNumner) {
        List<SortField<?>> sortFieldList = Lists.newArrayList();
        sortFieldList.add(TSystemNotice.T_SYSTEM_NOTICE.CREATE_TIME.desc());
        PageVO<TSystemNoticeRecord> recordPageVO = this.systemNoticeDao.fetchByPage(Lists.newArrayList(), new OffsetPagingVO(pageNumner, pageSize), sortFieldList);
        return new PageVO<>(recordPageVO.getTotalCount(),
                recordPageVO.getPageData().stream().map(r -> {
                    SystemNoticeVO vo = new SystemNoticeVO();
                    vo.setId(String.valueOf(r.getId()));
                    vo.setContent(r.getContents());
                    vo.setStatus(String.valueOf(r.getStatus()));
                    vo.setTitle(r.getTitle());
                    vo.setSendTime(DateUtils.format(r.getSendTime()));
                    return vo;
                }).collect(Collectors.toList()));
    }
}
