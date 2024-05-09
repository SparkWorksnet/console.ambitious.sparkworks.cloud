"use strict";
(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([["src_app_type_type_module_ts"],{

/***/ 9586:
/*!*************************************************************************!*\
  !*** ./src/app/type/type-components/type-attributes-table.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeAttributesTableComponent": function() { return /* binding */ TypeAttributesTableComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/api */ 93258);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);







function TypeAttributesTableComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TypeAttributesTableComponent_tr_20_Template_a_click_4_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var uom_r8 = restoredCtx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49); return ctx_r9.openEditAttributeModal(_r6, uom_r8, ctx_r9.unitMeasurements[uom_r8], 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var uom_r8 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](uom_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.unitMeasurements[uom_r8], " ");
} }
function TypeAttributesTableComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.noUnitsTitle);
} }
function TypeAttributesTableComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TypeAttributesTableComponent_tr_43_Template_a_click_4_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); var attribute_r11 = restoredCtx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49); return ctx_r12.openEditAttributeModal(_r6, attribute_r11, ctx_r12.attributes[attribute_r11], 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var attribute_r11 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](attribute_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.attributes[attribute_r11], " ");
} }
function TypeAttributesTableComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.noAttributesTitle);
} }
var _c0 = function () { return { standalone: true }; };
function TypeAttributesTableComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TypeAttributesTableComponent_ng_template_46_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var modal_r14 = restoredCtx.$implicit; return modal_r14.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TypeAttributesTableComponent_ng_template_46_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.addAttribute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TypeAttributesTableComponent_ng_template_46_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.attributeKey = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TypeAttributesTableComponent_ng_template_46_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.attributeValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.attributeType == 0 ? ctx_r5.uomAddModalTitle : ctx_r5.attrAddModalTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.keyTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r5.attributeType == 0 ? ctx_r5.uomKeyPlaceholder : ctx_r5.attrKeyPlaceholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.attributeKey)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.valueTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r5.attributeType == 0 ? ctx_r5.uomValuePlaceholder : ctx_r5.attrValuePlaceholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.attributeValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r5.attributeKey || !ctx_r5.attributeValue)("innerHTML", ctx_r5.attributeAddBtn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function TypeAttributesTableComponent_ng_template_48_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "button", 41);
} if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r21.attributeUpdateBtn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function TypeAttributesTableComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TypeAttributesTableComponent_ng_template_48_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); var modal_r20 = restoredCtx.$implicit; return modal_r20.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TypeAttributesTableComponent_ng_template_48_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.editAttribute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TypeAttributesTableComponent_ng_template_48_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.attributeValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TypeAttributesTableComponent_ng_template_48_button_20_Template, 1, 1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TypeAttributesTableComponent_ng_template_48_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.deleteAttribute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.attributeType == 0 ? ctx_r7.uomEditModalTitle : ctx_r7.attrEditModalTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.keyTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true)("value", ctx_r7.attributeKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.valueTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r7.attributeValue)("ngModel", ctx_r7.attributeValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.attributeValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r7.attributeDeleteBtn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
var TypeAttributesTableComponent = /** @class */ (function () {
    function TypeAttributesTableComponent(activatedRoute, modalService) {
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.objectKeys = Object.keys;
        this.type = null;
        this.attributes = {};
        this.unitMeasurements = {};
        this.attributeKey = '';
        this.attributeValue = '';
        this.typePath = '';
        this.attributeType = 2;
        this.uomPrefix = 'uom:';
        this.attributeAddBtn = 'Add';
        this.attributeUpdateBtn = 'Update';
        this.attributeDeleteBtn = 'Delete';
        this.keyTitle = 'Name';
        this.valueTitle = 'Value';
        this.uomCardTitle = 'Units of Measurement';
        this.uomAddModalTitle = 'Add unit';
        this.uomEditModalTitle = 'Edit unit';
        this.uomKeyPlaceholder = 'Unit name';
        this.uomValuePlaceholder = 'Unit value';
        this.attrCardTitle = 'Attributes';
        this.attrAddModalTitle = 'Add Attribute';
        this.attrEditModalTitle = 'Edit Attribute';
        this.attrKeyPlaceholder = 'Attribute name';
        this.attrValuePlaceholder = 'Attribute value';
        this.noUnitsTitle = 'No units';
        this.noAttributesTitle = 'No attributes';
    }
    TypeAttributesTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.typeName = params.get('typeName');
        });
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathType + this.typeName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.type = response.data;
            if (_this.type.hasOwnProperty('attributes')) {
                var allAttributes_1 = _this.type['attributes'];
                var uoms_1 = {};
                var attr_1 = {};
                var uomPrefix_1 = _this.uomPrefix;
                Object.keys(allAttributes_1).forEach(function (key) {
                    key.substring(0, 4) == uomPrefix_1 ? uoms_1[key.substr(4)] = allAttributes_1[key] : attr_1[key] = allAttributes_1[key];
                });
                _this.unitMeasurements = uoms_1;
                _this.attributes = attr_1;
            }
        })
            .catch(function (error) {
            console.log(error.response);
        });
    };
    TypeAttributesTableComponent.prototype.openAddAttributeModal = function (modal, attrType) {
        this.attributeType = attrType;
        this.modalService.open(modal, { size: 'lg' });
    };
    TypeAttributesTableComponent.prototype.openEditAttributeModal = function (modal, rowKey, rowValue, attrType) {
        this.attributeType = attrType;
        this.attributeKey = rowKey;
        this.attributeValue = rowValue;
        this.typePath = _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathType + this.typeName + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathAttribute;
        this.modalService.open(modal, { size: 'lg' });
    };
    TypeAttributesTableComponent.prototype.ngAfterViewInit = function () {
    };
    TypeAttributesTableComponent.prototype.addAttribute = function () {
        var _a;
        var _this = this;
        var params = { body: (_a = {}, _a[this.attributeType ? this.attributeKey : this.uomPrefix + this.attributeKey] = this.attributeValue, _a) };
        console.log(params);
        this.attributeAddBtn = '<i class="fas fa-spinner fa-spin"></i>';
        var typePath = _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathType + this.typeName + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathAttribute;
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.post(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, typePath, params)
            .then(function (response) {
            console.log(response);
            _this.ngOnInit();
            _this.attributeAddBtn = 'Added!';
            setTimeout(function () {
                _this.attributeAddBtn = 'Add';
            }, 1000);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    TypeAttributesTableComponent.prototype.deleteAttribute = function () {
        var _a;
        var _this = this;
        console.log('deleting attribute key: ' + this.attributeKey);
        var params = { body: (_a = {}, _a[this.attributeType ? this.attributeKey : this.uomPrefix + this.attributeKey] = '', _a) };
        this.attributeDeleteBtn = '<i class="fas fa-spinner fa-spin"></i>';
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.post(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, this.typePath, params)
            .then(function (response) {
            console.log(response);
            _this.ngOnInit();
            _this.modalService.dismissAll();
            _this.attributeDeleteBtn = 'Delete';
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    TypeAttributesTableComponent.prototype.editAttribute = function () {
        var _a;
        var _this = this;
        var params = { body: (_a = {}, _a[this.attributeType ? this.attributeKey : this.uomPrefix + this.attributeKey] = this.attributeValue, _a) };
        console.log(params);
        this.attributeUpdateBtn = '<i class="fas fa-spinner fa-spin"></i>';
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.post(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, this.typePath, params)
            .then(function (response) {
            console.log(response);
            _this.ngOnInit();
            _this.attributeUpdateBtn = 'Updated!';
            setTimeout(function () {
                _this.attributeUpdateBtn = 'Update';
            }, 1000);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    TypeAttributesTableComponent.ɵfac = function TypeAttributesTableComponent_Factory(t) { return new (t || TypeAttributesTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal)); };
    TypeAttributesTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TypeAttributesTableComponent, selectors: [["app-type-attributes-table"]], inputs: { typeName: "typeName" }, decls: 50, vars: 13, consts: [[1, "col-lg-3", "col-md-4"], [1, "card"], [1, "card-body"], [1, "d-flex", "row"], [1, "col-10"], [1, "card-title"], [1, "lstick"], [1, "col-2"], [1, "link", "m-r-10", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-plus", "fa-pull-right"], [1, "table-responsive"], [1, "table", "vm", "no-th-brd", "pro-of-month", "mb-0", "v-middle", 2, "border-collapse", "collapse", "table-layout", "fixed"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["addAttributeModal", ""], ["editAttributeModal", ""], [2, "word-wrap", "break-word"], [2, "cursor", "pointer", "color", "#398bf7", 3, "click"], [1, "modal-header"], ["id", "addAttributeModalLabel", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "addAttributeForm", 3, "ngSubmit"], [1, "modal-body"], [1, "form-check"], [1, "form-group", "row"], ["for", "addAttributeKey", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "id", "addAttributeKey", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelOptions", "ngModelChange"], ["for", "addAttributeValue", 1, "col-sm-2", "col-form-label"], ["type", "text", "id", "addAttributeValue", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelOptions", "ngModelChange"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", "mb-2", "float-right", 3, "disabled", "innerHTML"], ["id", "editAttributeModalLabel", 1, "modal-title"], ["id", "editAttributeForm", 3, "ngSubmit"], ["for", "editAttributeKey", 1, "col-sm-2", "col-form-label"], ["type", "text", "id", "editAttributeKey", 1, "form-control-plaintext", 3, "readOnly", "value"], ["for", "editAttributeValue", 1, "col-sm-2", "col-form-label"], ["type", "text", "id", "editAttributeValue", 1, "form-control", 3, "value", "ngModel", "ngModelOptions", "ngModelChange"], ["type", "submit", "class", "btn btn-primary mb-2 float-right", 3, "innerHTML", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "mb-2", "float-right", 3, "innerHTML", "click"], ["type", "submit", 1, "btn", "btn-primary", "mb-2", "float-right", 3, "innerHTML"]], template: function TypeAttributesTableComponent_Template(rf, ctx) { if (rf & 1) {
            var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TypeAttributesTableComponent_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47); return ctx.openAddAttributeModal(_r4, 0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Unit");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TypeAttributesTableComponent_tr_20_Template, 6, 2, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TypeAttributesTableComponent_tr_21_Template, 4, 1, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "json");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TypeAttributesTableComponent_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47); return ctx.openAddAttributeModal(_r4, 1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "table", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, TypeAttributesTableComponent_tr_43_Template, 6, 2, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, TypeAttributesTableComponent_tr_44_Template, 4, 1, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "json");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, TypeAttributesTableComponent_ng_template_46_Template, 21, 13, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, TypeAttributesTableComponent_ng_template_48_Template, 22, 11, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.uomCardTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.keyTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.unitMeasurements));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 9, ctx.unitMeasurements) == "{}");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.attrCardTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.keyTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.valueTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.attributes));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 11, ctx.attributes) == "{}");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe], encapsulation: 2 });
    return TypeAttributesTableComponent;
}());



/***/ }),

/***/ 44587:
/*!********************************************************!*\
  !*** ./src/app/type/type-components/type.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeComponent": function() { return /* binding */ TypeComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/api */ 93258);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _type_attributes_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-attributes-table.component */ 9586);







function TypeComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.typeName, " ");
} }
function TypeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TypeComponent_div_0_div_1_Template, 11, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-type-attributes-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.type !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("typeName", ctx_r0.typeName);
} }
var TypeComponent = /** @class */ (function () {
    function TypeComponent(activatedRoute, modalService) {
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.type = null;
        this.subtitle = 'This is some text within a card block.';
        this.typeName = null;
    }
    TypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.typeName = params.get('typeName');
        });
        console.log(this.typeName);
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathType + this.typeName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.type = response.data;
        })
            .catch(function (error) {
            console.log(error.response);
        });
    };
    TypeComponent.prototype.ngAfterViewInit = function () { };
    TypeComponent.prototype.openModal = function (modal) {
        this.modalService.open(modal, { size: 'lg' });
    };
    TypeComponent.ɵfac = function TypeComponent_Factory(t) { return new (t || TypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal)); };
    TypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TypeComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-lg-3 col-md-6", 4, "ngIf"], [1, "col-lg-9", "col-md-6"], [1, "row", 3, "typeName"], [1, "col-lg-3", "col-md-6"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "row"], [1, "col-10"], [2, "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], [1, "lstick", 2, "position", "absolute"], [1, "col-2"], [1, "card-text"]], template: function TypeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TypeComponent_div_0_Template, 4, 2, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type !== null);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _type_attributes_table_component__WEBPACK_IMPORTED_MODULE_1__.TypeAttributesTableComponent], encapsulation: 2 });
    return TypeComponent;
}());



