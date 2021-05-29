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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\n.header {\\n  border-bottom: 4px solid #e2e8fe;\\n}\\n\\n.nav-logo {\\n  font-size: 3rem;\\n  font-weight: 900;\\n  color: #482ff7;\\n}\\n\\n.top-navbar {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 1rem 1.5rem;\\n}\\n\\n.bar {\\n  display: block;\\n  width: 25px;\\n  height: 3px;\\n  margin: 5px auto;\\n  -webkit-transition: all 0.3s ease-in-out;\\n  transition: all 0.3s ease-in-out;\\n  background-color: #101010;\\n}\\n\\n.hamburger {\\n  display: none;\\n}\\n\\n.container {\\n  margin-top: 1rem;\\n  display: grid;\\n  grid-template-columns: 1fr 4fr;\\n}\\n\\n.main-content {\\n  margin: 0 1rem 0 1rem;\\n}\\n\\n.sidebar {\\n  margin-left: 2rem;\\n}\\n\\n.side-navbar,\\n.nav-menu {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  row-gap: 1rem;\\n}\\n\\n.nav-link {\\n  font-size: 1.5rem;\\n  font-weight: 400;\\n  color: #475569;\\n}\\n\\n.nav-link:hover {\\n  color: #101010;\\n}\\n\\n.user-projects-header {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.add-project {\\n  margin-left: 1rem;\\n  cursor: pointer;\\n}\\n\\n.add-todo-container {\\n  display: none;\\n}\\n\\n.add-todo {\\n  display: flex;\\n  max-width: 8rem;\\n  padding: 0.5rem;\\n  align-items: center;\\n  background-color: #eeeeee;\\n  cursor: pointer;\\n  border-radius: 0.3rem;\\n  border: 1px solid transparent;\\n}\\n\\n.add-todo:hover {\\n  border: 1px solid #101010;\\n}\\n\\n.add-todo span {\\n  margin-left: 0.5rem;\\n}\\n\\n.material-icons.md-18 { font-size: 18px; }\\n.material-icons.md-24 { font-size: 24px; }\\n.material-icons.md-36 { font-size: 36px; }\\n.material-icons.md-48 { font-size: 48px; }\\n\\n@media only screen and (max-width: 480px) {\\n  .sidebar {\\n    margin: 1rem 0 0 0;\\n    position: fixed;\\n    left: -100%;\\n    top: 5rem;\\n    background-color: #fff;\\n    width: 100%;\\n    border-radius: 10px;\\n    text-align: center;\\n    transition: 0.3s;\\n    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);\\n  }\\n\\n  .container {\\n    grid-template-columns: 1fr;\\n  }\\n\\n  .sidebar.active {\\n    left: 0;\\n  }\\n\\n  .side-navbar {\\n    align-items: center;\\n  }\\n\\n  .nav-item {\\n    margin: 1rem 0;\\n  }\\n\\n  .hamburger {\\n    display: block;\\n    cursor: pointer;\\n  }\\n\\n  .hamburger.active .bar:nth-child(2) {\\n    opacity: 0;\\n  }\\n\\n  .hamburger.active .bar:nth-child(1) {\\n    transform: translateY(8px) rotate(45deg)\\n  }\\n\\n  .hamburger.active .bar:nth-child(3) {\\n    transform: translateY(-8px) rotate(-45deg);\\n  }\\n}\\n\\ninput {\\n  border: none;\\n  font-size: large;\\n}\\n\\ninput:focus {\\n  outline: none;\\n}\\n\\n.centered {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.add-project-popup,\\n.add-todo-popup {\\n  display: none;\\n  z-index: 5;\\n  border: 1px #475569 solid;\\n  width: 25rem;\\n  height: 6rem;\\n  padding: 0.5rem 1.5rem 0.5rem 1.5rem;\\n  background-color: #fff;\\n}\\n\\n.add-todo-popup {\\n  height: 15rem;\\n}\\n\\n.add-project-popup .form-container,\\n.add-todo-popup .form-container {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 1.5rem;\\n}\\n\\n.add-project-popup .action-bar,\\n.add-todo-popup .action-bar {\\n  display: flex;\\n  padding-bottom: 0.5rem;\\n  justify-content: space-between;\\n  border-bottom: 1px #475569 solid;\\n  font-size: 1.2rem;\\n  font-weight: 400;\\n}\\n\\n.clickable {\\n  color: #475569;\\n  cursor: pointer; \\n}\\n\\n.clickable:hover {\\n  color: #101010;\\n}\\n\\n.active {\\n  color: #101010;\\n}\\n\\n.user-projects .nav-item {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.user-projects .nav-link {\\n  margin-left: 1rem;\\n}\\n\\n.current-project {\\n  font-size: 2rem;\\n  font-weight: 500;\\n}\\n\\n.current-project-container {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.disable-div {\\n  position: fixed;\\n  padding: 0;\\n  margin: 0;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 0.5;\\n  background-color: black;\\n  z-index: 1;\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/uid/dist/index.mjs":
/*!*****************************************!*\
  !*** ./node_modules/uid/dist/index.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"uid\": () => (/* binding */ uid)\n/* harmony export */ });\nvar IDX=256, HEX=[], SIZE=256, BUFFER;\nwhile (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);\n\nfunction uid(len) {\n\tvar i=0, tmp=(len || 11);\n\tif (!BUFFER || ((IDX + tmp) > SIZE*2)) {\n\t\tfor (BUFFER='',IDX=0; i < SIZE; i++) {\n\t\t\tBUFFER += HEX[Math.random() * 256 | 0];\n\t\t}\n\t}\n\n\treturn BUFFER.substring(IDX, IDX++ + tmp);\n}\n\n\n//# sourceURL=webpack://todo-list/./node_modules/uid/dist/index.mjs?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _logic_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/Project */ \"./src/logic/Project.js\");\n/* harmony import */ var _logic_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/TodoList */ \"./src/logic/TodoList.js\");\n/* harmony import */ var _logic_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/Todo */ \"./src/logic/Todo.js\");\n\n\n\n\n\nconst todoList = new _logic_TodoList__WEBPACK_IMPORTED_MODULE_2__.TodoList()\n\nconst hamburger = document.querySelector('.hamburger')\nconst sidebar = document.querySelector('.sidebar')\n\nconst userProjects = document.querySelector('.user-projects')\nconst defaultProjects = document.querySelector('.default-projects')\nconst currentProject = document.querySelector('.current-project')\nconst addTodoContainer = document.querySelector('.add-todo-container')\nconst maincontent = document.querySelector('.main-content')\nconst todos = document.querySelector('.todos')\nconst disableDiv = document.querySelector('.disable-div')\n\n// Project\nconst addProject = document.querySelector('.add-project')\nconst addProjectPopup = document.querySelector('.add-project-popup')\nconst addProjectCancel = document.querySelector('.form-container .cancel')\nconst projectTitle = document.querySelector('.project-title')\nconst addProjectOk = document.querySelector('.form-container .ok')\n\n// Todo\nconst addTodo = document.querySelector('.add-todo')\nconst addTodoPopup = document.querySelector('.add-todo-popup')\nconst addTodoClose = document.querySelector('.form-container .close')\nconst todoTitle = document.querySelector('.todo-title')\nconst todoDescription = document.querySelector('.todo-description')\nconst todoDueDate = document.querySelector('.todo-duedate')\nconst addTodoSave = document.querySelector('.form-container .save')\n\nfunction createProjectDom(project, isDefault=false) {\n  const projectDom = document.createElement('li')\n  projectDom.setAttribute('id', project.id)\n  projectDom.classList.add('nav-item')\n  const deleteProject = document.createElement('span')\n  deleteProject.classList.add('material-icons', 'clickable')\n  deleteProject.textContent = 'delete_outline'\n  deleteProject.addEventListener('click', () => {\n    // Remove from sidebar\n    userProjects.removeChild(projectDom)\n    // If it's the current project clear todos both from DOM and todoList\n    todoList.remove(project)\n    currentProject.textContent = ''\n    todos.textContent = ''\n    addTodoContainer.style.display = 'none'\n  })\n  if (!isDefault) {\n    projectDom.appendChild(deleteProject)\n  }\n  const projectLink = document.createElement('a')\n  projectLink.classList.add('nav-link')\n  projectLink.setAttribute('id', project.id)\n  projectLink.setAttribute('href', '#')\n  projectLink.textContent = project.title.slice(0, 10)\n  projectLink.addEventListener('click', () => {\n    // Mark it as current project\n    const allProjects = document.querySelectorAll('.nav-link')\n    allProjects.forEach(link => {\n      if (link.id !== projectLink.id) {\n        link.classList.remove('active')\n      } else {\n        link.classList.add('active')\n        currentProject.textContent = link.textContent\n        currentProject.setAttribute('id', project.id)\n      }\n    })\n    // If hamburger is active then, hide the nav-menu and add option to create new todo\n    // expect Today, This week\n    if (['Today', 'This week'].includes(project.title)) {\n      addTodoContainer.style.display = 'none'\n    } else {\n      addTodoContainer.style.display = 'block'\n    }\n    sidebar.classList.toggle('active')\n    hamburger.classList.toggle('active')\n    // Render all todos for that project\n    todos.textContent = ''\n    todos.append(...project.items.map(createTodoDom))\n  })\n  projectDom.appendChild(projectLink)\n  addProjectPopup.style.display = 'none'\n\n  return projectDom\n}\n\nfunction createTodoDom(todo) {\n  const todoDom = document.createElement('div')\n  todoDom.textContent = todo.title\n  return todoDom\n}\n\nfunction loadDefaultProjects() {\n  const inbox = new _logic_Project__WEBPACK_IMPORTED_MODULE_1__.Project('Inbox')\n  const today = new _logic_Project__WEBPACK_IMPORTED_MODULE_1__.Project('Today')\n  const thisWeek = new _logic_Project__WEBPACK_IMPORTED_MODULE_1__.Project('This week')\n\n  todoList.add(inbox, today, thisWeek)\n\n  defaultProjects.append(\n    createProjectDom(inbox, true),\n    createProjectDom(today, true),\n    createProjectDom(thisWeek, true)\n  )\n}\n\nhamburger.addEventListener('click', () => {\n  if (addProjectPopup.style.display !== 'none') {\n    addProjectPopup.style.display = 'none'\n  }\n  sidebar.classList.toggle('active')\n  hamburger.classList.toggle('active')\n})\n\n// Project event listeners\naddProject.addEventListener('click', () => {\n  disableDiv.style.display = 'block'\n  addTodoPopup.style.display = 'none'\n  addProjectPopup.style.display = 'block'\n  sidebar.classList.toggle('active')\n  hamburger.classList.toggle('active')\n})\n\naddProjectCancel.addEventListener('click', () => {\n  disableDiv.style.display = 'none'\n  projectTitle.value = ''\n  addProjectPopup.style.display = 'none'\n  sidebar.classList.toggle('active')\n  hamburger.classList.toggle('active')\n})\n\naddProjectOk.addEventListener('click', () => {\n  if (!projectTitle.value) return\n  disableDiv.style.display = 'none'\n  const newProject = new _logic_Project__WEBPACK_IMPORTED_MODULE_1__.Project(projectTitle.value)\n  todoList.add(newProject)\n  userProjects.appendChild(createProjectDom(newProject))\n  projectTitle.value = ''\n  sidebar.classList.toggle('active')\n  hamburger.classList.toggle('active')\n})\n\n\n// Todo event listeners\naddTodo.addEventListener('click', () => {\n  addProjectPopup.style.display = 'none'\n  disableDiv.style.display = 'block'\n  addTodoPopup.style.display = 'block'\n})\n\naddTodoClose.addEventListener('click', () => {\n  todoTitle.value = ''\n  todoDescription.value = ''\n  todoDueDate.value = ''\n  addTodoPopup.style.display = 'none'\n  disableDiv.style.display = 'none'\n})\n\naddTodoSave.addEventListener('click', () => {\n  if (!todoTitle.value) return\n  disableDiv.style.display = 'none'\n  const newTodo = new _logic_Todo__WEBPACK_IMPORTED_MODULE_3__.Todo(todoTitle.value, todoDescription.value, todoDueDate.value)\n  const project = todoList.items.find(item => item.id === currentProject.id)\n  project.add(newTodo)\n  todos.appendChild(createTodoDom(newTodo))\n  todoTitle.value = ''\n  todoDescription.value = ''\n  todoDueDate.value = ''\n  addTodoPopup.style.display = 'none'\n})\n\nloadDefaultProjects()\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/logic/Collection.js":
