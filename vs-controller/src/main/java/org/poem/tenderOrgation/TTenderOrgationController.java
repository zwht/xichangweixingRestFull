package org.poem.tenderOrgation;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.poem.RedisUtil;
import org.poem.RequestUtil;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.constant.ErrorCode;
import org.poem.excel.NExcelUtils;
import org.poem.excel.vo.ExcelVO;
import org.poem.tenderOrgation.vo.TenderOrgationImportVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

/**
 * 投标机构
 *
 * @author poem
 */
@RestController
@RequestMapping("/v1/tenderOrgation")
@Api(value = "/v1/tenderOrgation", tags = {"12-投标机构"})
public class TTenderOrgationController {

    private static final Logger logger = LoggerFactory.getLogger(TTenderOrgationController.class);
    /**
     *
     */
    @Autowired
    private TTenderOrgationService tSupplierService;

    @Autowired
    private RedisUtil redisUtil;

    /**
     * @param ids
     * @param request
     * @return
     */
    @ApiOperation(value = "删除", httpMethod = "POST")
    @PostMapping("/delete")
    public ResultVO<String> delete(Long[] ids, HttpServletRequest request) {
        logger.info("TTenderOrgationController:delete " + JSONObject.toJSONString(ids));
        return this.tSupplierService.deleteByIDs(Arrays.asList(ids));
    }

    /**
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询", httpMethod = "GET")
    @GetMapping("/getById/{id}")
    public ResultVO<TTenderOrgationVO> getById(@PathVariable(value = "id") Long id) {
        logger.info("TTenderOrgationController:getById " + JSONObject.toJSONString(id));
        return this.tSupplierService.getById(id);
    }


    /**
     * @param tUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "添加或者添加", httpMethod = "POST")
    @PostMapping("/saveOrUpdate")
    public ResultVO<String> saveOrUpdate(@RequestBody TTenderOrgationVO tUserVO, HttpServletRequest request) {
        logger.info("TTenderOrgationController: saveOrUpdate");
        logger.info("" + JSONObject.toJSONString(tUserVO));
        Long userId = RequestUtil.getUserId(request);
        return tSupplierService.saveOrUpdate(tUserVO, userId);
    }


    /**
     * @param tEquipmentQuery
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件查询", httpMethod = "GET")
    @GetMapping("/getAllByQuery")
    public ResultVO<PageVO<TTenderOrgationVO>> getAllByQuery(TTenderOrgationQueryVO tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        logger.info("TTenderOrgationController:getAllByQuery " + JSONObject.toJSONString(tEquipmentQuery) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tSupplierService.getAllByQuery(tEquipmentQuery, pageSize, pageNumber));
    }

    /**
     * 导出模板
     *
     * @param request
     * @param response
     */
    @ApiOperation(value = "导出模板", httpMethod = "GET")
    @GetMapping("/getExport")
    public void getExport(HttpServletRequest request, HttpServletResponse response) {
        try {
            String fileName = "导入投标机构-模板.xlsx";
            response.setHeader("Content-Disposition", "attachment; filename=\"" + new String(fileName.getBytes("UTF-8"), "ISO8859-1") + "\"");
            NExcelUtils.createTemplate(response.getOutputStream(), TenderOrgationImportVO.class);
        } catch (IOException e) {
            e.printStackTrace();
            logger.debug(e.getMessage(), e);
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
            logger.debug(e.getMessage(), e);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
            logger.debug(e.getMessage(), e);
        } catch (InvocationTargetException e) {
            e.printStackTrace();
            logger.debug(e.getMessage(), e);
        }
    }

    /**
     * 第一步，验证导入文件正确性
     *
     * @param request
     * @return
     */
    @ApiOperation(value = "第一步，验证导入文件正确性", httpMethod = "POST")
    @PostMapping("/readExcel")
    public ResultVO<ExcelVO<TenderOrgationImportVO>> readExcel(HttpServletRequest request) {
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
                request.getSession().getServletContext());
        if (!multipartResolver.isMultipart(request)) {
            return new ResultVO<>(ErrorCode.ParamError.getErrorCode(), null, "导入数据");
        }
        MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
        Collection<MultipartFile> collection = multiRequest.getFileMap().values();
        if (collection.size() == 0) {
            return new ResultVO<>(ErrorCode.ParamError.getErrorCode(), null, "没有文件");
        }
        MultipartFile multipartFile = collection.toArray(new MultipartFile[collection.size()])[0];
        try {
            ExcelVO<TenderOrgationImportVO> excelVO = NExcelUtils.readExcel(multipartFile.getInputStream(), TenderOrgationImportVO.class);
            if (!excelVO.getErr()) {
                redisUtil.set(excelVO.getRedisKey(), excelVO);
            }
            return new ResultVO<>(excelVO);
        } catch (IOException e) {
            e.printStackTrace();
            logger.error(e.getMessage(),e);
            return new ResultVO<>(-1, null, e.getMessage());
        } catch (InvalidFormatException e) {
            e.printStackTrace();
            logger.error(e.getMessage(),e);
            return new ResultVO<>(-1, null, e.getMessage());
        } catch (IllegalAccessException e) {
            e.printStackTrace();
            logger.error(e.getMessage(),e);
            return new ResultVO<>(-1, null, e.getMessage());
        } catch (InvocationTargetException e) {
            e.printStackTrace();
            logger.error(e.getMessage(),e);
            return new ResultVO<>(-1, null, e.getMessage());
        } catch (InstantiationException e) {
            e.printStackTrace();
            logger.error(e.getMessage(),e);
            return new ResultVO<>(-1, null, e.getMessage());
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
            logger.error(e.getMessage(),e);
            return new ResultVO<>(-1, null, e.getMessage());
        }
    }

    /**
     * 倒入
     * @param redisKey
     * @param request
     * @return
     */
    @ApiOperation(value = "第二步，验证导入数据正确性和导入数据", httpMethod = "POST")
    @PostMapping("/importData")
    public ResultVO<List<String>> importData(String redisKey, HttpServletRequest request) {
        ExcelVO<TenderOrgationImportVO> excelVO = new ExcelVO<TenderOrgationImportVO>();
        excelVO = redisUtil.get(redisKey, excelVO.getClass());
        List<String> message = tSupplierService.importData(excelVO.getData(), RequestUtil.getUserId(request));
        if (CollectionUtils.isNotEmpty(message)){
            return new ResultVO<>(-1, message, "还有错误。");
        }
        return new ResultVO<>(0, null,"完成");
    }

}
