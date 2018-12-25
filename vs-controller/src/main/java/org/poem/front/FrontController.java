package org.poem.front;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.poem.RequestUtil;
import org.poem.arms.TArmsService;
import org.poem.arms.TArmsVO;
import org.poem.authVO.PageVO;
import org.poem.authVO.ResultVO;
import org.poem.config.annotation.ShiroOauthodIgnore;
import org.poem.dataDownload.TDataDownloadQueryVO;
import org.poem.dataDownload.TDataDownloadService;
import org.poem.dataDownload.TDataDownloadVO;
import org.poem.equipment.TEquipmentQuery;
import org.poem.equipment.TEquipmentService;
import org.poem.equipment.TEquipmentVO;
import org.poem.link.TLinkQueryVO;
import org.poem.link.TLinkService;
import org.poem.link.TLinkVO;
import org.poem.managementRegulation.TManagementRegulationQueryVO;
import org.poem.managementRegulation.TManagementRegulationService;
import org.poem.managementRegulation.TManagementRegulationVO;
import org.poem.marketInformation.MarketInformationQueryVO;
import org.poem.marketInformation.MarketInformationService;
import org.poem.marketInformation.MarketInformationVO;
import org.poem.party.TPartQueryVO;
import org.poem.party.TPartyService;
import org.poem.party.TPartyVO;
import org.poem.qualityDeal.TQualityDealQueryVO;
import org.poem.qualityDeal.TQualityDealService;
import org.poem.qualityDeal.TQualityDealVO;
import org.poem.qualityEvent.TQualityEventQueryVO;
import org.poem.qualityEvent.TQualityEventService;
import org.poem.qualityEvent.TQualityEventVO;
import org.poem.qualityNotice.TQualityNoticeQueryVO;
import org.poem.qualityNotice.TQualityNoticeService;
import org.poem.qualityNotice.TQualityNoticeVO;
import org.poem.supplier.TSupplierQueryVO;
import org.poem.supplier.TSupplierService;
import org.poem.supplier.TSupplierVO;
import org.poem.tenderOrgation.TTenderOrgationQueryVO;
import org.poem.tenderOrgation.TTenderOrgationService;
import org.poem.tenderOrgation.TTenderOrgationVO;
import org.poem.vehiclePick.TVehiclePickService;
import org.poem.vehiclePick.TVehiclePickVO;
import org.poem.workDynamics.TWorkDynamicsQueryVO;
import org.poem.workDynamics.TWorkDynamicsService;
import org.poem.workDynamics.TWorkDynamicsVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 * @author poem
 */
@RestController
@ShiroOauthodIgnore
@RequestMapping("/v1/front")
@Api(value = "/v1/front", tags = {"30-前端-无鉴权"})
public class FrontController {

    private static final Logger logger = LoggerFactory.getLogger(FrontController.class);

    @Autowired
    private TPartyService tNewsService;

    @Autowired
    private TArmsService tArmsService;

    @Autowired
    private TEquipmentService tEquipmentService;

    @Autowired
    private TSupplierService tSupplierService;

    @Autowired
    private TTenderOrgationService tTenderOrgationService;


    @Autowired
    private TWorkDynamicsService tWorkDynamicsService;

    @Autowired
    private TQualityNoticeService tQualityNoticeService;

    @Autowired
    private TQualityEventService tQualityEventService;


    @Autowired
    private TQualityDealService tQualityDealService;

    @Autowired
    private TVehiclePickService tVehiclePickService;

    @Autowired
    private MarketInformationService marketInformationService;


    @Autowired
    private TManagementRegulationService managementRegulationService;

    @Autowired
    private TDataDownloadService tDataDownloadService;

    @Autowired
    private TLinkService tLinkService;


