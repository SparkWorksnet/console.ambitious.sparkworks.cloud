(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 60866:
/*!***********************************!*\
  !*** ./src/app/amplify.config.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmplifyConfig": function() { return /* binding */ AmplifyConfig; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/auth */ 22108);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 92340);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AmplifyConfig = /** @class */ (function () {
    function AmplifyConfig() {
    }
    AmplifyConfig.deployment = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.deploymentName;
    AmplifyConfig.auth = {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.identityPoolId,
        // REQUIRED - Amazon Cognito Region
        region: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.region,
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.userPoolId,
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.userPoolWebClientId,
    };
    AmplifyConfig.apiEndpoint = {
        name: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.endpointName,
        endpoint: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.endpoint,
        region: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.region,
        custom_header: function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__.Auth.currentUserPoolUser()];
                    case 1: 
                    // return { Authorization : 'token' };
                    // Alternatively, with Cognito User Pools use this:
                    return [2 /*return*/, (_a.Authorization = (_b.sent()).signInUserSession.idToken.jwtToken, _a)];
                }
            });
        }); }
    };
    return AmplifyConfig;
}());



/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": function() { return /* binding */ AppRoutes; }
/* harmony export */ });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 76729);

var AppRoutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        children: [
            { path: '', redirectTo: '/console/groupsstart', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("default-node_modules_buffer_index_js"), __webpack_require__.e("default-node_modules_aws-amplify_api_lib-esm_API_js-src_app_shared_api_config_ts"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then(function (m) { return m.DashboardModule; }); }
            },
            {
                path: 'console',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("default-node_modules_buffer_index_js"), __webpack_require__.e("default-node_modules_aws-amplify_api_lib-esm_API_js-src_app_shared_api_config_ts"), __webpack_require__.e("default-node_modules_chartjs-plugin-annotation_dist_chartjs-plugin-annotation_esm_js-node_mod-c0157f"), __webpack_require__.e("src_app_group_group_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./group/group.module */ 99346)).then(function (m) { return m.GroupModule; }); }
            },
            {
                path: 'console',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("default-node_modules_buffer_index_js"), __webpack_require__.e("default-node_modules_aws-amplify_api_lib-esm_API_js-src_app_shared_api_config_ts"), __webpack_require__.e("default-node_modules_chartjs-plugin-annotation_dist_chartjs-plugin-annotation_esm_js-node_mod-c0157f"), __webpack_require__.e("src_app_type_type_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./type/type.module */ 18475)).then(function (m) { return m.TypeModule; }); }
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/dashboard'
    }
];


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/ui-components */ 95772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/ui-angular */ 16447);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/spinner.component */ 23812);






function AppComponent_amplify_authenticator_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "amplify-authenticator");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "amplify-sign-up", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formFields", ctx_r0.formFields);
} }
function AppComponent_router_outlet_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "router-outlet", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(ref) {
        this.ref = ref;
        this.title = 'app';
        this.logoUrl = 'https://sparkworks-artwork.s3.eu-west-1.amazonaws.com/sparks/sparkworks-logo-website.png';
        this.formFields = [
            {
                type: 'username',
                label: 'Username *',
                placeholder: 'Username',
                required: true,
            },
            {
                type: 'password',
                label: 'Password *',
                placeholder: 'Password',
                required: true,
            },
            {
                type: 'name',
                label: 'Name *',
                placeholder: 'Name',
                required: true,
            },
            {
                type: 'email',
                label: 'Email Address *',
                placeholder: 'Email',
                required: true,
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        (0,_aws_amplify_ui_components__WEBPACK_IMPORTED_MODULE_0__.onAuthUIStateChange)(function (authState, authData) {
            _this.authState = authState;
            _this.user = authData;
            _this.ref.detectChanges();
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        return _aws_amplify_ui_components__WEBPACK_IMPORTED_MODULE_0__.onAuthUIStateChange;
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
    AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "App", 4, "ngIf"], ["slot", "sign-up", 3, "formFields"], [1, "App"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppComponent_amplify_authenticator_0_Template, 2, 1, "amplify-authenticator", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_router_outlet_1_Template, 2, 0, "router-outlet", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authState !== "signedin");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authState === "signedin" && ctx.user);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_1__.AmplifyAuthenticator, _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_1__.AmplifySignUp, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 76729);
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header-navigation/navigation.component */ 80496);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ 17500);
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/breadcrumb/breadcrumb.component */ 10419);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/spinner.component */ 23812);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 71919);
/* harmony import */ var _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-amplify/ui-angular */ 16447);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aws-amplify/core */ 94758);
/* harmony import */ var _amplify_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./amplify.config */ 60866);
/* harmony import */ var ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-humanize-duration */ 10685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
// import * as $ from 'jquery';
















