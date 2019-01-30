(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "./src/app/admin/report/index/index.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/report/index/index.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data\">\n    <div class=\"quality_block\">\n        <div class=\"quality_title\">\n            <div class=\"quality_titleRed\">\n                投诉举报\n            </div>\n            <div class=\"crumbs\">\n            </div>\n        </div>\n        <div class=\"dataTitle\">\n            投诉举报\n        </div>\n        <div class=\"dataData\">\n            <div style=\"width: 100%;margin: 10px 0;overflow: auto;\">\n                <div class=\"ennn\"><span style=\"line-height: 32px;\">姓名:</span></div>\n                <div class=\"emmm\">\n                    <input style=\"width: 70%;\" nz-input placeholder=\"请输入姓名\" [(ngModel)]=\"name\">\n                </div>\n            </div>\n            <div style=\"width: 100%;margin: 10px 0;overflow: auto;\">\n                <div class=\"ennn\"><span style=\"line-height: 32px;\">工作单位:</span></div>\n                <div class=\"emmm\">\n                    <input style=\"width: 70%;\" nz-input placeholder=\"请输入工作单位\" [(ngModel)]=\"workers\">\n                </div>\n            </div>\n            <div style=\"width: 100%;margin: 10px 0;overflow: auto;\">\n                <div class=\"ennn\"><span style=\"line-height: 32px;\">联系电话:</span></div>\n                <div class=\"emmm\">\n                    <input style=\"width: 70%;\" nz-input placeholder=\"请输入联系电话\" [(ngModel)]=\"phone\">\n                </div>\n            </div>\n            <div style=\"width: 100%;margin: 10px 0;overflow: auto;\">\n                <div class=\"ennn\"><span style=\"line-height: 32px;\">标题:</span></div>\n                <div class=\"emmm\">\n                    <input style=\"width: 70%;\" nz-input placeholder=\"请输入举报标题\" [(ngModel)]=\"title\">\n                </div>\n            </div>\n            <div style=\"width: 100%;margin: 10px 0;overflow: auto;\">\n                <div class=\"ennn\"><span style=\"line-height: 32px;\">内容:</span></div>\n                <div class=\"emmm\">\n                    <textarea class=\"publishText publishText-1\" placeholder=\"请输入投诉举报内容\" [(ngModel)]=\"content\"></textarea>\n                </div>\n            </div>\n\n            <div style=\"width: 100%;margin: 10px 0;overflow: hidden;text-align: center\">\n                <button nz-button nzType=\"primary\" (click)=\"save()\">确定</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/report/index/index.component.less":
/*!*********************************************************!*\
  !*** ./src/app/admin/report/index/index.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data {\n  width: 60%;\n  margin: 40px auto 0 auto;\n  padding-bottom: 40px;\n  min-height: 50%;\n}\n.quality_block {\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 40px;\n}\n.quality_block .quality_title {\n  width: 100%;\n  height: 40px;\n  background-color: #F8F8F8;\n}\n.quality_block .quality_title .crumbs {\n  line-height: 40px;\n  margin-left: 120px;\n  color: #808080;\n  font-size: 12px;\n}\n.quality_block .quality_title .quality_titleRed {\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  background-color: #CF2323;\n  color: white;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  font-weight: 400;\n  z-index: 10;\n}\n.quality_block .dataTitle {\n  width: 100%;\n  font-size: 30px;\n  font-weight: 600;\n  color: #303030;\n  text-align: center;\n  margin: 40px 0;\n}\n.quality_block .dataData .ennn {\n  width: 25%;\n  text-align: end;\n  float: left;\n  height: 32px;\n  padding-right: 20px;\n}\n.quality_block .dataData .emmm {\n  width: 75%;\n  float: right;\n}\n.quality_block .dataData .publishText {\n  width: 70%;\n  height: 150px;\n  background-color: #f1f1f1;\n  resize: none;\n  padding: 20px;\n}\n.quality_block .dataData .publishText-1::-webkit-scrollbar {\n  width: 5px;\n}\n.quality_block .dataData .publishText-1::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.2);\n}\n.quality_block .dataData .publishText-1::-webkit-scrollbar-track {\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.05);\n}\n.other {\n  width: 100%;\n  background-color: #F8F8F8;\n  bottom: 0px;\n}\n.other .other_data {\n  width: 60%;\n  margin: 0 auto;\n  padding-bottom: 30px ;\n  overflow: hidden;\n}\n.other .other_data .friendLink {\n  width: 100%;\n  margin: 40px 0;\n  overflow: hidden;\n}\n.other .other_data .friendLink .friendLinkBox {\n  float: left;\n  margin: 0 20px;\n}\n.other .other_data .heng {\n  width: 100%;\n  border-top: 1px solid #CACACA;\n  margin-bottom: 30px;\n}\n.other .other_data .logo {\n  width: 450px;\n  height: 60px;\n  position: relative;\n  margin: 0px auto 10px auto;\n}\n.other .other_data .logo .small-font {\n  width: 900px;\n  font-size: 12px;\n  -webkit-transform: scale(0.65, 0.65);\n          transform: scale(0.65, 0.65);\n  position: absolute;\n  bottom: 12px;\n  left: -52px;\n}\n.other .other_data .you {\n  text-align: center;\n}\n.other .other_data .you div {\n  font-size: 12px;\n}\n.line {\n  margin: 40px 0;\n  border-bottom: 1px solid #cacaca;\n}\n.remarks .zhuyao {\n  font-size: 18px;\n  font-weight: 600;\n  color: #303030;\n  margin-bottom: 20px;\n}\n.remarks .fujian {\n  height: 24px;\n  line-height: 24px;\n  color: #cf2323;\n  text-decoration: underline;\n  cursor: pointer;\n  margin-bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2VtL0RvY3VtZW50cy8wMS13b3JrZm9sZGVyLzAzX3Fza2ovMDQteGljaGFuZ3dlaXhpbmcvc3JjL2FwcC9hZG1pbi9yZXBvcnQvaW5kZXgvaW5kZXguY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FkbWluL3JlcG9ydC9pbmRleC9pbmRleC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FESkE7RUFLUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRVI7QURUQTtFQVNZLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0daO0FEZkE7RUFlWSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDR1o7QUQ1QkE7RUE2QlEsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFUjtBRHBDQTtFQXNDWSxVQUFBO0VBQ0EsZUFBQTtFQUFnQixXQUFBO0VBQ2hCLFlBQUE7RUFDQSxtQkFBQTtBQ0VaO0FEM0NBO0VBNENZLFVBQUE7RUFDQSxZQUFBO0FDRVo7QUQvQ0E7RUFnRFksVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRVo7QUR0REE7RUFzRDJDLFVBQUE7QUNHM0M7QUR6REE7RUF1RGlELGtCQUFBO0VBQW1CLDhCQUFBO0FDTXBFO0FEN0RBO0VBd0RpRCxrQkFBQTtFQUFtQiwrQkFBQTtBQ1NwRTtBRExBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ09KO0FEVkE7RUFLUSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNRUjtBRGhCQTtFQVVZLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNTWjtBRHJCQTtFQWNnQixXQUFBO0VBQ0EsY0FBQTtBQ1VoQjtBRHpCQTtFQW1CWSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1NaO0FEOUJBO0VBd0JZLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ1NaO0FEcENBO0VBNkJnQixZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDVWhCO0FENUNBO0VBc0NZLGtCQUFBO0FDU1o7QUQvQ0E7RUF3Q2dCLGVBQUE7QUNVaEI7QURMQTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtBQ09KO0FETEE7RUFFUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNNUjtBRFhBO0VBUVEsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTVIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9yZXBvcnQvaW5kZXgvaW5kZXguY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YXtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogNDBweCBhdXRvIDAgYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MCU7XG59XG4ucXVhbGl0eV9ibG9ja3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgLnF1YWxpdHlfdGl0bGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gICAgICAgIC5jcnVtYnN7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5xdWFsaXR5X3RpdGxlUmVke1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0YyMzIzO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgICAgICB6LWluZGV4OjEwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kYXRhVGl0bGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6MzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgICBjb2xvcjpyZ2JhKDQ4LDQ4LDQ4LDEpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgIH1cbiAgICAuZGF0YURhdGF7XG4gICAgICAgIC5lbm5ue1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmVtbW17XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIC5wdWJsaXNoVGV4dHtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsMjQxLDI0MSwxKTtcbiAgICAgICAgICAgIHJlc2l6ZTpub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAucHVibGlzaFRleHQtMTo6LXdlYmtpdC1zY3JvbGxiYXIge3dpZHRoOiA1cHg7fVxuICAgICAgICAucHVibGlzaFRleHQtMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge2JvcmRlci1yYWRpdXM6IDNweDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4yKTt9XG4gICAgICAgIC5wdWJsaXNoVGV4dC0xOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7Ym9yZGVyLXJhZGl1czogM3B4O2JhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwwLjA1KTt9XG4gICAgfVxufVxuXG4ub3RoZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICBib3R0b206IDBweDtcbiAgICAub3RoZXJfZGF0YXtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjMwcHggO1xuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgIC5mcmllbmRMaW5re1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMDtcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgIC5mcmllbmRMaW5rQm94e1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5oZW5ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NBQ0FDQTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ297XG4gICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDEwcHggYXV0bztcbiAgICAgICAgICAgIC5zbWFsbC1mb250e1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuNjUsMC42NSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbToxMnB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6LTUycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnlvdXtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ubGluZXtcbiAgICBtYXJnaW46IDQwcHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDIsMjAyLDIwMiwxKTtcbn1cbi5yZW1hcmtze1xuICAgIC56aHV5YW97XG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgICAgICBmb250LXdlaWdodDo2MDA7XG4gICAgICAgIGNvbG9yOnJnYmEoNDgsNDgsNDgsMSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5mdWppYW57XG4gICAgICAgIGhlaWdodDoyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDoyNHB4O1xuICAgICAgICBjb2xvcjpyZ2JhKDIwNywzNSwzNSwxKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG59IiwiLmRhdGEge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDQwcHggYXV0byAwIGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBtaW4taGVpZ2h0OiA1MCU7XG59XG4ucXVhbGl0eV9ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUgLmNydW1icyB7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucXVhbGl0eV9ibG9jayAucXVhbGl0eV90aXRsZSAucXVhbGl0eV90aXRsZVJlZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0YyMzIzO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgei1pbmRleDogMTA7XG59XG4ucXVhbGl0eV9ibG9jayAuZGF0YVRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG4ucXVhbGl0eV9ibG9jayAuZGF0YURhdGEgLmVubm4ge1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4ucXVhbGl0eV9ibG9jayAuZGF0YURhdGEgLmVtbW0ge1xuICB3aWR0aDogNzUlO1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucXVhbGl0eV9ibG9jayAuZGF0YURhdGEgLnB1Ymxpc2hUZXh0IHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnF1YWxpdHlfYmxvY2sgLmRhdGFEYXRhIC5wdWJsaXNoVGV4dC0xOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG4ucXVhbGl0eV9ibG9jayAuZGF0YURhdGEgLnB1Ymxpc2hUZXh0LTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ucXVhbGl0eV9ibG9jayAuZGF0YURhdGEgLnB1Ymxpc2hUZXh0LTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLm90aGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gIGJvdHRvbTogMHB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4IDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vdGhlciAub3RoZXJfZGF0YSAuZnJpZW5kTGluayB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDQwcHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vdGhlciAub3RoZXJfZGF0YSAuZnJpZW5kTGluayAuZnJpZW5kTGlua0JveCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi5vdGhlciAub3RoZXJfZGF0YSAuaGVuZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0NBQ0FDQTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5vdGhlciAub3RoZXJfZGF0YSAubG9nbyB7XG4gIHdpZHRoOiA0NTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5sb2dvIC5zbWFsbC1mb250IHtcbiAgd2lkdGg6IDkwMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42NSwgMC42NSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMnB4O1xuICBsZWZ0OiAtNTJweDtcbn1cbi5vdGhlciAub3RoZXJfZGF0YSAueW91IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC55b3UgZGl2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmxpbmUge1xuICBtYXJnaW46IDQwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWNhY2E7XG59XG4ucmVtYXJrcyAuemh1eWFvIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMwMzAzMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5yZW1hcmtzIC5mdWppYW4ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2NmMjMyMztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin/report/index/index.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/report/index/index.component.ts ***!
  \*******************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_restServices_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/restServices/reports.service */ "./src/app/share/restServices/reports.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var IndexComponent = /** @class */ (function () {
    function IndexComponent(router, reportsService, message) {
        this.router = router;
        this.reportsService = reportsService;
        this.message = message;
        this.name = '';
        this.workers = '';
        this.phone = '';
        this.title = '';
        this.content = '';
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.save = function () {
        var _this = this;
        if (this.jiancha() === 0) {
            return;
        }
        this.reportsService.addAndUpdate({
            data: {
                name: this.name,
                workers: this.workers,
                phone: this.phone,
                title: this.title,
                content: this.content,
            }
        }).subscribe(function (data) {
            if (data.errorCode === 0) {
                _this.message.create('success', '保存成功');
                _this.jump('', '');
            }
            else {
                _this.message.create('error', '保存失败,错误代码' + data.errorCode);
            }
        }, function (err) {
        });
    };
    IndexComponent.prototype.jiancha = function () {
        if (this.name === '') {
            this.message.create('error', '请输入名字');
            return 0;
        }
        if (this.workers === '') {
            this.message.create('error', '请输入工作单位');
            return 0;
        }
        if (this.phone === '') {
            this.message.create('error', '请输入联系电话');
            return 0;
        }
        if (this.title === '') {
            this.message.create('error', '请输入举报标题');
            return 0;
        }
        return 1;
    };
    IndexComponent.prototype.jump = function (i, id) {
        this.router.navigate(['/' + i + '/' + id]);
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/admin/report/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.less */ "./src/app/admin/report/index/index.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _share_restServices_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/report.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/report/report.module.ts ***!
  \***********************************************/
/*! exports provided: routes, ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/admin/report/index/index.component.ts");





var routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
        data: {
            name: '投诉举报',
            menu: true
        }
    },
];
var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]],
            providers: [],
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/share/restServices/reports.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/share/restServices/reports.service.ts ***!
  \*******************************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/HttpConfig */ "./src/app/share/decorators/HttpConfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ReportsService = /** @class */ (function () {
    function ReportsService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/v1/reports/:params1/:params2/:params3/:params4/:params5';
    }
    // addAndUpdate
    ReportsService.prototype.addAndUpdate = function (data) {
        return data.observable;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_decorators_HttpConfig__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"])({
            method: 'post',
            params: {
                params1: 'addAndUpdate'
            },
            roles: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ReportsService.prototype, "addAndUpdate", null);
    ReportsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ReportsService);
    return ReportsService;
}());



/***/ })

}]);
//# sourceMappingURL=report-report-module.js.map