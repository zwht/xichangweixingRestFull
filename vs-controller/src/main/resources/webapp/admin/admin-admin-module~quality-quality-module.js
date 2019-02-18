(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module~quality-quality-module"],{

/***/ "./src/app/admin/quality/accident-add/accident-add.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/quality/accident-add/accident-add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-box\" [style.overflow]=\"preivewShow?'hidden':'auto'\">\n  <div class=\"preview overflow-auto;\" *ngIf=\"preivewShow\">\n    <div class=\"close\">\n      <button (click)=\"previewClose()\" nz-button>关闭</button>\n    </div>\n    <div class=\"preview-content\">\n      <div class=\"fileHead\">\n        <div class=\"fileTitle\">{{validateForm.value.title}}</div>\n        <div class=\"policy_fbt\"></div>\n        <!-- <div class=\"policy_ly\">\n              <span>通知标题：川助函〔2018〕15号</span>&nbsp;&nbsp;&nbsp;\n              <span>单位：四川省</span>&nbsp;&nbsp;&nbsp;\n              <span>日期：2018-03-19</span>\t\t\t\n          </div> -->\n        <div class=\"policy_tjlc\">\n          <fieldset>\n            <legend>置顶</legend>\n            <p>{{validateForm.value.top?'是':'否'}}</p>\n          </fieldset>\n        </div>\n      </div>\n      <div style=\"padding:0 60px;min-height:200px;\" [innerHTML]=\"preivewHtml\">\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"heard\">\n    <div>\n      <nz-breadcrumb>\n        <nz-breadcrumb-item>\n          <a [routerLink]=\"['/admin/quality/event']\">质量事件管理</a>\n        </nz-breadcrumb-item>\n        <nz-breadcrumb-item>\n          <span class=\"span\">{{title}}</span>\n        </nz-breadcrumb-item>\n      </nz-breadcrumb>\n    </div>\n  </div>\n  <div class=\"form-box\" style=\"width:1100px\">\n    <div class=\"btn-box\" style=\" text-align: right; margin: 10px auto;\">\n      <button nz-button [routerLink]=\"['/admin/quality/event']\" style=\"margin:0 10px\" nzType=\"default\">返回</button>\n      <button *ngIf=\"showEdit\" style=\"margin:0 10px\" (click)=\"submitForm()\" nzType=\"primary\" nz-button>保存</button>\n      <button *ngIf=\"showEdit\" style=\"margin:0 10px\" (click)=\"submitForm(1)\" nzType=\"primary\" nz-button>保存并发布</button>\n    </div>\n    <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n      <nz-form-item>\n        <!--通知标题-->\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"title\" nzRequired>名称</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input [readonly]=\"!showEdit\" appTrim nz-input id=\"title\" formControlName=\"title\" placeholder=\"输入通知标题\">\n          <nz-form-explain *ngIf=\"validateForm.get('title').dirty && validateForm.get('title').errors\">\n            <ng-container *ngIf=\"validateForm.get('title').hasError('required')\">\n              请输入通知标题！\n            </ng-container>\n            <ng-container *ngIf=\"validateForm.get('title').hasError('length')\">\n              通知标题请少于60字！\n            </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"eventLevel\" nzRequired>\n          <span>\n            事件级别\n          </span>\n        </nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <nz-select style=\"width: 120px;\" formControlName=\"eventLevel\" nzPlaceHolder=\"事件级别\">\n            <nz-option [nzValue]=\"1\" nzLabel=\"质量问题\"></nz-option>\n            <nz-option [nzValue]=\"2\" nzLabel=\"质量事件\"></nz-option>\n            <nz-option [nzValue]=\"3\" nzLabel=\"质量事故\"></nz-option>\n          </nz-select>\n          <nz-form-explain *ngIf=\"validateForm.get('eventLevel').dirty && validateForm.get('eventLevel').errors\">\n            <ng-container *ngIf=\"validateForm.get('eventLevel').hasError('required')\">\n              请选择事件级别！\n            </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"supplierId\" nzRequired>\n          <span>\n            供应商\n          </span>\n        </nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <nz-select style=\"width: 120px;\" formControlName=\"supplierId\" nzPlaceHolder=\"选择行业\">\n            <nz-option *ngFor=\"let item of supplierList\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n          </nz-select>\n          <nz-form-explain *ngIf=\"validateForm.get('supplierId').dirty && validateForm.get('supplierId').errors\">\n            <ng-container *ngIf=\"validateForm.get('supplierId').hasError('required')\">\n              请选择供应商！\n            </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"materials\" nzRequired>涉及物料</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input [readonly]=\"!showEdit\" appTrim nz-input id=\"materials\" formControlName=\"materials\" placeholder=\"输入通知标题\">\n          <nz-form-explain *ngIf=\"validateForm.get('materials').dirty && validateForm.get('materials').errors\">\n            <ng-container *ngIf=\"validateForm.get('materials').hasError('required')\">\n              请输入涉及物料！\n            </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"occurrenceTime\" nzRequired>发生时间</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n            <nz-date-picker [nzDisabled]=\"!showEdit\" formControlName=\"occurrenceTime\" (ngModelChange)=\"dateChange($event)\"></nz-date-picker>\n            <br>\n          <nz-form-explain *ngIf=\"validateForm.get('occurrenceTime').dirty && validateForm.get('occurrenceTime').errors\">\n            <ng-container *ngIf=\"validateForm.get('occurrenceTime').hasError('required')\">\n              请输入发生时间！\n            </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"remark\" nzRequired>\n          <span>\n            事件描述\n          </span>\n        </nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <textarea [readonly]=\"!showEdit\" appTrim nz-input placeholder=\"事件描述\" id=\"remark\" formControlName=\"remark\"></textarea>\n          <nz-form-explain *ngIf=\"validateForm.get('remark').dirty && validateForm.get('remark').errors\">\n            请输入事件描述\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"top\" nzRequired>\n          <span>\n            置顶\n          </span>\n        </nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <nz-radio-group [nzDisabled]=\"!showEdit\" formControlName=\"top\">\n            <label nz-radio [nzValue]=\"1\">是</label>\n            <label nz-radio [nzValue]=\"0\">否</label>\n          </nz-radio-group>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/quality/accident-add/accident-add.component.less":
/*!************************************************************************!*\
  !*** ./src/app/admin/quality/accident-add/accident-add.component.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-box .heard {\n  width: 100%;\n  background: #fff;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.add-box .heard > div {\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n}\n.add-box .heard > div nz-breadcrumb {\n  display: inline-block;\n  margin-top: 23px;\n}\n.add-box .heard > div .span {\n  color: darkgrey;\n}\n.add-box .heard > div .right {\n  position: absolute;\n  right: 20px;\n  top: 17px;\n  text-align: right;\n}\n.add-box .form-box {\n  width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #fff;\n  min-height: 400px;\n}\n/deep/ .w-e-text-container {\n  z-index: 10 !important;\n}\n/deep/ .w-e-droplist {\n  z-index: 888 !important;\n}\n/deep/ .w-e-toolbar .w-e-menu {\n  z-index: 997 !important;\n}\n.flex {\n  display: flex;\n  max-height: 400px;\n}\n.flex .tree-box {\n  flex: 1;\n}\n.flex .tree-box .town-list {\n  padding: 4px 10px;\n  border-radius: 3px;\n}\n.flex .tree-box .town-list .village-list {\n  background-color: #fafafa;\n}\n.flex .tree-box .town-list .village-list .click-item {\n  height: 32px;\n  line-height: 32px;\n  text-indent: 15px;\n  border-color: #eee;\n}\n.flex .tree-box .town-list .click-item {\n  cursor: pointer;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 5px;\n  border-bottom: 1px solid #dfdfdf;\n}\n.flex .select-box {\n  flex: 1;\n  border: 1px solid skyblue;\n  border-radius: 3px;\n  padding: 4px;\n}\n.flex .select-box div {\n  height: 28px;\n  line-height: 28px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.add-box {\n  position: relative;\n  height: 100%;\n}\n.add-box .form-box {\n  height: 100%;\n  height: calc(100% - 92px);\n  overflow: auto;\n  padding-top: 2px;\n}\n.preview {\n  position: absolute;\n  z-index: 998;\n  overflow: auto;\n  top: 0px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.preview .close {\n  position: fixed;\n  right: 70px;\n  top: 100px;\n}\n.preview .preview-content {\n  padding: 10px;\n  min-height: 500px;\n  background-color: #fff;\n  width: 1100px;\n  margin: 20px auto;\n  border-radius: 3px;\n}\n.Breadcrumb {\n  margin-bottom: 20px;\n  width: 100%;\n  background-color: white;\n  padding: 20px 0;\n}\n.Breadcrumb > div {\n  width: 1200px;\n  margin: 0 auto;\n}\n.Breadcrumb > div .span {\n  color: darkgrey;\n}\n.waikuang {\n  width: 1200px;\n  margin: 0 auto;\n  background-color: white;\n}\n.waikuang .user-add {\n  width: 600px;\n  margin: 0 auto;\n  padding-top: 20px;\n}\n.waikuang .user-add [nz-form] {\n  max-width: 600px;\n}\n.shangkuang {\n  width: 1200px;\n  background-color: white;\n  margin: 0 auto;\n  height: 50px;\n  margin-bottom: 3px;\n}\n.shangkuang > span {\n  position: relative;\n  font-size: 17px;\n  left: 20px;\n  top: 10px;\n}\n.fileHead {\n  width: 100%;\n  margin: 0 auto;\n  padding: .2rem 60px;\n  background: #fff;\n}\n.fileTitle {\n  width: 100%;\n  margin: 50px auto 10px;\n  font-size: 32px;\n  color: #217BC3;\n  font-family: \"microsoft yahei\", Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-align: center;\n}\n.policy_fbt {\n  margin-top: 25px;\n  border-bottom: 5px solid #217BC3;\n}\n.policy_ly {\n  margin-top: 20px;\n  font-size: 14px;\n  color: #777777;\n  text-align: center;\n}\n.policy_tjlc {\n  width: 100%;\n  margin: 0 auto;\n}\n.policy_tjlc fieldset {\n  border: 1px solid #BBBBBB;\n  margin-bottom: 15px;\n  background: #F9FDFF;\n  -webkit-padding-before: 0.75em;\n  -webkit-padding-start: 0.75em;\n  -webkit-padding-end: 0.75em;\n  -webkit-padding-after: 0.625em;\n}\n.policy_tjlc fieldset legend {\n  font-weight: bold;\n  font-size: 16px;\n  color: #444444;\n  -webkit-padding-start: 6px;\n  -webkit-padding-end: 6px;\n}\n.policy_nr {\n  width: calc(100% - 60px);\n  margin: 30px auto;\n}\n"

/***/ }),

