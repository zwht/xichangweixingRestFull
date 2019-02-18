(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quality-quality-module"],{

/***/ "./src/app/admin/quality/event/event.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/quality/event/event.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data\">\n  <div class=\"quality_block\">\n    <div class=\"quality_title\">\n      <div class=\"quality_titleRed\">\n        质量专栏\n      </div>\n      <div class=\"quality_titleOption\" (click)=\"jump('quality','')\">\n        通知公告\n      </div>\n      <div class=\"quality_titleOptionOK\">\n        事件列表\n      </div>\n      <div class=\"quality_titleOption\" (click)=\"jump('quality/list','')\">\n        处理列表\n      </div>\n    </div>\n  </div>\n  <div style=\"margin-bottom: 10px;\">\n    <input nz-input placeholder=\"质量问题名称\" [(ngModel)]=\"name\" style=\"width: 16%;margin: 20px 1%;\">\n    <span>供应商:</span>\n    <nz-select style=\"width: 10%; margin: 20px 1%;\" [(ngModel)]=\"supplierID\" nzPlaceHolder=\"供应商\">\n      <nz-option nzValue=\"\" nzLabel=\"全部\"></nz-option>\n      <nz-option *ngFor=\"let item of supplier\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n    </nz-select>\n    <span>级别:</span>\n    <nz-select style=\"width: 10%; margin: 20px 1%;\" [(ngModel)]=\"eventLevel\" nzPlaceHolder=\"事件级别\">\n      <nz-option nzValue=\"\" nzLabel=\"全部\"></nz-option>\n      <nz-option nzValue=\"1\" nzLabel=\"质量问题\"></nz-option>\n      <nz-option nzValue=\"2\" nzLabel=\"质量事件\"></nz-option>\n      <nz-option nzValue=\"3\" nzLabel=\"质量事故\"></nz-option>\n    </nz-select>\n    <nz-range-picker [(ngModel)]=\"occurrenceTime\" nzShowTime nzFormat=\"yyyy-MM-dd\"></nz-range-picker>\n\n    <div class=\"queryButton\" (click)=\"getList()\">查询</div>\n  </div>\n  <div class=\"lastContent\">\n    <div class=\"line\" *ngFor=\"let item of data\" (click)=\"jump('quality/event/see',item.id)\">\n      <div class=\"circular\"></div>\n      <div class=\"lineData\">\n        {{item.title}}\n      </div>\n      <div class=\"date\">\n      </div>\n    </div>\n  </div>\n</div>\n<div style=\"width: 100%;text-align: center;background-color: white;padding-bottom: 40px;\">\n  <nz-pagination nzShowSizeChanger [nzTotal]=\"total\" [(nzPageSize)]=\"pageSize\" [(nzPageIndex)]=\"pageIndex\"\n    (nzPageSizeChange)=\"getList()\" (nzPageIndexChange)=\"getList()\"></nz-pagination>\n</div>"

/***/ }),

/***/ "./src/app/admin/quality/event/event.component.less":
/*!**********************************************************!*\
  !*** ./src/app/admin/quality/event/event.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data {\n  width: 60%;\n  margin: 40px auto 0 auto;\n  padding-bottom: 40px;\n  min-height: 50%;\n}\n.quality_block {\n  width: 100%;\n  overflow: hidden;\n}\n.quality_block .quality_title {\n  width: 100%;\n  height: 40px;\n  background-color: #F8F8F8;\n}\n.quality_block .quality_title .quality_titleRed {\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  background-color: #CF2323;\n  color: white;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  font-weight: 400;\n  z-index: 10;\n}\n.quality_block .quality_title .quality_titleOption {\n  margin: 3px 0;\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 14px;\n  font-weight: 400;\n  z-index: 10;\n  cursor: pointer;\n}\n.quality_block .quality_title .quality_titleOptionOK {\n  margin: 0 3px;\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 14px;\n  font-weight: 400;\n  z-index: 10;\n  border-bottom: 2px solid #CF2323;\n}\n.queryButton {\n  float: right;\n  width: 8%;\n  height: 30px;\n  background-color: #CF2323;\n  color: white;\n  font-size: 18px;\n  line-height: 30px;\n  text-align: center;\n  margin: 20px 0 20px 5px;\n}\n.equipmentData {\n  width: 100%;\n  overflow: hidden;\n}\n.equipmentData .division {\n  padding-top: 15px;\n  float: left;\n  width: 200px;\n  height: 350px;\n  margin: 10px;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n}\n.equipmentData .division .icon {\n  display: block;\n  width: 190px;\n  height: 200px;\n  margin: 0 auto 30px auto;\n}\n.equipmentData .division .name {\n  margin: 0 auto;\n  width: 184px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #303030;\n}\n.equipmentData .division .number {\n  margin: 0 auto;\n  width: 184px;\n  font-size: 13px;\n  color: rgba(128, 128, 128, 0.8);\n}\n.equipmentData .division .company {\n  margin: 0 auto;\n  width: 184px;\n  font-size: 13px;\n  color: rgba(128, 128, 128, 0.8);\n}\n.other {\n  width: 100%;\n  background-color: #F8F8F8;\n  bottom: 0px;\n}\n.other .other_data {\n  width: 60%;\n  margin: 0 auto;\n  padding-bottom: 30px ;\n  overflow: hidden;\n}\n.other .other_data .friendLink {\n  width: 100%;\n  margin: 40px 0;\n  overflow: hidden;\n}\n.other .other_data .friendLink .friendLinkBox {\n  float: left;\n  margin: 0 20px;\n}\n.other .other_data .heng {\n  width: 100%;\n  border-top: 1px solid #CACACA;\n  margin-bottom: 30px;\n}\n.other .other_data .logo {\n  width: 450px;\n  height: 60px;\n  position: relative;\n  margin: 0px auto 10px auto;\n}\n.other .other_data .logo .small-font {\n  width: 900px;\n  font-size: 12px;\n  -webkit-transform: scale(0.65, 0.65);\n          transform: scale(0.65, 0.65);\n  position: absolute;\n  bottom: 12px;\n  left: -52px;\n}\n.other .other_data .you {\n  text-align: center;\n}\n.other .other_data .you div {\n  font-size: 12px;\n}\n.circular {\n  width: 4px;\n  height: 4px;\n  background: #c5c5c5;\n  border-radius: 2px;\n  display: inline-block;\n  margin: 20px 10px;\n}\n.date {\n  float: right;\n  font-size: 13px;\n  line-height: 40px;\n  color: #cacaca;\n  font-weight: 400;\n  margin-right: 20px;\n}\n.lastContent {\n  width: 100%;\n  margin-top: 30px;\n}\n.lastContent .line {\n  width: 100%;\n  height: 40px;\n  border-bottom: 1px solid #f1f1f3;\n}\n.lastContent .line .lineData {\n  width: 75%;\n  line-height: 40px;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2VtL0RvY3VtZW50cy8wMS13b3JrZm9sZGVyLzAzX3Fza2ovMDQteGljaGFuZ3dlaXhpbmcvc3JjL2FwcC9hZG1pbi9xdWFsaXR5L2V2ZW50L2V2ZW50LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hZG1pbi9xdWFsaXR5L2V2ZW50L2V2ZW50LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0NKO0FESEE7RUFJUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRVI7QURSQTtFQVFZLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNHWjtBRHJCQTtFQXFCWSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNHWjtBRGxDQTtFQWtDWSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDR1o7QURDQTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDSjtBRENBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURIQTtFQUlRLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FDRVI7QURYQTtFQVdZLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDR1o7QURqQkE7RUFpQlksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR1o7QUR4QkE7RUF3QlksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNHWjtBRDlCQTtFQThCWSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0daO0FERUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQUo7QURIQTtFQUtRLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEVEE7RUFVWSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRVo7QURkQTtFQWNnQixXQUFBO0VBQ0EsY0FBQTtBQ0doQjtBRGxCQTtFQW1CWSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0VaO0FEdkJBO0VBd0JZLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ0VaO0FEN0JBO0VBNkJnQixZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDR2hCO0FEckNBO0VBc0NZLGtCQUFBO0FDRVo7QUR4Q0E7RUF3Q2dCLGVBQUE7QUNHaEI7QURFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0FKO0FERkE7RUFJUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDQ1I7QURQQTtFQVFZLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRVoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9xdWFsaXR5L2V2ZW50L2V2ZW50LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGF7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDQwcHggYXV0byAwIGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgbWluLWhlaWdodDogNTAlO1xufVxuLnF1YWxpdHlfYmxvY2t7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAucXVhbGl0eV90aXRsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICAgICAgLnF1YWxpdHlfdGl0bGVSZWR7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRjIzMjM7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIHotaW5kZXg6MTA7XG4gICAgICAgIH1cbiAgICAgICAgLnF1YWxpdHlfdGl0bGVPcHRpb257XG4gICAgICAgICAgICBtYXJnaW46M3B4IDA7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgICAgICAgICAgei1pbmRleDoxMDtcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5xdWFsaXR5X3RpdGxlT3B0aW9uT0t7XG4gICAgICAgICAgICBtYXJnaW46MCAzcHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgICAgICAgICAgei1pbmRleDoxMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQ0YyMzIzO1xuICAgICAgICB9XG4gICAgfVxufVxuLnF1ZXJ5QnV0dG9ue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogOCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRjIzMjM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMCAyMHB4IDVweDtcbn1cbi5lcXVpcG1lbnREYXRhe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAuZGl2aXNpb257XG4gICAgICAgIHBhZGRpbmctdG9wOjE1cHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzowcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgIC5pY29ue1xuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxOTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHdpZHRoOjE4NHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XG4gICAgICAgICAgICBjb2xvcjpyZ2JhKDQ4LDQ4LDQ4LDEpO1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHdpZHRoOjE4NHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgICAgICAgICBjb2xvcjpyZ2JhKDEyOCwxMjgsMTI4LDAuOCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbXBhbnl7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHdpZHRoOjE4NHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgICAgICAgICBjb2xvcjpyZ2JhKDEyOCwxMjgsMTI4LDAuOCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5vdGhlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIC5vdGhlcl9kYXRhe1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZy1ib3R0b206MzBweCA7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgLmZyaWVuZExpbmt7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICAgICAgLmZyaWVuZExpbmtCb3h7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhlbmd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0FDQUNBO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAubG9nb3tcbiAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xuICAgICAgICAgICAgLnNtYWxsLWZvbnR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC42NSwwLjY1KTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOjEycHg7XG4gICAgICAgICAgICAgICAgbGVmdDotNTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAueW91e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5jaXJjdWxhcntcbiAgICB3aWR0aDo0cHg7XG4gICAgaGVpZ2h0OjRweDtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMTk3LDE5NywxOTcsMSk7XG4gICAgYm9yZGVyLXJhZGl1czoycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMjBweCAxMHB4O1xufVxuLmRhdGV7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OjQwcHg7XG4gICAgY29sb3I6cmdiYSgyMDIsMjAyLDIwMiwxKTtcbiAgICBmb250LXdlaWdodDo0MDA7XG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG59XG4ubGFzdENvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAubGluZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjQxLDI0MSwyNDMsMSk7XG4gICAgICAgIC5saW5lRGF0YXtcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmRhdGEge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDQwcHggYXV0byAwIGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBtaW4taGVpZ2h0OiA1MCU7XG59XG4ucXVhbGl0eV9ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUgLnF1YWxpdHlfdGl0bGVSZWQge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGMjMyMztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHotaW5kZXg6IDEwO1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUgLnF1YWxpdHlfdGl0bGVPcHRpb24ge1xuICBtYXJnaW46IDNweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB6LWluZGV4OiAxMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUgLnF1YWxpdHlfdGl0bGVPcHRpb25PSyB7XG4gIG1hcmdpbjogMCAzcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHotaW5kZXg6IDEwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0NGMjMyMztcbn1cbi5xdWVyeUJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDglO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRjIzMjM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDVweDtcbn1cbi5lcXVpcG1lbnREYXRhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZXF1aXBtZW50RGF0YSAuZGl2aXNpb24ge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uZXF1aXBtZW50RGF0YSAuZGl2aXNpb24gLmljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE5MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XG59XG4uZXF1aXBtZW50RGF0YSAuZGl2aXNpb24gLm5hbWUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE4NHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzAzMDMwO1xufVxuLmVxdWlwbWVudERhdGEgLmRpdmlzaW9uIC5udW1iZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE4NHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XG59XG4uZXF1aXBtZW50RGF0YSAuZGl2aXNpb24gLmNvbXBhbnkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE4NHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XG59XG4ub3RoZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgYm90dG9tOiAwcHg7XG59XG4ub3RoZXIgLm90aGVyX2RhdGEge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDMwcHggO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5mcmllbmRMaW5rIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNDBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5mcmllbmRMaW5rIC5mcmllbmRMaW5rQm94IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5oZW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0FDQUNBO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5sb2dvIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwcHggYXV0byAxMHB4IGF1dG87XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLmxvZ28gLnNtYWxsLWZvbnQge1xuICB3aWR0aDogOTAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjY1LCAwLjY1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IC01MnB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC55b3Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLnlvdSBkaXYge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2lyY3VsYXIge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogI2M1YzVjNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweCAxMHB4O1xufVxuLmRhdGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjY2FjYWNhO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubGFzdENvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5sYXN0Q29udGVudCAubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYzO1xufVxuLmxhc3RDb250ZW50IC5saW5lIC5saW5lRGF0YSB7XG4gIHdpZHRoOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin/quality/event/event.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/quality/event/event.component.ts ***!
  \********************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_restServices_front_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/restServices/front.service */ "./src/app/share/restServices/front.service.ts");




