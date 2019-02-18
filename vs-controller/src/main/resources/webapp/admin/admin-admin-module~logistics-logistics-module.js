(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module~logistics-logistics-module"],{

/***/ "./src/app/admin/logistics/car/car.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/logistics/car/car.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"list-box\">\n    <div class=\"search clear\" style=\"padding:20px;\">\n      <div>\n        <div class=\"chaxun\">\n          <span>标题</span>\n          <input nz-input [(ngModel)]=\"title\" placeholder=\"查询标题\" >\n        </div>\n        <div class=\"chaxun\">\n          <span>更新时间</span>\n          <nz-range-picker [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" nzShowTime></nz-range-picker>\n        </div>\n        <div class=\"chaxun\">\n          <span>状态</span>\n          <nz-select style=\"width: 120px;\"  nzAllowClear nzPlaceHolder=\"状态\">\n            <nz-option nzValue=\"jack\" nzLabel=\"Jack\"></nz-option>\n            <nz-option nzValue=\"lucy\" nzLabel=\"Lucy\"></nz-option>\n            <nz-option nzValue=\"disabled\" nzLabel=\"Disabled\" nzDisabled></nz-option>\n          </nz-select>\n        </div>\n        <div class=\"chaxun\">\n          <button nz-button nzType=\"chaxun\" (click)=\"getList()\">查询</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"table-head\">\n      <div class=\"head-h2\">\n        <span>投诉列表</span>\n      </div>\n      <!-- <div class=\"btn-box\">\n        <button nz-button nzType=\"tianjia\" routerLink=\"./add\">新增强军要闻</button>\n      </div> -->\n    </div>\n    <div class=\"table-box\">\n      <nz-table #basicTable \n        [nzData]=\"list\" [nzFrontPagination]=\"false\"\n        [nzPageIndex]=\"pageNum\"\n        [nzTotal]=\"totalCount\"\n        [nzPageSize]=\"pageSize\"\n        (nzPageIndexChange)=\"getList()\">\n        <!-- <nz-table #basicTable [nzData]=\"list\" [nzShowPagination]=\"false\"> -->\n        <thead>\n          <tr>\n            <th>序号</th>\n            <th>乘客姓名</th>\n            <th>申请事由</th>\n            <th>用车时间</th>\n            <th>接送站地点</th>\n            <th>航班号</th>\n            <th>车次</th>\n            <th>用车人数</th>\n            <th>申请车型</th>\n            <th>行驶区域</th>\n            <th>联系电话</th>\n            <th>操作</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of list let i= index\">\n            <td>{{i}}</td>\n            <td>{{data.name}}</td>\n            <td>{{data.applicationReason}}</td>\n            <td>{{data.applicationTime}}</td>\n            <td>{{data.address}}</td>\n            <td>{{data.flight}}</td>\n            <td>{{data.trainNumber}}</td>\n            <td>{{data.trainPersons}}</td>\n            <td>{{data.vehicleType}}</td>\n            <td>{{data.vehicleArea}}</td>\n            <td>{{data.phone}}</td>\n            <td>\n              <a *ngIf=\"data.status==0\"  class=\"op\" (click)=\"click(data)\" >未处理</a>\n              <span *ngIf=\"data.status==1\" style=\"color:#a0a0a0\" >已处理</span>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/logistics/car/car.component.less":
/*!********************************************************!*\
  !*** ./src/app/admin/logistics/car/car.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-box {\n  height: 100%;\n}\n.list-box .search {\n  margin-bottom: 20px;\n  width: 100%;\n  background-color: white;\n  padding: 20px 0;\n}\n.list-box .search > div {\n  width: 1200px;\n  margin: 0 auto;\n}\n.list-box .search .chaxun {\n  margin-right: 20px;\n  float: left;\n}\n.list-box .search .chaxun:last-child {\n  margin-left: 50px;\n}\n.list-box .search .chaxun > span {\n  margin-right: 6px;\n}\n.list-box .search .chaxun input {\n  width: 160px;\n}\n.list-box .table-head {\n  position: relative;\n  width: 95%;\n  background-color: white;\n  margin: 0 auto;\n  height: 50px;\n  bottom: 3px;\n}\n.list-box .table-head .head-h2 {\n  padding-left: 20px;\n  line-height: 50px;\n}\n.list-box .table-head .head-h2 span {\n  font-weight: bold;\n  font-size: 16px;\n}\n.list-box .table-head .btn-box {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n.list-box .table-box {\n  width: 95%;\n  margin: 0 auto;\n  background: #fff;\n  padding: 20px;\n  min-height: 400px;\n}\n.box {\n  height: 100%;\n  display: flex;\n}\n.box .left {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n}\n.box .left .head {\n  height: 50px;\n  background-color: rgba(110, 110, 202, 0.1);\n  color: #333333;\n  line-height: 50px;\n  text-indent: 40px;\n  font-size: 18px;\n}\n.box .left .town-list {\n  padding: 0 20px;\n  height: 100%;\n}\n.box .left .town-list .village-list {\n  background-color: #fafafa;\n}\n.box .left .town-list .village-list .click-item {\n  height: 32px;\n  line-height: 32px;\n  text-indent: 35px;\n  border-color: #eee;\n}\n.box .left .town-list .click-item {\n  cursor: pointer;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 25px;\n  border-bottom: 1px solid #dfdfdf;\n}\n.box .list-box {\n  flex: 1;\n}\n.btn-box > a,\n.btn-box button {\n  margin: 0 10px;\n}\n.op {\n  color: #CF2323;\n  margin: 0 6px;\n}\n"

/***/ }),

