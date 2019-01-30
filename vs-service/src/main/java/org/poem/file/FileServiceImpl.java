package org.poem.file;


import com.google.common.collect.Lists;
import org.apache.commons.lang3.RandomStringUtils;
import org.poem.VoReTraversalUtil;
import org.poem.common.IDService;
import org.poem.jooq.tables.TFile;
import org.poem.jooq.tables.records.TFileRecord;
import org.poem.authVO.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.stream.Collectors;

import static org.poem.jooq.tables.TFile.T_FILE;


/**
 *
 */
@Service
@Transactional(rollbackFor = {Exception.class, RuntimeException.class})
public class FileServiceImpl implements FileService {

    @Autowired
    private FileDao fileDao;

    @Autowired
    private IDService<Long> idService;

    @Autowired
    @Qualifier("localIOService")
    private FileIOService fileIOService;

    /**
     * 添加文件
     *
     * @param fileAddVo
     * @param userId
     * @return
     * @throws Exception
     */
    @Override
    public ResultVO<Long> add(FileAddVo fileAddVo, Long userId) throws Exception {
        Long id = idService.getId();
        TFileRecord fileRecord = VoReTraversalUtil.traversal(fileAddVo, TFileRecord.class);
        fileRecord.setId(id);
        fileRecord.setCreateUser(userId);
        fileDao.insert(fileRecord);
        return new ResultVO<>(0, id);
    }

    /**
     * 根据id查询文件详情
     *
     * @param id
     * @return
     */
    @Override
    public ResultVO<FileDetailVo> findById(Long id) {
        TFileRecord record = fileDao.findById(id);
        FileDetailVo fileDetailVo = VoReTraversalUtil.traversal(record, FileDetailVo.class);
        return new ResultVO<>(0, fileDetailVo);
    }

    /**
     *
     * @param fileUrl
     * @return
     */
    @Override
    public ResultVO<FileDetailVo> findByFileUrl(String fileUrl) {
        TFileRecord record = fileDao.fetchOne(T_FILE.FILE_URL, fileUrl);
        if (record == null) {
            return new ResultVO<>(0, null);
        }
        FileDetailVo fileDetailVo = VoReTraversalUtil.traversal(record, FileDetailVo.class);
        return new ResultVO<>(0, fileDetailVo);
    }

    /**
     *
     * @param fileId
     * @param fileUrl
     * @return
     * @throws Exception
     */
    @Override
    public ResponseEntity<byte[]> download(Long fileId, String fileUrl) throws Exception {
        if (fileId == null && StringUtils.isEmpty(fileUrl) || "undefined".equals(fileUrl) || "null".equals(fileUrl)) {
            return null;
        }
        ResultVO<FileDetailVo> fileDetailVoResultVo = null;
        FileDetailVo fileDetailVo = null;
        if (StringUtils.isEmpty(fileUrl)) {
            fileDetailVoResultVo = findById(fileId);
            fileDetailVo = fileDetailVoResultVo.getData();
        } else {
            fileDetailVoResultVo = findByFileUrl(fileUrl);
            fileDetailVo = fileDetailVoResultVo.getData();
        }
        if (fileDetailVo != null && StringUtils.isEmpty(fileUrl)) {
            fileUrl = fileDetailVo.getFileUrl();
        }
        if (StringUtils.isEmpty(fileUrl)) {
            return null;
        }
        String fileName = RandomStringUtils.random(6, true, false).toLowerCase();
        if (fileDetailVo != null) {
            fileName = fileDetailVo.getName();
        }
        byte[] body = getFileBytes(fileUrl);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentDispositionFormData("attachment", new String(fileName.getBytes("utf-8"), "ISO8859-1"));
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        HttpStatus statusCode = HttpStatus.OK;
        ResponseEntity<byte[]> response = new ResponseEntity<byte[]>(body, headers, statusCode);
        return response;
    }

    /**
     * 删除文件
     * @param filePath
     * @return
     */
    @Override
    public boolean deleteFile(String filePath) {
        return fileIOService.deleteFile(filePath);
    }

    /**
     * 保存文件
     * @param in
     * @return
     * @throws Exception
     */
    @Override
    public String saveFile(InputStream in) throws Exception {
        return fileIOService.saveFile(in);
    }

    /**
     * 输出文件
     * @param filePath
     * @param os
     * @param close
     * @throws Exception
     */
    @Override
    public void outPutFile(String filePath, OutputStream os, boolean close) throws Exception {
        fileIOService.outPutFile(filePath, os, close);
    }

    /**
     * 获取文件字节
     * @param filePath
     * @return
     * @throws Exception
     */
    @Override
    public byte[] getFileBytes(String filePath) throws Exception {
        return fileIOService.getFileBytes(filePath);
    }

    /**
     * 保存文件
     * @param in
     * @param fileExtension
     * @return
     * @throws Exception
     */
    @Override
    public String saveFile(InputStream in, String fileExtension) throws Exception {
        return fileIOService.saveFile(in, fileExtension);
    }

    @Override
    public List<TFileVO> getByIds(List<Long> ids){
        if (CollectionUtils.isEmpty(ids)){
            return Lists.newArrayList();
        }
        List<TFileRecord> records = this.fileDao.findByCondition(TFile.T_FILE.ID.in(ids));
        return records.stream().map(s ->{
            TFileVO tFileVO = new TFileVO();
            tFileVO.setId(String.valueOf(s.getId()));
            tFileVO.setName(s.getName());
            tFileVO.setFileUrl(s.getFileUrl());
            tFileVO.setFileSize(String.valueOf(s.getFileSize()));
            return tFileVO;
        }).collect(Collectors.toList());
    }
}
