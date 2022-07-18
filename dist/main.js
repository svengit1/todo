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

/***/ "./src/adding_tasks_to_window.js":
/*!***************************************!*\
  !*** ./src/adding_tasks_to_window.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add_tasks_to_window\": () => (/* binding */ add_tasks_to_window)\n/* harmony export */ });\n/* harmony import */ var _element_creation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .//element_creation.js */ \"./src/element_creation.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\n\n\n\n\n\nconst el = document.getElementById(\"task_list\")\n\nfunction add_tasks_to_window(tasks){\n    el.textContent = \"\"\n    console.log(tasks)\n    for (let task of tasks){\n        const input_group_div = (0,_element_creation_js__WEBPACK_IMPORTED_MODULE_0__.create_input_group_div)(task)\n        const input_group_text_div = (0,_element_creation_js__WEBPACK_IMPORTED_MODULE_0__.create_input_group_text_div)() \n        const input_check_box = (0,_element_creation_js__WEBPACK_IMPORTED_MODULE_0__.create_input_check_box)(task)\n        input_group_text_div.appendChild(input_check_box)\n        input_group_div.appendChild(input_group_text_div)\n        const input_text = (0,_element_creation_js__WEBPACK_IMPORTED_MODULE_0__.create_input_text)(task)\n        const delete_btn = (0,_element_creation_js__WEBPACK_IMPORTED_MODULE_0__.create_delete_btn)(task)\n        input_group_div.appendChild(input_text)\n        input_group_div.appendChild(delete_btn)\n        el.appendChild(input_group_div)\n        input_check_box.addEventListener(\"change\", \n        function() {\n            if (input_check_box.checked === true){\n                for (let task of tasks){\n                    if (task.uid === (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.get_uniqe_id_part)(input_check_box.id)){\n                        task.completed = true\n                    }\n                }\n            } else{\n                for (let task of tasks){\n                    if (task.uid === (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.get_uniqe_id_part)(input_check_box.id)){\n                        task.completed = false\n                    }\n                }\n            }\n        })\n\n        input_group_div.addEventListener(\"mouseenter\", \n        function(event){\n            delete_btn.style.display = \"block\"\n        })\n        input_group_div.addEventListener(\"mouseleave\", \n        function(event){\n            delete_btn.style.display = \"none\"\n        })  \n        delete_btn.addEventListener(\"click\", \n        function(){\n            ;(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.remove_task_from_task_array)(delete_btn.id)\n            input_group_div.remove()\n        })\n    }\n}\n\n//# sourceURL=webpack://todomvc/./src/adding_tasks_to_window.js?");

/***/ }),

/***/ "./src/element_creation.js":
/*!*********************************!*\
  !*** ./src/element_creation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_delete_btn\": () => (/* binding */ create_delete_btn),\n/* harmony export */   \"create_input_check_box\": () => (/* binding */ create_input_check_box),\n/* harmony export */   \"create_input_group_div\": () => (/* binding */ create_input_group_div),\n/* harmony export */   \"create_input_group_text_div\": () => (/* binding */ create_input_group_text_div),\n/* harmony export */   \"create_input_text\": () => (/* binding */ create_input_text)\n/* harmony export */ });\nfunction create_element(tag_name, attributes_of_element){\n    let element = document.createElement(tag_name)\n    for (let attribute of attributes_of_element){\n        element.setAttribute(attribute[0], attribute[1])\n    }\n    return element\n}\nfunction create_input_group_div(task){\n    let div = create_element(\"div\", [[\"class\", \"input-group mb-3\"], [\"title\", \"task_list_item\"], [\"id\", \"group-\" + task.uid.toString()]])\n    return div\n}\n\nfunction create_input_group_text_div(){\n    let div = create_element(\"div\", [[\"class\", \"input-group-text\"]])\n    return div\n}\n\nfunction create_input_check_box(task){\n    let check_box = create_element(\"input\", [[\"class\", \"form-check-input mt-0\"], [\"type\", \"checkbox\"], [\"id\", \"checkbox-\" + task.uid.toString()]])\n    if (task.completed === true){\n        check_box.setAttribute(\"checked\", true)\n    }\n    \n    return check_box\n}\n\nfunction create_input_text(task){\n    let text = create_element(\"input\", [[\"class\", \"form-control\"], [\"type\", \"text\"], [\"value\", task.task], [\"id\", \"text-\" + task.uid.toString()]])\n    return text\n\n}\n\nfunction create_delete_btn(task){\n    let btn = create_element(\"button\", [[\"class\", \"btn btn-outline-secondary\"], [\"id\", \"button-\" + task.uid.toString()]])\n    btn.style.display = \"none\"\n    btn.innerHTML = \"Delete\"\n    return btn\n}\n\n//# sourceURL=webpack://todomvc/./src/element_creation.js?");

/***/ }),

/***/ "./src/generate_uid.js":
/*!*****************************!*\
  !*** ./src/generate_uid.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateUID\": () => (/* binding */ generateUID)\n/* harmony export */ });\nfunction uidPart(){\n    var part = (Math.random() * 46656) | 0;\n    part = (\"000\" + part.toString(36)).slice(-3);\n    return part\n}\n\n function generateUID() {\n    return uidPart() + uidPart();\n}\n\n\n//# sourceURL=webpack://todomvc/./src/generate_uid.js?");

/***/ }),