    /**
     * 党建要闻列表
     *
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "党建要闻列表", httpMethod = "GET")
    @GetMapping("/getAllPart/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TPartyVO>> getAllPart(
            @PathVariable(value = "pageSize") Integer pageSize,
            @PathVariable(value = "pageNumber") Integer pageNumber) {
        logger.info("FrontController:getAll" + pageSize + " " + pageNumber);
        return new ResultVO<>(this.tNewsService.getAll(new TPartQueryVO(), pageSize, pageNumber));
    }


    /**
     * 根据id查询党建要闻详情
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询党建要闻详情", httpMethod = "GET")
    @GetMapping("/getPartById/{id}")
    public ResultVO<TPartyVO> getPartById(@PathVariable("id") Long id) {
        logger.info("FrontController:getPartById id：" + id);
        return new ResultVO<>(this.tNewsService.getById(id, true));
    }

    /**
     * 强军
     *
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "强军要闻列表", httpMethod = "GET")
    @GetMapping("/getAllArm/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TArmsVO>> getAllArm(
            @PathVariable(value = "pageSize") Integer pageSize,
            @PathVariable(value = "pageNumber") Integer pageNumber) {
        logger.info("FrontController:getAll" + pageSize + " " + pageNumber);
        return new ResultVO<>(this.tArmsService.getArms(pageSize, pageNumber));
    }


    /**
     * 根据id查询强军要闻详情
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询强军要闻详情", httpMethod = "GET")
    @GetMapping("/getArmById/{id}")
    public ResultVO<TArmsVO> getArmById(@PathVariable("id") Long id) {
        logger.info("FrontController:getPartById id：" + id);
        return this.tArmsService.getById(id, true);
    }

    /**
     * @param tEquipmentQuery
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件设备查询", httpMethod = "GET")
    @GetMapping("/getAllEquipemt")
    public ResultVO<PageVO<TEquipmentVO>> getAllEquipemt(TEquipmentQuery tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        logger.info("FrontController:getAllByQuery " + JSONObject.toJSONString(tEquipmentQuery) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tEquipmentService.getAllByQuery(tEquipmentQuery, pageSize, pageNumber));
    }


    /**
     * 根据id查询设备要闻详情
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询设备详情", httpMethod = "GET")
    @GetMapping("/getEquipmentById/{id}")
    public ResultVO<TEquipmentVO> getEquipmentById(@PathVariable("id") Long id) {
        logger.info("FrontController:getPartById id：" + id);
        return this.tEquipmentService.getById(id);
    }


    /**
     * 根据id查询供应商
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询供应商", httpMethod = "GET")
    @GetMapping("/getSupplierById/{id}")
    public ResultVO<TSupplierVO> getSupplierById(@PathVariable(value = "id") Long id) {
        logger.info("FrontController:getById " + JSONObject.toJSONString(id));
        return this.tSupplierService.getById(id);
    }

    /**
     * 根据条件供应商查询
     *
     * @param tEquipmentQuery
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件供应商查询", httpMethod = "GET")
    @GetMapping("/getAllByQuery")
    public ResultVO<PageVO<TSupplierVO>> getAllByQuery(TSupplierQueryVO tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        logger.info("FrontController:getAllByQuery " + JSONObject.toJSONString(tEquipmentQuery) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tSupplierService.getAllByQuery(tEquipmentQuery, pageSize, pageNumber));
    }


    /**
     * 根据条件查询招标机构
     *
     * @param tEquipmentQuery
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件查询招标机构", httpMethod = "GET")
    @GetMapping("/getOrgatioByQuery")
    public ResultVO<PageVO<TTenderOrgationVO>> getOrgatioByQuery(TTenderOrgationQueryVO tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        logger.info("TTenderOrgationController:getAllByQuery " + JSONObject.toJSONString(tEquipmentQuery) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tTenderOrgationService.getAllByQuery(tEquipmentQuery, pageSize, pageNumber));
    }

    /**
     * 根据id查询供应商
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询供应商", httpMethod = "GET")
    @GetMapping("/getOrgationById/{id}")
    public ResultVO<TTenderOrgationVO> getOrgationById(@PathVariable(value = "id") Long id) {
        logger.info("FrontController:getOrgationById " + JSONObject.toJSONString(id));
        return this.tTenderOrgationService.getById(id);
    }

    /**
     * 根据条件查询工作动态
     *
     * @param tNewQueryVO
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件查询工作动态", httpMethod = "GET")
    @GetMapping("/getWorkDynamics/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TWorkDynamicsVO>> getWorkDynamics(TWorkDynamicsQueryVO tNewQueryVO,
                                                             @PathVariable(value = "pageSize") Integer pageSize,
                                                             @PathVariable(value = "pageNumber") Integer pageNumber) {
        logger.info("FrontController:getWorkDynamics" + JSONObject.toJSONString(tNewQueryVO));
        return new ResultVO<>(this.tWorkDynamicsService.getAll(tNewQueryVO, pageSize, pageNumber));
    }

    /**
     * 根据id查询工作动态
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询工作动态", httpMethod = "GET")
    @GetMapping("/getWorkDynamicsById/{id}")
    public ResultVO<TWorkDynamicsVO> getWorkDynamicsById(@PathVariable(value = "id") Long id) {
        logger.info("FrontController:getWorkDynamicsById" + JSONObject.toJSONString(id));
        return new ResultVO<>(this.tWorkDynamicsService.getById(id, true));
    }

    /**
     * 根据条件查询质量通告
     *
     * @param tEquipmentQuery
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件查询质量通告", httpMethod = "GET")
    @GetMapping("/getQualityNotice")
    public ResultVO<PageVO<TQualityNoticeVO>> getQualityNotice(TQualityNoticeQueryVO tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        logger.info("FrontController:getQualityNotice " + JSONObject.toJSONString(tEquipmentQuery) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tQualityNoticeService.getAllByQuery(tEquipmentQuery, pageSize, pageNumber));
    }

    /**
     * 根据id查询通知
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询质量通告", httpMethod = "GET")
    @GetMapping("/getQualityNoticeById/{id}")
    public ResultVO<TQualityNoticeVO> getQualityNoticeById(@PathVariable(value = "id") Long id) {
        logger.info("FrontController:getById " + JSONObject.toJSONString(id));
        return this.tQualityNoticeService.getById(id);
    }

    /**
     * 根据id查询质量事件
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询质量事件", httpMethod = "GET")
    @GetMapping("/getQualityEventById/{id}")
    public ResultVO<TQualityEventVO> getQualityEventById(@PathVariable(value = "id") Long id) {
        logger.info("FrontController:getQualityEventById " + JSONObject.toJSONString(id));
        return this.tQualityEventService.getById(id);
    }


    /**
     * @param tEquipmentQuery
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件查询质量事件", httpMethod = "GET")
    @GetMapping("/getQualityEventByQuery")
    public ResultVO<PageVO<TQualityEventVO>> getQualityEventByQuery(TQualityEventQueryVO tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        logger.info("FrontController:getQualityEventByQuery " + JSONObject.toJSONString(tEquipmentQuery) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tQualityEventService.getAllByQuery(tEquipmentQuery, pageSize, pageNumber));
    }


    /**
     * 根据id查询质量问题处理
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询质量问题处理", httpMethod = "GET")
    @GetMapping("/getQualityDealById/{id}")
    public ResultVO<TQualityDealVO> getQualityDealById(@PathVariable(value = "id") Long id) {
        logger.info("FrontController:getQualityDealById " + JSONObject.toJSONString(id));
        return this.tQualityDealService.getById(id);
    }


    /**
     * 根据条件查询质量问题处理
     *
     * @param tEquipmentQuery
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件查询质量问题处理", httpMethod = "GET")
    @GetMapping("/getQualityDealByQuery")
    public ResultVO<PageVO<TQualityDealVO>> getQualityDealByQuery(TQualityDealQueryVO tEquipmentQuery, Integer pageSize, Integer pageNumber) {
        logger.info("FrontController:getQualityDealByQuery " + JSONObject.toJSONString(tEquipmentQuery) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tQualityDealService.getAllByQuery(tEquipmentQuery, pageSize, pageNumber));
    }


    /**
     * @param tUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "添加接送", httpMethod = "POST")
    @PostMapping("/saveOrUpdate")
    public ResultVO<String> saveOrUpdate(@RequestBody TVehiclePickVO tUserVO, HttpServletRequest request) {
        logger.info("FrontController: saveOrUpdate");
        logger.info("" + JSONObject.toJSONString(tUserVO));
        Long userId = RequestUtil.getUserId(request);
        return tVehiclePickService.saveOrUpdate(tUserVO, userId);
    }

    /**
     * 根据条件查询市场信息
     *
     * @param tNewQueryVO
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件查询市场信息", httpMethod = "GET")
    @GetMapping("/getMarketInformation/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<MarketInformationVO>> getMarketInformation(MarketInformationQueryVO tNewQueryVO,
                                                                      @PathVariable(value = "pageSize") Integer pageSize,
                                                                      @PathVariable(value = "pageNumber") Integer pageNumber) {
        logger.info("FrontController:getMarketInformation" + JSONObject.toJSONString(tNewQueryVO));
        return new ResultVO<>(this.marketInformationService.getAll(tNewQueryVO, pageSize, pageNumber));
    }

    /**
     * 根据id查询市场信息
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询市场信息", httpMethod = "GET")
    @GetMapping("/getMarketInformationById/{id}")
    public ResultVO<MarketInformationVO> getMarketInformationById(@PathVariable(value = "id") Long id) {
        logger.info("FrontController:getMarketInformationById" + JSONObject.toJSONString(id));
        return new ResultVO<>(this.marketInformationService.getById(id, true));
    }

    /**
     * 查询管理规定列表
     *
     * @param tNewQueryVO
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "查询管理规定列表", httpMethod = "GET")
    @GetMapping("/getAllManagement/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TManagementRegulationVO>> getAllManagement(TManagementRegulationQueryVO tNewQueryVO,
                                                                      @PathVariable(value = "pageSize") Integer pageSize,
                                                                      @PathVariable(value = "pageNumber") Integer pageNumber) {
        logger.info("FrontController:getAllManagement" + JSONObject.toJSONString(tNewQueryVO));
        return new ResultVO<>(this.managementRegulationService.getAll(tNewQueryVO, pageSize, pageNumber));
    }

    /**
     * 根据id查询管理规定列表
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询管理规定列表", httpMethod = "GET")
    @GetMapping("/getManagementById/{id}")
    public ResultVO<TManagementRegulationVO> getManagementById(@PathVariable(value = "id") Long id) {
        logger.info("FrontController:getManagementById" + JSONObject.toJSONString(id));
        return new ResultVO<>(this.managementRegulationService.getById(id, true));
    }

    /**
     * 根据条件查询资料下载
     *
     * @param pageSize
     * @param pageNumber
     * @return
     */
    @ApiOperation(value = "根据条件查询资料下载", httpMethod = "GET")
    @GetMapping("/getDataDownloadAll/{pageSize}/{pageNumber}")
    public ResultVO<PageVO<TDataDownloadVO>> getDataDownloadAll(@PathVariable(value = "pageSize") Integer pageSize,
                                                                @PathVariable(value = "pageNumber") Integer pageNumber) {
        return new ResultVO<>(this.tDataDownloadService.getAll(new TDataDownloadQueryVO(), pageSize, pageNumber));
    }

    /**
     * 根据id查询资料下载
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "根据id查询资料下载", httpMethod = "GET")
    @GetMapping("/getDataDownloadById/{id}")
    public ResultVO<TDataDownloadVO> getDataDownloadById(@PathVariable(value = "id") Long id) {
        logger.info("FrontController:getDataDownloadById" + JSONObject.toJSONString(id));
        return new ResultVO<>(this.tDataDownloadService.getById(id));
    }


    /**
     * 根据条件查询链接
     *
     * @return
     */
    @ApiOperation(value = "根据条件查询链接", httpMethod = "GET")
    @GetMapping("/getLinked")
    public ResultVO<PageVO<TLinkVO>> getLinked(Integer pageSize, Integer pageNumber) {
        TLinkQueryVO tLinkQueryVO = new TLinkQueryVO();
        logger.info("TLinkController: getLinked:" + JSONObject.toJSONString(tLinkQueryVO) + " pageSize:" + pageSize + " pageNumber:" + pageNumber);
        return new ResultVO<>(this.tLinkService.getLinked(tLinkQueryVO, pageSize, pageNumber));
    }
}