var EventComponent = /** @class */ (function () {
    function EventComponent(frontService, router) {
        this.frontService = frontService;
        this.router = router;
        this.pageIndex = 1; // 当前页数
        this.total = 1; // 数据总数
        this.pageSize = 10; // 每页条数
        this.name = '';
        this.supplierID = '';
        this.eventLevel = '';
        this.occurrenceTime = '';
        this.supplier = [{
                id: '',
                name: ''
            }];
    }
    EventComponent.prototype.ngOnInit = function () {
        this.getList();
        this.getAllByQuery();
    };
    EventComponent.prototype.getList = function () {
        var _this = this;
        this.frontService.getQualityEventByQuery({
            params: {
                pageSize: this.pageSize,
                pageNumber: this.pageIndex,
                name: this.name,
                eventLevel: this.eventLevel,
                occurrenceTime: this.occurrenceTime,
                supplierId: this.supplierID
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.total = response.data.totalCount;
                _this.data = response.data.pageData;
            }
        });
    };
    EventComponent.prototype.getAllByQuery = function () {
        var _this = this;
        this.frontService.getAllByQuery({
            params: {
                pageSize: 999,
                pageNumber: 1
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.supplier = response.data.pageData;
            }
        });
    };
    EventComponent.prototype.jump = function (i, id) {
        this.router.navigate(['/' + i + '/' + id]);
    };
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/admin/quality/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.less */ "./src/app/admin/quality/event/event.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_share_restServices_front_service__WEBPACK_IMPORTED_MODULE_3__["FrontService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/admin/quality/eventSee/eventSee.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/quality/eventSee/eventSee.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data\">\n    <div class=\"quality_block\">\n        <div class=\"quality_title\">\n            <div class=\"quality_titleRed\">\n                质量专栏\n            </div>\n            <div class=\"crumbs\">\n                <span>通知公告</span>>\n                <span>公告详情</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"head\">\n        <div class=\"name\">{{data.name}}</div>\n        <div class=\"otherData\">{{data.departName}}</div>\n        <div class=\"otherData\">{{data.occurrenceTime}}</div>\n    </div>\n    <div class=\"dividing\"></div>\n    <div class=\"middle\">\n        <div nz-row>\n            <div nz-col nzSpan=\"3\" class=\"emmm\">事件级别:</div>\n            <div nz-col nzSpan=\"21\" class=\"ennn\">{{data.eventLevelName}}</div>\n            <div nz-col nzSpan=\"3\" class=\"emmm\">供应商:</div>\n            <div nz-col nzSpan=\"21\" class=\"ennn\">{{data.supplierName}}</div>\n            <div nz-col nzSpan=\"3\" class=\"emmm\">涉及物料:</div>\n            <div nz-col nzSpan=\"21\" class=\"ennn\">{{data.materials}}</div>\n            <div nz-col nzSpan=\"3\" class=\"emmm\">发生时间:</div>\n            <div nz-col nzSpan=\"21\" class=\"ennn\">{{data.occurrenceTime}}</div>\n            <div nz-col nzSpan=\"3\" class=\"emmm\">发生部门:</div>\n            <div nz-col nzSpan=\"21\" class=\"ennn\">{{data.departName}}</div>\n        </div>\n    </div>\n    <div class=\"dividing\"></div>\n    <div class=\"remarks\">\n        <div class=\"zhuyao\">\n            事件描述\n        </div>\n        <div class=\"jutizhuyao\">\n            <div class=\"jutidejuti\">\n                {{data.remark}}\n            </div>\n        </div>\n    </div>\n    <div class=\"dividing\"></div>\n    <div class=\"remarks\">\n        <div class=\"zhuyao\">\n            附件下载\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/quality/eventSee/eventSee.component.less":
/*!****************************************************************!*\
  !*** ./src/app/admin/quality/eventSee/eventSee.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data {\n  width: 60%;\n  margin: 40px auto 0 auto;\n  padding-bottom: 40px;\n  min-height: 50%;\n}\n.quality_block {\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 40px;\n}\n.quality_block .quality_title {\n  width: 100%;\n  height: 40px;\n  background-color: #F8F8F8;\n}\n.quality_block .quality_title .crumbs {\n  line-height: 40px;\n  margin-left: 120px;\n  color: #808080;\n  font-size: 12px;\n}\n.quality_block .quality_title .quality_titleRed {\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  background-color: #CF2323;\n  color: white;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  font-weight: 400;\n  z-index: 10;\n}\n.head {\n  width: 100%;\n}\n.head .name {\n  font-size: 22px;\n  font-weight: 600;\n  color: #303030;\n  margin-bottom: 20px;\n}\n.head .otherData {\n  font-size: 12px;\n  color: #808080;\n  margin: 10px 0;\n}\n.dividing {\n  width: 100%;\n  border-bottom: 1px solid #cacaca;\n  margin: 30px 0;\n}\n.middle {\n  width: 100%;\n}\n.middle .emmm {\n  font-size: 14px;\n  color: #808080;\n  margin: 10px 0;\n}\n.middle .ennn {\n  font-size: 16px;\n  color: #303030;\n  margin: 10px 0;\n}\n.remarks .zhuyao {\n  font-size: 18px;\n  font-weight: 600;\n  color: #303030;\n  margin-bottom: 20px;\n}\n.remarks .jutizhuyao {\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  color: #303030;\n  margin-bottom: 30px;\n}\n.remarks .jutizhuyao .jutidejuti {\n  width: 100%;\n  font-size: 12px;\n  color: #808080;\n  margin: 10px 0;\n}\n.other {\n  width: 100%;\n  background-color: #F8F8F8;\n  bottom: 0px;\n}\n.other .other_data {\n  width: 60%;\n  margin: 0 auto;\n  padding-bottom: 30px ;\n  overflow: hidden;\n}\n.other .other_data .friendLink {\n  width: 100%;\n  margin: 40px 0;\n  overflow: hidden;\n}\n.other .other_data .friendLink .friendLinkBox {\n  float: left;\n  margin: 0 20px;\n}\n.other .other_data .heng {\n  width: 100%;\n  border-top: 1px solid #CACACA;\n  margin-bottom: 30px;\n}\n.other .other_data .logo {\n  width: 450px;\n  height: 60px;\n  position: relative;\n  margin: 0px auto 10px auto;\n}\n.other .other_data .logo .small-font {\n  width: 900px;\n  font-size: 12px;\n  -webkit-transform: scale(0.65, 0.65);\n          transform: scale(0.65, 0.65);\n  position: absolute;\n  bottom: 12px;\n  left: -52px;\n}\n.other .other_data .you {\n  text-align: center;\n}\n.other .other_data .you div {\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2VtL0RvY3VtZW50cy8wMS13b3JrZm9sZGVyLzAzX3Fza2ovMDQteGljaGFuZ3dlaXhpbmcvc3JjL2FwcC9hZG1pbi9xdWFsaXR5L2V2ZW50U2VlL2V2ZW50U2VlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hZG1pbi9xdWFsaXR5L2V2ZW50U2VlL2V2ZW50U2VlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURKQTtFQUtRLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNFUjtBRFRBO0VBU1ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDR1o7QURmQTtFQWVZLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNHWjtBRENBO0VBQ0ksV0FBQTtBQ0NKO0FERkE7RUFHUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNFUjtBRFJBO0VBU1EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRVI7QURDQTtFQUNJLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUNDSjtBRENBO0VBQ0ksV0FBQTtBQ0NKO0FERkE7RUFHUSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNFUjtBRFBBO0VBUVEsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRVI7QURDQTtFQUVRLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0FSO0FETEE7RUFRUSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQVI7QURaQTtFQWNZLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDWjtBRElBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FEREE7RUFLUSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBRFBBO0VBVVksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FaO0FEWkE7RUFjZ0IsV0FBQTtFQUNBLGNBQUE7QUNDaEI7QURoQkE7RUFtQlksV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNBWjtBRHJCQTtFQXdCWSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNBWjtBRDNCQTtFQTZCZ0IsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NoQjtBRG5DQTtFQXNDWSxrQkFBQTtBQ0FaO0FEdENBO0VBd0NnQixlQUFBO0FDQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcXVhbGl0eS9ldmVudFNlZS9ldmVudFNlZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhe1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gMCBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwJTtcbn1cbi5xdWFsaXR5X2Jsb2Nre1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAucXVhbGl0eV90aXRsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICAgICAgLmNydW1ic3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnF1YWxpdHlfdGl0bGVSZWR7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRjIzMjM7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIHotaW5kZXg6MTA7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaGVhZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAubmFtZXtcbiAgICAgICAgZm9udC1zaXplOjIycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICAgICAgY29sb3I6cmdiYSg0OCw0OCw0OCwxKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLm90aGVyRGF0YXtcbiAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgIGNvbG9yOnJnYmEoMTI4LDEyOCwxMjgsMSk7XG4gICAgICAgIG1hcmdpbjoxMHB4IDA7XG4gICAgfVxufVxuLmRpdmlkaW5ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMjAyLDIwMiwyMDIsMSk7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG59XG4ubWlkZGxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5lbW1te1xuICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgY29sb3I6cmdiYSgxMjgsMTI4LDEyOCwxKTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgfVxuICAgIC5lbm5ue1xuICAgICAgICBmb250LXNpemU6MTZweDtcbiAgICAgICAgY29sb3I6cmdiYSg0OCw0OCw0OCwxKTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgfVxufVxuLnJlbWFya3N7XG4gICAgLnpodXlhb3tcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICAgICAgY29sb3I6cmdiYSg0OCw0OCw0OCwxKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLmp1dGl6aHV5YW97XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6MThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgICBjb2xvcjpyZ2JhKDQ4LDQ4LDQ4LDEpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAuanV0aWRlanV0aXtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMTI4LDEyOCwxMjgsMSk7XG4gICAgICAgICAgICBtYXJnaW46MTBweCAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ub3RoZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICBib3R0b206IDBweDtcbiAgICAub3RoZXJfZGF0YXtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjMwcHggO1xuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgIC5mcmllbmRMaW5re1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMDtcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgIC5mcmllbmRMaW5rQm94e1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5oZW5ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NBQ0FDQTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ297XG4gICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDEwcHggYXV0bztcbiAgICAgICAgICAgIC5zbWFsbC1mb250e1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuNjUsMC42NSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbToxMnB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6LTUycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnlvdXtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuZGF0YSB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogNDBweCBhdXRvIDAgYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbn1cbi5xdWFsaXR5X2Jsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucXVhbGl0eV9ibG9jayAucXVhbGl0eV90aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG59XG4ucXVhbGl0eV9ibG9jayAucXVhbGl0eV90aXRsZSAuY3J1bWJzIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5xdWFsaXR5X3RpdGxlIC5xdWFsaXR5X3RpdGxlUmVkIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRjIzMjM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB6LWluZGV4OiAxMDtcbn1cbi5oZWFkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaGVhZCAub3RoZXJEYXRhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgwODA4MDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uZGl2aWRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWNhY2E7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuLm1pZGRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1pZGRsZSAuZW1tbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLm1pZGRsZSAuZW5ubiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLnJlbWFya3MgLnpodXlhbyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucmVtYXJrcyAuanV0aXpodXlhbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnJlbWFya3MgLmp1dGl6aHV5YW8gLmp1dGlkZWp1dGkge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgwODA4MDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4ub3RoZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgYm90dG9tOiAwcHg7XG59XG4ub3RoZXIgLm90aGVyX2RhdGEge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDMwcHggO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5mcmllbmRMaW5rIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNDBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5mcmllbmRMaW5rIC5mcmllbmRMaW5rQm94IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5oZW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0FDQUNBO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5sb2dvIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwcHggYXV0byAxMHB4IGF1dG87XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLmxvZ28gLnNtYWxsLWZvbnQge1xuICB3aWR0aDogOTAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjY1LCAwLjY1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IC01MnB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC55b3Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLnlvdSBkaXYge1xuICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/quality/eventSee/eventSee.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/quality/eventSee/eventSee.component.ts ***!
  \**************************************************************/
/*! exports provided: EventSeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSeeComponent", function() { return EventSeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_restServices_front_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/restServices/front.service */ "./src/app/share/restServices/front.service.ts");




var EventSeeComponent = /** @class */ (function () {
    function EventSeeComponent(route, frontService, router) {
        this.route = route;
        this.frontService = frontService;
        this.router = router;
        this.id = 0;
        this.data = {
            name: '',
            departName: '',
            occurrenceTime: '',
            eventLevelName: '',
            supplierName: '',
            materials: '',
            remark: '',
        };
    }
    EventSeeComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getByID();
    };
    EventSeeComponent.prototype.getByID = function () {
        var _this = this;
        this.frontService.getQualityEventById({
            params: {
                params2: this.id,
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                // this.total = response.data.totalCount;
                _this.data = response.data;
            }
        });
    };
    EventSeeComponent.prototype.jump = function (i, id) {
        this.router.navigate(['/' + i + '/' + id]);
    };
    EventSeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventsee',
            template: __webpack_require__(/*! ./eventSee.component.html */ "./src/app/admin/quality/eventSee/eventSee.component.html"),
            styles: [__webpack_require__(/*! ./eventSee.component.less */ "./src/app/admin/quality/eventSee/eventSee.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _share_restServices_front_service__WEBPACK_IMPORTED_MODULE_3__["FrontService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EventSeeComponent);
    return EventSeeComponent;
}());



/***/ }),