/***/ }),

/***/ 50685:
/*!*********************************************************!*\
  !*** ./src/app/type/type-components/types.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypesComponent": function() { return /* binding */ TypesComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/api */ 93258);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);





function TypesComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var type_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r1.typeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r1.deprecated, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/console/types/", type_r1.typeName, "");
} }
var TypesComponent = /** @class */ (function () {
    function TypesComponent() {
        this.types = null;
        this.subtitle = 'This is some text within a card block.';
    }
    TypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Nikos-types");
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathTypes, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.types = response.data.types;
            console.log(_this.types);
        })
            .catch(function (error) {
            console.log(error.response);
        });
    };
    TypesComponent.prototype.ngAfterViewInit = function () { };
    TypesComponent.ɵfac = function TypesComponent_Factory(t) { return new (t || TypesComponent)(); };
    TypesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TypesComponent, selectors: [["ng-component"]], decls: 16, vars: 1, consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "lstick"], [1, "table-responsive"], [1, "table", "vm", "no-th-brd", "pro-of-month", "mb-0", "v-middle"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", "btn-xs", 3, "routerLink"], [1, "fa", "fa-arrow-right"]], template: function TypesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Types List");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Deprecated");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TypesComponent_tr_15_Template, 8, 3, "tr", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.types);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], encapsulation: 2 });
    return TypesComponent;
}());



