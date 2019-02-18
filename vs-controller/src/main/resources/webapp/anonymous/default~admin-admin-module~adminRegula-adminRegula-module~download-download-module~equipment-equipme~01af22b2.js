(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~adminRegula-adminRegula-module~download-download-module~equipment-equipme~01af22b2"],{

/***/ "./src/app/share/restServices/front.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/share/restServices/front.service.ts ***!
  \*****************************************************/
/*! exports provided: FrontService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontService", function() { return FrontService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/HttpConfig */ "./src/app/share/decorators/HttpConfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var FrontService = /** @class */ (function () {
    function FrontService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/front/:params1/:params2/:params3/:params4/:params5';
    }
    // 根据条件查询工作动态
    FrontService.prototype.getWorkDynamics = function (data) {
        return data.observable;
    };
    // 根据条件设备查询
    FrontService.prototype.getAllEquipemt = function (data) {
        return data.observable;
    };
    // 根据条件供应商查询
    FrontService.prototype.getAllByQuery = function (data) {
        return data.observable;
    };
    // 根据条件查询招标机构
    FrontService.prototype.getOrgatioByQuery = function (data) {
        return data.observable;
    };
    // 根据条件查询市场信息
    FrontService.prototype.getMarketInformation = function (data) {
        return data.observable;
    };
    // 根据条件查询质量公告
    FrontService.prototype.getQualityNotice = function (data) {
        return data.observable;
    };
    // 根据条件查询质量事件
    FrontService.prototype.getQualityEventByQuery = function (data) {
        return data.observable;
    };
    // 根据条件查询质量问题处理
    FrontService.prototype.getQualityDealByQuery = function (data) {
        return data.observable;
    };
    // 根据条件查询资料下载
    FrontService.prototype.getDataDownloadAll = function (data) {
        return data.observable;
    };
    // 党建要闻列表
    FrontService.prototype.getAllPart = function (data) {
        return data.observable;
    };
    // 根据id查询党建要闻详情
    FrontService.prototype.getPartById = function (data) {
        return data.observable;
    };
    // 查询管理规定列表
    FrontService.prototype.getAllManagement = function (data) {
        return data.observable;
    };
    // 根据条件查询通知公告
    FrontService.prototype.getAllNoticeByQuery = function (data) {
        return data.observable;
    };
    // 强军要闻列表
    FrontService.prototype.getAllArm = function (data) {
        return data.observable;
    };
    // 根据id查询强军要闻详情
    FrontService.prototype.getArmById = function (data) {
        return data.observable;
    };
    // 根据id查询设备详情
    FrontService.prototype.getEquipmentById = function (data) {
        return data.observable;
    };
    // 根据id查询供应商
    FrontService.prototype.getSupplierById = function (data) {
        return data.observable;
    };
    // 根据id查询投标机构
    FrontService.prototype.getOrgationById = function (data) {
        return data.observable;
    };
    // 根据id查询质量通告
    FrontService.prototype.getQualityNoticeById = function (data) {
        return data.observable;
    };
    // 根据id查询质量事件
    FrontService.prototype.getQualityEventById = function (data) {
        return data.observable;
    };
    // 根据id查询质量问题处理
    FrontService.prototype.getQualityDealById = function (data) {
        return data.observable;
    };
    // 根据id查询工作动态
    FrontService.prototype.getWorkDynamicsById = function (data) {
        return data.observable;
    };
    // 根据id查询通知公告查询
    FrontService.prototype.getNoticeById = function (data) {
        return data.observable;
    };
    // 根据id查询管理规定列表
    FrontService.prototype.getManagementById = function (data) {
        return data.observable;
    };
    // 根据id查询市场信息
    FrontService.prototype.getMarketInformationById = function (data) {
        return data.observable;
    };
    // 根据条件查询链接
    FrontService.prototype.getLinked = function (data) {
        return data.observable;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getWorkDynamics'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getWorkDynamics", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAllEquipemt'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getAllEquipemt", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAllByQuery'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getAllByQuery", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getOrgatioByQuery'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getOrgatioByQuery", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getMarketInformation'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getMarketInformation", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getQualityNotice'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getQualityNotice", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getQualityEventByQuery'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getQualityEventByQuery", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getQualityDealByQuery'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getQualityDealByQuery", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getDataDownloadAll'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getDataDownloadAll", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAllPart'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getAllPart", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getPartById'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getPartById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAllManagement'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getAllManagement", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAllNoticeByQuery'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getAllNoticeByQuery", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAllArm'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getAllArm", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getArmById'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getArmById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getEquipmentById'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getEquipmentById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getSupplierById'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getSupplierById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getOrgationById'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getOrgationById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getQualityNoticeById'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getQualityNoticeById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getQualityEventById'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getQualityEventById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getQualityDealById'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getQualityDealById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getWorkDynamicsById'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getWorkDynamicsById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getNoticeById'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getNoticeById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getManagementById'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getManagementById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getMarketInformationById'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getMarketInformationById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getLinked'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FrontService.prototype, "getLinked", null);
    FrontService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FrontService);
    return FrontService;
}());



/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~adminRegula-adminRegula-module~download-download-module~equipment-equipme~01af22b2.js.map