/***/ "./src/app/admin/quality/index/index.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/quality/index/index.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data\">\n  <div class=\"quality_block\">\n    <div class=\"quality_title\">\n      <div class=\"quality_titleRed\">\n        质量专栏\n      </div>\n      <div class=\"quality_titleOptionOK\">\n        通知公告\n      </div>\n      <div class=\"quality_titleOption\" (click)=\"jump('quality/event','')\">\n        事件列表\n      </div>\n      <div class=\"quality_titleOption\" (click)=\"jump('quality/list','')\">\n        处理列表\n      </div>\n    </div>\n  </div>\n  <div class=\"lastContent\">\n    <div class=\"line\" *ngFor=\"let item of data\" (click)=\"jump('quality/see',item.id)\">\n      <div class=\"circular\"></div>\n      <div class=\"lineData\">\n        {{item.title}}\n      </div>\n      <div class=\"date\">\n        {{item.updateTime}}\n      </div>\n    </div>\n  </div>\n</div>\n<div style=\"width: 100%;text-align: center;background-color: white;padding-bottom: 40px;\">\n  <nz-pagination nzShowSizeChanger [nzTotal]=\"total\" [(nzPageSize)]=\"pageSize\" [(nzPageIndex)]=\"pageIndex\"\n    (nzPageSizeChange)=\"getList()\" (nzPageIndexChange)=\"getList()\"></nz-pagination>\n</div>"

/***/ }),

