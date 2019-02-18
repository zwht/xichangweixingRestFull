(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["step-step-module"],{

/***/ "./src/app/admin/step/index/index.component.html":
/*!*******************************************************!*\
  !*** ./src/app/admin/step/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Angular动态加载组件</h1>\n<a href=\"https://segmentfault.com/a/1190000009582289\">https://segmentfault.com/a/1190000009582289</a>\n<app-step [data]=\"stepComp\"></app-step>\n<a href=\"#/admin/step?step=step1\">step1</a>\n<br>\n<a href=\"#/admin/step?step=step2\">step2</a>\n<br>\n<a href=\"#/admin/step?step=step3\">step3</a>"

/***/ }),

/***/ "./src/app/admin/step/index/index.component.less":
/*!*******************************************************!*\
  !*** ./src/app/admin/step/index/index.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0ZXAvaW5kZXgvaW5kZXguY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/step/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/step/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user1_user1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user1/user1.component */ "./src/app/admin/step/user1/user1.component.ts");
/* harmony import */ var _user2_user2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user2/user2.component */ "./src/app/admin/step/user2/user2.component.ts");
/* harmony import */ var _user3_user3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user3/user3.component */ "./src/app/admin/step/user3/user3.component.ts");






var IndexComponent = /** @class */ (function () {
    function IndexComponent(route) {
        this.route = route;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var step = params['step'] || 'step1';
            // 组件与参数对应表
            var compMaps = {
                'step1': { component: _user1_user1_component__WEBPACK_IMPORTED_MODULE_3__["User1Component"], inputs: { step: step } },
                'step2': { component: _user2_user2_component__WEBPACK_IMPORTED_MODULE_4__["User2Component"], inputs: { step: step } },
                'step3': { component: _user3_user3_component__WEBPACK_IMPORTED_MODULE_5__["User3Component"], inputs: { step: step } },
            };
            _this.stepComp = compMaps[step];
        });
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/admin/step/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.less */ "./src/app/admin/step/index/index.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/step/step.module.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/step/step.module.ts ***!
  \*******************************************/
/*! exports provided: routes, StepModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepModule", function() { return StepModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/admin/step/index/index.component.ts");
/* harmony import */ var _sub_step_sub_step_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub-step/sub-step.module */ "./src/app/admin/step/sub-step/sub-step.module.ts");
/* harmony import */ var _user1_user1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user1/user1.component */ "./src/app/admin/step/user1/user1.component.ts");
/* harmony import */ var _user2_user2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user2/user2.component */ "./src/app/admin/step/user2/user2.component.ts");
/* harmony import */ var _user3_user3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user3/user3.component */ "./src/app/admin/step/user3/user3.component.ts");









var routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
        data: {
            name: 'step',
        }
    }
];
var COMPONENTS = [_user1_user1_component__WEBPACK_IMPORTED_MODULE_6__["User1Component"], _user2_user2_component__WEBPACK_IMPORTED_MODULE_7__["User2Component"], _user3_user3_component__WEBPACK_IMPORTED_MODULE_8__["User3Component"]];
var StepModule = /** @class */ (function () {
    function StepModule() {
    }
    StepModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _sub_step_sub_step_module__WEBPACK_IMPORTED_MODULE_5__["SubStepModule"],
                _sub_step_sub_step_module__WEBPACK_IMPORTED_MODULE_5__["SubStepModule"].withComponents(COMPONENTS.slice())
            ],
            declarations: COMPONENTS.concat([_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]]),
            providers: [],
        })
    ], StepModule);
    return StepModule;
}());



/***/ }),

/***/ "./src/app/admin/step/sub-step/step/step.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/step/sub-step/step/step.component.ts ***!
  \************************************************************/
/*! exports provided: StepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepComponent", function() { return StepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StepComponent = /** @class */ (function () {
    function StepComponent(vcr, cfr) {
        this.vcr = vcr;
        this.cfr = cfr;
    }
    Object.defineProperty(StepComponent.prototype, "data", {
        set: function (data) {
            var compFactory = this.cfr.resolveComponentFactory(data.component);
            var component = this.vcr.createComponent(compFactory);
            if (data.inputs) {
                for (var key in data.inputs) {
                    if (key) {
                        component.instance[key] = data.inputs[key];
                    }
                }
            }
            this.destroy();
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    StepComponent.prototype.destroy = function () {
        if (this.currentComponent) {
            this.currentComponent.destroy();
            this.currentComponent = null;
        }
    };
    StepComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], StepComponent.prototype, "data", null);
    StepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-step',
            template: ""
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], StepComponent);
    return StepComponent;
}());



/***/ }),

/***/ "./src/app/admin/step/sub-step/sub-step.module.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/step/sub-step/sub-step.module.ts ***!
  \********************************************************/
/*! exports provided: SubStepModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubStepModule", function() { return SubStepModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step/step.component */ "./src/app/admin/step/sub-step/step/step.component.ts");



