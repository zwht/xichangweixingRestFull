(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module~infomation-infomation-module"],{

/***/ "./src/app/admin/infomation/bids/bids.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/infomation/bids/bids.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tou\">\n  <span>机构名称:</span>\n  <input style=\"width: 15%;margin-right: 15px;\" nz-input placeholder=\"请输入机构名称\" [(ngModel)]=\"name\">\n  <span>所在地区:</span>\n  <nz-select style=\"width: 8%;margin-right: 15px;\" [(ngModel)]=\"provinceNum\" nzAllowClear nzPlaceHolder=\"请选择省份\"\n  (ngModelChange)=\"getAdminDivision(2,provinceNum)\">\n  <nz-option *ngFor=\"let item of province\" [nzValue]=\"item.provinceCode\" [nzLabel]=\"item.provinceName\"></nz-option>\n</nz-select>\n  <nz-select style=\"width: 8%;margin-right: 15px;\" [(ngModel)]=\"cityNum\" nzAllowClear nzPlaceHolder=\"请选择城市\">\n    <nz-option *ngFor=\"let item of city\" [nzValue]=\"item.cityCode\" [nzLabel]=\"item.cityName\"></nz-option>\n  </nz-select>\n  <span>评级:</span>\n  <nz-select style=\"width: 15%;margin-right: 15px;\" [(ngModel)]=\"grade\" nzAllowClear nzPlaceHolder=\"请输入评级\">\n    <nz-option nzValue=\"\" nzLabel=\"全部\"></nz-option>\n    <nz-option nzValue=\"1\" nzLabel=\"一星\"></nz-option>\n    <nz-option nzValue=\"2\" nzLabel=\"两星\"></nz-option>\n    <nz-option nzValue=\"3\" nzLabel=\"三星\"></nz-option>\n    <nz-option nzValue=\"4\" nzLabel=\"四星\"></nz-option>\n    <nz-option nzValue=\"5\" nzLabel=\"五星\"></nz-option>\n  </nz-select>\n  <span>状态:</span>\n  <nz-select style=\"width: 15%;margin-right: 15px;\" [(ngModel)]=\"status\" nzPlaceHolder=\"请选择状态\">\n    <nz-option nzValue=\"\" nzLabel=\"全部\"></nz-option>\n    <nz-option nzValue=\"0\" nzLabel=\"停用\"></nz-option>\n    <nz-option nzValue=\"1\" nzLabel=\"正常\"></nz-option>\n  </nz-select>\n  <button nz-button nzType=\"primary\" style=\"float: right;\" (click)=\"getList()\">查询</button>\n</div>\n\n<div style=\"margin: 20px auto;width: 80%\">\n  <div style=\"overflow:auto\">\n    <div style=\"margin-bottom: 16px; float: right;\">\n      <span style=\"margin-right: 8px;\">您已选择{{checkedNumber}}项</span>\n      <button style=\"margin:0 10px\" nz-button [nzType]=\"'primary'\" [disabled]=\"disabledButton\" (click)=\"operateData()\">批量删除</button>\n      <button style=\"margin:0 10px\" nz-button (click)=\"goto('infomation/bids/add','add')\">新增投标机构</button>\n      <button style=\"margin:0 10px\" nz-button (click)=\"goto('infomation/bids/import','')\">导入投标机构</button>\n    </div>\n  </div>\n  <nz-table #rowSelectionTable [nzData]=\"dataSet\" [nzTotal]=\"totalCount\" [nzFrontPagination]=\"false\" [nzPageSize]=\"pageSize\"\n    [(nzPageIndex)]=\"pageNumber\" (nzPageIndexChange)=\"getList()\" (nzCurrentPageDataChange)=\"currentPageDataChange($event)\">\n    <thead>\n      <tr>\n        <th style=\"text-align: center\" nzShowCheckbox [(nzChecked)]=\"allChecked\" [nzIndeterminate]=\"indeterminate\"\n          (nzCheckedChange)=\"checkAll($event)\"></th>\n        <th style=\"text-align: center\">编号</th>\n        <th style=\"text-align: center\">机构名称</th>\n        <th style=\"text-align: center\">所在地区</th>\n        <th style=\"text-align: center\">评级</th>\n        <th style=\"text-align: center\">状态</th>\n        <th style=\"text-align: center\">操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of rowSelectionTable.data\">\n        <td style=\"text-align: center\" nzShowCheckbox [(nzChecked)]=\"data.checked\" (nzCheckedChange)=\"refreshStatus()\"></td>\n        <td style=\"text-align: center\">{{data.code}}</td>\n        <td style=\"text-align: center\">{{data.name}}</td>\n        <td style=\"text-align: center\">{{data.region.split(',')[1]}}</td>\n        <td style=\"text-align: center\">{{data.grade}}</td>\n        <td style=\"text-align: center\" *ngIf=\"data.status == 0\">停用</td>\n        <td style=\"text-align: center\" *ngIf=\"data.status == 1\">正常</td>\n        <td style=\"text-align: center\">\n          <button style=\"margin:0 2px\" nz-button nzType=\"default\" (click)=\"goto('infomation/bids/add',data.id)\">编辑</button>\n          <button style=\"margin:0 2px\" nz-button nzType=\"default\" (click)=\"operateData(data.id)\">删除</button>\n        </td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/admin/infomation/bids/bids.component.less":
/*!***********************************************************!*\
  !*** ./src/app/admin/infomation/bids/bids.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tou {\n  margin: 20px auto;\n  width: 80%;\n}\n.tou span {\n  margin: 0 10px;\n}\n"

/***/ }),

/***/ "./src/app/admin/infomation/bids/bids.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/infomation/bids/bids.component.ts ***!
  \*********************************************************/
