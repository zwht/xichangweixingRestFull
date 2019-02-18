(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-start-module"],{

/***/ "./src/app/start/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/start/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login_cmp\">\n    <div class=\"login_box\">\n        <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\n            <nz-form-item>\n                <nz-form-control>\n                    <nz-input-group nzPrefixIcon=\"anticon anticon-user\">\n                        <input appTrim type=\"text\" nz-input formControlName=\"userName\" placeholder=\"手机／邮箱／用户名\">\n                    </nz-input-group>\n                    <nz-form-explain *ngIf=\"validateForm.get('userName').dirty && validateForm.get('userName').errors\">请输入账号!</nz-form-explain>\n                </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n                <nz-form-control>\n                    <nz-input-group nzPrefixIcon=\"anticon anticon-lock\">\n                        <input appTrim (ngModelChange)=\"panduan1 = true\" type=\"password\" nz-input formControlName=\"password\" placeholder=\"密码\">\n                    </nz-input-group>\n                    <nz-form-explain *ngIf=\"validateForm.get('password').dirty && validateForm.get('password').errors\">请输入密码!</nz-form-explain>\n                </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n                <nz-form-control>\n                    <label nz-checkbox formControlName=\"remember\">\n                        <span>记住登录</span>\n                    </label>\n                    <a class=\"login-form-forgot\" class=\"login-form-forgot\">忘记密码</a>\n                    <!-- <button *appNgIf='ss' (click)=\"fk()\" nz-button class=\"login-form-button\" [nzType]=\"'primary'\">登录</button> -->\n                    <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">登录</button>\n                    <a href=\"/#/register/email\">邮箱注册!</a>\n                    <a href=\"/#/register/phone\">手机注册!</a>\n                </nz-form-control>\n            </nz-form-item>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/start/login/login.component.less":
/*!**************************************************!*\
  !*** ./src/app/start/login/login.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.login_cmp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.login_cmp .login_box .login-form {\n  max-width: 300px;\n}\n.login_cmp .login_box .login-form-forgot {\n  float: right;\n}\n.login_cmp .login_box .login-form-button {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvcG9lbS9Eb2N1bWVudHMvMDEtd29ya2ZvbGRlci8wM19xc2tqLzA0LXhpY2hhbmd3ZWl4aW5nL3NyYy9hcHAvc3RhcnQvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLDJFQUEyRTtBQUMzRSw2RkFBNkY7QUNBN0Y7RUFBYSxhQUFBO0VBQWUsdUJBQUE7RUFDMUIsbUJBQUE7RUFBcUIsWUFBQTtBREt2QjtBQ05BO0VBSU0sZ0JBQUE7QURLTjtBQ1RBO0VBT00sWUFBQTtBREtOO0FDWkE7RUFVTSxXQUFBO0FES04iLCJmaWxlIjoic3JjL2FwcC9zdGFydC9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMsc3RyaW5nLW5vLW5ld2xpbmUgKi9cbi5sb2dpbl9jbXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmxvZ2luX2NtcCAubG9naW5fYm94IC5sb2dpbi1mb3JtIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cbi5sb2dpbl9jbXAgLmxvZ2luX2JveCAubG9naW4tZm9ybS1mb3Jnb3Qge1xuICBmbG9hdDogcmlnaHQ7XG59XG4ubG9naW5fY21wIC5sb2dpbl9ib3ggLmxvZ2luLWZvcm0tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCJcbkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZXMvZGVmYXVsdC90aGVtZVwiO1xuLmxvZ2luX2NtcCB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyBoZWlnaHQ6IDEwMCU7XG4gIC5sb2dpbl9ib3h7XG4gICAgLmxvZ2luLWZvcm0ge1xuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB9XG4gICAgLmxvZ2luLWZvcm0tZm9yZ290IHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgLmxvZ2luLWZvcm0tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/start/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/start/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_restServices_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../share/restServices/user.service */ "./src/app/share/restServices/user.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_services_reg_exp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../share/services/reg-exp.service */ "./src/app/share/services/reg-exp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/services/session.service */ "./src/app/share/services/session.service.ts");







// import { CodeDataService } from '../../share/services/code-data.service';

