(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module~user-user-module"],{

/***/ "./src/app/admin/common/style/add.less":
/*!*********************************************!*\
  !*** ./src/app/admin/common/style/add.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-box .heard {\n  width: 100%;\n  background: #fff;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.add-box .heard > div {\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n}\n.add-box .heard > div nz-breadcrumb {\n  display: inline-block;\n  margin-top: 23px;\n}\n.add-box .heard > div .span {\n  color: darkgrey;\n}\n.add-box .heard > div .right {\n  position: absolute;\n  right: 20px;\n  top: 17px;\n  text-align: right;\n}\n.add-box .form-box {\n  width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #fff;\n  min-height: 400px;\n}\n"

/***/ }),

/***/ "./src/app/admin/common/style/list.less":
/*!**********************************************!*\
  !*** ./src/app/admin/common/style/list.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-box {\n  height: 100%;\n}\n.list-box .search {\n  margin-bottom: 20px;\n  width: 100%;\n  background-color: white;\n  padding: 20px 0;\n}\n.list-box .search > div {\n  width: 1200px;\n  margin: 0 auto;\n}\n.list-box .search .chaxun {\n  margin-right: 20px;\n  float: left;\n}\n.list-box .search .chaxun:last-child {\n  margin-left: 50px;\n}\n.list-box .search .chaxun > span {\n  margin-right: 6px;\n}\n.list-box .search .chaxun input {\n  width: 160px;\n}\n.list-box .table-head {\n  position: relative;\n  width: 95%;\n  background-color: white;\n  margin: 0 auto;\n  height: 50px;\n  bottom: 3px;\n}\n.list-box .table-head .head-h2 {\n  padding-left: 20px;\n  line-height: 50px;\n}\n.list-box .table-head .head-h2 span {\n  font-weight: bold;\n  font-size: 16px;\n}\n.list-box .table-head .btn-box {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n.list-box .table-box {\n  width: 95%;\n  margin: 0 auto;\n  background: #fff;\n  padding: 20px;\n  min-height: 400px;\n}\n"

/***/ }),

/***/ "./src/app/admin/user/add/add.component.html":
/*!***************************************************!*\
  !*** ./src/app/admin/user/add/add.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-box\">\n  <div class=\"heard\">\n    <div>\n      <nz-breadcrumb>\n        <nz-breadcrumb-item>\n          <a [routerLink]=\"['../']\">用户列表</a>\n        </nz-breadcrumb-item>\n        <nz-breadcrumb-item>\n          <span class=\"span\">添加用户</span>\n        </nz-breadcrumb-item>\n      </nz-breadcrumb>\n    </div>\n  </div>\n  <div class=\"form-box\">\n    <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n      <label style=\"display:none;\"><span></span><input type=\"text\" name=\"loginName\" ></label>\n      <label style=\"display:none;\"><span></span><input type=\"password\" name=\"password\" ></label>    \n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"loginName\" nzRequired>登录名</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input appTrim nz-input id=\"loginName\" autocomplete=\"off\" formControlName=\"loginName\" placeholder=\"登录名\">\n          <nz-form-explain *ngIf=\"validateForm.get('loginName').dirty && validateForm.get('loginName').errors\">请输入登录名!</nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"name\" nzRequired><span>姓名</span></nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input appTrim nz-input id=\"name\" formControlName=\"name\"  placeholder=\"姓名\">\n          <nz-form-explain *ngIf=\"validateForm.get('name').dirty && validateForm.get('name').errors\">Please input your name!</nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"phone\" nzRequired>手机号</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzValidateStatus]=\"validateForm.controls['phone']\">\n          <input appTrim formControlName=\"phone\" id=\"'phone'\" nz-input placeholder=\"手机号\">\n          <nz-form-explain *ngIf=\"validateForm.get('phone').dirty && validateForm.get('phone').errors\">Please input your\n            phone number!</nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"password\" nzRequired>密码</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input appTrim nz-input type=\"password\" autocomplete=\"off\" placeholder=\"密码\" id=\"password\" formControlName=\"password\" >\n          <nz-form-explain *ngIf=\"validateForm.get('password').dirty && validateForm.get('password').errors\">请输入密码!</nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"remark\" >备注</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzValidateStatus]=\"validateForm.controls['remark']\">\n          <textarea  appTrim formControlName=\"remark\" id=\"'remark'\" nz-input placeholder=\"备注\"></textarea>\n          \n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item nz-row style=\"margin-bottom:8px;\">\n        <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\n          <button nz-button nzType=\"primary\">保存</button>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/user/add/add.component.less":
/*!***************************************************!*\
  !*** ./src/app/admin/user/add/add.component.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Breadcrumb {\n  margin-bottom: 20px;\n  width: 100%;\n  background-color: white;\n  padding: 20px 0;\n}\n.Breadcrumb > div {\n  width: 1200px;\n  margin: 0 auto;\n}\n.Breadcrumb > div .span {\n  color: darkgrey;\n}\n.waikuang {\n  width: 1200px;\n  margin: 0 auto;\n  background-color: white;\n}\n.waikuang .user-add {\n  width: 600px;\n  margin: 0 auto;\n  padding-top: 20px;\n}\n.waikuang .user-add [nz-form] {\n  max-width: 600px;\n}\n.shangkuang {\n  width: 1200px;\n  background-color: white;\n  margin: 0 auto;\n  height: 50px;\n  margin-bottom: 3px;\n}\n.shangkuang > span {\n  position: relative;\n  font-size: 17px;\n  left: 20px;\n  top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/admin/user/add/add.component.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/user/add/add.component.ts ***!
  \*************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_restServices_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/restServices/user.service */ "./src/app/share/restServices/user.service.ts");