/***/ "./src/set_active_task_group.js":
/*!**************************************!*\
  !*** ./src/set_active_task_group.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"set_active_task_group\": () => (/* binding */ set_active_task_group)\n/* harmony export */ });\nfunction set_active_task_group(group){\n    document.getElementById(\"all_completed_tasks\").setAttribute(\"class\", \"nav-link\")\n    document.getElementById(\"all_active_tasks\").setAttribute(\"class\", \"nav-link\")\n    document.getElementById(\"all_tasks\").setAttribute(\"class\", \"nav-link\")\n    if (group === \"completed\"){\n        document.getElementById(\"all_completed_tasks\").setAttribute(\"class\", \"nav-link active\")\n    } else if (group === \"active\"){\n        document.getElementById(\"all_active_tasks\").setAttribute(\"class\", \"nav-link active\")\n    } else{\n        document.getElementById(\"all_tasks\").setAttribute(\"class\", \"nav-link active\")\n    }\n}\n\n//# sourceURL=webpack://todomvc/./src/set_active_task_group.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get_uniqe_id_part\": () => (/* binding */ get_uniqe_id_part),\n/* harmony export */   \"remove_task_from_task_array\": () => (/* binding */ remove_task_from_task_array)\n/* harmony export */ });\n/* harmony import */ var _generate_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .//generate_uid.js */ \"./src/generate_uid.js\");\n/* harmony import */ var _adding_tasks_to_window_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//adding_tasks_to_window.js */ \"./src/adding_tasks_to_window.js\");\n/* harmony import */ var _set_active_task_group_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set_active_task_group.js */ \"./src/set_active_task_group.js\");\n\n\n\nconst page_elements = {}\npage_elements.new_task_input_box = document.getElementById(\"new_task_input_box\");\npage_elements.select_all_btn = document.getElementById(\"select_all_btn\")\npage_elements.all_tasks_link = document.getElementById(\"all_tasks\")\npage_elements.active_tasks_link = document.getElementById(\"all_active_tasks\")\npage_elements.completed_tasks_link = document.getElementById(\"all_completed_tasks\")\n\nlet task_array = []\nlet select_all_bool = true\n\npage_elements.select_all_btn.addEventListener(\"click\", select_all_handler)\npage_elements.all_tasks_link.addEventListener(\"click\", all_tasks_link_handler)\npage_elements.active_tasks_link.addEventListener(\"click\", active_tasks_link_handler)\npage_elements.completed_tasks_link.addEventListener(\"click\", completed_tasks_link_handler)\n\n\npage_elements.new_task_input_box.addEventListener(\"keypress\", (event)=> {\n    if (event.keyCode === 13) { // key code of the keybord key\n      event.preventDefault();\n    enter_key_handler()\n    }\n  });\n\nfunction enter_key_handler(){\n    if (page_elements.new_task_input_box.value){\n        task_array.push({\"task\": page_elements.new_task_input_box.value, \"completed\": false, \"uid\": (0,_generate_uid_js__WEBPACK_IMPORTED_MODULE_0__.generateUID)()})\n        page_elements.new_task_input_box.value = \"\"\n        ;(0,_adding_tasks_to_window_js__WEBPACK_IMPORTED_MODULE_1__.add_tasks_to_window)(task_array)   \n    }\n}\n\nfunction all_tasks_link_handler(){\n    (0,_set_active_task_group_js__WEBPACK_IMPORTED_MODULE_2__.set_active_task_group)(\"all\")\n    ;(0,_adding_tasks_to_window_js__WEBPACK_IMPORTED_MODULE_1__.add_tasks_to_window)(task_array)\n}\nfunction active_tasks_link_handler(){\n    (0,_set_active_task_group_js__WEBPACK_IMPORTED_MODULE_2__.set_active_task_group)(\"active\")\n    ;(0,_adding_tasks_to_window_js__WEBPACK_IMPORTED_MODULE_1__.add_tasks_to_window)(task_array.filter(task => task.completed === false))\n}\n\nfunction completed_tasks_link_handler(){\n    (0,_set_active_task_group_js__WEBPACK_IMPORTED_MODULE_2__.set_active_task_group)(\"completed\")\n    ;(0,_adding_tasks_to_window_js__WEBPACK_IMPORTED_MODULE_1__.add_tasks_to_window)(task_array.filter(task => task.completed === true))\n}\n\nfunction select_all_handler(){\n    if (select_all_bool){\n        switch_task_completion(select_all_bool)\n    } else{\n        switch_task_completion(select_all_bool)\n    }\n}\n\nfunction remove_task_from_task_array(id){\n    task_array.splice(task_array.indexOf(task_array.find(o => o.uid === get_uniqe_id_part(id)), 0), 1)\n}\nfunction switch_task_completion(bool){\n    let elements1 = document.querySelectorAll('input[type=\"checkbox\"]');\n    elements1.forEach(element => {\n        element.checked = bool;\n        });\n    task_array.forEach(task => {\n        task.completed = bool\n    })\n    select_all_bool = !bool\n    if (bool){\n        page_elements.select_all_btn.innerHTML = \"Unselect\"\n    } else{\n        page_elements.select_all_btn.innerHTML = \"Select all\"\n    }\n}\n\n\nfunction get_uniqe_id_part(id){\n    return id.split('-')[1]\n}\n\n\n\n//# sourceURL=webpack://todomvc/./src/todo.js?");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todo.js");
/******/ 	
/******/ })()
;