/***/ "./src/app/admin/quality/accident-add/accident-add.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/quality/accident-add/accident-add.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccidentAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentAddComponent", function() { return AccidentAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_share_restServices_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/restServices/file.service */ "./src/app/share/restServices/file.service.ts");
/* harmony import */ var src_app_share_restServices_quality_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/restServices/quality-event.service */ "./src/app/share/restServices/quality-event.service.ts");
/* harmony import */ var src_app_share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/restServices/supplier.service */ "./src/app/share/restServices/supplier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccidentAddComponent = /** @class */ (function () {
    function AccidentAddComponent(supplierService, qualityEventService, sanitizer, fileService, 
    // private regionService: RegionService,
    // private sessionService: SessionService,
    _message, 
    // private regExpService: RegExpService,
    fb, router, route) {
        this.supplierService = supplierService;
        this.qualityEventService = qualityEventService;
        this.sanitizer = sanitizer;
        this.fileService = fileService;
        this._message = _message;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.loading = false;
        this.checkOptionsOne = [];
        this.parentIdList = [];
        this.title = "新增时间";
        this.roleList = [];
        this.id = 0;
        this.upLoading = false;
        this.showEdit = true;
        this.preivewShow = false;
        this.categorysFoundId = [];
        this.supplierList = [];
        this.time = "";
        this.NameLength = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value.length > 60) {
                return { length: true, error: true };
                // control.value
            }
        };
    }
    AccidentAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.indexOf("edit") > -1) {
            this.title = '编辑事件';
            this.id = this.route.snapshot.params['id'];
            this.qualityEventService['getById']({
                params: {
                    params2: this.id,
                }
            }).subscribe(function (response) {
                _this.loading = false;
                if (response.errorCode === 0) {
                    var detail = response.data;
                    if (detail.status == 1) {
                        _this.showEdit = false;
                        _this.readOnlyText = _this.sanitizer.bypassSecurityTrustHtml(detail.content);
                        _this.title = "查看事件";
                    }
                    _this.validateForm.get('title').setValue(detail.title);
                    _this.validateForm.get('remark').setValue(detail.remark);
                    _this.validateForm.get('supplierId').setValue(detail.supplierId);
                    _this.validateForm.get('eventLevel').setValue(detail.eventLevel);
                    _this.validateForm.get('materials').setValue(detail.materials);
                    _this.validateForm.get('occurrenceTime').setValue(detail.occurrenceTime);
                    // this.validateForm.get('face').setValue(detail.face);
                    _this.validateForm.get('top').setValue(Number(detail.top));
                }
                else {
                    _this._message.create('error', response.msg, { nzDuration: 4000 });
                }
            });
        }
        this.validateForm = this.fb.group({
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.NameLength]],
            remark: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            eventLevel: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            materials: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            occurrenceTime: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            supplierId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            top: [0, []],
        });
        this.getIndustry();
    };
    AccidentAddComponent.prototype.getIndustry = function () {
        var _this = this;
        this.supplierService.getAllByQuery({
            params: {
                pageNumber: 1,
                pageSize: 1000,
            }
        }).subscribe(function (res) {
            _this.supplierList = res.data.pageData;
        });
    };
    AccidentAddComponent.prototype.dateChange = function (e) {
        this.time = e.getFullYear() + "-" + ("00" + (e.getMonth() + 1)).substr(-2) + "-" + ("00" + e.getDate()).substr(-2);
    };
    AccidentAddComponent.prototype.openFile = function () {
        if (this.upLoading) {
            return this._message.create('info', '文件上传中，请稍后');
        }
        document.getElementById('file').click();
    };
    AccidentAddComponent.prototype.uploadFile = function (element) {
        var _this = this;
        if (!element.target.files.length) {
            return;
        }
        var file = element.target.files[0];
        var param = new FormData();
        console.log(param);
        param.append('file', file, file.name);
        //param.append('chunk','0'); 
        // if(param.get('file')['size'] > 2 * 1024 * 1024){
        //   return  this._message.create('info', '回复文件不能大于2M', { nzDuration: 4000 });
        // }
        var a = param.get('file')['type'];
        if (a != 'image/png' && a != 'image/jpeg' && a != 'image/gif' && a != 'image/bmp') {
            element.target.value = '';
            return this._message.create('info', '请上传图片', { nzDuration: 4000 });
        }
        // this.fileName = file.name
        this.upLoading = true;
        this.fileService.uploadHead({
            data: param
        }).subscribe(function (res) {
            console.log(res);
            element.target.value = '';
            _this.upLoading = false;
            if (res.errorCode == 0) {
                // res.data.fileUrl
                _this.validateForm.get('face').setValue(res.data.fileUrl.replace(/\//, "%2f"));
            }
        });
    };
    AccidentAddComponent.prototype.preview = function () {
        this.preivewHtml = this.sanitizer.bypassSecurityTrustHtml(this.validateForm.value.content);
        this.preivewShow = true;
    };
    AccidentAddComponent.prototype.previewClose = function () {
        this.preivewHtml = this.sanitizer.bypassSecurityTrustHtml('');
        this.preivewShow = false;
    };
    AccidentAddComponent.prototype.submitForm = function (k) {
        var _this = this;
        // 验证表单
        for (var i in this.validateForm.controls) {
            if (this.validateForm.controls[i]) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.valid) {
            this.loading = true;
            var data = {
                title: this.validateForm.value.title,
                supplierId: this.validateForm.value.supplierId,
                remark: this.validateForm.value.remark,
                eventLevel: this.validateForm.value.eventLevel,
                materials: this.validateForm.value.materials,
                occurrenceTime: this.time,
                content: this.validateForm.value.content,
                top: Number(this.validateForm.value.top),
                status: 0,
            };
            if (this.id) {
                data['id'] = this.id;
            }
            if (k) {
                data['status'] = 1;
            }
            this.qualityEventService.addAndUpdate({
                data: data
            })
                .subscribe(function (response) {
                _this.loading = false;
                if (response.errorCode === 0) {
                    _this.router.navigate(['/admin/quality/accident']);
                }
                else {
                    _this._message.create('error', response.msg, { nzDuration: 4000 });
                }
            });
        }
    };
    AccidentAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accident-add',
            template: __webpack_require__(/*! ./accident-add.component.html */ "./src/app/admin/quality/accident-add/accident-add.component.html"),
            styles: [__webpack_require__(/*! ./accident-add.component.less */ "./src/app/admin/quality/accident-add/accident-add.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_7__["SupplierService"],
            src_app_share_restServices_quality_event_service__WEBPACK_IMPORTED_MODULE_6__["QualityEventService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            src_app_share_restServices_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AccidentAddComponent);
    return AccidentAddComponent;
}());



/***/ }),

/***/ "./src/app/admin/quality/accident/accident.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/quality/accident/accident.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"list-box\">\n    <div class=\"search clear\" style=\"padding:20px;\">\n      <div>\n        <div class=\"chaxun\">\n          <span>标题</span>\n          <input nz-input [(ngModel)]=\"title\" placeholder=\"查询标题\" >\n        </div>\n        <div class=\"chaxun\">\n          <span>供应商</span>\n          <nz-select style=\"width: 120px;\" [(ngModel)]=\"supplierId\" nzAllowClear nzPlaceHolder=\"状态\">\n            <nz-option *ngFor=\"let item of supplierList\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n          </nz-select>\n        </div>\n        <div class=\"chaxun\">\n          <span>事件级别</span>\n          <nz-select style=\"width: 120px;\" [(ngModel)]=\"eventLevel\" nzAllowClear nzPlaceHolder=\"事件级别\">\n            <nz-option [nzValue]=\"1\" nzLabel=\"质量问题\"></nz-option>\n            <nz-option [nzValue]=\"2\" nzLabel=\"质量事件\"></nz-option>\n            <nz-option [nzValue]=\"3\" nzLabel=\"质量事故\"></nz-option>\n          </nz-select>\n        </div>\n        <div class=\"chaxun\">\n          <span>更新时间</span>\n          <nz-date-picker  [nzFormat]=\"'yyyy/MM/dd'\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" ></nz-date-picker>\n        </div>\n        <div class=\"chaxun\">\n          <span>状态</span>\n          <nz-select style=\"width: 120px;\" [(ngModel)]=\"status\" nzAllowClear nzPlaceHolder=\"状态\">\n            <nz-option [nzValue]=\"1\" nzLabel=\"已发布\"></nz-option>\n            <nz-option [nzValue]=\"0\" nzLabel=\"未发布\"></nz-option>\n          </nz-select>\n        </div>\n        <div class=\"chaxun\">\n          <button nz-button nzType=\"chaxun\" (click)=\"getList()\">查询</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"table-head\">\n      <div class=\"head-h2\">\n        <span>要闻列表</span>\n      </div>\n      <div class=\"btn-box\">\n        <button nz-button nzType=\"danger\" (click)=\"batchDelete()\" >批量删除</button>\n        <button nz-button nzType=\"tianjia\" routerLink=\"./add\">新增质量事件</button>\n      </div>\n    </div>\n    <div class=\"table-box\">\n      <nz-table #basicTable \n        [nzData]=\"list\" [nzFrontPagination]=\"false\"\n        [nzPageIndex]=\"pageNum\"\n        [nzTotal]=\"totalCount\"\n        [nzPageSize]=\"pageSize\"\n        (nzPageIndexChange)=\"getList()\">\n        <!-- <nz-table #basicTable [nzData]=\"list\" [nzShowPagination]=\"false\"> -->\n        <thead>\n          <tr>\n            <th nzShowCheckbox [(nzChecked)]=\"allCk\"  (nzCheckedChange)=\"allChecked($event)\"></th>\n            <th>序号</th>\n            <th>标题</th>\n            <th>更新时间</th>\n            <th>操作人</th>\n            <th>阅读量</th>\n            <th>状态</th>\n            <th>操作</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of list let i= index\">\n            <td nzShowCheckbox [(nzChecked)]=\"data.checked\" ></td>\n            <td>{{i}}</td>\n            <td>{{data.title}}</td>\n            <td>{{data.updateTime}}</td>\n            <td>{{data.updateUser}}</td>\n            <td>{{data.readCount}}</td>\n            <td>{{data.status==1?'已发布':'未发布'}}</td>\n            <td>\n              <a class=\"op\" [routerLink]=\"'./edit/'+data.id\">查看</a>\n              <a class=\"op\" *ngIf=\"data.status==1\"  (click)=\"line(data)\">下线</a>\n              <a class=\"op\" *ngIf=\"data.status==1\" (click)=\"top(data)\">置顶</a>\n              <a class=\"op\" *ngIf=\"data.status==0\"  (click)=\"push(data)\">发布</a>\n              <a class=\"op\" *ngIf=\"data.status==0\" (click)=\"delete(data)\">删除</a>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/quality/accident/accident.component.less":
/*!****************************************************************!*\
  !*** ./src/app/admin/quality/accident/accident.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-box {\n  height: 100%;\n}\n.list-box .search {\n  margin-bottom: 20px;\n  width: 100%;\n  background-color: white;\n  padding: 20px 0;\n}\n.list-box .search > div {\n  width: 1200px;\n  margin: 0 auto;\n}\n.list-box .search .chaxun {\n  margin-right: 20px;\n  float: left;\n}\n.list-box .search .chaxun:last-child {\n  margin-left: 50px;\n}\n.list-box .search .chaxun > span {\n  margin-right: 6px;\n}\n.list-box .search .chaxun input {\n  width: 160px;\n}\n.list-box .table-head {\n  position: relative;\n  width: 95%;\n  background-color: white;\n  margin: 0 auto;\n  height: 50px;\n  bottom: 3px;\n}\n.list-box .table-head .head-h2 {\n  padding-left: 20px;\n  line-height: 50px;\n}\n.list-box .table-head .head-h2 span {\n  font-weight: bold;\n  font-size: 16px;\n}\n.list-box .table-head .btn-box {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n.list-box .table-box {\n  width: 95%;\n  margin: 0 auto;\n  background: #fff;\n  padding: 20px;\n  min-height: 400px;\n}\n.box {\n  height: 100%;\n  display: flex;\n}\n.box .left {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n}\n.box .left .head {\n  height: 50px;\n  background-color: rgba(110, 110, 202, 0.1);\n  color: #333333;\n  line-height: 50px;\n  text-indent: 40px;\n  font-size: 18px;\n}\n.box .left .town-list {\n  padding: 0 20px;\n  height: 100%;\n}\n.box .left .town-list .village-list {\n  background-color: #fafafa;\n}\n.box .left .town-list .village-list .click-item {\n  height: 32px;\n  line-height: 32px;\n  text-indent: 35px;\n  border-color: #eee;\n}\n.box .left .town-list .click-item {\n  cursor: pointer;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 25px;\n  border-bottom: 1px solid #dfdfdf;\n}\n.box .list-box {\n  flex: 1;\n}\n.btn-box > a,\n.btn-box button {\n  margin: 0 10px;\n}\n.op {\n  color: #CF2323;\n  margin: 0 6px;\n}\n"

/***/ }),