/***/ "./src/app/admin/logistics/car/car.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/logistics/car/car.component.ts ***!
  \******************************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var src_app_share_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/session.service */ "./src/app/share/services/session.service.ts");
/* harmony import */ var src_app_share_restServices_logistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/restServices/logistics.service */ "./src/app/share/restServices/logistics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarComponent = /** @class */ (function () {
    function CarComponent(logisticsService, _message, sessionService) {
        this.logisticsService = logisticsService;
        this._message = _message;
        this.sessionService = sessionService;
        this.dateRange = [];
        this.list = [];
        this.title = "";
        this.startTime = null;
        this.endTime = null;
        this.pageNum = 1;
        this.totalCount = 0;
        this.pageSize = 10;
    }
    CarComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    CarComponent.prototype.onChange = function (e) {
        if (e.length) {
            this.startTime = e[0].getTime();
            this.endTime = e[1].getTime();
        }
        else {
            this.startTime = null;
            this.endTime = null;
        }
    };
    CarComponent.prototype.click = function (d) {
        var _this = this;
        var data = JSON.parse(JSON.stringify(d));
        data.status = 1;
        this.logisticsService.vehiclePickSaveOrUpdate({
            data: data
        }).subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.getList();
            }
        });
    };
    CarComponent.prototype.getList = function () {
        var _this = this;
        var params = {
            // endTime:"",
            // startTime:"",
            // departmentId:"",
            title: "",
            pageNumber: this.pageNum,
            pageSize: this.pageSize,
        };
        if (this.endTime) {
            params["vehicleEndTime"] = this.endTime;
        }
        if (this.startTime) {
            params["vehicleStartTime"] = this.startTime;
        }
        if (this.title) {
            params.title = this.title;
        }
        this.logisticsService.vehiclePick({
            params: params
        }).subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.list = response.data.pageData;
                _this.totalCount = response.data.totalCount;
            }
        });
    };
    CarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car',
            template: __webpack_require__(/*! ./car.component.html */ "./src/app/admin/logistics/car/car.component.html"),
            styles: [__webpack_require__(/*! ./car.component.less */ "./src/app/admin/logistics/car/car.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_share_restServices_logistics_service__WEBPACK_IMPORTED_MODULE_3__["LogisticsService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            src_app_share_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "./src/app/admin/logistics/food/food.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/logistics/food/food.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"list-box\">\n    <div class=\"search clear\" style=\"padding:20px;\">\n      <div>\n        <div class=\"chaxun\">\n          <span>用餐人姓名</span>\n          <input nz-input [(ngModel)]=\"title\" placeholder=\"查询标题\" >\n        </div>\n        <div class=\"chaxun\">\n          <span>更新时间</span>\n          <nz-range-picker [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" nzShowTime></nz-range-picker>\n        </div>\n        <div class=\"chaxun\">\n          <span>状态</span>\n          <nz-select style=\"width: 120px;\"  nzAllowClear nzPlaceHolder=\"状态\">\n            <nz-option nzValue=\"jack\" nzLabel=\"Jack\"></nz-option>\n            <nz-option nzValue=\"lucy\" nzLabel=\"Lucy\"></nz-option>\n            <nz-option nzValue=\"disabled\" nzLabel=\"Disabled\" nzDisabled></nz-option>\n          </nz-select>\n        </div>\n        <div class=\"chaxun\">\n          <button nz-button nzType=\"chaxun\" (click)=\"getList()\">查询</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"table-head\">\n      <div class=\"head-h2\">\n        <span>投诉列表</span>\n      </div>\n      <!-- <div class=\"btn-box\">\n        <button nz-button nzType=\"tianjia\" routerLink=\"./add\">新增强军要闻</button>\n      </div> -->\n    </div>\n    <div class=\"table-box\">\n      <nz-table #basicTable \n        [nzData]=\"list\" [nzFrontPagination]=\"false\"\n        [nzPageIndex]=\"pageNum\"\n        [nzTotal]=\"totalCount\"\n        [nzPageSize]=\"pageSize\"\n        (nzPageIndexChange)=\"getList()\">\n        <!-- <nz-table #basicTable [nzData]=\"list\" [nzShowPagination]=\"false\"> -->\n          <thead>\n            <tr>\n              <th>序号</th>\n              <th>用餐人姓名</th>\n              <th>身份证号</th>\n              <th>联系电话</th>\n              <th>工作单位</th>\n              <th>用餐人数</th>\n              <th>用餐时间</th>\n              <th>备注</th>\n              <th>操作</th>\n            </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let data of list let i= index\">\n              <td>{{i}}</td>\n              <td>{{data.name}}</td>\n              <td>{{data.idnum}}</td>\n              <td>{{data.phone}}</td>\n              <td>{{data.workers}}</td>\n              <td>{{data.eatsCount}}</td>\n              <td>{{data.eatTime}}</td>\n              <td>{{data.remark}}</td>\n              <td>\n                <a *ngIf=\"data.status==0\" class=\"op\" (click)=\"click(data)\">未处理</a>\n                <span *ngIf=\"data.status==1\" style=\"color:#a0a0a0\">已处理</span>\n              </td>\n            </tr>\n          </tbody>\n      </nz-table>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/logistics/food/food.component.less":
/*!**********************************************************!*\
  !*** ./src/app/admin/logistics/food/food.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-box {\n  height: 100%;\n}\n.list-box .search {\n  margin-bottom: 20px;\n  width: 100%;\n  background-color: white;\n  padding: 20px 0;\n}\n.list-box .search > div {\n  width: 1200px;\n  margin: 0 auto;\n}\n.list-box .search .chaxun {\n  margin-right: 20px;\n  float: left;\n}\n.list-box .search .chaxun:last-child {\n  margin-left: 50px;\n}\n.list-box .search .chaxun > span {\n  margin-right: 6px;\n}\n.list-box .search .chaxun input {\n  width: 160px;\n}\n.list-box .table-head {\n  position: relative;\n  width: 95%;\n  background-color: white;\n  margin: 0 auto;\n  height: 50px;\n  bottom: 3px;\n}\n.list-box .table-head .head-h2 {\n  padding-left: 20px;\n  line-height: 50px;\n}\n.list-box .table-head .head-h2 span {\n  font-weight: bold;\n  font-size: 16px;\n}\n.list-box .table-head .btn-box {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n.list-box .table-box {\n  width: 95%;\n  margin: 0 auto;\n  background: #fff;\n  padding: 20px;\n  min-height: 400px;\n}\n.box {\n  height: 100%;\n  display: flex;\n}\n.box .left {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n}\n.box .left .head {\n  height: 50px;\n  background-color: rgba(110, 110, 202, 0.1);\n  color: #333333;\n  line-height: 50px;\n  text-indent: 40px;\n  font-size: 18px;\n}\n.box .left .town-list {\n  padding: 0 20px;\n  height: 100%;\n}\n.box .left .town-list .village-list {\n  background-color: #fafafa;\n}\n.box .left .town-list .village-list .click-item {\n  height: 32px;\n  line-height: 32px;\n  text-indent: 35px;\n  border-color: #eee;\n}\n.box .left .town-list .click-item {\n  cursor: pointer;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 25px;\n  border-bottom: 1px solid #dfdfdf;\n}\n.box .list-box {\n  flex: 1;\n}\n.btn-box > a,\n.btn-box button {\n  margin: 0 10px;\n}\n.op {\n  color: #CF2323;\n  margin: 0 6px;\n}\n"

/***/ }),

