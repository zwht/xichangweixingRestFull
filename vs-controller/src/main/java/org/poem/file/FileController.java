package org.poem.file;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang.RandomStringUtils;
import org.poem.RequestUtil;
import org.poem.config.annotation.ShiroOauthodIgnore;
import org.poem.constant.ErrorCode;
import org.poem.authVO.ResultVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.util.Collection;


/**
 * @author poem
 */
@Controller
@ShiroOauthodIgnore
@RequestMapping("/v1/file")
@Api(value = "/v1/file", tags = {"00-文件"})
public class FileController {
    private static final Logger logger = LoggerFactory.getLogger(FileController.class);

    @Autowired
    private FileServiceImpl fileService;


    /**
     * 上传文件
     *
     * @param request
     * @param response
     * @return
     */
    @PostMapping("/upload")
    @ResponseBody
    @ApiOperation(value = "上传文件", notes = "上传文件", httpMethod = "POST")
    public ResultVO<FileUploadResVo> upload(HttpServletRequest request, HttpServletResponse response) {

        Long userId = RequestUtil.getUserId(request);

        try {
            request.setCharacterEncoding("UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
                request.getSession().getServletContext());
        if (!multipartResolver.isMultipart(request)) {
            return new ResultVO<>(ErrorCode.ParamError.getErrorCode());
        }
        MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
        Collection<MultipartFile> files = multiRequest.getFileMap().values();
        try {
            for (MultipartFile file : files) {
                if (file == null || file.isEmpty() || StringUtils.isEmpty(file.getOriginalFilename())) {
                    continue;
                }
//                if (!(file.getOriginalFilename().endsWith(".xlsx") || file.getOriginalFilename().endsWith(".csv"))) {
//                    return new ResultVO<>(ErrorCode.ParamError.getErrorCode(), null, "上传文件格式不合法！");
//                }
                if (file.getBytes().length > 10 * 1024 * 1028) {
                    return new ResultVO<>(-1, null, "文件过大， 不能超过10M.");
                }
                String fileExtension = "." + FilenameUtils.getExtension(file.getOriginalFilename());
                String url = fileService.saveFile(file.getInputStream(), fileExtension);
                FileAddVo fileAddVo = new FileAddVo();
                fileAddVo.setFileSize(file.getSize());
                fileAddVo.setFileType(file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1));
                fileAddVo.setName(file.getOriginalFilename());
                fileAddVo.setFileUrl(url);
                ResultVO<Long> resultVo = fileService.add(fileAddVo, userId);


                //封装响应vo
                FileUploadResVo fileUploadResVo = new FileUploadResVo();
                fileUploadResVo.setFileUrl(url);
                fileUploadResVo.setId(resultVo.getData());
                fileUploadResVo.setName(fileAddVo.getName());
                fileUploadResVo.setType(fileAddVo.getFileType());
                return new ResultVO<>(fileUploadResVo);
            }
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResultVO<>(ErrorCode.UnknownError.getErrorCode());
        }

        return null;

    }


    /**
     * 上传头像
     *
     * @param request
     * @param response
     * @return
     */
    @PostMapping("/uploadHead")
    @ResponseBody
    @ApiOperation(value = "上传头像", notes = "上传头像", httpMethod = "POST")
    public ResultVO<FileUploadResVo> uploadHead(HttpServletRequest request, HttpServletResponse response) {


        try {
            request.setCharacterEncoding("UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
                request.getSession().getServletContext());
        if (!multipartResolver.isMultipart(request)) {
            return new ResultVO<>(ErrorCode.ParamError.getErrorCode());
        }
        MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
        Collection<MultipartFile> files = multiRequest.getFileMap().values();
        try {
            for (MultipartFile file : files) {
                if (file == null || file.isEmpty() || StringUtils.isEmpty(file.getOriginalFilename())) {
                    continue;
                }
                String fileExtension = "." + FilenameUtils.getExtension(file.getOriginalFilename());
                //上传文件到dfs,并获取url地址
                String url = fileService.saveFile(file.getInputStream(), fileExtension);
                FileAddVo fileAddVo = new FileAddVo();
                fileAddVo.setFileSize(file.getSize());
                fileAddVo.setFileType(file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1));
                fileAddVo.setName(file.getOriginalFilename());
                fileAddVo.setFileUrl(url);

                //封装响应vo
                FileUploadResVo fileUploadResVo = new FileUploadResVo();
                fileUploadResVo.setFileUrl(url);
                fileUploadResVo.setName(fileAddVo.getName());
                fileUploadResVo.setType(fileAddVo.getFileType());
                return new ResultVO<>(fileUploadResVo);
            }
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResultVO<>(ErrorCode.UnknownError.getErrorCode());
        }

        return null;

    }


    /**
     * 下载文件
     *
     * @param fileId
     * @param fileUrl
     * @return
     * @throws Exception
     */
    @GetMapping("/download")
    @ApiOperation(value = "下载文件", notes = "下载文件", httpMethod = "GET")
    public ResponseEntity<byte[]> download(Long fileId, String fileUrl) throws Exception {
        return fileService.download(fileId, fileUrl);
    }

    /**
     * 下载头像
     *
     * @param fileUrl
     * @param response
     * @throws Exception
     */
    @GetMapping("/downloadHead")
    @ApiOperation(value = "下载头像", notes = "下载头像", httpMethod = "GET")
    public void download(String fileUrl, HttpServletResponse response) throws Exception {
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/octet-stream");
        response.setHeader("Content-Disposition", "inline; filename=\"" + new String(RandomStringUtils.random(5, true, true).getBytes("UTF-8"), "ISO8859-1") + "\"");
        fileService.outPutFile(fileUrl, response.getOutputStream(), false);
    }
}
