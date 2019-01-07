(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/date/customdate.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/date/customdate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    name:'customdate',\n    computed:{\n        dateTime:()=>{\n            return Date.now();\n        }\n    }\n});\n\n\n//# sourceURL=webpack:///./src/components/date/customdate.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/enemy/enemy.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/enemy/enemy.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _date_customdate_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date/customdate.vue */ \"./src/components/date/customdate.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    name: 'enemy',\n    components: {CustomDate: _date_customdate_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},\n    data() {\n        return {\n            enemyName: 'Enemy One',\n        }\n    },\n    computed: {\n        localSum: () => {\n            return 12\n        },\n        ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapState\"])({\n            sum: state => state.sum,\n            list: state => state.list\n        }),\n    },\n    methods: {\n        add: function () {\n            this.$store.commit('increace');\n        },\n        addStudent: function () {\n            console.log(this.$store.state.list);\n            let payload = {\n                name: document.getElementById('name').value,\n                age: document.getElementById('age').value\n            }\n            this.$store.commit('addStudent', payload);\n            console.log(this.$store.state.list);\n        }\n    }\n});\n\n\n//# sourceURL=webpack:///./src/components/enemy/enemy.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/date/customdate.vue?vue&type=template&id=4795f5c0&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date/customdate.vue?vue&type=template&id=4795f5c0& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [_vm._v(\"\\n    \" + _vm._s(_vm.dateTime) + \"\\n\")])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/date/customdate.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/enemy/enemy.vue?vue&type=template&id=09db1be1&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/enemy/enemy.vue?vue&type=template&id=09db1be1& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"p\", [_vm._v(\"localSum is \" + _vm._s(_vm.localSum))]),\n      _vm._v(\" \"),\n      _c(\"CustomDate\"),\n      _vm._v(\" \"),\n      _c(\"li\", [_vm._v(\"\\n        \" + _vm._s(_vm.enemyName) + \"\\n    \")]),\n      _vm._v(\" \"),\n      _vm._l(_vm.list, function(item) {\n        return _c(\"div\", [\n          _c(\"label\", [\n            _c(\"input\", {\n              attrs: { type: \"checkbox\", name: item.name },\n              domProps: { value: item.age }\n            }),\n            _vm._v(_vm._s(item.name) + \"\\n        \")\n          ])\n        ])\n      }),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _c(\"div\", [\n        _c(\"input\", { attrs: { id: \"age\", placeholder: \"enter age\" } }),\n        _vm._v(\" \"),\n        _c(\"button\", { on: { click: _vm.addStudent } }, [_vm._v(\"添加\")])\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [_vm._v(_vm._s(_vm.sum))]),\n      _vm._v(\" \"),\n      _c(\"button\", { on: { click: _vm.add } }, [_vm._v(\"sum+1\")])\n    ],\n    2\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", [\n      _c(\"input\", { attrs: { id: \"name\", placeholder: \"enter name\" } })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/enemy/enemy.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/date/customdate.vue":
/*!********************************************!*\
  !*** ./src/components/date/customdate.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _customdate_vue_vue_type_template_id_4795f5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customdate.vue?vue&type=template&id=4795f5c0& */ \"./src/components/date/customdate.vue?vue&type=template&id=4795f5c0&\");\n/* harmony import */ var _customdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customdate.vue?vue&type=script&lang=js& */ \"./src/components/date/customdate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _customdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _customdate_vue_vue_type_template_id_4795f5c0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _customdate_vue_vue_type_template_id_4795f5c0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/date/customdate.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/date/customdate.vue?");

/***/ }),

/***/ "./src/components/date/customdate.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/components/date/customdate.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_customdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./customdate.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/date/customdate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_customdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/date/customdate.vue?");

/***/ }),

/***/ "./src/components/date/customdate.vue?vue&type=template&id=4795f5c0&":
/*!***************************************************************************!*\
  !*** ./src/components/date/customdate.vue?vue&type=template&id=4795f5c0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customdate_vue_vue_type_template_id_4795f5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./customdate.vue?vue&type=template&id=4795f5c0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/date/customdate.vue?vue&type=template&id=4795f5c0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customdate_vue_vue_type_template_id_4795f5c0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customdate_vue_vue_type_template_id_4795f5c0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/date/customdate.vue?");

/***/ }),

/***/ "./src/components/enemy/enemy.vue":
/*!****************************************!*\
  !*** ./src/components/enemy/enemy.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enemy_vue_vue_type_template_id_09db1be1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy.vue?vue&type=template&id=09db1be1& */ \"./src/components/enemy/enemy.vue?vue&type=template&id=09db1be1&\");\n/* harmony import */ var _enemy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy.vue?vue&type=script&lang=js& */ \"./src/components/enemy/enemy.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _enemy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _enemy_vue_vue_type_template_id_09db1be1___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _enemy_vue_vue_type_template_id_09db1be1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/enemy/enemy.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/enemy/enemy.vue?");

/***/ }),

/***/ "./src/components/enemy/enemy.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/enemy/enemy.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_enemy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./enemy.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/enemy/enemy.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_enemy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/enemy/enemy.vue?");

/***/ }),

/***/ "./src/components/enemy/enemy.vue?vue&type=template&id=09db1be1&":
/*!***********************************************************************!*\
  !*** ./src/components/enemy/enemy.vue?vue&type=template&id=09db1be1& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_enemy_vue_vue_type_template_id_09db1be1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./enemy.vue?vue&type=template&id=09db1be1& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/enemy/enemy.vue?vue&type=template&id=09db1be1&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_enemy_vue_vue_type_template_id_09db1be1___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_enemy_vue_vue_type_template_id_09db1be1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/enemy/enemy.vue?");

/***/ })

}]);