/***/ "./src/app/admin/quality/accident/accident.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/quality/accident/accident.component.ts ***!
  \**************************************************************/
/*! exports provided: AccidentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentComponent", function() { return AccidentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var src_app_share_restServices_quality_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/restServices/quality-event.service */ "./src/app/share/restServices/quality-event.service.ts");
/* harmony import */ var src_app_share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/restServices/supplier.service */ "./src/app/share/restServices/supplier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccidentComponent = /** @class */ (function () {
    function AccidentComponent(supplierService, qualityEventService, _message) {
        this.supplierService = supplierService;
        this.qualityEventService = qualityEventService;
        this._message = _message;
        this.dateRange = [];
        this.list = [];
        this.supplierList = [];
        this.title = "";
        this.endTime = null;
        this.status = null;
        this.eventLevel = null;
        this.supplierId = null;
        this.pageNum = 1;
        this.totalCount = 0;
        this.pageSize = 10;
        this.allCk = false;
    }
    AccidentComponent.prototype.ngOnInit = function () {
        this.getList();
        this.getIndustry();
    };
    AccidentComponent.prototype.getIndustry = function () {
        var _this = this;
        this.supplierService.getAllByQuery({
            params: {
                pageNumber: 1,
                pageSize: 1000,
            }
        }).subscribe(function (res) {
            _this.supplierList = res.data.pageData;
        });
    };
    AccidentComponent.prototype.onChange = function (e) {
        if (e) {
            this.endTime = e.getFullYear() + "-" + ("00" + (e.getMonth() + 1)).substr(-2) + "-" + ("00" + e.getDate()).substr(-2);
        }
        else {
            this.endTime = null;
        }
    };
    AccidentComponent.prototype.allChecked = function (v) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            item.checked = v;
        }
    };
    AccidentComponent.prototype.batchDelete = function () {
        var _this = this;
        var d = [];
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.checked) {
                d.push(item.id);
            }
        }
        this.qualityEventService.delete({
            params: {
                ids: d
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '删除失败');
            }
        });
    };
    AccidentComponent.prototype.getList = function () {
        var _this = this;
        var params = {
            title: "",
            pageNumber: this.pageNum,
            pageSize: this.pageSize,
        };
        if (this.status || this.status === 0) {
            params["status"] = this.status;
        }
        if (this.eventLevel) {
            params["eventLevel"] = this.eventLevel;
        }
        if (this.supplierId) {
            params["supplierId"] = this.supplierId;
        }
        if (this.endTime) {
            params["occurrenceTime"] = this.endTime;
        }
        if (this.title) {
            params.title = this.title;
        }
        this.qualityEventService.getAllByQuery({
            params: params
        }).subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.list = response.data.pageData;
                for (var _i = 0, _a = _this.list; _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.checked = false;
                }
                _this.allCk = false;
                _this.totalCount = response.data.totalCount;
            }
        });
    };
    AccidentComponent.prototype.delete = function (d) {
        var _this = this;
        this.qualityEventService.delete({
            params: {
                ids: d.id
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '删除失败');
            }
        });
    };
    // 下线
    AccidentComponent.prototype.line = function (d) {
        var _this = this;
        this.qualityEventService.line({
            params: {
                id: d.id
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '操作失败');
            }
        });
    };
    // 发布
    AccidentComponent.prototype.push = function (d) {
        var _this = this;
        this.qualityEventService.push({
            params: {
                id: d.id
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '发布失败');
            }
        });
    };
    // 置顶
    AccidentComponent.prototype.top = function (d) {
        var _this = this;
        this.qualityEventService.top({
            params: {
                id: d.id
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '发布失败');
            }
        });
    };
    AccidentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accident',
            template: __webpack_require__(/*! ./accident.component.html */ "./src/app/admin/quality/accident/accident.component.html"),
            styles: [__webpack_require__(/*! ./accident.component.less */ "./src/app/admin/quality/accident/accident.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"],
            src_app_share_restServices_quality_event_service__WEBPACK_IMPORTED_MODULE_2__["QualityEventService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], AccidentComponent);
    return AccidentComponent;
}());



/***/ }),

/***/ "./src/app/admin/quality/notice-add/notice-add.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/quality/notice-add/notice-add.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-box\" [style.overflow]=\"preivewShow?'hidden':'auto'\">\n  <div class=\"preview overflow-auto;\" *ngIf=\"preivewShow\">\n    <div class=\"close\">\n      <button (click)=\"previewClose()\" nz-button>关闭</button>\n    </div>\n    <div class=\"preview-content\">\n      <div class=\"fileHead\">\n        <div class=\"fileTitle\">{{validateForm.value.title}}</div>\n        <div class=\"policy_fbt\"></div>\n        <!-- <div class=\"policy_ly\">\n              <span>通知标题：川助函〔2018〕15号</span>&nbsp;&nbsp;&nbsp;\n              <span>单位：四川省</span>&nbsp;&nbsp;&nbsp;\n              <span>日期：2018-03-19</span>\t\t\t\n          </div> -->\n        <div class=\"policy_tjlc\">\n          <fieldset>\n            <legend>置顶</legend>\n            <p>{{validateForm.value.top?'是':'否'}}</p>\n          </fieldset>\n        </div>\n      </div>\n      <div style=\"padding:0 60px;min-height:200px;\" [innerHTML]=\"preivewHtml\">\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"heard\">\n    <div>\n      <nz-breadcrumb>\n        <nz-breadcrumb-item>\n          <a [routerLink]=\"['/admin/quality/notice']\">质量通知公告</a>\n        </nz-breadcrumb-item>\n        <nz-breadcrumb-item>\n          <span class=\"span\">{{title}}</span>\n        </nz-breadcrumb-item>\n      </nz-breadcrumb>\n    </div>\n  </div>\n  <div class=\"form-box\" style=\"width:1100px\">\n    <div class=\"btn-box\" style=\" text-align: right; margin: 10px auto;\">\n      <button nz-button [routerLink]=\"['/admin/quality/notice']\" style=\"margin:0 10px\" nzType=\"default\">返回</button>\n      <button style=\"margin:0 10px\" (click)=\"preview()\" nz-button>预览</button>\n      <button *ngIf=\"showEdit\"  style=\"margin:0 10px\" (click)=\"submitForm()\" nzType=\"primary\" nz-button>保存</button>\n      <button *ngIf=\"showEdit\"  style=\"margin:0 10px\" (click)=\"submitForm(1)\" nzType=\"primary\" nz-button>保存并发布</button>\n    </div>\n    <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n      <nz-form-item>\n        <!--通知标题-->\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"title\" nzRequired>名称</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input [readonly]=\"!showEdit\" appTrim nz-input id=\"title\" formControlName=\"title\" placeholder=\"输入通知标题\">\n          <nz-form-explain *ngIf=\"validateForm.get('title').dirty && validateForm.get('title').errors\">\n            <ng-container *ngIf=\"validateForm.get('title').hasError('required')\">\n              请输入通知标题！\n            </ng-container>\n            <ng-container *ngIf=\"validateForm.get('title').hasError('length')\">\n              通知标题请少于60字！\n            </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"top\" nzRequired>\n          <span>\n            置顶\n          </span>\n        </nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <nz-radio-group [nzDisabled]=\"!showEdit\"  formControlName=\"top\">\n            <label nz-radio [nzValue]=\"1\">是</label>\n            <label nz-radio [nzValue]=\"0\">否</label>\n          </nz-radio-group>\n        </nz-form-control>\n      </nz-form-item>\n\n      <p>正文部分：</p>\n      <nz-form-item>\n        <nz-form-explain *ngIf=\"validateForm.get('content').dirty && validateForm.get('content').errors\">\n          <ng-container *ngIf=\"validateForm.get('content').hasError('required')\">\n            <span style=\"color:red\">详细信息不能为空！</span>\n          </ng-container>\n        </nz-form-explain>\n        <nz-form-control style=\"width:1060px; vertical-align:top;\">\n          <app-wang-editor *ngIf =\"showEdit\"  id=\"content\" formControlName=\"content\"></app-wang-editor>\n          <div *ngIf =\"!showEdit\" style=\"padding:0 60px;border:1px solid #cccccc\" [innerHTML]=\"readOnlyText\"></div>\n        </nz-form-control>\n      </nz-form-item>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/quality/notice-add/notice-add.component.less":
/*!********************************************************************!*\
  !*** ./src/app/admin/quality/notice-add/notice-add.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-box .heard {\n  width: 100%;\n  background: #fff;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.add-box .heard > div {\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n}\n.add-box .heard > div nz-breadcrumb {\n  display: inline-block;\n  margin-top: 23px;\n}\n.add-box .heard > div .span {\n  color: darkgrey;\n}\n.add-box .heard > div .right {\n  position: absolute;\n  right: 20px;\n  top: 17px;\n  text-align: right;\n}\n.add-box .form-box {\n  width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #fff;\n  min-height: 400px;\n}\n/deep/ .w-e-text-container {\n  z-index: 10 !important;\n}\n/deep/ .w-e-droplist {\n  z-index: 888 !important;\n}\n/deep/ .w-e-toolbar .w-e-menu {\n  z-index: 997 !important;\n}\n.flex {\n  display: flex;\n  max-height: 400px;\n}\n.flex .tree-box {\n  flex: 1;\n}\n.flex .tree-box .town-list {\n  padding: 4px 10px;\n  border-radius: 3px;\n}\n.flex .tree-box .town-list .village-list {\n  background-color: #fafafa;\n}\n.flex .tree-box .town-list .village-list .click-item {\n  height: 32px;\n  line-height: 32px;\n  text-indent: 15px;\n  border-color: #eee;\n}\n.flex .tree-box .town-list .click-item {\n  cursor: pointer;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 5px;\n  border-bottom: 1px solid #dfdfdf;\n}\n.flex .select-box {\n  flex: 1;\n  border: 1px solid skyblue;\n  border-radius: 3px;\n  padding: 4px;\n}\n.flex .select-box div {\n  height: 28px;\n  line-height: 28px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.add-box {\n  position: relative;\n  height: 100%;\n}\n.add-box .form-box {\n  height: 100%;\n  height: calc(100% - 92px);\n  overflow: auto;\n  padding-top: 2px;\n}\n.preview {\n  position: absolute;\n  z-index: 998;\n  overflow: auto;\n  top: 0px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.preview .close {\n  position: fixed;\n  right: 70px;\n  top: 100px;\n}\n.preview .preview-content {\n  padding: 10px;\n  min-height: 500px;\n  background-color: #fff;\n  width: 1100px;\n  margin: 20px auto;\n  border-radius: 3px;\n}\n.Breadcrumb {\n  margin-bottom: 20px;\n  width: 100%;\n  background-color: white;\n  padding: 20px 0;\n}\n.Breadcrumb > div {\n  width: 1200px;\n  margin: 0 auto;\n}\n.Breadcrumb > div .span {\n  color: darkgrey;\n}\n.waikuang {\n  width: 1200px;\n  margin: 0 auto;\n  background-color: white;\n}\n.waikuang .user-add {\n  width: 600px;\n  margin: 0 auto;\n  padding-top: 20px;\n}\n.waikuang .user-add [nz-form] {\n  max-width: 600px;\n}\n.shangkuang {\n  width: 1200px;\n  background-color: white;\n  margin: 0 auto;\n  height: 50px;\n  margin-bottom: 3px;\n}\n.shangkuang > span {\n  position: relative;\n  font-size: 17px;\n  left: 20px;\n  top: 10px;\n}\n.fileHead {\n  width: 100%;\n  margin: 0 auto;\n  padding: .2rem 60px;\n  background: #fff;\n}\n.fileTitle {\n  width: 100%;\n  margin: 50px auto 10px;\n  font-size: 32px;\n  color: #217BC3;\n  font-family: \"microsoft yahei\", Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-align: center;\n}\n.policy_fbt {\n  margin-top: 25px;\n  border-bottom: 5px solid #217BC3;\n}\n.policy_ly {\n  margin-top: 20px;\n  font-size: 14px;\n  color: #777777;\n  text-align: center;\n}\n.policy_tjlc {\n  width: 100%;\n  margin: 0 auto;\n}\n.policy_tjlc fieldset {\n  border: 1px solid #BBBBBB;\n  margin-bottom: 15px;\n  background: #F9FDFF;\n  -webkit-padding-before: 0.75em;\n  -webkit-padding-start: 0.75em;\n  -webkit-padding-end: 0.75em;\n  -webkit-padding-after: 0.625em;\n}\n.policy_tjlc fieldset legend {\n  font-weight: bold;\n  font-size: 16px;\n  color: #444444;\n  -webkit-padding-start: 6px;\n  -webkit-padding-end: 6px;\n}\n.policy_nr {\n  width: calc(100% - 60px);\n  margin: 30px auto;\n}\n"

/***/ }),