/***/ "./src/app/admin/quality/index/index.component.less":
/*!**********************************************************!*\
  !*** ./src/app/admin/quality/index/index.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data {\n  width: 60%;\n  margin: 40px auto 0 auto;\n  padding-bottom: 40px;\n  min-height: 50%;\n}\n.quality_block {\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 40px;\n}\n.quality_block .quality_title {\n  width: 100%;\n  height: 40px;\n  background-color: #F8F8F8;\n}\n.quality_block .quality_title .quality_titleRed {\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  background-color: #CF2323;\n  color: white;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  font-weight: 400;\n  z-index: 10;\n}\n.quality_block .quality_title .quality_titleOption {\n  margin: 3px 0;\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 14px;\n  font-weight: 400;\n  z-index: 10;\n}\n.quality_block .quality_title .quality_titleOptionOK {\n  margin: 0 3px;\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 14px;\n  font-weight: 400;\n  z-index: 10;\n  border-bottom: 2px solid #CF2323;\n}\n.quality_block .quality_title .quality_more {\n  float: right;\n  width: 100%;\n  height: 40px;\n  position: relative;\n  bottom: 40px;\n  z-index: 9;\n}\n.quality_block .quality_title .quality_more .quality_keyword {\n  float: left;\n  margin-left: 130px;\n  margin-top: 5px;\n}\n.quality_block .quality_title .quality_more .quality_moreWord {\n  float: right;\n  font-size: 12px;\n  line-height: 30px;\n  color: #808080;\n}\n.date {\n  float: right;\n  font-size: 13px;\n  line-height: 40px;\n  color: #cacaca;\n  font-weight: 400;\n  margin-right: 20px;\n}\n.lastContent {\n  width: 100%;\n  margin-top: 30px;\n}\n.lastContent .line {\n  width: 100%;\n  height: 40px;\n  border-bottom: 1px solid #f1f1f3;\n}\n.lastContent .line .lineData {\n  width: 75%;\n  line-height: 40px;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.circular {\n  width: 4px;\n  height: 4px;\n  background: #c5c5c5;\n  border-radius: 2px;\n  display: inline-block;\n  margin: 20px 10px;\n}\n.other {\n  width: 100%;\n  background-color: #F8F8F8;\n  bottom: 0px;\n}\n.other .other_data {\n  width: 60%;\n  margin: 0 auto;\n  padding-bottom: 30px ;\n  overflow: hidden;\n}\n.other .other_data .friendLink {\n  width: 100%;\n  margin: 40px 0;\n  overflow: hidden;\n}\n.other .other_data .friendLink .friendLinkBox {\n  float: left;\n  margin: 0 20px;\n}\n.other .other_data .heng {\n  width: 100%;\n  border-top: 1px solid #CACACA;\n  margin-bottom: 30px;\n}\n.other .other_data .logo {\n  width: 450px;\n  height: 60px;\n  position: relative;\n  margin: 0px auto 10px auto;\n}\n.other .other_data .logo .small-font {\n  width: 900px;\n  font-size: 12px;\n  -webkit-transform: scale(0.65, 0.65);\n          transform: scale(0.65, 0.65);\n  position: absolute;\n  bottom: 12px;\n  left: -52px;\n}\n.other .other_data .you {\n  text-align: center;\n}\n.other .other_data .you div {\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2VtL0RvY3VtZW50cy8wMS13b3JrZm9sZGVyLzAzX3Fza2ovMDQteGljaGFuZ3dlaXhpbmcvc3JjL2FwcC9hZG1pbi9xdWFsaXR5L2luZGV4L2luZGV4LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hZG1pbi9xdWFsaXR5L2luZGV4L2luZGV4LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURKQTtFQUtRLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNFUjtBRFRBO0VBU1ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0daO0FEdEJBO0VBc0JZLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDR1o7QURsQ0E7RUFrQ1ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ0daO0FEL0NBO0VBK0NZLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNHWjtBRHZEQTtFQXNEZ0IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0loQjtBRDVEQTtFQTJEZ0IsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJaEI7QURDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREhBO0VBSVEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ0VSO0FEUkE7RUFRWSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0daO0FEQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNBSjtBREhBO0VBS1EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ1I7QURUQTtFQVVZLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFWjtBRGRBO0VBY2dCLFdBQUE7RUFDQSxjQUFBO0FDR2hCO0FEbEJBO0VBbUJZLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDRVo7QUR2QkE7RUF3QlksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDRVo7QUQ3QkE7RUE2QmdCLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHaEI7QURyQ0E7RUFzQ1ksa0JBQUE7QUNFWjtBRHhDQTtFQXdDZ0IsZUFBQTtBQ0doQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3F1YWxpdHkvaW5kZXgvaW5kZXguY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YXtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogNDBweCBhdXRvIDAgYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MCU7XG59XG4ucXVhbGl0eV9ibG9ja3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgLnF1YWxpdHlfdGl0bGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gICAgICAgIC5xdWFsaXR5X3RpdGxlUmVke1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0YyMzIzO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgICAgICB6LWluZGV4OjEwO1xuICAgICAgICB9XG4gICAgICAgIC5xdWFsaXR5X3RpdGxlT3B0aW9ue1xuICAgICAgICAgICAgbWFyZ2luOjNweCAwO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIHotaW5kZXg6MTA7XG4gICAgICAgIH1cbiAgICAgICAgLnF1YWxpdHlfdGl0bGVPcHRpb25PS3tcbiAgICAgICAgICAgIG1hcmdpbjowIDNweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgICAgICB6LWluZGV4OjEwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDRjIzMjM7XG4gICAgICAgIH1cbiAgICAgICAgLnF1YWxpdHlfbW9yZXtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOjQwcHg7XG4gICAgICAgICAgICB6LWluZGV4Ojk7XG4gICAgICAgICAgICAucXVhbGl0eV9rZXl3b3Jke1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucXVhbGl0eV9tb3JlV29yZHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MzBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDEyOCwxMjgsMTI4LDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmRhdGV7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OjQwcHg7XG4gICAgY29sb3I6cmdiYSgyMDIsMjAyLDIwMiwxKTtcbiAgICBmb250LXdlaWdodDo0MDA7XG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG59XG4ubGFzdENvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAubGluZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjQxLDI0MSwyNDMsMSk7XG4gICAgICAgIC5saW5lRGF0YXtcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICB9XG59XG4uY2lyY3VsYXJ7XG4gICAgd2lkdGg6NHB4O1xuICAgIGhlaWdodDo0cHg7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDE5NywxOTcsMTk3LDEpO1xuICAgIGJvcmRlci1yYWRpdXM6MnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDIwcHggMTBweDtcbn1cblxuLm90aGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgLm90aGVyX2RhdGF7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTozMHB4IDtcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICAuZnJpZW5kTGlua3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICAuZnJpZW5kTGlua0JveHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaGVuZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQUNBQ0E7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2dve1xuICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAxMHB4IGF1dG87XG4gICAgICAgICAgICAuc21hbGwtZm9udHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwLjY1LDAuNjUpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206MTJweDtcbiAgICAgICAgICAgICAgICBsZWZ0Oi01MnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC55b3V7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmRhdGEge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDQwcHggYXV0byAwIGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBtaW4taGVpZ2h0OiA1MCU7XG59XG4ucXVhbGl0eV9ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUgLnF1YWxpdHlfdGl0bGVSZWQge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGMjMyMztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHotaW5kZXg6IDEwO1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUgLnF1YWxpdHlfdGl0bGVPcHRpb24ge1xuICBtYXJnaW46IDNweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB6LWluZGV4OiAxMDtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5xdWFsaXR5X3RpdGxlIC5xdWFsaXR5X3RpdGxlT3B0aW9uT0sge1xuICBtYXJnaW46IDAgM3B4O1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB6LWluZGV4OiAxMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDRjIzMjM7XG59XG4ucXVhbGl0eV9ibG9jayAucXVhbGl0eV90aXRsZSAucXVhbGl0eV9tb3JlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNDBweDtcbiAgei1pbmRleDogOTtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5xdWFsaXR5X3RpdGxlIC5xdWFsaXR5X21vcmUgLnF1YWxpdHlfa2V5d29yZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5xdWFsaXR5X3RpdGxlIC5xdWFsaXR5X21vcmUgLnF1YWxpdHlfbW9yZVdvcmQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuLmRhdGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjY2FjYWNhO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubGFzdENvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5sYXN0Q29udGVudCAubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYzO1xufVxuLmxhc3RDb250ZW50IC5saW5lIC5saW5lRGF0YSB7XG4gIHdpZHRoOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmNpcmN1bGFyIHtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICNjNWM1YzU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDIwcHggMTBweDtcbn1cbi5vdGhlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICBib3R0b206IDBweDtcbn1cbi5vdGhlciAub3RoZXJfZGF0YSB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweCA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLmZyaWVuZExpbmsge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLmZyaWVuZExpbmsgLmZyaWVuZExpbmtCb3gge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLmhlbmcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQUNBQ0E7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLmxvZ28ge1xuICB3aWR0aDogNDUwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDBweCBhdXRvIDEwcHggYXV0bztcbn1cbi5vdGhlciAub3RoZXJfZGF0YSAubG9nbyAuc21hbGwtZm9udCB7XG4gIHdpZHRoOiA5MDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNjUsIDAuNjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogLTUycHg7XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLnlvdSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vdGhlciAub3RoZXJfZGF0YSAueW91IGRpdiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/quality/index/index.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/quality/index/index.component.ts ***!
  \********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_restServices_front_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/restServices/front.service */ "./src/app/share/restServices/front.service.ts");




