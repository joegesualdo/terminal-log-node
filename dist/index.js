module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _chalk = __webpack_require__(1);

	var _chalk2 = _interopRequireDefault(_chalk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var log = {
	  warn: function warn(message) {
	    process.stdout.write(_chalk2.default.yellow('⚠') + ' ' + message + '\n');
	  },
	  error: function error(message) {
	    process.stdout.write(_chalk2.default.red('✖') + ' ' + message + '\n');
	  },
	  success: function success(message) {
	    process.stdout.write(_chalk2.default.green('✔') + ' ' + message + '\n');
	  },
	  created: function created(name) {
	    process.stdout.write(_chalk2.default.green('create') + ' ' + name + '\n');
	  }
	};

	exports.default = log;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("chalk");

/***/ }
/******/ ]);