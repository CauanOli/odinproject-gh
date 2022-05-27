/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Lobster-Regular.ttf */ \"./src/Lobster-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"main {\\n  margin: 1.5rem auto;\\n  text-align: justify;\\n  max-width: 80ch;\\n  width: 80%;\\n  overflow: scroll;\\n  background-color: #2E3532;\\n  color: #E0E2DB;\\n  padding: 2rem;\\n  box-shadow: 2px 4px 10px #2E3532;\\n}\\nmain.home, main.contact {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\nmain.menu .cards {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\\n  grid-template-rows: 340px;\\n  overflow: scroll;\\n  padding: 2rem;\\n  grid-auto-flow: column;\\n  grid-auto-columns: 240px;\\n  gap: 20px;\\n}\\nmain.menu .card {\\n  display: flex;\\n  flex-direction: column;\\n  border: 2px solid #8B2635;\\n  transition: 100ms ease-in-out;\\n  padding: 1rem;\\n}\\nmain.menu .card.show {\\n  border-left: 8px solid #8B2635;\\n}\\nmain.menu .card img {\\n  width: 100%;\\n  height: 100%;\\n}\\nmain.menu .card:hover {\\n  background-color: #8B2635;\\n  cursor: pointer;\\n  padding: 1.2rem;\\n}\\nmain img {\\n  width: 100%;\\n  max-width: 500px;\\n  height: auto;\\n  display: block;\\n  align-self: center;\\n  margin-bottom: 1rem;\\n}\\nmain h1 {\\n  width: 100%;\\n  text-align: center;\\n  font-size: 2rem;\\n  font-family: Lobster;\\n  border-bottom: 2px solid #8B2635;\\n  margin-bottom: 1rem;\\n}\\n\\nbutton {\\n  background-color: #8B2635;\\n  color: #E0E2DB;\\n  border: none;\\n  transition: 200ms ease-in-out;\\n  height: 100%;\\n  width: 100%;\\n}\\nbutton.active {\\n  background-color: #2E3532;\\n  border-top: 4px solid #8B2635;\\n}\\nbutton:hover {\\n  background-color: #2E3532;\\n  border-top: 4px solid #8B2635;\\n  cursor: pointer;\\n}\\nbutton:active {\\n  background-color: #8B2635;\\n  scale: 0.98;\\n}\\n@media (max-width: 800px) {\\n  button:active {\\n    background-color: #E0E2DB;\\n    color: #2E3532;\\n    scale: 0.9;\\n  }\\n}\\n\\nli {\\n  height: 80%;\\n  width: 100%;\\n}\\n@media (min-width: 800px) {\\n  li {\\n    width: 200px;\\n  }\\n}\\nli + li {\\n  margin-left: 4px;\\n}\\n\\nheader {\\n  background-color: #2E3532;\\n  box-shadow: 0px 2px 10px #2E3532;\\n}\\nheader nav {\\n  height: 100%;\\n}\\n\\nul {\\n  display: flex;\\n  list-style: none;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\nfooter {\\n  background-color: #2E3532;\\n  color: #E0E2DB;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n@font-face {\\n  font-family: \\\"Lobster\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: none;\\n  font-size: 18px;\\n  user-select: none;\\n}\\n\\n#content {\\n  display: grid;\\n  grid-template-rows: 80px 1fr 30px;\\n  background-color: #E0E2DB;\\n  color: #2E3532;\\n  height: 100vh;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/sass/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/sass/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/header */ \"./src/js/header.js\");\n/* harmony import */ var _js_views_homeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/views/homeView */ \"./src/js/views/homeView.js\");\n\n\n\n\nconst content = document.querySelector('#content');\nconst main = document.createElement('main');\nconst header = (0,_js_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(main);\n\n(0,_js_views_homeView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(main);\ncontent.appendChild(header);\ncontent.appendChild(main);\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/js/Button.js":
/*!**************************!*\
  !*** ./src/js/Button.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\nclass Button {\n  constructor(name, view) {\n    this.button = document.createElement('button');\n    this.button.classList.add(name);\n    this.addView(view);\n    this.button.textContent = name;\n  }\n\n  addView(view) {\n    this.button.addEventListener('click', view);\n  }\n\n  changeState() {\n    this.button.classList.add('active');\n  }\n\n  cleanState() {\n    this.button.classList = '';\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/Button.js?");

/***/ }),

/***/ "./src/js/Menu.js":
/*!************************!*\
  !*** ./src/js/Menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\nclass Menu {\n  constructor(buttons) {\n    this.buttons = buttons;\n    this.ul = document.createElement('ul');\n    this.nav = document.createElement('nav');\n    this.createMenuList();\n    this.addButtonSwitch();\n    this.nav.appendChild(this.ul);\n  }\n\n  createMenuList() {\n    this.buttons.forEach((btn) => {\n      const li = document.createElement('li');\n      li.appendChild(btn.button);\n      this.ul.appendChild(li);\n    });\n  }\n\n  addButtonSwitch() {\n    this.buttons.forEach((btn) => {\n      btn.button.addEventListener('click', () => {\n        if (btn.state !== 'active') {\n          btn.changeState();\n        }\n        const otherButtons = this.buttons.filter((button) => (button.button !== btn.button));\n        otherButtons.forEach((button) => {\n          button.button.classList = '';\n        });\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/Menu.js?");

/***/ }),