/* import AmplifyUIAngularModule  */






var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__.Amplify.configure({
    Auth: _amplify_config__WEBPACK_IMPORTED_MODULE_9__.AmplifyConfig.auth,
    API: { endpoints: [_amplify_config__WEBPACK_IMPORTED_MODULE_9__.AmplifyConfig.apiEndpoint] }
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent] });
    AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__.LocationStrategy,
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__.HashLocationStrategy
            },
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ], imports: [[
                _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_8__.AmplifyUIAngularModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule,
                ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_17__.NgxHumanizeDurationModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutes, { useHash: true })
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent,
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent,
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent,
        _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent,
        _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent], imports: [_aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_8__.AmplifyUIAngularModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule,
        ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_17__.NgxHumanizeDurationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] }); })();


/***/ }),

/***/ 76729:
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": function() { return /* binding */ FullComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header-navigation/navigation.component */ 80496);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 71919);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ 17500);
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/breadcrumb/breadcrumb.component */ 10419);







var _c0 = function (a0) { return { "show-sidebar": a0 }; };
//declare var $: any;
var FullComponent = /** @class */ (function () {
    function FullComponent(router) {
        this.router = router;
        this.config = {};
        this.innerWidth = 0;
        this.defaultSidebar = '';
        this.showMobileMenu = false;
        this.expandLogo = false;
        this.sidebartype = 'full';
    }
    FullComponent.prototype.Logo = function () {
        this.expandLogo = !this.expandLogo;
    };
    FullComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/starter']);
        }
        this.defaultSidebar = this.sidebartype;
        this.handleSidebar();
    };
    FullComponent.prototype.onResize = function () {
        this.handleSidebar();
    };
    FullComponent.prototype.handleSidebar = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 1170) {
            this.sidebartype = 'mini-sidebar';
        }
        else {
            this.sidebartype = this.defaultSidebar;
        }
    };
    FullComponent.prototype.toggleSidebarType = function () {
        switch (this.sidebartype) {
            case 'full':
                this.sidebartype = 'mini-sidebar';
                break;
            case 'mini-sidebar':
                this.sidebartype = 'full';
                break;
            default:
        }
    };
    FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
    FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], hostBindings: function FullComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function FullComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
        } }, decls: 27, vars: 7, consts: [["id", "main-wrapper", "dir", "ltr", "data-theme", "light", "data-layout", "vertical", "data-sidebar-position", "absolute", "data-header-position", "fixed", "data-boxed-layout", "full", 3, "ngClass"], ["data-navbarbg", "skin6", 1, "topbar"], [1, "d-flex", "top-navbar", "navbar-expand-md", "navbar-light"], ["data-logobg", "skin6", 1, "navbar-header", 3, "ngClass"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-md-none", 3, "click"], [3, "ngClass"], ["href", "/", 1, "navbar-brand"], [1, "logo-icon"], ["src", "assets/images/logo-icon.png", "alt", "homepage", 1, "dark-logo"], [1, "logo-text"], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "dark-logo"], ["href", "javascript:void(0)", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "topbartoggler", "d-block", "d-md-none", "waves-effect", "waves-light"], [1, "ti-more"], ["id", "navbarSupportedContent", "data-navbarbg", "skin6", 1, "navbar-collapse", "collapse"], [1, "w-100", 3, "toggleSidebar"], ["data-sidebarbg", "skin1", 1, "left-sidebar", 3, "mouseover", "mouseout"], [1, "scroll-sidebar", 3, "perfectScrollbar"], [1, "page-wrapper"], [1, "container-fluid"], [1, "footer", "text-center"], ["href", "https://wrappixel.com"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nav", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullComponent_Template_a_click_4_listener() { return ctx.showMobileMenu = !ctx.showMobileMenu; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "app-navigation", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("toggleSidebar", function FullComponent_Template_app_navigation_toggleSidebar_14_listener() { return ctx.toggleSidebarType(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "aside", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function FullComponent_Template_aside_mouseover_15_listener() { return ctx.Logo(); })("mouseout", function FullComponent_Template_aside_mouseout_15_listener() { return ctx.Logo(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-breadcrumb");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "footer", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " All Rights Reserved by Admin Pro Admin. Designed and Developed by ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "WrapPixel");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, ". ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, ctx.showMobileMenu));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-sidebartype", ctx.sidebartype);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.expandLogo ? "expand-logo" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.showMobileMenu ? "ti-close" : "ti-menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PerfectScrollbarDirective, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return FullComponent;
}());