var IndexComponent = /** @class */ (function () {
    function IndexComponent(frontService, router) {
        this.frontService = frontService;
        this.router = router;
        this.pageIndex = 1; // 当前页数
        this.total = 1; // 数据总数
        this.pageSize = 10; // 每页条数
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    IndexComponent.prototype.getList = function () {
        var _this = this;
        this.frontService.getQualityNotice({
            params: {
                pageSize: this.pageSize,
                pageNumber: this.pageIndex,
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.total = response.data.totalCount;
                _this.data = response.data.pageData;
            }
        });
    };
    IndexComponent.prototype.jump = function (i, id) {
        this.router.navigate(['/' + i + '/' + id]);
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/admin/quality/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.less */ "./src/app/admin/quality/index/index.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_share_restServices_front_service__WEBPACK_IMPORTED_MODULE_3__["FrontService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/quality/list/list.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/quality/list/list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data\">\n  <div class=\"quality_block\">\n    <div class=\"quality_title\">\n      <div class=\"quality_titleRed\">\n        质量专栏\n      </div>\n      <div class=\"quality_titleOption\" (click)=\"jump('quality','')\">\n        通知公告\n      </div>\n      <div class=\"quality_titleOption\" (click)=\"jump('quality/event','')\">\n        事件列表\n      </div>\n      <div class=\"quality_titleOptionOK\">\n        处理列表\n      </div>\n    </div>\n  </div>\n  <div style=\"margin-bottom: 10px;\">\n    <input nz-input placeholder=\"涉及物料\" [(ngModel)]=\"materials\" style=\"width: 16%;margin: 20px 1%;\">\n    <span>供应商:</span>\n    <nz-select style=\"width: 10%; margin: 20px 1%;\" [(ngModel)]=\"supplierID\" nzPlaceHolder=\"供应商\">\n      <nz-option nzValue=\"\" nzLabel=\"全部\"></nz-option>\n      <nz-option *ngFor=\"let item of supplier\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n    </nz-select>\n    <span>状态:</span>\n    <nz-select style=\"width: 10%; margin: 20px 1%;\" [(ngModel)]=\"status\" nzPlaceHolder=\"状态\">\n      <nz-option nzValue=\"\" nzLabel=\"全部\"></nz-option>\n      <nz-option nzValue=\"1\" nzLabel=\"未处理\"></nz-option>\n      <nz-option nzValue=\"2\" nzLabel=\"处理中\"></nz-option>\n      <nz-option nzValue=\"3\" nzLabel=\"已处理\"></nz-option>\n    </nz-select>\n    <div class=\"queryButton\" (click)=\"getList()\">查询</div>\n  </div>\n  <div class=\"lastContent\">\n    <nz-table #basicTable [nzShowPagination]=\"false\" [nzData]=\"data\">\n      <thead>\n        <tr>\n          <th>供应商</th>\n          <th>涉及物料</th>\n          <th>开始处理</th>\n          <th>完成处理</th>\n          <th>状态</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of basicTable.data\" (click)=\"jump('quality/list/see',data.id)\">\n          <td>{{data.supplierName}}</td>\n          <td>{{data.materials}}</td>\n          <td>{{data.dealStartTime}}</td>\n          <td>{{data.dealEndTime}}</td>\n          <td *ngIf=\"data.status == 1\">未处理</td>\n          <td *ngIf=\"data.status == 2\">处理中</td>\n          <td *ngIf=\"data.status == 3\">已处理</td>\n        </tr>\n      </tbody>\n    </nz-table>\n  </div>\n</div>\n<div style=\"width: 100%;text-align: center;background-color: white;padding-bottom: 40px;\">\n  <nz-pagination nzShowSizeChanger [nzTotal]=\"total\" [(nzPageSize)]=\"pageSize\" [(nzPageIndex)]=\"pageIndex\"\n    (nzPageSizeChange)=\"getList()\" (nzPageIndexChange)=\"getList()\"></nz-pagination>\n</div>"

/***/ }),

/***/ "./src/app/admin/quality/list/list.component.less":
/*!********************************************************!*\
  !*** ./src/app/admin/quality/list/list.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data {\n  width: 60%;\n  margin: 40px auto 0 auto;\n  padding-bottom: 40px;\n  min-height: 50%;\n}\n.quality_block {\n  width: 100%;\n  overflow: hidden;\n}\n.quality_block .quality_title {\n  width: 100%;\n  height: 40px;\n  background-color: #F8F8F8;\n}\n.quality_block .quality_title .quality_titleRed {\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  background-color: #CF2323;\n  color: white;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  font-weight: 400;\n  z-index: 10;\n}\n.quality_block .quality_title .quality_titleOption {\n  margin: 3px 0;\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 14px;\n  font-weight: 400;\n  z-index: 10;\n  cursor: pointer;\n}\n.quality_block .quality_title .quality_titleOptionOK {\n  margin: 0 3px;\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 14px;\n  font-weight: 400;\n  z-index: 10;\n  border-bottom: 2px solid #CF2323;\n}\n.queryButton {\n  float: right;\n  width: 8%;\n  height: 30px;\n  background-color: #CF2323;\n  color: white;\n  font-size: 18px;\n  line-height: 30px;\n  text-align: center;\n  margin: 20px 0 20px 5px;\n}\n.equipmentData {\n  width: 100%;\n  overflow: hidden;\n}\n.equipmentData .division {\n  padding-top: 15px;\n  float: left;\n  width: 200px;\n  height: 350px;\n  margin: 10px;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n}\n.equipmentData .division .icon {\n  display: block;\n  width: 190px;\n  height: 200px;\n  margin: 0 auto 30px auto;\n}\n.equipmentData .division .name {\n  margin: 0 auto;\n  width: 184px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #303030;\n}\n.equipmentData .division .number {\n  margin: 0 auto;\n  width: 184px;\n  font-size: 13px;\n  color: rgba(128, 128, 128, 0.8);\n}\n.equipmentData .division .company {\n  margin: 0 auto;\n  width: 184px;\n  font-size: 13px;\n  color: rgba(128, 128, 128, 0.8);\n}\n.other {\n  width: 100%;\n  background-color: #F8F8F8;\n  bottom: 0px;\n}\n.other .other_data {\n  width: 60%;\n  margin: 0 auto;\n  padding-bottom: 30px ;\n  overflow: hidden;\n}\n.other .other_data .friendLink {\n  width: 100%;\n  margin: 40px 0;\n  overflow: hidden;\n}\n.other .other_data .friendLink .friendLinkBox {\n  float: left;\n  margin: 0 20px;\n}\n.other .other_data .heng {\n  width: 100%;\n  border-top: 1px solid #CACACA;\n  margin-bottom: 30px;\n}\n.other .other_data .logo {\n  width: 450px;\n  height: 60px;\n  position: relative;\n  margin: 0px auto 10px auto;\n}\n.other .other_data .logo .small-font {\n  width: 900px;\n  font-size: 12px;\n  -webkit-transform: scale(0.65, 0.65);\n          transform: scale(0.65, 0.65);\n  position: absolute;\n  bottom: 12px;\n  left: -52px;\n}\n.other .other_data .you {\n  text-align: center;\n}\n.other .other_data .you div {\n  font-size: 12px;\n}\n.circular {\n  width: 4px;\n  height: 4px;\n  background: #c5c5c5;\n  border-radius: 2px;\n  display: inline-block;\n  margin: 20px 10px;\n}\n.date {\n  float: right;\n  font-size: 13px;\n  line-height: 40px;\n  color: #cacaca;\n  font-weight: 400;\n  margin-right: 20px;\n}\n.lastContent {\n  width: 100%;\n  margin-top: 30px;\n}\n.lastContent .line {\n  width: 100%;\n  height: 40px;\n  border-bottom: 1px solid #f1f1f3;\n}\n.lastContent .line .lineData {\n  width: 75%;\n  line-height: 40px;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2VtL0RvY3VtZW50cy8wMS13b3JrZm9sZGVyLzAzX3Fza2ovMDQteGljaGFuZ3dlaXhpbmcvc3JjL2FwcC9hZG1pbi9xdWFsaXR5L2xpc3QvbGlzdC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYWRtaW4vcXVhbGl0eS9saXN0L2xpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDSjtBRENBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURIQTtFQUlRLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNFUjtBRFJBO0VBUVksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0daO0FEckJBO0VBcUJZLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0daO0FEbENBO0VBa0NZLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUNHWjtBRENBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREhBO0VBSVEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUNFUjtBRFhBO0VBV1ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNHWjtBRGpCQTtFQWlCWSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNHWjtBRHhCQTtFQXdCWSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0daO0FEOUJBO0VBOEJZLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDR1o7QURFQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNBSjtBREhBO0VBS1EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ1I7QURUQTtFQVVZLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFWjtBRGRBO0VBY2dCLFdBQUE7RUFDQSxjQUFBO0FDR2hCO0FEbEJBO0VBbUJZLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDRVo7QUR2QkE7RUF3QlksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDRVo7QUQ3QkE7RUE2QmdCLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHaEI7QURyQ0E7RUFzQ1ksa0JBQUE7QUNFWjtBRHhDQTtFQXdDZ0IsZUFBQTtBQ0doQjtBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0FKO0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQUo7QURGQTtFQUlRLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNDUjtBRFBBO0VBUVksVUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNFWiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3F1YWxpdHkvbGlzdC9saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGF7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDQwcHggYXV0byAwIGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgbWluLWhlaWdodDogNTAlO1xufVxuLnF1YWxpdHlfYmxvY2t7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAucXVhbGl0eV90aXRsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICAgICAgLnF1YWxpdHlfdGl0bGVSZWR7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRjIzMjM7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIHotaW5kZXg6MTA7XG4gICAgICAgIH1cbiAgICAgICAgLnF1YWxpdHlfdGl0bGVPcHRpb257XG4gICAgICAgICAgICBtYXJnaW46M3B4IDA7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgICAgICAgICAgei1pbmRleDoxMDtcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5xdWFsaXR5X3RpdGxlT3B0aW9uT0t7XG4gICAgICAgICAgICBtYXJnaW46MCAzcHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgICAgICAgICAgei1pbmRleDoxMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQ0YyMzIzO1xuICAgICAgICB9XG4gICAgfVxufVxuLnF1ZXJ5QnV0dG9ue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogOCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRjIzMjM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMCAyMHB4IDVweDtcbn1cbi5lcXVpcG1lbnREYXRhe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAuZGl2aXNpb257XG4gICAgICAgIHBhZGRpbmctdG9wOjE1cHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzowcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgIC5pY29ue1xuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxOTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHdpZHRoOjE4NHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XG4gICAgICAgICAgICBjb2xvcjpyZ2JhKDQ4LDQ4LDQ4LDEpO1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHdpZHRoOjE4NHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgICAgICAgICBjb2xvcjpyZ2JhKDEyOCwxMjgsMTI4LDAuOCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbXBhbnl7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHdpZHRoOjE4NHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgICAgICAgICBjb2xvcjpyZ2JhKDEyOCwxMjgsMTI4LDAuOCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5vdGhlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIC5vdGhlcl9kYXRhe1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZy1ib3R0b206MzBweCA7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgLmZyaWVuZExpbmt7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICAgICAgLmZyaWVuZExpbmtCb3h7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhlbmd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0FDQUNBO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAubG9nb3tcbiAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xuICAgICAgICAgICAgLnNtYWxsLWZvbnR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC42NSwwLjY1KTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOjEycHg7XG4gICAgICAgICAgICAgICAgbGVmdDotNTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAueW91e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5jaXJjdWxhcntcbiAgICB3aWR0aDo0cHg7XG4gICAgaGVpZ2h0OjRweDtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMTk3LDE5NywxOTcsMSk7XG4gICAgYm9yZGVyLXJhZGl1czoycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMjBweCAxMHB4O1xufVxuLmRhdGV7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OjQwcHg7XG4gICAgY29sb3I6cmdiYSgyMDIsMjAyLDIwMiwxKTtcbiAgICBmb250LXdlaWdodDo0MDA7XG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG59XG4ubGFzdENvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAubGluZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjQxLDI0MSwyNDMsMSk7XG4gICAgICAgIC5saW5lRGF0YXtcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmRhdGEge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDQwcHggYXV0byAwIGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBtaW4taGVpZ2h0OiA1MCU7XG59XG4ucXVhbGl0eV9ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUgLnF1YWxpdHlfdGl0bGVSZWQge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGMjMyMztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHotaW5kZXg6IDEwO1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUgLnF1YWxpdHlfdGl0bGVPcHRpb24ge1xuICBtYXJnaW46IDNweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB6LWluZGV4OiAxMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUgLnF1YWxpdHlfdGl0bGVPcHRpb25PSyB7XG4gIG1hcmdpbjogMCAzcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHotaW5kZXg6IDEwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0NGMjMyMztcbn1cbi5xdWVyeUJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDglO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRjIzMjM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDVweDtcbn1cbi5lcXVpcG1lbnREYXRhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZXF1aXBtZW50RGF0YSAuZGl2aXNpb24ge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uZXF1aXBtZW50RGF0YSAuZGl2aXNpb24gLmljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE5MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XG59XG4uZXF1aXBtZW50RGF0YSAuZGl2aXNpb24gLm5hbWUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE4NHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzAzMDMwO1xufVxuLmVxdWlwbWVudERhdGEgLmRpdmlzaW9uIC5udW1iZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE4NHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XG59XG4uZXF1aXBtZW50RGF0YSAuZGl2aXNpb24gLmNvbXBhbnkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE4NHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XG59XG4ub3RoZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgYm90dG9tOiAwcHg7XG59XG4ub3RoZXIgLm90aGVyX2RhdGEge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDMwcHggO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5mcmllbmRMaW5rIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNDBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5mcmllbmRMaW5rIC5mcmllbmRMaW5rQm94IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5oZW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0FDQUNBO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5sb2dvIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwcHggYXV0byAxMHB4IGF1dG87XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLmxvZ28gLnNtYWxsLWZvbnQge1xuICB3aWR0aDogOTAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjY1LCAwLjY1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IC01MnB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC55b3Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLnlvdSBkaXYge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2lyY3VsYXIge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogI2M1YzVjNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweCAxMHB4O1xufVxuLmRhdGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjY2FjYWNhO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubGFzdENvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5sYXN0Q29udGVudCAubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYzO1xufVxuLmxhc3RDb250ZW50IC5saW5lIC5saW5lRGF0YSB7XG4gIHdpZHRoOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin/quality/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/quality/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_restServices_front_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/restServices/front.service */ "./src/app/share/restServices/front.service.ts");




var ListComponent = /** @class */ (function () {
    function ListComponent(frontService, router) {
        this.frontService = frontService;
        this.router = router;
        this.pageIndex = 1; // 当前页数
        this.total = 1; // 数据总数
        this.pageSize = 10; // 每页条数
        this.supplierID = '';
        this.materials = '';
        this.supplier = [{
                id: '',
                name: ''
            }];
        this.status = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getList();
        this.getAllByQuery();
    };
    ListComponent.prototype.getList = function () {
        var _this = this;
        this.frontService.getQualityDealByQuery({
            params: {
                pageSize: this.pageSize,
                pageNumber: this.pageIndex,
                materials: this.materials,
                supplierId: this.supplierID,
                status: this.status
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.total = response.data.totalCount;
                _this.data = response.data.pageData;
            }
        });
    };
    ListComponent.prototype.getAllByQuery = function () {
        var _this = this;
        this.frontService.getAllByQuery({
            params: {
                pageSize: 999,
                pageNumber: 1
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                _this.supplier = response.data.pageData;
            }
        });
    };
    ListComponent.prototype.jump = function (i, id) {
        this.router.navigate(['/' + i + '/' + id]);
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/quality/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.less */ "./src/app/admin/quality/list/list.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_share_restServices_front_service__WEBPACK_IMPORTED_MODULE_3__["FrontService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/admin/quality/listSee/listSee.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/quality/listSee/listSee.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data\">\n        <div class=\"quality_block\">\n            <div class=\"quality_title\">\n                <div class=\"quality_titleRed\">\n                    质量专栏\n                </div>\n                <div class=\"crumbs\">\n                    <span>通知公告</span>>\n                    <span>公告详情</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"head\">\n            <div class=\"name\">处理进度</div>\n        </div>\n        <div class=\"dividing\"></div>\n        <div class=\"middle\">\n            <div nz-row>\n                <div nz-col nzSpan=\"3\" class=\"emmm\">供应商:</div>\n                <div nz-col nzSpan=\"21\" class=\"ennn\">{{data.supplierName}}</div>\n                <div nz-col nzSpan=\"3\" class=\"emmm\">涉及物料:</div>\n                <div nz-col nzSpan=\"21\" class=\"ennn\">{{data.materials}}</div>\n                <div nz-col nzSpan=\"3\" class=\"emmm\">开始处理时间:</div>\n                <div nz-col nzSpan=\"21\" class=\"ennn\">{{data.dealStartTime}}</div>\n                <div nz-col nzSpan=\"3\" class=\"emmm\">结束处理时间:</div>\n                <div nz-col nzSpan=\"21\" class=\"ennn\">{{data.dealEndTime}}</div>\n            </div>\n        </div>\n        <div class=\"dividing\"></div>\n        <div class=\"remarks\">\n            <div class=\"zhuyao\">\n                事件描述\n            </div>\n            <div class=\"jutizhuyao\">\n                <div class=\"jutidejuti\">\n                    {{data.remark}}\n                </div>\n            </div>\n        </div>\n        <div class=\"dividing\"></div>\n        <div class=\"remarks\">\n            <div class=\"zhuyao\">\n                附件下载\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/admin/quality/listSee/listSee.component.less":
/*!**************************************************************!*\
  !*** ./src/app/admin/quality/listSee/listSee.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data {\n  width: 60%;\n  margin: 40px auto 0 auto;\n  padding-bottom: 40px;\n  min-height: 50%;\n}\n.quality_block {\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 40px;\n}\n.quality_block .quality_title {\n  width: 100%;\n  height: 40px;\n  background-color: #F8F8F8;\n}\n.quality_block .quality_title .crumbs {\n  line-height: 40px;\n  margin-left: 120px;\n  color: #808080;\n  font-size: 12px;\n}\n.quality_block .quality_title .quality_titleRed {\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  background-color: #CF2323;\n  color: white;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  font-weight: 400;\n  z-index: 10;\n}\n.head {\n  width: 100%;\n}\n.head .name {\n  font-size: 22px;\n  font-weight: 600;\n  color: #303030;\n  margin-bottom: 20px;\n}\n.head .otherData {\n  font-size: 12px;\n  color: #808080;\n  margin: 10px 0;\n}\n.dividing {\n  width: 100%;\n  border-bottom: 1px solid #cacaca;\n  margin: 30px 0;\n}\n.middle {\n  width: 100%;\n}\n.middle .emmm {\n  font-size: 14px;\n  color: #808080;\n  margin: 10px 0;\n}\n.middle .ennn {\n  font-size: 16px;\n  color: #303030;\n  margin: 10px 0;\n}\n.remarks .zhuyao {\n  font-size: 18px;\n  font-weight: 600;\n  color: #303030;\n  margin-bottom: 20px;\n}\n.remarks .jutizhuyao {\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  color: #303030;\n  margin-bottom: 30px;\n}\n.remarks .jutizhuyao .jutidejuti {\n  width: 100%;\n  font-size: 12px;\n  color: #808080;\n  margin: 10px 0;\n}\n.other {\n  width: 100%;\n  background-color: #F8F8F8;\n  bottom: 0px;\n}\n.other .other_data {\n  width: 60%;\n  margin: 0 auto;\n  padding-bottom: 30px ;\n  overflow: hidden;\n}\n.other .other_data .friendLink {\n  width: 100%;\n  margin: 40px 0;\n  overflow: hidden;\n}\n.other .other_data .friendLink .friendLinkBox {\n  float: left;\n  margin: 0 20px;\n}\n.other .other_data .heng {\n  width: 100%;\n  border-top: 1px solid #CACACA;\n  margin-bottom: 30px;\n}\n.other .other_data .logo {\n  width: 450px;\n  height: 60px;\n  position: relative;\n  margin: 0px auto 10px auto;\n}\n.other .other_data .logo .small-font {\n  width: 900px;\n  font-size: 12px;\n  -webkit-transform: scale(0.65, 0.65);\n          transform: scale(0.65, 0.65);\n  position: absolute;\n  bottom: 12px;\n  left: -52px;\n}\n.other .other_data .you {\n  text-align: center;\n}\n.other .other_data .you div {\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2VtL0RvY3VtZW50cy8wMS13b3JrZm9sZGVyLzAzX3Fza2ovMDQteGljaGFuZ3dlaXhpbmcvc3JjL2FwcC9hZG1pbi9xdWFsaXR5L2xpc3RTZWUvbGlzdFNlZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYWRtaW4vcXVhbGl0eS9saXN0U2VlL2xpc3RTZWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDSjtBRENBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREpBO0VBS1EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0VSO0FEVEE7RUFTWSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNHWjtBRGZBO0VBZVksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0daO0FEQ0E7RUFDSSxXQUFBO0FDQ0o7QURGQTtFQUdRLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0VSO0FEUkE7RUFTUSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNFUjtBRENBO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQ0E7RUFDSSxXQUFBO0FDQ0o7QURGQTtFQUdRLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEUEE7RUFRUSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNFUjtBRENBO0VBRVEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQVI7QURMQTtFQVFRLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRFpBO0VBY1ksV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NaO0FESUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDRko7QUREQTtFQUtRLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0RSO0FEUEE7RUFVWSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQVo7QURaQTtFQWNnQixXQUFBO0VBQ0EsY0FBQTtBQ0NoQjtBRGhCQTtFQW1CWSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0FaO0FEckJBO0VBd0JZLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ0FaO0FEM0JBO0VBNkJnQixZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ2hCO0FEbkNBO0VBc0NZLGtCQUFBO0FDQVo7QUR0Q0E7RUF3Q2dCLGVBQUE7QUNDaEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9xdWFsaXR5L2xpc3RTZWUvbGlzdFNlZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhe1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gMCBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwJTtcbn1cbi5xdWFsaXR5X2Jsb2Nre1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAucXVhbGl0eV90aXRsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICAgICAgLmNydW1ic3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnF1YWxpdHlfdGl0bGVSZWR7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRjIzMjM7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIHotaW5kZXg6MTA7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaGVhZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAubmFtZXtcbiAgICAgICAgZm9udC1zaXplOjIycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICAgICAgY29sb3I6cmdiYSg0OCw0OCw0OCwxKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLm90aGVyRGF0YXtcbiAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgIGNvbG9yOnJnYmEoMTI4LDEyOCwxMjgsMSk7XG4gICAgICAgIG1hcmdpbjoxMHB4IDA7XG4gICAgfVxufVxuLmRpdmlkaW5ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMjAyLDIwMiwyMDIsMSk7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG59XG4ubWlkZGxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5lbW1te1xuICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgY29sb3I6cmdiYSgxMjgsMTI4LDEyOCwxKTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgfVxuICAgIC5lbm5ue1xuICAgICAgICBmb250LXNpemU6MTZweDtcbiAgICAgICAgY29sb3I6cmdiYSg0OCw0OCw0OCwxKTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgfVxufVxuLnJlbWFya3N7XG4gICAgLnpodXlhb3tcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICAgICAgY29sb3I6cmdiYSg0OCw0OCw0OCwxKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLmp1dGl6aHV5YW97XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6MThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgICBjb2xvcjpyZ2JhKDQ4LDQ4LDQ4LDEpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAuanV0aWRlanV0aXtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMTI4LDEyOCwxMjgsMSk7XG4gICAgICAgICAgICBtYXJnaW46MTBweCAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ub3RoZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICBib3R0b206IDBweDtcbiAgICAub3RoZXJfZGF0YXtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjMwcHggO1xuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgIC5mcmllbmRMaW5re1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMDtcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgIC5mcmllbmRMaW5rQm94e1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5oZW5ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NBQ0FDQTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ297XG4gICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDEwcHggYXV0bztcbiAgICAgICAgICAgIC5zbWFsbC1mb250e1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuNjUsMC42NSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbToxMnB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6LTUycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnlvdXtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuZGF0YSB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogNDBweCBhdXRvIDAgYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbn1cbi5xdWFsaXR5X2Jsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucXVhbGl0eV9ibG9jayAucXVhbGl0eV90aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG59XG4ucXVhbGl0eV9ibG9jayAucXVhbGl0eV90aXRsZSAuY3J1bWJzIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5xdWFsaXR5X3RpdGxlIC5xdWFsaXR5X3RpdGxlUmVkIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRjIzMjM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB6LWluZGV4OiAxMDtcbn1cbi5oZWFkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaGVhZCAub3RoZXJEYXRhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgwODA4MDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uZGl2aWRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWNhY2E7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuLm1pZGRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1pZGRsZSAuZW1tbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLm1pZGRsZSAuZW5ubiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLnJlbWFya3MgLnpodXlhbyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucmVtYXJrcyAuanV0aXpodXlhbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnJlbWFya3MgLmp1dGl6aHV5YW8gLmp1dGlkZWp1dGkge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgwODA4MDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4ub3RoZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgYm90dG9tOiAwcHg7XG59XG4ub3RoZXIgLm90aGVyX2RhdGEge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDMwcHggO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5mcmllbmRMaW5rIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNDBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5mcmllbmRMaW5rIC5mcmllbmRMaW5rQm94IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5oZW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0FDQUNBO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5sb2dvIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwcHggYXV0byAxMHB4IGF1dG87XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLmxvZ28gLnNtYWxsLWZvbnQge1xuICB3aWR0aDogOTAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjY1LCAwLjY1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IC01MnB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC55b3Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ub3RoZXIgLm90aGVyX2RhdGEgLnlvdSBkaXYge1xuICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/quality/listSee/listSee.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/quality/listSee/listSee.component.ts ***!
  \************************************************************/
/*! exports provided: ListSeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSeeComponent", function() { return ListSeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_restServices_front_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/restServices/front.service */ "./src/app/share/restServices/front.service.ts");




var ListSeeComponent = /** @class */ (function () {
    function ListSeeComponent(route, frontService, router) {
        this.route = route;
        this.frontService = frontService;
        this.router = router;
        this.id = 0;
        this.data = {
            name: '',
            departName: '',
            occurrenceTime: '',
            eventLevelName: '',
            supplierName: '',
            materials: '',
            remark: '',
            dealStartTime: '',
            dealEndTime: '',
        };
    }
    ListSeeComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getByID();
    };
    ListSeeComponent.prototype.getByID = function () {
        var _this = this;
        this.frontService.getQualityDealById({
            params: {
                params2: this.id,
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                // this.total = response.data.totalCount;
                _this.data = response.data;
            }
        });
    };
    ListSeeComponent.prototype.jump = function (i, id) {
        this.router.navigate(['/' + i + '/' + id]);
    };
    ListSeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listsee',
            template: __webpack_require__(/*! ./listSee.component.html */ "./src/app/admin/quality/listSee/listSee.component.html"),
            styles: [__webpack_require__(/*! ./listSee.component.less */ "./src/app/admin/quality/listSee/listSee.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _share_restServices_front_service__WEBPACK_IMPORTED_MODULE_3__["FrontService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListSeeComponent);
    return ListSeeComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/admin/quality/index/index.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/event.component */ "./src/app/admin/quality/event/event.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/admin/quality/list/list.component.ts");
/* harmony import */ var _see_see_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./see/see.component */ "./src/app/admin/quality/see/see.component.ts");
/* harmony import */ var _eventSee_eventSee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eventSee/eventSee.component */ "./src/app/admin/quality/eventSee/eventSee.component.ts");
/* harmony import */ var _listSee_listSee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listSee/listSee.component */ "./src/app/admin/quality/listSee/listSee.component.ts");










var routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
        data: {
            name: '质量专栏',
        }
    },
    {
        path: 'event',
        component: _event_event_component__WEBPACK_IMPORTED_MODULE_5__["EventComponent"],
        data: {
            name: '质量专栏',
        }
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
        data: {
            name: '质量专栏',
        }
    },
    {
        path: 'see/:id',
        component: _see_see_component__WEBPACK_IMPORTED_MODULE_7__["SeeComponent"],
        data: {
            name: '质量专栏',
        }
    },
    {
        path: 'event/see/:id',
        component: _eventSee_eventSee_component__WEBPACK_IMPORTED_MODULE_8__["EventSeeComponent"],
        data: {
            name: '质量专栏',
        }
    },
    {
        path: 'list/see/:id',
        component: _listSee_listSee_component__WEBPACK_IMPORTED_MODULE_9__["ListSeeComponent"],
        data: {
            name: '质量专栏',
        }
    },
];
var QualityModule = /** @class */ (function () {
    function QualityModule() {
    }
    QualityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"], _see_see_component__WEBPACK_IMPORTED_MODULE_7__["SeeComponent"], _event_event_component__WEBPACK_IMPORTED_MODULE_5__["EventComponent"], _eventSee_eventSee_component__WEBPACK_IMPORTED_MODULE_8__["EventSeeComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _listSee_listSee_component__WEBPACK_IMPORTED_MODULE_9__["ListSeeComponent"]],
            providers: [],
        })
    ], QualityModule);
    return QualityModule;
}());



