(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/function/getSentryApi/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/function/getSentryApi/index.ts":
/*!********************************************!*\
  !*** ./src/function/getSentryApi/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar serverless = __webpack_require__(/*! serverless-http */ \"serverless-http\");\nvar database_service_1 = __webpack_require__(/*! ../../shared/database.service */ \"./src/shared/database.service.ts\");\nexports.app = express();\nexports.app.set(\"etag\", false);\nexports.app.use(express.json());\nexports.app.use(\"/get_sentry_api\", function (req, res) { return __awaiter(_this, void 0, void 0, function () {\n    var databaseService, response, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 3, , 4]);\n                databaseService = new database_service_1.DatabaseService();\n                return [4 /*yield*/, databaseService.connect()];\n            case 1:\n                _a.sent();\n                return [4 /*yield*/, databaseService.query(\"SELECT * FROM sentinel_DB.sentinel_info;\")];\n            case 2:\n                response = _a.sent();\n                console.log(response);\n                res.set(200).send(JSON.stringify(response));\n                return [3 /*break*/, 4];\n            case 3:\n                error_1 = _a.sent();\n                console.log(error_1);\n                res.set(500).send(\"Error Executing\");\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); });\nmodule.exports.handler = serverless(exports.app, {\n    request: function (request, event, context) { return __awaiter(_this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            request.context = event.requestContext;\n            return [2 /*return*/];\n        });\n    }); }\n});\n\n\n//# sourceURL=webpack:///./src/function/getSentryApi/index.ts?");

/***/ }),

/***/ "./src/shared/database.service.ts":
/*!****************************************!*\
  !*** ./src/shared/database.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar DatabaseService = /** @class */ (function () {\n    function DatabaseService() {\n        this.connection = mysql.createConnection({\n            host: process.env.RDS_HOSTNAME,\n            user: process.env.RDS_USERNAME,\n            password: process.env.RDS_PASSWORD,\n            port: process.env.RDS_PORT\n        });\n    }\n    DatabaseService.prototype.connect = function () {\n        var _this = this;\n        return new Promise(function (resolve, reject) {\n            _this.connection.connect(function (err) {\n                if (!!err) {\n                    console.error(\"Database connection failed: \" + err.stack);\n                    return reject(err);\n                }\n                console.log(\"Connected to database.\");\n                return resolve();\n            });\n        });\n    };\n    DatabaseService.prototype.query = function (qr) {\n        var _this = this;\n        return new Promise(function (resolve, reject) {\n            _this.connection.query(qr, function (data, err) {\n                if (!!err) {\n                    return reject(err);\n                }\n                return resolve(data);\n            });\n        });\n    };\n    DatabaseService.prototype.disconnect = function () {\n        var _this = this;\n        return new Promise(function (resolve, reject) {\n            _this.connection.end(function (err) {\n                if (!!err) {\n                    console.error(\"Database connection failed: \" + err.stack);\n                    return reject(err);\n                }\n                console.log(\"Connected to database.\");\n                return resolve();\n            });\n        });\n    };\n    return DatabaseService;\n}());\nexports.DatabaseService = DatabaseService;\n\n\n//# sourceURL=webpack:///./src/shared/database.service.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serverless-http\");\n\n//# sourceURL=webpack:///external_%22serverless-http%22?");

/***/ })

/******/ })));