/***/ "./src/app/admin/quality/notice-add/notice-add.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/quality/notice-add/notice-add.component.ts ***!
  \******************************************************************/
/*! exports provided: NoticeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeAddComponent", function() { return NoticeAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_share_restServices_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/restServices/file.service */ "./src/app/share/restServices/file.service.ts");
/* harmony import */ var src_app_share_restServices_quality_notice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/restServices/quality-notice.service */ "./src/app/share/restServices/quality-notice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NoticeAddComponent = /** @class */ (function () {
    function NoticeAddComponent(qualityNoticeService, sanitizer, fileService, 
    // private regionService: RegionService,
    // private sessionService: SessionService,
    _message, 
    // private regExpService: RegExpService,
    fb, router, route) {
        this.qualityNoticeService = qualityNoticeService;
        this.sanitizer = sanitizer;
        this.fileService = fileService;
        this._message = _message;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.loading = false;
        this.checkOptionsOne = [];
        this.parentIdList = [];
        this.title = "新增通知";
        this.roleList = [];
        this.id = 0;
        this.upLoading = false;
        this.showEdit = true;
        this.preivewShow = false;
        this.categorysFoundId = [];
        this.NameLength = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value.length > 60) {
                return { length: true, error: true };
                // control.value
            }
        };
    }
    NoticeAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.indexOf("edit") > -1) {
            this.title = '编辑通知';
            this.id = this.route.snapshot.params['id'];
            this.qualityNoticeService['getById']({
                params: {
                    params2: this.id,
                }
            }).subscribe(function (response) {
                _this.loading = false;
                if (response.errorCode === 0) {
                    var detail = response.data;
                    if (detail.status == 1) {
                        _this.showEdit = false;
                        _this.readOnlyText = _this.sanitizer.bypassSecurityTrustHtml(detail.content);
                        _this.title = "查看通知";
                    }
                    _this.validateForm.get('title').setValue(detail.title);
                    _this.validateForm.get('content').setValue(detail.content);
                    // this.validateForm.get('abstracts').setValue(detail.abstracts);
                    // this.validateForm.get('face').setValue(detail.face);
                    _this.validateForm.get('top').setValue(Number(detail.top));
                }
                else {
                    _this._message.create('error', response.msg, { nzDuration: 4000 });
                }
            });
        }
        this.validateForm = this.fb.group({
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.NameLength]],
            // abstracts:[null, [Validators.required]],
            content: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // face:[null,[]],
            top: [0, []],
        });
    };
    NoticeAddComponent.prototype.openFile = function () {
        if (this.upLoading) {
            return this._message.create('info', '文件上传中，请稍后');
        }
        document.getElementById('file').click();
    };
    NoticeAddComponent.prototype.uploadFile = function (element) {
        var _this = this;
        if (!element.target.files.length) {
            return;
        }
        var file = element.target.files[0];
        var param = new FormData();
        console.log(param);
        param.append('file', file, file.name);
        //param.append('chunk','0'); 
        // if(param.get('file')['size'] > 2 * 1024 * 1024){
        //   return  this._message.create('info', '回复文件不能大于2M', { nzDuration: 4000 });
        // }
        var a = param.get('file')['type'];
        if (a != 'image/png' && a != 'image/jpeg' && a != 'image/gif' && a != 'image/bmp') {
            element.target.value = '';
            return this._message.create('info', '请上传图片', { nzDuration: 4000 });
        }
        // this.fileName = file.name
        this.upLoading = true;
        this.fileService.uploadHead({
            data: param
        }).subscribe(function (res) {
            console.log(res);
            element.target.value = '';
            _this.upLoading = false;
            if (res.errorCode == 0) {
                // res.data.fileUrl
                _this.validateForm.get('face').setValue(res.data.fileUrl.replace(/\//, "%2f"));
            }
        });
    };
    NoticeAddComponent.prototype.preview = function () {
        this.preivewHtml = this.sanitizer.bypassSecurityTrustHtml(this.validateForm.value.content);
        this.preivewShow = true;
    };
    NoticeAddComponent.prototype.previewClose = function () {
        this.preivewHtml = this.sanitizer.bypassSecurityTrustHtml('');
        this.preivewShow = false;
    };
    NoticeAddComponent.prototype.submitForm = function (k) {
        var _this = this;
        // 验证表单
        for (var i in this.validateForm.controls) {
            if (this.validateForm.controls[i]) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.valid) {
            this.loading = true;
            var data = {
                title: this.validateForm.value.title,
                // abstracts:this.validateForm.value.abstracts,
                content: this.validateForm.value.content,
                // face:this.validateForm.value.face,
                status: 0,
                attachments: [],
                top: Number(this.validateForm.value.top),
            };
            if (this.id) {
                data['id'] = this.id;
            }
            if (k) {
                data['status'] = 1;
            }
            this.qualityNoticeService.addAndUpdate({
                data: data
            })
                .subscribe(function (response) {
                _this.loading = false;
                if (response.errorCode === 0) {
                    _this.router.navigate(['/admin/quality/notice']);
                }
                else {
                    _this._message.create('error', response.msg, { nzDuration: 4000 });
                }
            });
        }
    };
    NoticeAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice-add',
            template: __webpack_require__(/*! ./notice-add.component.html */ "./src/app/admin/quality/notice-add/notice-add.component.html"),
            styles: [__webpack_require__(/*! ./notice-add.component.less */ "./src/app/admin/quality/notice-add/notice-add.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_share_restServices_quality_notice_service__WEBPACK_IMPORTED_MODULE_6__["QualityNoticeService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            src_app_share_restServices_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], NoticeAddComponent);
    return NoticeAddComponent;
}());



/***/ }),