/***/ }),

/***/ 18475:
/*!*************************************!*\
  !*** ./src/app/type/type.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeModule": function() { return /* binding */ TypeModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-humanize-duration */ 10685);
/* harmony import */ var ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-daterangepicker */ 49762);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 44195);
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-annotation */ 30367);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ 57932);
/* harmony import */ var _type_components_types_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-components/types.component */ 50685);
/* harmony import */ var _type_components_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-components/type.component */ 44587);
/* harmony import */ var _type_components_type_attributes_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type-components/type-attributes-table.component */ 9586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);














var routes = [
    {
        path: 'types',
        data: {
            title: '',
            urls: [{ title: 'Types', url: '/types' }, { title: 'Types' }],
        },
        component: _type_components_types_component__WEBPACK_IMPORTED_MODULE_2__.TypesComponent,
    },
    {
        path: 'types/:typeName',
        data: {
            title: '',
            urls: [{ title: 'Type', url: '/types/:typeName' }, { title: 'Type' }],
        },
        component: _type_components_type_component__WEBPACK_IMPORTED_MODULE_3__.TypeComponent,
    }
];
var TypeModule = /** @class */ (function () {
    function TypeModule() {
    }
    TypeModule.ɵfac = function TypeModule_Factory(t) { return new (t || TypeModule)(); };
    TypeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: TypeModule });
    TypeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule.forRoot({
                    defaults: {},
                    plugins: [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__.default, chart_js__WEBPACK_IMPORTED_MODULE_1__.Decimation]
                }),
                ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_7__.Daterangepicker,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
                ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_11__.NgxHumanizeDurationModule,
            ]] });
    return TypeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TypeModule, { declarations: [_type_components_types_component__WEBPACK_IMPORTED_MODULE_2__.TypesComponent,
        _type_components_type_component__WEBPACK_IMPORTED_MODULE_3__.TypeComponent,
        _type_components_type_attributes_table_component__WEBPACK_IMPORTED_MODULE_4__.TypeAttributesTableComponent], imports: [ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule, ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_7__.Daterangepicker,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_11__.NgxHumanizeDurationModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_type_type_module_ts.js.map