var LoginComponent = /** @class */ (function () {
    function LoginComponent(sessionService, 
    // private codeDataService: CodeDataService,
    fb, router, _message, regExpService, userService) {
        this.sessionService = sessionService;
        this.fb = fb;
        this.router = router;
        this._message = _message;
        this.regExpService = regExpService;
        this.userService = userService;
        this.loading = false;
        this.panduan1 = false;
        this.ss = 1;
    }
    LoginComponent.prototype.fk = function (e) {
        this.ss += 1;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.panduan();
        // this.codeDataService.getData();
    };
    LoginComponent.prototype.panduan = function () {
        if (this.sessionService.getItem('remember') === 'true') {
            this.validateForm = this.fb.group({
                userName: [this.sessionService.getItem('loginKey'), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                password: [this.sessionService.getItem('password'), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                remember: [true],
                panduan1: true
            });
        }
        else {
            this.validateForm = this.fb.group({
                userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                remember: [false],
                panduan1: false,
            });
        }
    };
    LoginComponent.prototype.panduan2 = function () {
        if (this.validateForm.value.remember === true) {
            if (this.panduan1 === false) {
                this.sessionService.setItem('loginKey', this.validateForm.value.userName);
                this.sessionService.setItem('password', this.validateForm.value.password);
            }
            else {
                this.sessionService.setItem('loginKey', this.validateForm.value.userName);
                this.sessionService.setItem('password', btoa(encodeURIComponent(this.validateForm.value.password)));
            }
        }
        this.sessionService.setItem('loginKey', this.validateForm.value.userName);
        this.sessionService.setItem('remember', this.validateForm.value.remember);
    };
    LoginComponent.prototype.submitForm = function () {
        var _this = this;
        for (var i in this.validateForm.controls) {
            if (this.validateForm.controls[i]) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.valid) {
            this.loading = true;
            this.userService['login']({
                params: {
                    userName: this.validateForm.value.userName,
                    password: this.validateForm.value.password,
                }
            })
                .subscribe(function (response) {
                _this.loading = false;
                if (response.errorCode === 0) {
                    _this.panduan2();
                    _this.sessionService.setItem('userName', response.data.name, '2h');
                    _this.sessionService.setItem('token', response.data.token, '2h');
                    _this.sessionService.setItem('hardImg', response.data.img, '2h');
                    _this.sessionService.setItem('roles', response.data.roles, '2h');
                    _this.sessionService.setItem('id', response.data.id, '2h');
                    setTimeout(function () {
                        if (response.data.roles.indexOf('1001') !== -1) {
                            _this.router.navigateByUrl('/admin/news');
                        }
                        else if (response.data.roles.indexOf('1002') !== -1) {
                            _this.router.navigateByUrl('/admin/news');
                        }
                        else if (response.data.roles.indexOf('1003') !== -1) {
                            _this.router.navigateByUrl('/admin/news');
                        }
                        else {
                            _this.router.navigateByUrl('/admin/news');
                        }
                    }, 200);
                }
                else {
                    _this._message.create('error', response.msg, { nzDuration: 4000 });
                }
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/start/login/login.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/start/login/login.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_share_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _share_services_reg_exp_service__WEBPACK_IMPORTED_MODULE_5__["RegExpService"],
            _share_restServices_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/start/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/start/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/start/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/start/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #f8f8f8; height: 100%; color: #999;\n text-align: center; padding: 100px 0; font-size: 16px;\">\n  <img src=\"./assets/images/common/404.png\" alt=\"\">\n  <p style=\"margin: 10px 0;\">您访问的页面不在地球上，请回火星吧～</p>\n  <button (click)=\"back(1)\" nz-button nzType=\"primary\">返回上页</button>\n  <button (click)=\"back(0)\" nz-button nzType=\"primary\">返回登录</button>\n</div>\n"

/***/ }),

/***/ "./src/app/start/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/start/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router) {
        this.router = router;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.back = function (key) {
        if (key) {
            window.history.back();
        }
        else {
            this.router.navigate(['/']);
        }
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/start/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/start/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/start/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/start/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-cpt\">\n  <h1>邮箱注册</h1>\n  <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"img\" nzRequired>头像</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <app-cropper-img formControlName='img' id='img' [boxStyle]=\"{width:100,height:100}\">\n        </app-cropper-img>\n        <nz-form-explain *ngIf=\"validateForm.get('img').dirty && validateForm.get('img').errors\">请添加头像</nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"email\">E-mail</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input appTrim nz-input formControlName=\"email\" id=\"email\">\n        <nz-form-explain *ngIf=\"validateForm.get('email').dirty && validateForm.get('email').errors\">输入正确email!</nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"captcha\" nzRequired>验证码</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <div nz-row [nzGutter]=\"8\">\n          <div nz-col [nzSpan]=\"12\">\n            <input appTrim nz-input formControlName=\"captcha\" id=\"captcha\">\n          </div>\n          <div nz-col [nzSpan]=\"12\">\n            <button nz-button [nzLoading]=\"captchaLoading\" [disabled]=\"timeK!=60\" (click)=\"getCaptcha($event)\">{{timeK==60?'获取验证码':'还有'+timeK+'s可重发'}}</button>\n          </div>\n        </div>\n        <nz-form-explain *ngIf=\"validateForm.get('captcha').dirty && validateForm.get('captcha').errors\">请输入验证码你了!</nz-form-explain>\n        <nz-form-extra>请查看邮件获取验证码.</nz-form-extra>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"password\" nzRequired>密码</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input appTrim nz-input type=\"password\" id=\"password\" formControlName=\"password\" (ngModelChange)=\"updateConfirmValidator()\">\n        <nz-form-explain *ngIf=\"validateForm.get('password').dirty && validateForm.get('password').errors\">请输入密码!</nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"checkPassword\" nzRequired>确认密码</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input appTrim nz-input type=\"password\" formControlName=\"checkPassword\" id=\"checkPassword\">\n        <nz-form-explain *ngIf=\"validateForm.get('checkPassword').dirty && validateForm.get('checkPassword').errors\">\n          <ng-container *ngIf=\"validateForm.get('checkPassword').hasError('required')\">\n            请确认您的密码!\n          </ng-container>\n          <ng-container *ngIf=\"validateForm.get('checkPassword').hasError('confirm')\">\n            两个密码输入不一致!\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"loginName\" nzRequired>\n        <span>\n          昵称\n        </span>\n      </nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input appTrim nz-input id=\"loginName\" formControlName=\"loginName\">\n        <nz-form-explain *ngIf=\"validateForm.get('loginName').dirty && validateForm.get('loginName').errors\">请输入你的昵称!</nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n\n\n    <nz-form-item nz-row style=\"margin-bottom:8px;\">\n      <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\n        <button nz-button [nzLoading]=\"loading\" nzType=\"primary\">注册</button>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/start/register/register.component.less":
/*!********************************************************!*\
  !*** ./src/app/start/register/register.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-cpt {\n  width: 800px;\n  margin: 50px auto;\n}\n.register-cpt h1 {\n  text-align: center;\n  font-size: 25px;\n  font-weight: bold;\n  line-height: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2VtL0RvY3VtZW50cy8wMS13b3JrZm9sZGVyLzAzX3Fza2ovMDQteGljaGFuZ3dlaXhpbmcvc3JjL2FwcC9zdGFydC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc3RhcnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZSxZQUFBO0VBQWMsaUJBQUE7QUNHN0I7QURIQTtFQUNNLGtCQUFBO0VBQW9CLGVBQUE7RUFBaUIsaUJBQUE7RUFDdEMsaUJBQUE7QUNPTCIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWNwdHsgd2lkdGg6IDgwMHB4OyBtYXJnaW46IDUwcHggYXV0bztcbiAgaDF7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyNXB4OyBmb250LXdlaWdodDogYm9sZDtcbiAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIH1cbn0iLCIucmVnaXN0ZXItY3B0IHtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cbi5yZWdpc3Rlci1jcHQgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/start/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/start/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_restServices_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../share/restServices/user.service */ "./src/app/share/restServices/user.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_services_reg_exp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../share/services/reg-exp.service */ "./src/app/share/services/reg-exp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, regExpService, _message, router, userService) {
        var _this = this;
        this.fb = fb;
        this.regExpService = regExpService;
        this._message = _message;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.captchaLoading = false;
        this.timeK = 60;
        this.confirmationValidator = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== _this.validateForm.controls.password.value) {
                return { confirm: true, error: true };
            }
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            checkPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.confirmationValidator]],
            loginName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            img: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    RegisterComponent.prototype.submitForm = function () {
        var _this = this;
        for (var i in this.validateForm.controls) {
            if (this.validateForm.controls[i]) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.valid) {
            this.loading = true;
            var data = Object(_node_modules_rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(this.validateForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (d) {
                for (var i in d) {
                    if (i) {
                        if (i === 'password') {
                            d[i] = btoa(encodeURIComponent(d[i]));
                        }
                    }
                }
                return d;
            }));
            data.subscribe(function (d) {
                _this.userService.registerEmail({
                    params: { captcha: _this.validateForm.value.captcha },
                    data: d
                })
                    .subscribe(function (response) {
                    _this.loading = false;
                    if (response.code === 200) {
                        _this.router.navigate(['/']);
                    }
                    else {
                        _this._message.create('error', response.msg, { nzDuration: 4000 });
                    }
                });
            });
        }
    };
    RegisterComponent.prototype.updateConfirmValidator = function () {
        var _this = this;
        /** wait for refresh value */
        Promise.resolve().then(function () { return _this.validateForm.controls.checkPassword.updateValueAndValidity(); });
    };
    RegisterComponent.prototype.getCaptcha = function (e) {
        var _this = this;
        e.preventDefault();
        this.validateForm.controls['email'].markAsDirty();
        this.validateForm.controls['email'].updateValueAndValidity();
        var dirty = this.validateForm.get('email').dirty;
        var errors = this.validateForm.get('email').errors;
        if (dirty && errors) {
            this._message.create('error', '输入正确email!', { nzDuration: 4000 });
            return;
        }
        this.captchaLoading = true;
        this.userService.getCaptchaEmail({
            params: {
                email: this.validateForm.value.email
            },
            data: {}
        })
            .subscribe(function (response) {
            _this.captchaLoading = false;
            if (response.code === 200) {
                _this.setTi();
            }
            else {
                _this._message.create('error', response.msg, { nzDuration: 4000 });
            }
        });
    };
    RegisterComponent.prototype.setTi = function () {
        var _this = this;
        this.timeK--;
        if (this.timeK > 0) {
            setTimeout(function () {
                _this.setTi();
            }, 1000);
        }
        else {
            this.timeK = 60;
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/start/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.less */ "./src/app/start/register/register.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _share_services_reg_exp_service__WEBPACK_IMPORTED_MODULE_5__["RegExpService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _share_restServices_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/start/registerPhone/registerPhone.component.html":
/*!******************************************************************!*\
  !*** ./src/app/start/registerPhone/registerPhone.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-cpt\">\n  <h1>手机号注册</h1>\n  <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"img\" nzRequired>头像</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <app-cropper-img formControlName='img'  id='img' [boxStyle]=\"{width:100,height:100}\">\n        </app-cropper-img>\n        <nz-form-explain *ngIf=\"validateForm.get('img').dirty && validateForm.get('img').errors\">请添加头像</nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"phone\">联系电话</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzValidateStatus]=\"validateForm.controls['phone']\">\n        <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\n          <ng-template #addOnBeforeTemplate>\n            <nz-select formControlName=\"phonePrefix\" style=\"width: 70px;\">\n              <nz-option nzLabel=\"+86\" nzValue=\"+86\"></nz-option>\n              <nz-option nzLabel=\"+87\" nzValue=\"+87\"></nz-option>\n            </nz-select>\n          </ng-template>\n          <input appTrim formControlName=\"phone\" id=\"'phone'\" nz-input>\n        </nz-input-group>\n        <nz-form-explain *ngIf=\"validateForm.get('phone').dirty && validateForm.get('phone').errors\">请输入你的电话号码!</nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"captcha\" nzRequired>验证码</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <div nz-row [nzGutter]=\"8\">\n          <div nz-col [nzSpan]=\"12\">\n            <input appTrim nz-input formControlName=\"captcha\" id=\"captcha\">\n          </div>\n          <div nz-col [nzSpan]=\"12\">\n            <button nz-button [nzLoading]=\"captchaLoading\"  [disabled]=\"timeK!=60\" (click)=\"getCaptcha($event)\">{{timeK==60?'获取验证码':'还有'+timeK+'s可重发'}}</button>\n          </div>\n        </div>\n        <nz-form-explain *ngIf=\"validateForm.get('captcha').dirty && validateForm.get('captcha').errors\">请输入验证码你了!</nz-form-explain>\n        <nz-form-extra>请查看短信获取验证码.</nz-form-extra>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"password\" nzRequired>密码</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input appTrim nz-input type=\"password\" id=\"password\" formControlName=\"password\" (ngModelChange)=\"updateConfirmValidator()\">\n        <nz-form-explain *ngIf=\"validateForm.get('password').dirty && validateForm.get('password').errors\">请输入密码!</nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"checkPassword\" nzRequired>确认密码</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input appTrim nz-input type=\"password\" formControlName=\"checkPassword\" id=\"checkPassword\">\n        <nz-form-explain *ngIf=\"validateForm.get('checkPassword').dirty && validateForm.get('checkPassword').errors\">\n          <ng-container *ngIf=\"validateForm.get('checkPassword').hasError('required')\">\n            请确认您的密码!\n          </ng-container>\n          <ng-container *ngIf=\"validateForm.get('checkPassword').hasError('confirm')\">\n            两个密码输入不一致!\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"loginName\" nzRequired>\n        <span>\n          昵称\n        </span>\n      </nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input appTrim nz-input id=\"loginName\" formControlName=\"loginName\">\n        <nz-form-explain *ngIf=\"validateForm.get('loginName').dirty && validateForm.get('loginName').errors\">请输入你的昵称!</nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item nz-row style=\"margin-bottom:8px;\">\n      <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\n        <button nz-button [nzLoading]=\"loading\" nzType=\"primary\">注册</button>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/start/registerPhone/registerPhone.component.less":
/*!******************************************************************!*\
  !*** ./src/app/start/registerPhone/registerPhone.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-cpt {\n  width: 800px;\n  margin: 50px auto;\n}\n.register-cpt h1 {\n  text-align: center;\n  font-size: 25px;\n  font-weight: bold;\n  line-height: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2VtL0RvY3VtZW50cy8wMS13b3JrZm9sZGVyLzAzX3Fza2ovMDQteGljaGFuZ3dlaXhpbmcvc3JjL2FwcC9zdGFydC9yZWdpc3RlclBob25lL3JlZ2lzdGVyUGhvbmUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3N0YXJ0L3JlZ2lzdGVyUGhvbmUvcmVnaXN0ZXJQaG9uZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFlLFlBQUE7RUFBYyxpQkFBQTtBQ0c3QjtBREhBO0VBQ00sa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixpQkFBQTtFQUN0QyxpQkFBQTtBQ09MIiwiZmlsZSI6InNyYy9hcHAvc3RhcnQvcmVnaXN0ZXJQaG9uZS9yZWdpc3RlclBob25lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWNwdHsgd2lkdGg6IDgwMHB4OyBtYXJnaW46IDUwcHggYXV0bztcbiAgaDF7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyNXB4OyBmb250LXdlaWdodDogYm9sZDtcbiAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIH1cbn0iLCIucmVnaXN0ZXItY3B0IHtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cbi5yZWdpc3Rlci1jcHQgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/start/registerPhone/registerPhone.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/start/registerPhone/registerPhone.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPhoneComponent", function() { return RegisterPhoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_restServices_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../share/restServices/user.service */ "./src/app/share/restServices/user.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_services_reg_exp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../share/services/reg-exp.service */ "./src/app/share/services/reg-exp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var RegisterPhoneComponent = /** @class */ (function () {
    function RegisterPhoneComponent(fb, regExpService, _message, router, userService) {
        var _this = this;
        this.fb = fb;
        this.regExpService = regExpService;
        this._message = _message;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.captchaLoading = false;
        this.timeK = 60;
        this.confirmationValidator = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== _this.validateForm.controls.password.value) {
                return { confirm: true, error: true };
            }
        };
    }
    RegisterPhoneComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            checkPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.confirmationValidator]],
            loginName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phonePrefix: ['+86'],
            phone: [null, []],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            img: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    RegisterPhoneComponent.prototype.submitForm = function () {
        var _this = this;
        for (var i in this.validateForm.controls) {
            if (this.validateForm.controls[i]) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.valid) {
            this.loading = true;
            var data = Object(_node_modules_rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(this.validateForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (d) {
                for (var i in d) {
                    if (i) {
                        if (i === 'password') {
                            d[i] = btoa(encodeURIComponent(d[i]));
                        }
                    }
                }
                return d;
            }));
            data.subscribe(function (d) {
                _this.userService.registerPhone({
                    params: { captcha: _this.validateForm.value.captcha },
                    data: d
                })
                    .subscribe(function (response) {
                    _this.loading = false;
                    if (response.code === 200) {
                        _this.router.navigate(['/']);
                    }
                    else {
                        _this._message.create('error', response.msg, { nzDuration: 4000 });
                    }
                });
            });
        }
    };
    RegisterPhoneComponent.prototype.updateConfirmValidator = function () {
        var _this = this;
        /** wait for refresh value */
        Promise.resolve().then(function () { return _this.validateForm.controls.checkPassword.updateValueAndValidity(); });
    };
    RegisterPhoneComponent.prototype.getCaptcha = function (e) {
        var _this = this;
        e.preventDefault();
        this.validateForm.controls['phone'].markAsDirty();
        this.validateForm.controls['phone'].updateValueAndValidity();
        var dirty = this.validateForm.get('phone').dirty;
        var errors = this.validateForm.get('phone').errors;
        if (dirty && errors) {
            this._message.create('error', '输入正确phone!', { nzDuration: 4000 });
            return;
        }
        this.captchaLoading = true;
        this.userService.getCaptchaPhone({
            params: {
                phone: this.validateForm.value.phone
            },
            data: {}
        })
            .subscribe(function (response) {
            _this.captchaLoading = false;
            if (response.code === 200) {
                _this.setTi();
            }
            else {
                _this._message.create('error', response.msg, { nzDuration: 4000 });
            }
        });
    };
    RegisterPhoneComponent.prototype.setTi = function () {
        var _this = this;
        this.timeK--;
        if (this.timeK > 0) {
            setTimeout(function () {
                _this.setTi();
            }, 1000);
        }
        else {
            this.timeK = 60;
        }
    };
    RegisterPhoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-phone',
            template: __webpack_require__(/*! ./registerPhone.component.html */ "./src/app/start/registerPhone/registerPhone.component.html"),
            styles: [__webpack_require__(/*! ./registerPhone.component.less */ "./src/app/start/registerPhone/registerPhone.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _share_services_reg_exp_service__WEBPACK_IMPORTED_MODULE_5__["RegExpService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _share_restServices_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterPhoneComponent);
    return RegisterPhoneComponent;
}());



/***/ }),

/***/ "./src/app/start/start.module.ts":
/*!***************************************!*\
  !*** ./src/app/start/start.module.ts ***!
  \***************************************/
/*! exports provided: routes, StartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartModule", function() { return StartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/start/login/login.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/start/not-found/not-found.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/start/register/register.component.ts");
/* harmony import */ var _registerPhone_registerPhone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registerPhone/registerPhone.component */ "./src/app/start/registerPhone/registerPhone.component.ts");








var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        data: {
            name: '用户登录'
        }
    },
    {
        path: 'register/email',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        data: {
            name: '邮箱注册'
        }
    },
    {
        path: 'register/phone',
        component: _registerPhone_registerPhone_component__WEBPACK_IMPORTED_MODULE_7__["RegisterPhoneComponent"],
        data: {
            name: '手机号注册'
        }
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
        data: {
            name: '404页面不存在'
        }
    }
];
var StartModule = /** @class */ (function () {
    function StartModule() {
    }
    StartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _registerPhone_registerPhone_component__WEBPACK_IMPORTED_MODULE_7__["RegisterPhoneComponent"]],
            providers: [],
        })
    ], StartModule);
    return StartModule;
}());



/***/ })

}]);
//# sourceMappingURL=start-start-module.js.map