/* harmony import */ var _node_modules_ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _share_services_code_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/services/code-data.service */ "./src/app/share/services/code-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_restServices_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../share/restServices/group.service */ "./src/app/share/restServices/group.service.ts");
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
    function AddComponent(groupService, codeDataService, _message, fb, userService, router) {
        this.groupService = groupService;
        this.codeDataService = codeDataService;
        this._message = _message;
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.loading = false;
        this.checkOptionsOne = [];
        this.parentIdList = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        if (this.codeDataService && this.codeDataService.codeObjList['10']) {
            this.checkOptionsOne = JSON.parse(JSON.stringify(this.codeDataService.codeObjList['10']));
            this.checkOptionsOne = this.checkOptionsOne.filter(function (item) {
                return item.code !== 1001;
            });
            if (this.checkOptionsOne[0]) {
                this.checkOptionsOne[0].checked = true;
            }
        }
        this.validateForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            loginName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            remark: [null, []],
        });
    };
    AddComponent.prototype.submitForm = function () {
        var _this = this;
        for (var i in this.validateForm.controls) {
            if (this.validateForm.controls[i]) {
                this.validateForm.controls[i].markAsDirty();
            }
        }
        if (this.validateForm.valid) {
            this.loading = true;
            var roles = this.checkOptionsOne.filter(function (item) {
                if (item.checked) {
                    return true;
                }
            }).map(function (item) {
                return item.code;
            });
            this.userService['add']({
                data: {
                    loginName: this.validateForm.value.loginName,
                    name: this.validateForm.value.name,
                    // password: btoa(encodeURIComponent(this.validateForm.value.password)),
                    password: this.validateForm.value.password,
                    phone: this.validateForm.value.phone,
                    remark: this.validateForm.value.remark,
                }
            })
                .subscribe(function (response) {
                _this.loading = false;
                if (response.code === 200) {
                    // this.checkOptionsOne.forEach(bbb => {
                    //   bbb.checked = false;
                    // });
                    _this._message.create('success', '创建成功', { nzDuration: 4000 });
                    _this.router.navigate(['/admin/user']);
                }
                else {
                    _this._message.create('error', response.msg, { nzDuration: 4000 });
                }
            });
        }
    };
    AddComponent.prototype.setRoles = function (roles) {
        var miao = '';
        roles.forEach(function (aaa) {
            miao = miao + ',' + aaa;
        });
        miao = miao.substr(1);
        return miao;
    };
    AddComponent.prototype.getList = function () {
        var _this = this;
        this.groupService.list({
            params: {
                params2: 1,
                params3: 1000
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.code === 200) {
                _this.parentIdList = response.data.pageData;
            }
        });
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/admin/user/add/add.component.html"),
            styles: [__webpack_require__(/*! ../../common/style/add.less */ "./src/app/admin/common/style/add.less"), __webpack_require__(/*! ./add.component.less */ "./src/app/admin/user/add/add.component.less")]
        }),
        __metadata("design:paramtypes", [_share_restServices_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"],
            _share_services_code_data_service__WEBPACK_IMPORTED_MODULE_4__["CodeDataService"],
            _node_modules_ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _share_restServices_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/admin/user/index/index.component.html":
/*!*******************************************************!*\
  !*** ./src/app/admin/user/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-box\">\n  <img [src]=\"'/v1/file/img'+fileUrl\" alt=\"\">\n  <div class=\"search clear\">\n    <div>\n      <div class=\"chaxun\">\n        <span>登录名</span>\n        <input appTrim nz-input placeholder=\"请输入登录名\" [(ngModel)]=\"name\" (keyup.enter)=\"getList()\">\n      </div>\n      <!-- <div class=\"chaxun\">\n        <span>姓名</span>\n        <input appTrim nz-input placeholder=\"请输入姓名\" [(ngModel)]=\"name\" (keyup.enter)=\"getList()\">\n      </div> -->\n      <div class=\"chaxun\">\n        <span>电话</span>\n        <input appTrim nz-input placeholder=\"请输入电话\" [(ngModel)]=\"juese\" (keyup.enter)=\"getList()\">\n      </div>\n      <div class=\"chaxun\">\n        <span>邮箱</span>\n        <input appTrim nz-input placeholder=\"请输入邮箱\" [(ngModel)]=\"zhungtai\" (keyup.enter)=\"getList()\">\n      </div>\n\n      <div class=\"chaxun\">\n        <button nz-button nzType=\"chaxun\" (click)=\"getList()\">查询</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"table-head\">\n    <div class=\"head-h2\">\n      <span>用户列表</span>\n    </div>\n    <div class=\"btn-box\">\n      <button nz-button nzType=\"tianjia\" routerLink=\"./add\">添加用户</button>\n    </div>\n  </div>\n  <div class=\"table-box\">\n    <nz-table #basicTable [nzData]=\"list\" [nzFrontPagination]=\"false\" [nzPageIndex]=\"pageNum\" [nzTotal]=\"totalCount\" [nzPageSize]=\"pageSize\"\n      (nzPageIndexChange)=\"getList()\">\n      <thead>\n        <tr>\n          <th>头像</th>\n          <th>登录名</th>\n          <th>姓名</th>\n          <th>类型</th>\n          <th>电话</th>\n          <th>邮箱</th>\n          <th>启用</th>\n          <th>操作</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of list\">\n          <td><img [src]=\"'/v1/file/img/'+data.img\" alt=\"\"></td>\n          <td>{{data.loginName}}</td>\n          <td>{{data.name}}</td>\n          <td>\n            <span *ngFor=\"let item of data.roles let i=index\">\n              {{codeObj[item]}}\n              <span *ngIf=\"i<data.roles.length-1\">，</span>\n            </span>\n          </td>\n          <td>{{data.phone}}</td>\n          <td>{{data.email}}</td>\n          <td class=\"tdqiyong\" *ngIf=\"data.state\">已启用</td>\n          <td class=\"tdnoqiyong\" *ngIf=\"!data.state\">未启用</td>\n          <td>\n            <button nz-button [routerLink]=\"['./relation',data.id]\">vpn</button>\n            &nbsp;&nbsp;\n            <button nz-button [routerLink]=\"['./update',data.id]\">编辑</button>\n            &nbsp;&nbsp;\n            <button nz-popconfirm nz-button nzTitle=\"您确定要删除吗?\" (nzOnConfirm)=\"deldeldel(data.id)\" (nzOnCancel)=\"cancel()\">删除</button>\n            &nbsp;&nbsp;\n            <button *ngIf=\"!data.state\" nz-popconfirm nz-button nzTitle=\"您确定要启用吗?\" (nzOnConfirm)=\"StateOK(data.id)\" (nzOnCancel)=\"cancel()\">启用</button>\n            <button *ngIf=\"data.state\" nz-popconfirm nz-button nzTitle=\"您确定要禁用吗?\" (nzOnConfirm)=\"StateNO(data.id)\" (nzOnCancel)=\"cancel()\">禁用</button>\n          </td>\n        </tr>\n      </tbody>\n    </nz-table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/user/index/index.component.less":
/*!*******************************************************!*\
  !*** ./src/app/admin/user/index/index.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/user/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/user/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_restServices_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../share/restServices/user.service */ "./src/app/share/restServices/user.service.ts");
/* harmony import */ var _share_services_code_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/services/code-data.service */ "./src/app/share/services/code-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(userService, codeDataService) {
        this.userService = userService;
        this.codeDataService = codeDataService;
        this.loginName = null;
        this.name = '';
        this.juese = null;
        this.zhungtai = null;
        this.pageSize = 10;
        this.pageNum = 1;
        this.totalCount = null;
        this.DATA = [];
        this.codeList = [];
        this.codeObjList = {};
        this.codeObj = {};
        this.fileUrl = '';
        this.list = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.codeObj = this.codeDataService.codeObj;
        this.getList();
    };
    IndexComponent.prototype.getList = function (num) {
        var _this = this;
        if (num) {
            this.pageNum = num;
        }
        this.userService.getAllUser({
            params: {
                pageNumber: this.pageNum,
                pageSize: this.pageSize,
                name: this.name,
            }
        })
            .subscribe(function (response) {
            if (response.code === 200) {
                response.data.pageData.forEach(function (aaa) {
                    aaa.roles = aaa.roles.split(',');
                });
                _this.list = response.data.pageData;
                _this.totalCount = response.data.totalCount;
            }
        });
    };
    IndexComponent.prototype.cancel = function () { };
    IndexComponent.prototype.deldeldel = function (id) {
        // this.userService.del({
        //   params: {
        //     params2: id
        //   },
        //   data: {}
        // })
        //   .subscribe(response => {
        //     if (response.code === 200) {
        //       this.getList();
        //     }
        //   });
    };
    IndexComponent.prototype.StateOK = function (id) {
        // this.userService.updateState({
        //   params: {
        //     id: id,
        //     state: true
        //   },
        //   data: {}
        // })
        //   .subscribe(response => {
        //     if (response.code === 200) {
        //       this.getList();
        //     }
        //   });
    };
    IndexComponent.prototype.StateNO = function (id) {
        // this.userService.updateState({
        //   params: {
        //     id: id,
        //     state: false
        //   },
        //   data: {}
        // })
        //   .subscribe(response => {
        //     if (response.code === 200) {
        //       this.getList();
        //     }
        //   });
    };
    IndexComponent.prototype.fanyi = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/admin/user/index/index.component.html"),
            styles: [__webpack_require__(/*! ../../common/style/list.less */ "./src/app/admin/common/style/list.less"), __webpack_require__(/*! ./index.component.less */ "./src/app/admin/user/index/index.component.less")]
        }),
        __metadata("design:paramtypes", [_share_restServices_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _share_services_code_data_service__WEBPACK_IMPORTED_MODULE_2__["CodeDataService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/user/qx/qx.component.html":
/*!*************************************************!*\
  !*** ./src/app/admin/user/qx/qx.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  qx works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/user/qx/qx.component.less":
/*!*************************************************!*\
  !*** ./src/app/admin/user/qx/qx.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/user/qx/qx.component.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/user/qx/qx.component.ts ***!
  \***********************************************/
/*! exports provided: QxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QxComponent", function() { return QxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QxComponent = /** @class */ (function () {
    function QxComponent() {
    }
    QxComponent.prototype.ngOnInit = function () {
    };
    QxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qx',
            template: __webpack_require__(/*! ./qx.component.html */ "./src/app/admin/user/qx/qx.component.html"),
            styles: [__webpack_require__(/*! ./qx.component.less */ "./src/app/admin/user/qx/qx.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], QxComponent);
    return QxComponent;
}());



/***/ }),

/***/ "./src/app/admin/user/update/update.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/user/update/update.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-add-cpp\">\n  <div class=\"Breadcrumb\">\n    <div>\n      <nz-breadcrumb>\n        <nz-breadcrumb-item>\n          <a [routerLink]=\"['/admin/user']\">用户列表</a>\n        </nz-breadcrumb-item>\n        <nz-breadcrumb-item>\n          <span class=\"span\">编辑用户</span>\n        </nz-breadcrumb-item>\n      </nz-breadcrumb>\n    </div>\n  </div>\n  <div class=\"shangkuang\">\n    <span>编辑用户</span>\n  </div>\n  <div class=\"waikuang\">\n    <div class=\"user-add\">\n      <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"loginName\" nzRequired>登录名</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n            <input appTrim nz-input id=\"loginName\" formControlName=\"loginName\" placeholder=\"登录名\">\n            <nz-form-explain *ngIf=\"validateForm.get('loginName').dirty && validateForm.get('loginName').errors\">Please input\n              loginName!</nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"name\" nzRequired>\n            <span>\n              姓名\n            </span>\n          </nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n            <input appTrim nz-input id=\"name\" formControlName=\"name\" placeholder=\"姓名\">\n            <nz-form-explain *ngIf=\"validateForm.get('name').dirty && validateForm.get('name').errors\">Please input your\n              name!</nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"phone\" nzRequired>手机号</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzValidateStatus]=\"validateForm.controls['phone']\">\n            <input appTrim formControlName=\"phone\" id=\"'phone'\" placeholder=\"手机号\" nz-input>\n            <nz-form-explain *ngIf=\"validateForm.get('phone').dirty && validateForm.get('phone').errors\">Please input your\n              phone number!</nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n          \n        <nz-form-item>\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"remark\" >备注</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzValidateStatus]=\"validateForm.controls['remark']\">\n            <textarea  appTrim formControlName=\"remark\" id=\"'remark'\" nz-input placeholder=\"备注\"></textarea>\n            \n          </nz-form-control>\n        </nz-form-item>\n\n        <!-- <nz-form-item>\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"lcode\" nzRequired>用户类型</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n            <nz-checkbox-group formControlName='lcode' [(ngModel)]=\"checkOptionsOne\"></nz-checkbox-group>\n            <nz-form-explain *ngIf=\"validateForm.get('lcode').dirty && validateForm.get('lcode').errors\">{{validateForm.getError('lcode',\n              'lcode')?.info}}</nz-form-explain>\n          </nz-form-control>\n        </nz-form-item> -->\n        <!-- <nz-form-item>\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"img\" nzRequired>头像</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n            <app-cropper-img formControlName='img' id='img'  [boxStyle]=\"{width:100,height:100}\">\n            </app-cropper-img>\n            <nz-form-explain *ngIf=\"validateForm.get('img').dirty && validateForm.get('img').errors\">请添加头像</nz-form-explain>\n          </nz-form-control>\n        </nz-form-item> -->\n        <nz-form-item nz-row style=\"margin-bottom:8px;\">\n          <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\n            <button nz-button nzType=\"primary\">保存</button>\n          </nz-form-control>\n        </nz-form-item>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/user/update/update.component.less":
/*!*********************************************************!*\
  !*** ./src/app/admin/user/update/update.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Breadcrumb {\n  margin-bottom: 20px;\n  width: 100%;\n  background-color: white;\n  padding: 20px 0;\n}\n.Breadcrumb > div {\n  width: 1200px;\n  margin: 0 auto;\n}\n.Breadcrumb > div .span {\n  color: darkgrey;\n}\n.waikuang {\n  width: 1200px;\n  margin: 0 auto;\n  background-color: white;\n}\n.waikuang .user-add {\n  width: 600px;\n  margin: 0 auto;\n  padding-top: 20px;\n}\n.waikuang .user-add [nz-form] {\n  max-width: 600px;\n}\n.shangkuang {\n  width: 1200px;\n  background-color: white;\n  margin: 0 auto;\n  height: 50px;\n  margin-bottom: 3px;\n}\n.shangkuang > span {\n  position: relative;\n  font-size: 17px;\n  left: 20px;\n  top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/admin/user/update/update.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/user/update/update.component.ts ***!
  \*******************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_restServices_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/restServices/user.service */ "./src/app/share/restServices/user.service.ts");
/* harmony import */ var _node_modules_ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _share_services_reg_exp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/services/reg-exp.service */ "./src/app/share/services/reg-exp.service.ts");
/* harmony import */ var _share_services_code_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../share/services/code-data.service */ "./src/app/share/services/code-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(codeDataService, _message, regExpService, fb, userService, route, router) {
        this.codeDataService = codeDataService;
        this._message = _message;
        this.regExpService = regExpService;
        this.fb = fb;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.id = 0;
        this.checkOptionsOne = [];
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getById(this.id);
        if (this.codeDataService && this.codeDataService.codeObjList['10']) {
            this.checkOptionsOne = JSON.parse(JSON.stringify(this.codeDataService.codeObjList['10']));
            this.checkOptionsOne = this.checkOptionsOne.filter(function (item) {
                return item.code !== 1001;
            });
        }
        this.validateForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            loginName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            remark: [null, []],
        });
    };
    UpdateComponent.prototype.submitForm = function () {
        var _this = this;
        for (var i in this.validateForm.controls) {
            if (this.validateForm.controls[i]) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.valid) {
            this.loading = true;
            var roles = this.checkOptionsOne.filter(function (item) {
                if (item.checked) {
                    return true;
                }
            }).map(function (item) {
                return item.code;
            });
            this.userService.updateUser({
                data: {
                    id: this.id,
                    loginName: this.validateForm.value.loginName,
                    name: this.validateForm.value.name,
                    phone: this.validateForm.value.phone,
                    remark: this.validateForm.value.remark,
                }
            })
                .subscribe(function (response) {
                _this.loading = false;
                if (response.code === 200) {
                    _this.router.navigate(['/admin/user']);
                    _this._message.create('success', '创建成功', { nzDuration: 4000 });
                }
                else {
                    _this._message.create('error', response.msg, { nzDuration: 4000 });
                }
            });
        }
    };
    UpdateComponent.prototype.getById = function (id) {
        var _this = this;
        this.userService.getById({
            params: {
                params3: id
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.errorCode == 0) {
                _this.validateForm = _this.fb.group({
                    name: [response.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    phone: [response.data.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    loginName: [response.data.loginName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    remark: [response.data.remark, []],
                });
            }
        });
    };
    UpdateComponent.prototype.fanyi = function (roles) {
        var miao = '';
        roles.forEach(function (aaa) {
            miao = miao + ',' + aaa;
        });
        miao = miao.substr(1);
        return miao;
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/admin/user/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.less */ "./src/app/admin/user/update/update.component.less")]
        }),
        __metadata("design:paramtypes", [_share_services_code_data_service__WEBPACK_IMPORTED_MODULE_6__["CodeDataService"],
            _node_modules_ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _share_services_reg_exp_service__WEBPACK_IMPORTED_MODULE_5__["RegExpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _share_restServices_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/admin/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: routes, UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/admin/user/index/index.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/admin/user/add/add.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update/update.component */ "./src/app/admin/user/update/update.component.ts");
/* harmony import */ var _share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../share/services/permission-guard.service */ "./src/app/share/services/permission-guard.service.ts");
/* harmony import */ var _vpn_vpn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vpn/vpn.component */ "./src/app/admin/user/vpn/vpn.component.ts");
/* harmony import */ var _qx_qx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./qx/qx.component */ "./src/app/admin/user/qx/qx.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
        data: {
            name: '用户管理',
            roles: [1001],
            menu: true
        },
        canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermissionGuardService"]]
    },
    // {
    //     path: 'qx',
    //     component: QxComponent,
    //     data: {
    //         name: '权限管理',
    //         roles: [1001],
    //         menu: true
    //     },
    //     canActivate: [PermissionGuardService]
    // },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"],
        data: {
            name: '添加用户',
            roles: [1001]
        },
        canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermissionGuardService"]]
    },
    {
        path: 'update/:id',
        component: _update_update_component__WEBPACK_IMPORTED_MODULE_5__["UpdateComponent"],
        data: {
            name: '编辑用户',
            roles: [1001]
        },
        canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermissionGuardService"]]
    },
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_5__["UpdateComponent"], _qx_qx_component__WEBPACK_IMPORTED_MODULE_8__["QxComponent"], _vpn_vpn_component__WEBPACK_IMPORTED_MODULE_7__["VpnComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]],
            providers: [],
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/admin/user/vpn/vpn.component.html":
/*!***************************************************!*\
  !*** ./src/app/admin/user/vpn/vpn.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-box relation-vpn-ctr\">\n  <div class=\"heard\">\n    <div>\n      <nz-breadcrumb>\n        <nz-breadcrumb-item>\n          <a [routerLink]=\"['../../']\">用户管理</a>\n        </nz-breadcrumb-item>\n        <nz-breadcrumb-item>\n          <span class=\"span\">用户vpn</span>\n        </nz-breadcrumb-item>\n      </nz-breadcrumb>\n      <div class=\"right\">\n      </div>\n    </div>\n  </div>\n  <div class=\"main-box\">\n    <div class=\"tb\">\n        <nz-table #basicTable [nzData]=\"userVpnList\" [nzShowPagination]=false>\n        <thead>\n          <tr>\n            <th>序号</th>\n            <th>ip</th>\n            <th>登录名</th>\n            <th>密码</th>\n            <th>创建时间</th>\n            <th>过期时间</th>\n            <th>是否可用</th>\n            <th>操作</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of userVpnList let i= index\">\n            <td>{{i+1}}</td>\n            <td>{{data.ip}}</td>\n            <td>{{data.loginName}}</td>\n            <td>{{data.password}}</td>\n            <td>{{data.createTime | date :'yyyy-MM-dd hh:mm:ss'}}</td>\n            <td>{{data.overdueTime | date :'yyyy-MM-dd hh:mm:ss'}}</td>\n            <td>{{data.state==2102?\"不可以\":\"可用\"}}</td>\n            <td>\n              <button *ngIf=\"data.state==2101\" nz-popconfirm nz-button nzTitle=\"您确定要删除吗?\" (nzOnConfirm)=\"del(data)\" (nzOnCancel)=\"cancel()\">取消关联</button>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n  \n    <div class=\"add\">\n      <h2>绑定vpn</h2>\n      <nz-select style=\"width: 120px;\" [(ngModel)]=\"vpnRelation.vpnId\" nzAllowClear nzPlaceHolder=\"Choose\">\n        <nz-option *ngFor=\"let item of vpnList\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n      </nz-select>\n      <nz-date-picker [(ngModel)]=\"vpnRelation.overdueTime\" nzShowTime></nz-date-picker>\n      <button (click)=\"add()\" style=\"float: right;\" nz-button nzType=\"default\">保存</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/user/vpn/vpn.component.less":
/*!***************************************************!*\
  !*** ./src/app/admin/user/vpn/vpn.component.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".relation-vpn-ctr .main-box {\n  width: 1200px;\n  margin: 10px auto;\n}\n.relation-vpn-ctr .add {\n  margin: 50px auto;\n  width: 400px;\n}\n"

/***/ }),