/***/ }),

/***/ 10419:
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": function() { return /* binding */ BreadcrumbComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 71570);





var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.pageInfo = Object.create(null);
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd; }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function () { return _this.activatedRoute; }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (route) { return route.outlet === "primary"; }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.titleService.setTitle(event["title"]);
            _this.pageInfo = event;
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title)); };
    BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 5, vars: 1, consts: [[1, "page-breadcrumb"], [1, "row"], [1, "col-12", "align-self-center"], [1, "page-title"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.pageInfo == null ? null : ctx.pageInfo.title);
        } }, encapsulation: 2 });
    return BreadcrumbComponent;
}());



/***/ }),

/***/ 80496:
/*!******************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": function() { return /* binding */ NavigationComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/ui-angular */ 16447);






var _c0 = function (a0) { return { "show-search": a0 }; };
//declare var $: any;
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.showSearch = false;
    }
    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
    NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], outputs: { toggleSidebar: "toggleSidebar" }, decls: 22, vars: 3, consts: [[1, "navbar-nav", "float-left", "mr-auto"], [1, "nav-item", "d-none", "d-md-block", "d-lg-none"], ["href", "javascript:void(0)", 1, "nav-link", "sidebartoggler", "waves-effect", "waves-light", 3, "click"], [1, "mdi", "mdi-menu", "font-24"], [1, "nav-item", "search-box"], ["href", "javascript:void(0)", 1, "nav-link", "waves-effect", "waves-dark", 3, "click"], [1, "ti-search"], [1, "app-search", "position-absolute", 3, "ngClass"], ["type", "text", "placeholder", "Search & enter", 1, "form-control"], [1, "srh-btn", 3, "click"], [1, "ti-close"], [1, "navbar-nav", "float-right"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item", "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-muted", "waves-effect", "waves-dark", "pro-pic"], ["src", "assets/images/users/user.png", "alt", "user", "width", "31", 1, "rounded-circle"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "user-dd"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "ti-settings", "m-r-5", "m-l-5"], [1, "dropdown-divider"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_2_listener() { return ctx.toggleSidebar.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_5_listener() { return ctx.showSearch = !ctx.showSearch; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_9_listener() { return ctx.showSearch = !ctx.showSearch; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Account Setting");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "amplify-sign-out");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx.showSearch));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_0__.AmplifySignOut], encapsulation: 2 });
    return NavigationComponent;
}());



/***/ }),

/***/ 64456:
/*!**********************************************!*\
  !*** ./src/app/shared/sidebar/menu-items.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": function() { return /* binding */ ROUTES; }
/* harmony export */ });
/* harmony import */ var _amplify_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../amplify.config */ 60866);

var ROUTES = [
    {
        path: '',
        title: _amplify_config__WEBPACK_IMPORTED_MODULE_0__.AmplifyConfig.deployment,
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: [],
    },
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'mdi mdi-gauge',
        class: '',
        extralink: false,
        submenu: [],
    },
    {
        path: '/console/groups',
        title: 'Groups',
        icon: 'mdi mdi-blur-radial',
        class: '',
        extralink: false,
        submenu: [],
    },
    {
        path: '/console/things',
        title: 'Things',
        icon: 'mdi mdi-equal',
        class: '',
        extralink: false,
        submenu: [],
    },
    {
        path: '/console/types',
        title: 'Types',
        icon: 'mdi mdi-json',
        class: '',
        extralink: false,
        submenu: [],
    }
];


/***/ }),

/***/ 17500:
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": function() { return /* binding */ SidebarComponent; }
/* harmony export */ });
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items */ 64456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);





function SidebarComponent_li_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
} }
var _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_li_2_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.addExpandClass(sidebarnavItem_r1.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", sidebarnavItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, sidebarnavItem_r1.class))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, sidebarnavItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
} }
function SidebarComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_li_2_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_li_2_a_2_Template, 4, 11, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sidebarnavItem_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.showMenu === sidebarnavItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.extralink === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !sidebarnavItem_r1.extralink);
} }
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.showMenu = '';
        this.showSubMenu = '';
        this.sidebarnavItems = [];
    }
    // this is for the open close
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    // End open close
    SidebarComponent.prototype.ngOnInit = function () {
        this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter(function (sidebarnavItem) { return sidebarnavItem; });
    };
    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
    SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 3, vars: 1, consts: [[1, "sidebar-nav"], ["id", "sidebarnav"], ["class", "sidebar-item", 3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "routerLinkActive"], ["class", "nav-small-cap", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click", 4, "ngIf"], [1, "nav-small-cap"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click"], [3, "ngClass"], [1, "hide-menu"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_li_2_Template, 3, 5, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], encapsulation: 2 });
    return SidebarComponent;
}());