/***/ "./src/app/admin/quality/notice/notice.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/quality/notice/notice.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"list-box\">\n    <div class=\"search clear\" style=\"padding:20px;\">\n      <div>\n        <div class=\"chaxun\">\n          <span>标题</span>\n          <input nz-input [(ngModel)]=\"title\" placeholder=\"查询标题\" >\n        </div>\n        <div class=\"chaxun\">\n          <span>更新时间</span>\n          <nz-range-picker [nzFormat]=\"'yyyy/MM/dd'\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\"></nz-range-picker>\n        </div>\n        <div class=\"chaxun\">\n          <span>状态</span>\n          <nz-select style=\"width: 120px;\" [(ngModel)]=\"status\" nzAllowClear nzPlaceHolder=\"状态\">\n            <nz-option [nzValue]=\"1\" nzLabel=\"已发布\"></nz-option>\n            <nz-option [nzValue]=\"0\" nzLabel=\"未发布\"></nz-option>\n          </nz-select>\n        </div>\n        <div class=\"chaxun\">\n          <button nz-button nzType=\"chaxun\" (click)=\"getList()\">查询</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"table-head\">\n      <div class=\"head-h2\">\n        <span>要闻列表</span>\n      </div>\n      <div class=\"btn-box\">\n        <button nz-button nzType=\"danger\" (click)=\"batchDelete()\" >批量删除</button>\n        <button nz-button nzType=\"tianjia\" routerLink=\"./add\">新增通知公告</button>\n      </div>\n    </div>\n    <div class=\"table-box\">\n      <nz-table #basicTable \n        [nzData]=\"list\" [nzFrontPagination]=\"false\"\n        [nzPageIndex]=\"pageNum\"\n        [nzTotal]=\"totalCount\"\n        [nzPageSize]=\"pageSize\"\n        (nzPageIndexChange)=\"getList()\">\n        <!-- <nz-table #basicTable [nzData]=\"list\" [nzShowPagination]=\"false\"> -->\n        <thead>\n          <tr>\n            <th nzShowCheckbox [(nzChecked)]=\"allCk\"  (nzCheckedChange)=\"allChecked($event)\"></th>\n            <th>序号</th>\n            <th>标题</th>\n            <th>更新时间</th>\n            <th>操作人</th>\n            <th>阅读量</th>\n            <th>状态</th>\n            <th>操作</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of list let i= index\">\n            <td nzShowCheckbox [(nzChecked)]=\"data.checked\" ></td>\n            <td>{{i}}</td>\n            <td>{{data.title}}</td>\n            <td>{{data.updateTime}}</td>\n            <td>{{data.updateUser}}</td>\n            <td>{{data.readCount}}</td>\n            <td>{{data.status==1?'已发布':'未发布'}}</td>\n            <td>\n              <a class=\"op\" [routerLink]=\"'./edit/'+data.id\">查看</a>\n              <a class=\"op\" *ngIf=\"data.status==1\"  (click)=\"line(data)\">下线</a>\n              <a class=\"op\" *ngIf=\"data.status==1\" (click)=\"top(data)\">置顶</a>\n              <a class=\"op\" *ngIf=\"data.status==0\"  (click)=\"push(data)\">发布</a>\n              <a class=\"op\" *ngIf=\"data.status==0\" (click)=\"delete(data)\">删除</a>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/quality/notice/notice.component.less":
/*!************************************************************!*\
  !*** ./src/app/admin/quality/notice/notice.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-box {\n  height: 100%;\n}\n.list-box .search {\n  margin-bottom: 20px;\n  width: 100%;\n  background-color: white;\n  padding: 20px 0;\n}\n.list-box .search > div {\n  width: 1200px;\n  margin: 0 auto;\n}\n.list-box .search .chaxun {\n  margin-right: 20px;\n  float: left;\n}\n.list-box .search .chaxun:last-child {\n  margin-left: 50px;\n}\n.list-box .search .chaxun > span {\n  margin-right: 6px;\n}\n.list-box .search .chaxun input {\n  width: 160px;\n}\n.list-box .table-head {\n  position: relative;\n  width: 95%;\n  background-color: white;\n  margin: 0 auto;\n  height: 50px;\n  bottom: 3px;\n}\n.list-box .table-head .head-h2 {\n  padding-left: 20px;\n  line-height: 50px;\n}\n.list-box .table-head .head-h2 span {\n  font-weight: bold;\n  font-size: 16px;\n}\n.list-box .table-head .btn-box {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n.list-box .table-box {\n  width: 95%;\n  margin: 0 auto;\n  background: #fff;\n  padding: 20px;\n  min-height: 400px;\n}\n.box {\n  height: 100%;\n  display: flex;\n}\n.box .left {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n}\n.box .left .head {\n  height: 50px;\n  background-color: rgba(110, 110, 202, 0.1);\n  color: #333333;\n  line-height: 50px;\n  text-indent: 40px;\n  font-size: 18px;\n}\n.box .left .town-list {\n  padding: 0 20px;\n  height: 100%;\n}\n.box .left .town-list .village-list {\n  background-color: #fafafa;\n}\n.box .left .town-list .village-list .click-item {\n  height: 32px;\n  line-height: 32px;\n  text-indent: 35px;\n  border-color: #eee;\n}\n.box .left .town-list .click-item {\n  cursor: pointer;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 25px;\n  border-bottom: 1px solid #dfdfdf;\n}\n.box .list-box {\n  flex: 1;\n}\n.btn-box > a,\n.btn-box button {\n  margin: 0 10px;\n}\n.op {\n  color: #CF2323;\n  margin: 0 6px;\n}\n"

/***/ }),

/***/ "./src/app/admin/quality/notice/notice.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/quality/notice/notice.component.ts ***!
  \**********************************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var src_app_share_restServices_quality_notice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/restServices/quality-notice.service */ "./src/app/share/restServices/quality-notice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoticeComponent = /** @class */ (function () {
    function NoticeComponent(qualityNoticeService, _message) {
        this.qualityNoticeService = qualityNoticeService;
        this._message = _message;
        this.dateRange = [];
        this.list = [];
        this.title = "";
        this.startTime = null;
        this.endTime = null;
        this.status = null;
        this.pageNum = 1;
        this.totalCount = 0;
        this.pageSize = 10;
        this.allCk = false;
    }
    NoticeComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    NoticeComponent.prototype.onChange = function (e) {
        if (e.length) {
            this.startTime = e[0].getFullYear() + "-" + ("00" + (e[0].getMonth() + 1)).substr(-2) + "-" + ("00" + e[0].getDate()).substr(-2);
            this.endTime = e[1].getFullYear() + "-" + ("00" + (e[1].getMonth() + 1)).substr(-2) + "-" + ("00" + e[1].getDate()).substr(-2);
        }
        else {
            this.startTime = null;
            this.endTime = null;
        }
    };
    NoticeComponent.prototype.allChecked = function (v) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            item.checked = v;
        }
    };
    NoticeComponent.prototype.batchDelete = function () {
        var _this = this;
        var d = [];
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.checked) {
                d.push(item.id);
            }
        }
        this.qualityNoticeService.delete({
            params: {
                ids: d
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '删除失败');
            }
        });
    };
    NoticeComponent.prototype.getList = function (n) {
        var _this = this;
        var params = {
            title: "",
            pageNumber: this.pageNum,
            pageSize: this.pageSize,
        };
        if (this.status || this.status === 0) {
            params["status"] = this.status;
        }
        if (this.endTime) {
            params["endTime"] = this.endTime;
        }
        if (this.startTime) {
            params["startTime"] = this.startTime;
        }
        if (this.title) {
            params.title = this.title;
        }
        this.qualityNoticeService.getAllByQuery({
            params: params
        }).subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.list = response.data.pageData;
                for (var _i = 0, _a = _this.list; _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.checked = false;
                }
                _this.allCk = false;
                _this.totalCount = response.data.totalCount;
            }
        });
    };
    NoticeComponent.prototype.delete = function (d) {
        var _this = this;
        this.qualityNoticeService.delete({
            params: {
                ids: d.id
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '删除失败');
            }
        });
    };
    // 下线
    NoticeComponent.prototype.line = function (d) {
        var _this = this;
        this.qualityNoticeService.line({
            params: {
                id: d.id
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '操作失败');
            }
        });
    };
    // 发布
    NoticeComponent.prototype.push = function (d) {
        var _this = this;
        this.qualityNoticeService.push({
            params: {
                id: d.id
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '发布失败');
            }
        });
    };
    // 置顶
    NoticeComponent.prototype.top = function (d) {
        var _this = this;
        this.qualityNoticeService.top({
            params: {
                id: d.id
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '发布失败');
            }
        });
    };
    NoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice',
            template: __webpack_require__(/*! ./notice.component.html */ "./src/app/admin/quality/notice/notice.component.html"),
            styles: [__webpack_require__(/*! ./notice.component.less */ "./src/app/admin/quality/notice/notice.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_share_restServices_quality_notice_service__WEBPACK_IMPORTED_MODULE_2__["QualityNoticeService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], NoticeComponent);
    return NoticeComponent;
}());



/***/ }),

/***/ "./src/app/admin/quality/quality.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/quality/quality.module.ts ***!
  \*************************************************/