/***/ "./src/app/admin/user/vpn/vpn.component.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/user/vpn/vpn.component.ts ***!
  \*************************************************/
/*! exports provided: VpnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpnComponent", function() { return VpnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_restServices_vpn_relation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../share/restServices/vpn-relation.service */ "./src/app/share/restServices/vpn-relation.service.ts");
/* harmony import */ var _share_restServices_vpn_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/restServices/vpn.service */ "./src/app/share/restServices/vpn.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VpnComponent = /** @class */ (function () {
    function VpnComponent(route, vpnService, vpnRelationService) {
        this.route = route;
        this.vpnService = vpnService;
        this.vpnRelationService = vpnRelationService;
        this.userVpnList = [];
        this.vpnList = [];
        this.loading = false;
        this.vpnRelation = {
            vpnId: '',
            userId: '',
            overdueTime: new Date()
        };
    }
    VpnComponent.prototype.ngOnInit = function () {
        this.vpnRelation.userId = this.route.snapshot.params['id'];
        this.getVpnList();
        this.getRelationByUserId();
    };
    VpnComponent.prototype.del = function (item) {
        var _this = this;
        this.vpnRelationService.updateState({
            params: {
                id: item.relationId,
                vpnId: item.vpnId,
                state: 2102
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.code === 200) {
                _this.getVpnList();
                _this.getRelationByUserId();
            }
        });
    };
    VpnComponent.prototype.getRelationByUserId = function () {
        var _this = this;
        this.vpnRelationService.getListByUserId({
            params: {
                id: this.vpnRelation.userId
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.code === 200) {
                _this.userVpnList = response.data;
            }
        });
    };
    VpnComponent.prototype.getVpnList = function () {
        var _this = this;
        this.vpnService.list({
            params: {
                params2: 1,
                params3: 1000
            },
            data: {
                state: 2001
            }
        })
            .subscribe(function (response) {
            if (response.code === 200) {
                _this.vpnList = response.data.pageData;
            }
        });
    };
    VpnComponent.prototype.add = function () {
        var _this = this;
        this.loading = true;
        this.vpnRelationService.add({
            data: {
                userId: this.vpnRelation.userId,
                vpnId: this.vpnRelation.vpnId,
                overdueTime: new Date(this.vpnRelation.overdueTime).getTime(),
            }
        })
            .subscribe(function (response) {
            _this.loading = false;
            _this.getVpnList();
            _this.getRelationByUserId();
        });
    };
    VpnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vpn',
            template: __webpack_require__(/*! ./vpn.component.html */ "./src/app/admin/user/vpn/vpn.component.html"),
            styles: [__webpack_require__(/*! ../../common/style/add.less */ "./src/app/admin/common/style/add.less"), __webpack_require__(/*! ./vpn.component.less */ "./src/app/admin/user/vpn/vpn.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _share_restServices_vpn_service__WEBPACK_IMPORTED_MODULE_2__["VpnService"],
            _share_restServices_vpn_relation_service__WEBPACK_IMPORTED_MODULE_1__["VpnRelationService"]])
    ], VpnComponent);
    return VpnComponent;
}());