/***/ "./src/app/admin/logistics/food/food.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/logistics/food/food.component.ts ***!
  \********************************************************/
/*! exports provided: FoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodComponent", function() { return FoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var src_app_share_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/session.service */ "./src/app/share/services/session.service.ts");
/* harmony import */ var src_app_share_restServices_logistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/restServices/logistics.service */ "./src/app/share/restServices/logistics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodComponent = /** @class */ (function () {
    function FoodComponent(logisticsService, _message, sessionService) {
        this.logisticsService = logisticsService;
        this._message = _message;
        this.sessionService = sessionService;
        this.dateRange = [];
        this.list = [];
        this.title = "";
        this.startTime = null;
        this.endTime = null;
        this.pageNum = 1;
        this.totalCount = 0;
        this.pageSize = 10;
    }
    FoodComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    FoodComponent.prototype.onChange = function (e) {
        if (e.length) {
            this.startTime = e[0].getTime();
            this.endTime = e[1].getTime();
        }
        else {
            this.startTime = null;
            this.endTime = null;
        }
    };
    FoodComponent.prototype.click = function (d) {
        var _this = this;
        var data = JSON.parse(JSON.stringify(d));
        data.status = 1;
        this.logisticsService.orderingMealsSaveOrUpdate({
            data: data
        }).subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.getList();
            }
        });
    };
    FoodComponent.prototype.getList = function () {
        var _this = this;
        var params = {
            // endTime:"",
            // startTime:"",
            // departmentId:"",
            name: "",
            pageNumber: this.pageNum,
            pageSize: this.pageSize,
        };
        if (this.endTime) {
            params["vehicleEndTime"] = this.endTime;
        }
        if (this.startTime) {
            params["vehicleStartTime"] = this.startTime;
        }
        if (this.title) {
            params.name = this.title;
        }
        this.logisticsService.orderingMeals({
            params: params
        }).subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.list = response.data.pageData;
                _this.totalCount = response.data.totalCount;
            }
        });
    };
    FoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food',
            template: __webpack_require__(/*! ./food.component.html */ "./src/app/admin/logistics/food/food.component.html"),
            styles: [__webpack_require__(/*! ./food.component.less */ "./src/app/admin/logistics/food/food.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_share_restServices_logistics_service__WEBPACK_IMPORTED_MODULE_3__["LogisticsService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            src_app_share_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], FoodComponent);
    return FoodComponent;
}());