/*! exports provided: routes, QualityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityModule", function() { return QualityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice/notice.component */ "./src/app/admin/quality/notice/notice.component.ts");
/* harmony import */ var _accident_accident_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accident/accident.component */ "./src/app/admin/quality/accident/accident.component.ts");
/* harmony import */ var _solution_solution_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solution/solution.component */ "./src/app/admin/quality/solution/solution.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/permission-guard.service */ "./src/app/share/services/permission-guard.service.ts");
/* harmony import */ var src_app_share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notice-add/notice-add.component */ "./src/app/admin/quality/notice-add/notice-add.component.ts");
/* harmony import */ var _accident_add_accident_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accident-add/accident-add.component */ "./src/app/admin/quality/accident-add/accident-add.component.ts");
/* harmony import */ var _solution_add_solution_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./solution-add/solution-add.component */ "./src/app/admin/quality/solution-add/solution-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'notice',
        component: _notice_notice_component__WEBPACK_IMPORTED_MODULE_1__["NoticeComponent"],
        data: {
            name: '质量通知公告',
            menu: true
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'notice/add',
        component: _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_7__["NoticeAddComponent"],
        data: {
            name: '新增质量通知公告',
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'notice/edit/:id',
        component: _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_7__["NoticeAddComponent"],
        data: {
            name: '编辑质量通知公告',
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'accident',
        component: _accident_accident_component__WEBPACK_IMPORTED_MODULE_2__["AccidentComponent"],
        data: {
            name: '质量事件管理',
            menu: true
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'accident/add',
        component: _accident_add_accident_add_component__WEBPACK_IMPORTED_MODULE_8__["AccidentAddComponent"],
        data: {
            name: '新增质量事件',
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'accident/edit/:id',
        component: _accident_add_accident_add_component__WEBPACK_IMPORTED_MODULE_8__["AccidentAddComponent"],
        data: {
            name: '编辑质量事件',
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'solution',
        component: _solution_solution_component__WEBPACK_IMPORTED_MODULE_3__["SolutionComponent"],
        data: {
            name: '质量问题处理管理',
            menu: true
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'solution/add',
        component: _solution_add_solution_add_component__WEBPACK_IMPORTED_MODULE_9__["SolutionAddComponent"],
        data: {
            name: '新增质量问题处理',
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
    {
        path: 'solution/edit/:id',
        component: _solution_add_solution_add_component__WEBPACK_IMPORTED_MODULE_9__["SolutionAddComponent"],
        data: {
            name: '编辑质量问题处理',
        },
        canActivate: [src_app_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
    },
];
var QualityModule = /** @class */ (function () {
    function QualityModule() {
    }
    QualityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_notice_notice_component__WEBPACK_IMPORTED_MODULE_1__["NoticeComponent"], _accident_add_accident_add_component__WEBPACK_IMPORTED_MODULE_8__["AccidentAddComponent"], _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_7__["NoticeAddComponent"], _accident_accident_component__WEBPACK_IMPORTED_MODULE_2__["AccidentComponent"], _solution_solution_component__WEBPACK_IMPORTED_MODULE_3__["SolutionComponent"], _solution_add_solution_add_component__WEBPACK_IMPORTED_MODULE_9__["SolutionAddComponent"]],
            imports: [
                src_app_share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], QualityModule);
    return QualityModule;
}());



/***/ }),

/***/ "./src/app/admin/quality/solution-add/solution-add.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/quality/solution-add/solution-add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-box\" [style.overflow]=\"preivewShow?'hidden':'auto'\">\n  <div class=\"preview overflow-auto;\" *ngIf=\"preivewShow\">\n    <div class=\"close\">\n      <button (click)=\"previewClose()\" nz-button>关闭</button>\n    </div>\n    <div class=\"preview-content\">\n      <div class=\"fileHead\">\n        <div class=\"fileTitle\">{{validateForm.value.title}}</div>\n        <div class=\"policy_fbt\"></div>\n        <div class=\"policy_tjlc\">\n          <fieldset>\n            <legend>置顶</legend>\n            <p>{{validateForm.value.top?'是':'否'}}</p>\n          </fieldset>\n        </div>\n      </div>\n      <div style=\"padding:0 60px;min-height:200px;\" [innerHTML]=\"preivewHtml\">\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"heard\">\n    <div>\n      <nz-breadcrumb>\n        <nz-breadcrumb-item>\n          <a [routerLink]=\"['/admin/quality/solution']\">质量事件管理</a>\n        </nz-breadcrumb-item>\n        <nz-breadcrumb-item>\n          <span class=\"span\">{{title}}</span>\n        </nz-breadcrumb-item>\n      </nz-breadcrumb>\n    </div>\n  </div>\n  <div class=\"form-box\" style=\"width:1100px\">\n    <div class=\"btn-box\" style=\" text-align: right; margin: 10px auto;\">\n      <button nz-button [routerLink]=\"['/admin/quality/solution']\" style=\"margin:0 10px\" nzType=\"default\">返回</button>\n      <button *ngIf=\"showEdit\" style=\"margin:0 10px\" (click)=\"submitForm()\" nzType=\"primary\" nz-button>保存</button>\n      <button *ngIf=\"showEdit\" style=\"margin:0 10px\" (click)=\"submitForm(1)\" nzType=\"primary\" nz-button>保存并发布</button>\n    </div>\n    <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n      <!--  -->\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"supplierId\" nzRequired>\n          <span>\n            供应商\n          </span>\n        </nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <nz-select style=\"width: 120px;\" formControlName=\"supplierId\" nzPlaceHolder=\"选择行业\">\n            <nz-option *ngFor=\"let item of supplierList\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n          </nz-select>\n          <nz-form-explain *ngIf=\"validateForm.get('supplierId').dirty && validateForm.get('supplierId').errors\">\n            <ng-container *ngIf=\"validateForm.get('supplierId').hasError('required')\">\n              请选择供应商！\n            </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <!--  -->\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"materials\" nzRequired>涉及物料</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input [readonly]=\"!showEdit\" appTrim nz-input id=\"materials\" formControlName=\"materials\" placeholder=\"输入通知标题\">\n          <nz-form-explain *ngIf=\"validateForm.get('materials').dirty && validateForm.get('materials').errors\">\n            <ng-container *ngIf=\"validateForm.get('materials').hasError('required')\">\n              请输入涉及物料！\n            </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <!--  -->\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"dealStartTime\" nzRequired>开始处理时间</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <nz-date-picker [nzDisabled]=\"!showEdit\" formControlName=\"dealStartTime\" (ngModelChange)=\"dateChange($event)\"></nz-date-picker>\n          <br>\n          <nz-form-explain *ngIf=\"validateForm.get('dealStartTime').dirty && validateForm.get('dealStartTime').errors\">\n            <ng-container *ngIf=\"validateForm.get('dealStartTime').hasError('required')\">\n              请选择开始处理时间！\n            </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"dealEndTime\" nzRequired>完成处理时间</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <nz-date-picker [nzDisabled]=\"!showEdit\" formControlName=\"dealEndTime\" (ngModelChange)=\"dateChange2($event)\"></nz-date-picker>\n          <br>\n          <nz-form-explain *ngIf=\"validateForm.get('dealEndTime').dirty && validateForm.get('dealEndTime').errors\">\n            <ng-container *ngIf=\"validateForm.get('dealEndTime').hasError('required')\">\n              请选择完成处理时间！\n            </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <!--  -->\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"remark\" nzRequired>\n          <span>\n            事件描述\n          </span>\n        </nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <textarea [readonly]=\"!showEdit\" appTrim nz-input placeholder=\"事件描述\" id=\"remark\" formControlName=\"remark\"></textarea>\n          <nz-form-explain *ngIf=\"validateForm.get('remark').dirty && validateForm.get('remark').errors\">\n            请输入事件描述\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <!--  -->\n      <!-- <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"top\" nzRequired>\n          <span>\n            置顶\n          </span>\n        </nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <nz-radio-group [nzDisabled]=\"!showEdit\" formControlName=\"top\">\n            <label nz-radio [nzValue]=\"1\">是</label>\n            <label nz-radio [nzValue]=\"0\">否</label>\n          </nz-radio-group>\n        </nz-form-control>\n      </nz-form-item> -->\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/quality/solution-add/solution-add.component.less":
/*!************************************************************************!*\
  !*** ./src/app/admin/quality/solution-add/solution-add.component.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-box .heard {\n  width: 100%;\n  background: #fff;\n  height: 72px;\n  margin-bottom: 20px;\n}\n.add-box .heard > div {\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n}\n.add-box .heard > div nz-breadcrumb {\n  display: inline-block;\n  margin-top: 23px;\n}\n.add-box .heard > div .span {\n  color: darkgrey;\n}\n.add-box .heard > div .right {\n  position: absolute;\n  right: 20px;\n  top: 17px;\n  text-align: right;\n}\n.add-box .form-box {\n  width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #fff;\n  min-height: 400px;\n}\n/deep/ .w-e-text-container {\n  z-index: 10 !important;\n}\n/deep/ .w-e-droplist {\n  z-index: 888 !important;\n}\n/deep/ .w-e-toolbar .w-e-menu {\n  z-index: 997 !important;\n}\n.flex {\n  display: flex;\n  max-height: 400px;\n}\n.flex .tree-box {\n  flex: 1;\n}\n.flex .tree-box .town-list {\n  padding: 4px 10px;\n  border-radius: 3px;\n}\n.flex .tree-box .town-list .village-list {\n  background-color: #fafafa;\n}\n.flex .tree-box .town-list .village-list .click-item {\n  height: 32px;\n  line-height: 32px;\n  text-indent: 15px;\n  border-color: #eee;\n}\n.flex .tree-box .town-list .click-item {\n  cursor: pointer;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 5px;\n  border-bottom: 1px solid #dfdfdf;\n}\n.flex .select-box {\n  flex: 1;\n  border: 1px solid skyblue;\n  border-radius: 3px;\n  padding: 4px;\n}\n.flex .select-box div {\n  height: 28px;\n  line-height: 28px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.add-box {\n  position: relative;\n  height: 100%;\n}\n.add-box .form-box {\n  height: 100%;\n  height: calc(100% - 92px);\n  overflow: auto;\n  padding-top: 2px;\n}\n.preview {\n  position: absolute;\n  z-index: 998;\n  overflow: auto;\n  top: 0px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.preview .close {\n  position: fixed;\n  right: 70px;\n  top: 100px;\n}\n.preview .preview-content {\n  padding: 10px;\n  min-height: 500px;\n  background-color: #fff;\n  width: 1100px;\n  margin: 20px auto;\n  border-radius: 3px;\n}\n.Breadcrumb {\n  margin-bottom: 20px;\n  width: 100%;\n  background-color: white;\n  padding: 20px 0;\n}\n.Breadcrumb > div {\n  width: 1200px;\n  margin: 0 auto;\n}\n.Breadcrumb > div .span {\n  color: darkgrey;\n}\n.waikuang {\n  width: 1200px;\n  margin: 0 auto;\n  background-color: white;\n}\n.waikuang .user-add {\n  width: 600px;\n  margin: 0 auto;\n  padding-top: 20px;\n}\n.waikuang .user-add [nz-form] {\n  max-width: 600px;\n}\n.shangkuang {\n  width: 1200px;\n  background-color: white;\n  margin: 0 auto;\n  height: 50px;\n  margin-bottom: 3px;\n}\n.shangkuang > span {\n  position: relative;\n  font-size: 17px;\n  left: 20px;\n  top: 10px;\n}\n.fileHead {\n  width: 100%;\n  margin: 0 auto;\n  padding: .2rem 60px;\n  background: #fff;\n}\n.fileTitle {\n  width: 100%;\n  margin: 50px auto 10px;\n  font-size: 32px;\n  color: #217BC3;\n  font-family: \"microsoft yahei\", Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-align: center;\n}\n.policy_fbt {\n  margin-top: 25px;\n  border-bottom: 5px solid #217BC3;\n}\n.policy_ly {\n  margin-top: 20px;\n  font-size: 14px;\n  color: #777777;\n  text-align: center;\n}\n.policy_tjlc {\n  width: 100%;\n  margin: 0 auto;\n}\n.policy_tjlc fieldset {\n  border: 1px solid #BBBBBB;\n  margin-bottom: 15px;\n  background: #F9FDFF;\n  -webkit-padding-before: 0.75em;\n  -webkit-padding-start: 0.75em;\n  -webkit-padding-end: 0.75em;\n  -webkit-padding-after: 0.625em;\n}\n.policy_tjlc fieldset legend {\n  font-weight: bold;\n  font-size: 16px;\n  color: #444444;\n  -webkit-padding-start: 6px;\n  -webkit-padding-end: 6px;\n}\n.policy_nr {\n  width: calc(100% - 60px);\n  margin: 30px auto;\n}\n"

/***/ }),

/***/ "./src/app/admin/quality/solution-add/solution-add.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/quality/solution-add/solution-add.component.ts ***!
  \**********************************************************************/
/*! exports provided: SolutionAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionAddComponent", function() { return SolutionAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_share_restServices_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/restServices/file.service */ "./src/app/share/restServices/file.service.ts");
/* harmony import */ var src_app_share_restServices_quality_deal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/restServices/quality-deal.service */ "./src/app/share/restServices/quality-deal.service.ts");
/* harmony import */ var src_app_share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/restServices/supplier.service */ "./src/app/share/restServices/supplier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SolutionAddComponent = /** @class */ (function () {
    function SolutionAddComponent(supplierService, qualityDealService, sanitizer, fileService, _message, fb, router, route) {
        this.supplierService = supplierService;
        this.qualityDealService = qualityDealService;
        this.sanitizer = sanitizer;
        this.fileService = fileService;
        this._message = _message;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.loading = false;
        this.checkOptionsOne = [];
        this.parentIdList = [];
        this.title = "新增时间";
        this.roleList = [];
        this.id = 0;
        this.upLoading = false;
        this.showEdit = true;
        this.preivewShow = false;
        this.categorysFoundId = [];
        this.supplierList = [];
        this.dealEndTime = "";
        this.dealStartTime = "";
        this.NameLength = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value.length > 60) {
                return { length: true, error: true };
                // control.value
            }
        };
    }
    SolutionAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.indexOf("edit") > -1) {
            this.title = '编辑事件';
            this.id = this.route.snapshot.params['id'];
            this.qualityDealService['getById']({
                params: {
                    params2: this.id,
                }
            }).subscribe(function (response) {
                _this.loading = false;
                if (response.errorCode === 0) {
                    var detail = response.data;
                    if (detail.status == 1) {
                        _this.showEdit = false;
                        _this.readOnlyText = _this.sanitizer.bypassSecurityTrustHtml(detail.content);
                        _this.title = "查看事件";
                    }
                    _this.validateForm.get('remark').setValue(detail.remark);
                    _this.validateForm.get('supplierId').setValue(detail.supplierId);
                    _this.validateForm.get('eventLevel').setValue(detail.eventLevel);
                    _this.validateForm.get('materials').setValue(detail.materials);
                    _this.validateForm.get('occurrenceTime').setValue(detail.occurrenceTime);
                }
                else {
                    _this._message.create('error', response.msg, { nzDuration: 4000 });
                }
            });
        }
        this.validateForm = this.fb.group({
            remark: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            materials: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dealEndTime: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dealStartTime: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            supplierId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.getIndustry();
    };
    SolutionAddComponent.prototype.getIndustry = function () {
        var _this = this;
        this.supplierService.getAllByQuery({
            params: {
                pageNumber: 1,
                pageSize: 1000,
            }
        }).subscribe(function (res) {
            _this.supplierList = res.data.pageData;
        });
    };
    SolutionAddComponent.prototype.dateChange = function (e) {
        this.dealEndTime = e.getFullYear() + "-" + ("00" + (e.getMonth() + 1)).substr(-2) + "-" + ("00" + e.getDate()).substr(-2);
    };
    SolutionAddComponent.prototype.dateChange2 = function (e) {
        this.dealStartTime = e.getFullYear() + "-" + ("00" + (e.getMonth() + 1)).substr(-2) + "-" + ("00" + e.getDate()).substr(-2);
    };
    SolutionAddComponent.prototype.openFile = function () {
        if (this.upLoading) {
            return this._message.create('info', '文件上传中，请稍后');
        }
        document.getElementById('file').click();
    };
    SolutionAddComponent.prototype.uploadFile = function (element) {
        var _this = this;
        if (!element.target.files.length) {
            return;
        }
        var file = element.target.files[0];
        var param = new FormData();
        console.log(param);
        param.append('file', file, file.name);
        //param.append('chunk','0'); 
        // if(param.get('file')['size'] > 2 * 1024 * 1024){
        //   return  this._message.create('info', '回复文件不能大于2M', { nzDuration: 4000 });
        // }
        var a = param.get('file')['type'];
        if (a != 'image/png' && a != 'image/jpeg' && a != 'image/gif' && a != 'image/bmp') {
            element.target.value = '';
            return this._message.create('info', '请上传图片', { nzDuration: 4000 });
        }
        // this.fileName = file.name
        this.upLoading = true;
        this.fileService.uploadHead({
            data: param
        }).subscribe(function (res) {
            console.log(res);
            element.target.value = '';
            _this.upLoading = false;
            if (res.errorCode == 0) {
                // res.data.fileUrl
                _this.validateForm.get('face').setValue(res.data.fileUrl.replace(/\//, "%2f"));
            }
        });
    };
    SolutionAddComponent.prototype.preview = function () {
        this.preivewHtml = this.sanitizer.bypassSecurityTrustHtml(this.validateForm.value.content);
        this.preivewShow = true;
    };
    SolutionAddComponent.prototype.previewClose = function () {
        this.preivewHtml = this.sanitizer.bypassSecurityTrustHtml('');
        this.preivewShow = false;
    };
    SolutionAddComponent.prototype.submitForm = function (k) {
        var _this = this;
        // 验证表单
        for (var i in this.validateForm.controls) {
            if (this.validateForm.controls[i]) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.valid) {
            this.loading = true;
            var data = {
                remark: this.validateForm.value.remark,
                supplierId: this.validateForm.value.supplierId,
                materials: this.validateForm.value.materials,
                dealEndTime: this.dealEndTime,
                dealStartTime: this.dealStartTime,
                content: this.validateForm.value.content,
                // top: Number(this.validateForm.value.top),
                status: 0,
            };
            if (this.id) {
                data['id'] = this.id;
            }
            if (k) {
                data['status'] = 1;
            }
            this.qualityDealService.addAndUpdate({
                data: data
            })
                .subscribe(function (response) {
                _this.loading = false;
                if (response.errorCode === 0) {
                    _this.router.navigate(['/admin/quality/solution']);
                }
                else {
                    _this._message.create('error', response.msg, { nzDuration: 4000 });
                }
            });
        }
    };
    SolutionAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solution-add',
            template: __webpack_require__(/*! ./solution-add.component.html */ "./src/app/admin/quality/solution-add/solution-add.component.html"),
            styles: [__webpack_require__(/*! ./solution-add.component.less */ "./src/app/admin/quality/solution-add/solution-add.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_7__["SupplierService"],
            src_app_share_restServices_quality_deal_service__WEBPACK_IMPORTED_MODULE_6__["QualityDealService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            src_app_share_restServices_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SolutionAddComponent);
    return SolutionAddComponent;
}());



/***/ }),

/***/ "./src/app/admin/quality/solution/solution.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/quality/solution/solution.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"list-box\">\n    <div class=\"search clear\" style=\"padding:20px;\">\n      <div>\n        <div class=\"chaxun\">\n          <span>涉及物料</span>\n          <input nz-input [(ngModel)]=\"title\" placeholder=\"查询标题\" >\n        </div>\n        <div class=\"chaxun\">\n          <span>供应商</span>\n          <nz-select style=\"width: 120px;\" [(ngModel)]=\"supplierId\" nzAllowClear nzPlaceHolder=\"状态\">\n            <nz-option *ngFor=\"let item of supplierList\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n          </nz-select>\n        </div>\n        <div class=\"chaxun\">\n          <span>更新时间</span>\n          <nz-date-picker  [nzFormat]=\"'yyyy/MM/dd'\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" ></nz-date-picker>\n        </div>\n        <div class=\"chaxun\">\n          <span>状态</span>\n          <nz-select style=\"width: 120px;\" [(ngModel)]=\"status\" nzAllowClear nzPlaceHolder=\"状态\">\n            <nz-option [nzValue]=\"1\" nzLabel=\"已发布\"></nz-option>\n            <nz-option [nzValue]=\"0\" nzLabel=\"未发布\"></nz-option>\n          </nz-select>\n        </div>\n        <div class=\"chaxun\">\n          <button nz-button nzType=\"chaxun\" (click)=\"getList()\">查询</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"table-head\">\n      <div class=\"head-h2\">\n        <span>要闻列表</span>\n      </div>\n      <div class=\"btn-box\">\n        <button nz-button nzType=\"danger\" (click)=\"batchDelete()\" >批量删除</button>\n        <button nz-button nzType=\"tianjia\" routerLink=\"./add\">新增质量事件</button>\n      </div>\n    </div>\n    <div class=\"table-box\">\n      <nz-table #basicTable \n        [nzData]=\"list\" [nzFrontPagination]=\"false\"\n        [nzPageIndex]=\"pageNum\"\n        [nzTotal]=\"totalCount\"\n        [nzPageSize]=\"pageSize\"\n        (nzPageIndexChange)=\"getList()\">\n        <!-- <nz-table #basicTable [nzData]=\"list\" [nzShowPagination]=\"false\"> -->\n        <thead>\n          <tr>\n            <th nzShowCheckbox [(nzChecked)]=\"allCk\"  (nzCheckedChange)=\"allChecked($event)\"></th>\n            <th>序号</th>\n            <th>标题</th>\n            <th>更新时间</th>\n            <th>操作人</th>\n            <th>阅读量</th>\n            <th>状态</th>\n            <th>操作</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of list let i= index\">\n            <td nzShowCheckbox [(nzChecked)]=\"data.checked\" ></td>\n            <td>{{i}}</td>\n            <td>{{data.title}}</td>\n            <td>{{data.updateTime}}</td>\n            <td>{{data.updateUser}}</td>\n            <td>{{data.readCount}}</td>\n            <td>{{data.status==1?'已发布':'未发布'}}</td>\n            <td>\n              <a class=\"op\" [routerLink]=\"'./edit/'+data.id\">查看</a>\n              <a class=\"op\" *ngIf=\"data.status==1\"  (click)=\"line(data)\">下线</a>\n              <a class=\"op\" *ngIf=\"data.status==1\" (click)=\"top(data)\">置顶</a>\n              <a class=\"op\" *ngIf=\"data.status==0\"  (click)=\"push(data)\">发布</a>\n              <a class=\"op\" *ngIf=\"data.status==0\" (click)=\"delete(data)\">删除</a>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/quality/solution/solution.component.less":
/*!****************************************************************!*\
  !*** ./src/app/admin/quality/solution/solution.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-box {\n  height: 100%;\n}\n.list-box .search {\n  margin-bottom: 20px;\n  width: 100%;\n  background-color: white;\n  padding: 20px 0;\n}\n.list-box .search > div {\n  width: 1200px;\n  margin: 0 auto;\n}\n.list-box .search .chaxun {\n  margin-right: 20px;\n  float: left;\n}\n.list-box .search .chaxun:last-child {\n  margin-left: 50px;\n}\n.list-box .search .chaxun > span {\n  margin-right: 6px;\n}\n.list-box .search .chaxun input {\n  width: 160px;\n}\n.list-box .table-head {\n  position: relative;\n  width: 95%;\n  background-color: white;\n  margin: 0 auto;\n  height: 50px;\n  bottom: 3px;\n}\n.list-box .table-head .head-h2 {\n  padding-left: 20px;\n  line-height: 50px;\n}\n.list-box .table-head .head-h2 span {\n  font-weight: bold;\n  font-size: 16px;\n}\n.list-box .table-head .btn-box {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n.list-box .table-box {\n  width: 95%;\n  margin: 0 auto;\n  background: #fff;\n  padding: 20px;\n  min-height: 400px;\n}\n.box {\n  height: 100%;\n  display: flex;\n}\n.box .left {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n}\n.box .left .head {\n  height: 50px;\n  background-color: rgba(110, 110, 202, 0.1);\n  color: #333333;\n  line-height: 50px;\n  text-indent: 40px;\n  font-size: 18px;\n}\n.box .left .town-list {\n  padding: 0 20px;\n  height: 100%;\n}\n.box .left .town-list .village-list {\n  background-color: #fafafa;\n}\n.box .left .town-list .village-list .click-item {\n  height: 32px;\n  line-height: 32px;\n  text-indent: 35px;\n  border-color: #eee;\n}\n.box .left .town-list .click-item {\n  cursor: pointer;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 25px;\n  border-bottom: 1px solid #dfdfdf;\n}\n.box .list-box {\n  flex: 1;\n}\n.btn-box > a,\n.btn-box button {\n  margin: 0 10px;\n}\n.op {\n  color: #CF2323;\n  margin: 0 6px;\n}\n"

/***/ }),