var SubStepModule = /** @class */ (function () {
    function SubStepModule() {
    }
    SubStepModule_1 = SubStepModule;
    SubStepModule.withComponents = function (components) {
        return {
            ngModule: SubStepModule_1,
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ANALYZE_FOR_ENTRY_COMPONENTS"], useValue: components, multi: true }
            ]
        };
    };
    var SubStepModule_1;
    SubStepModule = SubStepModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_step_step_component__WEBPACK_IMPORTED_MODULE_2__["StepComponent"]],
            exports: [_step_step_component__WEBPACK_IMPORTED_MODULE_2__["StepComponent"]]
        })
    ], SubStepModule);
    return SubStepModule;
}());



/***/ }),

/***/ "./src/app/admin/step/user1/user1.component.html":
/*!*******************************************************!*\
  !*** ./src/app/admin/step/user1/user1.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Step One Component：params value: {{step}}</h2>"

/***/ }),

/***/ "./src/app/admin/step/user1/user1.component.less":
/*!*******************************************************!*\
  !*** ./src/app/admin/step/user1/user1.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0ZXAvdXNlcjEvdXNlcjEuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/step/user1/user1.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/step/user1/user1.component.ts ***!
  \*****************************************************/
/*! exports provided: User1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User1Component", function() { return User1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var User1Component = /** @class */ (function () {
    function User1Component() {
    }
    Object.defineProperty(User1Component.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (str) {
            console.log('@Input step: ' + str);
            this._step = str;
        },
        enumerable: true,
        configurable: true
    });
    User1Component.prototype.ngOnInit = function () {
        console.log('step one init');
    };
    User1Component.prototype.ngOnDestroy = function () {
        console.log('step one destroy');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], User1Component.prototype, "step", null);
    User1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user1',
            template: __webpack_require__(/*! ./user1.component.html */ "./src/app/admin/step/user1/user1.component.html"),
            styles: [__webpack_require__(/*! ./user1.component.less */ "./src/app/admin/step/user1/user1.component.less")]
        })
    ], User1Component);
    return User1Component;
}());



/***/ }),

/***/ "./src/app/admin/step/user2/user2.component.html":
/*!*******************************************************!*\
  !*** ./src/app/admin/step/user2/user2.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Step One Component：params value: {{step}}</h2>"

/***/ }),

/***/ "./src/app/admin/step/user2/user2.component.less":
/*!*******************************************************!*\
  !*** ./src/app/admin/step/user2/user2.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0ZXAvdXNlcjIvdXNlcjIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/step/user2/user2.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/step/user2/user2.component.ts ***!
  \*****************************************************/
/*! exports provided: User2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User2Component", function() { return User2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var User2Component = /** @class */ (function () {
    function User2Component() {
    }
    Object.defineProperty(User2Component.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (str) {
            console.log('@Input step: ' + str);
            this._step = str;
        },
        enumerable: true,
        configurable: true
    });
    User2Component.prototype.ngOnInit = function () {
        console.log('step one init');
    };
    User2Component.prototype.ngOnDestroy = function () {
        console.log('step one destroy');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], User2Component.prototype, "step", null);
    User2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user2',
            template: __webpack_require__(/*! ./user2.component.html */ "./src/app/admin/step/user2/user2.component.html"),
            styles: [__webpack_require__(/*! ./user2.component.less */ "./src/app/admin/step/user2/user2.component.less")]
        })
    ], User2Component);
    return User2Component;
}());



/***/ }),

/***/ "./src/app/admin/step/user3/user3.component.html":
/*!*******************************************************!*\
  !*** ./src/app/admin/step/user3/user3.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Step One Component：params value: {{step}}</h2>"

/***/ }),

/***/ "./src/app/admin/step/user3/user3.component.less":
/*!*******************************************************!*\
  !*** ./src/app/admin/step/user3/user3.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0ZXAvdXNlcjMvdXNlcjMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/step/user3/user3.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/step/user3/user3.component.ts ***!
  \*****************************************************/
/*! exports provided: User3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User3Component", function() { return User3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var User3Component = /** @class */ (function () {
    function User3Component() {
    }
    Object.defineProperty(User3Component.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (str) {
            console.log('@Input step: ' + str);
            this._step = str;
        },
        enumerable: true,
        configurable: true
    });
    User3Component.prototype.ngOnInit = function () {
        console.log('step one init');
    };
    User3Component.prototype.ngOnDestroy = function () {
        console.log('step one destroy');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], User3Component.prototype, "step", null);
    User3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user3',
            template: __webpack_require__(/*! ./user3.component.html */ "./src/app/admin/step/user3/user3.component.html"),
            styles: [__webpack_require__(/*! ./user3.component.less */ "./src/app/admin/step/user3/user3.component.less")]
        })
    ], User3Component);
    return User3Component;
}());



/***/ })

}]);
//# sourceMappingURL=step-step-module.js.map