/***/ }),

/***/ "./src/app/admin/logistics/logistics.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/logistics/logistics.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, LogisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticsModule", function() { return LogisticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room/room.component */ "./src/app/admin/logistics/room/room.component.ts");
/* harmony import */ var _car_car_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car/car.component */ "./src/app/admin/logistics/car/car.component.ts");
/* harmony import */ var _food_food_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food/food.component */ "./src/app/admin/logistics/food/food.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/permission-guard.service */ "./src/app/share/services/permission-guard.service.ts");
/* harmony import */ var src_app_share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/share.module */ "./src/app/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'equipment',
        component: _room_room_component__WEBPACK_IMPORTED_MODULE_1__["RoomComponent"],
        data: {
            name: '客房预定',
            roles: [1001],
            menu: true
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'car',
        component: _car_car_component__WEBPACK_IMPORTED_MODULE_2__["CarComponent"],
        data: {
            name: '车辆接送',
            roles: [1001],
            menu: true
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'bids',
        component: _food_food_component__WEBPACK_IMPORTED_MODULE_3__["FoodComponent"],
        data: {
            name: '网上订餐',
            roles: [1001],
            menu: true
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    }
];
var LogisticsModule = /** @class */ (function () {
    function LogisticsModule() {
    }
    LogisticsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                src_app_share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_room_room_component__WEBPACK_IMPORTED_MODULE_1__["RoomComponent"], _car_car_component__WEBPACK_IMPORTED_MODULE_2__["CarComponent"], _food_food_component__WEBPACK_IMPORTED_MODULE_3__["FoodComponent"]]
        })
    ], LogisticsModule);
    return LogisticsModule;
}());



/***/ }),