/***/ "./src/js/createMenu.js":
/*!******************************!*\
  !*** ./src/js/createMenu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./src/js/Button.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ \"./src/js/Menu.js\");\n/* harmony import */ var _views_homeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/homeView */ \"./src/js/views/homeView.js\");\n/* harmony import */ var _views_menuView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/menuView */ \"./src/js/views/menuView.js\");\n/* harmony import */ var _views_contactView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/contactView */ \"./src/js/views/contactView.js\");\n\n\n\n\n\n\nfunction createMenu(viewContainer) {\n  const homeButton = new _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Home', () => (0,_views_homeView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(viewContainer));\n  const menuButton = new _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Menu', () => (0,_views_menuView__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(viewContainer));\n  const contactButton = new _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Contact', () => (0,_views_contactView__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(viewContainer));\n\n  homeButton.button.classList.add('active');\n  const buttons = [homeButton, menuButton, contactButton];\n  const menu = new _Menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"](buttons).nav;\n\n  return { menu };\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/createMenu.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showHeader)\n/* harmony export */ });\n/* harmony import */ var _createMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMenu */ \"./src/js/createMenu.js\");\n\n\nfunction showHeader(viewContainer) {\n  const header = document.createElement('header');\n  const menu = (0,_createMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(viewContainer);\n  header.appendChild(menu.menu);\n  return header;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/header.js?");

/***/ }),

/***/ "./src/js/views/contactView.js":
/*!*************************************!*\
  !*** ./src/js/views/contactView.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showContact)\n/* harmony export */ });\n/* harmony import */ var _viewUtils_showView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewUtils/showView */ \"./src/js/views/viewUtils/showView.js\");\n/* harmony import */ var _viewUtils_clearContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewUtils/clearContainer */ \"./src/js/views/viewUtils/clearContainer.js\");\n/* harmony import */ var _viewUtils_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewUtils/View */ \"./src/js/views/viewUtils/View.js\");\n\n\n\n\nfunction showContact(viewContainer) {\n  const title = document.createElement('h1');\n  title.textContent = 'Contact';\n  const contactInfo = document.createElement('p');\n  contactInfo.textContent = 'Contact us, please';\n  const contactView = new _viewUtils_View__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('contact', [title, contactInfo]);\n\n  (0,_viewUtils_clearContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(viewContainer);\n  (0,_viewUtils_showView__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contactView, viewContainer);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/views/contactView.js?");

/***/ }),

/***/ "./src/js/views/homeView.js":
/*!**********************************!*\
  !*** ./src/js/views/homeView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_peter_james_eisenhaure_IyucOyBWPh0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/peter-james-eisenhaure-IyucOyBWPh0-unsplash.jpg */ \"./src/images/peter-james-eisenhaure-IyucOyBWPh0-unsplash.jpg\");\n/* harmony import */ var _viewUtils_clearContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewUtils/clearContainer */ \"./src/js/views/viewUtils/clearContainer.js\");\n/* harmony import */ var _viewUtils_showView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewUtils/showView */ \"./src/js/views/viewUtils/showView.js\");\n/* harmony import */ var _viewUtils_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewUtils/View */ \"./src/js/views/viewUtils/View.js\");\n\n\n\n\n\nfunction showHome(viewContainer) {\n  const title = document.createElement('h1');\n  title.textContent = 'Restaurant';\n  const image = new Image();\n  image.src = _images_peter_james_eisenhaure_IyucOyBWPh0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  const description = document.createElement('div');\n  description.textContent = 'This is a great resturant. Come visit us, or buy online.';\n  const homeView = (0,_viewUtils_View__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('home', [title, image, description]);\n\n  (0,_viewUtils_clearContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(viewContainer);\n  (0,_viewUtils_showView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(homeView, viewContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showHome);\n\n\n//# sourceURL=webpack://restaurant/./src/js/views/homeView.js?");

/***/ }),