/***/ }),

/***/ 23812:
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": function() { return /* binding */ SpinnerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);





function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
    SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], encapsulation: 2 });
    return SpinnerComponent;
}());



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// this should not be used at all
var environment = {
    production: false,
    deploymentName: 'TEST',
    identityPoolId: 'region:uuid',
    region: 'region',
    userPoolId: 'region_pool',
    userPoolWebClientId: 'clientid',
    endpointName: 'name',
    endpoint: 'url'
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 11010:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*********************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./amplify-amazon-button_5.entry.js": [
		72985,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-amazon-button_5_entry_js"
	],
	"./amplify-auth-container.entry.js": [
		45891,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-auth-container_entry_js"
	],
	"./amplify-auth-fields_9.entry.js": [
		98126,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-auth-fields_9_entry_js"
	],
	"./amplify-authenticator.entry.js": [
		84210,
		"common",
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-authenticator_entry_js"
	],
	"./amplify-button_3.entry.js": [
		54128,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-button_3_entry_js"
	],
	"./amplify-chatbot.entry.js": [
		2584,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-chatbot_entry_js"
	],
	"./amplify-checkbox.entry.js": [
		90848,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-checkbox_entry_js"
	],
	"./amplify-confirm-sign-in_7.entry.js": [
		52030,
		"common",
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-confirm-sign-in_7_entry_js"
	],
	"./amplify-container.entry.js": [
		91471,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-container_entry_js"
	],
	"./amplify-federated-buttons_2.entry.js": [
		61777,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-federated-buttons_2_entry_js"
	],
	"./amplify-federated-sign-in.entry.js": [
		86772,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-federated-sign-in_entry_js"
	],
	"./amplify-form-field_4.entry.js": [
		21067,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-form-field_4_entry_js"
	],
	"./amplify-greetings.entry.js": [
		22603,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-greetings_entry_js"
	],
	"./amplify-icon-button.entry.js": [
		73298,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-icon-button_entry_js"
	],
	"./amplify-icon.entry.js": [
		54014,
		"default-node_modules_aws-amplify_ui-components_dist_esm_icons-c10e1d4d_js",
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-icon_entry_js"
	],
	"./amplify-link.entry.js": [
		81422,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-link_entry_js"
	],
	"./amplify-nav_2.entry.js": [
		65620,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-nav_2_entry_js"
	],
	"./amplify-photo-picker.entry.js": [
		6786,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-photo-picker_entry_js"
	],
	"./amplify-picker.entry.js": [
		21946,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-picker_entry_js"
	],
	"./amplify-radio-button_3.entry.js": [
		44020,
		"default-node_modules_buffer_index_js",
		"common",
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-radio-button_3_entry_js"
	],
	"./amplify-s3-album.entry.js": [
		50453,
		"default-node_modules_axios_index_js",
		"default-node_modules_aws-amplify_ui-components_dist_esm_storage-helpers-1afafead_js",
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-s3-album_entry_js"
	],
	"./amplify-s3-image-picker.entry.js": [
		71222,
		"default-node_modules_axios_index_js",
		"default-node_modules_aws-amplify_ui-components_dist_esm_storage-helpers-1afafead_js",
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-s3-image-picker_entry_js"
	],
	"./amplify-s3-image.entry.js": [
		78930,
		"default-node_modules_axios_index_js",
		"default-node_modules_aws-amplify_ui-components_dist_esm_storage-helpers-1afafead_js",
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-s3-image_entry_js"
	],
	"./amplify-s3-text-picker.entry.js": [
		97674,
		"default-node_modules_axios_index_js",
		"default-node_modules_aws-amplify_ui-components_dist_esm_storage-helpers-1afafead_js",
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-s3-text-picker_entry_js"
	],
	"./amplify-s3-text.entry.js": [
		58952,
		"default-node_modules_axios_index_js",
		"default-node_modules_aws-amplify_ui-components_dist_esm_storage-helpers-1afafead_js",
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-s3-text_entry_js"
	],
	"./amplify-select-mfa-type.entry.js": [
		35129,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-select-mfa-type_entry_js"
	],
	"./amplify-sign-in-button.entry.js": [
		15404,
		"default-node_modules_aws-amplify_ui-components_dist_esm_icons-c10e1d4d_js",
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-sign-in-button_entry_js"
	],
	"./amplify-tooltip.entry.js": [
		41131,
		"node_modules_aws-amplify_ui-components_dist_esm_amplify-tooltip_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 11010;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 56249:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map