/***/ "./src/app/admin/logistics/room/room.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/logistics/room/room.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"list-box\">\n    <div class=\"search clear\" style=\"padding:20px;\">\n      <div>\n        <div class=\"chaxun\">\n          <span>入住人姓名</span>\n          <input nz-input [(ngModel)]=\"title\" placeholder=\"查询标题\" >\n        </div>\n        <div class=\"chaxun\">\n          <span>更新时间</span>\n          <nz-range-picker [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" nzShowTime></nz-range-picker>\n        </div>\n        <div class=\"chaxun\">\n          <span>状态</span>\n          <nz-select style=\"width: 120px;\"  nzAllowClear nzPlaceHolder=\"状态\">\n            <nz-option nzValue=\"jack\" nzLabel=\"Jack\"></nz-option>\n            <nz-option nzValue=\"lucy\" nzLabel=\"Lucy\"></nz-option>\n            <nz-option nzValue=\"disabled\" nzLabel=\"Disabled\" nzDisabled></nz-option>\n          </nz-select>\n        </div>\n        <div class=\"chaxun\">\n          <button nz-button nzType=\"chaxun\" (click)=\"getList()\">查询</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"table-head\">\n      <div class=\"head-h2\">\n        <span>投诉列表</span>\n      </div>\n      <!-- <div class=\"btn-box\">\n        <button nz-button nzType=\"tianjia\" routerLink=\"./add\">新增强军要闻</button>\n      </div> -->\n    </div>\n    <div class=\"table-box\">\n      <nz-table #basicTable \n        [nzData]=\"list\" [nzFrontPagination]=\"false\"\n        [nzPageIndex]=\"pageNum\"\n        [nzTotal]=\"totalCount\"\n        [nzPageSize]=\"pageSize\"\n        (nzPageIndexChange)=\"getList()\">\n        <!-- <nz-table #basicTable [nzData]=\"list\" [nzShowPagination]=\"false\"> -->\n          <thead>\n            <tr>\n              <th>序号</th>\n              <th>入住人姓名</th>\n              <th>身份证号</th>\n              <th>联系电话</th>\n              <th>工作单位</th>\n              <th>入住人数</th>\n              <th>入住时间</th>\n              <th>备注</th>\n              <th>操作</th>\n            </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let data of list let i= index\">\n              <td>{{i}}</td>\n              <td>{{data.name}}</td>\n              <td>{{data.idnum}}</td>\n              <td>{{data.phone}}</td>\n              <td>{{data.workers}}</td>\n              <td>{{data.persons}}</td>\n              <td>{{data.livingTime+'到'+data.leavingDate}}</td>\n              <td>{{data.remark}}</td>\n              <td>\n                <a *ngIf=\"data.status==0\" class=\"op\" (click)=\"click(data)\">未处理</a>\n                <span *ngIf=\"data.status==1\" style=\"color:#a0a0a0\">已处理</span>\n              </td>\n            </tr>\n          </tbody>\n      </nz-table>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/logistics/room/room.component.less":
/*!**********************************************************!*\
  !*** ./src/app/admin/logistics/room/room.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-box {\n  height: 100%;\n}\n.list-box .search {\n  margin-bottom: 20px;\n  width: 100%;\n  background-color: white;\n  padding: 20px 0;\n}\n.list-box .search > div {\n  width: 1200px;\n  margin: 0 auto;\n}\n.list-box .search .chaxun {\n  margin-right: 20px;\n  float: left;\n}\n.list-box .search .chaxun:last-child {\n  margin-left: 50px;\n}\n.list-box .search .chaxun > span {\n  margin-right: 6px;\n}\n.list-box .search .chaxun input {\n  width: 160px;\n}\n.list-box .table-head {\n  position: relative;\n  width: 95%;\n  background-color: white;\n  margin: 0 auto;\n  height: 50px;\n  bottom: 3px;\n}\n.list-box .table-head .head-h2 {\n  padding-left: 20px;\n  line-height: 50px;\n}\n.list-box .table-head .head-h2 span {\n  font-weight: bold;\n  font-size: 16px;\n}\n.list-box .table-head .btn-box {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n.list-box .table-box {\n  width: 95%;\n  margin: 0 auto;\n  background: #fff;\n  padding: 20px;\n  min-height: 400px;\n}\n.box {\n  height: 100%;\n  display: flex;\n}\n.box .left {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n}\n.box .left .head {\n  height: 50px;\n  background-color: rgba(110, 110, 202, 0.1);\n  color: #333333;\n  line-height: 50px;\n  text-indent: 40px;\n  font-size: 18px;\n}\n.box .left .town-list {\n  padding: 0 20px;\n  height: 100%;\n}\n.box .left .town-list .village-list {\n  background-color: #fafafa;\n}\n.box .left .town-list .village-list .click-item {\n  height: 32px;\n  line-height: 32px;\n  text-indent: 35px;\n  border-color: #eee;\n}\n.box .left .town-list .click-item {\n  cursor: pointer;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 25px;\n  border-bottom: 1px solid #dfdfdf;\n}\n.box .list-box {\n  flex: 1;\n}\n.btn-box > a,\n.btn-box button {\n  margin: 0 10px;\n}\n.op {\n  color: #CF2323;\n  margin: 0 6px;\n}\n"

/***/ }),