/***/ }),

/***/ "./src/app/share/restServices/group.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/share/restServices/group.service.ts ***!
  \*****************************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
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




var GroupService = /** @class */ (function () {
    function GroupService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/group/:params1/:params2/:params3/:params4/:params5';
    }
    // add
    GroupService.prototype.add = function (data) {
        return data.observable;
    };
    // list
    GroupService.prototype.list = function (data) {
        return data.observable;
    };
    // del
    GroupService.prototype.del = function (data) {
        return data.observable;
    };
    // update
    GroupService.prototype.update = function (data) {
        return data.observable;
    };
    // getById
    GroupService.prototype.getById = function (data) {
        return data.observable;
    };
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'add'
            },
            roles: [1001]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], GroupService.prototype, "add", null);
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
    ], GroupService.prototype, "list", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'del'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], GroupService.prototype, "del", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'update'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], GroupService.prototype, "update", null);
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
    ], GroupService.prototype, "getById", null);
    GroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/share/restServices/vpn-relation.service.ts":
/*!************************************************************!*\
  !*** ./src/app/share/restServices/vpn-relation.service.ts ***!
  \************************************************************/
/*! exports provided: VpnRelationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpnRelationService", function() { return VpnRelationService; });
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




var VpnRelationService = /** @class */ (function () {
    function VpnRelationService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/vpn/relation/:params1/:params2/:params3/:params4/:params5';
    }
    // add
    VpnRelationService.prototype.add = function (data) {
        return data.observable;
    };
    // list
    VpnRelationService.prototype.list = function (data) {
        return data.observable;
    };
    // del
    VpnRelationService.prototype.del = function (data) {
        return data.observable;
    };
    // update
    VpnRelationService.prototype.update = function (data) {
        return data.observable;
    };
    // getById
    VpnRelationService.prototype.getById = function (data) {
        return data.observable;
    };
    // updateState
    VpnRelationService.prototype.updateState = function (data) {
        return data.observable;
    };
    // updateState
    VpnRelationService.prototype.getListByUserId = function (data) {
        return data.observable;
    };
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'add'
            },
            roles: [1001]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], VpnRelationService.prototype, "add", null);
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
    ], VpnRelationService.prototype, "list", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'del'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], VpnRelationService.prototype, "del", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'update'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], VpnRelationService.prototype, "update", null);
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
    ], VpnRelationService.prototype, "getById", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'updateState'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], VpnRelationService.prototype, "updateState", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'list'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], VpnRelationService.prototype, "getListByUserId", null);
    VpnRelationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VpnRelationService);
    return VpnRelationService;
}());



/***/ }),

/***/ "./src/app/share/restServices/vpn.service.ts":
/*!***************************************************!*\
  !*** ./src/app/share/restServices/vpn.service.ts ***!
  \***************************************************/
/*! exports provided: VpnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VpnService", function() { return VpnService; });
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




var VpnService = /** @class */ (function () {
    function VpnService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/vpn/:params1/:params2/:params3/:params4/:params5';
    }
    // add
    VpnService.prototype.add = function (data) {
        return data.observable;
    };
    // list
    VpnService.prototype.list = function (data) {
        return data.observable;
    };
    // del
    VpnService.prototype.del = function (data) {
        return data.observable;
    };
    // update
    VpnService.prototype.update = function (data) {
        return data.observable;
    };
    // getById
    VpnService.prototype.getById = function (data) {
        return data.observable;
    };
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'add'
            },
            roles: [1001]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], VpnService.prototype, "add", null);
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
    ], VpnService.prototype, "list", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'del'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], VpnService.prototype, "del", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'update'
            },
            roles: []
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], VpnService.prototype, "update", null);
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
    ], VpnService.prototype, "getById", null);
    VpnService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VpnService);
    return VpnService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module~user-user-module.js.map