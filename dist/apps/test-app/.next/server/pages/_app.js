"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ../../node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(769);
;// CONCATENATED MODULE: ./components/empty-state/empty-state.tsx




/* eslint-disable-next-line */

function EmptyState(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "mt-20 text-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
      className: "mx-auto h-12 w-12 text-gray-400",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "aria-hidden": "true",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        vectorEffect: "non-scaling-stroke",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "mt-2 text-sm font-medium text-gray-900",
      children: "No projects"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "mt-1 text-sm text-gray-500",
      children: "Get started by creating a new project."
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-6",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* PlusIcon */.pOD, {
          className: "-ml-1 mr-2 h-5 w-5",
          "aria-hidden": "true"
        }), "New Project"]
      })
    })]
  });
}
/* harmony default export */ const empty_state = (EmptyState);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "@headlessui/react"
const react_namespaceObject = require("@headlessui/react");
// EXTERNAL MODULE: ../../node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var outline_esm = __webpack_require__(492);
;// CONCATENATED MODULE: ./components/navbar/navbar.tsx








function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
/* eslint-disable-next-line */


function Navbar(props) {
  return /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Disclosure, {
    as: "nav",
    className: "bg-white shadow",
    children: ({
      open
    }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative flex justify-between h-16",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.Disclosure.Button, {
              className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "Open main menu"
              }), open ? /*#__PURE__*/jsx_runtime_.jsx(outline_esm/* XIcon */.b0D, {
                className: "block h-6 w-6",
                "aria-hidden": "true"
              }) : /*#__PURE__*/jsx_runtime_.jsx(outline_esm/* MenuIcon */.Oqj, {
                className: "block h-6 w-6",
                "aria-hidden": "true"
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex-shrink-0 flex items-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "block lg:hidden h-8 w-auto",
                src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
                alt: "Workflow"
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "hidden lg:block h-8 w-auto",
                src: "https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg",
                alt: "Workflow"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "hidden sm:ml-6 sm:flex sm:space-x-8",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                children: "Dashboard"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                children: "Team"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                children: "Projects"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                children: "Calendar"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              type: "button",
              className: "bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "View notifications"
              }), /*#__PURE__*/jsx_runtime_.jsx(outline_esm/* BellIcon */.Dkj, {
                className: "h-6 w-6",
                "aria-hidden": "true"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.Menu, {
              as: "div",
              className: "ml-3 relative",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.Menu.Button, {
                  className: "bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "sr-only",
                    children: "Open user menu"
                  }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "h-8 w-8 rounded-full",
                    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    alt: ""
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Transition, {
                as: external_react_.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.Menu.Items, {
                  className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                    children: ({
                      active
                    }) => /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                      children: "Your Profile"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                    children: ({
                      active
                    }) => /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                      children: "Settings"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                    children: ({
                      active
                    }) => /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                      children: "Sign out"
                    })
                  })]
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Disclosure.Panel, {
        className: "sm:hidden",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "pt-2 pb-4 space-y-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            className: "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
            children: "Dashboard"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            className: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
            children: "Team"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            className: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
            children: "Projects"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            className: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
            children: "Calendar"
          })]
        })
      })]
    })
  });
}
/* harmony default export */ const navbar = (Navbar);
;// CONCATENATED MODULE: ./pages/_app.tsx








function CustomApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Welcome to test-app!"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(navbar, {}), /*#__PURE__*/jsx_runtime_.jsx(empty_state, {})]
  });
}

/* harmony default export */ const _app = (CustomApp);

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [531], () => (__webpack_exec__(666)));
module.exports = __webpack_exports__;

})();