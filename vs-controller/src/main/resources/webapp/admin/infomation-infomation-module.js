(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["infomation-infomation-module"],{

/***/ "./src/app/share/restServices/supplier.service.ts":
/*!********************************************************!*\
  !*** ./src/app/share/restServices/supplier.service.ts ***!
  \********************************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/HttpConfig */ "./src/app/share/decorators/HttpConfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupplierService = /** @class */ (function () {
    function SupplierService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/supplier/:params1/:params2/:params3/:params4/:params5';
    }
    // getAllByQuery
    SupplierService.prototype.getAllByQuery = function (data) {
        return data.observable;
    };
    // saveOrUpdate
    SupplierService.prototype.saveOrUpdate = function (data) {
        return data.observable;
    };
    // getById
    SupplierService.prototype.getById = function (data) {
        return data.observable;
    };
    // delete
    SupplierService.prototype.delete = function (data) {
        return data.observable;
    };
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAllByQuery'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], SupplierService.prototype, "getAllByQuery", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'saveOrUpdate'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], SupplierService.prototype, "saveOrUpdate", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getById'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], SupplierService.prototype, "getById", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'delete'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], SupplierService.prototype, "delete", null);
    SupplierService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SupplierService);
    return SupplierService;
}());



/***/ })

}]);
//# sourceMappingURL=infomation-infomation-module.js.map