/*!*********************************!*\
  !*** ./src/logic/Collection.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Collection\": () => (/* binding */ Collection)\n/* harmony export */ });\nconst Collection = SuperClass => class extends SuperClass {\n\n  _items = []\n\n  add(...items) {\n    this._items.push(...items)\n  }\n\n  remove(...items) {\n    items.forEach(item => this._items.splice(this._items.indexOf(item), 1))\n  }\n\n  get items() {\n    return this._items\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/logic/Collection.js?");

/***/ }),

/***/ "./src/logic/Project.js":
/*!******************************!*\
  !*** ./src/logic/Project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/logic/Task.js\");\n/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection */ \"./src/logic/Collection.js\");\n\n\n\nclass Project extends (0,_Collection__WEBPACK_IMPORTED_MODULE_1__.Collection)(_Task__WEBPACK_IMPORTED_MODULE_0__.Task) {\n  constructor(title) {\n    super(title)\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/logic/Project.js?");

/***/ }),

/***/ "./src/logic/Task.js":
/*!***************************!*\
  !*** ./src/logic/Task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uid */ \"./node_modules/uid/dist/index.mjs\");\n\n\nclass Task {\n  constructor(title = '', description = '', dueDate = new Date()) {\n    this._title = title\n    this._description = description\n    this._dueDate = dueDate\n    this._id = (0,uid__WEBPACK_IMPORTED_MODULE_0__.uid)(16)\n  }\n\n  get title() { return this._title }\n\n  get description() { return this._description }\n\n  get dueDate() { return this._dueDate }\n\n  get id() { return this._id }\n\n  set title(value) {\n    this._title = value\n  }\n\n  set description(value) {\n    this._description = value\n  }\n\n  set dueDate(value) {\n    this._dueDate = value \n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/logic/Task.js?");

/***/ }),

/***/ "./src/logic/Todo.js":
/*!***************************!*\
  !*** ./src/logic/Todo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/logic/Task.js\");\n\n\nclass Todo extends _Task__WEBPACK_IMPORTED_MODULE_0__.Task {\n  constructor(title, description, dueDate) {\n    super(title, description, dueDate)\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/logic/Todo.js?");

/***/ }),

/***/ "./src/logic/TodoList.js":
/*!*******************************!*\
  !*** ./src/logic/TodoList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collection */ \"./src/logic/Collection.js\");\n\n\nclass Empty {\n  constructor() {}\n}\n\nclass TodoList extends (0,_Collection__WEBPACK_IMPORTED_MODULE_0__.Collection)(Empty) {\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/logic/TodoList.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;