(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/customers/components/products.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/customers/components/products.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-infinite-loading */ "./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js");
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/API */ "./resources/js/customers/services/API.js");
/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_services_API__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Products",
  components: {
    InfiniteLoading: vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      page: 1,
      products: []
    };
  },
  watch: {},
  beforeMount: function beforeMount() {
    this.getInitialPage();
  },
  mounted: function mounted() {},
  methods: {
    getInitialPage: function getInitialPage() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _services_API__WEBPACK_IMPORTED_MODULE_1__["API"].getProducts(_this.query).then(function (result) {
                _this.products = result.data.products;
              });
              _this.page++;
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getNextPage: function getNextPage($state) {},
    replaceByDefault: function replaceByDefault(e) {
      e.target.src = 'https://s3.amazonaws.com/s3.resal.me/products/attachments/yYDckvWuoP7WjP4ng9Fgbc2rkYb9vrYSjEOxIphV.jpeg';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/customers/components/products.vue?vue&type=template&id=65f56075":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/customers/components/products.vue?vue&type=template&id=65f56075 ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("section", {
    staticClass: "offer",
    staticStyle: {
      "min-height": "100vh"
    }
  }, [_c("div", {
    staticClass: "pb-5 container text-center"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, _vm._l(_vm.giftCards, function (product) {
    return product.display === true ? _c("div", {
      staticClass: "col-md-3 col-6 mt-5 text-left"
    }, [_c("router-link", {
      attrs: {
        to: "/gift-cards-variants/" + product.id
      }
    }, [_c("div", {
      staticClass: "bg-white shadow gry-border"
    }, [_c("div", {
      staticClass: "p-4 position-relative"
    }, [_c("h5", {
      staticClass: "gift_title"
    }, [_vm._v(_vm._s(product.title))])]), _vm._v(" "), _c("div", {
      staticClass: "border-t text-center"
    }, [_c("img", {
      staticClass: "img-fluid w-100 gift_image",
      attrs: {
        src: product.photo,
        alt: product.title
      },
      on: {
        error: _vm.replaceByDefault
      }
    })]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-golden rounded-0 btn-block",
      attrs: {
        type: "button"
      }
    }, [_vm._v("\n                                المــزيد\n                            ")])])])], 1) : _vm._e();
  }), 0), _vm._v(" "), _c("infinite-loading", {
    attrs: {
      spinner: "waveDots"
    },
    on: {
      stateChanger: function stateChanger($event) {},
      distance: function distance($event) {
        12;
      },
      infinite: _vm.getNextPage
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/customers/components/products.vue?vue&type=style&index=0&id=65f56075&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/customers/components/products.vue?vue&type=style&index=0&id=65f56075&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.gift_image {\n    height: 200px;\n    width: 270px !important;\n    object-fit: cover;\n}\n.gift_title {\n    font-size: 16px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/customers/components/products.vue?vue&type=style&index=0&id=65f56075&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/customers/components/products.vue?vue&type=style&index=0&id=65f56075&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=style&index=0&id=65f56075&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/customers/components/products.vue?vue&type=style&index=0&id=65f56075&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/customers/components/products.vue":
/*!********************************************************!*\
  !*** ./resources/js/customers/components/products.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_vue_vue_type_template_id_65f56075__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.vue?vue&type=template&id=65f56075 */ "./resources/js/customers/components/products.vue?vue&type=template&id=65f56075");
/* harmony import */ var _products_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.vue?vue&type=script&lang=js */ "./resources/js/customers/components/products.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _products_vue_vue_type_style_index_0_id_65f56075_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.vue?vue&type=style&index=0&id=65f56075&lang=css */ "./resources/js/customers/components/products.vue?vue&type=style&index=0&id=65f56075&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _products_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_vue_vue_type_template_id_65f56075__WEBPACK_IMPORTED_MODULE_0__["render"],
  _products_vue_vue_type_template_id_65f56075__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/customers/components/products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/customers/components/products.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/customers/components/products.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/customers/components/products.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/customers/components/products.vue?vue&type=style&index=0&id=65f56075&lang=css":
/*!****************************************************************************************************!*\
  !*** ./resources/js/customers/components/products.vue?vue&type=style&index=0&id=65f56075&lang=css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_id_65f56075_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=style&index=0&id=65f56075&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/customers/components/products.vue?vue&type=style&index=0&id=65f56075&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_id_65f56075_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_id_65f56075_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_id_65f56075_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_id_65f56075_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/customers/components/products.vue?vue&type=template&id=65f56075":
/*!**************************************************************************************!*\
  !*** ./resources/js/customers/components/products.vue?vue&type=template&id=65f56075 ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_65f56075__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=template&id=65f56075 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/customers/components/products.vue?vue&type=template&id=65f56075");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_65f56075__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_65f56075__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/customers/services/API.js":
/*!************************************************!*\
  !*** ./resources/js/customers/services/API.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\PHP8\\htdocs\\sahel-task\\resources\\js\\customers\\services\\API.js: Identifier 'API' has already been declared. (19:13)\n\n\u001b[0m \u001b[90m 17 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 18 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 19 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m \u001b[33mAPI\u001b[39m \u001b[33m=\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mAPI\u001b[39m()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 |\u001b[39m\u001b[0m\n    at constructor (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:356:19)\n    at Parser.raise (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:3223:19)\n    at ScopeHandler.checkRedeclarationInScope (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:1496:19)\n    at ScopeHandler.declareName (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:1467:12)\n    at Parser.declareNameFromIdentifier (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:7484:16)\n    at Parser.checkIdentifier (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:7480:12)\n    at Parser.checkLVal (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:7419:12)\n    at Parser.parseVarId (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:13280:10)\n    at Parser.parseVar (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:13258:12)\n    at Parser.parseVarStatement (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:13100:10)\n    at Parser.parseStatementContent (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:12683:23)\n    at Parser.parseStatementLike (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:12588:17)\n    at Parser.parseStatementListItem (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:12568:17)\n    at Parser.parseExportDeclaration (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:13835:17)\n    at Parser.maybeParseExportDeclaration (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:13790:31)\n    at Parser.parseExport (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:13713:29)\n    at Parser.parseStatementContent (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:12715:27)\n    at Parser.parseStatementLike (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:12588:17)\n    at Parser.parseModuleItem (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:12565:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:13189:36)\n    at Parser.parseBlockBody (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:13182:10)\n    at Parser.parseProgram (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:12464:10)\n    at Parser.parseTopLevel (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:12454:25)\n    at Parser.parse (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:14376:10)\n    at parse (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\parser\\lib\\index.js:14417:38)\n    at parser (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\core\\lib\\parser\\index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:64:37)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\core\\lib\\transformation\\index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\@babel\\core\\lib\\transform.js:22:33)\n    at transform.next (<anonymous>)\n    at step (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\gensync\\index.js:261:32)\n    at D:\\PHP8\\htdocs\\sahel-task\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (D:\\PHP8\\htdocs\\sahel-task\\node_modules\\gensync\\index.js:223:11)");

/***/ })

}]);