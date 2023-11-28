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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Products",
  components: {
    InfiniteLoading: vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      page: 1,
      products: [],
      cartProducts: [],
      order: null
    };
  },
  watch: {},
  beforeMount: function beforeMount() {
    this.getInitialPage();
  },
  mounted: function mounted() {},
  methods: {
    getInitialPage: function getInitialPage() {},
    inCart: function inCart(id) {
      return this.cartProducts.includes(id);
    },
    addProductToCart: function addProductToCart(product) {
      var _this = this;
      if (!this.cartProducts.includes(product.id)) {
        this.cartProducts.push(product.id);
        _services_API__WEBPACK_IMPORTED_MODULE_1__["APIService"].orderCheckout(this.cartProducts).then(function (result) {
          console.log(result.data.order.orderItems);
          _this.order = result.data.order;
        });
      }
    },
    removeProductFromCart: function removeProductFromCart(product) {
      if (this.cartProducts.includes(product.id)) {
        this.cartProducts = this.cartProducts.filter(function (ProductId) {
          return ProductId !== product.id;
        });
        if (this.cartProducts.length > 0) {
          _services_API__WEBPACK_IMPORTED_MODULE_1__["APIService"].orderCheckout(this.cartProducts).then(function (result) {
            console.log(result.data);
          });
        } else {
          this.order = null;
        }
      }
    },
    getNextPage: function getNextPage($state) {
      var _this2 = this;
      _services_API__WEBPACK_IMPORTED_MODULE_1__["APIService"].getProducts(this.page).then(function (result) {
        if (result.data.products.data.length > 0) {
          var _this2$products;
          (_this2$products = _this2.products).push.apply(_this2$products, _toConsumableArray(result.data.products.data));
          $state.loaded();
          _this2.page++;
        } else {
          $state.complete();
        }
      });
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
  var _this$order;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("section", {
    staticClass: "offer",
    staticStyle: {
      "min-height": "100vh"
    }
  }, [_c("div", {
    staticClass: "pb-5 container text-left"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col-md-9 col-6"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, _vm._l(_vm.products, function (product) {
    var _product$shipped_from;
    return _c("div", {
      staticClass: "col-md-4 col-6 mt-5 text-left"
    }, [_c("div", {
      staticClass: "bg-white shadow gry-border"
    }, [_c("div", {
      staticClass: "p-4 position-relative"
    }, [_c("h5", {
      staticClass: "gift_title"
    }, [_vm._v(_vm._s(product.name))]), _vm._v(" "), _c("h5", {
      staticClass: "gift_title"
    }, [_vm._v("Price:" + _vm._s(product.price) + "$")]), _vm._v(" "), _c("h5", {
      staticClass: "gift_title"
    }, [_vm._v("Shipped From: " + _vm._s(product === null || product === void 0 || (_product$shipped_from = product.shipped_from) === null || _product$shipped_from === void 0 ? void 0 : _product$shipped_from.name))])]), _vm._v(" "), _c("div", {
      staticClass: "border-t text-center"
    }, [_c("img", {
      staticClass: "img-fluid w-100 gift_image",
      attrs: {
        src: "https://s3.amazonaws.com/s3.resal.me/products/attachments/yYDckvWuoP7WjP4ng9Fgbc2rkYb9vrYSjEOxIphV.jpeg",
        alt: product.name
      }
    })]), _vm._v(" "), !_vm.inCart(product.id) ? _c("button", {
      staticClass: "btn btn-golden rounded-0 btn-block",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.addProductToCart(product);
        }
      }
    }, [_vm._v("\n                                    Add To Cart\n                                ")]) : _c("button", {
      staticClass: "btn btn-golden rounded-0 btn-block",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removeProductFromCart(product);
        }
      }
    }, [_vm._v("\n                                    Remove From Cart\n                                ")])])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-6 pt-lg-4"
  }, _vm._l((_this$order = this.order) === null || _this$order === void 0 ? void 0 : _this$order.orderItems, function (orderProduct) {
    var _vm$products$find;
    return _c("div", {
      staticClass: "p-2"
    }, [_c("h4", {
      staticClass: "gift_title font-weight-bolder border-left pl-sm-2"
    }, [_vm._v(_vm._s((_vm$products$find = _vm.products.find(function (product) {
      return product.id === orderProduct.productId;
    })) === null || _vm$products$find === void 0 ? void 0 : _vm$products$find.name))]), _vm._v(" "), _c("h5", {
      staticClass: "gift_title"
    }, [_vm._v("Price:" + _vm._s(orderProduct.price) + "$")]), _vm._v(" "), _c("h5", {
      staticClass: "gift_title"
    }, [_vm._v("Discount:" + _vm._s(orderProduct.discountAmount) + "$")]), _vm._v(" "), _c("h5", {
      staticClass: "gift_title"
    }, [_vm._v("Shipped From: US")]), _vm._v(" "), _c("h5", {
      staticClass: "gift_title"
    }, [_vm._v("Shipped Amount: " + _vm._s(orderProduct.shippingAmount) + "$")])]);
  }), 0)]), _vm._v(" "), _c("infinite-loading", {
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var _vue_customers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue-customers */ "./resources/js/customers/vue-customers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var API = /*#__PURE__*/function () {
  function API() {
    _classCallCheck(this, API);
    this.http = _vue_customers__WEBPACK_IMPORTED_MODULE_0__["http"];
  }
  _createClass(API, [{
    key: "getProducts",
    value: function () {
      var _getProducts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.http.get(this.http.baseUrl + '/api/v1/products?page=' + page);
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getProducts(_x) {
        return _getProducts.apply(this, arguments);
      }
      return getProducts;
    }()
  }, {
    key: "orderCheckout",
    value: function () {
      var _orderCheckout = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(productsIds) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.http.post(this.http.baseUrl + '/api/v1/order-checkout', {
                products: productsIds
              });
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function orderCheckout(_x2) {
        return _orderCheckout.apply(this, arguments);
      }
      return orderCheckout;
    }()
  }]);
  return API;
}();
var APIService = new API();

/***/ })

}]);