/*! exports provided: BidsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidsComponent", function() { return BidsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_restServices_admin_division_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/restServices/admin-division.service */ "./src/app/share/restServices/admin-division.service.ts");
/* harmony import */ var _share_restServices_bids_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/restServices/bids.service */ "./src/app/share/restServices/bids.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BidsComponent = /** @class */ (function () {
    function BidsComponent(router, message, adminDivisionService, bidsService) {
        this.router = router;
        this.message = message;
        this.adminDivisionService = adminDivisionService;
        this.bidsService = bidsService;
        this.allChecked = false;
        this.disabledButton = true;
        this.checkedNumber = 0;
        this.displayData = [];
        this.dataSet = [];
        this.indeterminate = false;
        this.province = [];
        this.city = [];
        this.status = '';
        this.name = '';
        this.region = '';
        this.grade = '';
        this.pageNumber = 1; // 当前页数
        this.pageSize = 10; // 页面中每页数量
        this.totalCount = 0; // 总数据
        this.ids = []; // 删除id
    }
    BidsComponent.prototype.ngOnInit = function () {
        this.getList();
        this.getAdminDivision(1, '');
    };
    BidsComponent.prototype.getList = function () {
        var _this = this;
        this.bidsService['getAllByQuery']({
            params: {
                pageNumber: this.pageNumber,
                pageSize: this.pageSize,
                name: this.name,
                status: this.status,
                region: this.region,
                grade: this.grade
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.dataSet = response.data.pageData;
                _this.totalCount = response.data.totalCount;
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
        this.empty();
    };
    BidsComponent.prototype.getAdminDivision = function (level, id) {
        var _this = this;
        if (id == null) {
            this.city = [];
            this.cityNum = null;
            return;
        }
        this.adminDivisionService['list']({
            params: {
                params2: 1,
                params3: 9999
            },
            data: {
                provinceCode: id,
                level: level
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                if (level === 1) {
                    _this.province = response.data.pageData;
                }
                else {
                    _this.city = [];
                    _this.cityNum = null;
                    _this.city = response.data.pageData;
                }
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    BidsComponent.prototype.goto = function (add, id) {
        this.router.navigate(['admin/' + add + '/' + id]);
    };
    BidsComponent.prototype.operateData = function (id) {
        var _this = this;
        var ids = '';
        if (id) {
            ids = id;
        }
        else {
            for (var index = 0; index < this.displayData.length; index++) {
                if (this.displayData[index].checked) {
                    this.ids.push(this.displayData[index].id);
                    ids = this.ids.join(',');
                }
            }
        }
        this.bidsService['delete']({
            params: {
                ids: ids
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.message.create('success', '删除成功');
                _this.getList();
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    BidsComponent.prototype.currentPageDataChange = function (e) {
        this.displayData = e;
    };
    BidsComponent.prototype.checkAll = function (value) {
        this.displayData.forEach(function (data) { return data.checked = value; });
        this.refreshStatus();
    };
    BidsComponent.prototype.refreshStatus = function () {
        var allChecked = this.displayData.every(function (value) { return value.checked === true; });
        var allUnChecked = this.displayData.every(function (value) { return !value.checked; });
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
        this.disabledButton = !this.dataSet.some(function (value) { return value.checked; });
        this.checkedNumber = this.dataSet.filter(function (value) { return value.checked; }).length;
    };
    BidsComponent.prototype.empty = function () {
        if (this.disabledButton) {
            return;
        }
        this.dataSet.forEach(function (value) { return value.checked = false; });
        this.refreshStatus();
    };
    BidsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bids',
            template: __webpack_require__(/*! ./bids.component.html */ "./src/app/admin/infomation/bids/bids.component.html"),
            styles: [__webpack_require__(/*! ./bids.component.less */ "./src/app/admin/infomation/bids/bids.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _share_restServices_admin_division_service__WEBPACK_IMPORTED_MODULE_2__["AdminDivisionService"],
            _share_restServices_bids_service__WEBPACK_IMPORTED_MODULE_3__["BidsService"]])
    ], BidsComponent);
    return BidsComponent;
}());



/***/ }),

/***/ "./src/app/admin/infomation/bids/bigs-add/bigs-add.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/infomation/bids/bigs-add/bigs-add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin: 30px auto;\">\n  <div class=\"title\">{{title}}</div>\n  <div nz-row style=\"margin-bottom: 70px;\">\n    <div nz-col nzSpan=\"4\" class=\"ennn\">机构编号:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入机构编号\" [(ngModel)]=\"code\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">机构名称:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入机构名称\" [(ngModel)]=\"name\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">所在地区:</div>\n    <div nz-col nzSpan=\"10\" class=\"emmm\">\n      <nz-select style=\"width: 24%;margin-right: 2%\" [(ngModel)]=\"provinceNum\" nzAllowClear nzPlaceHolder=\"请选择省份\"\n        (ngModelChange)=\"getAdminDivision(2,provinceNum)\">\n        <nz-option *ngFor=\"let item of province\" [nzValue]=\"item.provinceCode\" [nzLabel]=\"item.provinceName\"></nz-option>\n      </nz-select>\n      <nz-select style=\"width: 24%;\" [(ngModel)]=\"cityNum\" nzAllowClear nzPlaceHolder=\"请选择城市\">\n        <nz-option *ngFor=\"let item of city\" [nzValue]=\"item.cityCode\" [nzLabel]=\"item.cityName\"></nz-option>\n      </nz-select>\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">详细地址:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入详细地址\" [(ngModel)]=\"address\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">统一社会信用代码:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <input nz-input placeholder=\"请输入统一社会信用代码\" [(ngModel)]=\"socialCreditCode\">\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">注册日期:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <nz-date-picker [(ngModel)]=\"registDate\"></nz-date-picker>\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">法人姓名</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <input nz-input placeholder=\"请输入法人姓名\" [(ngModel)]=\"legalPerson\">\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">法人身份证号:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入法人身份证号\" [(ngModel)]=\"legalPersonName\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">联系人姓名:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入联系人姓名\" [(ngModel)]=\"contactsUserName\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">联系人身份证号:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input style=\"width: 50%;\" nz-input placeholder=\"请输入联系人身份证号\" [(ngModel)]=\"contactsUseIdnum\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">联系人电话:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input style=\"width: 50%;\" nz-input placeholder=\"请输入联系人电话\" [(ngModel)]=\"phone\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">评级:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <nz-rate [(ngModel)]=\"grade\"></nz-rate>\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">投标机构logo:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <input (change)=\"fileChange($event)\" [(ngModel)]=\"images\" type=\"file\" id=\"upload_file1\" style=\"display: none\"\n        accept=\"image/*\" />\n      <div>\n        <button nz-button nzType=\"primary\" (click)=\"chooseType()\">点击上传图片</button>\n        <span *ngIf=\"imgName\" style=\"margin-left: 20px;\">已选择:{{imgName}}</span>\n        <div><img [src]=\"imgzs.src\" class=\"tupian\"></div>\n      </div>\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">备注:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <textarea rows=\"4\" nz-input [(ngModel)]=\"remark\" nzPlaceHolder=\"请输入备注\"></textarea>\n    </div>\n  </div>\n  <div class=\"baocun\">\n    <button nz-button nzType=\"primary\" (click)=\"tianjia()\">保存</button>\n    <button nz-button nzType=\"primary\" (click)=\"goto('infomation/bids','')\">取消</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/infomation/bids/bigs-add/bigs-add.component.less":
/*!************************************************************************!*\
  !*** ./src/app/admin/infomation/bids/bigs-add/bigs-add.component.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  font-size: xx-large;\n  margin: 50px;\n}\n.ennn {\n  text-align: end;\n  padding-right: 20px;\n  height: 40px;\n  line-height: 40px;\n  margin: 10px 0;\n}\n.emmm {\n  height: 40px;\n  margin: 10px 0px;\n  width: 70%;\n  padding: 4px 0;\n}\n.eaaa {\n  height: 40px;\n  margin: 10px 0px;\n  padding: 4px 0;\n}\n.baocun {\n  text-align: center;\n}\n.baocun button {\n  margin: 30px;\n}\n.tupian {\n  height: 200px;\n  width: 200px;\n  display: inline-block;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n"

/***/ }),

/***/ "./src/app/admin/infomation/bids/bigs-add/bigs-add.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/infomation/bids/bigs-add/bigs-add.component.ts ***!
  \**********************************************************************/
/*! exports provided: BigsAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigsAddComponent", function() { return BigsAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_restServices_admin_division_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../share/restServices/admin-division.service */ "./src/app/share/restServices/admin-division.service.ts");
/* harmony import */ var _share_restServices_bids_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../share/restServices/bids.service */ "./src/app/share/restServices/bids.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_restServices_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../share/restServices/file.service */ "./src/app/share/restServices/file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BigsAddComponent = /** @class */ (function () {
    function BigsAddComponent(router, route, bidsService, adminDivisionService, fileService, message) {
        this.router = router;
        this.route = route;
        this.bidsService = bidsService;
        this.adminDivisionService = adminDivisionService;
        this.fileService = fileService;
        this.message = message;
        this.id = '';
        this.title = '新增投标机构';
        this.code = ''; // 机构编号
        this.name = ''; // 机构名称
        this.images = '';
        this.provinceNum = null;
        this.cityNum = null;
        this.province = [];
        this.city = [];
        this.address = ''; // 详细地址
        this.socialCreditCode = ''; // 统一社会信用代码
        this.registDate = ''; // 注册日期
        this.legalPerson = ''; // 法人姓名
        this.legalPersonName = ''; // 请输入法人身份证号
        this.contactsUserName = ''; // 联系人姓名
        this.contactsUseIdnum = ''; // 联系人身份证号
        this.phone = '';
        this.grade = 0; // 评级
        this.remark = ''; // 备注
        this.region = '';
        this.imgzs = { src: '../../../../../assets/images/moren/moren.jpg' }; // 图片展示
        this.imgName = null; // 图片名字
        this.fileUrl = ''; // 图片
    }
    BigsAddComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.whetherAdd();
    };
    BigsAddComponent.prototype.fileChange = function (e) {
        var _this = this;
        var file = e.target.files[0];
        var formData = new FormData();
        formData.append(file.name, file);
        this.fileService['uploadHead']({
            data: formData
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.message.create('Success', '添加成功');
                _this.imgName = file.name;
                _this.fileUrl = response.data.fileUrl;
                var that_1 = _this;
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    file.src = this.result;
                    that_1.imgzs = file;
                };
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    BigsAddComponent.prototype.whetherAdd = function () {
        if (this.id === 'add') {
            this.getAdminDivision(1, '');
            return;
        }
        else {
            this.title = '修改投标机构';
            this.getByID();
        }
    };
    BigsAddComponent.prototype.filedown = function (a) {
        this.fileUrl = a;
        this.imgzs.src = '/v1/file/downloadHead?fileUrl=' + a.replace(/\//, '%2f');
    };
    BigsAddComponent.prototype.getByID = function () {
        var _this = this;
        this.bidsService['getById']({
            params: {
                params2: this.id
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.code = response.data.code; // 机构编号
                _this.name = response.data.name; // 机构名称
                _this.region = response.data.region;
                _this.buyouya(_this.region.split(',')[0]);
                _this.address = response.data.address; // 详细地址
                _this.socialCreditCode = response.data.socialCreditCode; // 统一社会信用代码
                _this.registDate = response.data.registDate; // 注册日期
                _this.legalPerson = response.data.legalPerson; // 法人姓名
                _this.legalPersonName = response.data.legalPersonName; // 请输入法人身份证号
                _this.contactsUserName = response.data.contactsUserName; // 联系人姓名
                _this.contactsUseIdnum = response.data.contactsUseIdnum; // 联系人身份证号
                _this.phone = response.data.phone;
                _this.grade = response.data.grade; // 评级
                _this.remark = response.data.remark; // 备注
                if (response.data.logo !== '') {
                    _this.filedown(response.data.logo);
                }
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    BigsAddComponent.prototype.getAdminDivision = function (level, id) {
        var _this = this;
        if (id == null) {
            this.city = [];
            this.cityNum = null;
            return;
        }
        this.adminDivisionService['list']({
            params: {
                params2: 1,
                params3: 9999
            },
            data: {
                provinceCode: id,
                level: level
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                if (level === 1) {
                    _this.province = response.data.pageData;
                }
                else {
                    _this.city = [];
                    _this.cityNum = null;
                    _this.city = response.data.pageData;
                }
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    BigsAddComponent.prototype.buyouya = function (id) {
        var _this = this;
        if (id === '') {
            return;
        }
        this.adminDivisionService['list']({
            params: {
                params2: 1,
                params3: 9999
            },
            data: {
                cityCode: id,
                level: 2
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                // this.provinceNum = response.data.pageData[0].provinceCode;
                // this.cityNum = response.data.pageData[0].cityCode;
                _this.adminDivisionService['list']({
                    params: {
                        params2: 1,
                        params3: 9999
                    },
                    data: {
                        level: 1
                    }
                })
                    .subscribe(function (res) {
                    if (res.errorCode === 0) {
                        _this.province = res.data.pageData;
                        _this.provinceNum = response.data.pageData[0].provinceCode;
                        // setTimeout(() => {
                        //     this.cityNum = response.data.pageData[0].cityCode;
                        // }, 1000);
                        _this.adminDivisionService['list']({
                            params: {
                                params2: 1,
                                params3: 9999
                            },
                            data: {
                                level: 2
                            }
                        })
                            .subscribe(function (r) {
                            _this.city = r.data.pageData;
                            _this.cityNum = response.data.pageData[0].cityCode;
                        });
                    }
                    else {
                        _this.message.create('error', '错误!错误代码' + res.errorCode);
                    }
                });
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    BigsAddComponent.prototype.chooseType = function () {
        document.getElementById('upload_file1').click();
    };
    BigsAddComponent.prototype.tianjia = function () {
        var _this = this;
        if (this.jiancha() === 1) {
            return;
        }
        var idddd;
        if (this.id === 'add') {
            idddd = '';
        }
        else {
            idddd = this.id;
        }
        var cityName = this.city.filter(function (x) { return x.cityCode === _this.cityNum; })[0].cityName;
        var provinceName = this.province.filter(function (x) { return x.provinceCode === _this.provinceNum; })[0].provinceName;
        this.region = this.cityNum + ',' + provinceName + cityName;
        this.bidsService['saveOrUpdate']({
            data: {
                code: this.code,
                name: this.name,
                region: this.region,
                address: this.address,
                socialCreditCode: this.socialCreditCode,
                registDate: this.registDate,
                legalPerson: this.legalPerson,
                legalPersonName: this.legalPersonName,
                contactsUserName: this.contactsUserName,
                contactsUseIdnum: this.contactsUseIdnum,
                phone: this.phone,
                grade: this.grade,
                remark: this.remark,
                id: idddd,
                logo: this.fileUrl,
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                if (_this.id === 'add') {
                    _this.message.create('Success', '添加成功');
                }
                else {
                    _this.message.create('Success', '修改成功');
                }
                _this.goto('infomation/bids', '');
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    BigsAddComponent.prototype.jiancha = function () {
        if (this.code === '') {
            this.message.create('error', '请输入机构编号');
            return 1;
        }
        if (this.name === '') {
            this.message.create('error', '请输入供应商名称');
            return 1;
        }
        if (this.provinceNum === null) {
            this.message.create('error', '请选择省份');
            return 1;
        }
        if (this.cityNum === null) {
            this.message.create('error', '请选择城市');
            return 1;
        }
        if (this.address === '') {
            this.message.create('error', '请输入详细地址');
            return 1;
        }
        if (this.socialCreditCode === '') {
            this.message.create('error', '请输入统一社会信用代码');
            return 1;
        }
        if (this.registDate === '') {
            this.message.create('error', '请选择注册日期');
            return 1;
        }
        if (this.legalPerson === '') {
            this.message.create('error', '请输入法人姓名');
            return 1;
        }
        if (this.legalPersonName === '') {
            this.message.create('error', '请输入法人身份证');
            return 1;
        }
        if (this.contactsUserName === '') {
            this.message.create('error', '请输入联系人姓名');
            return 1;
        }
        if (this.contactsUseIdnum === '') {
            this.message.create('error', '请输入联系人身份证');
            return 1;
        }
        if (this.phone === '') {
            this.message.create('error', '请输入联系电话');
            return 1;
        }
        if (this.remark === '') {
            this.message.create('error', '请输入备注');
            return 1;
        }
        return 0;
    };
    BigsAddComponent.prototype.goto = function (add, id) {
        this.router.navigate(['admin/' + add + '/' + id]);
    };
    BigsAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bigs-add',
            template: __webpack_require__(/*! ./bigs-add.component.html */ "./src/app/admin/infomation/bids/bigs-add/bigs-add.component.html"),
            styles: [__webpack_require__(/*! ./bigs-add.component.less */ "./src/app/admin/infomation/bids/bigs-add/bigs-add.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _share_restServices_bids_service__WEBPACK_IMPORTED_MODULE_2__["BidsService"],
            _share_restServices_admin_division_service__WEBPACK_IMPORTED_MODULE_1__["AdminDivisionService"],
            _share_restServices_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], BigsAddComponent);
    return BigsAddComponent;
}());



/***/ }),

/***/ "./src/app/admin/infomation/equipment/add/add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/infomation/equipment/add/add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin: 30px auto;\">\n  <div class=\"title\">{{title}}</div>\n  <div nz-row style=\"margin-bottom: 70px;\">\n    <div nz-col nzSpan=\"4\" class=\"ennn\">设备编号:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入设备编号\" [(ngModel)]=\"code\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">设备型号:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入设备型号\" [(ngModel)]=\"model\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">设备名称:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入设备名称\" [(ngModel)]=\"name\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">规格:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入规格\" [(ngModel)]=\"format\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">包装规格</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <input nz-input placeholder=\"请输入包装规格\" [(ngModel)]=\"packageFormat\">\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">计量单位</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <input nz-input placeholder=\"请输入计量单位\" [(ngModel)]=\"measurement\">\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">标准或批号:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入标准或批号\" [(ngModel)]=\"standard\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">采购负责人:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入采购负责人\" [(ngModel)]=\"leadingPerson\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">生产日期:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <nz-date-picker [(ngModel)]=\"manufactureDate\"></nz-date-picker>\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">有效期:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <nz-date-picker [(ngModel)]=\"validity\"></nz-date-picker>\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">供应商:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <nz-select style=\"width: 50%;\" [(ngModel)]=\"supplierNum\" nzAllowClear nzPlaceHolder=\"请选择供应商\">\n        <nz-option *ngFor=\"let item of supplier;let i = index\" [nzValue]=\"i\" [nzLabel]=\"item.name\"></nz-option>\n      </nz-select>\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">产品图片:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <input (change)=\"fileChange($event)\" [(ngModel)]=\"images\" type=\"file\" id=\"upload_file1\" style=\"display: none\"\n        accept=\"image/*\" />\n      <div>\n        <button nz-button nzType=\"primary\" (click)=\"chooseType()\">点击上传图片</button>\n        <span *ngIf=\"imgName\" style=\"margin-left: 20px;\">已选择:{{imgName}}</span>\n        <img [src]=\"imgzs.src\" class=\"tupian\">\n      </div>\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">备注:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <textarea rows=\"4\" nz-input [(ngModel)]=\"remark\" nzPlaceHolder=\"请输入备注\"></textarea>\n    </div>\n  </div>\n  <div class=\"baocun\">\n    <button nz-button nzType=\"primary\" (click)=\"tianjia()\">保存</button>\n    <button nz-button nzType=\"primary\" (click)=\"goto('infomation/equipment','')\">取消</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/infomation/equipment/add/add.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/admin/infomation/equipment/add/add.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  font-size: xx-large;\n  margin: 50px;\n}\n.ennn {\n  text-align: end;\n  padding-right: 20px;\n  height: 40px;\n  line-height: 40px;\n  margin: 10px 0;\n}\n.emmm {\n  height: 40px;\n  margin: 10px 0px;\n  width: 70%;\n  padding: 4px 0;\n}\n.baocun {\n  text-align: center;\n}\n.baocun button {\n  margin: 30px;\n}\n.tupian {\n  height: 200px;\n  width: 200px;\n  display: inline-block;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n"

/***/ }),

/***/ "./src/app/admin/infomation/equipment/add/add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/infomation/equipment/add/add.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_restServices_equipment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../share/restServices/equipment.service */ "./src/app/share/restServices/equipment.service.ts");
/* harmony import */ var _share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../share/restServices/supplier.service */ "./src/app/share/restServices/supplier.service.ts");
/* harmony import */ var _share_restServices_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../share/restServices/file.service */ "./src/app/share/restServices/file.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddComponent = /** @class */ (function () {
    function AddComponent(router, message, equipmentService, fileService, route, supplierService) {
        this.router = router;
        this.message = message;
        this.equipmentService = equipmentService;
        this.fileService = fileService;
        this.route = route;
        this.supplierService = supplierService;
        this.title = '新增设备资产';
        this.id = ''; // id
        this.code = ''; // 设备编号
        this.name = ''; // 设备名称
        this.format = ''; // 规格
        this.packageFormat = ''; // 包装规格
        this.measurement = ''; // 计量单位
        this.standard = ''; // 标准或批号
        this.manufactureDate = null; // 生产日期
        this.validity = null; // 有效期
        this.supplier = [{
                id: '',
                name: '' // 供应商名字
            }];
        this.model = ''; // 型号
        this.leadingPerson = ''; // 采购负责人
        this.images = ''; // 图片
        this.remark = ''; // 备注
        this.imgName = null; // 图片名字
        this.fileUrl = ''; // 图片
        this.imgzs = { src: '../../../../../assets/images/moren/moren.jpg' }; // 图片展示
    }
    AddComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getSupplier();
        this.whetherAdd();
    };
    AddComponent.prototype.whetherAdd = function () {
        if (this.id === 'add') {
            return;
        }
        else {
            this.title = '修改设备资产';
        }
    };
    AddComponent.prototype.chooseType = function () {
        document.getElementById('upload_file1').click();
    };
    AddComponent.prototype.fileChange = function (e) {
        var _this = this;
        var file = e.target.files[0];
        var formData = new FormData();
        formData.append(file.name, file);
        this.fileService['uploadHead']({
            data: formData
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.message.create('Success', '添加成功');
                _this.imgName = file.name;
                _this.fileUrl = response.data.fileUrl;
                var that_1 = _this;
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    file.src = this.result;
                    that_1.imgzs = file;
                };
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    AddComponent.prototype.filedown = function (a) {
        this.fileUrl = a;
        this.imgzs.src = '/v1/file/downloadHead?fileUrl=' + a.replace(/\//, '%2f');
    };
    AddComponent.prototype.getByID = function () {
        var _this = this;
        this.equipmentService['getById']({
            params: {
                params2: this.id
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.code = response.data.code;
                _this.name = response.data.name;
                _this.format = response.data.format;
                _this.packageFormat = response.data.packageFormat;
                _this.measurement = response.data.measurement;
                _this.standard = response.data.standard;
                _this.manufactureDate = response.data.manufactureDate;
                _this.validity = response.data.validity;
                _this.leadingPerson = response.data.leadingPerson;
                _this.model = response.data.model;
                for (var index = 0; index < _this.supplier.length; index++) {
                    if (_this.supplier[index].id === response.data.supplierId) {
                        _this.supplierNum = index;
                    }
                }
                _this.remark = response.data.remark;
                if (response.data.images !== '') {
                    _this.filedown(response.data.images);
                }
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    AddComponent.prototype.getSupplier = function () {
        var _this = this;
        this.supplierService['getAllByQuery']({
            params: {
                pageNumber: 1,
                pageSize: 9999
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.supplier = response.data.pageData;
                if (_this.id !== 'add') {
                    _this.getByID();
                }
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    AddComponent.prototype.tianjia = function () {
        var _this = this;
        if (this.jiancha() === 1) {
            return;
        }
        var idddd;
        if (this.id === 'add') {
            idddd = '';
        }
        else {
            idddd = this.id;
        }
        this.equipmentService['saveOrUpdate']({
            data: {
                equipType: 1,
                equipTypeName: '三蛋',
                code: this.code,
                name: this.name,
                format: this.format,
                packageFormat: this.packageFormat,
                measurement: this.measurement,
                standard: this.standard,
                manufactureDate: this.manufactureDate,
                validity: this.validity,
                supplierId: this.supplier[this.supplierNum].id,
                supplierName: this.supplier[this.supplierNum].name,
                images: this.fileUrl,
                remark: this.remark,
                model: this.model,
                leadingPerson: this.leadingPerson,
                id: idddd
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                if (_this.id === 'add') {
                    _this.message.create('Success', '添加成功');
                }
                else {
                    _this.message.create('Success', '修改成功');
                }
                _this.goto('infomation/equipment', '');
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    AddComponent.prototype.jiancha = function () {
        if (this.code === '') {
            this.message.create('error', '请输入设备编号');
            return 1;
        }
        if (this.model === '') {
            this.message.create('error', '请输入设备型号');
            return 1;
        }
        if (this.name === '') {
            this.message.create('error', '请输入设备名称');
            return 1;
        }
        if (this.format === '') {
            this.message.create('error', '请输入规格');
            return 1;
        }
        if (this.packageFormat === '') {
            this.message.create('error', '请输入包装规格');
            return 1;
        }
        if (this.measurement === '') {
            this.message.create('error', '请输入计量单位');
            return 1;
        }
        if (this.standard === '') {
            this.message.create('error', '请输入标准或批号');
            return 1;
        }
        if (this.leadingPerson === '') {
            this.message.create('error', '采购负责人');
            return 1;
        }
        if (this.manufactureDate === '') {
            this.message.create('error', '请选择生产日期');
            return 1;
        }
        if (this.validity === '') {
            this.message.create('error', '请选择有效期');
            return 1;
        }
        if (this.supplierNum === null) {
            this.message.create('error', '请选择供应商');
            return 1;
        }
        if (this.remark === '') {
            this.message.create('error', '请输入备注');
            return 1;
        }
        return 0;
    };
    AddComponent.prototype.goto = function (add, id) {
        this.router.navigate(['admin/' + add + '/' + id]);
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/admin/infomation/equipment/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.less */ "./src/app/admin/infomation/equipment/add/add.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            _share_restServices_equipment_service__WEBPACK_IMPORTED_MODULE_2__["EquipmentService"],
            _share_restServices_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/admin/infomation/equipment/equipment.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/infomation/equipment/equipment.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tou\">\n  <span>设备名称:</span>\n  <input style=\"width: 15%;margin-right: 15px;\" nz-input placeholder=\"请输入设备名称\" [(ngModel)]=\"name\">\n  <span>供应商:</span>\n  <input style=\"width: 15%;margin-right: 15px;\" nz-input placeholder=\"请输入供应商\" [(ngModel)]=\"supplierName\">\n  <span>采购负责人:</span>\n  <input style=\"width: 15%;margin-right: 15px;\" nz-input placeholder=\"请输入采购负责人\" [(ngModel)]=\"leadingPerson\">\n  <span>状态:</span>\n  <nz-select style=\"width: 15%;margin-right: 15px;\" [(ngModel)]=\"status\" nzPlaceHolder=\"Choose\">\n    <nz-option nzValue=\"\" nzLabel=\"全部\"></nz-option>\n    <nz-option nzValue=\"0\" nzLabel=\"库存保管\"></nz-option>\n    <nz-option nzValue=\"1\" nzLabel=\"使用中\"></nz-option>\n    <nz-option nzValue=\"2\" nzLabel=\"已使用\"></nz-option>\n    <nz-option nzValue=\"3\" nzLabel=\"已废弃\"></nz-option>\n  </nz-select>\n  <button nz-button nzType=\"primary\" style=\"float: right;\" (click)=\"fileChange()\">查询</button>\n</div>\n\n<div style=\"margin: 20px auto;width: 80%\">\n  <div style=\"overflow:auto\">\n    <div style=\"margin-bottom: 16px; float: right;\">\n      <span style=\"margin-right: 8px;\">您已选择{{checkedNumber}}项</span>\n      <button style=\"margin:0 10px\" nz-button [nzType]=\"'primary'\" [disabled]=\"disabledButton\" (click)=\"operateData()\">批量删除</button>\n      <button style=\"margin:0 10px\" nz-button (click)=\"goto('infomation/equipment/add','add')\">新增设备</button>\n      <button style=\"margin:0 10px\" nz-button (click)=\"goto('infomation/equipment/import','')\">导入设备</button>\n    </div>\n  </div>\n  <nz-table #rowSelectionTable [nzData]=\"dataSet\" [nzTotal]=\"totalCount\" [nzFrontPagination]=\"false\" [nzPageSize]=\"pageSize\" [(nzPageIndex)]=\"pageNumber\" (nzPageIndexChange)=\"fileChange()\" (nzCurrentPageDataChange)=\"currentPageDataChange($event)\">\n    <thead>\n      <tr>\n        <th style=\"text-align: center\" nzShowCheckbox [(nzChecked)]=\"allChecked\" [nzIndeterminate]=\"indeterminate\" (nzCheckedChange)=\"checkAll($event)\"></th>\n        <th style=\"text-align: center\">编号</th>\n        <th style=\"text-align: center\">设备名称</th>\n        <th style=\"text-align: center\">供应商</th>\n        <th style=\"text-align: center\">状态</th>\n        <th style=\"text-align: center\">操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of rowSelectionTable.data\">\n        <td style=\"text-align: center\" nzShowCheckbox [(nzChecked)]=\"data.checked\" (nzCheckedChange)=\"refreshStatus()\"></td>\n        <td style=\"text-align: center\">{{data.code}}</td>\n        <td style=\"text-align: center\">{{data.name}}</td>\n        <td style=\"text-align: center\">{{data.supplierName}}</td>\n        <td style=\"text-align: center\">{{data.status}}</td>\n        <td style=\"text-align: center\">\n          <button style=\"margin:0 2px\" nz-button nzType=\"default\" (click)=\"goto('infomation/equipment/add',data.id)\">编辑</button>\n          <button style=\"margin:0 2px\" nz-button nzType=\"default\" (click)=\"operateData(data.id)\">删除</button>\n        </td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/infomation/equipment/equipment.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/admin/infomation/equipment/equipment.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tou {\n  margin: 20px auto;\n  width: 80%;\n}\n.tou span {\n  margin: 0 10px;\n}\n"

/***/ }),

/***/ "./src/app/admin/infomation/equipment/equipment.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/infomation/equipment/equipment.component.ts ***!
  \*******************************************************************/
/*! exports provided: EquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentComponent", function() { return EquipmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_restServices_equipment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/restServices/equipment.service */ "./src/app/share/restServices/equipment.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EquipmentComponent = /** @class */ (function () {
    function EquipmentComponent(router, equipmentService, message) {
        this.router = router;
        this.equipmentService = equipmentService;
        this.message = message;
        this.allChecked = false;
        this.disabledButton = true;
        this.checkedNumber = 0;
        this.displayData = [];
        this.dataSet = [];
        this.indeterminate = false;
        this.name = ''; // 设备名称
        this.pageNumber = 1; // 当前页数
        this.pageSize = 10; // 页面中每页数量
        this.totalCount = 0; // 总数据
        this.status = ''; // 状态
        this.supplierName = ''; // 供应商
        this.leadingPerson = ''; // 采购负责人
        this.ids = []; // 删除id
    }
    EquipmentComponent.prototype.ngOnInit = function () {
        this.fileChange();
    };
    EquipmentComponent.prototype.fileChange = function () {
        var _this = this;
        this.equipmentService['getAllByQuery']({
            params: {
                pageNumber: this.pageNumber,
                pageSize: this.pageSize,
                name: this.name,
                status: this.status,
                supplierName: this.supplierName,
                leadingPerson: this.leadingPerson
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.dataSet = response.data.pageData;
                _this.totalCount = response.data.totalCount;
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
        this.empty();
    };
    EquipmentComponent.prototype.operateData = function (id) {
        var _this = this;
        var ids = '';
        if (id) {
            ids = id;
        }
        else {
            for (var index = 0; index < this.displayData.length; index++) {
                if (this.displayData[index].checked) {
                    this.ids.push(this.displayData[index].id);
                    ids = this.ids.join(',');
                }
            }
        }
        this.equipmentService['delete']({
            params: {
                ids: ids
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.message.create('success', '删除成功');
                _this.fileChange();
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    EquipmentComponent.prototype.goto = function (add, id) {
        this.router.navigate(['admin/' + add + '/' + id]);
    };
    EquipmentComponent.prototype.currentPageDataChange = function (e) {
        this.displayData = e;
    };
    EquipmentComponent.prototype.checkAll = function (value) {
        this.displayData.forEach(function (data) { return data.checked = value; });
        this.refreshStatus();
    };
    EquipmentComponent.prototype.refreshStatus = function () {
        var allChecked = this.displayData.every(function (value) { return value.checked === true; });
        var allUnChecked = this.displayData.every(function (value) { return !value.checked; });
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
        this.disabledButton = !this.dataSet.some(function (value) { return value.checked; });
        this.checkedNumber = this.dataSet.filter(function (value) { return value.checked; }).length;
    };
    EquipmentComponent.prototype.empty = function () {
        if (this.disabledButton) {
            return;
        }
        this.dataSet.forEach(function (value) { return value.checked = false; });
        this.refreshStatus();
    };
    EquipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment',
            template: __webpack_require__(/*! ./equipment.component.html */ "./src/app/admin/infomation/equipment/equipment.component.html"),
            styles: [__webpack_require__(/*! ./equipment.component.less */ "./src/app/admin/infomation/equipment/equipment.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _share_restServices_equipment_service__WEBPACK_IMPORTED_MODULE_2__["EquipmentService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], EquipmentComponent);
    return EquipmentComponent;
}());



/***/ }),

/***/ "./src/app/admin/infomation/equipment/importequipment/importequipment.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/infomation/equipment/importequipment/importequipment.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">导入设备</div>\n<div style=\"margin: 20px auto;width: 80%\">\n  <div style=\"overflow:auto\">\n    <div style=\"margin-bottom: 16px; float: right;\">\n      <input (change)=\"fileChange($event)\" [(ngModel)]=\"excle\" type=\"file\" id=\"upload_file1\" style=\"display: none\"/>\n      <button style=\"margin:0 10px\" nz-button (click)=\"chooseType()\" [nzLoading]=\"isLoadingOne\">选择文件</button>\n      <button style=\"margin:0 10px\" nz-button (click)=\"down()\">下载模板</button>\n      <button style=\"margin:0 10px\" nz-button [disabled]='OJBK' (click)=\"shangchuan()\" >确定导入</button>\n    </div>\n  </div>\n  <nz-alert *ngFor=\"let i of dataMessage\" nzType=\"error\" [nzMessage]=\"i\"></nz-alert>\n  <nz-table #basicTable [nzData]=\"dataSet\" nzPageSize=\"10\">\n    <thead>\n      <tr>\n        <th *ngFor=\"let item of dataHead\">{{item}}</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of basicTable.data\">\n        <td>{{data.code}}</td>\n        <td>{{data.name}}</td>\n        <td>{{data.model}}</td>\n        <td>{{data.equipTypeName}}</td>\n        <td>{{data.packageFormat}}</td>\n        <td>{{data.leadingPerson}}</td>\n        <td>{{data.packageFormat}}</td>\n        <td>{{data.measurement}}</td>\n        <td>{{data.standard}}</td>\n        <td>{{data.manufactureDate}}</td>\n        <td>{{data.validity}}</td>\n        <td>{{data.supplierName}}</td>\n        <td>{{data.remark}}</td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/admin/infomation/equipment/importequipment/importequipment.component.less":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/infomation/equipment/importequipment/importequipment.component.less ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  font-size: xx-large;\n  margin: 50px;\n}\n.baocun {\n  text-align: center;\n}\n.baocun button {\n  margin: 30px;\n}\n"

/***/ }),

/***/ "./src/app/admin/infomation/equipment/importequipment/importequipment.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/infomation/equipment/importequipment/importequipment.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ImportequipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportequipmentComponent", function() { return ImportequipmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../share/services/session.service */ "./src/app/share/services/session.service.ts");
/* harmony import */ var _share_restServices_equipment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../share/restServices/equipment.service */ "./src/app/share/restServices/equipment.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImportequipmentComponent = /** @class */ (function () {
    function ImportequipmentComponent(sessionService, message, equipmentService) {
        this.sessionService = sessionService;
        this.message = message;
        this.equipmentService = equipmentService;
        this.excle = '';
        this.dataHead = [];
        this.dataMessage = [];
        this.isLoadingOne = false;
        this.redisKey = '';
        this.OJBK = true;
    }
    ImportequipmentComponent.prototype.ngOnInit = function () {
    };
    ImportequipmentComponent.prototype.fileChange = function (e) {
        var _this = this;
        this.OJBK = true;
        this.isLoadingOne = true;
        var file = e.target.files[0];
        var formData = new FormData();
        formData.append(file.name, file);
        this.equipmentService['readExcel']({
            data: formData
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                if (response.data.messages.length === 0) {
                    _this.dataHead = response.data.head;
                    _this.dataSet = response.data.data;
                    _this.redisKey = response.data.redisKey;
                    _this.OJBK = false;
                }
                else {
                    _this.dataMessage = response.data.messages;
                }
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
            _this.isLoadingOne = false;
        });
    };
    ImportequipmentComponent.prototype.shangchuan = function () {
        var _this = this;
        this.equipmentService['importData']({
            data: {
                redisKey: this.redisKey,
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.message.create('success', '成功');
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    ImportequipmentComponent.prototype.chooseType = function () {
        document.getElementById('upload_file1').click();
    };
    ImportequipmentComponent.prototype.down = function () {
        var aaa = this.sessionService.getItem('token');
        window.open('/v1/equipment/getExport?Authorization=' + aaa);
    };
    ImportequipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-importequipment',
            template: __webpack_require__(/*! ./importequipment.component.html */ "./src/app/admin/infomation/equipment/importequipment/importequipment.component.html"),
            styles: [__webpack_require__(/*! ./importequipment.component.less */ "./src/app/admin/infomation/equipment/importequipment/importequipment.component.less")]
        }),
        __metadata("design:paramtypes", [_share_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _share_restServices_equipment_service__WEBPACK_IMPORTED_MODULE_2__["EquipmentService"]])
    ], ImportequipmentComponent);
    return ImportequipmentComponent;
}());



/***/ }),

/***/ "./src/app/admin/infomation/infomation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/infomation/infomation.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, InfomationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfomationModule", function() { return InfomationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipment/equipment.component */ "./src/app/admin/infomation/equipment/equipment.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/admin/infomation/supplier/supplier.component.ts");
/* harmony import */ var _bids_bids_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bids/bids.component */ "./src/app/admin/infomation/bids/bids.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/permission-guard.service */ "./src/app/share/services/permission-guard.service.ts");
/* harmony import */ var src_app_share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _equipment_add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./equipment/add/add.component */ "./src/app/admin/infomation/equipment/add/add.component.ts");
/* harmony import */ var _supplier_supplier_add_supplier_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./supplier/supplier-add/supplier-add.component */ "./src/app/admin/infomation/supplier/supplier-add/supplier-add.component.ts");
/* harmony import */ var _bids_bigs_add_bigs_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bids/bigs-add/bigs-add.component */ "./src/app/admin/infomation/bids/bigs-add/bigs-add.component.ts");
/* harmony import */ var _equipment_importequipment_importequipment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./equipment/importequipment/importequipment.component */ "./src/app/admin/infomation/equipment/importequipment/importequipment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'equipment',
        component: _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_1__["EquipmentComponent"],
        data: {
            name: '设备',
            roles: [1001],
            menu: true
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'equipment/add/:id',
        component: _equipment_add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
        data: {
            name: '添加设备',
            roles: [1001],
        },
    },
    {
        path: 'equipment/import',
        component: _equipment_importequipment_importequipment_component__WEBPACK_IMPORTED_MODULE_10__["ImportequipmentComponent"],
        data: {
            name: '导入设备',
            roles: [1001],
        },
    },
    {
        path: 'supplier',
        component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_2__["SupplierComponent"],
        data: {
            name: '供应商',
            roles: [1001],
            menu: true
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'supplier/add/:id',
        component: _supplier_supplier_add_supplier_add_component__WEBPACK_IMPORTED_MODULE_8__["SupplierAddComponent"],
        data: {
            name: '添加供应商',
            roles: [1001],
        },
    },
    {
        path: 'bids',
        component: _bids_bids_component__WEBPACK_IMPORTED_MODULE_3__["BidsComponent"],
        data: {
            name: '招投标机构管理',
            roles: [1001],
            menu: true
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'bids/add/:id',
        component: _bids_bigs_add_bigs_add_component__WEBPACK_IMPORTED_MODULE_9__["BigsAddComponent"],
        data: {
            name: '添加招投标机构',
            roles: [1001],
        },
    },
];
var InfomationModule = /** @class */ (function () {
    function InfomationModule() {
    }
    InfomationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                src_app_share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_equipment_equipment_component__WEBPACK_IMPORTED_MODULE_1__["EquipmentComponent"], _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_2__["SupplierComponent"], _supplier_supplier_add_supplier_add_component__WEBPACK_IMPORTED_MODULE_8__["SupplierAddComponent"],
                _equipment_importequipment_importequipment_component__WEBPACK_IMPORTED_MODULE_10__["ImportequipmentComponent"], _equipment_add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"], _bids_bids_component__WEBPACK_IMPORTED_MODULE_3__["BidsComponent"], _bids_bigs_add_bigs_add_component__WEBPACK_IMPORTED_MODULE_9__["BigsAddComponent"]]
        })
    ], InfomationModule);
    return InfomationModule;
}());



/***/ }),

/***/ "./src/app/admin/infomation/supplier/supplier-add/supplier-add.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/admin/infomation/supplier/supplier-add/supplier-add.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin: 30px auto;\">\n  <div class=\"title\">{{title}}</div>\n  <div nz-row style=\"margin-bottom: 70px;\">\n    <div nz-col nzSpan=\"4\" class=\"ennn\">供应商名称:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入供应商名称\" [(ngModel)]=\"name\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">类型:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <nz-select style=\"width: 50%;\" [(ngModel)]=\"supplierTypeId\" nzAllowClear nzPlaceHolder=\"请选择类型\">\n        <nz-option *ngFor=\"let item of supplierType;\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n      </nz-select>\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">所在地区:</div>\n    <div nz-col nzSpan=\"10\" class=\"emmm\">\n      <nz-select style=\"width: 24%;margin-right: 2%\" [(ngModel)]=\"provinceNum\" nzAllowClear nzPlaceHolder=\"请选择省份\"\n        (ngModelChange)=\"getAdminDivision(2,provinceNum)\">\n        <nz-option *ngFor=\"let item of province\" [nzValue]=\"item.provinceCode\" [nzLabel]=\"item.provinceName\"></nz-option>\n      </nz-select>\n      <nz-select style=\"width: 24%;\" [(ngModel)]=\"cityNum\" nzAllowClear nzPlaceHolder=\"请选择城市\">\n        <nz-option *ngFor=\"let item of city\" [nzValue]=\"item.cityCode\" [nzLabel]=\"item.cityName\"></nz-option>\n      </nz-select>\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">详细地址:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入详细地址\" [(ngModel)]=\"address\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">统一社会信用代码:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <input nz-input placeholder=\"请输入统一社会信用代码\" [(ngModel)]=\"socialCreditCode\">\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">注册日期:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <nz-date-picker [(ngModel)]=\"registDate\"></nz-date-picker>\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">法人姓名</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <input nz-input placeholder=\"请输入法人姓名\" [(ngModel)]=\"legalPerson\">\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">法人身份证号:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input nz-input placeholder=\"请输入法人身份证号\" [(ngModel)]=\"legalPersonName\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">联系人姓名:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input style=\"width: 50%;\" nz-input placeholder=\"请输入联系人姓名\" [(ngModel)]=\"contactsUserName\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">联系人身份证号:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input style=\"width: 50%;\" nz-input placeholder=\"请输入联系人身份证号\" [(ngModel)]=\"contactsUseIdnum\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">联系人电话:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\"><input style=\"width: 50%;\" nz-input placeholder=\"请输入联系人电话\" [(ngModel)]=\"phone\"></div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">供应商logo:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <input (change)=\"fileChange($event)\" [(ngModel)]=\"images\" type=\"file\" id=\"upload_file1\" style=\"display: none\"\n        accept=\"image/*\" />\n      <div>\n        <button nz-button nzType=\"primary\" (click)=\"chooseType()\">点击上传图片</button>\n        <span *ngIf=\"imgName\" style=\"margin-left: 20px;\">已选择:{{imgName}}</span>\n        <div><img [src]=\"imgzs.src\" class=\"tupian\"></div>\n      </div>\n    </div>\n    <div nz-col nzSpan=\"4\" class=\"ennn\">备注:</div>\n    <div nz-col nzSpan=\"20\" class=\"emmm\">\n      <textarea rows=\"4\" nz-input [(ngModel)]=\"remark\" nzPlaceHolder=\"请输入备注\"></textarea>\n    </div>\n  </div>\n  <div class=\"baocun\">\n    <button nz-button nzType=\"primary\" (click)=\"tianjia()\">保存</button>\n    <button nz-button nzType=\"primary\">取消</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/infomation/supplier/supplier-add/supplier-add.component.less":
/*!************************************************************************************!*\
  !*** ./src/app/admin/infomation/supplier/supplier-add/supplier-add.component.less ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  font-size: xx-large;\n  margin: 50px;\n}\n.ennn {\n  text-align: end;\n  padding-right: 20px;\n  height: 40px;\n  line-height: 40px;\n  margin: 10px 0;\n}\n.emmm {\n  height: 40px;\n  margin: 10px 0px;\n  width: 70%;\n  padding: 4px 0;\n}\n.baocun {\n  text-align: center;\n}\n.baocun button {\n  margin: 30px;\n}\n.tupian {\n  height: 200px;\n  width: 200px;\n  display: inline-block;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n"

/***/ }),

/***/ "./src/app/admin/infomation/supplier/supplier-add/supplier-add.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/infomation/supplier/supplier-add/supplier-add.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SupplierAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierAddComponent", function() { return SupplierAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_restServices_admin_division_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../share/restServices/admin-division.service */ "./src/app/share/restServices/admin-division.service.ts");
/* harmony import */ var _share_restServices_supplier_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../share/restServices/supplier-type.service */ "./src/app/share/restServices/supplier-type.service.ts");
/* harmony import */ var _share_restServices_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../share/restServices/file.service */ "./src/app/share/restServices/file.service.ts");
/* harmony import */ var _share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../share/restServices/supplier.service */ "./src/app/share/restServices/supplier.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SupplierAddComponent = /** @class */ (function () {
    function SupplierAddComponent(router, route, fileService, supplierTypeService, supplierService, adminDivisionService, message) {
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        this.supplierTypeService = supplierTypeService;
        this.supplierService = supplierService;
        this.adminDivisionService = adminDivisionService;
        this.message = message;
        this.id = '';
        this.title = '新增供应商';
        this.name = '';
        this.supplierType = [];
        this.supplierTypeId = '1';
        this.provinceNum = null;
        this.cityNum = null;
        this.province = [];
        this.city = [];
        this.region = '';
        this.address = '';
        this.socialCreditCode = ''; // 统一社会信用代码
        this.registDate = '';
        this.legalPerson = '';
        this.legalPersonName = '';
        this.contactsUserName = '';
        this.contactsUseIdnum = '';
        this.phone = '';
        this.remark = '';
        this.images = '';
        this.imgzs = { src: '../../../../../assets/images/moren/moren.jpg' }; // 图片展示
        this.imgName = null; // 图片名字
        this.fileUrl = ''; // 图片
    }
    SupplierAddComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.whetherAdd();
        this.getSupplierType();
    };
    SupplierAddComponent.prototype.whetherAdd = function () {
        if (this.id === 'add') {
            this.getAdminDivision(1, '');
            return;
        }
        else {
            this.title = '修改供应商';
            this.getByID();
        }
    };
    SupplierAddComponent.prototype.fileChange = function (e) {
        var _this = this;
        var file = e.target.files[0];
        var formData = new FormData();
        formData.append(file.name, file);
        this.fileService['uploadHead']({
            data: formData
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.message.create('Success', '添加成功');
                _this.imgName = file.name;
                _this.fileUrl = response.data.fileUrl;
                var that_1 = _this;
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    file.src = this.result;
                    that_1.imgzs = file;
                };
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    SupplierAddComponent.prototype.filedown = function (a) {
        this.fileUrl = a;
        this.imgzs.src = '/v1/file/downloadHead?fileUrl=' + a.replace(/\//, '%2f');
    };
    SupplierAddComponent.prototype.getAdminDivision = function (level, id) {
        var _this = this;
        if (id == null) {
            this.city = [];
            this.cityNum = null;
            return;
        }
        this.adminDivisionService['list']({
            params: {
                params2: 1,
                params3: 9999
            },
            data: {
                provinceCode: id,
                level: level
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                if (level === 1) {
                    _this.province = response.data.pageData;
                }
                else {
                    _this.city = [];
                    _this.cityNum = null;
                    _this.city = response.data.pageData;
                }
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    SupplierAddComponent.prototype.buyouya = function (id) {
        var _this = this;
        if (id === '') {
            return;
        }
        this.adminDivisionService['list']({
            params: {
                params2: 1,
                params3: 9999
            },
            data: {
                cityCode: id,
                level: 2
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                // this.provinceNum = response.data.pageData[0].provinceCode;
                // this.cityNum = response.data.pageData[0].cityCode;
                _this.adminDivisionService['list']({
                    params: {
                        params2: 1,
                        params3: 9999
                    },
                    data: {
                        level: 1
                    }
                })
                    .subscribe(function (res) {
                    if (res.errorCode === 0) {
                        _this.province = res.data.pageData;
                        _this.provinceNum = response.data.pageData[0].provinceCode;
                        // setTimeout(() => {
                        //     this.cityNum = response.data.pageData[0].cityCode;
                        // }, 1000);
                        _this.adminDivisionService['list']({
                            params: {
                                params2: 1,
                                params3: 9999
                            },
                            data: {
                                level: 2
                            }
                        })
                            .subscribe(function (r) {
                            _this.city = r.data.pageData;
                            _this.cityNum = response.data.pageData[0].cityCode;
                        });
                    }
                    else {
                        _this.message.create('error', '错误!错误代码' + res.errorCode);
                    }
                });
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    SupplierAddComponent.prototype.getSupplierType = function () {
        var _this = this;
        this.supplierTypeService['getAll']({})
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.supplierType = response.data;
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    SupplierAddComponent.prototype.chooseType = function () {
        document.getElementById('upload_file1').click();
    };
    SupplierAddComponent.prototype.getByID = function () {
        var _this = this;
        this.supplierService['getById']({
            params: {
                params2: this.id
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.name = response.data.name;
                _this.supplierTypeId = response.data.type;
                _this.region = response.data.region;
                _this.buyouya(_this.region.split(',')[0]);
                _this.address = response.data.address;
                _this.socialCreditCode = response.data.socialCreditCode;
                _this.registDate = response.data.registDate;
                _this.legalPerson = response.data.legalPerson;
                _this.legalPersonName = response.data.legalPersonName;
                _this.contactsUserName = response.data.contactsUserName;
                _this.contactsUseIdnum = response.data.contactsUseIdnum;
                _this.phone = response.data.phone;
                _this.remark = response.data.remark;
                if (response.data.logo !== '') {
                    _this.filedown(response.data.logo);
                }
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    SupplierAddComponent.prototype.tianjia = function () {
        var _this = this;
        // if (this.jiancha() === 1) {
        //   return;
        // }
        var idddd;
        if (this.id === 'add') {
            idddd = '';
        }
        else {
            idddd = this.id;
        }
        var cityName = this.city.filter(function (x) { return x.cityCode === _this.cityNum; })[0].cityName;
        var provinceName = this.province.filter(function (x) { return x.provinceCode === _this.provinceNum; })[0].provinceName;
        this.region = this.cityNum + ',' + provinceName + cityName;
        this.supplierService['saveOrUpdate']({
            data: {
                name: this.name,
                type: this.supplierTypeId,
                typeName: this.supplierType.filter(function (x) { return x.id === _this.supplierTypeId; })[0].name,
                region: this.region,
                address: this.address,
                socialCreditCode: this.socialCreditCode,
                registDate: this.registDate,
                legalPerson: this.legalPerson,
                legalPersonName: this.legalPersonName,
                contactsUserName: this.contactsUserName,
                contactsUseIdnum: this.contactsUseIdnum,
                phone: this.phone,
                logo: this.fileUrl,
                remark: this.remark,
                id: idddd
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                if (_this.id === 'add') {
                    _this.message.create('Success', '添加成功');
                }
                else {
                    _this.message.create('Success', '修改成功');
                }
                _this.goto('infomation/supplier', '');
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    SupplierAddComponent.prototype.jiancha = function () {
        if (this.name === '') {
            this.message.create('error', '请输入供应商名称');
            return 1;
        }
        if (this.provinceNum === null) {
            this.message.create('error', '请选择省份');
            return 1;
        }
        if (this.cityNum === null) {
            this.message.create('error', '请选择城市');
            return 1;
        }
        if (this.address === '') {
            this.message.create('error', '请输入详细地址');
            return 1;
        }
        if (this.socialCreditCode === '') {
            this.message.create('error', '请输入统一社会信用代码');
            return 1;
        }
        if (this.registDate === '') {
            this.message.create('error', '请选择注册日期');
            return 1;
        }
        if (this.legalPerson === '') {
            this.message.create('error', '请输入法人姓名');
            return 1;
        }
        if (this.legalPersonName === '') {
            this.message.create('error', '请输入法人身份证');
            return 1;
        }
        if (this.contactsUserName === '') {
            this.message.create('error', '请输入联系人姓名');
            return 1;
        }
        if (this.contactsUseIdnum === '') {
            this.message.create('error', '请输入联系人身份证');
            return 1;
        }
        if (this.phone === '') {
            this.message.create('error', '请输入联系电话');
            return 1;
        }
        if (this.remark === '') {
            this.message.create('error', '请输入备注');
            return 1;
        }
        return 0;
    };
    SupplierAddComponent.prototype.goto = function (add, id) {
        this.router.navigate(['admin/' + add + '/' + id]);
    };
    SupplierAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier-add',
            template: __webpack_require__(/*! ./supplier-add.component.html */ "./src/app/admin/infomation/supplier/supplier-add/supplier-add.component.html"),
            styles: [__webpack_require__(/*! ./supplier-add.component.less */ "./src/app/admin/infomation/supplier/supplier-add/supplier-add.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _share_restServices_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _share_restServices_supplier_type_service__WEBPACK_IMPORTED_MODULE_2__["SupplierTypeService"],
            _share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"],
            _share_restServices_admin_division_service__WEBPACK_IMPORTED_MODULE_1__["AdminDivisionService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]])
    ], SupplierAddComponent);
    return SupplierAddComponent;
}());



/***/ }),

/***/ "./src/app/admin/infomation/supplier/supplier.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/infomation/supplier/supplier.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tou\">\n  <span>类型:</span>\n  <nz-select style=\"width: 15%;margin-right: 15px;\" [(ngModel)]=\"supplierTypeId\" nzAllowClear nzPlaceHolder=\"请选择类型\">\n    <nz-option nzValue=\"\" nzLabel=\"全部\"></nz-option>\n    <nz-option *ngFor=\"let item of supplierType;\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n  </nz-select>\n  <span>供应商名称:</span>\n  <input style=\"width: 15%;margin-right: 15px;\" nz-input placeholder=\"请输入供应商名称\" [(ngModel)]=\"name\">\n  <span>所在地区:</span>\n  <nz-select style=\"width: 8%;margin-right: 15px;\" [(ngModel)]=\"provinceNum\" nzAllowClear nzPlaceHolder=\"请选择省份\"\n    (ngModelChange)=\"getAdminDivision(2,provinceNum)\">\n    <nz-option *ngFor=\"let item of province\" [nzValue]=\"item.provinceCode\" [nzLabel]=\"item.provinceName\"></nz-option>\n  </nz-select>\n  <nz-select style=\"width: 8%;margin-right: 15px;\" [(ngModel)]=\"cityNum\" nzAllowClear nzPlaceHolder=\"请选择城市\">\n    <nz-option *ngFor=\"let item of city\" [nzValue]=\"item.cityCode\" [nzLabel]=\"item.cityName\"></nz-option>\n  </nz-select>\n  <span>状态:</span>\n  <nz-select style=\"width: 15%;margin-right: 15px;\" [(ngModel)]=\"status\" nzPlaceHolder=\"请选择状态\">\n    <nz-option nzValue=\"\" nzLabel=\"全部\"></nz-option>\n    <nz-option nzValue=\"0\" nzLabel=\"停用\"></nz-option>\n    <nz-option nzValue=\"1\" nzLabel=\"正常\"></nz-option>\n  </nz-select>\n  <button nz-button nzType=\"primary\" style=\"float: right;\" (click)=\"getList()\">查询</button>\n</div>\n\n<div style=\"margin: 20px auto;width: 80%\">\n  <div style=\"overflow:auto\">\n    <div style=\"margin-bottom: 16px; float: right;\">\n      <span style=\"margin-right: 8px;\">您已选择{{checkedNumber}}项</span>\n      <button style=\"margin:0 10px\" nz-button [nzType]=\"'primary'\" [disabled]=\"disabledButton\" (click)=\"operateData()\">批量删除</button>\n      <button style=\"margin:0 10px\" nz-button (click)=\"goto('infomation/supplier/add','add')\">新增设备</button>\n      <button style=\"margin:0 10px\" nz-button (click)=\"goto('infomation/equipment/import','')\">导入设备</button>\n    </div>\n  </div>\n  <nz-table #rowSelectionTable [nzData]=\"dataSet\" [nzTotal]=\"totalCount\" [nzFrontPagination]=\"false\" [nzPageSize]=\"pageSize\"\n    [(nzPageIndex)]=\"pageNumber\" (nzPageIndexChange)=\"getList()\" (nzCurrentPageDataChange)=\"currentPageDataChange($event)\">\n    <thead>\n      <tr>\n        <th style=\"text-align: center\" nzShowCheckbox [(nzChecked)]=\"allChecked\" [nzIndeterminate]=\"indeterminate\"\n          (nzCheckedChange)=\"checkAll($event)\"></th>\n        <th style=\"text-align: center\">编号</th>\n        <th style=\"text-align: center\">供应商名称</th>\n        <th style=\"text-align: center\">类型</th>\n        <th style=\"text-align: center\">所在地区</th>\n        <th style=\"text-align: center\">状态</th>\n        <th style=\"text-align: center\">操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of rowSelectionTable.data\">\n        <td style=\"text-align: center\" nzShowCheckbox [(nzChecked)]=\"data.checked\" (nzCheckedChange)=\"refreshStatus()\"></td>\n        <td style=\"text-align: center\">{{data.code}}</td>\n        <td style=\"text-align: center\">{{data.name}}</td>\n        <td style=\"text-align: center\">{{data.typeName}}</td>\n        <td style=\"text-align: center\">{{data.region.split(',')[1]}}</td>\n        <td style=\"text-align: center\" *ngIf=\"data.status == 0\">停用</td>\n        <td style=\"text-align: center\" *ngIf=\"data.status == 1\">正常</td>\n        <td style=\"text-align: center\">\n          <button style=\"margin:0 2px\" nz-button nzType=\"default\" (click)=\"goto('infomation/supplier/add',data.id)\">编辑</button>\n          <button style=\"margin:0 2px\" nz-button nzType=\"default\" (click)=\"operateData(data.id)\">删除</button>\n        </td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/admin/infomation/supplier/supplier.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/admin/infomation/supplier/supplier.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tou {\n  margin: 20px auto;\n  width: 80%;\n}\n.tou span {\n  margin: 0 10px;\n}\n"

/***/ }),

/***/ "./src/app/admin/infomation/supplier/supplier.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/infomation/supplier/supplier.component.ts ***!
  \*****************************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_restServices_supplier_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/restServices/supplier-type.service */ "./src/app/share/restServices/supplier-type.service.ts");
/* harmony import */ var _share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/restServices/supplier.service */ "./src/app/share/restServices/supplier.service.ts");
/* harmony import */ var _share_restServices_admin_division_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/restServices/admin-division.service */ "./src/app/share/restServices/admin-division.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SupplierComponent = /** @class */ (function () {
    function SupplierComponent(router, supplierTypeService, supplierService, message, adminDivisionService) {
        this.router = router;
        this.supplierTypeService = supplierTypeService;
        this.supplierService = supplierService;
        this.message = message;
        this.adminDivisionService = adminDivisionService;
        this.allChecked = false;
        this.disabledButton = true;
        this.checkedNumber = 0;
        this.displayData = [];
        this.dataSet = [];
        this.indeterminate = false;
        this.supplierType = [];
        this.supplierTypeId = '';
        this.name = '';
        this.province = [];
        this.city = [];
        this.status = '';
        this.pageNumber = 1; // 当前页数
        this.pageSize = 10; // 页面中每页数量
        this.totalCount = 0; // 总数据
        this.ids = []; // 删除id
    }
    SupplierComponent.prototype.ngOnInit = function () {
        this.getSupplierType();
        this.getAdminDivision(1, '');
        this.getList();
    };
    SupplierComponent.prototype.goto = function (add, id) {
        this.router.navigate(['admin/' + add + '/' + id]);
    };
    SupplierComponent.prototype.getList = function () {
        var _this = this;
        var add = this.cityNum;
        if (add == null) {
            add = '';
        }
        this.supplierService['getAllByQuery']({
            params: {
                pageNumber: this.pageNumber,
                pageSize: this.pageSize,
                name: this.name,
                status: this.status,
                type: this.supplierTypeId,
                region: add
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.dataSet = response.data.pageData;
                _this.totalCount = response.data.totalCount;
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
        this.empty();
    };
    SupplierComponent.prototype.getSupplierType = function () {
        var _this = this;
        this.supplierTypeService['getAll']({})
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.supplierType = response.data;
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    SupplierComponent.prototype.getAdminDivision = function (level, id) {
        var _this = this;
        if (id == null) {
            this.city = [];
            this.cityNum = null;
            return;
        }
        this.adminDivisionService['list']({
            params: {
                params2: 1,
                params3: 9999
            },
            data: {
                provinceCode: id,
                level: level
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                if (level === 1) {
                    _this.province = response.data.pageData;
                }
                else {
                    _this.city = [];
                    _this.cityNum = null;
                    _this.city = response.data.pageData;
                }
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    SupplierComponent.prototype.operateData = function (id) {
        var _this = this;
        var ids = '';
        if (id) {
            ids = id;
        }
        else {
            for (var index = 0; index < this.displayData.length; index++) {
                if (this.displayData[index].checked) {
                    this.ids.push(this.displayData[index].id);
                    ids = this.ids.join(',');
                }
            }
        }
        this.supplierService['delete']({
            params: {
                ids: ids
            }
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.message.create('success', '删除成功');
                _this.getList();
            }
            else {
                _this.message.create('error', '错误!错误代码' + response.errorCode);
            }
        });
    };
    SupplierComponent.prototype.currentPageDataChange = function (e) {
        this.displayData = e;
    };
    SupplierComponent.prototype.checkAll = function (value) {
        this.displayData.forEach(function (data) { return data.checked = value; });
        this.refreshStatus();
    };
    SupplierComponent.prototype.refreshStatus = function () {
        var allChecked = this.displayData.every(function (value) { return value.checked === true; });
        var allUnChecked = this.displayData.every(function (value) { return !value.checked; });
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
        this.disabledButton = !this.dataSet.some(function (value) { return value.checked; });
        this.checkedNumber = this.dataSet.filter(function (value) { return value.checked; }).length;
    };
    SupplierComponent.prototype.empty = function () {
        if (this.disabledButton) {
            return;
        }
        this.dataSet.forEach(function (value) { return value.checked = false; });
        this.refreshStatus();
    };
    SupplierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier',
            template: __webpack_require__(/*! ./supplier.component.html */ "./src/app/admin/infomation/supplier/supplier.component.html"),
            styles: [__webpack_require__(/*! ./supplier.component.less */ "./src/app/admin/infomation/supplier/supplier.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _share_restServices_supplier_type_service__WEBPACK_IMPORTED_MODULE_2__["SupplierTypeService"],
            _share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            _share_restServices_admin_division_service__WEBPACK_IMPORTED_MODULE_4__["AdminDivisionService"]])
    ], SupplierComponent);
    return SupplierComponent;
}());



/***/ }),

/***/ "./src/app/share/restServices/admin-division.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/share/restServices/admin-division.service.ts ***!
  \**************************************************************/
/*! exports provided: AdminDivisionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDivisionService", function() { return AdminDivisionService; });
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




var AdminDivisionService = /** @class */ (function () {
    function AdminDivisionService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/adminDivision/:params1/:params2/:params3/:params4/:params5';
    }
    // list
    AdminDivisionService.prototype.list = function (data) {
        return data.observable;
    };
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'list'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AdminDivisionService.prototype, "list", null);
    AdminDivisionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminDivisionService);
    return AdminDivisionService;
}());



/***/ }),

/***/ "./src/app/share/restServices/bids.service.ts":
/*!****************************************************!*\
  !*** ./src/app/share/restServices/bids.service.ts ***!
  \****************************************************/
/*! exports provided: BidsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidsService", function() { return BidsService; });
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




var BidsService = /** @class */ (function () {
    function BidsService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/tenderOrgation/:params1/:params2/:params3/:params4/:params5';
    }
    // getAllByQuery
    BidsService.prototype.getAllByQuery = function (data) {
        return data.observable;
    };
    // delete
    BidsService.prototype.delete = function (data) {
        return data.observable;
    };
    // getById
    BidsService.prototype.getById = function (data) {
        return data.observable;
    };
    // saveOrUpdate
    BidsService.prototype.saveOrUpdate = function (data) {
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
    ], BidsService.prototype, "getAllByQuery", null);
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
    ], BidsService.prototype, "delete", null);
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
    ], BidsService.prototype, "getById", null);
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
    ], BidsService.prototype, "saveOrUpdate", null);
    BidsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BidsService);
    return BidsService;
}());



/***/ }),

/***/ "./src/app/share/restServices/equipment.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/share/restServices/equipment.service.ts ***!
  \*********************************************************/
/*! exports provided: EquipmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentService", function() { return EquipmentService; });
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




var EquipmentService = /** @class */ (function () {
    function EquipmentService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/equipment/:params1/:params2/:params3/:params4/:params5';
    }
    // delete
    EquipmentService.prototype.delete = function (data) {
        return data.observable;
    };
    // getAllByQuery
    EquipmentService.prototype.getAllByQuery = function (data) {
        return data.observable;
    };
    // getById
    EquipmentService.prototype.getById = function (data) {
        return data.observable;
    };
    // saveOrUpdate
    EquipmentService.prototype.saveOrUpdate = function (data) {
        return data.observable;
    };
    // readExcel
    EquipmentService.prototype.readExcel = function (data) {
        return data.observable;
    };
    // importData
    EquipmentService.prototype.importData = function (data) {
        return data.observable;
    };
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
    ], EquipmentService.prototype, "delete", null);
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
    ], EquipmentService.prototype, "getAllByQuery", null);
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
    ], EquipmentService.prototype, "getById", null);
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
    ], EquipmentService.prototype, "saveOrUpdate", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'readExcel'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], EquipmentService.prototype, "readExcel", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'importData'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], EquipmentService.prototype, "importData", null);
    EquipmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EquipmentService);
    return EquipmentService;
}());



/***/ }),

/***/ "./src/app/share/restServices/supplier-type.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/share/restServices/supplier-type.service.ts ***!
  \*************************************************************/
/*! exports provided: SupplierTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierTypeService", function() { return SupplierTypeService; });
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




var SupplierTypeService = /** @class */ (function () {
    function SupplierTypeService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/supplierType/:params1/:params2/:params3/:params4/:params5';
    }
    // getAll
    SupplierTypeService.prototype.getAll = function (data) {
        return data.observable;
    };
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAll'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], SupplierTypeService.prototype, "getAll", null);
    SupplierTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SupplierTypeService);
    return SupplierTypeService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module~infomation-infomation-module.js.map