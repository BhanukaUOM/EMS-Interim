(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _services_afterLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/afterLogin */ "./src/app/services/afterLogin.ts");
/* harmony import */ var _services_beforeLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/beforeLogin */ "./src/app/services/beforeLogin.ts");
/* harmony import */ var _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/password/request-reset/request-reset.component */ "./src/app/components/password/request-reset/request-reset.component.ts");
/* harmony import */ var _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/password/response-reset/response-reset.component */ "./src/app/components/password/response-reset/response-reset.component.ts");
/* harmony import */ var _services_is_company_admin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/is-company-admin.service */ "./src/app/services/is-company-admin.service.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        canActivate: [_services_beforeLogin__WEBPACK_IMPORTED_MODULE_7__["BeforeLoginService"]]
    },
    {
        path: 'reset-password',
        component: _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_8__["RequestResetComponent"],
        canActivate: [_services_beforeLogin__WEBPACK_IMPORTED_MODULE_7__["BeforeLoginService"]]
    },
    {
        path: 'reset-password-submit',
        component: _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_9__["ResponseResetComponent"],
        canActivate: [_services_beforeLogin__WEBPACK_IMPORTED_MODULE_7__["BeforeLoginService"]]
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
        canActivate: [_services_afterLogin__WEBPACK_IMPORTED_MODULE_6__["AfterLoginService"]]
    },
    {
        path: 'users',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        canActivate: [_services_afterLogin__WEBPACK_IMPORTED_MODULE_6__["AfterLoginService"]]
    },
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'dashboard',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        canActivate: [_services_is_company_admin_service__WEBPACK_IMPORTED_MODULE_10__["IsCompanyAdminService"]]
    },
    {
        path: 'notice',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        canActivate: [_services_afterLogin__WEBPACK_IMPORTED_MODULE_6__["AfterLoginService"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<ng-snotify></ng-snotify>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'EMS';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/password/request-reset/request-reset.component */ "./src/app/components/password/request-reset/request-reset.component.ts");
/* harmony import */ var _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/password/response-reset/response-reset.component */ "./src/app/components/password/response-reset/response-reset.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_afterLogin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/afterLogin */ "./src/app/services/afterLogin.ts");
/* harmony import */ var _services_beforeLogin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/beforeLogin */ "./src/app/services/beforeLogin.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_12__["RequestResetComponent"],
                _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_13__["ResponseResetComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"]
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"],
                _services_token_service__WEBPACK_IMPORTED_MODULE_17__["TokenService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"],
                _services_afterLogin__WEBPACK_IMPORTED_MODULE_20__["AfterLoginService"],
                _services_beforeLogin__WEBPACK_IMPORTED_MODULE_21__["BeforeLoginService"],
                { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_4__["ToastDefaults"] },
                ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-right\" style=\"margin-top: 30px;\">\n  <a class=\"text-white btn btn-info\" (click)='add()' *ngIf=\"staff\">Add New Notice</a> \n</div>\n<br>\n<hr>\n<br>\n\n<div class=\"container\"  *ngFor=\"let n of notice; let count = index;\">\n  <div class=\"\">\n      <div class=\"card\" style=\"border-radius: 1rem; box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{ n.title }}</h5>\n          <p class=\"card-text\">{{ n.notice }}</p>\n        </div>\n        <div class=\"card-footer text-center\">\n          <small class=\"text-muted\">{{ n.updated_at }}</small><br>\n          <div *ngIf=\"staff\">\n            <a href=\"javascript:void(0)\" class=\"item\"  (click)='pause( n.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Pause\" style=\"padding-right: 10px;\" *ngIf=\"n.active\">\n                <i class=\"fa fa-pause\"></i>\n            </a> \n            <a href=\"javascript:void(0)\" class=\"item\"  (click)='pause( n.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Continue\" style=\"padding-right: 10px;\" *ngIf=\"!n.active\">\n                <i class=\"fa fa-play\"></i>\n            </a>   \n            <a href=\"javascript:void(0)\" class=\"item\"  (click)='edit( n.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit\" style=\"padding-right: 10px;\">\n                <i class=\"fa fa-edit\"></i>\n            </a> \n            <a href=\"javascript:void(0)\" class=\"item\"  (click)='delete( n.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete\" style=\"padding-right: 10px;\">\n                <i class=\"fa fa-trash\"></i>\n            </a> \n          </div>\n        </div>\n      </div>\n    </div>\n    <br><br>\n  </div>\n\n<!-- The Modal -->\n<div id=\"modal\" class=\"modal\" style=\"background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);\">\n\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\">Edit Notice</h5>\n            <button type=\"button\" class=\"close\" (click)='close()'>\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n              <div class=\"form-group\">\n                  <label for=\"title\">Title</label>\n                  <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Enter title\"  required [(ngModel)]=\"ed.title\"/>\n              </div>\n              \n              <div class=\"form-group\">\n                  <label for=\"notice\">Notice</label>\n                  <textarea class=\"form-control\" id=\"notice\" placeholder=\"Enter notice\"  required [(ngModel)]=\"ed.notice\" required rows=\"7\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"notice\">For</label>\n                    <select class=\"form-control\" name=\"role\" id=\"inputRole\" required [(ngModel)]=\"ed.role\">\n                        <option value=\"Student\">Student</option>\n                        <option value=\"Parent\">Parent</option>\n                        <option value=\"Both\">Both</option>\n                      </select>\n                </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)='editsub()'>Save changes</button>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)='close()'>Close</button>\n          </div>\n        </div>\n      </div>\n\n</div>\n\n<!-- The Modal -->\n<div id=\"modaladd\" class=\"modal\" style=\"background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);\">\n\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\">Add Notice</h5>\n            <button type=\"button\" class=\"close\" (click)='closeadd()'>\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            \n              <div class=\"form-group\">\n                  <label for=\"title\">Title</label>\n                  <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Enter title\"  required [(ngModel)]=\"eda.title\"/>\n              </div>\n              \n              <div class=\"form-group\">\n                  <label for=\"notice\">Notice</label>\n                  <textarea class=\"form-control\" id=\"notice\" placeholder=\"Enter notice\"  required [(ngModel)]=\"eda.notice\" rows=\"7\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"notice\">For</label>\n                    <select class=\"form-control\" name=\"role\" id=\"inputRole\" required [(ngModel)]=\"eda.role\">\n                        <option value=\"Student\">Student</option>\n                        <option value=\"Parent\">Parent</option>\n                        <option value=\"Both\">Both</option>\n                      </select>\n                </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)='addnot()'>Save changes</button>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)='closeadd()'>Close</button>\n          </div>\n        </div>\n      </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(token, http, router, api, notify) {
        this.token = token;
        this.http = http;
        this.router = router;
        this.api = api;
        this.notify = notify;
        this.form = {
            email: null,
            access_token: null
        };
        this.formid = {
            email: null,
            access_token: null,
            id: 0
        };
        this.notice = null;
        this.not = null;
        this.ed = {
            email: null,
            access_token: null,
            id: 0,
            title: null,
            notice: null,
            role: null
        };
        this.eda = {
            email: null,
            access_token: null,
            title: null,
            notice: null,
            role: null
        };
        this.user = null;
        this.role = null;
        this.staff = false;
        this.admin = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(this.token.getUser());
        this.role = this.user.role;
        this.form.email = this.user.email;
        this.form.access_token = this.token.get();
        this.formid.email = this.user.email;
        this.formid.access_token = this.token.get();
        this.ed.email = this.user.email;
        this.ed.access_token = this.token.get();
        this.eda.email = this.user.email;
        this.eda.access_token = this.token.get();
        if (this.role == 'CompanyAdmin')
            this.router.navigateByUrl("/users");
        if (this.role == "Student" || this.role == "Parent")
            this.staff = false;
        else
            this.staff = true;
        return this.api.post('notice/get', this.form).subscribe(function (data) { return _this.handler(data); }, function (error) { return _this.notify.error(error.error.error, { timeout: 0 }); });
    };
    DashboardComponent.prototype.handler = function (data) {
        this.notice = data;
    };
    DashboardComponent.prototype.notifi = function (data) {
        //console.log(data);
        this.notify.info(data.data, { timeout: 2000 });
        setTimeout(1000);
        this.ngOnInit();
    };
    DashboardComponent.prototype.pause = function (id) {
        var _this = this;
        this.formid.id = id;
        this.api.post('notice/pause', this.formid).subscribe(function (data) { return _this.notifi(data); }, function (error) { return _this.notify.error(error.error.error, { timeout: 0 }); });
    };
    DashboardComponent.prototype.noticebyid = function (data) {
        this.not = data[0];
        this.ed.title = this.not.title;
        this.ed.notice = this.not.notice;
        this.ed.role = this.not.role;
    };
    DashboardComponent.prototype.edit = function (id) {
        var _this = this;
        this.formid.id = id;
        this.api.post('notice/getbyid', this.formid).subscribe(function (data) { return _this.noticebyid(data); }, function (error) { return _this.notify.error(error.error.error, { timeout: 0 }); });
        var modal = document.getElementById('modal');
        modal.style.display = "block";
    };
    DashboardComponent.prototype.editsub = function () {
        var _this = this;
        this.close();
        this.ed.id = this.formid.id;
        //console.log(this.formid.id);
        this.api.post('notice/update', this.ed).subscribe(function (data) { return _this.notifi(data); }, function (error) { return _this.notify.error(error.error.error, { timeout: 0 }); });
    };
    DashboardComponent.prototype.close = function () {
        var modal = document.getElementById('modal');
        modal.style.display = "none";
    };
    DashboardComponent.prototype.closeadd = function () {
        var modal = document.getElementById('modaladd');
        modal.style.display = "none";
    };
    DashboardComponent.prototype.delete = function (id) {
        var _this = this;
        this.notify.confirm('Are you sure you want to detele this Notice?', 'Delete Notice', {
            timeout: 0,
            showProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            buttons: [
                { text: 'Yes', action: function () {
                        _this.formid.id = id;
                        _this.api.post('notice/delete', _this.formid).subscribe(function (data) { return _this.notifi(data); }, function (error) { return _this.notify.error(error.error.error, { timeout: 0 }); });
                    }, bold: false },
                { text: 'No' }
            ]
        });
        setTimeout(2000);
        this.ngOnInit();
    };
    DashboardComponent.prototype.add = function () {
        this.eda.title = null;
        this.eda.notice = null;
        this.eda.role = null;
        var modal = document.getElementById('modaladd');
        modal.style.display = "block";
    };
    DashboardComponent.prototype.addnot = function () {
        var _this = this;
        this.closeadd();
        //console.log(this.formid.id);
        this.api.post('notice/add', this.eda).subscribe(function (data) { return _this.notifi(data); }, function (error) { return _this.notify.error(error.error.error, { timeout: 0 }); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    max-width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"#fff\"\ntype=\"ball-scale-multiple\">\n<p style=\"font-size: 20px; color: white\">Loading...</p>></ngx-spinner>\n<img src=\"../../../assets/front.png\">\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(spinner) {
        this.spinner = spinner;
        this.name = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this.spinner.hide();
        }, 1000);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\nbody {\r\n  background: #9CECFB;\r\n  /* fallback for old browsers */\r\n  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.card-signin {\r\n  border: 2px solid #65C7F7;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n}\r\n\r\n.form-signin .btn {\r\n  font-size: 80%;\r\n  border-radius: 5rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group input {\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: 0.75rem 1.5rem;\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: 1.00rem;\r\n  padding-bottom: 0.25rem;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n  padding-top: 0.25rem;\r\n  padding-bottom: 0.25rem;\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n.btn-google {\r\n  color: white;\r\n  background-color: #ea4335;\r\n}\r\n\r\n.btn-facebook {\r\n  color: white;\r\n  background-color: #3b5998;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <div class=\"alert alert-danger\" [hidden]=\"!error\">\n              {{ error }}\n            </div>\n            <h5 class=\"card-title text-center\">Sign In</h5>\n            <form class=\"form-signin\" #loginForm=ngForm (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-label-group\">\n                <input type=\"email\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus [(ngModel)]=\"form.email\">\n                \n              </div>\n\n              <div class=\"form-label-group\">\n                <input type=\"password\" name=\"password\" id=\"inputPassword\" [(ngModel)]=\"form.password\" class=\"form-control\" placeholder=\"Password\" required>\n                \n              </div>\n\n              <div class=\"custom-control custom-checkbox mb-3\">\n                <input type=\"checkbox\" name=\"remember\" class=\"custom-control-input\" id=\"customCheck1\" [(ngModel)]=\"form.checkbox\">\n                <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n              </div>\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!loginForm.valid\">Sign in</button>\n            </form>\n            \n            <p style=\"text-align: right;\"><a [routerLink]=\"['/reset-password']\" routerLinkActive=\"router-link-active\" ><small>Fogot Password?</small></a></p>\n              <hr class=\"my-4\">\n              <button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-google mr-2\"></i> Sign in with Google</button>\n              <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign in with Facebook</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, token, router, auth, notify) {
        this.api = api;
        this.token = token;
        this.router = router;
        this.auth = auth;
        this.notify = notify;
        this.form = {
            email: null,
            password: null,
            checked: false
        };
        this.error = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        return this.api.post('login', this.form).subscribe(function (data) { return _this.tokenHandler(data); }, function (error) { return _this.notify.error(error.error.error, { timeout: 0 }); });
    };
    LoginComponent.prototype.tokenHandler = function (data) {
        this.token.set(data);
        this.auth.changeAuthStatus(true);
        if (JSON.parse(this.token.getUser()).role == "CompanyAdmin" || JSON.parse(this.token.getUser()).role == "SchoolAdmin")
            this.router.navigateByUrl('/users');
        else
            this.router.navigateByUrl('/notice');
        location.reload();
        this.notify.info("Login Succesfully", { timeout: 2000 });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_5__["SnotifyService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand text-white\" routerLink=\"\">EMS</a>\n    <div class=\"\">\n        <a class=\"text-white\" routerLink=\"login\" style=\"padding-right: 20px;\" *ngIf=\"!loggedIn\">Login</a> \n        <a class=\"text-white\" routerLink=\"users\" style=\"padding-right: 20px;\" *ngIf='role'>Users</a>\n        <a class=\"text-white\" routerLink=\"notice\" style=\"padding-right: 20px;\" *ngIf=\"notice\">Notice</a>\n        <a class=\"text-white\" href=\"javascript:void(0)\" (click)=\"logout($event)\" style=\"padding-right: 20px;\" *ngIf=\"loggedIn\">Logout</a>  \n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router, token, notify) {
        this.auth = auth;
        this.router = router;
        this.token = token;
        this.notify = notify;
        this.role = false;
        this.notice = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authStatus.subscribe(function (value) { return _this.loggedIn = value; });
        if (JSON.parse(this.token.getUser()) == null) {
            this.role = false;
            this.notice = false;
        }
        else {
            if (JSON.parse(this.token.getUser()).role == "CompanyAdmin" || JSON.parse(this.token.getUser()).role == "SchoolAdmin")
                this.role = true;
            else
                this.role = false;
            if (JSON.parse(this.token.getUser()).role != "CompanyAdmin")
                this.notice = true;
            else
                this.notice = false;
        }
        //console.log(this.loggedIn);
    };
    NavbarComponent.prototype.logout = function (Event) {
        if (Event === void 0) { Event = MouseEvent; }
        event.preventDefault;
        this.token.remove();
        this.auth.changeAuthStatus(false);
        this.router.navigateByUrl('/login');
        location.reload();
        this.notify.info("Logout Succesfully", { timeout: 2000 });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/password/request-reset/request-reset.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/password/request-reset/request-reset.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: 0.75rem;\r\n  }\r\n  \r\n  body {\r\n    background: #9CECFB;\r\n    /* fallback for old browsers */\r\n    /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  }\r\n  \r\n  .card-signin {\r\n    border: 2px solid #65C7F7;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .card-signin .card-body {\r\n    padding: 2rem;\r\n  }\r\n  \r\n  .form-signin {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n  }\r\n  \r\n  .form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .form-label-group input {\r\n    border-radius: 2rem;\r\n  }\r\n  \r\n  .form-label-group>input,\r\n  .form-label-group>label {\r\n    padding: 0.75rem 1.5rem;\r\n  }\r\n  \r\n  .form-label-group>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n  \r\n  .form-label-group input::-webkit-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown) {\r\n    padding-top: 1.00rem;\r\n    padding-bottom: 0.25rem;\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown)~label {\r\n    padding-top: 0.25rem;\r\n    padding-bottom: 0.25rem;\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n  \r\n  .btn-google {\r\n    color: white;\r\n    background-color: #ea4335;\r\n  }\r\n  \r\n  .btn-facebook {\r\n    color: white;\r\n    background-color: #3b5998;\r\n  }"

/***/ }),

/***/ "./src/app/components/password/request-reset/request-reset.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/password/request-reset/request-reset.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n          <div class=\"card card-signin my-5\">\n            <div class=\"card-body\">\n              <div class=\"alert alert-danger\" [hidden]=\"!error\">\n                {{ error }}\n              </div>\n              <h5 class=\"card-title text-center\">Reset Password</h5>\n              <form class=\"form-signin\" #passwordResetForm=ngForm (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-label-group\">\n                  <input type=\"email\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Enter Email address\" required autofocus [(ngModel)]=\"form.email\">\n                  <label for=\"inputEmail\">Email address</label>\n                </div>\n                <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!passwordResetForm.valid\">Reset Password</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/password/request-reset/request-reset.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/password/request-reset/request-reset.component.ts ***!
  \******************************************************************************/
/*! exports provided: RequestResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResetComponent", function() { return RequestResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestResetComponent = /** @class */ (function () {
    function RequestResetComponent(api, notify) {
        this.api = api;
        this.notify = notify;
        this.form = {
            email: null
        };
        this.error = null;
    }
    RequestResetComponent.prototype.ngOnInit = function () {
    };
    RequestResetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.notify.info('Wait...', { timeout: 5000 });
        return this.api.post('sendPasswordReset', this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.notify.error(error.error.error, { timeout: 0 }); });
    };
    RequestResetComponent.prototype.handleResponse = function (data) {
        this.notify.info(data.data, { timeout: 0 });
        this.form.email = null;
    };
    RequestResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-reset',
            template: __webpack_require__(/*! ./request-reset.component.html */ "./src/app/components/password/request-reset/request-reset.component.html"),
            styles: [__webpack_require__(/*! ./request-reset.component.css */ "./src/app/components/password/request-reset/request-reset.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]])
    ], RequestResetComponent);
    return RequestResetComponent;
}());



