package org.poem.file;


import org.poem.authVO.ResultVO;
import org.springframework.http.ResponseEntity;

import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

/**
 *
 */
public interface FileService {

    /**
     * 添加文件
     * @param fileAddVo
     * @param userId
     * @return
     * @throws Exception
     */
    ResultVO<Long> add(FileAddVo fileAddVo, Long userId) throws Exception;

    /**
     * 根据id查询文件详情
     * @param id
     * @return
     */
    ResultVO<FileDetailVo> findById(Long id);

    /**
     * 根据fileUrl查询文件详情
     * @param fileUrl
     * @return
     */
    ResultVO<FileDetailVo> findByFileUrl(String fileUrl);



    ResponseEntity<byte[]> download(Long fileId, String fileUrl) throws Exception;


    String saveFile(InputStream in) throws Exception;

    String saveFile(InputStream in, String fileExtension) throws Exception;

    void outPutFile(String filePath, OutputStream os, boolean close) throws Exception;

    byte[] getFileBytes(String filePath)throws Exception;

    boolean deleteFile(String filePath);

    List<TFileVO> getByIds(List<Long> ids);
}