/***/ }),

/***/ "./src/app/admin/quality/see/see.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/quality/see/see.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data\">\n    <div class=\"quality_block\">\n        <div class=\"quality_title\">\n            <div class=\"quality_titleRed\">\n                质量专栏\n            </div>\n            <div class=\"crumbs\">\n                <span style=\"cursor: pointer;\" (click)=\"jump('quality','')\">通知公告</span>>\n                <span>公告详情</span>\n            </div>\n        </div>\n        <div class=\"dataTitle\">{{data.title}}</div>\n        <div class=\"divid\">\n            <div class=\"dividWord\" style=\"float: left;\">{{data.createUser}}</div>\n            <div class=\"dividWord\" style=\"float: right;margin: 0 10px;\">阅读量：{{data.readCount}}</div>\n            <div class=\"dividWord\" style=\"float: right;margin: 0 10px;\">发布时间：{{data.createTime}}</div>\n        </div>\n        <div [innerHTML]='content' class=\"content\"></div>\n        <div style=\"width: 100%;border-bottom: 1px solid #CACACA;margin-top: 40px;\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/quality/see/see.component.less":
/*!******************************************************!*\
  !*** ./src/app/admin/quality/see/see.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data {\n  width: 60%;\n  margin: 40px auto 0 auto;\n  padding-bottom: 40px;\n  min-height: 50%;\n}\n.quality_block {\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 40px;\n}\n.quality_block .quality_title {\n  width: 100%;\n  height: 40px;\n  background-color: #F8F8F8;\n}\n.quality_block .quality_title .crumbs {\n  line-height: 40px;\n  margin-left: 120px;\n  color: #808080;\n  font-size: 12px;\n}\n.quality_block .quality_title .quality_titleRed {\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 40px;\n  background-color: #CF2323;\n  color: white;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  font-weight: 400;\n  z-index: 10;\n}\n.quality_block .dataTitle {\n  width: 100%;\n  font-size: 30px;\n  font-weight: 600;\n  color: #303030;\n  text-align: center;\n  margin: 40px 0;\n}\n.quality_block .divid {\n  width: 100%;\n  height: 25px;\n  border-bottom: 1px solid #808080;\n  color: #808080;\n  line-height: 25px;\n  font-size: 12px;\n  margin-bottom: 20px;\n}\n.quality_block .praiseSrc {\n  width: 60px;\n  height: 60px;\n  border: 1px solid #cf2323;\n  border-radius: 50%;\n  text-align: center;\n  margin: 70px auto ;\n}\n.quality_block .publish {\n  width: 100%;\n}\n.quality_block .publish .publishWord {\n  font-size: 30px;\n  font-weight: 600;\n  color: #303030;\n  margin: 40px 0 20px 0;\n}\n.quality_block .publish .publishText {\n  width: 100%;\n  height: 150px;\n  background-color: #f1f1f1;\n  resize: none;\n  padding: 20px;\n}\n.quality_block .publish .publishText-1::-webkit-scrollbar {\n  width: 5px;\n}\n.quality_block .publish .publishText-1::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.2);\n}\n.quality_block .publish .publishText-1::-webkit-scrollbar-track {\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.05);\n}\n.quality_block .publish .fabu {\n  width: 141px;\n  height: 32px;\n  line-height: 32px;\n  color: white;\n  background: #ff8474;\n  font-size: 18px;\n  text-align: center;\n  margin: 40px 0;\n}\n.quality_block .publish .comment {\n  width: 100%;\n}\n.quality_block .publish .comment .commentTitle {\n  width: 100%;\n  border-bottom: 1px solid #cacaca;\n  height: 40px;\n}\n.quality_block .publish .comment .commentTitle .commentOK {\n  float: left;\n  font-size: 20px;\n  color: #303030;\n  line-height: 40px;\n}\n.quality_block .publish .comment .commentTitle .commentNOOK {\n  float: left;\n  font-size: 12px;\n  color: #CF2323;\n  line-height: 40px;\n}\n.quality_block .publish .comment .commentTitle .commentYOU {\n  float: right;\n  font-size: 13px;\n  color: #303030;\n  line-height: 40px;\n}\n.quality_block .publish .comment .commentTitle .commentYOUOK {\n  float: right;\n  font-size: 14px;\n  color: #303030;\n  line-height: 40px;\n}\n.quality_block .publish .comment .commentData {\n  width: 100%;\n  margin: 15px 0;\n  overflow: hidden;\n}\n.quality_block .publish .comment .commentData .headPor {\n  float: left;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  text-align: center;\n  overflow: hidden;\n  background-color: red;\n  margin-right: 10px;\n}\n.quality_block .publish .comment .commentData .commentDataPar {\n  float: left;\n  width: 80%;\n  margin-left: 10px;\n}\n.quality_block .publish .comment .commentData .commentDataPar .peopleName {\n  width: 100%;\n  font-size: 15px;\n  color: #303030;\n  line-height: 20px;\n  height: 20px;\n  font-weight: bold;\n  margin: 15px 0;\n}\n.quality_block .publish .comment .commentData .commentDataPar .peopleTime {\n  line-height: 20px;\n  font-size: 12px;\n  color: #808080;\n  margin-left: 15px;\n}\n.quality_block .publish .comment .commentData .commentDataPar .neirong {\n  width: 100%;\n  font-size: 13px;\n  line-height: 20px;\n  color: #303030;\n  margin-bottom: 25px;\n}\n.quality_block .publish .comment .commentData .commentDataPar .butt {\n  width: 100%;\n}\n.quality_block .publish .comment .commentData .commentDataPar .butt div {\n  display: inline;\n}\n.quality_block .publish .comment .commentData .commentDataPar .butt img {\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n}\n.quality_block .publish .comment .commentData .commentDataPar .butt span {\n  margin-left: 5px;\n  margin-right: 50px;\n  line-height: 20px;\n  vertical-align: middle;\n}\n.quality_block .publish .xiala {\n  margin: 60px 0;\n  width: 100%;\n  text-align: center;\n}\n.other {\n  width: 100%;\n  background-color: #F8F8F8;\n  bottom: 0px;\n}\n.other .other_data {\n  width: 60%;\n  margin: 0 auto;\n  padding-bottom: 30px ;\n  overflow: hidden;\n}\n.other .other_data .friendLink {\n  width: 100%;\n  margin: 40px 0;\n  overflow: hidden;\n}\n.other .other_data .friendLink .friendLinkBox {\n  float: left;\n  margin: 0 20px;\n}\n.other .other_data .heng {\n  width: 100%;\n  border-top: 1px solid #CACACA;\n  margin-bottom: 30px;\n}\n.other .other_data .logo {\n  width: 450px;\n  height: 60px;\n  position: relative;\n  margin: 0px auto 10px auto;\n}\n.other .other_data .logo .small-font {\n  width: 900px;\n  font-size: 12px;\n  -webkit-transform: scale(0.65, 0.65);\n          transform: scale(0.65, 0.65);\n  position: absolute;\n  bottom: 12px;\n  left: -52px;\n}\n.other .other_data .you {\n  text-align: center;\n}\n.other .other_data .you div {\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2VtL0RvY3VtZW50cy8wMS13b3JrZm9sZGVyLzAzX3Fza2ovMDQteGljaGFuZ3dlaXhpbmcvc3JjL2FwcC9hZG1pbi9xdWFsaXR5L3NlZS9zZWUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FkbWluL3F1YWxpdHkvc2VlL3NlZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FESkE7RUFLUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRVI7QURUQTtFQVNZLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0daO0FEZkE7RUFlWSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDR1o7QUQ1QkE7RUE2QlEsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFUjtBRHBDQTtFQXFDUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRVI7QUQ3Q0E7RUE4Q1EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEckRBO0VBc0RRLFdBQUE7QUNFUjtBRHhEQTtFQXdEWSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNHWjtBRDlEQTtFQThEWSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNHWjtBRHJFQTtFQW9FMkMsVUFBQTtBQ0kzQztBRHhFQTtFQXFFaUQsa0JBQUE7RUFBbUIsOEJBQUE7QUNPcEU7QUQ1RUE7RUFzRWlELGtCQUFBO0VBQW1CLCtCQUFBO0FDVXBFO0FEaEZBO0VBd0VZLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDV1o7QUQxRkE7RUFrRlksV0FBQTtBQ1daO0FEN0ZBO0VBb0ZnQixXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDWWhCO0FEbEdBO0VBd0ZvQixXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2FwQjtBRHhHQTtFQThGb0IsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNhcEI7QUQ5R0E7RUFvR29CLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDYXBCO0FEcEhBO0VBMEdvQixZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2FwQjtBRDFIQTtFQWlIZ0IsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1loQjtBRC9IQTtFQXFIb0IsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ2FwQjtBRHpJQTtFQStIb0IsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ2FwQjtBRDlJQTtFQW1Jd0IsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDY3hCO0FEdkpBO0VBNEl3QixpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNjeEI7QUQ3SkE7RUFrSndCLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNjeEI7QURwS0E7RUF5SndCLFdBQUE7QUNjeEI7QUR2S0E7RUEySjRCLGVBQUE7QUNlNUI7QUQxS0E7RUE4SjRCLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNlNUI7QUQvS0E7RUFtSzRCLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDZTVCO0FEckxBO0VBNktZLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNXWjtBRE5BO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ1FKO0FEWEE7RUFLUSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNTUjtBRGpCQTtFQVVZLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNVWjtBRHRCQTtFQWNnQixXQUFBO0VBQ0EsY0FBQTtBQ1doQjtBRDFCQTtFQW1CWSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1VaO0FEL0JBO0VBd0JZLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ1VaO0FEckNBO0VBNkJnQixZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDV2hCO0FEN0NBO0VBc0NZLGtCQUFBO0FDVVo7QURoREE7RUF3Q2dCLGVBQUE7QUNXaEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9xdWFsaXR5L3NlZS9zZWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YXtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogNDBweCBhdXRvIDAgYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MCU7XG59XG4ucXVhbGl0eV9ibG9ja3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgLnF1YWxpdHlfdGl0bGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gICAgICAgIC5jcnVtYnN7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5xdWFsaXR5X3RpdGxlUmVke1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0YyMzIzO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgICAgICB6LWluZGV4OjEwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kYXRhVGl0bGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6MzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgICBjb2xvcjpyZ2JhKDQ4LDQ4LDQ4LDEpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgIH1cbiAgICAuZGl2aWR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwxMjgsMTI4LDEpO1xuICAgICAgICBjb2xvcjojODA4MDgwO1xuICAgICAgICBsaW5lLWhlaWdodDoyNXB4O1xuICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLnByYWlzZVNyY3tcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDIwNywzNSwzNSwxKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOjcwcHggYXV0byA7XG4gICAgfVxuICAgIC5wdWJsaXNoe1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnB1Ymxpc2hXb3Jke1xuICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XG4gICAgICAgICAgICBjb2xvcjpyZ2JhKDQ4LDQ4LDQ4LDEpO1xuICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5wdWJsaXNoVGV4dHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLDI0MSwyNDEsMSk7XG4gICAgICAgICAgICByZXNpemU6bm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnB1Ymxpc2hUZXh0LTE6Oi13ZWJraXQtc2Nyb2xsYmFyIHt3aWR0aDogNXB4O31cbiAgICAgICAgLnB1Ymxpc2hUZXh0LTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtib3JkZXItcmFkaXVzOiAzcHg7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7fVxuICAgICAgICAucHVibGlzaFRleHQtMTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge2JvcmRlci1yYWRpdXM6IDNweDtiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsMC4wNSk7fVxuICAgICAgICAuZmFidXtcbiAgICAgICAgICAgIHdpZHRoOjE0MXB4O1xuICAgICAgICAgICAgaGVpZ2h0OjMycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwxMzIsMTE2LDEpO1xuICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAuY29tbWVudHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLmNvbW1lbnRUaXRsZXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDIwMiwyMDIsMjAyLDEpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAuY29tbWVudE9Le1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMwMzAzMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb21tZW50Tk9PS3tcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNDRjIzMjM7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29tbWVudFlPVXtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzAzMDMwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5jb21tZW50WU9VT0t7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMwMzAzMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbW1lbnREYXRhe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgICAgICAuaGVhZFBvcntcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb21tZW50RGF0YVBhcntcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAucGVvcGxlTmFtZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoNDgsNDgsNDgsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBlb3BsZVRpbWV7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoyMHB4OyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDEyOCwxMjgsMTI4LDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm5laXJvbmd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoNDgsNDgsNDgsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idXR0e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC54aWFsYXtcbiAgICAgICAgICAgIG1hcmdpbjogNjBweCAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5vdGhlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIC5vdGhlcl9kYXRhe1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZy1ib3R0b206MzBweCA7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgLmZyaWVuZExpbmt7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICAgICAgLmZyaWVuZExpbmtCb3h7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhlbmd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0FDQUNBO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAubG9nb3tcbiAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xuICAgICAgICAgICAgLnNtYWxsLWZvbnR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC42NSwwLjY1KTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOjEycHg7XG4gICAgICAgICAgICAgICAgbGVmdDotNTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAueW91e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5kYXRhIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiA0MHB4IGF1dG8gMCBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgbWluLWhlaWdodDogNTAlO1xufVxuLnF1YWxpdHlfYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5xdWFsaXR5X3RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5xdWFsaXR5X3RpdGxlIC5jcnVtYnMge1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnF1YWxpdHlfYmxvY2sgLnF1YWxpdHlfdGl0bGUgLnF1YWxpdHlfdGl0bGVSZWQge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGMjMyMztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHotaW5kZXg6IDEwO1xufVxuLnF1YWxpdHlfYmxvY2sgLmRhdGFUaXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuLnF1YWxpdHlfYmxvY2sgLmRpdmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnF1YWxpdHlfYmxvY2sgLnByYWlzZVNyYyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZjIzMjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDcwcHggYXV0byA7XG59XG4ucXVhbGl0eV9ibG9jayAucHVibGlzaCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnF1YWxpdHlfYmxvY2sgLnB1Ymxpc2ggLnB1Ymxpc2hXb3JkIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMwMzAzMDtcbiAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xufVxuLnF1YWxpdHlfYmxvY2sgLnB1Ymxpc2ggLnB1Ymxpc2hUZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5wdWJsaXNoIC5wdWJsaXNoVGV4dC0xOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG4ucXVhbGl0eV9ibG9jayAucHVibGlzaCAucHVibGlzaFRleHQtMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5wdWJsaXNoIC5wdWJsaXNoVGV4dC0xOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5wdWJsaXNoIC5mYWJ1IHtcbiAgd2lkdGg6IDE0MXB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmZjg0NzQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDQwcHggMDtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5wdWJsaXNoIC5jb21tZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucXVhbGl0eV9ibG9jayAucHVibGlzaCAuY29tbWVudCAuY29tbWVudFRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2FjYWNhO1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ucXVhbGl0eV9ibG9jayAucHVibGlzaCAuY29tbWVudCAuY29tbWVudFRpdGxlIC5jb21tZW50T0sge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzMwMzAzMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG4ucXVhbGl0eV9ibG9jayAucHVibGlzaCAuY29tbWVudCAuY29tbWVudFRpdGxlIC5jb21tZW50Tk9PSyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjQ0YyMzIzO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5wdWJsaXNoIC5jb21tZW50IC5jb21tZW50VGl0bGUgLmNvbW1lbnRZT1Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuLnF1YWxpdHlfYmxvY2sgLnB1Ymxpc2ggLmNvbW1lbnQgLmNvbW1lbnRUaXRsZSAuY29tbWVudFlPVU9LIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5wdWJsaXNoIC5jb21tZW50IC5jb21tZW50RGF0YSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE1cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5wdWJsaXNoIC5jb21tZW50IC5jb21tZW50RGF0YSAuaGVhZFBvciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucXVhbGl0eV9ibG9jayAucHVibGlzaCAuY29tbWVudCAuY29tbWVudERhdGEgLmNvbW1lbnREYXRhUGFyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnF1YWxpdHlfYmxvY2sgLnB1Ymxpc2ggLmNvbW1lbnQgLmNvbW1lbnREYXRhIC5jb21tZW50RGF0YVBhciAucGVvcGxlTmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4ucXVhbGl0eV9ibG9jayAucHVibGlzaCAuY29tbWVudCAuY29tbWVudERhdGEgLmNvbW1lbnREYXRhUGFyIC5wZW9wbGVUaW1lIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLnF1YWxpdHlfYmxvY2sgLnB1Ymxpc2ggLmNvbW1lbnQgLmNvbW1lbnREYXRhIC5jb21tZW50RGF0YVBhciAubmVpcm9uZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzMwMzAzMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5wdWJsaXNoIC5jb21tZW50IC5jb21tZW50RGF0YSAuY29tbWVudERhdGFQYXIgLmJ1dHQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5wdWJsaXNoIC5jb21tZW50IC5jb21tZW50RGF0YSAuY29tbWVudERhdGFQYXIgLmJ1dHQgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLnF1YWxpdHlfYmxvY2sgLnB1Ymxpc2ggLmNvbW1lbnQgLmNvbW1lbnREYXRhIC5jb21tZW50RGF0YVBhciAuYnV0dCBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnF1YWxpdHlfYmxvY2sgLnB1Ymxpc2ggLmNvbW1lbnQgLmNvbW1lbnREYXRhIC5jb21tZW50RGF0YVBhciAuYnV0dCBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5xdWFsaXR5X2Jsb2NrIC5wdWJsaXNoIC54aWFsYSB7XG4gIG1hcmdpbjogNjBweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm90aGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gIGJvdHRvbTogMHB4O1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4IDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vdGhlciAub3RoZXJfZGF0YSAuZnJpZW5kTGluayB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDQwcHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vdGhlciAub3RoZXJfZGF0YSAuZnJpZW5kTGluayAuZnJpZW5kTGlua0JveCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi5vdGhlciAub3RoZXJfZGF0YSAuaGVuZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0NBQ0FDQTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5vdGhlciAub3RoZXJfZGF0YSAubG9nbyB7XG4gIHdpZHRoOiA0NTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC5sb2dvIC5zbWFsbC1mb250IHtcbiAgd2lkdGg6IDkwMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42NSwgMC42NSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMnB4O1xuICBsZWZ0OiAtNTJweDtcbn1cbi5vdGhlciAub3RoZXJfZGF0YSAueW91IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm90aGVyIC5vdGhlcl9kYXRhIC55b3UgZGl2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin/quality/see/see.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/quality/see/see.component.ts ***!
  \****************************************************/