/***/ "./src/js/views/menuView.js":
/*!**********************************!*\
  !*** ./src/js/views/menuView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showMenu)\n/* harmony export */ });\n/* harmony import */ var _images_foodOne_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/foodOne.jpg */ \"./src/images/foodOne.jpg\");\n/* harmony import */ var _images_foodTwo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/foodTwo.jpg */ \"./src/images/foodTwo.jpg\");\n/* harmony import */ var _images_foodThree_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/foodThree.jpg */ \"./src/images/foodThree.jpg\");\n/* harmony import */ var _images_foodFour_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/foodFour.jpg */ \"./src/images/foodFour.jpg\");\n/* harmony import */ var _viewUtils_clearContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewUtils/clearContainer */ \"./src/js/views/viewUtils/clearContainer.js\");\n/* harmony import */ var _viewUtils_showView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewUtils/showView */ \"./src/js/views/viewUtils/showView.js\");\n/* harmony import */ var _viewUtils_View__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewUtils/View */ \"./src/js/views/viewUtils/View.js\");\n/* harmony import */ var _viewUtils_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewUtils/Card */ \"./src/js/views/viewUtils/Card.js\");\n\n\n\n\n\n\n\n\n\nfunction showMenu(viewContainer) {\n  const title = document.createElement('h1');\n  title.textContent = 'Menu';\n  const cardsContainer = document.createElement('div');\n  cardsContainer.classList = 'cards';\n\n  const cardOne = new _viewUtils_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('foodOne', _images_foodOne_jpg__WEBPACK_IMPORTED_MODULE_0__);\n  const cardTwo = new _viewUtils_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('foodOne', _images_foodTwo_jpg__WEBPACK_IMPORTED_MODULE_1__);\n  const cardThree = new _viewUtils_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('foodOne', _images_foodThree_jpg__WEBPACK_IMPORTED_MODULE_2__);\n  const cardFour = new _viewUtils_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('foodOne', _images_foodFour_jpg__WEBPACK_IMPORTED_MODULE_3__);\n\n  const cards = [cardOne.card, cardTwo.card, cardThree.card, cardFour.card];\n  cards.forEach((card) => cardsContainer.append(card));\n\n  const menuView = new _viewUtils_View__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('menu', [title, cardsContainer]);\n  (0,_viewUtils_clearContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(viewContainer);\n  (0,_viewUtils_showView__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(menuView, viewContainer);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/views/menuView.js?");

/***/ }),

/***/ "./src/js/views/viewUtils/Card.js":
/*!****************************************!*\
  !*** ./src/js/views/viewUtils/Card.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\nclass Card {\n  constructor(name, image) {\n    this.name = name;\n    this.image = image;\n    this.createCard();\n    this.createCardTitle();\n    this.createCardImage();\n  }\n\n  createCard() {\n    this.card = document.createElement('div');\n    this.card.classList.add('card');\n    this.card.addEventListener('click', () => this.toggleCardMode());\n  }\n\n  createCardImage() {\n    this.cardImage = new Image();\n    this.cardImage.src = this.image;\n    this.card.appendChild(this.cardImage);\n  }\n\n  createCardTitle() {\n    this.cardText = document.createElement('p');\n    this.cardText.textContent = this.name;\n    this.card.appendChild(this.cardText);\n  }\n\n  toggleCardMode() {\n    if (this.card.classList.contains('show')) {\n      this.card.innerHTML = this.name;\n      this.card.appendChild(this.cardImage);\n      this.card.appendChild(this.cardText);\n    } else {\n      this.card.innerHTML = '';\n      this.card.appendChild(this.cardText);\n    }\n    this.card.classList.toggle('show');\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/views/viewUtils/Card.js?");

/***/ }),

/***/ "./src/js/views/viewUtils/View.js":
/*!****************************************!*\
  !*** ./src/js/views/viewUtils/View.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\nfunction View(title, elements) {\n  return { title, elements };\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/views/viewUtils/View.js?");

/***/ }),

/***/ "./src/js/views/viewUtils/clearContainer.js":
/*!**************************************************!*\
  !*** ./src/js/views/viewUtils/clearContainer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearContainer)\n/* harmony export */ });\nfunction clearContainer(container) {\n  container.innerHTML = '';\n  container.classList = '';\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/views/viewUtils/clearContainer.js?");

/***/ }),

/***/ "./src/js/views/viewUtils/showView.js":
/*!********************************************!*\
  !*** ./src/js/views/viewUtils/showView.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showView)\n/* harmony export */ });\nfunction showView(view, container) {\n  view.elements.forEach((element) => {\n    container.appendChild(element);\n  });\n  container.classList.add(view.title);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/views/viewUtils/showView.js?");

/***/ }),

/***/ "./src/Lobster-Regular.ttf":
/*!*********************************!*\
  !*** ./src/Lobster-Regular.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"03c38496322925fec242.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/Lobster-Regular.ttf?");

/***/ }),

/***/ "./src/images/foodFour.jpg":
/*!*********************************!*\
  !*** ./src/images/foodFour.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"733fb395e471c892d71b.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/foodFour.jpg?");

/***/ }),

/***/ "./src/images/foodOne.jpg":
/*!********************************!*\
  !*** ./src/images/foodOne.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"afe33cd38a21915ed67f.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/foodOne.jpg?");

/***/ }),

/***/ "./src/images/foodThree.jpg":
/*!**********************************!*\
  !*** ./src/images/foodThree.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"67f474f0beae80cbdbbf.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/foodThree.jpg?");

/***/ }),

/***/ "./src/images/foodTwo.jpg":
/*!********************************!*\
  !*** ./src/images/foodTwo.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50c5439a3c5c641f3ce0.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/foodTwo.jpg?");

/***/ }),

/***/ "./src/images/peter-james-eisenhaure-IyucOyBWPh0-unsplash.jpg":
/*!********************************************************************!*\
  !*** ./src/images/peter-james-eisenhaure-IyucOyBWPh0-unsplash.jpg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c98da0f3d7f027a88788.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/peter-james-eisenhaure-IyucOyBWPh0-unsplash.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;