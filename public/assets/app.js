webpackJsonp([0],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(128);


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_min_css__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_popper_js_dist_popper__ = __webpack_require__(134);




/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(130);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(132)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js??ref--0-1!../../../postcss-loader/lib/index.js!./bootstrap.min.css", function() {
			var newContent = require("!!../../../css-loader/index.js??ref--0-1!../../../postcss-loader/lib/index.js!./bootstrap.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(131)(undefined);
// imports


// module
exports.push([module.i, "/*!\n * Bootstrap v4.0.0-beta (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */@media print{*,::after,::before{text-shadow:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}html{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}*,::after,::before{-webkit-box-sizing:inherit;box-sizing:inherit}@-ms-viewport{width:device-width}article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff}[tabindex=\"-1\"]:focus{outline:0!important}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}dfn{font-style:italic}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg:not(:root){overflow:hidden}[role=button],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#868e96;text-align:left;caption-side:bottom}th{text-align:left}label{display:inline-block;margin-bottom:.5rem}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.1}.display-2{font-size:5.5rem;font-weight:300;line-height:1.1}.display-3{font-size:4.5rem;font-weight:300;line-height:1.1}.display-4{font-size:3.5rem;font-weight:300;line-height:1.1}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:5px}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#868e96}.blockquote-footer::before{content:\"\\2014   \\A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #ddd;border-radius:.25rem;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#868e96}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}code{padding:.2rem .4rem;font-size:90%;color:#bd4147;background-color:#f8f9fa;border-radius:.25rem}a>code{padding:0;color:inherit;background-color:inherit}kbd{padding:.2rem .4rem;font-size:90%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;margin-top:0;margin-bottom:1rem;font-size:90%;color:#212529}pre code{padding:0;font-size:inherit;color:inherit;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%}.row{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-auto{-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:none}.col-1{-ms-flex:0 0 8.333333%;-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-ms-flex:0 0 16.666667%;-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-ms-flex:0 0 25%;-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-4{-ms-flex:0 0 33.333333%;-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-ms-flex:0 0 41.666667%;-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-ms-flex:0 0 50%;-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-7{-ms-flex:0 0 58.333333%;-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-ms-flex:0 0 66.666667%;-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-ms-flex:0 0 75%;-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-10{-ms-flex:0 0 83.333333%;-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-ms-flex:0 0 91.666667%;-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.order-1{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}.order-2{-ms-flex-order:2;-webkit-box-ordinal-group:3;order:2}.order-3{-ms-flex-order:3;-webkit-box-ordinal-group:4;order:3}.order-4{-ms-flex-order:4;-webkit-box-ordinal-group:5;order:4}.order-5{-ms-flex-order:5;-webkit-box-ordinal-group:6;order:5}.order-6{-ms-flex-order:6;-webkit-box-ordinal-group:7;order:6}.order-7{-ms-flex-order:7;-webkit-box-ordinal-group:8;order:7}.order-8{-ms-flex-order:8;-webkit-box-ordinal-group:9;order:8}.order-9{-ms-flex-order:9;-webkit-box-ordinal-group:10;order:9}.order-10{-ms-flex-order:10;-webkit-box-ordinal-group:11;order:10}.order-11{-ms-flex-order:11;-webkit-box-ordinal-group:12;order:11}.order-12{-ms-flex-order:12;-webkit-box-ordinal-group:13;order:12}@media (min-width:576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-sm-auto{-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:none}.col-sm-1{-ms-flex:0 0 8.333333%;-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-ms-flex:0 0 16.666667%;-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-ms-flex:0 0 25%;-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-sm-4{-ms-flex:0 0 33.333333%;-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-ms-flex:0 0 41.666667%;-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-ms-flex:0 0 50%;-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-sm-7{-ms-flex:0 0 58.333333%;-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-ms-flex:0 0 66.666667%;-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-ms-flex:0 0 75%;-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-sm-10{-ms-flex:0 0 83.333333%;-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-ms-flex:0 0 91.666667%;-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.order-sm-1{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}.order-sm-2{-ms-flex-order:2;-webkit-box-ordinal-group:3;order:2}.order-sm-3{-ms-flex-order:3;-webkit-box-ordinal-group:4;order:3}.order-sm-4{-ms-flex-order:4;-webkit-box-ordinal-group:5;order:4}.order-sm-5{-ms-flex-order:5;-webkit-box-ordinal-group:6;order:5}.order-sm-6{-ms-flex-order:6;-webkit-box-ordinal-group:7;order:6}.order-sm-7{-ms-flex-order:7;-webkit-box-ordinal-group:8;order:7}.order-sm-8{-ms-flex-order:8;-webkit-box-ordinal-group:9;order:8}.order-sm-9{-ms-flex-order:9;-webkit-box-ordinal-group:10;order:9}.order-sm-10{-ms-flex-order:10;-webkit-box-ordinal-group:11;order:10}.order-sm-11{-ms-flex-order:11;-webkit-box-ordinal-group:12;order:11}.order-sm-12{-ms-flex-order:12;-webkit-box-ordinal-group:13;order:12}}@media (min-width:768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-md-auto{-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:none}.col-md-1{-ms-flex:0 0 8.333333%;-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-ms-flex:0 0 16.666667%;-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-ms-flex:0 0 25%;-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-md-4{-ms-flex:0 0 33.333333%;-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-ms-flex:0 0 41.666667%;-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-ms-flex:0 0 50%;-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-md-7{-ms-flex:0 0 58.333333%;-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-ms-flex:0 0 66.666667%;-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-ms-flex:0 0 75%;-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-md-10{-ms-flex:0 0 83.333333%;-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-ms-flex:0 0 91.666667%;-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.order-md-1{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}.order-md-2{-ms-flex-order:2;-webkit-box-ordinal-group:3;order:2}.order-md-3{-ms-flex-order:3;-webkit-box-ordinal-group:4;order:3}.order-md-4{-ms-flex-order:4;-webkit-box-ordinal-group:5;order:4}.order-md-5{-ms-flex-order:5;-webkit-box-ordinal-group:6;order:5}.order-md-6{-ms-flex-order:6;-webkit-box-ordinal-group:7;order:6}.order-md-7{-ms-flex-order:7;-webkit-box-ordinal-group:8;order:7}.order-md-8{-ms-flex-order:8;-webkit-box-ordinal-group:9;order:8}.order-md-9{-ms-flex-order:9;-webkit-box-ordinal-group:10;order:9}.order-md-10{-ms-flex-order:10;-webkit-box-ordinal-group:11;order:10}.order-md-11{-ms-flex-order:11;-webkit-box-ordinal-group:12;order:11}.order-md-12{-ms-flex-order:12;-webkit-box-ordinal-group:13;order:12}}@media (min-width:992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-lg-auto{-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:none}.col-lg-1{-ms-flex:0 0 8.333333%;-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-ms-flex:0 0 16.666667%;-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-ms-flex:0 0 25%;-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-lg-4{-ms-flex:0 0 33.333333%;-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-ms-flex:0 0 41.666667%;-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-ms-flex:0 0 50%;-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-lg-7{-ms-flex:0 0 58.333333%;-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-ms-flex:0 0 66.666667%;-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-ms-flex:0 0 75%;-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-lg-10{-ms-flex:0 0 83.333333%;-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-ms-flex:0 0 91.666667%;-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.order-lg-1{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}.order-lg-2{-ms-flex-order:2;-webkit-box-ordinal-group:3;order:2}.order-lg-3{-ms-flex-order:3;-webkit-box-ordinal-group:4;order:3}.order-lg-4{-ms-flex-order:4;-webkit-box-ordinal-group:5;order:4}.order-lg-5{-ms-flex-order:5;-webkit-box-ordinal-group:6;order:5}.order-lg-6{-ms-flex-order:6;-webkit-box-ordinal-group:7;order:6}.order-lg-7{-ms-flex-order:7;-webkit-box-ordinal-group:8;order:7}.order-lg-8{-ms-flex-order:8;-webkit-box-ordinal-group:9;order:8}.order-lg-9{-ms-flex-order:9;-webkit-box-ordinal-group:10;order:9}.order-lg-10{-ms-flex-order:10;-webkit-box-ordinal-group:11;order:10}.order-lg-11{-ms-flex-order:11;-webkit-box-ordinal-group:12;order:11}.order-lg-12{-ms-flex-order:12;-webkit-box-ordinal-group:13;order:12}}@media (min-width:1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-xl-auto{-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:none}.col-xl-1{-ms-flex:0 0 8.333333%;-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-ms-flex:0 0 16.666667%;-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-ms-flex:0 0 25%;-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-xl-4{-ms-flex:0 0 33.333333%;-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-ms-flex:0 0 41.666667%;-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-ms-flex:0 0 50%;-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-xl-7{-ms-flex:0 0 58.333333%;-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-ms-flex:0 0 66.666667%;-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-ms-flex:0 0 75%;-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-xl-10{-ms-flex:0 0 83.333333%;-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-ms-flex:0 0 91.666667%;-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.order-xl-1{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}.order-xl-2{-ms-flex-order:2;-webkit-box-ordinal-group:3;order:2}.order-xl-3{-ms-flex-order:3;-webkit-box-ordinal-group:4;order:3}.order-xl-4{-ms-flex-order:4;-webkit-box-ordinal-group:5;order:4}.order-xl-5{-ms-flex-order:5;-webkit-box-ordinal-group:6;order:5}.order-xl-6{-ms-flex-order:6;-webkit-box-ordinal-group:7;order:6}.order-xl-7{-ms-flex-order:7;-webkit-box-ordinal-group:8;order:7}.order-xl-8{-ms-flex-order:8;-webkit-box-ordinal-group:9;order:8}.order-xl-9{-ms-flex-order:9;-webkit-box-ordinal-group:10;order:9}.order-xl-10{-ms-flex-order:10;-webkit-box-ordinal-group:11;order:10}.order-xl-11{-ms-flex-order:11;-webkit-box-ordinal-group:12;order:11}.order-xl-12{-ms-flex-order:12;-webkit-box-ordinal-group:13;order:12}}.table{width:100%;max-width:100%;margin-bottom:1rem;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #e9ecef}.table thead th{vertical-align:bottom;border-bottom:2px solid #e9ecef}.table tbody+tbody{border-top:2px solid #e9ecef}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #e9ecef}.table-bordered td,.table-bordered th{border:1px solid #e9ecef}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#dddfe2}.table-hover .table-secondary:hover{background-color:#cfd2d6}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#cfd2d6}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.thead-inverse th{color:#fff;background-color:#212529}.thead-default th{color:#495057;background-color:#e9ecef}.table-inverse{color:#fff;background-color:#212529}.table-inverse td,.table-inverse th,.table-inverse thead th{border-color:#32383e}.table-inverse.table-bordered{border:0}.table-inverse.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-inverse.table-hover tbody tr:hover{background-color:rgba(255,255,255,.075)}@media (max-width:991px){.table-responsive{display:block;width:100%;overflow-x:auto;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive.table-bordered{border:0}}.form-control{display:block;width:100%;padding:.5rem .75rem;font-size:1rem;line-height:1.25;color:#495057;background-color:#fff;background-image:none;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0}.form-control::-webkit-input-placeholder{color:#868e96;opacity:1}.form-control:-ms-input-placeholder{color:#868e96;opacity:1}.form-control::-ms-input-placeholder{color:#868e96;opacity:1}.form-control::placeholder{color:#868e96;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:not([size]):not([multiple]){height:calc(2.25rem + 2px)}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block}.col-form-label{padding-top:calc(.5rem - 1px * 2);padding-bottom:calc(.5rem - 1px * 2);margin-bottom:0}.col-form-label-lg{padding-top:calc(.5rem - 1px * 2);padding-bottom:calc(.5rem - 1px * 2);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem - 1px * 2);padding-bottom:calc(.25rem - 1px * 2);font-size:.875rem}.col-form-legend{padding-top:.5rem;padding-bottom:.5rem;margin-bottom:0;font-size:1rem}.form-control-plaintext{padding-top:.5rem;padding-bottom:.5rem;margin-bottom:0;line-height:1.25;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm,.input-group-lg>.form-control-plaintext.form-control,.input-group-lg>.form-control-plaintext.input-group-addon,.input-group-lg>.input-group-btn>.form-control-plaintext.btn,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.form-control-plaintext.input-group-addon,.input-group-sm>.input-group-btn>.form-control-plaintext.btn{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-sm>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),.input-group-sm>select.input-group-addon:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:calc(1.8125rem + 2px)}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-lg>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),.input-group-lg>select.input-group-addon:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:calc(2.3125rem + 2px)}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;margin-bottom:.5rem}.form-check.disabled .form-check-label{color:#868e96}.form-check-label{padding-left:1.25rem;margin-bottom:0}.form-check-input{position:absolute;margin-top:.25rem;margin-left:-1.25rem}.form-check-input:only-child{position:static}.form-check-inline{display:inline-block}.form-check-inline .form-check-label{vertical-align:middle}.form-check-inline+.form-check-inline{margin-left:.75rem}.invalid-feedback{display:none;margin-top:.25rem;font-size:.875rem;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;width:250px;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(220,53,69,.8);border-radius:.2rem}.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-select:valid,.was-validated .form-control:valid{border-color:#28a745}.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-select.is-valid~.invalid-feedback,.custom-select.is-valid~.invalid-tooltip,.form-control.is-valid~.invalid-feedback,.form-control.is-valid~.invalid-tooltip,.was-validated .custom-select:valid~.invalid-feedback,.was-validated .custom-select:valid~.invalid-tooltip,.was-validated .form-control:valid~.invalid-feedback,.was-validated .form-control:valid~.invalid-tooltip{display:block}.form-check-input.is-valid+.form-check-label,.was-validated .form-check-input:valid+.form-check-label{color:#28a745}.custom-control-input.is-valid~.custom-control-indicator,.was-validated .custom-control-input:valid~.custom-control-indicator{background-color:rgba(40,167,69,.25)}.custom-control-input.is-valid~.custom-control-description,.was-validated .custom-control-input:valid~.custom-control-description{color:#28a745}.custom-file-input.is-valid~.custom-file-control,.was-validated .custom-file-input:valid~.custom-file-control{border-color:#28a745}.custom-file-input.is-valid~.custom-file-control::before,.was-validated .custom-file-input:valid~.custom-file-control::before{border-color:inherit}.custom-file-input.is-valid:focus,.was-validated .custom-file-input:valid:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-select:invalid,.was-validated .form-control:invalid{border-color:#dc3545}.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block}.form-check-input.is-invalid+.form-check-label,.was-validated .form-check-input:invalid+.form-check-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-indicator,.was-validated .custom-control-input:invalid~.custom-control-indicator{background-color:rgba(220,53,69,.25)}.custom-control-input.is-invalid~.custom-control-description,.was-validated .custom-control-input:invalid~.custom-control-description{color:#dc3545}.custom-file-input.is-invalid~.custom-file-control,.was-validated .custom-file-input:invalid~.custom-file-control{border-color:#dc3545}.custom-file-input.is-invalid~.custom-file-control::before,.was-validated .custom-file-input:invalid~.custom-file-control::before{border-color:inherit}.custom-file-input.is-invalid:focus,.was-validated .custom-file-input:invalid:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-ms-flex-align:center;-webkit-box-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-ms-flex-align:center;-webkit-box-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .input-group{width:auto}.form-inline .form-control-label{margin-bottom:0;vertical-align:middle}.form-inline .form-check{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;width:auto;margin-top:0;margin-bottom:0}.form-inline .form-check-label{padding-left:0}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;padding-left:0}.form-inline .custom-control-indicator{position:static;display:inline-block;margin-right:.25rem;vertical-align:text-bottom}.form-inline .has-feedback .form-control-feedback{top:0}}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.5rem .75rem;font-size:1rem;line-height:1.25;border-radius:.25rem;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.btn:focus,.btn:hover{text-decoration:none}.btn.focus,.btn:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(0,123,255,.25);box-shadow:0 0 0 3px rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn.active,.btn:active{background-image:none}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{-webkit-box-shadow:0 0 0 3px rgba(0,123,255,.5);box-shadow:0 0 0 3px rgba(0,123,255,.5)}.btn-primary.disabled,.btn-primary:disabled{background-color:#007bff;border-color:#007bff}.btn-primary.active,.btn-primary:active,.show>.btn-primary.dropdown-toggle{background-color:#0069d9;background-image:none;border-color:#0062cc}.btn-secondary{color:#fff;background-color:#868e96;border-color:#868e96}.btn-secondary:hover{color:#fff;background-color:#727b84;border-color:#6c757d}.btn-secondary.focus,.btn-secondary:focus{-webkit-box-shadow:0 0 0 3px rgba(134,142,150,.5);box-shadow:0 0 0 3px rgba(134,142,150,.5)}.btn-secondary.disabled,.btn-secondary:disabled{background-color:#868e96;border-color:#868e96}.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle{background-color:#727b84;background-image:none;border-color:#6c757d}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{-webkit-box-shadow:0 0 0 3px rgba(40,167,69,.5);box-shadow:0 0 0 3px rgba(40,167,69,.5)}.btn-success.disabled,.btn-success:disabled{background-color:#28a745;border-color:#28a745}.btn-success.active,.btn-success:active,.show>.btn-success.dropdown-toggle{background-color:#218838;background-image:none;border-color:#1e7e34}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{-webkit-box-shadow:0 0 0 3px rgba(23,162,184,.5);box-shadow:0 0 0 3px rgba(23,162,184,.5)}.btn-info.disabled,.btn-info:disabled{background-color:#17a2b8;border-color:#17a2b8}.btn-info.active,.btn-info:active,.show>.btn-info.dropdown-toggle{background-color:#138496;background-image:none;border-color:#117a8b}.btn-warning{color:#111;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#111;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{-webkit-box-shadow:0 0 0 3px rgba(255,193,7,.5);box-shadow:0 0 0 3px rgba(255,193,7,.5)}.btn-warning.disabled,.btn-warning:disabled{background-color:#ffc107;border-color:#ffc107}.btn-warning.active,.btn-warning:active,.show>.btn-warning.dropdown-toggle{background-color:#e0a800;background-image:none;border-color:#d39e00}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{-webkit-box-shadow:0 0 0 3px rgba(220,53,69,.5);box-shadow:0 0 0 3px rgba(220,53,69,.5)}.btn-danger.disabled,.btn-danger:disabled{background-color:#dc3545;border-color:#dc3545}.btn-danger.active,.btn-danger:active,.show>.btn-danger.dropdown-toggle{background-color:#c82333;background-image:none;border-color:#bd2130}.btn-light{color:#111;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#111;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{-webkit-box-shadow:0 0 0 3px rgba(248,249,250,.5);box-shadow:0 0 0 3px rgba(248,249,250,.5)}.btn-light.disabled,.btn-light:disabled{background-color:#f8f9fa;border-color:#f8f9fa}.btn-light.active,.btn-light:active,.show>.btn-light.dropdown-toggle{background-color:#e2e6ea;background-image:none;border-color:#dae0e5}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{-webkit-box-shadow:0 0 0 3px rgba(52,58,64,.5);box-shadow:0 0 0 3px rgba(52,58,64,.5)}.btn-dark.disabled,.btn-dark:disabled{background-color:#343a40;border-color:#343a40}.btn-dark.active,.btn-dark:active,.show>.btn-dark.dropdown-toggle{background-color:#23272b;background-image:none;border-color:#1d2124}.btn-outline-primary{color:#007bff;background-color:transparent;background-image:none;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{-webkit-box-shadow:0 0 0 3px rgba(0,123,255,.5);box-shadow:0 0 0 3px rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary.active,.btn-outline-primary:active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-secondary{color:#868e96;background-color:transparent;background-image:none;border-color:#868e96}.btn-outline-secondary:hover{color:#fff;background-color:#868e96;border-color:#868e96}.btn-outline-secondary.focus,.btn-outline-secondary:focus{-webkit-box-shadow:0 0 0 3px rgba(134,142,150,.5);box-shadow:0 0 0 3px rgba(134,142,150,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#868e96;background-color:transparent}.btn-outline-secondary.active,.btn-outline-secondary:active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#868e96;border-color:#868e96}.btn-outline-success{color:#28a745;background-color:transparent;background-image:none;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{-webkit-box-shadow:0 0 0 3px rgba(40,167,69,.5);box-shadow:0 0 0 3px rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success.active,.btn-outline-success:active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-info{color:#17a2b8;background-color:transparent;background-image:none;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{-webkit-box-shadow:0 0 0 3px rgba(23,162,184,.5);box-shadow:0 0 0 3px rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info.active,.btn-outline-info:active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-warning{color:#ffc107;background-color:transparent;background-image:none;border-color:#ffc107}.btn-outline-warning:hover{color:#fff;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{-webkit-box-shadow:0 0 0 3px rgba(255,193,7,.5);box-shadow:0 0 0 3px rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning.active,.btn-outline-warning:active,.show>.btn-outline-warning.dropdown-toggle{color:#fff;background-color:#ffc107;border-color:#ffc107}.btn-outline-danger{color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{-webkit-box-shadow:0 0 0 3px rgba(220,53,69,.5);box-shadow:0 0 0 3px rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger.active,.btn-outline-danger:active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-light{color:#f8f9fa;background-color:transparent;background-image:none;border-color:#f8f9fa}.btn-outline-light:hover{color:#fff;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{-webkit-box-shadow:0 0 0 3px rgba(248,249,250,.5);box-shadow:0 0 0 3px rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light.active,.btn-outline-light:active,.show>.btn-outline-light.dropdown-toggle{color:#fff;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-dark{color:#343a40;background-color:transparent;background-image:none;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{-webkit-box-shadow:0 0 0 3px rgba(52,58,64,.5);box-shadow:0 0 0 3px rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark.active,.btn-outline-dark:active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-link{font-weight:400;color:#007bff;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link:disabled{background-color:transparent}.btn-link,.btn-link:active,.btn-link:focus{border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#0056b3;text-decoration:underline;background-color:transparent}.btn-link:disabled{color:#868e96}.btn-link:disabled:focus,.btn-link:disabled:hover{text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.fade.show{opacity:1}.collapse{display:none}.collapse.show{display:block}tr.collapse.show{display:table-row}tbody.collapse.show{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;transition:height .35s ease}.dropdown,.dropup{position:relative}.dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropup .dropdown-menu{margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{border-top:0;border-bottom:.3em solid}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background:0 0;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#868e96;background-color:transparent}.show>a{outline:0}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#868e96;white-space:nowrap}.btn-group,.btn-group-vertical{position:relative;display:-ms-inline-flexbox;display:-webkit-inline-box;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-ms-flex:0 1 auto;-webkit-box-flex:0;flex:0 1 auto;margin-bottom:0}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:2}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group,.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn+.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.btn+.dropdown-toggle-split::after{margin-left:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{display:-ms-inline-flexbox;display:-webkit-inline-box;display:inline-flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center}.btn-group-vertical .btn,.btn-group-vertical .btn-group{width:100%}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-top-right-radius:0}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:-ms-flexbox;display:-webkit-box;display:flex;width:100%}.input-group .form-control{position:relative;z-index:2;-ms-flex:1 1 auto;-webkit-box-flex:1;flex:1 1 auto;width:1%;margin-bottom:0}.input-group .form-control:active,.input-group .form-control:focus,.input-group .form-control:hover{z-index:3}.input-group .form-control,.input-group-addon,.input-group-btn{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{white-space:nowrap;vertical-align:middle}.input-group-addon{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.25;color:#495057;text-align:center;background-color:#e9ecef;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.input-group-addon.form-control-sm,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.input-group-addon.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-addon.form-control-lg,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.input-group-addon.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:not(:last-child),.input-group-addon:not(:last-child),.input-group-btn:not(:first-child)>.btn-group:not(:last-child)>.btn,.input-group-btn:not(:first-child)>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group>.btn,.input-group-btn:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:not(:last-child){border-right:0}.input-group .form-control:not(:first-child),.input-group-addon:not(:first-child),.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group>.btn,.input-group-btn:not(:first-child)>.dropdown-toggle,.input-group-btn:not(:last-child)>.btn-group:not(:first-child)>.btn,.input-group-btn:not(:last-child)>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.form-control+.input-group-addon:not(:first-child){border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:3}.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group{margin-right:-1px}.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group{z-index:2;margin-left:-1px}.input-group-btn:not(:first-child)>.btn-group:active,.input-group-btn:not(:first-child)>.btn-group:focus,.input-group-btn:not(:first-child)>.btn-group:hover,.input-group-btn:not(:first-child)>.btn:active,.input-group-btn:not(:first-child)>.btn:focus,.input-group-btn:not(:first-child)>.btn:hover{z-index:3}.custom-control{position:relative;display:-ms-inline-flexbox;display:-webkit-inline-box;display:inline-flex;min-height:1.5rem;padding-left:1.5rem;margin-right:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-indicator{color:#fff;background-color:#007bff}.custom-control-input:focus~.custom-control-indicator{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 3px #007bff;box-shadow:0 0 0 1px #fff,0 0 0 3px #007bff}.custom-control-input:active~.custom-control-indicator{color:#fff;background-color:#b3d7ff}.custom-control-input:disabled~.custom-control-indicator{background-color:#e9ecef}.custom-control-input:disabled~.custom-control-description{color:#868e96}.custom-control-indicator{position:absolute;top:.25rem;left:0;display:block;width:1rem;height:1rem;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#ddd;background-repeat:no-repeat;background-position:center center;background-size:50% 50%}.custom-checkbox .custom-control-indicator{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-indicator{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-indicator{background-color:#007bff;background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-radio .custom-control-indicator{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-indicator{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-controls-stacked{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.custom-controls-stacked .custom-control{margin-bottom:.25rem}.custom-controls-stacked .custom-control+.custom-control{margin-left:0}.custom-select{display:inline-block;max-width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.25;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center;background-size:8px 10px;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select:disabled{color:#868e96;background-color:#e9ecef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{height:calc(1.8125rem + 2px);padding-top:.375rem;padding-bottom:.375rem;font-size:75%}.custom-file{position:relative;display:inline-block;max-width:100%;height:2.5rem;margin-bottom:0}.custom-file-input{min-width:14rem;max-width:100%;height:2.5rem;margin:0;opacity:0}.custom-file-control{position:absolute;top:0;right:0;left:0;z-index:5;height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#495057;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.custom-file-control:lang(en):empty::after{content:\"Choose file...\"}.custom-file-control::before{position:absolute;top:-1px;right:-1px;bottom:-1px;z-index:6;display:block;height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#495057;background-color:#e9ecef;border:1px solid rgba(0,0,0,.15);border-radius:0 .25rem .25rem 0}.custom-file-control:lang(en)::before{content:\"Browse\"}.nav{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#868e96}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #ddd}.nav-tabs .nav-link.disabled{color:#868e96;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#ddd #ddd #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.show>.nav-pills .nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{-ms-flex:1 1 auto;-webkit-box-flex:1;flex:1 1 auto;text-align:center}.nav-justified .nav-item{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}.navbar>.container,.navbar>.container-fluid{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-align:center;-webkit-box-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background:0 0;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media (max-width:575px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.card{position:relative;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card-body{-ms-flex:1 1 auto;-webkit-box-flex:1;flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}@media (min-width:576px){.card-deck{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex:1 0 0%;-webkit-box-flex:1;flex:1 0 0%;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-right:15px;margin-left:15px}}@media (min-width:576px){.card-group{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap}.card-group .card{-ms-flex:1 0 0%;-webkit-box-flex:1;flex:1 0 0%}.card-group .card+.card{margin-left:0;border-left:0}.card-group .card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group .card:first-child .card-img-top{border-top-right-radius:0}.card-group .card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group .card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group .card:last-child .card-img-top{border-top-left-radius:0}.card-group .card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group .card:not(:first-child):not(:last-child){border-radius:0}.card-group .card:not(:first-child):not(:last-child) .card-img-bottom,.card-group .card:not(:first-child):not(:last-child) .card-img-top{border-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-webkit-column-count:3;column-count:3;-webkit-column-gap:1.25rem;column-gap:1.25rem}.card-columns .card{display:inline-block;width:100%}}.breadcrumb{padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb::after{display:block;clear:both;content:\"\"}.breadcrumb-item{float:left}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:#868e96;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#868e96}.pagination{display:-ms-flexbox;display:-webkit-box;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#868e96;pointer-events:none;background-color:#fff;border-color:#ddd}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #ddd}.page-link:focus,.page-link:hover{color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#ddd}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}.badge-primary[href]:focus,.badge-primary[href]:hover{color:#fff;text-decoration:none;background-color:#0062cc}.badge-secondary{color:#fff;background-color:#868e96}.badge-secondary[href]:focus,.badge-secondary[href]:hover{color:#fff;text-decoration:none;background-color:#6c757d}.badge-success{color:#fff;background-color:#28a745}.badge-success[href]:focus,.badge-success[href]:hover{color:#fff;text-decoration:none;background-color:#1e7e34}.badge-info{color:#fff;background-color:#17a2b8}.badge-info[href]:focus,.badge-info[href]:hover{color:#fff;text-decoration:none;background-color:#117a8b}.badge-warning{color:#111;background-color:#ffc107}.badge-warning[href]:focus,.badge-warning[href]:hover{color:#111;text-decoration:none;background-color:#d39e00}.badge-danger{color:#fff;background-color:#dc3545}.badge-danger[href]:focus,.badge-danger[href]:hover{color:#fff;text-decoration:none;background-color:#bd2130}.badge-light{color:#111;background-color:#f8f9fa}.badge-light[href]:focus,.badge-light[href]:hover{color:#111;text-decoration:none;background-color:#dae0e5}.badge-dark{color:#fff;background-color:#343a40}.badge-dark[href]:focus,.badge-dark[href]:hover{color:#fff;text-decoration:none;background-color:#1d2124}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible .close{position:relative;top:-.75rem;right:-1.25rem;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#464a4e;background-color:#e7e8ea;border-color:#dddfe2}.alert-secondary hr{border-top-color:#cfd2d6}.alert-secondary .alert-link{color:#2e3133}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-ms-flexbox;display:-webkit-box;display:flex;overflow:hidden;font-size:.75rem;line-height:1rem;text-align:center;background-color:#e9ecef;border-radius:.25rem}.progress-bar{height:1rem;line-height:1rem;color:#fff;background-color:#007bff;-webkit-transition:width .6s ease;transition:width .6s ease}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}.media{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.media-body{-ms-flex:1;-webkit-box-flex:1;flex:1}.list-group{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item:focus,.list-group-item:hover{text-decoration:none}.list-group-item.disabled,.list-group-item:disabled{color:#868e96;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom:0}.list-group-item-primary{color:#004085;background-color:#b8daff}a.list-group-item-primary,button.list-group-item-primary{color:#004085}a.list-group-item-primary:focus,a.list-group-item-primary:hover,button.list-group-item-primary:focus,button.list-group-item-primary:hover{color:#004085;background-color:#9fcdff}a.list-group-item-primary.active,button.list-group-item-primary.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#464a4e;background-color:#dddfe2}a.list-group-item-secondary,button.list-group-item-secondary{color:#464a4e}a.list-group-item-secondary:focus,a.list-group-item-secondary:hover,button.list-group-item-secondary:focus,button.list-group-item-secondary:hover{color:#464a4e;background-color:#cfd2d6}a.list-group-item-secondary.active,button.list-group-item-secondary.active{color:#fff;background-color:#464a4e;border-color:#464a4e}.list-group-item-success{color:#155724;background-color:#c3e6cb}a.list-group-item-success,button.list-group-item-success{color:#155724}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#155724;background-color:#b1dfbb}a.list-group-item-success.active,button.list-group-item-success.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}a.list-group-item-info,button.list-group-item-info{color:#0c5460}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#0c5460;background-color:#abdde5}a.list-group-item-info.active,button.list-group-item-info.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}a.list-group-item-warning,button.list-group-item-warning{color:#856404}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#856404;background-color:#ffe8a1}a.list-group-item-warning.active,button.list-group-item-warning.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}a.list-group-item-danger,button.list-group-item-danger{color:#721c24}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#721c24;background-color:#f1b0b7}a.list-group-item-danger.active,button.list-group-item-danger.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}a.list-group-item-light,button.list-group-item-light{color:#818182}a.list-group-item-light:focus,a.list-group-item-light:hover,button.list-group-item-light:focus,button.list-group-item-light:hover{color:#818182;background-color:#ececf6}a.list-group-item-light.active,button.list-group-item-light.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}a.list-group-item-dark,button.list-group-item-dark{color:#1b1e21}a.list-group-item-dark:focus,a.list-group-item-dark:hover,button.list-group-item-dark:focus,button.list-group-item-dark:hover{color:#1b1e21;background-color:#b9bbbe}a.list-group-item-dark.active,button.list-group-item-dark.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:focus,.close:hover{color:#000;text-decoration:none;opacity:.75}button.close{padding:0;background:0 0;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;-webkit-transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.show .modal-dialog{-webkit-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between;padding:15px;border-bottom:1px solid #e9ecef}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-ms-flex:1 1 auto;-webkit-box-flex:1;flex:1 1 auto;padding:15px}.modal-footer{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;padding:15px;border-top:1px solid #e9ecef}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:30px auto}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg{max-width:800px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:5px;height:5px}.tooltip.bs-tooltip-auto[x-placement^=top],.tooltip.bs-tooltip-top{padding:5px 0}.tooltip.bs-tooltip-auto[x-placement^=top] .arrow,.tooltip.bs-tooltip-top .arrow{bottom:0}.tooltip.bs-tooltip-auto[x-placement^=top] .arrow::before,.tooltip.bs-tooltip-top .arrow::before{margin-left:-3px;content:\"\";border-width:5px 5px 0;border-top-color:#000}.tooltip.bs-tooltip-auto[x-placement^=right],.tooltip.bs-tooltip-right{padding:0 5px}.tooltip.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.bs-tooltip-right .arrow{left:0}.tooltip.bs-tooltip-auto[x-placement^=right] .arrow::before,.tooltip.bs-tooltip-right .arrow::before{margin-top:-3px;content:\"\";border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.bs-tooltip-auto[x-placement^=bottom],.tooltip.bs-tooltip-bottom{padding:5px 0}.tooltip.bs-tooltip-auto[x-placement^=bottom] .arrow,.tooltip.bs-tooltip-bottom .arrow{top:0}.tooltip.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.tooltip.bs-tooltip-bottom .arrow::before{margin-left:-3px;content:\"\";border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bs-tooltip-auto[x-placement^=left],.tooltip.bs-tooltip-left{padding:0 5px}.tooltip.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.bs-tooltip-left .arrow{right:0}.tooltip.bs-tooltip-auto[x-placement^=left] .arrow::before,.tooltip.bs-tooltip-left .arrow::before{right:0;margin-top:-3px;content:\"\";border-width:5px 0 5px 5px;border-left-color:#000}.tooltip .arrow::before{position:absolute;border-color:transparent;border-style:solid}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;padding:1px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:10px;height:5px}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;border-color:transparent;border-style:solid}.popover .arrow::before{content:\"\";border-width:11px}.popover .arrow::after{content:\"\";border-width:11px}.popover.bs-popover-auto[x-placement^=top],.popover.bs-popover-top{margin-bottom:10px}.popover.bs-popover-auto[x-placement^=top] .arrow,.popover.bs-popover-top .arrow{bottom:0}.popover.bs-popover-auto[x-placement^=top] .arrow::after,.popover.bs-popover-auto[x-placement^=top] .arrow::before,.popover.bs-popover-top .arrow::after,.popover.bs-popover-top .arrow::before{border-bottom-width:0}.popover.bs-popover-auto[x-placement^=top] .arrow::before,.popover.bs-popover-top .arrow::before{bottom:-11px;margin-left:-6px;border-top-color:rgba(0,0,0,.25)}.popover.bs-popover-auto[x-placement^=top] .arrow::after,.popover.bs-popover-top .arrow::after{bottom:-10px;margin-left:-6px;border-top-color:#fff}.popover.bs-popover-auto[x-placement^=right],.popover.bs-popover-right{margin-left:10px}.popover.bs-popover-auto[x-placement^=right] .arrow,.popover.bs-popover-right .arrow{left:0}.popover.bs-popover-auto[x-placement^=right] .arrow::after,.popover.bs-popover-auto[x-placement^=right] .arrow::before,.popover.bs-popover-right .arrow::after,.popover.bs-popover-right .arrow::before{margin-top:-8px;border-left-width:0}.popover.bs-popover-auto[x-placement^=right] .arrow::before,.popover.bs-popover-right .arrow::before{left:-11px;border-right-color:rgba(0,0,0,.25)}.popover.bs-popover-auto[x-placement^=right] .arrow::after,.popover.bs-popover-right .arrow::after{left:-10px;border-right-color:#fff}.popover.bs-popover-auto[x-placement^=bottom],.popover.bs-popover-bottom{margin-top:10px}.popover.bs-popover-auto[x-placement^=bottom] .arrow,.popover.bs-popover-bottom .arrow{top:0}.popover.bs-popover-auto[x-placement^=bottom] .arrow::after,.popover.bs-popover-auto[x-placement^=bottom] .arrow::before,.popover.bs-popover-bottom .arrow::after,.popover.bs-popover-bottom .arrow::before{margin-left:-7px;border-top-width:0}.popover.bs-popover-auto[x-placement^=bottom] .arrow::before,.popover.bs-popover-bottom .arrow::before{top:-11px;border-bottom-color:rgba(0,0,0,.25)}.popover.bs-popover-auto[x-placement^=bottom] .arrow::after,.popover.bs-popover-bottom .arrow::after{top:-10px;border-bottom-color:#fff}.popover.bs-popover-auto[x-placement^=bottom] .popover-header::before,.popover.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:20px;margin-left:-10px;content:\"\";border-bottom:1px solid #f7f7f7}.popover.bs-popover-auto[x-placement^=left],.popover.bs-popover-left{margin-right:10px}.popover.bs-popover-auto[x-placement^=left] .arrow,.popover.bs-popover-left .arrow{right:0}.popover.bs-popover-auto[x-placement^=left] .arrow::after,.popover.bs-popover-auto[x-placement^=left] .arrow::before,.popover.bs-popover-left .arrow::after,.popover.bs-popover-left .arrow::before{margin-top:-8px;border-right-width:0}.popover.bs-popover-auto[x-placement^=left] .arrow::before,.popover.bs-popover-left .arrow::before{right:-11px;border-left-color:rgba(0,0,0,.25)}.popover.bs-popover-auto[x-placement^=left] .arrow::after,.popover.bs-popover-left .arrow::after{right:-10px;border-left-color:#fff}.popover-header{padding:8px 14px;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:9px 14px;color:#212529}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-item{position:relative;display:none;-ms-flex-align:center;-webkit-box-align:center;align-items:center;width:100%;transition:-webkit-transform .6s ease;-webkit-transition:-webkit-transform .6s ease;transition:transform .6s ease;transition:transform .6s ease, -webkit-transform .6s ease;transition:transform .6s ease,-webkit-transform .6s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.carousel-item-next,.carousel-item-prev{position:absolute;top:0}.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translateX(0);transform:translateX(0)}@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.active.carousel-item-right,.carousel-item-next{-webkit-transform:translateX(100%);transform:translateX(100%)}@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){.active.carousel-item-right,.carousel-item-next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translateX(-100%);transform:translateX(-100%)}@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:transparent no-repeat center center;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;right:0;bottom:10px;left:0;z-index:15;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{position:relative;-ms-flex:0 1 auto;-webkit-box-flex:0;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;background-color:rgba(255,255,255,.5)}.carousel-indicators li::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:\"\"}.carousel-indicators li::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:\"\"}.carousel-indicators .active{background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#868e96!important}a.bg-secondary:focus,a.bg-secondary:hover{background-color:#6c757d!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #e9ecef!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#868e96!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-circle{border-radius:50%}.rounded-0{border-radius:0}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-cell{display:table-cell!important}.d-flex{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important}.d-inline-flex{display:-ms-inline-flexbox!important;display:-webkit-inline-box!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important}.d-sm-inline-flex{display:-ms-inline-flexbox!important;display:-webkit-inline-box!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important}.d-md-inline-flex{display:-ms-inline-flexbox!important;display:-webkit-inline-box!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important}.d-lg-inline-flex{display:-ms-inline-flexbox!important;display:-webkit-inline-box!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important}.d-xl-inline-flex{display:-ms-inline-flexbox!important;display:-webkit-inline-box!important;display:inline-flex!important}}.d-print-block{display:none!important}@media print{.d-print-block{display:block!important}}.d-print-inline{display:none!important}@media print{.d-print-inline{display:inline!important}}.d-print-inline-block{display:none!important}@media print{.d-print-inline-block{display:inline-block!important}}@media print{.d-print-none{display:none!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{-ms-flex-direction:row!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important}.flex-column{-ms-flex-direction:column!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important}.flex-row-reverse{-ms-flex-direction:row-reverse!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-ms-flex-direction:column-reverse!important;-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-start{-ms-flex-pack:start!important;-webkit-box-pack:start!important;justify-content:flex-start!important}.justify-content-end{-ms-flex-pack:end!important;-webkit-box-pack:end!important;justify-content:flex-end!important}.justify-content-center{-ms-flex-pack:center!important;-webkit-box-pack:center!important;justify-content:center!important}.justify-content-between{-ms-flex-pack:justify!important;-webkit-box-pack:justify!important;justify-content:space-between!important}.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-ms-flex-align:start!important;-webkit-box-align:start!important;align-items:flex-start!important}.align-items-end{-ms-flex-align:end!important;-webkit-box-align:end!important;align-items:flex-end!important}.align-items-center{-ms-flex-align:center!important;-webkit-box-align:center!important;align-items:center!important}.align-items-baseline{-ms-flex-align:baseline!important;-webkit-box-align:baseline!important;align-items:baseline!important}.align-items-stretch{-ms-flex-align:stretch!important;-webkit-box-align:stretch!important;align-items:stretch!important}.align-content-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row{-ms-flex-direction:row!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important}.flex-sm-column{-ms-flex-direction:column!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important}.flex-sm-row-reverse{-ms-flex-direction:row-reverse!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-ms-flex-direction:column-reverse!important;-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-sm-start{-ms-flex-pack:start!important;-webkit-box-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-ms-flex-pack:end!important;-webkit-box-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-ms-flex-pack:center!important;-webkit-box-pack:center!important;justify-content:center!important}.justify-content-sm-between{-ms-flex-pack:justify!important;-webkit-box-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-ms-flex-align:start!important;-webkit-box-align:start!important;align-items:flex-start!important}.align-items-sm-end{-ms-flex-align:end!important;-webkit-box-align:end!important;align-items:flex-end!important}.align-items-sm-center{-ms-flex-align:center!important;-webkit-box-align:center!important;align-items:center!important}.align-items-sm-baseline{-ms-flex-align:baseline!important;-webkit-box-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-ms-flex-align:stretch!important;-webkit-box-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-sm-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-sm-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row{-ms-flex-direction:row!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important}.flex-md-column{-ms-flex-direction:column!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important}.flex-md-row-reverse{-ms-flex-direction:row-reverse!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-ms-flex-direction:column-reverse!important;-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-md-start{-ms-flex-pack:start!important;-webkit-box-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-ms-flex-pack:end!important;-webkit-box-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-ms-flex-pack:center!important;-webkit-box-pack:center!important;justify-content:center!important}.justify-content-md-between{-ms-flex-pack:justify!important;-webkit-box-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-ms-flex-align:start!important;-webkit-box-align:start!important;align-items:flex-start!important}.align-items-md-end{-ms-flex-align:end!important;-webkit-box-align:end!important;align-items:flex-end!important}.align-items-md-center{-ms-flex-align:center!important;-webkit-box-align:center!important;align-items:center!important}.align-items-md-baseline{-ms-flex-align:baseline!important;-webkit-box-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-ms-flex-align:stretch!important;-webkit-box-align:stretch!important;align-items:stretch!important}.align-content-md-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-md-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-md-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{-ms-flex-direction:row!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important}.flex-lg-column{-ms-flex-direction:column!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important}.flex-lg-row-reverse{-ms-flex-direction:row-reverse!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-ms-flex-direction:column-reverse!important;-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-lg-start{-ms-flex-pack:start!important;-webkit-box-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-ms-flex-pack:end!important;-webkit-box-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-ms-flex-pack:center!important;-webkit-box-pack:center!important;justify-content:center!important}.justify-content-lg-between{-ms-flex-pack:justify!important;-webkit-box-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-ms-flex-align:start!important;-webkit-box-align:start!important;align-items:flex-start!important}.align-items-lg-end{-ms-flex-align:end!important;-webkit-box-align:end!important;align-items:flex-end!important}.align-items-lg-center{-ms-flex-align:center!important;-webkit-box-align:center!important;align-items:center!important}.align-items-lg-baseline{-ms-flex-align:baseline!important;-webkit-box-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-ms-flex-align:stretch!important;-webkit-box-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-lg-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-lg-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{-ms-flex-direction:row!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important}.flex-xl-column{-ms-flex-direction:column!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important}.flex-xl-row-reverse{-ms-flex-direction:row-reverse!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-ms-flex-direction:column-reverse!important;-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-xl-start{-ms-flex-pack:start!important;-webkit-box-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-ms-flex-pack:end!important;-webkit-box-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-ms-flex-pack:center!important;-webkit-box-pack:center!important;justify-content:center!important}.justify-content-xl-between{-ms-flex-pack:justify!important;-webkit-box-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-ms-flex-align:start!important;-webkit-box-align:start!important;align-items:flex-start!important}.align-items-xl-end{-ms-flex-align:end!important;-webkit-box-align:end!important;align-items:flex-end!important}.align-items-xl-center{-ms-flex-align:center!important;-webkit-box-align:center!important;align-items:center!important}.align-items-xl-baseline{-ms-flex-align:baseline!important;-webkit-box-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-ms-flex-align:stretch!important;-webkit-box-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-xl-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-xl-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position: -webkit-sticky) or (position: sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal;-webkit-clip-path:none;clip-path:none}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.m-0{margin:0!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.ml-0{margin-left:0!important}.mx-0{margin-right:0!important;margin-left:0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.m-1{margin:.25rem!important}.mt-1{margin-top:.25rem!important}.mr-1{margin-right:.25rem!important}.mb-1{margin-bottom:.25rem!important}.ml-1{margin-left:.25rem!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-2{margin:.5rem!important}.mt-2{margin-top:.5rem!important}.mr-2{margin-right:.5rem!important}.mb-2{margin-bottom:.5rem!important}.ml-2{margin-left:.5rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-3{margin:1rem!important}.mt-3{margin-top:1rem!important}.mr-3{margin-right:1rem!important}.mb-3{margin-bottom:1rem!important}.ml-3{margin-left:1rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-4{margin:1.5rem!important}.mt-4{margin-top:1.5rem!important}.mr-4{margin-right:1.5rem!important}.mb-4{margin-bottom:1.5rem!important}.ml-4{margin-left:1.5rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-5{margin:3rem!important}.mt-5{margin-top:3rem!important}.mr-5{margin-right:3rem!important}.mb-5{margin-bottom:3rem!important}.ml-5{margin-left:3rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-0{padding:0!important}.pt-0{padding-top:0!important}.pr-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.pl-0{padding-left:0!important}.px-0{padding-right:0!important;padding-left:0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.p-1{padding:.25rem!important}.pt-1{padding-top:.25rem!important}.pr-1{padding-right:.25rem!important}.pb-1{padding-bottom:.25rem!important}.pl-1{padding-left:.25rem!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-2{padding:.5rem!important}.pt-2{padding-top:.5rem!important}.pr-2{padding-right:.5rem!important}.pb-2{padding-bottom:.5rem!important}.pl-2{padding-left:.5rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-3{padding:1rem!important}.pt-3{padding-top:1rem!important}.pr-3{padding-right:1rem!important}.pb-3{padding-bottom:1rem!important}.pl-3{padding-left:1rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-4{padding:1.5rem!important}.pt-4{padding-top:1.5rem!important}.pr-4{padding-right:1.5rem!important}.pb-4{padding-bottom:1.5rem!important}.pl-4{padding-left:1.5rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-5{padding:3rem!important}.pt-5{padding-top:3rem!important}.pr-5{padding-right:3rem!important}.pb-5{padding-bottom:3rem!important}.pl-5{padding-left:3rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-auto{margin:auto!important}.mt-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.mb-auto{margin-bottom:auto!important}.ml-auto{margin-left:auto!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0{margin-top:0!important}.mr-sm-0{margin-right:0!important}.mb-sm-0{margin-bottom:0!important}.ml-sm-0{margin-left:0!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1{margin-top:.25rem!important}.mr-sm-1{margin-right:.25rem!important}.mb-sm-1{margin-bottom:.25rem!important}.ml-sm-1{margin-left:.25rem!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2{margin-top:.5rem!important}.mr-sm-2{margin-right:.5rem!important}.mb-sm-2{margin-bottom:.5rem!important}.ml-sm-2{margin-left:.5rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3{margin-top:1rem!important}.mr-sm-3{margin-right:1rem!important}.mb-sm-3{margin-bottom:1rem!important}.ml-sm-3{margin-left:1rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4{margin-top:1.5rem!important}.mr-sm-4{margin-right:1.5rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.ml-sm-4{margin-left:1.5rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5{margin-top:3rem!important}.mr-sm-5{margin-right:3rem!important}.mb-sm-5{margin-bottom:3rem!important}.ml-sm-5{margin-left:3rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0{padding-top:0!important}.pr-sm-0{padding-right:0!important}.pb-sm-0{padding-bottom:0!important}.pl-sm-0{padding-left:0!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1{padding-top:.25rem!important}.pr-sm-1{padding-right:.25rem!important}.pb-sm-1{padding-bottom:.25rem!important}.pl-sm-1{padding-left:.25rem!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2{padding-top:.5rem!important}.pr-sm-2{padding-right:.5rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pl-sm-2{padding-left:.5rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3{padding-top:1rem!important}.pr-sm-3{padding-right:1rem!important}.pb-sm-3{padding-bottom:1rem!important}.pl-sm-3{padding-left:1rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4{padding-top:1.5rem!important}.pr-sm-4{padding-right:1.5rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pl-sm-4{padding-left:1.5rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5{padding-top:3rem!important}.pr-sm-5{padding-right:3rem!important}.pb-sm-5{padding-bottom:3rem!important}.pl-sm-5{padding-left:3rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto{margin-top:auto!important}.mr-sm-auto{margin-right:auto!important}.mb-sm-auto{margin-bottom:auto!important}.ml-sm-auto{margin-left:auto!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0{margin-top:0!important}.mr-md-0{margin-right:0!important}.mb-md-0{margin-bottom:0!important}.ml-md-0{margin-left:0!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.m-md-1{margin:.25rem!important}.mt-md-1{margin-top:.25rem!important}.mr-md-1{margin-right:.25rem!important}.mb-md-1{margin-bottom:.25rem!important}.ml-md-1{margin-left:.25rem!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2{margin-top:.5rem!important}.mr-md-2{margin-right:.5rem!important}.mb-md-2{margin-bottom:.5rem!important}.ml-md-2{margin-left:.5rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3{margin-top:1rem!important}.mr-md-3{margin-right:1rem!important}.mb-md-3{margin-bottom:1rem!important}.ml-md-3{margin-left:1rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4{margin-top:1.5rem!important}.mr-md-4{margin-right:1.5rem!important}.mb-md-4{margin-bottom:1.5rem!important}.ml-md-4{margin-left:1.5rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5{margin-top:3rem!important}.mr-md-5{margin-right:3rem!important}.mb-md-5{margin-bottom:3rem!important}.ml-md-5{margin-left:3rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-md-0{padding:0!important}.pt-md-0{padding-top:0!important}.pr-md-0{padding-right:0!important}.pb-md-0{padding-bottom:0!important}.pl-md-0{padding-left:0!important}.px-md-0{padding-right:0!important;padding-left:0!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.p-md-1{padding:.25rem!important}.pt-md-1{padding-top:.25rem!important}.pr-md-1{padding-right:.25rem!important}.pb-md-1{padding-bottom:.25rem!important}.pl-md-1{padding-left:.25rem!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2{padding-top:.5rem!important}.pr-md-2{padding-right:.5rem!important}.pb-md-2{padding-bottom:.5rem!important}.pl-md-2{padding-left:.5rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3{padding-top:1rem!important}.pr-md-3{padding-right:1rem!important}.pb-md-3{padding-bottom:1rem!important}.pl-md-3{padding-left:1rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4{padding-top:1.5rem!important}.pr-md-4{padding-right:1.5rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pl-md-4{padding-left:1.5rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5{padding-top:3rem!important}.pr-md-5{padding-right:3rem!important}.pb-md-5{padding-bottom:3rem!important}.pl-md-5{padding-left:3rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto{margin-top:auto!important}.mr-md-auto{margin-right:auto!important}.mb-md-auto{margin-bottom:auto!important}.ml-md-auto{margin-left:auto!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0{margin-top:0!important}.mr-lg-0{margin-right:0!important}.mb-lg-0{margin-bottom:0!important}.ml-lg-0{margin-left:0!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1{margin-top:.25rem!important}.mr-lg-1{margin-right:.25rem!important}.mb-lg-1{margin-bottom:.25rem!important}.ml-lg-1{margin-left:.25rem!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2{margin-top:.5rem!important}.mr-lg-2{margin-right:.5rem!important}.mb-lg-2{margin-bottom:.5rem!important}.ml-lg-2{margin-left:.5rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3{margin-top:1rem!important}.mr-lg-3{margin-right:1rem!important}.mb-lg-3{margin-bottom:1rem!important}.ml-lg-3{margin-left:1rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4{margin-top:1.5rem!important}.mr-lg-4{margin-right:1.5rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.ml-lg-4{margin-left:1.5rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5{margin-top:3rem!important}.mr-lg-5{margin-right:3rem!important}.mb-lg-5{margin-bottom:3rem!important}.ml-lg-5{margin-left:3rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0{padding-top:0!important}.pr-lg-0{padding-right:0!important}.pb-lg-0{padding-bottom:0!important}.pl-lg-0{padding-left:0!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1{padding-top:.25rem!important}.pr-lg-1{padding-right:.25rem!important}.pb-lg-1{padding-bottom:.25rem!important}.pl-lg-1{padding-left:.25rem!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2{padding-top:.5rem!important}.pr-lg-2{padding-right:.5rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pl-lg-2{padding-left:.5rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3{padding-top:1rem!important}.pr-lg-3{padding-right:1rem!important}.pb-lg-3{padding-bottom:1rem!important}.pl-lg-3{padding-left:1rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4{padding-top:1.5rem!important}.pr-lg-4{padding-right:1.5rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pl-lg-4{padding-left:1.5rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5{padding-top:3rem!important}.pr-lg-5{padding-right:3rem!important}.pb-lg-5{padding-bottom:3rem!important}.pl-lg-5{padding-left:3rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto{margin-top:auto!important}.mr-lg-auto{margin-right:auto!important}.mb-lg-auto{margin-bottom:auto!important}.ml-lg-auto{margin-left:auto!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0{margin-top:0!important}.mr-xl-0{margin-right:0!important}.mb-xl-0{margin-bottom:0!important}.ml-xl-0{margin-left:0!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1{margin-top:.25rem!important}.mr-xl-1{margin-right:.25rem!important}.mb-xl-1{margin-bottom:.25rem!important}.ml-xl-1{margin-left:.25rem!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2{margin-top:.5rem!important}.mr-xl-2{margin-right:.5rem!important}.mb-xl-2{margin-bottom:.5rem!important}.ml-xl-2{margin-left:.5rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3{margin-top:1rem!important}.mr-xl-3{margin-right:1rem!important}.mb-xl-3{margin-bottom:1rem!important}.ml-xl-3{margin-left:1rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4{margin-top:1.5rem!important}.mr-xl-4{margin-right:1.5rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.ml-xl-4{margin-left:1.5rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5{margin-top:3rem!important}.mr-xl-5{margin-right:3rem!important}.mb-xl-5{margin-bottom:3rem!important}.ml-xl-5{margin-left:3rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0{padding-top:0!important}.pr-xl-0{padding-right:0!important}.pb-xl-0{padding-bottom:0!important}.pl-xl-0{padding-left:0!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1{padding-top:.25rem!important}.pr-xl-1{padding-right:.25rem!important}.pb-xl-1{padding-bottom:.25rem!important}.pl-xl-1{padding-left:.25rem!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2{padding-top:.5rem!important}.pr-xl-2{padding-right:.5rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pl-xl-2{padding-left:.5rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3{padding-top:1rem!important}.pr-xl-3{padding-right:1rem!important}.pb-xl-3{padding-bottom:1rem!important}.pl-xl-3{padding-left:1rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4{padding-top:1.5rem!important}.pr-xl-4{padding-right:1.5rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pl-xl-4{padding-left:1.5rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5{padding-top:3rem!important}.pr-xl-5{padding-right:3rem!important}.pb-xl-5{padding-bottom:3rem!important}.pl-xl-5{padding-left:3rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto{margin-top:auto!important}.mr-xl-auto{margin-right:auto!important}.mb-xl-auto{margin-bottom:auto!important}.ml-xl-auto{margin-left:auto!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}}.text-justify{text-align:justify!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-normal{font-weight:400}.font-weight-bold{font-weight:700}.font-italic{font-style:italic}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0062cc!important}.text-secondary{color:#868e96!important}a.text-secondary:focus,a.text-secondary:hover{color:#6c757d!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#1e7e34!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#117a8b!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#d39e00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#bd2130!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#dae0e5!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#1d2124!important}.text-muted{color:#868e96!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.visible{visibility:visible!important}.invisible{visibility:hidden!important}", ""]);

// exports


/***/ }),

