"use strict";
(() => {
var exports = {};
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/dist/shared/lib/styled-jsx"
const styled_jsx_namespaceObject = require("next/dist/shared/lib/styled-jsx");
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_namespaceObject);
;// CONCATENATED MODULE: ./Components/User.js



const user = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-f3b86069ff43f126",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "jsx-f3b86069ff43f126",
                /*#__PURE__*/ children: props.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "jsx-f3b86069ff43f126",
                children: [
                    "Age: ",
                    props.age
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "f3b86069ff43f126",
                children: "div.jsx-f3b86069ff43f126{margin:30px;text-align:center;border:1px solid#ddd;padding:30px}"
            })
        ]
    })
;
/* harmony default export */ const User = (user);

;// CONCATENATED MODULE: ./pages/auth/index.js



const indexAuthPage = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "The Auth Page ",
                    props.name
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(User, {
                name: "Hend",
                age: "36"
            })
        ]
    })
;
indexAuthPage.getInitialProps = (context)=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name: "Super App (Auth)"
            });
        }, 1000);
    });
    return promise;
};
/* harmony default export */ const auth = (indexAuthPage);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(388));
module.exports = __webpack_exports__;

})();