/***/ "./src/app/admin/logistics/room/room.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/logistics/room/room.component.ts ***!
  \********************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var src_app_share_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/services/session.service */ "./src/app/share/services/session.service.ts");
/* harmony import */ var src_app_share_restServices_logistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/restServices/logistics.service */ "./src/app/share/restServices/logistics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomComponent = /** @class */ (function () {
    function RoomComponent(logisticsService, _message, sessionService) {
        this.logisticsService = logisticsService;
        this._message = _message;
        this.sessionService = sessionService;
        this.dateRange = [];
        this.list = [];
        this.title = "";
        this.startTime = null;
        this.endTime = null;
        this.pageNum = 1;
        this.totalCount = 0;
        this.pageSize = 10;
    }
    RoomComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    RoomComponent.prototype.onChange = function (e) {
        if (e.length) {
            this.startTime = e[0].getTime();
            this.endTime = e[1].getTime();
        }
        else {
            this.startTime = null;
            this.endTime = null;
        }
    };
    RoomComponent.prototype.click = function (d) {
        var _this = this;
        var data = JSON.parse(JSON.stringify(d));
        data.status = 1;
        this.logisticsService.roomReservationSaveOrUpdate({
            data: data
        }).subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.getList();
            }
        });
    };
    RoomComponent.prototype.getList = function () {
        var _this = this;
        var params = {
            // endTime:"",
            // startTime:"",
            // departmentId:"",
            name: "",
            pageNumber: this.pageNum,
            pageSize: this.pageSize,
        };
        if (this.endTime) {
            params["vehicleEndTime"] = this.endTime;
        }
        if (this.startTime) {
            params["vehicleStartTime"] = this.startTime;
        }
        if (this.title) {
            params.name = this.title;
        }
        this.logisticsService.roomReservation({
            params: params
        }).subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.list = response.data.pageData;
                _this.totalCount = response.data.totalCount;
            }
        });
    };
    RoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/admin/logistics/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.less */ "./src/app/admin/logistics/room/room.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_share_restServices_logistics_service__WEBPACK_IMPORTED_MODULE_3__["LogisticsService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            src_app_share_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/share/restServices/logistics.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/share/restServices/logistics.service.ts ***!
  \*********************************************************/
/*! exports provided: LogisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticsService", function() { return LogisticsService; });
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




var LogisticsService = /** @class */ (function () {
    function LogisticsService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/:params1/:params2/:params3/:params4/:params5';
    }
    // roomReservation
    LogisticsService.prototype.roomReservation = function (data) {
        return data.observable;
    };
    // roomReservation/saveOrUpdate
    LogisticsService.prototype.roomReservationSaveOrUpdate = function (data) {
        return data.observable;
    };
    // orderingMeals
    LogisticsService.prototype.orderingMeals = function (data) {
        return data.observable;
    };
    // orderingMeals/saveOrUpdate
    LogisticsService.prototype.orderingMealsSaveOrUpdate = function (data) {
        return data.observable;
    };
    // vehiclePick
    LogisticsService.prototype.vehiclePick = function (data) {
        return data.observable;
    };
    // vehiclePickSaveOrUpdate
    LogisticsService.prototype.vehiclePickSaveOrUpdate = function (data) {
        return data.observable;
    };
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'roomReservation',
                params2: 'getAllByQuery'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LogisticsService.prototype, "roomReservation", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'roomReservation',
                params2: 'saveOrUpdate'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LogisticsService.prototype, "roomReservationSaveOrUpdate", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'orderingMeals',
                params2: 'getAllByQuery'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LogisticsService.prototype, "orderingMeals", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'orderingMeals',
                params2: 'saveOrUpdate'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LogisticsService.prototype, "orderingMealsSaveOrUpdate", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'vehiclePick',
                params2: 'getAllByQuery'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LogisticsService.prototype, "vehiclePick", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'vehiclePick',
                params2: 'saveOrUpdate'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LogisticsService.prototype, "vehiclePickSaveOrUpdate", null);
    LogisticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LogisticsService);
    return LogisticsService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module~logistics-logistics-module.js.map