/***/ "./src/app/admin/quality/solution/solution.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/quality/solution/solution.component.ts ***!
  \**************************************************************/
/*! exports provided: SolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionComponent", function() { return SolutionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var src_app_share_restServices_quality_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/restServices/quality-event.service */ "./src/app/share/restServices/quality-event.service.ts");
/* harmony import */ var src_app_share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/restServices/supplier.service */ "./src/app/share/restServices/supplier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SolutionComponent = /** @class */ (function () {
    function SolutionComponent(supplierService, qualityEventService, _message) {
        this.supplierService = supplierService;
        this.qualityEventService = qualityEventService;
        this._message = _message;
        this.dateRange = [];
        this.list = [];
        this.supplierList = [];
        this.title = "";
        this.startTime = null;
        this.endTime = null;
        this.status = null;
        this.supplierId = null;
        this.pageNum = 1;
        this.totalCount = 0;
        this.pageSize = 10;
        this.allCk = false;
    }
    SolutionComponent.prototype.ngOnInit = function () {
        this.getList();
        this.getIndustry();
    };
    SolutionComponent.prototype.getIndustry = function () {
        var _this = this;
        this.supplierService.getAllByQuery({
            params: {
                pageNumber: 1,
                pageSize: 1000,
            }
        }).subscribe(function (res) {
            _this.supplierList = res.data.pageData;
        });
    };
    SolutionComponent.prototype.onChange = function (e) {
        if (e) {
            this.endTime = e.getFullYear() + "-" + ("00" + (e.getMonth() + 1)).substr(-2) + "-" + ("00" + e.getDate()).substr(-2);
        }
        else {
            this.endTime = null;
        }
    };
    SolutionComponent.prototype.allChecked = function (v) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            item.checked = v;
        }
    };
    SolutionComponent.prototype.batchDelete = function () {
        var _this = this;
        var d = [];
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.checked) {
                d.push(item.id);
            }
        }
        this.qualityEventService.delete({
            params: {
                ids: d
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '删除失败');
            }
        });
    };
    SolutionComponent.prototype.getList = function () {
        var _this = this;
        var params = {
            materials: "",
            pageNumber: this.pageNum,
            pageSize: this.pageSize,
        };
        if (this.status || this.status === 0) {
            params["status"] = this.status;
        }
        if (this.supplierId) {
            params["supplierId"] = this.supplierId;
        }
        if (this.endTime) {
            params["endTime"] = this.endTime;
        }
        if (this.startTime) {
            params["startTime"] = this.startTime;
        }
        if (this.title) {
            params.materials = this.title;
        }
        this.qualityEventService.getAllByQuery({
            params: params
        }).subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.list = response.data.pageData;
                for (var _i = 0, _a = _this.list; _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.checked = false;
                }
                _this.allCk = false;
                _this.totalCount = response.data.totalCount;
            }
        });
    };
    SolutionComponent.prototype.delete = function (d) {
        var _this = this;
        this.qualityEventService.delete({
            params: {
                ids: d.id
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '删除失败');
            }
        });
    };
    // 下线
    SolutionComponent.prototype.line = function (d) {
        var _this = this;
        this.qualityEventService.line({
            params: {
                id: d.id
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '操作失败');
            }
        });
    };
    // 发布
    SolutionComponent.prototype.push = function (d) {
        var _this = this;
        this.qualityEventService.push({
            params: {
                id: d.id
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '发布失败');
            }
        });
    };
    // 置顶
    SolutionComponent.prototype.top = function (d) {
        var _this = this;
        this.qualityEventService.top({
            params: {
                id: d.id
            }
        }).subscribe(function (res) {
            if (res.errorCode === 0) {
                _this.getList();
            }
            else {
                _this._message.info(res.msg || res.data || '发布失败');
            }
        });
    };
    SolutionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solution',
            template: __webpack_require__(/*! ./solution.component.html */ "./src/app/admin/quality/solution/solution.component.html"),
            styles: [__webpack_require__(/*! ./solution.component.less */ "./src/app/admin/quality/solution/solution.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_share_restServices_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"],
            src_app_share_restServices_quality_event_service__WEBPACK_IMPORTED_MODULE_2__["QualityEventService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], SolutionComponent);
    return SolutionComponent;
}());



