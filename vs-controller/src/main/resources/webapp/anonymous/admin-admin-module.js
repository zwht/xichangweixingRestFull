(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: routes, AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _common_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/components/menu/menu.component */ "./src/app/admin/common/components/menu/menu.component.ts");
/* harmony import */ var _share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/services/permission-guard.service */ "./src/app/share/services/permission-guard.service.ts");






var routes = [
    {
        path: '',
        component: _common_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
        children: [
            {
                path: 'step',
                loadChildren: './step/step.module#StepModule',
                data: {
                    name: 'Angular动态加载组件',
                    // hideChild: true,
                    roles: [1001],
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: '',
                loadChildren: './index/index.module#IndexModule',
                data: {
                    name: '首页',
                    // hideChild: true,
                    roles: [1001],
                    menu: true
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'partyNews',
                loadChildren: './partyNews/partyNews.module#PartyNewsModule',
                data: {
                    name: '党建要闻',
                    // hideChild: true,
                    roles: [1001],
                    menu: true
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'strongarmy',
                loadChildren: './strongarmy/strongarmy.module#StrongarmyModule',
                data: {
                    name: '强军模块',
                    // hideChild: true,
                    roles: [1001],
                    menu: true
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'equipment',
                loadChildren: './equipment/equipment.module#EquipmentModule',
                data: {
                    name: '信息查询',
                    // hideChild: true,
                    roles: [1001],
                    menu: true
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'work',
                loadChildren: './work/work.module#WorkModule',
                data: {
                    name: '工作动态',
                    // hideChild: true,
                    roles: [1001],
                    menu: true
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'adminRegula',
                loadChildren: './adminRegula/adminRegula.module#AdminRegulaModule',
                data: {
                    name: '管理规定',
                    // hideChild: true,
                    roles: [1001],
                    menu: false
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'notice',
                loadChildren: './notice/notice.module#NoticeModule',
                data: {
                    name: '通知公告',
                    // hideChild: true,
                    roles: [1001],
                    menu: false
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'quality',
                loadChildren: './quality/quality.module#QualityModule',
                data: {
                    name: '质量专栏',
                    // hideChild: true,
                    roles: [1001],
                    menu: true
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'logistics',
                loadChildren: './logistics/logistics.module#LogisticsModule',
                data: {
                    name: '后勤保障',
                    roles: [1001],
                    menu: true,
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'download',
                loadChildren: './download/download.module#DownloadModule',
                data: {
                    name: '资料下载',
                    // hideChild: true,
                    roles: [1001],
                    menu: true
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'market',
                loadChildren: './market/market.module#MarketModule',
                data: {
                    name: '市场信息',
                    // hideChild: true,
                    roles: [1001],
                    menu: false
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'self',
                loadChildren: './self/self.module#SelfModule',
                data: {
                    name: '个人中心',
                    // hideChild: true,
                    roles: [1001],
                    menu: false
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'link',
                loadChildren: './link/link.module#LinkModule',
                data: {
                    name: '友情链接',
                    // hideChild: true,
                    roles: [1001],
                    menu: false
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
            {
                path: 'report',
                loadChildren: './report/report.module#ReportModule',
                data: {
                    name: '投诉举报',
                    // hideChild: true,
                    roles: [1001],
                    menu: false
                },
                canActivate: [_share_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermissionGuardService"]]
            },
        ]
    }
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _common_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/common/components/menu/menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/common/components/menu/menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menuCpl\" id=\"menuCpl\">\n  <div class=\"logoHead\">\n    <div>\n      <div class=\"logo\">\n        <img style=\"height:35px;margin-top: -10px;\" src=\"../../../../assets/images/logo/logo.png\" alt=\"\">\n        <span class=\"logoTel\">西昌卫星发射中心</span>\n        <span class=\"logoTel\" style=\"margin-left: 0px;font-size: 20px;\">物资供应查询平台</span>\n        <!-- <div class=\"searchK\">\n          <img style=\"height:20px;margin-top: -3px;margin-left: 10px;\" src=\"../../../../assets/images/logo/search.png\"\n            alt=\"\">\n          <input type=\"text\" class=\"inputgaga\" placeholder=\"搜索关键字，联系人或帮助\">\n        </div> -->\n      </div>\n    </div>\n    <div class=\"right\">\n      <nz-dropdown *ngIf=\"userName\" [nzPlacement]=\"'bottomRight'\">\n        <a class=\"ant-dropdown-link\" nz-dropdown>\n          <span class=\"overflow\" [title]='userName'>\n            <img class=\"hardImg\" [src]=\"'/v1/file/img/'+hardImg\" alt=\"\">\n            <b> {{userName}}</b>\n          </span>\n          <i class=\"anticon anticon-down\"></i>\n        </a>\n        <ul nz-menu>\n          <li *ngFor=\"let item of rightDown let i=index\" nz-menu-item (click)=\"downChange(item)\">\n            <span>{{item.label}}</span>\n          </li>\n        </ul>\n      </nz-dropdown>\n    </div>\n  </div>\n  <div class=\"header\">\n    <div>\n      <!-- <div class=\"logo\">\n        <img style=\"height: 40px;\" src=\"../../../../assets/images/logo/logo.png\" alt=\"\">\n      </div> -->\n      <div class=\"topMenu\">\n        <ul class=\"leftUrl clear\" *ngIf=\"menuLocation\">\n          <li *ngFor=\"let item of menu let i=index\" [ngClass]=\"{active:item.active,show:item.show,noChild:!item.children.length}\">\n            <div class=\"h2\" [class.hasC]=\"item.children.length\" (click)=\"bigMenuTop(item)\">\n              <span>{{item.name}}</span>\n              <i *ngIf=\"item.children.length\" class=\"anticon anticon-up\"></i>\n              <i *ngIf=\"item.children.length\" class=\"anticon anticon-down\"></i>\n            </div>\n            <ul class=\"child\">\n              <li *ngFor=\"let child of item.children let j=index\" (click)=\"goMenuTop(child)\" [ngClass]=\"{active:child.active}\">\n                <span>{{child.name}}</span>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"mainBox\" [ngStyle]=\"heightClass\" [ngClass]=\"{menuTopBox:menuLocation}\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <div class=\"other\">\n    <div class=\"other_data\">\n      <div class=\"friendLink\">\n        <span style=\"color: #CF2323;float: left;margin-right: 60px;\">友情连接</span>\n        <div style=\"float: left;width: 80%;\">\n          <div class=\"friendLinkBox\" *ngFor=\"let item of friendLink\" (click)=\"gun(item.link)\">{{item.name}}</div>\n        </div>\n        <span style=\"float: right;\" (click)=\"gengduogun()\">更多 ></span>\n      </div>\n      <div class=\"friendLink\">\n        <span style=\"color: #CF2323;float: left;margin-right: 90px;\">关于</span>\n        <div style=\"float: left;width: 80%;\">\n          <div class=\"friendLinkBox\">联系我们</div>\n        </div>\n        <div style=\"width: 106px;position: absolute;margin-left: 250px;margin-top: -15px\" >\n          <span style=\"line-height: 50px\">举报监督</span>\n          <img src=\"../../../assets/images/cert.png\">\n        </div>\n      </div>\n      <div class=\"friendLink\">\n        <span style=\"color: #CF2323;float: left;margin-right: 90px;\">商务</span>\n        <div style=\"float: left;width: 80%;\">\n          <div class=\"friendLinkBox\" style=\"font-weight: 600\">服务热线：0834-82738879</div>\n          <div class=\"friendLinkBox\" style=\"font-weight: 600\">商务合作：0834-23976688</div>\n          <div class=\"friendLinkBox\" style=\"font-weight: 600\">官方邮件地址：xcwsfszx@163.com</div>\n        </div>\n      </div>\n      <div class=\"heng\"></div>\n      <div class=\"logo\">\n        <img src=\"../../../../assets/images/logo.png\">\n        <span style=\"font-size:20px;margin: 0 5px;\">西昌卫星发射中心</span>\n        <span style=\"font-size:16px;margin: 0 5px;\">物资供应查询平台</span>\n        <div class=\"small-font\">XICHANG SATELLITE LAUNCH CENTER MATERIAL SUPPLY INQUIRY PLATFORM</div>\n      </div>\n      <div class=\"you\">\n        <div>\n          Copyright©2018版权所有 中国西昌卫星发射中心 备案序号:川ICP备 10029358号 公网安备1104010029358号\n        </div>\n        <div>\n          网站运维：四川成都清数科技有限公司 访问统计：\n        </div>\n        <div>\n          地址：凉山彝族自治州冕宁县泽远乡封家湾　邮编：735400\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/common/components/menu/menu.component.less":
/*!******************************************************************!*\
  !*** ./src/app/admin/common/components/menu/menu.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.menuCpl {\n  height: 100%;\n}\n.menuCpl .logoHead {\n  height: 60px;\n  width: 100%;\n  background: #CF2323;\n}\n.menuCpl .logoHead .logo {\n  position: absolute;\n  left: 250px;\n  height: 60px;\n}\n.menuCpl .logoHead .logo .logoTel {\n  line-height: 60px;\n  margin-left: 30px;\n  margin-right: 5px;\n  font-size: 24px;\n  color: #ffffff;\n}\n.menuCpl .logoHead .logo .searchK {\n  position: relative;\n  bottom: 45px;\n  left: 600px;\n  border-radius: 20px;\n  width: 250px;\n  height: 30px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.menuCpl .logoHead .logo .searchK .inputgaga {\n  margin-left: 10px;\n  border: none;\n  width: 200px;\n  height: 30px;\n  background: none;\n  color: white;\n}\n.menuCpl .logoHead .logo .searchK .inputgaga::-webkit-input-placeholder {\n  color: white;\n}\n.menuCpl .logoHead .right {\n  position: absolute;\n  right: 50px;\n  top: 0;\n  line-height: 60px;\n}\n.menuCpl .logoHead .right /deep/ .el-dropdown {\n  color: #808080;\n}\n.menuCpl .logoHead .right /deep/ .el-icon-caret-bottom {\n  display: none;\n}\n.menuCpl .logoHead .right /deep/ .ant-dropdown-link span {\n  line-height: 50px;\n  text-align: center;\n  vertical-align: middle;\n  display: inline-block;\n  color: white;\n  border-radius: 25px;\n  position: relative;\n  background-color: #8b77e0;\n  height: 50px;\n  width: 50px;\n}\n.menuCpl .logoHead .right /deep/ .ant-dropdown-link img {\n  width: 50px;\n  border-radius: 25px;\n}\n.menuCpl .logoHead .right /deep/ .ant-dropdown-link b {\n  position: absolute;\n  top: 0;\n  left: 0px;\n  width: 100%;\n  text-align: center;\n  border-radius: 25px;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 50px;\n  width: 50px;\n}\n.menuCpl .logoHead .right /deep/ .ant-dropdown-link span:hover b {\n  display: none;\n}\n.menuCpl .logoHead .right /deep/ .ant-dropdown-link i {\n  color: white;\n  vertical-align: middle;\n}\n.menuCpl .logoHead .right nz-tooltip {\n  font-size: 18px;\n  width: 28px;\n  display: inline-block;\n  line-height: 52px;\n}\n.menuCpl .logoHead .right nz-tooltip i {\n  cursor: pointer;\n  display: inline-block;\n}\n.menuCpl .logoHead .right .idEtl {\n  margin-right: 20px;\n  cursor: pointer;\n  opacity: 0.7;\n  float: left;\n}\n.menuCpl .logoHead .right .idEtl:hover {\n  opacity: 1;\n}\n.menuCpl > .header {\n  height: 60px;\n  width: 100%;\n  /* background-image: linear-gradient(to right, #7BBFEA, #4BB2F4);*/\n  background: #B41A1A;\n  margin: 0 auto;\n  line-height: 60px;\n  color: #808080;\n}\n.menuCpl > .header a {\n  color: #808080;\n}\n.menuCpl > .header .topMenu {\n  padding: 0 130px 0 200px;\n  height: 100%;\n}\n.menuCpl > .header > div {\n  width: 100%;\n  position: relative;\n  height: 100%;\n}\n.menuCpl .topMenu .leftUrl {\n  padding-left: 40px;\n  height: 100%;\n  overflow: inherit;\n}\n.menuCpl .topMenu .leftUrl > li {\n  float: left;\n  position: relative;\n  height: 100%;\n}\n.menuCpl .topMenu .leftUrl > li > .h2 {\n  display: inline-block;\n  line-height: 30px;\n  padding: 0 16px;\n  margin: 0 10px;\n  border-radius: 20px;\n  cursor: pointer;\n  position: relative;\n  font-size: 14px;\n  font-weight: normal;\n}\n.menuCpl .topMenu .leftUrl > li > .h2.hasC {\n  padding-right: 30px;\n}\n.menuCpl .topMenu .leftUrl > li > .h2 .anticon {\n  display: none;\n  position: absolute;\n  right: 10px;\n  top: 9px;\n  color: white;\n}\n.menuCpl .topMenu .leftUrl > li > .h2 .anticon-down {\n  display: block;\n  color: white;\n}\n.menuCpl .topMenu .leftUrl > li > .h2 span {\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  text-align: center;\n  font-weight: normal;\n  opacity: 0.7;\n  color: #ffffff;\n  line-height: 30px;\n}\n.menuCpl .topMenu .leftUrl > li.active .h2 {\n  background: rgba(255, 255, 255, 0.1);\n}\n.menuCpl .topMenu .leftUrl > li .child {\n  position: absolute;\n  top: 44px;\n  left: 0;\n  width: 100%;\n  background: #fff;\n  overflow: hidden;\n  display: none;\n  z-index: 999;\n  min-width: 1.5rem;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  color: #666;\n}\n.menuCpl .topMenu .leftUrl > li .child li {\n  cursor: pointer;\n  height: 36px;\n  line-height: 36px;\n  padding-left: 10px;\n}\n.menuCpl .topMenu .leftUrl > li .child li span {\n  display: block;\n  height: 100%;\n}\n.menuCpl .topMenu .leftUrl > li .child li.active,\n.menuCpl .topMenu .leftUrl > li .child li:hover {\n  background: #f1f1f1;\n}\n.menuCpl .topMenu .leftUrl > li:hover .h2 .anticon-down {\n  display: none;\n}\n.menuCpl .topMenu .leftUrl > li:hover .h2 .anticon-up {\n  display: block;\n}\n.menuCpl .topMenu .leftUrl > li:hover .child {\n  display: block;\n}\n.menuCpl .topMenu nz-dropdown {\n  margin-left: 20px;\n  width: 40px;\n}\n.menuCpl .topMenu nz-dropdown .dropSpan {\n  display: block;\n  height: 49px;\n  width: 24px;\n}\n.menuCpl .topMenu nz-dropdown .ant-btn {\n  background: #c00;\n  color: #fff;\n  border: none;\n  width: 24px;\n  height: 24px;\n  font-size: 18px;\n  font-weight: bold;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);\n}\n.menuCpl .search {\n  position: absolute;\n  right: 200px;\n  top: 0;\n}\n.menuCpl .search /deep/ .ant-input-affix-wrapper {\n  width: 160px;\n  border: none;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.1);\n  top: 0;\n}\n.menuCpl .search /deep/ .ant-input {\n  font-size: 12px;\n  height: 24px;\n  line-height: 24px;\n  padding-left: 20px;\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  border-radius: 20px;\n  color: #fff;\n}\n.menuCpl .search /deep/ .anticon-search {\n  color: #fff;\n}\n.menuCpl .other {\n  width: 100%;\n  background-color: #F8F8F8;\n}\n.menuCpl .other .other_data {\n  width: 60%;\n  margin: 0 auto;\n  padding-bottom: 30px ;\n  overflow: hidden;\n}\n.menuCpl .other .other_data .friendLink {\n  width: 100%;\n  margin: 40px 0;\n  overflow: hidden;\n}\n.menuCpl .other .other_data .friendLink .friendLinkBox {\n  float: left;\n  margin: 0 20px;\n}\n.menuCpl .other .other_data .heng {\n  width: 100%;\n  border-top: 1px solid #CACACA;\n  margin-bottom: 30px;\n}\n.menuCpl .other .other_data .logo {\n  width: 450px;\n  height: 60px;\n  position: relative;\n  margin: 0px auto 10px auto;\n}\n.menuCpl .other .other_data .logo .small-font {\n  width: 900px;\n  font-size: 12px;\n  -webkit-transform: scale(0.65, 0.65);\n          transform: scale(0.65, 0.65);\n  position: absolute;\n  bottom: 12px;\n  left: -52px;\n}\n.menuCpl .other .other_data .you {\n  text-align: center;\n}\n.menuCpl .other .other_data .you div {\n  font-size: 12px;\n}\n.menuCpl > .menuTopBox {\n  width: 100%;\n  /*写给不支持calc()的浏览器*/\n  width: calc(100% - 0px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tbW9uL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3BvZW0vRG9jdW1lbnRzLzAxLXdvcmtmb2xkZXIvMDNfcXNrai8wNC14aWNoYW5nd2VpeGluZy9zcmMvYXBwL2FkbWluL2NvbW1vbi9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0MsMkVBQTJFO0FBQzNFLDZGQUE2RjtBQ0Q3RjtFQUFVLFlBQUE7QURJVjtBQ0pBO0VBQ1ksWUFBQTtFQUFjLFdBQUE7RUFBWSxtQkFBQTtBRFF0QztBQ1RBO0VBRVcsa0JBQUE7RUFBbUIsV0FBQTtFQUFZLFlBQUE7QURZMUM7QUNkQTtFQUdlLGlCQUFBO0VBQW1CLGlCQUFBO0VBQWtCLGlCQUFBO0VBQWtCLGVBQUE7RUFBZSxjQUFBO0FEa0JyRjtBQ3JCQTtFQUtRLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxXQUFBO0VBQVksbUJBQUE7RUFDNUMsWUFBQTtFQUFZLFlBQUE7RUFBYSxvQ0FBQTtBRHdCakM7QUM5QkE7RUFPbUIsaUJBQUE7RUFBbUIsWUFBQTtFQUFhLFlBQUE7RUFBYSxZQUFBO0VBQVksZ0JBQUE7RUFBaUIsWUFBQTtBRCtCN0Y7QUN0Q0E7RUFTK0MsWUFBQTtBRGdDL0M7QUN6Q0E7RUFZWSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsTUFBQTtFQUFPLGlCQUFBO0FEbUNwRDtBQy9DQTtFQWEwQixjQUFBO0FEcUMxQjtBQ2xEQTtFQWNtQyxhQUFBO0FEdUNuQztBQ3JEQTtFQWVvQyxpQkFBQTtFQUFrQixrQkFBQTtFQUFrQixzQkFBQTtFQUNoRSxxQkFBQTtFQUF1QixZQUFBO0VBQWEsbUJBQUE7RUFBb0Isa0JBQUE7RUFDeEQseUJBQUE7RUFBb0MsWUFBQTtFQUFhLFdBQUE7QURnRHpEO0FDakVBO0VBa0JxQyxXQUFBO0VBQWEsbUJBQUE7QURtRGxEO0FD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SjtBQ3JRQTtFQXdIUSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QURnSlI7QUMzUUE7RUE2SFksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRGlKWjtBQ2hSQTtFQWlJZ0IsV0FBQTtFQUNBLGNBQUE7QURrSmhCO0FDcFJBO0VBc0lZLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FEaUpaO0FDelJBO0VBMklZLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBRGlKWjtBQy9SQTtFQWdKZ0IsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRGtKaEI7QUN2U0E7RUF5Slksa0JBQUE7QURpSlo7QUMxU0E7RUEySmdCLGVBQUE7QURrSmhCO0FDN1NBO0VBa0tJLFdBQUE7RUQ4SUYsa0JBQWtCO0VDM0loQix1QkFBQTtBRCtJSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbW1vbi9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMsc3RyaW5nLW5vLW5ld2xpbmUgKi9cbi5tZW51Q3BsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1lbnVDcGwgLmxvZ29IZWFkIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0NGMjMyMztcbn1cbi5tZW51Q3BsIC5sb2dvSGVhZCAubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjUwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tZW51Q3BsIC5sb2dvSGVhZCAubG9nbyAubG9nb1RlbCB7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ubWVudUNwbCAubG9nb0hlYWQgLmxvZ28gLnNlYXJjaEsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNDVweDtcbiAgbGVmdDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4ubWVudUNwbCAubG9nb0hlYWQgLmxvZ28gLnNlYXJjaEsgLmlucHV0Z2FnYSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWVudUNwbCAubG9nb0hlYWQgLmxvZ28gLnNlYXJjaEsgLmlucHV0Z2FnYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tZW51Q3BsIC5sb2dvSGVhZCAucmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1MHB4O1xuICB0b3A6IDA7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xufVxuLm1lbnVDcGwgLmxvZ29IZWFkIC5yaWdodCAvZGVlcC8gLmVsLWRyb3Bkb3duIHtcbiAgY29sb3I6ICM4MDgwODA7XG59XG4ubWVudUNwbCAubG9nb0hlYWQgLnJpZ2h0IC9kZWVwLyAuZWwtaWNvbi1jYXJldC1ib3R0b20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1lbnVDcGwgLmxvZ29IZWFkIC5yaWdodCAvZGVlcC8gLmFudC1kcm9wZG93bi1saW5rIHNwYW4ge1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI3N2UwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLm1lbnVDcGwgLmxvZ29IZWFkIC5yaWdodCAvZGVlcC8gLmFudC1kcm9wZG93bi1saW5rIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLm1lbnVDcGwgLmxvZ29IZWFkIC5yaWdodCAvZGVlcC8gLmFudC1kcm9wZG93bi1saW5rIGIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG4ubWVudUNwbCAubG9nb0hlYWQgLnJpZ2h0IC9kZWVwLyAuYW50LWRyb3Bkb3duLWxpbmsgc3Bhbjpob3ZlciBiIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tZW51Q3BsIC5sb2dvSGVhZCAucmlnaHQgL2RlZXAvIC5hbnQtZHJvcGRvd24tbGluayBpIHtcbiAgY29sb3I6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm1lbnVDcGwgLmxvZ29IZWFkIC5yaWdodCBuei10b29sdGlwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogMjhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogNTJweDtcbn1cbi5tZW51Q3BsIC5sb2dvSGVhZCAucmlnaHQgbnotdG9vbHRpcCBpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubWVudUNwbCAubG9nb0hlYWQgLnJpZ2h0IC5pZEV0bCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm1lbnVDcGwgLmxvZ29IZWFkIC5yaWdodCAuaWRFdGw6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLm1lbnVDcGwgPiAuaGVhZGVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjN0JCRkVBLCAjNEJCMkY0KTsqL1xuICBiYWNrZ3JvdW5kOiAjQjQxQTFBO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuLm1lbnVDcGwgPiAuaGVhZGVyIGEge1xuICBjb2xvcjogIzgwODA4MDtcbn1cbi5tZW51Q3BsID4gLmhlYWRlciAudG9wTWVudSB7XG4gIHBhZGRpbmc6IDAgMTMwcHggMCAyMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1lbnVDcGwgPiAuaGVhZGVyID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1lbnVDcGwgLnRvcE1lbnUgLmxlZnRVcmwge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG4ubWVudUNwbCAudG9wTWVudSAubGVmdFVybCA+IGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1lbnVDcGwgLnRvcE1lbnUgLmxlZnRVcmwgPiBsaSA+IC5oMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubWVudUNwbCAudG9wTWVudSAubGVmdFVybCA+IGxpID4gLmgyLmhhc0Mge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuLm1lbnVDcGwgLnRvcE1lbnUgLmxlZnRVcmwgPiBsaSA+IC5oMiAuYW50aWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogOXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWVudUNwbCAudG9wTWVudSAubGVmdFVybCA+IGxpID4gLmgyIC5hbnRpY29uLWRvd24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1lbnVDcGwgLnRvcE1lbnUgLmxlZnRVcmwgPiBsaSA+IC5oMiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgb3BhY2l0eTogMC43O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4ubWVudUNwbCAudG9wTWVudSAubGVmdFVybCA+IGxpLmFjdGl2ZSAuaDIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4ubWVudUNwbCAudG9wTWVudSAubGVmdFVybCA+IGxpIC5jaGlsZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogOTk5O1xuICBtaW4td2lkdGg6IDEuNXJlbTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICM2NjY7XG59XG4ubWVudUNwbCAudG9wTWVudSAubGVmdFVybCA+IGxpIC5jaGlsZCBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm1lbnVDcGwgLnRvcE1lbnUgLmxlZnRVcmwgPiBsaSAuY2hpbGQgbGkgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWVudUNwbCAudG9wTWVudSAubGVmdFVybCA+IGxpIC5jaGlsZCBsaS5hY3RpdmUsXG4ubWVudUNwbCAudG9wTWVudSAubGVmdFVybCA+IGxpIC5jaGlsZCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG4ubWVudUNwbCAudG9wTWVudSAubGVmdFVybCA+IGxpOmhvdmVyIC5oMiAuYW50aWNvbi1kb3duIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tZW51Q3BsIC50b3BNZW51IC5sZWZ0VXJsID4gbGk6aG92ZXIgLmgyIC5hbnRpY29uLXVwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWVudUNwbCAudG9wTWVudSAubGVmdFVybCA+IGxpOmhvdmVyIC5jaGlsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1lbnVDcGwgLnRvcE1lbnUgbnotZHJvcGRvd24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG4ubWVudUNwbCAudG9wTWVudSBuei1kcm9wZG93biAuZHJvcFNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0OXB4O1xuICB3aWR0aDogMjRweDtcbn1cbi5tZW51Q3BsIC50b3BNZW51IG56LWRyb3Bkb3duIC5hbnQtYnRuIHtcbiAgYmFja2dyb3VuZDogI2MwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLm1lbnVDcGwgLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwMHB4O1xuICB0b3A6IDA7XG59XG4ubWVudUNwbCAuc2VhcmNoIC9kZWVwLyAuYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xuICB3aWR0aDogMTYwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB0b3A6IDA7XG59XG4ubWVudUNwbCAuc2VhcmNoIC9kZWVwLyAuYW50LWlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tZW51Q3BsIC5zZWFyY2ggL2RlZXAvIC5hbnRpY29uLXNlYXJjaCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1lbnVDcGwgLm90aGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG59XG4ubWVudUNwbCAub3RoZXIgLm90aGVyX2RhdGEge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDMwcHggO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1lbnVDcGwgLm90aGVyIC5vdGhlcl9kYXRhIC5mcmllbmRMaW5rIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNDBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1lbnVDcGwgLm90aGVyIC5vdGhlcl9kYXRhIC5mcmllbmRMaW5rIC5mcmllbmRMaW5rQm94IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLm1lbnVDcGwgLm90aGVyIC5vdGhlcl9kYXRhIC5oZW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0FDQUNBO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLm1lbnVDcGwgLm90aGVyIC5vdGhlcl9kYXRhIC5sb2dvIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwcHggYXV0byAxMHB4IGF1dG87XG59XG4ubWVudUNwbCAub3RoZXIgLm90aGVyX2RhdGEgLmxvZ28gLnNtYWxsLWZvbnQge1xuICB3aWR0aDogOTAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjY1LCAwLjY1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IC01MnB4O1xufVxuLm1lbnVDcGwgLm90aGVyIC5vdGhlcl9kYXRhIC55b3Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWVudUNwbCAub3RoZXIgLm90aGVyX2RhdGEgLnlvdSBkaXYge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWVudUNwbCA+IC5tZW51VG9wQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8q5YaZ57uZ5LiN5pSv5oyBY2FsYygp55qE5rWP6KeI5ZmoKi9cbiAgd2lkdGg6IC1tb3otY2FsYygxMDAlIC0gMCk7XG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDBweCk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3RoZW1lcy9kZWZhdWx0L3RoZW1lXCI7XG4ubWVudUNwbHsgaGVpZ2h0OiAxMDAlO1xuICAubG9nb0hlYWR7aGVpZ2h0OiA2MHB4OyB3aWR0aDogMTAwJTtiYWNrZ3JvdW5kOiAjQ0YyMzIzO1xuICAgIC5sb2dveyBwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMjUwcHg7aGVpZ2h0OiA2MHB4O1xuICAgICAgLmxvZ29UZWx7bGluZS1oZWlnaHQ6IDYwcHg7IG1hcmdpbi1sZWZ0OiAzMHB4O21hcmdpbi1yaWdodDogNXB4O2ZvbnQtc2l6ZToyNHB4O2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMSk7fVxuICAgICAgLnNlYXJjaEt7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtib3R0b206IDQ1cHg7bGVmdDogNjAwcHg7Ym9yZGVyLXJhZGl1czoyMHB4O1xuICAgICAgICB3aWR0aDoyNTBweDtoZWlnaHQ6IDMwcHg7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gICAgICAgIC5pbnB1dGdhZ2F7bWFyZ2luLWxlZnQ6IDEwcHg7IGJvcmRlcjogbm9uZTt3aWR0aDogMjAwcHg7aGVpZ2h0OjMwcHg7YmFja2dyb3VuZDogbm9uZTtjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0Z2FnYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7Y29sb3I6IHdoaXRlO31cbiAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0eyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiA1MHB4OyB0b3A6MDsgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAvZGVlcC8uZWwtZHJvcGRvd257IGNvbG9yOiBsaWdodGVuKEBtZW51VGV4dCw1MCUpO31cbiAgICAgIC9kZWVwLy5lbC1pY29uLWNhcmV0LWJvdHRvbXsgZGlzcGxheTogbm9uZTt9XG4gICAgICAvZGVlcC8uYW50LWRyb3Bkb3duLWxpbmsgc3BhbntsaW5lLWhlaWdodDo1MHB4OyB0ZXh0LWFsaWduOmNlbnRlcjt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGNvbG9yOndoaXRlOyBib3JkZXItcmFkaXVzOjI1cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTM5LCAxMTksIDIyNCk7aGVpZ2h0OiA1MHB4O3dpZHRoOiA1MHB4O31cbiAgICAgIC9kZWVwLyAuYW50LWRyb3Bkb3duLWxpbmsgaW1neyB3aWR0aDogNTBweDsgYm9yZGVyLXJhZGl1czoyNXB4O31cbiAgICAgIC9kZWVwLy5hbnQtZHJvcGRvd24tbGluayBieyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDowOyBsZWZ0OiAwcHg7IHdpZHRoOiAxMDAlOyBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXItcmFkaXVzOjI1cHg7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwuMyk7aGVpZ2h0OiA1MHB4O3dpZHRoOiA1MHB4O31cbiAgICAgIC9kZWVwLy5hbnQtZHJvcGRvd24tbGluayBzcGFuOmhvdmVyIGJ7IGRpc3BsYXk6IG5vbmU7fVxuICAgICAgL2RlZXAvLmFudC1kcm9wZG93bi1saW5rIGl7Y29sb3I6IHdoaXRlOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cbiAgICAgIG56LXRvb2x0aXB7IGZvbnQtc2l6ZTogMThweDsgd2lkdGg6IDI4cHg7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgICAgIGl7Y3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fTtcbiAgICAgIH1cbiAgICAgIC5pZEV0bHsgbWFyZ2luLXJpZ2h0OiAyMHB4OyBjdXJzb3I6IHBvaW50ZXI7IG9wYWNpdHk6IDAuNztcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICY6aG92ZXJ7IG9wYWNpdHk6MTt9XG4gICAgICB9XG4gICAgfX1cbiAgPi5oZWFkZXJ7IGhlaWdodDogNjBweDsgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjN0JCRkVBLCAjNEJCMkY0KTsqL1xuICAgIGJhY2tncm91bmQ6ICNCNDFBMUE7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7IGNvbG9yOmxpZ2h0ZW4oQG1lbnVUZXh0LDUwJSk7XG4gICAgYXsgY29sb3I6IGxpZ2h0ZW4oQG1lbnVUZXh0LDUwJSk7fVxuICAgIC50b3BNZW51eyBwYWRkaW5nOiAwIDEzMHB4IDAgMjAwcHg7IGhlaWdodDogMTAwJTt9XG4gICAgPmRpdnsgd2lkdGg6MTAwJTsgcG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDEwMCU7fVxuICB9XG4gIC50b3BNZW51IHtcbiAgICAubGVmdFVybHsgcGFkZGluZy1sZWZ0OiA0MHB4OyBoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBpbmhlcml0O1xuICAgICAgPmxpeyBmbG9hdDogbGVmdDsgcG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgID4uaDJ7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgbGluZS1oZWlnaHQ6IDMwcHg7IHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDsgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgJi5oYXNDeyBwYWRkaW5nLXJpZ2h0OiAzMHB4O31cbiAgICAgICAgICAuYW50aWNvbnsgZGlzcGxheTogbm9uZTsgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7IHRvcDo5cHg7IGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFudGljb24tZG93bnsgZGlzcGxheTogYmxvY2s7IGNvbG9yOiB3aGl0ZTt9XG4gICAgICAgICAgc3BhbnsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOjA7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43OyBcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDozMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIC5oMntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLmNoaWxkeyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDo0NHB4O1xuICAgICAgICAgIGxlZnQ6IDA7IHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB6LWluZGV4OiA5OTk7IG1pbi13aWR0aDogMS41cmVtOyAgXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIGxpe2N1cnNvcjogcG9pbnRlcjsgaGVpZ2h0OiAzNnB4OyBsaW5lLWhlaWdodDogMzZweDsgXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBzcGFueyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAxMDAlO31cbiAgICAgICAgICB9XG4gICAgICAgICAgbGkuYWN0aXZlLGxpOmhvdmVye1xuICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7fVxuICAgICAgICB9XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgLmgyIC5hbnRpY29uLWRvd257IGRpc3BsYXk6IG5vbmU7fVxuICAgICAgICAgIC5oMiAuYW50aWNvbi11cHsgZGlzcGxheTogYmxvY2s7fVxuICAgICAgICAgIC5jaGlsZHsgZGlzcGxheTogYmxvY2s7fVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbnotZHJvcGRvd257IG1hcmdpbi1sZWZ0OiAyMHB4OyB3aWR0aDogNDBweDtcbiAgICAgIC5kcm9wU3BhbnsgZGlzcGxheTogYmxvY2s7IGhlaWdodDogNDlweDsgd2lkdGg6IDI0cHg7fVxuICAgICAgLmFudC1idG57IGJhY2tncm91bmQ6ICNjMDA7IGNvbG9yOiAjZmZmOyBib3JkZXI6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAyNHB4OyBoZWlnaHQ6MjRweDsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuc2VhcmNoeyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAyMDBweDsgdG9wOjA7XG4gICAgL2RlZXAvLmFudC1pbnB1dC1hZmZpeC13cmFwcGVye1xuICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAgICAgdG9wOjA7XG4gICAgfVxuICAgIC9kZWVwLy5hbnQtaW5wdXR7IGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGhlaWdodDogMjRweDsgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICAgIGJvcmRlcjogbm9uZTtib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgL2RlZXAvLmFudGljb24tc2VhcmNoeyBjb2xvcjogI2ZmZjt9XG4gIH1cblxuICAub3RoZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICAub3RoZXJfZGF0YXtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjMwcHggO1xuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgIC5mcmllbmRMaW5re1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMDtcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgIC5mcmllbmRMaW5rQm94e1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5oZW5ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NBQ0FDQTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ297XG4gICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDEwcHggYXV0bztcbiAgICAgICAgICAgIC5zbWFsbC1mb250e1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuNjUsMC42NSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbToxMnB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6LTUycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnlvdXtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiAgPi5tZW51VG9wQm94e1xuICAgIHdpZHRoOiAxMDAlOyAvKuWGmee7meS4jeaUr+aMgWNhbGMoKeeahOa1j+iniOWZqCovXG4gICAgd2lkdGg6IC1tb3otY2FsYyh+XCIxMDAlIC0gMFwiKTtcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKH5cIjEwMCUgLSAwcHhcIik7XG4gICAgd2lkdGg6IGNhbGMoflwiMTAwJSAtIDBweFwiKTtcbiAgfVxufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/admin/common/components/menu/menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/common/components/menu/menu.component.ts ***!
  \****************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logistics_logistics_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logistics/logistics.module */ "./src/app/admin/logistics/logistics.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../share/services/session.service */ "./src/app/share/services/session.service.ts");
/* harmony import */ var src_app_share_services_rxjsMessage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/services/rxjsMessage.service */ "./src/app/share/services/rxjsMessage.service.ts");
/* harmony import */ var _share_restServices_front_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../share/restServices/front.service */ "./src/app/share/restServices/front.service.ts");







var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, sessionService, frontService, rxjsMessageService) {
        this.router = router;
        this.sessionService = sessionService;
        this.frontService = frontService;
        this.rxjsMessageService = rxjsMessageService;
        this.friendLink = [];
        this.heightClass = {};
        this.menuLocation = true;
        this.childrenShowKey = true;
        this.menu = [];
        this.collectKey = false;
        this.hardImg = '';
        this.userName = this.sessionService.getItem('userName');
        // 有子菜单的需要引入
        this.routesMenu = [
            {
                name: '后勤保障',
                children: _logistics_logistics_module__WEBPACK_IMPORTED_MODULE_2__["routes"]
            }
        ];
        this.rightDown = [
            {
                value: 'my',
                label: '个人中心',
            },
            {
                value: 'exit',
                label: '退出',
            }
        ];
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gaodu();
        this.getLinked();
        var userType = [1001];
        // 如果没有用户类型，说明没有登录，直接跳转登录页面
        if (!this.sessionService.getItem('roles')) {
            // this.router.navigate(['/']);
            // return;
        }
        else {
            this.hardImg = this.sessionService.getItem('hardImg');
            userType = this.sessionService.getItem('roles').split(',').map(function (item) {
                return Number(item);
            });
        }
        var adminList = {};
        this.router.config.forEach(function (item) {
            if (item.path === 'admin' || item.path == '') {
                adminList = item['_loadedConfig'].routes[0];
            }
        });
        adminList['children'].every(function (item) {
            if (item.data.roles && item.data.roles.length) {
                var key_1 = false;
                item.data.roles.forEach(function (ob1) {
                    userType.forEach(function (ob2) {
                        if (ob1 == ob2) {
                            key_1 = true;
                        }
                    });
                });
                if (!key_1) {
                    return true;
                }
            }
            if (item.data && item.data.menu) {
                var itemMenu_1 = {
                    path: item.path, name: item.data.name,
                    children: [], data: item.data
                };
                _this.routesMenu.forEach(function (subItem) {
                    if (item.data.name == subItem['name']) {
                        subItem.children.forEach(function (subSubItem) {
                            if (subSubItem.data && subSubItem.data.menu) {
                                if (subSubItem.data.roles && subSubItem.data.roles.length) {
                                    var key_2 = false;
                                    subSubItem.data.roles.forEach(function (ob1) {
                                        if (ob1 == userType) {
                                            key_2 = true;
                                        }
                                    });
                                    if (!key_2) {
                                        return;
                                    }
                                }
                                itemMenu_1.children.push({
                                    path: item.path + '/' + subSubItem.path,
                                    name: subSubItem.data.name
                                });
                            }
                        });
                    }
                });
                _this.menu.push(itemMenu_1);
                return true;
            }
            return true;
        });
        this.setActiveMenu(this.router.url, '');
        this.subscription = this.rxjsMessageService.getMessage()
            .subscribe(function (message) {
            if (message.type === 'login') {
                _this.userName = message.data.userInfoVO.userName;
            }
        });
        this.router.events
            .subscribe(function (event) {
            // example: NavigationStart, RoutesRecognized, NavigationEnd
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.setActiveMenu(event.url, '');
            }
        });
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MenuComponent.prototype.downChange = function (data) {
        switch (data.value) {
            case 'my': {
                this.router.navigate(['/self']);
                break;
            }
            case 'exit': {
                this.userName = '';
                this.sessionService.removeItem('token');
                this.sessionService.removeItem('userName');
                this.sessionService.removeItem('userInfoVo');
                this.sessionService.removeItem('id');
                this.sessionService.removeItem('password');
                this.router.navigate(['/']);
                this.rxjsMessageService.sendMessage({
                    type: 'exit',
                    data: data.data
                });
                break;
            }
        }
    };
    // 设置菜单选中
    MenuComponent.prototype.setActiveMenu = function (url, br) {
        var _this = this;
        this.menu.forEach(function (item) {
            item.children.forEach(function (subItem) {
                if (br + subItem.path === url) {
                    subItem.active = true;
                }
                else {
                    subItem.active = false;
                }
            });
            if (url === '/' && item.path === '') {
                item.active = true;
            }
            else if (item.path !== '' && url.indexOf(item.path) !== -1) {
                item.active = true;
                if (_this.menuLocation) {
                    item.show = true;
                }
            }
            else {
                item.active = false;
            }
        });
        if (url.indexOf('/admin/collect') !== -1) {
            this.collectKey = true;
        }
    };
    MenuComponent.prototype.goMenu = function (item) {
        this.router.navigateByUrl('/admin/' + item.path);
    };
    MenuComponent.prototype.bigMenu = function (item) {
        if (!item.children.length) {
            this.router.navigateByUrl('/admin/' + item.path + (item.data.hideChild ? '/index' : ''));
        }
        item.show = !item.show;
    };
    MenuComponent.prototype.bigMenuTop = function (item) {
        this.collectKey = false;
        if (!item.children.length) {
            this.router.navigateByUrl('/' + item.path + (item.data.hideChild ? '/index' : ''));
        }
    };
    MenuComponent.prototype.goMenuTop = function (item) {
        var _this = this;
        this.childrenShowKey = false;
        this.menu.forEach(function (item1, i) {
            item1.show = false;
        });
        if (item.path.charAt(item.path.length - 1) === '/') {
            item.path = item.path.substr(0, item.path.length - 1);
        }
        this.router.navigateByUrl('/' + item.path);
        setTimeout(function () {
            _this.childrenShowKey = true;
        }, 100);
    };
    MenuComponent.prototype.gaodu = function () {
        var _this = this;
        window.setInterval(function () {
            var clientHeight = (document.body.clientHeight - 460) + 'px';
            _this.heightClass = { 'min-height': clientHeight };
        }, 500);
    };
    MenuComponent.prototype.getLinked = function () {
        var _this = this;
        this.frontService.getLinked({
            params: {
                pageNumber: 1,
                pageSize: 4
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                var data = response.data.pageData;
                for (var index = 0; index < data.length; index++) {
                    _this.friendLink.push({ name: data[index].name, link: data[index].link });
                }
            }
        });
    };
    MenuComponent.prototype.gun = function (a) {
        if (a.substring(0, 4) === 'http') {
            window.open(a);
        }
        else {
            window.open('http://' + a);
        }
    };
    MenuComponent.prototype.gengduogun = function () {
        this.router.navigate(['link']);
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/admin/common/components/menu/menu.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./menu.component.less */ "./src/app/admin/common/components/menu/menu.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _share_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _share_restServices_front_service__WEBPACK_IMPORTED_MODULE_6__["FrontService"],
            src_app_share_services_rxjsMessage_service__WEBPACK_IMPORTED_MODULE_5__["RxjsMessageService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map