/***/ 131:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(133);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 133:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.9
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
const longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
let timeoutDuration = 0;
for (let i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  let called = false;
  return () => {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(() => {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  let scheduled = false;
  return () => {
    if (!scheduled) {
      scheduled = true;
      setTimeout(() => {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

const supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  const getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  const css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well
  const { overflow, overflowX, overflowY } = getStyleComputedProperty(element);
  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  const offsetParent = element && element.offsetParent;
  const nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    if (element) {
      return element.ownerDocument.documentElement;
    }

    return document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  const { nodeName } = element;
  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  const order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  const start = order ? element1 : element2;
  const end = order ? element2 : element1;

  // Get common ancestor container
  const range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  const { commonAncestorContainer } = range;

  // Both nodes are inside #document
  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  const element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element, side = 'top') {
  const upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  const nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    const html = element.ownerDocument.documentElement;
    const scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element, subtract = false) {
  const scrollTop = getScroll(element, 'top');
  const scrollLeft = getScroll(element, 'left');
  const modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  const sideA = axis === 'x' ? 'Left' : 'Top';
  const sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles[`border${sideA}Width`], 10) + parseFloat(styles[`border${sideB}Width`], 10);
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
let isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body[`offset${axis}`], body[`scroll${axis}`], html[`client${axis}`], html[`offset${axis}`], html[`scroll${axis}`], isIE10$1() ? html[`offset${axis}`] + computedStyle[`margin${axis === 'Height' ? 'Top' : 'Left'}`] + computedStyle[`margin${axis === 'Height' ? 'Bottom' : 'Right'}`] : 0);
}

function getWindowSizes() {
  const body = document.body;
  const html = document.documentElement;
  const computedStyle = isIE10$1() && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  let rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      const scrollTop = getScroll(element, 'top');
      const scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  const result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  const sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  const width = sizes.width || element.clientWidth || result.right - result.left;
  const height = sizes.height || element.clientHeight || result.bottom - result.top;

  let horizScrollbar = element.offsetWidth - width;
  let vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    const styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  const isIE10 = isIE10$1();
  const isHTML = parent.nodeName === 'HTML';
  const childrenRect = getBoundingClientRect(children);
  const parentRect = getBoundingClientRect(parent);
  const scrollParent = getScrollParent(children);

  const styles = getStyleComputedProperty(parent);
  const borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  const borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  let offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    const marginTop = parseFloat(styles.marginTop, 10);
    const marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  const html = element.ownerDocument.documentElement;
  const relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  const width = Math.max(html.clientWidth, window.innerWidth || 0);
  const height = Math.max(html.clientHeight, window.innerHeight || 0);

  const scrollTop = getScroll(html);
  const scrollLeft = getScroll(html, 'left');

  const offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width,
    height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  const nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  let boundaries = { top: 0, left: 0 };
  const offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    let boundariesNode;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    const offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      const { height, width } = getWindowSizes();
      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea({ width, height }) {
  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement, padding = 0) {
  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  const boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  const rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  const sortedAreas = Object.keys(rects).map(key => _extends({
    key
  }, rects[key], {
    area: getArea(rects[key])
  })).sort((a, b) => b.area - a.area);

  const filteredAreas = sortedAreas.filter(({ width, height }) => width >= popper.clientWidth && height >= popper.clientHeight);

  const computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  const variation = placement.split('-')[1];

  return computedPlacement + (variation ? `-${variation}` : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  const commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  const styles = getComputedStyle(element);
  const x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  const y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  const result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, matched => hash[matched]);
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  const popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  const popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  const isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  const mainSide = isHoriz ? 'top' : 'left';
  const secondarySide = isHoriz ? 'left' : 'top';
  const measurement = isHoriz ? 'height' : 'width';
  const secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(cur => cur[prop] === value);
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  const match = find(arr, obj => obj[prop] === value);
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  const modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(modifier => {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    const fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  let data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(({ name, enabled }) => enabled && name === modifierName);
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  const prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  const upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (let i = 0; i < prefixes.length - 1; i++) {
    const prefix = prefixes[i];
    const toCheck = prefix ? `${prefix}${upperProp}` : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  const ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  const isBody = scrollParent.nodeName === 'BODY';
  const target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  const scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(target => {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(prop => {
    let unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    const value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  const referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  const placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  const { x, y } = options;
  const { popper } = data.offsets;

  // Remove this legacy support in Popper.js v2
  const legacyGpuAccelerationOption = find(data.instance.modifiers, modifier => modifier.name === 'applyStyle').gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  const gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  const offsetParent = getOffsetParent(data.instance.popper);
  const offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  const styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  const offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  const sideA = x === 'bottom' ? 'top' : 'bottom';
  const sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  const prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  let left, top;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = `translate3d(${left}px, ${top}px, 0)`;
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    const invertTop = sideA === 'bottom' ? -1 : 1;
    const invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = `${sideA}, ${sideB}`;
  }

  // Attributes
  const attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  const requesting = find(modifiers, ({ name }) => name === requestingName);

  const isRequired = !!requesting && modifiers.some(modifier => {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    const requesting = `\`${requestingName}\``;
    const requested = `\`${requestedName}\``;
    console.warn(`${requested} modifier is required by ${requesting} modifier in order to work, be sure to include it before ${requesting}!`);
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  let arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  const placement = data.placement.split('-')[0];
  const { popper, reference } = data.offsets;
  const isVertical = ['left', 'right'].indexOf(placement) !== -1;

  const len = isVertical ? 'height' : 'width';
  const sideCapitalized = isVertical ? 'Top' : 'Left';
  const side = sideCapitalized.toLowerCase();
  const altSide = isVertical ? 'left' : 'top';
  const opSide = isVertical ? 'bottom' : 'right';
  const arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  const center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  const css = getStyleComputedProperty(data.instance.popper);
  const popperMarginSide = parseFloat(css[`margin${sideCapitalized}`], 10);
  const popperBorderSide = parseFloat(css[`border${sideCapitalized}Width`], 10);
  let sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {
    [side]: Math.round(sideValue),
    [altSide]: '' // make sure to unset any eventual altSide value from the DOM node
  };

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
const validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement, counter = false) {
  const index = validPlacements.indexOf(placement);
  const arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

const BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  const boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  let placement = data.placement.split('-')[0];
  let placementOpposite = getOppositePlacement(placement);
  let variation = data.placement.split('-')[1] || '';

  let flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach((step, index) => {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    const popperOffsets = data.offsets.popper;
    const refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    const floor = Math.floor;
    const overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    const overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    const overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    const overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    const overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    const overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    const isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    const flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  const { popper, reference } = data.offsets;
  const placement = data.placement.split('-')[0];
  const floor = Math.floor;
  const isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  const side = isVertical ? 'right' : 'bottom';
  const opSide = isVertical ? 'left' : 'top';
  const measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  const split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  const value = +split[1];
  const unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    let element;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    const rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    let size;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  const offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  const useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  const fragments = offset.split(/(\+|\-)/).map(frag => frag.trim());

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  const divider = fragments.indexOf(find(fragments, frag => frag.search(/,|\s/) !== -1));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  const splitRegex = /\s*,\s*|\s+/;
  let ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map((op, index) => {
    // Most of the units rely on the orientation of the popper
    const measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    let mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce((a, b) => {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(str => toValue(str, measurement, popperOffsets, referenceOffsets));
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach((op, index) => {
    op.forEach((frag, index2) => {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, { offset }) {
  const { placement, offsets: { popper, reference } } = data;
  const basePlacement = placement.split('-')[0];

  let offsets;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  let boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  const boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  const order = options.priority;
  let popper = data.offsets.popper;

  const check = {
    primary(placement) {
      let value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return { [placement]: value };
    },
    secondary(placement) {
      const mainSide = placement === 'right' ? 'left' : 'top';
      let value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return { [mainSide]: value };
    }
  };

  order.forEach(placement => {
    const side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  const placement = data.placement;
  const basePlacement = placement.split('-')[0];
  const shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    const { reference, popper } = data.offsets;
    const isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    const side = isVertical ? 'left' : 'top';
    const measurement = isVertical ? 'width' : 'height';

    const shiftOffsets = {
      start: { [side]: reference[side] },
      end: {
        [side]: reference[side] + reference[measurement] - popper[measurement]
      }
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  const refRect = data.offsets.reference;
  const bound = find(data.instance.modifiers, modifier => modifier.name === 'preventOverflow').boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  const placement = data.placement;
  const basePlacement = placement.split('-')[0];
  const { popper, reference } = data.offsets;
  const isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  const subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: () => {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: () => {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
class Popper {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  constructor(reference, popper, options = {}) {
    this.scheduleUpdate = () => requestAnimationFrame(this.update);

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(name => {
      this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(name => _extends({
      name
    }, this.options.modifiers[name]))
    // sort the modifiers by order
    .sort((a, b) => a.order - b.order);

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(modifierOptions => {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(this.reference, this.popper, this.options, modifierOptions, this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    const eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs
  update() {
    return update.call(this);
  }
  destroy() {
    return destroy.call(this);
  }
  enableEventListeners() {
    return enableEventListeners.call(this);
  }
  disableEventListeners() {
    return disableEventListeners.call(this);
  }

  /**
   * Schedule an update, it will run on the next UI update available
   * @method scheduleUpdate
   * @memberof Popper
   */


  /**
   * Collection of utilities useful when writing custom modifiers.
   * Starting from version 1.7, this method is available only if you
   * include `popper-utils.js` before `popper.js`.
   *
   * **DEPRECATION**: This way to access PopperUtils is deprecated
   * and will be removed in v2! Use the PopperUtils module directly instead.
   * Due to the high instability of the methods contained in Utils, we can't
   * guarantee them to follow semver. Use them at your own risk!
   * @static
   * @private
   * @type {Object}
   * @deprecated since version 1.8
   * @member Utils
   * @memberof Popper
   */
}

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* unused harmony default export */ var _unused_webpack_default_export = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(49)))

/***/ })

},[127]);