/***/ }),

/***/ "./src/app/share/restServices/quality-deal.service.ts":
/*!************************************************************!*\
  !*** ./src/app/share/restServices/quality-deal.service.ts ***!
  \************************************************************/
/*! exports provided: QualityDealService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityDealService", function() { return QualityDealService; });
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




var QualityDealService = /** @class */ (function () {
    function QualityDealService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/qualityDeal/:params1/:params2/:params3/:params4/:params5';
    }
    // addOrUpdate
    QualityDealService.prototype.addAndUpdate = function (data) {
        return data.observable;
    };
    // getAllByQuery
    QualityDealService.prototype.getAllByQuery = function (data) {
        return data.observable;
    };
    // list
    QualityDealService.prototype.getAll = function (data) {
        return data.observable;
    };
    // getById
    QualityDealService.prototype.getById = function (data) {
        return data.observable;
    };
    // line
    QualityDealService.prototype.line = function (data) {
        return data.observable;
    };
    // delete
    QualityDealService.prototype.delete = function (data) {
        return data.observable;
    };
    // top
    QualityDealService.prototype.top = function (data) {
        return data.observable;
    };
    // push
    QualityDealService.prototype.push = function (data) {
        return data.observable;
    };
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'saveOrUpdate'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityDealService.prototype, "addAndUpdate", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAllByQuery'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityDealService.prototype, "getAllByQuery", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAll'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityDealService.prototype, "getAll", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getById'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityDealService.prototype, "getById", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'line'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityDealService.prototype, "line", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'delete'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityDealService.prototype, "delete", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'top'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityDealService.prototype, "top", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'push'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityDealService.prototype, "push", null);
    QualityDealService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QualityDealService);
    return QualityDealService;
}());



/***/ }),

/***/ "./src/app/share/restServices/quality-event.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/share/restServices/quality-event.service.ts ***!
  \*************************************************************/
/*! exports provided: QualityEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityEventService", function() { return QualityEventService; });
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




var QualityEventService = /** @class */ (function () {
    function QualityEventService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/qualityEvent/:params1/:params2/:params3/:params4/:params5';
    }
    // addOrUpdate
    QualityEventService.prototype.addAndUpdate = function (data) {
        return data.observable;
    };
    // getAllByQuery
    QualityEventService.prototype.getAllByQuery = function (data) {
        return data.observable;
    };
    // list
    QualityEventService.prototype.getAll = function (data) {
        return data.observable;
    };
    // getById
    QualityEventService.prototype.getById = function (data) {
        return data.observable;
    };
    // line
    QualityEventService.prototype.line = function (data) {
        return data.observable;
    };
    // delete
    QualityEventService.prototype.delete = function (data) {
        return data.observable;
    };
    // top
    QualityEventService.prototype.top = function (data) {
        return data.observable;
    };
    // push
    QualityEventService.prototype.push = function (data) {
        return data.observable;
    };
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'saveOrUpdate'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityEventService.prototype, "addAndUpdate", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAllByQuery'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityEventService.prototype, "getAllByQuery", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAll'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityEventService.prototype, "getAll", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getById'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityEventService.prototype, "getById", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'line'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityEventService.prototype, "line", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'delete'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityEventService.prototype, "delete", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'top'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityEventService.prototype, "top", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'push'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityEventService.prototype, "push", null);
    QualityEventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QualityEventService);
    return QualityEventService;
}());



/***/ }),

/***/ "./src/app/share/restServices/quality-notice.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/share/restServices/quality-notice.service.ts ***!
  \**************************************************************/
/*! exports provided: QualityNoticeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityNoticeService", function() { return QualityNoticeService; });
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




var QualityNoticeService = /** @class */ (function () {
    function QualityNoticeService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/qualityNotice/:params1/:params2/:params3/:params4/:params5';
    }
    // addOrUpdate
    QualityNoticeService.prototype.addAndUpdate = function (data) {
        return data.observable;
    };
    // getAllByQuery
    QualityNoticeService.prototype.getAllByQuery = function (data) {
        return data.observable;
    };
    // list
    QualityNoticeService.prototype.getAll = function (data) {
        return data.observable;
    };
    // getById
    QualityNoticeService.prototype.getById = function (data) {
        return data.observable;
    };
    // line
    QualityNoticeService.prototype.line = function (data) {
        return data.observable;
    };
    // delete
    QualityNoticeService.prototype.delete = function (data) {
        return data.observable;
    };
    // top
    QualityNoticeService.prototype.top = function (data) {
        return data.observable;
    };
    // push
    QualityNoticeService.prototype.push = function (data) {
        return data.observable;
    };
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'saveOrUpdate'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityNoticeService.prototype, "addAndUpdate", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAllByQuery'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityNoticeService.prototype, "getAllByQuery", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getAll'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityNoticeService.prototype, "getAll", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'get',
            params: {
                params1: 'getById'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityNoticeService.prototype, "getById", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'line'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityNoticeService.prototype, "line", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'delete'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityNoticeService.prototype, "delete", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'top'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityNoticeService.prototype, "top", null);
    __decorate([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_1__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'push'
            },
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], QualityNoticeService.prototype, "push", null);
    QualityNoticeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QualityNoticeService);
    return QualityNoticeService;
}());



/***/ }),

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
//# sourceMappingURL=admin-admin-module~quality-quality-module.js.map