/***/ }),

/***/ "./src/app/components/password/response-reset/response-reset.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/password/response-reset/response-reset.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: 0.75rem;\r\n  }\r\n  \r\n  body {\r\n    background: #9CECFB;\r\n    /* fallback for old browsers */\r\n    /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  }\r\n  \r\n  .card-signin {\r\n    border: 2px solid #65C7F7;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .card-signin .card-body {\r\n    padding: 2rem;\r\n  }\r\n  \r\n  .form-signin {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n  }\r\n  \r\n  .form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .form-label-group input {\r\n    border-radius: 2rem;\r\n  }\r\n  \r\n  .form-label-group>input,\r\n  .form-label-group>label {\r\n    padding: 0.75rem 1.5rem;\r\n  }\r\n  \r\n  .form-label-group>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n  \r\n  .btn-google {\r\n    color: white;\r\n    background-color: #ea4335;\r\n  }\r\n  \r\n  .btn-facebook {\r\n    color: white;\r\n    background-color: #3b5998;\r\n  }"

/***/ }),

/***/ "./src/app/components/password/response-reset/response-reset.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/password/response-reset/response-reset.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">Reset Password</h5>\n            <form class=\"form-signin\" #ResetResponseForm=ngForm (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-label-group\">\n                <input type=\"email\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus [(ngModel)]=\"form.email\">\n              </div>\n\n              <div class=\"form-label-group\">\n                <input type=\"password\" name=\"password\" id=\"inputPassword\" [(ngModel)]=\"form.password\" class=\"form-control\" placeholder=\"Password\" required>\n              </div>\n\n              <div class=\"form-label-group\">\n                <input type=\"password\" name=\"password_confirmation\" id=\"inputPasswordConfirmation\" [(ngModel)]=\"form.password_confirmation\" class=\"form-control\" placeholder=\"Re Enter Password\" required>\n              </div>\n\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!ResetResponseForm.valid\">Change Password</button>\n            </form>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/password/response-reset/response-reset.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/password/response-reset/response-reset.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResponseResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseResetComponent", function() { return ResponseResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResponseResetComponent = /** @class */ (function () {
    function ResponseResetComponent(api, token, router, auth, notify, route) {
        var _this = this;
        this.api = api;
        this.token = token;
        this.router = router;
        this.auth = auth;
        this.notify = notify;
        this.route = route;
        this.form = {
            email: null,
            password: null,
            password_confirmation: null,
            resetToken: null
        };
        route.queryParams.subscribe(function (params) {
            _this.form.resetToken = params['token'];
        });
    }
    ResponseResetComponent.prototype.ngOnInit = function () {
    };
    ResponseResetComponent.prototype.onSubmit = function () {
        var _this = this;
        return this.api.post('responsePasswordReset', this.form).subscribe(function (data) { return _this.resetHandler(data); }, function (error) { return _this.handleerror(error); });
    };
    ResponseResetComponent.prototype.handleerror = function (error) {
        if (error.error.errors) {
            if (error.error.errors.email)
                this.notify.error(error.error.errors.email, { timeout: 0 });
            if (error.error.errors.password)
                this.notify.error(error.error.errors.password, { timeout: 0 });
        }
        if (error.error.error)
            this.notify.error(error.error.error, { timeout: 0 });
    };
    ResponseResetComponent.prototype.resetHandler = function (data) {
        this.notify.info(data.data, { timeout: 2000 });
        this.token.remove();
        this.router.navigateByUrl('/login');
    };
    ResponseResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-response-reset',
            template: __webpack_require__(/*! ./response-reset.component.html */ "./src/app/components/password/response-reset/response-reset.component.html"),
            styles: [__webpack_require__(/*! ./response-reset.component.css */ "./src/app/components/password/response-reset/response-reset.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_5__["SnotifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResponseResetComponent);
    return ResponseResetComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-right\" style=\"margin-top: 30px;\">\n    <a class=\"text-white btn btn-info\" routerLink=\"/signup\">Add New User</a> \n  </div>\n  <br>\n  <hr>\n  <br>\n  <div class=\"col-md-12\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n              <div class=\"table-responsive\">\n                  <table class=\"table table-striped table-bordered no-margin\">\n                      <thead>\n                          <tr>\n                              <th>Name</th>\n                              <th>Email</th>\n                              <th>Role</th>\n                              <th></th>\n                          </tr>\n                      </thead>\n                    <tr *ngFor=\"let user of users\">\n                        <td>{{ user.name }}</td>\n                        <td>{{ user.email }}</td>\n                        <td>{{ user.role }}</td>\n                        <td class=\"text-center\">\n                                <a href=\"javascript:void(0)\" class=\"item\"  (click)='delete( user.id )' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete\" style=\"padding-right: 10px;\">\n                                    <i class=\"fa fa-trash\"></i>\n                                </a> \n                        </td>\n                    </tr>\n                  </table>\n              </div>\n          </div>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(token, router, api, notify) {
        this.token = token;
        this.router = router;
        this.api = api;
        this.notify = notify;
        this.form = {
            email: null,
            access_token: null
        };
        this.formid = {
            id: 0,
            email: null,
            access_token: null
        };
        this.user = null;
        this.role = null;
        this.users = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(this.token.getUser());
        this.role = this.user.role;
        this.form.email = this.user.email;
        this.form.access_token = this.token.get();
        this.formid.email = this.user.email;
        this.formid.access_token = this.token.get();
        if (this.role != 'CompanyAdmin' && this.role != 'SchoolAdmin')
            this.router.navigateByUrl("/notice");
        return this.api.post('users/get', this.form).subscribe(function (data) { return _this.handler(data); }, function (error) { return _this.notify.error(error.error.error, { timeout: 0 }); });
    };
    ProfileComponent.prototype.handler = function (data) {
        this.users = data;
    };
    ProfileComponent.prototype.delete = function (id) {
        var _this = this;
        this.notify.confirm('Are you sure you want to detele this Notice?', 'Delete Notice', {
            timeout: 0,
            showProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            buttons: [
                { text: 'Yes', action: function () {
                        _this.formid.id = id;
                        _this.api.post('users/delete', _this.formid).subscribe(function (data) { return _this.notifi(data); }, function (error) { return _this.notify.error(error.error.error, { timeout: 0 }); });
                    }, bold: false },
                { text: 'No' }
            ]
        });
    };
    ProfileComponent.prototype.notifi = function (data) {
        //console.log(data);
        this.notify.info(data.data, { timeout: 2000 });
        setTimeout(1000);
        this.ngOnInit();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: 0.75rem;\r\n  }\r\n  \r\n  body {\r\n    background: #9CECFB;\r\n    /* fallback for old browsers */\r\n    /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  }\r\n  \r\n  .card-signin {\r\n    border: 2px solid #65C7F7;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .card-signin .card-body {\r\n    padding: 2rem;\r\n  }\r\n  \r\n  .form-signin {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n  }\r\n  \r\n  .form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .form-label-group input {\r\n    border-radius: 2rem;\r\n  }\r\n  \r\n  .form-label-group>input,\r\n  .form-label-group>label {\r\n    padding: 0.75rem 1.5rem;\r\n  }\r\n  \r\n  .form-label-group>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown) {\r\n    padding-top: 1.00rem;\r\n    padding-bottom: 0.25rem;\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown)~label {\r\n    padding-top: 0.25rem;\r\n    padding-bottom: 0.25rem;\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n  \r\n  .btn-google {\r\n    color: white;\r\n    background-color: #ea4335;\r\n  }\r\n  \r\n  .btn-facebook {\r\n    color: white;\r\n    background-color: #3b5998;\r\n  }"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">Add new User</h5>\n            <form class=\"form-signin\" #registerForm=ngForm (ngSubmit)=\"onSubmit()\">\n              \n                <div class=\"alert alert-danger\" [hidden]=\"!error.role\">\n                    {{ error.role }}\n                  </div>\n                <div class=\"alert alert-danger\" [hidden]=\"!error.email\">\n                    {{ error.email }}\n                  </div>\n                  <div class=\"alert alert-danger\" [hidden]=\"!error.name\">\n                      {{ error.name }}\n                    </div>\n                  <div class=\"alert alert-danger\" [hidden]=\"!error.password\">\n                      {{ error.password }}\n                    </div>\n                  <div class=\"form-label-group\">\n                    <p>Role:</p>\n                    <select class=\"form-control\" name=\"role\" id=\"inputRole\" required [(ngModel)]=\"form.role\" autofocus>\n                        <option value=\"CompanyAdmin\" *ngIf=\"company\">CompanyAdmin</option>\n                        <option value=\"SchoolAdmin\">SchoolAdmin</option>\n                        <option value=\"Teacher\" *ngIf=\"!company\">Teacher</option>\n                        <option value=\"Student\" *ngIf=\"!company\">Student</option>\n                        <option value=\"Parent\" *ngIf=\"!company\">Parent</option>\n                      </select>\n                    </div>\n                <div class=\"form-label-group\">\n                    <input type=\"email\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required [(ngModel)]=\"form.email\">\n                  </div>\n\n              <div class=\"form-label-group\">\n                <input type=\"name\" name=\"name\" id=\"inputName\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"form.name\" required>\n              </div>\n              \n\n              \n              <div class=\"form-label-group\">\n                <input type=\"password\" name=\"password\" id=\"inputPassword\" [(ngModel)]=\"form.password\" class=\"form-control\" placeholder=\"Password\" required>\n              </div>\n\n              <div class=\"form-label-group\">\n                <input type=\"password\" name=\"password_confirmation\" id=\"inputPasswordConfirm\" [(ngModel)]=\"form.password_confirmation\" class=\"form-control\" placeholder=\"Re enter Password\" required>\n              </div>\n\n              <div class=\"custom-control custom-checkbox mb-3\">\n                <input type=\"checkbox\" name=\"terms\" class=\"custom-control-input\" id=\"customCheck1\" [(ngModel)]=\"form.terms\">\n                <label class=\"custom-control-label\" for=\"customCheck1\">Agree terms and conditions</label>\n              </div>\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!registerForm.valid || form.terms==false\">Add</button>\n            </form>\n           </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(api, token, router, notify) {
        this.api = api;
        this.token = token;
        this.router = router;
        this.notify = notify;
        this.form = {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            terms: false,
            role: null
        };
        this.error = [];
        this.company = true;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(this.token.getUser());
        var role = user.role;
        if (role == 'Student' || role == 'Teacher' || role == 'Parent')
            this.router.navigateByUrl('/notices');
        if (role == 'CompanyAdmin')
            this.company = true;
        else
            this.company = false;
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        return this.api.post('signup', this.form).subscribe(function (data) { return _this.tokenHandler(data); }, function (error) { return _this.errorHandle(error); });
    };
    SignupComponent.prototype.tokenHandler = function (data) {
        this.notify.info("Added Succesfully", { timeout: 2000 });
        //this.token.set(data);
        this.router.navigateByUrl('/users');
    };
    SignupComponent.prototype.errorHandle = function (error) {
        this.error = error.error.errors;
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/services/afterLogin.ts":
/*!****************************************!*\
  !*** ./src/app/services/afterLogin.ts ***!
  \****************************************/
/*! exports provided: AfterLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterLoginService", function() { return AfterLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AfterLoginService = /** @class */ (function () {
    function AfterLoginService(Token) {
        this.Token = Token;
    }
    AfterLoginService.prototype.canActivate = function (route, state) {
        return this.Token.loggedIn();
    };
    AfterLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], AfterLoginService);
    return AfterLoginService;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseURL = "https://ems.aladinlabs.com/api/";
    }
    ApiService.prototype.post = function (url, data) {
        return this.http.post("" + this.baseURL + url, data);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(token) {
        this.token = token;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.token.loggedIn());
        this.authStatus = this.loggedIn.asObservable();
    }
    AuthService.prototype.changeAuthStatus = function (value) {
        this.loggedIn.next(value);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/beforeLogin.ts":
/*!*****************************************!*\
  !*** ./src/app/services/beforeLogin.ts ***!
  \*****************************************/
/*! exports provided: BeforeLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeLoginService", function() { return BeforeLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeforeLoginService = /** @class */ (function () {
    function BeforeLoginService(Token) {
        this.Token = Token;
    }
    BeforeLoginService.prototype.canActivate = function (route, state) {
        return !this.Token.loggedIn();
    };
    BeforeLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], BeforeLoginService);
    return BeforeLoginService;
}());



/***/ }),

