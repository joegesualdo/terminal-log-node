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

	var _indentString = __webpack_require__(2);

	var _indentString2 = _interopRequireDefault(_indentString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var log = {
	  warn: function warn(message) {
	    var indent = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    process.stdout.write((0, _indentString2.default)(_chalk2.default.yellow('⚠') + ' ' + message + '\n', indent));
	  },
	  error: function error(message) {
	    var indent = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    process.stdout.write((0, _indentString2.default)(_chalk2.default.red('✖') + ' ' + message + '\n', indent));
	  },
	  success: function success(message) {
	    var indent = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    process.stdout.write((0, _indentString2.default)(_chalk2.default.green('✔') + ' ' + message + '\n', indent));
	  },
	  created: function created(name) {
	    var indent = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    process.stdout.write((0, _indentString2.default)(_chalk2.default.green('create') + ' ' + name + '\n', indent));
	  }
	};

	exports.default = log;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("chalk");

/***/ },
/* 2 */
/***/ function(module, exports) {

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
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

		var assert = {
		  type: function type(val, _type) {
		    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== _type) {
		      throw new TypeError('Expected \'' + val + '\' to be a \'' + _type + '\', got \'' + (typeof val === 'undefined' ? 'undefined' : _typeof(val)) + '\'');
		    }
		  }
		};

		function isEmptyLine(str) {
		  assert.type(str, 'string');

		  var emptyCharacters = ['\n', ' '];

		  return str.split('').every(function (ch) {
		    return emptyCharacters.indexOf(ch) !== -1;
		  });
		}

		exports.default = function (str) {
		  var count = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
		  var character = arguments.length <= 2 || arguments[2] === undefined ? ' ' : arguments[2];

		  assert.type(str, 'string');
		  assert.type(character, 'string');

		  return str.split('\n').map(function (line) {
		    if (isEmptyLine(line)) return line;
		    return '' + character.repeat(count) + line;
		  }).join('\n');
		};

	/***/ }
	/******/ ]);

/***/ }
/******/ ]);