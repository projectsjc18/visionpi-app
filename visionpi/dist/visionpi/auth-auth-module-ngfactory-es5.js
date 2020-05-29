function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module-ngfactory"], {
  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/auth/auth.module.ngfactory.js":
  /*!***********************************************!*\
    !*** ./src/app/auth/auth.module.ngfactory.js ***!
    \***********************************************/

  /*! exports provided: AuthModuleNgFactory */

  /***/
  function srcAppAuthAuthModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModuleNgFactory", function () {
      return AuthModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component.ngfactory */
    "./src/app/auth/login/login.component.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/dialog/typings/index.ngfactory */
    "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/datepicker/typings/index.ngfactory */
    "./node_modules/@angular/material/datepicker/typings/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/tooltip/typings/index.ngfactory */
    "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_bottom_sheet_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/bottom-sheet/typings/index.ngfactory */
    "./node_modules/@angular/material/bottom-sheet/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/cdk/accordion */
    "./node_modules/@angular/cdk/esm2015/accordion.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ../angular-material/angular-material.module */
    "./src/app/angular-material/angular-material.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AuthModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["LoginComponentNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TooltipComponentNgFactory"], _node_modules_angular_material_bottom_sheet_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetContainerNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["ɵb22"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _auth_routing_module__WEBPACK_IMPORTED_MODULE_23__["AuthRoutingModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_23__["AuthRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_35__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_35__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_37__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_37__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_42__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_42__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_43__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_43__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_46__["MatBottomSheetModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_46__["MatBottomSheetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_47__["AngularMaterialModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_47__["AngularMaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"], _auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], "es", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], function () {
        return [[{
          path: "",
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_48__["LoginComponent"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__["MAT_CHIPS_DEFAULT_OPTIONS"], {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_49__["ENTER"]]
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TRANSLATIONS_FORMAT"], "xlf", [])]);
    });
    /***/

  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };
    /***/

  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.isLoggedIn = false;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(username, password) {
          var _this = this;

          localStorage.setItem('code', this.b64EncodeUnicode("".concat(username, ":").concat(password)));
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('grant_type', 'password').set('username', username).set('password', password);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiAuthentication, payload.toString()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (session) {
            // login successful if there's a jwt token in the response
            if (session && session.token.accessToken) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('session', JSON.stringify(session.token));
              _this.isLoggedIn = true;
            }

            return session;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isLoggedIn = false; // remove user from local storage to log user out

          localStorage.clear();
        }
      }, {
        key: "b64EncodeUnicode",
        value: function b64EncodeUnicode(str) {
          return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, // function toSolidBytes(match, p1) {
          function (match, p1) {
            // console.debug('match: ' + match);
            return String.fromCharCode("0x" + p1);
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      factory: function AuthService_Factory() {
        return new AuthService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      },
      token: AuthService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ngfactory.js":
  /*!*********************************************************!*\
    !*** ./src/app/auth/login/login.component.ngfactory.js ***!
    \*********************************************************/

  /*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */

  /***/
  function srcAppAuthLoginLoginComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function () {
      return RenderType_LoginComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function () {
      return View_LoginComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function () {
      return View_LoginComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function () {
      return LoginComponentNgFactory;
    });
    /* harmony import */


    var _login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.component.scss.shim.ngstyle */
    "./src/app/auth/login/login.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_LoginComponent = [_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_LoginComponent,
      data: {}
    });

    function View_LoginComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 36, "div", [["class", "login-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 35, "div", [["class", "column column-double"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 34, "div", [["class", "login-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["class", "white-text center-text centered-box column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h1", [["class", "visionpi-title-large"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["VisionPI"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h3", [["class", "visionpi-title-medium"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["T\xFA soluci\xF3n en Seguridad!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 27, "div", [["class", "column-gray center-text centered-box column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 26, "div", [["class", "login-form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "h4", [["class", "visionpi-title-small"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Bienvenido!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 23, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("ngSubmit" === en) {
          var pd_2 = _co.onSubmit(_co.loginForm.value) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, {
        ngSubmit: "ngSubmit"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 7, "input", [["class", "login-input mat-input-element mat-form-field-autofill-control"], ["formControlName", "username"], ["matInput", ""], ["placeholder", "Username"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("blur" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._focusChanged(false) !== false;
          ad = pd_4 && ad;
        }

        if ("focus" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._focusChanged(true) !== false;
          ad = pd_5 && ad;
        }

        if ("input" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._onInput() !== false;
          ad = pd_6 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 7, "input", [["class", "login-input mat-input-element mat-form-field-autofill-control"], ["formControlName", "password"], ["matInput", ""], ["placeholder", "Enter your password"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("blur" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._focusChanged(false) !== false;
          ad = pd_4 && ad;
        }

        if ("focus" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._focusChanged(true) !== false;
          ad = pd_5 && ad;
        }

        if ("input" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._onInput() !== false;
          ad = pd_6 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"],
        type: [1, "type"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "button", [["class", "white-text button"], ["color", "accent"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Ingresar"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.loginForm;

        _ck(_v, 15, 0, currVal_7);

        var currVal_24 = "username";

        _ck(_v, 22, 0, currVal_24);

        var currVal_25 = "Username";

        _ck(_v, 24, 0, currVal_25);

        var currVal_42 = "password";

        _ck(_v, 30, 0, currVal_42);

        var currVal_43 = "Enter your password";
        var currVal_44 = _co.hide ? "password" : "text";

        _ck(_v, 32, 0, currVal_43, currVal_44);

        var currVal_47 = "accent";

        _ck(_v, 35, 0, currVal_47);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPending;

        _ck(_v, 13, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._isServer;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).id;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).placeholder;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).required;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._isNativeSelect || null;
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._ariaDescribedby || null;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).errorState;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).required.toString();

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassUntouched;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassTouched;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPristine;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassDirty;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassValid;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassInvalid;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPending;

        _ck(_v, 18, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23]);

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._isServer;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).id;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).placeholder;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).disabled;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).required;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._isNativeSelect || null;
        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._ariaDescribedby || null;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).errorState;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).required.toString();

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassUntouched;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassTouched;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPristine;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassDirty;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassValid;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassInvalid;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPending;

        _ck(_v, 26, 1, [currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41]);

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).disabled || null;
        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._animationMode === "NoopAnimations";

        _ck(_v, 34, 0, currVal_45, currVal_46);
      });
    }

    function View_LoginComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/auth/login/login.component.scss.shim.ngstyle.js":
  /*!*****************************************************************!*\
    !*** ./src/app/auth/login/login.component.scss.shim.ngstyle.js ***!
    \*****************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAuthLoginLoginComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".login-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  height: 100vh;\n  \n  background-image: url('businessman-3213659_1920.jpg');\n  \n  background-position: center center;\n  \n  background-repeat: no-repeat;\n  \n  background-attachment: fixed;\n  \n  background-size: cover;\n  \n  background-color: #464646;\n}\n.bordered-box[_ngcontent-%COMP%] {\n  color: white;\n  border: 1px solid #126db5;\n  border-radius: 2px;\n  padding: 7px;\n  margin: 6px;\n}\n.column-gray[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.column[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.column-double[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 2;\n          flex: 2;\n}\n.side[_ngcontent-%COMP%] {\n  -webkit-box-flex: 0.3;\n          flex: 0.3;\n}\n.centered-box[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.login-input[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", \"Open Sans\", Arial, sans-serif;\n  font-weight: 100;\n  font-size: 16px;\n  line-height: 1.5em;\n  color: #ffffff;\n  min-width: 200px;\n  max-width: 350px;\n  width: 90%;\n  padding-top: 10px;\n  margin: 5px;\n  border-top: transparent;\n  border-right: transparent;\n  border-bottom: 1px solid #126db5;\n  border-left: transparent;\n  background: transparent;\n}\n.login-input[_ngcontent-%COMP%]:active {\n  border-bottom: 2px solid #126db5;\n}\n.login-input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cccccc;\n}\n.login-input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cccccc;\n}\n.login-input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cccccc;\n}\n.login-input[_ngcontent-%COMP%]::placeholder {\n  color: #cccccc;\n}\n.button[_ngcontent-%COMP%] {\n  max-width: 350px;\n  width: 30%;\n  font-weight: bold;\n  font-size: 14pt;\n  color: #126db5;\n  background: transparent;\n  padding: 5px;\n  border: 1px solid #126db5;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-radius: 0px;\n  margin: 15px;\n}\n.image[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 80%;\n  min-width: 200px;\n  height: auto;\n}\n.login-input[_ngcontent-%COMP%]:focus {\n  color: #ccccc;\n  outline: transparent;\n  border-bottom: 2px solid #126db5;\n}\n.login-form[_ngcontent-%COMP%] {\n  height: 14em;\n  background: #282e33;\n  border-top: 3px solid #434a52;\n  border-bottom: 3px solid #434a52;\n  \n  opacity: 0.8;\n  filter: alpha(opacity=80);\n}\n.login-visionpi-description[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 22px 22px 22px 22px;\n  height: 20em;\n  border-radius: 5px;\n  background: #282e33;\n  border-top: 3px solid #434a52;\n  border-bottom: 3px solid #434a52;\n  opacity: 0.9;\n}\n*[_ngcontent-%COMP%]:focus {\n  background: transparent;\n  \n  outline-color: #ccccc;\n}\n\n@media all and (max-width: 800px) {\n  .login-container[_ngcontent-%COMP%] {\n    \n    justify-content: space-around;\n  }\n}\n\n@media all and (max-width: 500px) {\n  .login-container[_ngcontent-%COMP%] {\n    \n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9DOlxcRGV2ZWxvcG1lbnRfSkNcXFZpc2lvblBpXFxhcHBzXFx3ZWItcGxhdGZvcm1cXHZpc2lvbnBpL3NyY1xcYXBwXFxhdXRoXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQUE7QUFDQSxpTkFBQTtBQUNBOzs7Ozs7Ozs7Ozs7NEZBQUE7QUFjQSwyREFBQTtBQUVBOzs7Ozs7Ozs7Ozs7OztFQUFBO0FBZ0JBO0VBQ0Usb0JBQUE7RUFJQSxhQUFBO0VBR0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHFEQUFBO0VBRUEsMEVBQUE7RUFDQSxrQ0FBQTtFQUVBLGtDQUFBO0VBQ0EsNEJBQUE7RUFFQTs4REFBQTtFQUVBLDRCQUFBO0VBRUE7OEJBQUE7RUFFQSxzQkFBQTtFQUVBOzRDQUFBO0VBRUEseUJBQUE7QUNSRjtBRFdBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1JGO0FEV0E7RUFDRSx1QkFBQTtBQ1JGO0FEV0E7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNSRjtBRFdBO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDUkY7QURXQTtFQUNFLHFCQUFBO1VBQUEsU0FBQTtBQ1JGO0FEV0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ1JGO0FEV0E7RUFDRSxrQkFBQTtBQ1JGO0FEV0E7RUFDRSx5REFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQ1JGO0FEV0E7RUFDRSxnQ0FBQTtBQ1JGO0FEV0E7RUFDRSxjQUFBO0FDUkY7QURPQTtFQUNFLGNBQUE7QUNSRjtBRE9BO0VBQ0UsY0FBQTtBQ1JGO0FET0E7RUFDRSxjQUFBO0FDUkY7QURXQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1JGO0FEV0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1JGO0FEV0E7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQ1JGO0FEV0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFdBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ1JGO0FEV0E7RUFDRSx1QkFBQTtFQUF3Qiw0QkFBQTtFQUN4QixxQkFBQTtBQ1BGO0FEWUEsbUJBQUE7QUFDQTtFQUNFO0lBQ0UsK0ZBQUE7SUFDQSw2QkFBQTtFQ1RGO0FBQ0Y7QURZQSxrQkFBQTtBQUNBO0VBQ0U7SUFDRSxzRUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBOztnQkFBQTtFQ1JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypodG1sLGJvZHl7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowO30qL1xyXG4vKmJvZHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5LTMyNDMzNzVfMTkyMC5qcGcpO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7bWluLWhlaWdodDoxMDB2aDtmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjt9Ki9cclxuLyouYXBwLWhlYWRlcntqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjI7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTt9XHJcbi5sb2dpbi13cmFwcGVye2hlaWdodDoxMDAlO31cclxuLnBvc2l0cm9ueHt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojZmZmZmZmO31cclxuLmJveHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6NDAlO2xlZnQ6NjAlO29wYWNpdHk6MTtmbG9hdDpsZWZ0O3BhZGRpbmc6NjBweCA1MHB4IDQwcHggNTBweDt3aWR0aDoxMDAlO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjEwcHg7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSk7ei1pbmRleDo1O21heC13aWR0aDozMzBweDt9XHJcbi5ib3guYmFja3t0cmFuc2Zvcm06c2NhbGUoLjk1KTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjk1KTt0b3A6LTIwcHg7b3BhY2l0eTouODt6LWluZGV4Oi0xO31cclxuLmJveDpiZWZvcmV7Y29udGVudDpcIlwiO3dpZHRoOjEwMCU7aGVpZ2h0OjMwcHg7Ym9yZGVyLXJhZGl1czoxMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMTBweDtiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO2xlZnQ6MDt0cmFuc2Zvcm06c2NhbGUoLjk1KTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjk1KTt6LWluZGV4Oi0xO31cclxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZm9ybXttaW4td2lkdGg6MTAwJTttYXgtd2lkdGg6MzAwcHg7d2lkdGg6MTAwJTt9XHJcbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsLmxvZ2luLXdyYXBwZXIgLmJ0bi1ibG9ja3t3aWR0aDoxMDAlO31cclxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVye3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jaztmb250LXdlaWdodDo3MDA7fVxyXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjMwcHg7bWFyZ2luOjA7fVxyXG4ubG9naW4td3JhcHBlciAubWF0LWNhcmR7cGFkZGluZzo0MHB4IDcwcHggNTBweDt9XHJcbi5sb2dpbi13cmFwcGVyIC5tYXQtc3Ryb2tlZC1idXR0b257Ym9yZGVyOjFweCBzb2xpZCBjdXJyZW50Q29sb3I7bGluZS1oZWlnaHQ6NTRweDtiYWNrZ3JvdW5kOiNGRkY3RkE7fVxyXG4ubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6MC44Mzc1ZW0gMDt9Ki9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbmV3IC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLypcclxuYSwgcCB7XHJcbiAgY29sb3I6ICMxMjZkYjU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDUsIGg0LCBoMywgaDIsIGgxIHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnT3BlbiBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufSovXHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAvKiBMb2NhdGlvbiBvZiB0aGUgaW1hZ2UgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9idXNpbmVzc21hbi0zMjEzNjU5XzE5MjAuanBnKTtcclxuXHJcbiAgLyogQmFja2dyb3VuZCBpbWFnZSBpcyBjZW50ZXJlZCB2ZXJ0aWNhbGx5IGFuZCBob3Jpem9udGFsbHkgYXQgYWxsIHRpbWVzICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuXHJcbiAgLyogQmFja2dyb3VuZCBpbWFnZSBkb2Vzbid0IHRpbGUgKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAvKiBCYWNrZ3JvdW5kIGltYWdlIGlzIGZpeGVkIGluIHRoZSB2aWV3cG9ydCBzbyB0aGF0IGl0IGRvZXNuJ3QgbW92ZSB3aGVuXHJcbiAgICAgdGhlIGNvbnRlbnQncyBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIHRoZSBpbWFnZSdzIGhlaWdodCAqL1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblxyXG4gIC8qIFRoaXMgaXMgd2hhdCBtYWtlcyB0aGUgYmFja2dyb3VuZCBpbWFnZSByZXNjYWxlIGJhc2VkXHJcbiAgICAgb24gdGhlIGNvbnRhaW5lcidzIHNpemUgKi9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAvKiBTZXQgYSBiYWNrZ3JvdW5kIGNvbG9yIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWRcclxuICAgICB3aGlsZSB0aGUgYmFja2dyb3VuZCBpbWFnZSBpcyBsb2FkaW5nICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDY0NjtcclxufVxyXG5cclxuLmJvcmRlcmVkLWJveCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMjZkYjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBtYXJnaW46IDZweDtcclxufVxyXG5cclxuLmNvbHVtbi1ncmF5IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29sdW1uLWRvdWJsZSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAyO1xyXG59XHJcblxyXG4uc2lkZSB7XHJcbiAgZmxleDogMC4zO1xyXG59XHJcblxyXG4uY2VudGVyZWQtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNlbnRlci10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ09wZW4gU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBib3JkZXItdG9wOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTI2ZGI1O1xyXG4gIGJvcmRlci1sZWZ0OiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmxvZ2luLWlucHV0OmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxMjZkYjU7XHJcbn1cclxuXHJcbi5sb2dpbi1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gIGNvbG9yOiAjMTI2ZGI1O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMTI2ZGI1O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubG9naW4taW5wdXQ6Zm9jdXMge1xyXG4gIGNvbG9yOiAjY2NjY2M7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxMjZkYjU7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICBoZWlnaHQ6IDE0ZW07XHJcbiAgYmFja2dyb3VuZDogIzI4MmUzMztcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgIzQzNGE1MjtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzQzNGE1MjtcclxuICAvKmJvcmRlci1yYWRpdXM6IDVweDsqL1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApOyAvLyBJRSA1LTdcclxufVxyXG5cclxuLmxvZ2luLXZpc2lvbnBpLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMjJweCAyMnB4IDIycHggMjJweDtcclxuICBoZWlnaHQ6IDIwZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMyODJlMzM7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM0MzRhNTI7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM0MzRhNTI7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4qOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsvKnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsqL1xyXG4gIG91dGxpbmUtY29sb3I6ICNjY2NjYztcclxufVxyXG5cclxuXHJcblxyXG4vKiBNZWRpdW0gc2NyZWVucyAqL1xyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiBvbiBtZWRpdW0gc2l6ZWQgc2NyZWVucywgd2UgY2VudGVyIGl0IGJ5IGV2ZW5seSBkaXN0cmlidXRpbmcgZW1wdHkgc3BhY2UgYXJvdW5kIGl0ZW1zICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAubG9naW4tY29udGFpbmVyIHtcclxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHdlIGFyZSBubyBsb25nZXIgdXNpbmcgcm93IGRpcmVjdGlvbiBidXQgY29sdW1uICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyotd2Via2l0LWZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgcGFkZGluZzogMDsqL1xyXG4gIH1cclxufVxyXG4iLCIvKmh0bWwsYm9keXtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7fSovXG4vKmJvZHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5LTMyNDMzNzVfMTkyMC5qcGcpO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7bWluLWhlaWdodDoxMDB2aDtmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjt9Ki9cbi8qLmFwcC1oZWFkZXJ7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoyO2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7fVxuLmxvZ2luLXdyYXBwZXJ7aGVpZ2h0OjEwMCU7fVxuLnBvc2l0cm9ueHt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojZmZmZmZmO31cbi5ib3h7cG9zaXRpb246cmVsYXRpdmU7dG9wOjQwJTtsZWZ0OjYwJTtvcGFjaXR5OjE7ZmxvYXQ6bGVmdDtwYWRkaW5nOjYwcHggNTBweCA0MHB4IDUwcHg7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czoxMHB4O3RyYW5zZm9ybTpzY2FsZSgxKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEpO3otaW5kZXg6NTttYXgtd2lkdGg6MzMwcHg7fVxuLmJveC5iYWNre3RyYW5zZm9ybTpzY2FsZSguOTUpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOTUpO3RvcDotMjBweDtvcGFjaXR5Oi44O3otaW5kZXg6LTE7fVxuLmJveDpiZWZvcmV7Y29udGVudDpcIlwiO3dpZHRoOjEwMCU7aGVpZ2h0OjMwcHg7Ym9yZGVyLXJhZGl1czoxMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMTBweDtiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO2xlZnQ6MDt0cmFuc2Zvcm06c2NhbGUoLjk1KTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjk1KTt6LWluZGV4Oi0xO31cbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZvcm17bWluLXdpZHRoOjEwMCU7bWF4LXdpZHRoOjMwMHB4O3dpZHRoOjEwMCU7fVxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCwubG9naW4td3JhcHBlciAuYnRuLWJsb2Nre3dpZHRoOjEwMCU7fVxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVye3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jaztmb250LXdlaWdodDo3MDA7fVxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZTozMHB4O21hcmdpbjowO31cbi5sb2dpbi13cmFwcGVyIC5tYXQtY2FyZHtwYWRkaW5nOjQwcHggNzBweCA1MHB4O31cbi5sb2dpbi13cmFwcGVyIC5tYXQtc3Ryb2tlZC1idXR0b257Ym9yZGVyOjFweCBzb2xpZCBjdXJyZW50Q29sb3I7bGluZS1oZWlnaHQ6NTRweDtiYWNrZ3JvdW5kOiNGRkY3RkE7fVxuLmxvZ2luLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOjAuODM3NWVtIDA7fSovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG5ldyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qXG5hLCBwIHtcbiAgY29sb3I6ICMxMjZkYjU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oNSwgaDQsIGgzLCBoMiwgaDEge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnT3BlbiBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSovXG4ubG9naW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIC8qIExvY2F0aW9uIG9mIHRoZSBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9idXNpbmVzc21hbi0zMjEzNjU5XzE5MjAuanBnKTtcbiAgLyogQmFja2dyb3VuZCBpbWFnZSBpcyBjZW50ZXJlZCB2ZXJ0aWNhbGx5IGFuZCBob3Jpem9udGFsbHkgYXQgYWxsIHRpbWVzICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIC8qIEJhY2tncm91bmQgaW1hZ2UgZG9lc24ndCB0aWxlICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC8qIEJhY2tncm91bmQgaW1hZ2UgaXMgZml4ZWQgaW4gdGhlIHZpZXdwb3J0IHNvIHRoYXQgaXQgZG9lc24ndCBtb3ZlIHdoZW5cbiAgICAgdGhlIGNvbnRlbnQncyBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIHRoZSBpbWFnZSdzIGhlaWdodCAqL1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAvKiBUaGlzIGlzIHdoYXQgbWFrZXMgdGhlIGJhY2tncm91bmQgaW1hZ2UgcmVzY2FsZSBiYXNlZFxuICAgICBvbiB0aGUgY29udGFpbmVyJ3Mgc2l6ZSAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvKiBTZXQgYSBiYWNrZ3JvdW5kIGNvbG9yIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWRcbiAgICAgd2hpbGUgdGhlIGJhY2tncm91bmQgaW1hZ2UgaXMgbG9hZGluZyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjQ2O1xufVxuXG4uYm9yZGVyZWQtYm94IHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTI2ZGI1O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDdweDtcbiAgbWFyZ2luOiA2cHg7XG59XG5cbi5jb2x1bW4tZ3JheSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY29sdW1uIHtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbHVtbi1kb3VibGUge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAyO1xufVxuXG4uc2lkZSB7XG4gIGZsZXg6IDAuMztcbn1cblxuLmNlbnRlcmVkLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2VudGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJPcGVuIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItdG9wOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMjZkYjU7XG4gIGJvcmRlci1sZWZ0OiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5sb2dpbi1pbnB1dDphY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzEyNmRiNTtcbn1cblxuLmxvZ2luLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG4uYnV0dG9uIHtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgd2lkdGg6IDMwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6ICMxMjZkYjU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMjZkYjU7XG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogODAlO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5sb2dpbi1pbnB1dDpmb2N1cyB7XG4gIGNvbG9yOiAjY2NjY2M7XG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzEyNmRiNTtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBoZWlnaHQ6IDE0ZW07XG4gIGJhY2tncm91bmQ6ICMyODJlMzM7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjNDM0YTUyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzQzNGE1MjtcbiAgLypib3JkZXItcmFkaXVzOiA1cHg7Ki9cbiAgb3BhY2l0eTogMC44O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xufVxuXG4ubG9naW4tdmlzaW9ucGktZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIycHggMjJweCAyMnB4IDIycHg7XG4gIGhlaWdodDogMjBlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMjgyZTMzO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzQzNGE1MjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM0MzRhNTI7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuKjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAvKnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsqL1xuICBvdXRsaW5lLWNvbG9yOiAjY2NjY2M7XG59XG5cbi8qIE1lZGl1bSBzY3JlZW5zICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubG9naW4tY29udGFpbmVyIHtcbiAgICAvKiBXaGVuIG9uIG1lZGl1bSBzaXplZCBzY3JlZW5zLCB3ZSBjZW50ZXIgaXQgYnkgZXZlbmx5IGRpc3RyaWJ1dGluZyBlbXB0eSBzcGFjZSBhcm91bmQgaXRlbXMgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxufVxuLyogU21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgLyogT24gc21hbGwgc2NyZWVucywgd2UgYXJlIG5vIGxvbmdlciB1c2luZyByb3cgZGlyZWN0aW9uIGJ1dCBjb2x1bW4gKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qLXdlYmtpdC1mbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgcGFkZGluZzogMDsqL1xuICB9XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(formBuilder, authService, router) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.hide = true;
        this.loginForm = this.formBuilder.group({
          username: '',
          password: ''
        }); // remove user from local storage to log user out

        localStorage.clear();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(loginData) {
          var _this2 = this;

          this.authService.login(loginData.username, loginData.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (data) {
            if (_this2.authService.isLoggedIn) {
              // Get the redirect URL from our auth service
              // If no redirect has been set, use the default
              var redirect = _this2.authService.redirectUrl ? _this2.router.parseUrl(_this2.authService.redirectUrl) : '/home'; // Set our navigation extras object
              // that passes on our global query params and fragment

              var navigationExtras = {
                queryParamsHandling: 'preserve',
                preserveFragment: true
              }; // Redirect the user

              _this2.router.navigateByUrl(redirect, navigationExtras);
            }
          });
        }
      }]);

      return LoginComponent;
    }();
    /***/

  }
}]);
//# sourceMappingURL=auth-auth-module-ngfactory-es5.js.map