/***/ "./src/app/services/is-company-admin.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/is-company-admin.service.ts ***!
  \******************************************************/
/*! exports provided: IsCompanyAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsCompanyAdminService", function() { return IsCompanyAdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IsCompanyAdminService = /** @class */ (function () {
    function IsCompanyAdminService(token) {
        this.token = token;
    }
    IsCompanyAdminService.prototype.canActivate = function (route, state) {
        return JSON.parse(this.token.getUser()).role == 'CompanyAdmin' ? true : false;
    };
    IsCompanyAdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], IsCompanyAdminService);
    return IsCompanyAdminService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
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

var TokenService = /** @class */ (function () {
    function TokenService() {
        this.iss = {
            login: 'https://ems.aladinlabs.com/api/login',
            signup: 'https://ems.aladinlabs.com/api/signup'
        };
    }
    TokenService.prototype.set = function (token) {
        localStorage.setItem('token', token.access_token);
        localStorage.setItem('user', JSON.stringify(token.user));
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem('token');
    };
    TokenService.prototype.getUser = function () {
        return localStorage.getItem('user');
    };
    TokenService.prototype.remove = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };
    TokenService.prototype.loggedIn = function () {
        var token = this.get();
        if (token) {
            var check = JSON.parse(atob(token.split('.')[1]));
            if (check) {
                return Object.values(this.iss).indexOf(check.iss) >= 0 ? true : false;
            }
            return false;
        }
        return false;
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Tutorials\Web\Larave\Laravel Angular Authentication with JWT\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map