/*! exports provided: SeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeComponent", function() { return SeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_restServices_front_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/restServices/front.service */ "./src/app/share/restServices/front.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var SeeComponent = /** @class */ (function () {
    function SeeComponent(route, frontService, sanitizer, router) {
        this.route = route;
        this.frontService = frontService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.id = 0;
        this.data = {
            title: '',
            readCount: '',
            createTime: '',
            createUser: '',
        };
    }
    SeeComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getByID();
    };
    SeeComponent.prototype.getByID = function () {
        var _this = this;
        this.frontService.getQualityNoticeById({
            params: {
                params2: this.id,
            },
            data: {}
        })
            .subscribe(function (response) {
            if (response.errorCode === 0) {
                // this.total = response.data.totalCount;
                _this.data = response.data;
                _this.content = _this.sanitizer.bypassSecurityTrustHtml(response.data.content);
            }
        });
    };
    SeeComponent.prototype.jump = function (i, id) {
        this.router.navigate(['/' + i + '/' + id]);
    };
    SeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-see',
            template: __webpack_require__(/*! ./see.component.html */ "./src/app/admin/quality/see/see.component.html"),
            styles: [__webpack_require__(/*! ./see.component.less */ "./src/app/admin/quality/see/see.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _share_restServices_front_service__WEBPACK_IMPORTED_MODULE_3__["FrontService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SeeComponent);
    return SeeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=quality-quality-module.js.map