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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/function/authenticate/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/function/authenticate/index.ts":
/*!********************************************!*\
  !*** ./src/function/authenticate/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nexports.__esModule = true;\nvar database_service_1 = __webpack_require__(/*! ../../shared/database.service */ \"./src/shared/database.service.ts\");\nfunction getDistance(lat1, lon1, lat2, lon2) {\n    lat1 = Number(lat1);\n    lat2 = Number(lat2);\n    lon1 = Number(lon1);\n    lon2 = Number(lon2);\n    var lat = (lat2 - lat1) * (Math.PI / 180); //haversine's formula\n    var lon = (lon2 - lon1) * (Math.PI / 180);\n    var a = Math.sin(lat / 2) * Math.sin(lat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(lon / 2) * Math.sin(lon / 2);\n    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\n    return c * 6371 * 1000;\n}\nmodule.exports.handler = function (event, context, callback) { return __awaiter(_this, void 0, void 0, function () {\n    var response, rfId, databaseService, queryResponse, status, location, latitude, longitude, distance, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                response = {\n                    statusCode: 0,\n                    body: \"\"\n                };\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 4, , 5]);\n                rfId = Number(event.path.split(\"/\")[2]);\n                console.log(\"RFID: \" + rfId);\n                databaseService = new database_service_1.DatabaseService();\n                return [4 /*yield*/, databaseService.connect()];\n            case 2:\n                _a.sent();\n                return [4 /*yield*/, databaseService.query(\n                    //Get the data row for given RFID \n                    \"SELECT * FROM sentinel_DB.sentinel_info WHERE RFID=\" + rfId)];\n            case 3:\n                queryResponse = _a.sent();\n                status = false;\n                //Check for authentication \n                if (queryResponse.length > 0) {\n                    location = queryResponse[0][\"Geolocation\"].split(\",\");\n                    latitude = location[0];\n                    longitude = location[1];\n                    //Change the hard coded values with the actual location of the microcontroller\n                    console.log(latitude);\n                    console.log(longitude);\n                    distance = getDistance(30.348684, -97.687514, latitude, longitude);\n                    console.log(\"distance is \", distance);\n                    if ((distance < 1)) {\n                        status = true;\n                    }\n                }\n                console.log(\"Query Response: \" + JSON.stringify(queryResponse));\n                console.log(\"RFID Exist: \" + status);\n                response[\"statusCode\"] = 200;\n                response[\"body\"] = JSON.stringify({ status: status });\n                console.log('response:', response);\n                return [3 /*break*/, 5];\n            case 4:\n                error_1 = _a.sent();\n                console.log(error_1);\n                response[\"statusCode\"] = 500;\n                response[\"body\"] = JSON.stringify(error_1);\n                return [3 /*break*/, 5];\n            case 5:\n                context.callbackWaitsForEmptyEventLoop = false;\n                return [2 /*return*/, callback(null, response)];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/function/authenticate/index.ts?");

/***/ }),

/***/ "./src/shared/database.service.ts":
/*!****************************************!*\
  !*** ./src/shared/database.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar DatabaseService = /** @class */ (function () {\n    function DatabaseService() {\n        this.connection = mysql.createConnection({\n            host: process.env.RDS_HOSTNAME,\n            user: process.env.RDS_USERNAME,\n            password: process.env.RDS_PASSWORD,\n            port: process.env.RDS_PORT\n        });\n    }\n    DatabaseService.prototype.connect = function () {\n        var _this = this;\n        return new Promise(function (resolve, reject) {\n            _this.connection.connect(function (err) {\n                if (!!err) {\n                    console.error(\"Database connection failed: \" + err.stack);\n                    return reject(err);\n                }\n                console.log(\"Connected to database.\");\n                return resolve();\n            });\n        });\n    };\n    DatabaseService.prototype.query = function (qr) {\n        var _this = this;\n        return new Promise(function (resolve, reject) {\n            _this.connection.query(qr, function (err, data) {\n                if (!!err) {\n                    return reject(err);\n                }\n                return resolve(data);\n            });\n        });\n    };\n    DatabaseService.prototype.disconnect = function () {\n        var _this = this;\n        return new Promise(function (resolve, reject) {\n            _this.connection.end(function (err) {\n                if (!!err) {\n                    console.error(\"Database connection failed: \" + err.stack);\n                    return reject(err);\n                }\n                console.log(\"Connected to database.\");\n                return resolve();\n            });\n        });\n    };\n    return DatabaseService;\n}());\nexports.DatabaseService = DatabaseService;\n\n\n//# sourceURL=webpack:///./src/shared/database.service.ts?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ })

/******/ })));