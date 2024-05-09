(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([["src_app_group_group_module_ts"],{

/***/ 8063:
/*!************************************************************************************!*\
  !*** ./node_modules/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 57932);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 62711);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 73223);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 98048);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 61378);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 79379);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 63675);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 86074);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 59756);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 24480);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 5660);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 48749);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 71387);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 49307);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 63128);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 77121);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 84278);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 39628);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 81613);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 34268);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 57931);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 30743);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ 28909);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns */ 81305);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! date-fns */ 1370);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! date-fns */ 66737);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! date-fns */ 42845);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! date-fns */ 66186);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! date-fns */ 1930);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! date-fns */ 25970);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! date-fns */ 88918);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! date-fns */ 57517);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! date-fns */ 75300);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! date-fns */ 23460);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! date-fns */ 13599);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! date-fns */ 88703);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! date-fns */ 11516);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! date-fns */ 64005);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! date-fns */ 2500);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! date-fns */ 83626);
/*!
 * chartjs-adapter-date-fns v2.0.0
 * https://www.chartjs.org
 * (c) 2021 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */


var FORMATS = {
  datetime: 'MMM d, yyyy, h:mm:ss aaaa',
  millisecond: 'h:mm:ss.SSS aaaa',
  second: 'h:mm:ss aaaa',
  minute: 'h:mm aaaa',
  hour: 'ha',
  day: 'MMM d',
  week: 'PP',
  month: 'MMM yyyy',
  quarter: 'qqq - yyyy',
  year: 'yyyy'
};

chart_js__WEBPACK_IMPORTED_MODULE_0__._adapters._date.override({
  _id: 'date-fns',
  // DEBUG
  formats: function formats() {
    return FORMATS;
  },
  parse: function parse(value, fmt) {
    if (value === null || typeof value === 'undefined') {
      return null;
    }

    var type = typeof value;

    if (type === 'number' || value instanceof Date) {
      value = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(value);
    } else if (type === 'string') {
      if (typeof fmt === 'string') {
        value = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(value, fmt, new Date(), this.options);
      } else {
        value = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(value, this.options);
      }
    }

    return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(value) ? value.getTime() : null;
  },
  format: function format(time, fmt) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(time, fmt, this.options);
  },
  add: function add(time, amount, unit) {
    switch (unit) {
      case 'millisecond':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(time, amount);

      case 'second':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)(time, amount);

      case 'minute':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.default)(time, amount);

      case 'hour':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.default)(time, amount);

      case 'day':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.default)(time, amount);

      case 'week':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.default)(time, amount);

      case 'month':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(time, amount);

      case 'quarter':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.default)(time, amount);

      case 'year':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.default)(time, amount);

      default:
        return time;
    }
  },
  diff: function diff(max, min, unit) {
    switch (unit) {
      case 'millisecond':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.default)(max, min);

      case 'second':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.default)(max, min);

      case 'minute':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.default)(max, min);

      case 'hour':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_18__.default)(max, min);

      case 'day':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.default)(max, min);

      case 'week':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_20__.default)(max, min);

      case 'month':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_21__.default)(max, min);

      case 'quarter':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_22__.default)(max, min);

      case 'year':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_23__.default)(max, min);

      default:
        return 0;
    }
  },
  startOf: function startOf(time, unit, weekday) {
    switch (unit) {
      case 'second':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_24__.default)(time);

      case 'minute':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_25__.default)(time);

      case 'hour':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_26__.default)(time);

      case 'day':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.default)(time);

      case 'week':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_28__.default)(time);

      case 'isoWeek':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_28__.default)(time, {
          weekStartsOn: +weekday
        });

      case 'month':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_29__.default)(time);

      case 'quarter':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_30__.default)(time);

      case 'year':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_31__.default)(time);

      default:
        return time;
    }
  },
  endOf: function endOf(time, unit) {
    switch (unit) {
      case 'second':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_32__.default)(time);

      case 'minute':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_33__.default)(time);

      case 'hour':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_34__.default)(time);

      case 'day':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_35__.default)(time);

      case 'week':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_36__.default)(time);

      case 'month':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_37__.default)(time);

      case 'quarter':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_38__.default)(time);

      case 'year':
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_39__.default)(time);

      default:
        return time;
    }
  }
});

/***/ }),

/***/ 19186:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addLeadingZeros; }
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ 58524:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ assign; }
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ 98130:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ 85201);
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ 63791);
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ 51229);
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ 45111);
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ 1858);
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ 19186);
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ 28290);







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ __webpack_exports__["default"] = (formatters);

/***/ }),

/***/ 28290:
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ 19186);

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(fractionalSeconds, token.length);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (formatters);

/***/ }),

/***/ 61323:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ __webpack_exports__["default"] = (longFormatters);

/***/ }),

/***/ 99338:
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getTimezoneOffsetInMilliseconds; }
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ 85201:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getUTCDayOfYear; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 62711);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ 51229:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getUTCISOWeekYear; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 62711);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 84353);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ 63791:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getUTCISOWeek; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 62711);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 84353);
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ 12986);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ 1858:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getUTCWeekYear; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 62711);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ 47522);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ 76371);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ 45111:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getUTCWeek; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 62711);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ 47522);
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ 94813);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ 31945:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": function() { return /* binding */ isProtectedDayOfYearToken; },
/* harmony export */   "isProtectedWeekYearToken": function() { return /* binding */ isProtectedWeekYearToken; },
/* harmony export */   "throwProtectedError": function() { return /* binding */ throwProtectedError; }
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ 24252:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ requiredArgs; }
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ 60302:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": function() { return /* binding */ getRoundingMethod; }
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ 94551:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCDay/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setUTCDay; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ 62711);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ 76371);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

/***/ }),

/***/ 48284:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCISODay/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setUTCISODay; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ 62711);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ 76371);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISODay(dirtyDate, dirtyDay) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var day = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

/***/ }),

/***/ 67505:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setUTCISOWeek; }
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ 76371);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 62711);
/* harmony import */ var _getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCISOWeek/index.js */ 63791);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var isoWeek = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyISOWeek);
  var diff = (0,_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

/***/ }),

/***/ 52150:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCWeek/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setUTCWeek; }
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ 76371);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 62711);
/* harmony import */ var _getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeek/index.js */ 45111);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var week = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyWeek);
  var diff = (0,_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

/***/ }),

/***/ 12986:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfUTCISOWeekYear; }
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ 51229);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 84353);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ 84353:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfUTCISOWeek; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 62711);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 94813:
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfUTCWeekYear; }
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ 1858);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ 47522);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ 76371);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ 47522:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfUTCWeek; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ 62711);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 24252);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ 76371);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 76371:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toInteger; }
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ 5660:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addDays; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ 24480:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addHours/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addHours; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 63675);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



var MILLISECONDS_IN_HOUR = 3600000;
/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */

function addHours(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}

/***/ }),

/***/ 63675:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addMilliseconds; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ 59756:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMinutes/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addMinutes; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 63675);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */

function addMinutes(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}

/***/ }),

/***/ 71387:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addMonths; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ 49307:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/addQuarters/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addQuarters; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMonths/index.js */ 71387);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the quarters added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */

function addQuarters(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  var months = amount * 3;
  return (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, months);
}

/***/ }),

/***/ 86074:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addSeconds/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addSeconds; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 63675);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */

function addSeconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, amount * 1000);
}

/***/ }),

/***/ 48749:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addWeeks/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addWeeks; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ 5660);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  var days = amount * 7;
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, days);
}

/***/ }),

/***/ 63128:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addYears/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addYears; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMonths/index.js */ 71387);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */

function addYears(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, amount * 12);
}

/***/ }),

/***/ 17986:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ compareAsc; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ 97457:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": function() { return /* binding */ daysInWeek; },
/* harmony export */   "maxTime": function() { return /* binding */ maxTime; },
/* harmony export */   "millisecondsInMinute": function() { return /* binding */ millisecondsInMinute; },
/* harmony export */   "millisecondsInHour": function() { return /* binding */ millisecondsInHour; },
/* harmony export */   "millisecondsInSecond": function() { return /* binding */ millisecondsInSecond; },
/* harmony export */   "minTime": function() { return /* binding */ minTime; },
/* harmony export */   "minutesInHour": function() { return /* binding */ minutesInHour; },
/* harmony export */   "monthsInQuarter": function() { return /* binding */ monthsInQuarter; },
/* harmony export */   "monthsInYear": function() { return /* binding */ monthsInYear; },
/* harmony export */   "quartersInYear": function() { return /* binding */ quartersInYear; },
/* harmony export */   "secondsInHour": function() { return /* binding */ secondsInHour; },
/* harmony export */   "secondsInMinute": function() { return /* binding */ secondsInMinute; }
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ 57039:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInCalendarDays; }
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 99338);
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ 66186);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ 45366:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInCalendarMonths; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ 4185:
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarYears/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInCalendarYears; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/***/ }),

/***/ 34268:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInDays/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInDays; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ 57039);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


 // Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.

function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */


function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 81613:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInHours/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInHours; }
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 97457);
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ 77121);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ 60302);




/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */

function differenceInHours(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dateLeft, dateRight) / _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ 77121:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInMilliseconds; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dateRight).getTime();
}

/***/ }),

/***/ 39628:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMinutes/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInMinutes; }
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 97457);
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ 77121);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ 60302);




/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */

function differenceInMinutes(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dateLeft, dateRight) / _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ 30743:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInMonths; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ 45366);
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ 17986);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ 44303);





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__.default)((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 28909:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInQuarters/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInQuarters; }
/* harmony export */ });
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMonths/index.js */ 30743);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ 60302);



/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of quarters between the given dates.
 *
 * @description
 * Get the number of quarters between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of full quarters
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */

function differenceInQuarters(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var diff = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dateLeft, dateRight) / 3;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ 84278:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInSeconds; }
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ 77121);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ 60302);



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ 57931:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInWeeks/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInWeeks; }
/* harmony export */ });
/* harmony import */ var _differenceInDays_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInDays/index.js */ 34268);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ 60302);



/**
 * @name differenceInWeeks
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between two dates. Fractional weeks are
 * truncated towards zero by default.
 *
 * One "full week" is the distance between a local time in one day to the same
 * local time 7 days earlier or later. A full week can sometimes be less than
 * or more than 7*24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 7*24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/(7*24))|0`.
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of full weeks
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInWeeks(new Date(2014, 6, 20), new Date(2014, 6, 5))
 * //=> 2
 *
 * // How many full weeks are between
 * // 1 March 2020 0:00 and 6 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 8 weeks (54 days),
 * // even if DST starts and the period has
 * // only 54*24-1 hours.
 * const result = differenceInWeeks(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 6)
 * )
 * //=> 8
 */

function differenceInWeeks(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var diff = (0,_differenceInDays_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dateLeft, dateRight) / 7;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ 81305:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInYears/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInYears; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarYears/index.js */ 4185);
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ 17986);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);




/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */

function differenceInYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dateLeft, dateRight)); // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days

  dateLeft.setFullYear(1584);
  dateRight.setFullYear(1584); // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastYearNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight) === -sign;
  var result = sign * (difference - Number(isLastYearNotFull)); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 88703:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ endOfDay; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 13599:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfHour/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ endOfHour; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name endOfHour
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an hour
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * const result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */

function endOfHour(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setMinutes(59, 59, 999);
  return date;
}

/***/ }),

/***/ 23460:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMinute/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ endOfMinute; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name endOfMinute
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * const result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */

function endOfMinute(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setSeconds(59, 999);
  return date;
}

/***/ }),

/***/ 64005:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ endOfMonth; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 2500:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfQuarter/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ endOfQuarter; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name endOfQuarter
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * const result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfQuarter(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3 + 3;
  date.setMonth(month, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 75300:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfSecond/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ endOfSecond; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name endOfSecond
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * const result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */

function endOfSecond(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setMilliseconds(999);
  return date;
}

/***/ }),

/***/ 11516:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfWeek/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ endOfWeek; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */

function endOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 83626:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfYear/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ endOfYear; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */

function endOfYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 79379:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ format; }
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ 61378);
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ 75955);
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ 41017);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ 98130);
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ 61323);
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 99338);
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ 31945);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__.default[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ 12817:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isDate; }
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ 44303:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isLastDayOfMonth; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ 88703);
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ 64005);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime();
}

/***/ }),

/***/ 61378:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isValid; }
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ 12817);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ 50805:
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buildFormatLongFn; }
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}; // TODO: Remove String()

    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ 60882:
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buildLocalizeFn; }
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ 39852:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buildMatchFn; }
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ 26591:
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buildMatchPatternFn; }
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ 62041:
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (formatDistance);

/***/ }),

/***/ 98555:
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ 50805);

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (formatLong);

/***/ }),

/***/ 20472:
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ __webpack_exports__["default"] = (formatRelative);

/***/ }),

/***/ 12337:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ 60882);

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (localize);

/***/ }),

/***/ 11812:
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ 39852);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ 26591);


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (match);

/***/ }),

/***/ 75955:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ 62041);
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ 98555);
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ 20472);
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ 12337);
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ 11812);





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__.default,
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__.default,
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ 98048:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ parseISO; }
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 97457);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ 18517:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ 1858);
/* harmony import */ var _lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/setUTCDay/index.js */ 94551);
/* harmony import */ var _lib_setUTCISODay_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/setUTCISODay/index.js */ 48284);
/* harmony import */ var _lib_setUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/setUTCISOWeek/index.js */ 67505);
/* harmony import */ var _lib_setUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/setUTCWeek/index.js */ 52150);
/* harmony import */ var _lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_lib/startOfUTCISOWeek/index.js */ 84353);
/* harmony import */ var _lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/startOfUTCWeek/index.js */ 47522);







var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */


var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(string, {
            width: 'wide'
          }) || match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
      }
    },
    set: function set(date, flags, value, _options) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['R', 'u', 't', 'T']
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function parse(string, token, match, _options) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function validate(_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function set(date, flags, value, _options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function parse(string, token, match, _options) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function validate(_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function set(date, flags, value, options) {
      var currentYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return (0,_lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return (0,_lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(date, options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function parse(string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function set(_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return (0,_lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(firstWeekOfYear);
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Extended year
  u: {
    priority: 130,
    parse: function parse(string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Month
  M: {
    priority: 110,
    parse: function parse(string, token, match, _options) {
      var valueCallback = function valueCallback(value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function parse(string, token, match, _options) {
      var valueCallback = function valueCallback(value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function set(date, _flags, value, options) {
      return (0,_lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)((0,_lib_setUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, value, options), options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function set(date, _flags, value, options) {
      return (0,_lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_lib_setUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(date, value, options), options);
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Day of the month
  d: {
    priority: 90,
    subPriority: 1,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Day of year
  D: {
    priority: 90,
    subPriority: 1,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
  },
  // Day of week
  E: {
    priority: 90,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function set(date, _flags, value, options) {
      date = (0,_lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function parse(string, token, match, options) {
      var valueCallback = function valueCallback(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'eee':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function set(date, _flags, value, options) {
      date = (0,_lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function parse(string, token, match, options) {
      var valueCallback = function valueCallback(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'ccc':
          return match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function set(date, _flags, value, options) {
      date = (0,_lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function parse(string, token, match, _options) {
      var valueCallback = function valueCallback(value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tu

        case 'iiiiii':
          return match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tuesday

        case 'iiii':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 1 && value <= 7;
    },
    set: function set(date, _flags, value, options) {
      date = (0,_lib_setUTCISODay_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['b', 'B', 'H', 'k', 't', 'T']
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'B', 'H', 'k', 't', 'T']
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 't', 'T']
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 1 && value <= 12;
    },
    set: function set(date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 0 && value <= 23;
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function set(date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['h', 'H', 'k', 't', 'T']
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 1 && value <= 24;
    },
    set: function set(date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
  },
  // Minute
  m: {
    priority: 60,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Second
  s: {
    priority: 50,
    parse: function parse(string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function validate(_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCSeconds(value, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function parse(string, token, _match, _options) {
      var valueCallback = function valueCallback(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return parseNDigits(token.length, string, valueCallback);
    },
    set: function set(date, _flags, value, _options) {
      date.setUTCMilliseconds(value);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function parse(string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function set(date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'x']
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function parse(string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function set(date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'X']
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function parse(string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function set(_date, _flags, value, _options) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function parse(string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function set(_date, _flags, value, _options) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (parsers);

/***/ }),

/***/ 73223:
/*!**************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ parse; }
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ 75955);
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ 41017);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/assign/index.js */ 58524);
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ 61323);
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 99338);
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ 31945);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _lib_parsers_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/parsers/index.js */ 18517);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);










var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward (toDate no longer accepts a string)
 *   toDate(1392098430000) // Unix to timestamp
 *   toDate(new Date(2014, 1, 11, 11, 30, 30)) // Cloning the date
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;

  if (!locale.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dirtyReferenceDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale
  }; // If timezone isn't specified, it will be set to the system timezone

  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    subPriority: -1,
    set: dateToSystemTimezone,
    index: 0
  }];
  var i;
  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_4__.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, subFnOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp);
  var usedTokens = [];

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_5__.isProtectedWeekYearToken)(token)) {
      (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_5__.throwProtectedError)(token, formatString, dirtyDateString);
    }

    if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_5__.isProtectedDayOfYearToken)(token)) {
      (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_5__.throwProtectedError)(token, formatString, dirtyDateString);
    }

    var firstCharacter = token[0];
    var parser = _lib_parsers_index_js__WEBPACK_IMPORTED_MODULE_6__.default[firstCharacter];

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens;

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0;

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token;

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i];
            break;
          }
        }

        if (incompatibleToken) {
          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      var parseResult = parser.parse(dateString, token, locale.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
      }

      setters.push({
        priority: parser.priority,
        subPriority: parser.subPriority || 0,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });
      dateString = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      } // Replace two single quote characters with one single quote character


      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date


      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  } // Check if the remaining input contains something other than whitespace


  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).sort(function (a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dirtyReferenceDate);

  if (isNaN(date)) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__.default)(date, (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__.default)(date));
  var flags = {};

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0];
      (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_9__.default)(flags, result[1]); // Result is date
    } else {
      utcDate = result;
    }
  }

  return utcDate;
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date;
  }

  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ 66186:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfDay; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 42845:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfHour/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfHour; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name startOfHour
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an hour
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * const result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */

function startOfHour(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setMinutes(0, 0, 0);
  return date;
}

/***/ }),

/***/ 66737:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMinute/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfMinute; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */

function startOfMinute(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setSeconds(0, 0);
  return date;
}

/***/ }),

/***/ 25970:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMonth/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfMonth; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 88918:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfQuarter/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfQuarter; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */

function startOfQuarter(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3;
  date.setMonth(month, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 1370:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfSecond/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfSecond; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name startOfSecond
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * const result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */

function startOfSecond(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setMilliseconds(0);
  return date;
}

/***/ }),

/***/ 1930:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfWeek; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 57517:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfYear/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfYear; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */

function startOfYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var cleanDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 41017:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ subMilliseconds; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 63675);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ 62711:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toDate; }
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ 52195:
/*!******************************************************!*\
  !*** ./node_modules/html2canvas/dist/html2canvas.js ***!
  \******************************************************/
/***/ (function(module) {

/*!
 * html2canvas 1.4.0 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
    Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  /* global Reflect, Promise */

  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  };

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }

  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || from);
  }

  var Bounds = function () {
    function Bounds(left, top, width, height) {
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
    }

    Bounds.prototype.add = function (x, y, w, h) {
      return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
    };

    Bounds.fromClientRect = function (context, clientRect) {
      return new Bounds(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
    };

    Bounds.fromDOMRectList = function (context, domRectList) {
      var domRect = Array.from(domRectList).find(function (rect) {
        return rect.width !== 0;
      });
      return domRect ? new Bounds(domRect.x + context.windowBounds.left, domRect.y + context.windowBounds.top, domRect.width, domRect.height) : Bounds.EMPTY;
    };

    Bounds.EMPTY = new Bounds(0, 0, 0, 0);
    return Bounds;
  }();

  var parseBounds = function parseBounds(context, node) {
    return Bounds.fromClientRect(context, node.getBoundingClientRect());
  };

  var parseDocumentSize = function parseDocumentSize(document) {
    var body = document.body;
    var documentElement = document.documentElement;

    if (!body || !documentElement) {
      throw new Error("Unable to get document size");
    }

    var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
    var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
    return new Bounds(0, 0, width, height);
  };
  /*
   * css-line-break 2.0.1 <https://github.com/niklasvh/css-line-break#readme>
   * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   */


  var toCodePoints$1 = function toCodePoints$1(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;

    while (i < length) {
      var value = str.charCodeAt(i++);

      if (value >= 0xd800 && value <= 0xdbff && i < length) {
        var extra = str.charCodeAt(i++);

        if ((extra & 0xfc00) === 0xdc00) {
          codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
        } else {
          codePoints.push(value);
          i--;
        }
      } else {
        codePoints.push(value);
      }
    }

    return codePoints;
  };

  var fromCodePoint$1 = function fromCodePoint$1() {
    var codePoints = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      codePoints[_i] = arguments[_i];
    }

    if (String.fromCodePoint) {
      return String.fromCodePoint.apply(String, codePoints);
    }

    var length = codePoints.length;

    if (!length) {
      return '';
    }

    var codeUnits = [];
    var index = -1;
    var result = '';

    while (++index < length) {
      var codePoint = codePoints[index];

      if (codePoint <= 0xffff) {
        codeUnits.push(codePoint);
      } else {
        codePoint -= 0x10000;
        codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
      }

      if (index + 1 === length || codeUnits.length > 0x4000) {
        result += String.fromCharCode.apply(String, codeUnits);
        codeUnits.length = 0;
      }
    }

    return result;
  };

  var chars$2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.

  var lookup$2 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);

  for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
    lookup$2[chars$2.charCodeAt(i$2)] = i$2;
  }

  var decode$1 = function decode$1(base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === '=') {
      bufferLength--;

      if (base64[base64.length - 2] === '=') {
        bufferLength--;
      }
    }

    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = lookup$2[base64.charCodeAt(i)];
      encoded2 = lookup$2[base64.charCodeAt(i + 1)];
      encoded3 = lookup$2[base64.charCodeAt(i + 2)];
      encoded4 = lookup$2[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return buffer;
  };

  var polyUint16Array$1 = function polyUint16Array$1(buffer) {
    var length = buffer.length;
    var bytes = [];

    for (var i = 0; i < length; i += 2) {
      bytes.push(buffer[i + 1] << 8 | buffer[i]);
    }

    return bytes;
  };

  var polyUint32Array$1 = function polyUint32Array$1(buffer) {
    var length = buffer.length;
    var bytes = [];

    for (var i = 0; i < length; i += 4) {
      bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
    }

    return bytes;
  };
  /** Shift size for getting the index-2 table offset. */


  var UTRIE2_SHIFT_2$1 = 5;
  /** Shift size for getting the index-1 table offset. */

  var UTRIE2_SHIFT_1$1 = 6 + 5;
  /**
   * Shift size for shifting left the index array values.
   * Increases possible data size with 16-bit index values at the cost
   * of compactability.
   * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
   */

  var UTRIE2_INDEX_SHIFT$1 = 2;
  /**
   * Difference between the two shift sizes,
   * for getting an index-1 offset from an index-2 offset. 6=11-5
   */

  var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
  /**
   * The part of the index-2 table for U+D800..U+DBFF stores values for
   * lead surrogate code _units_ not code _points_.
   * Values for lead surrogate code _points_ are indexed with this portion of the table.
   * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
   */

  var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 0x10000 >> UTRIE2_SHIFT_2$1;
  /** Number of entries in a data block. 32=0x20 */

  var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
  /** Mask for getting the lower bits for the in-data-block offset. */

  var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
  var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 0x400 >> UTRIE2_SHIFT_2$1;
  /** Count the lengths of both BMP pieces. 2080=0x820 */

  var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
  /**
   * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
   * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
   */

  var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
  var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 0x800 >> 6;
  /* U+0800 is the first code point after 2-byte UTF-8 */

  /**
   * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
   * Variable length, for code points up to highStart, where the last single-value range starts.
   * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
   * (For 0x100000 supplementary code points U+10000..U+10ffff.)
   *
   * The part of the index-2 table for supplementary code points starts
   * after this index-1 table.
   *
   * Both the index-1 table and the following part of the index-2 table
   * are omitted completely if there is only BMP data.
   */

  var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
  /**
   * Number of index-1 entries for the BMP. 32=0x20
   * This part of the index-1 table is omitted from the serialized form.
   */

  var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 0x10000 >> UTRIE2_SHIFT_1$1;
  /** Number of entries in an index-2 block. 64=0x40 */

  var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
  /** Mask for getting the lower bits for the in-index-2-block offset. */

  var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;

  var slice16$1 = function slice16$1(view, start, end) {
    if (view.slice) {
      return view.slice(start, end);
    }

    return new Uint16Array(Array.prototype.slice.call(view, start, end));
  };

  var slice32$1 = function slice32$1(view, start, end) {
    if (view.slice) {
      return view.slice(start, end);
    }

    return new Uint32Array(Array.prototype.slice.call(view, start, end));
  };

  var createTrieFromBase64$1 = function createTrieFromBase64$1(base64) {
    var buffer = decode$1(base64);
    var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
    var headerLength = 24;
    var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? slice16$1(view16, (headerLength + view32[4]) / 2) : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
    return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
  };

  var Trie$1 = function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
      this.initialValue = initialValue;
      this.errorValue = errorValue;
      this.highStart = highStart;
      this.highValueIndex = highValueIndex;
      this.index = index;
      this.data = data;
    }
    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */


    Trie.prototype.get = function (codePoint) {
      var ix;

      if (codePoint >= 0) {
        if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
          // Ordinary BMP code point, excluding leading surrogates.
          // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
          // 16 bit data is stored in the index array itself.
          ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
          ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
          return this.data[ix];
        }

        if (codePoint <= 0xffff) {
          // Lead Surrogate Code Point.  A Separate index section is stored for
          // lead surrogate code units and code points.
          //   The main index has the code unit data.
          //   For this function, we need the code point data.
          // Note: this expression could be refactored for slightly improved efficiency, but
          //       surrogate code points will be so rare in practice that it's not worth it.
          ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (codePoint - 0xd800 >> UTRIE2_SHIFT_2$1)];
          ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
          return this.data[ix];
        }

        if (codePoint < this.highStart) {
          // Supplemental code point, use two-level lookup.
          ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
          ix = this.index[ix];
          ix += codePoint >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1;
          ix = this.index[ix];
          ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
          return this.data[ix];
        }

        if (codePoint <= 0x10ffff) {
          return this.data[this.highValueIndex];
        }
      } // Fall through.  The code point is outside of the legal range of 0..0x10ffff.


      return this.errorValue;
    };

    return Trie;
  }();

  var base64$1 = 'KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==';
  /* @flow */

  var LETTER_NUMBER_MODIFIER = 50; // Non-tailorable Line Breaking Classes

  var BK = 1; //  Cause a line break (after)

  var CR$1 = 2; //  Cause a line break (after), except between CR and LF

  var LF$1 = 3; //  Cause a line break (after)

  var CM = 4; //  Prohibit a line break between the character and the preceding character

  var NL = 5; //  Cause a line break (after)

  var WJ = 7; //  Prohibit line breaks before and after

  var ZW = 8; //  Provide a break opportunity

  var GL = 9; //  Prohibit line breaks before and after

  var SP = 10; // Enable indirect line breaks

  var ZWJ$1 = 11; // Prohibit line breaks within joiner sequences
  // Break Opportunities

  var B2 = 12; //  Provide a line break opportunity before and after the character

  var BA = 13; //  Generally provide a line break opportunity after the character

  var BB = 14; //  Generally provide a line break opportunity before the character

  var HY = 15; //  Provide a line break opportunity after the character, except in numeric context

  var CB = 16; //   Provide a line break opportunity contingent on additional information
  // Characters Prohibiting Certain Breaks

  var CL = 17; //  Prohibit line breaks before

  var CP = 18; //  Prohibit line breaks before

  var EX = 19; //  Prohibit line breaks before

  var IN = 20; //  Allow only indirect line breaks between pairs

  var NS = 21; //  Allow only indirect line breaks before

  var OP = 22; //  Prohibit line breaks after

  var QU = 23; //  Act like they are both opening and closing
  // Numeric Context

  var IS = 24; //  Prevent breaks after any and before numeric

  var NU = 25; //  Form numeric expressions for line breaking purposes

  var PO = 26; //  Do not break following a numeric expression

  var PR = 27; //  Do not break in front of a numeric expression

  var SY = 28; //  Prevent a break before; and allow a break after
  // Other Characters

  var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID

  var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters

  var CJ = 31; //  Treat as NS or ID for strict or normal breaking.

  var EB = 32; //  Do not break from following Emoji Modifier

  var EM = 33; //  Do not break from preceding Emoji Base

  var H2 = 34; //  Form Korean syllable blocks

  var H3 = 35; //  Form Korean syllable blocks

  var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic

  var ID = 37; //  Break before or after; except in some numeric context

  var JL = 38; //  Form Korean syllable blocks

  var JV = 39; //  Form Korean syllable blocks

  var JT = 40; //  Form Korean syllable blocks

  var RI$1 = 41; //  Keep pairs together. For pairs; break before and after other classes

  var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis

  var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions

  var ea_OP = [0x2329, 0xff08];
  var BREAK_MANDATORY = '!';
  var BREAK_NOT_ALLOWED$1 = '×';
  var BREAK_ALLOWED$1 = '÷';
  var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
  var ALPHABETICS = [AL, HL];
  var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
  var SPACE$1 = [SP, ZW];
  var PREFIX_POSTFIX = [PR, PO];
  var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
  var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
  var HYPHEN = [HY, BA];

  var codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints, lineBreak) {
    if (lineBreak === void 0) {
      lineBreak = 'strict';
    }

    var types = [];
    var indices = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
      var classType = UnicodeTrie$1.get(codePoint);

      if (classType > LETTER_NUMBER_MODIFIER) {
        categories.push(true);
        classType -= LETTER_NUMBER_MODIFIER;
      } else {
        categories.push(false);
      }

      if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
        // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
        if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
          indices.push(index);
          return types.push(CB);
        }
      }

      if (classType === CM || classType === ZWJ$1) {
        // LB10 Treat any remaining combining mark or ZWJ as AL.
        if (index === 0) {
          indices.push(index);
          return types.push(AL);
        } // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
        // the base character in all of the following rules. Treat ZWJ as if it were CM.


        var prev = types[index - 1];

        if (LINE_BREAKS.indexOf(prev) === -1) {
          indices.push(indices[index - 1]);
          return types.push(prev);
        }

        indices.push(index);
        return types.push(AL);
      }

      indices.push(index);

      if (classType === CJ) {
        return types.push(lineBreak === 'strict' ? NS : ID);
      }

      if (classType === SA) {
        return types.push(AL);
      }

      if (classType === AI) {
        return types.push(AL);
      } // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
      // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
      // to take into account the actual line breaking properties for these characters.


      if (classType === XX) {
        if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
          return types.push(ID);
        } else {
          return types.push(AL);
        }
      }

      types.push(classType);
    });
    return [indices, types, categories];
  };

  var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];

    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
      var i = currentIndex;

      while (i <= classTypes.length) {
        i++;
        var next = classTypes[i];

        if (next === b) {
          return true;
        }

        if (next !== SP) {
          break;
        }
      }
    }

    if (current === SP) {
      var i = currentIndex;

      while (i > 0) {
        i--;
        var prev = classTypes[i];

        if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
          var n = currentIndex;

          while (n <= classTypes.length) {
            n++;
            var next = classTypes[n];

            if (next === b) {
              return true;
            }

            if (next !== SP) {
              break;
            }
          }
        }

        if (prev !== SP) {
          break;
        }
      }
    }

    return false;
  };

  var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
    var i = currentIndex;

    while (i >= 0) {
      var type = classTypes[i];

      if (type === SP) {
        i--;
      } else {
        return type;
      }
    }

    return 0;
  };

  var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
      return BREAK_NOT_ALLOWED$1;
    }

    var currentIndex = index - 1;

    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
      return BREAK_NOT_ALLOWED$1;
    }

    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex]; // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.

    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];

    if (current === CR$1 && next === LF$1) {
      return BREAK_NOT_ALLOWED$1;
    }

    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
      return BREAK_MANDATORY;
    } // LB6 Do not break before hard line breaks.


    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    } // LB7 Do not break before spaces or zero width space.


    if (SPACE$1.indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    } // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.


    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
      return BREAK_ALLOWED$1;
    } // LB8a Do not break after a zero width joiner.


    if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
      return BREAK_NOT_ALLOWED$1;
    } // zwj emojis


    if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
      return BREAK_NOT_ALLOWED$1;
    } // LB11 Do not break before or after Word joiner and related characters.


    if (current === WJ || next === WJ) {
      return BREAK_NOT_ALLOWED$1;
    } // LB12 Do not break after NBSP and related characters.


    if (current === GL) {
      return BREAK_NOT_ALLOWED$1;
    } // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.


    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
      return BREAK_NOT_ALLOWED$1;
    } // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.


    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    } // LB14 Do not break after ‘[’, even after spaces.


    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
      return BREAK_NOT_ALLOWED$1;
    } // LB15 Do not break within ‘”[’, even with intervening spaces.


    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
      return BREAK_NOT_ALLOWED$1;
    } // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.


    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
      return BREAK_NOT_ALLOWED$1;
    } // LB17 Do not break within ‘——’, even with intervening spaces.


    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
      return BREAK_NOT_ALLOWED$1;
    } // LB18 Break after spaces.


    if (current === SP) {
      return BREAK_ALLOWED$1;
    } // LB19 Do not break before or after quotation marks, such as ‘ ” ’.


    if (current === QU || next === QU) {
      return BREAK_NOT_ALLOWED$1;
    } // LB20 Break before and after unresolved CB.


    if (next === CB || current === CB) {
      return BREAK_ALLOWED$1;
    } // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.


    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
      return BREAK_NOT_ALLOWED$1;
    } // LB21a Don't break after Hebrew + Hyphen.


    if (before === HL && HYPHEN.indexOf(current) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    } // LB21b Don’t break between Solidus and Hebrew letters.


    if (current === SY && next === HL) {
      return BREAK_NOT_ALLOWED$1;
    } // LB22 Do not break before ellipsis.


    if (next === IN) {
      return BREAK_NOT_ALLOWED$1;
    } // LB23 Do not break between digits and letters.


    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
      return BREAK_NOT_ALLOWED$1;
    } // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.


    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
      return BREAK_NOT_ALLOWED$1;
    } // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.


    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    } // LB25 Do not break between the following pairs of classes relevant to numbers:


    if ( // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) || [OP, HY].indexOf(current) !== -1 && next === NU || current === NU && [NU, SY, IS].indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    } // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)


    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
      var prevIndex = currentIndex;

      while (prevIndex >= 0) {
        var type = classTypes[prevIndex];

        if (type === NU) {
          return BREAK_NOT_ALLOWED$1;
        } else if ([SY, IS].indexOf(type) !== -1) {
          prevIndex--;
        } else {
          break;
        }
      }
    } // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))


    if ([PR, PO].indexOf(next) !== -1) {
      var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;

      while (prevIndex >= 0) {
        var type = classTypes[prevIndex];

        if (type === NU) {
          return BREAK_NOT_ALLOWED$1;
        } else if ([SY, IS].indexOf(type) !== -1) {
          prevIndex--;
        } else {
          break;
        }
      }
    } // LB26 Do not break a Korean syllable.


    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
      return BREAK_NOT_ALLOWED$1;
    } // LB27 Treat a Korean Syllable Block the same as ID.


    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
      return BREAK_NOT_ALLOWED$1;
    } // LB28 Do not break between alphabetics (“at”).


    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    } // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).


    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED$1;
    } // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.


    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP && ea_OP.indexOf(codePoints[afterIndex]) === -1 || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
      return BREAK_NOT_ALLOWED$1;
    } // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.


    if (current === RI$1 && next === RI$1) {
      var i = indicies[currentIndex];
      var count = 1;

      while (i > 0) {
        i--;

        if (classTypes[i] === RI$1) {
          count++;
        } else {
          break;
        }
      }

      if (count % 2 !== 0) {
        return BREAK_NOT_ALLOWED$1;
      }
    } // LB30b Do not break between an emoji base and an emoji modifier.


    if (current === EB && next === EM) {
      return BREAK_NOT_ALLOWED$1;
    }

    return BREAK_ALLOWED$1;
  };

  var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
    if (!options) {
      options = {
        lineBreak: 'normal',
        wordBreak: 'normal'
      };
    }

    var _a = codePointsToCharacterClasses(codePoints, options.lineBreak),
        indicies = _a[0],
        classTypes = _a[1],
        isLetterNumber = _a[2];

    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
      classTypes = classTypes.map(function (type) {
        return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
      });
    }

    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (letterNumber, i) {
      return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
    }) : undefined;
    return [indicies, classTypes, forbiddenBreakpoints];
  };

  var Break = function () {
    function Break(codePoints, lineBreak, start, end) {
      this.codePoints = codePoints;
      this.required = lineBreak === BREAK_MANDATORY;
      this.start = start;
      this.end = end;
    }

    Break.prototype.slice = function () {
      return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
    };

    return Break;
  }();

  var LineBreaker = function LineBreaker(str, options) {
    var codePoints = toCodePoints$1(str);

    var _a = cssFormattedClasses(codePoints, options),
        indicies = _a[0],
        classTypes = _a[1],
        forbiddenBreakpoints = _a[2];

    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;
    return {
      next: function next() {
        if (nextIndex >= length) {
          return {
            done: true,
            value: null
          };
        }

        var lineBreak = BREAK_NOT_ALLOWED$1;

        while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED$1) {}

        if (lineBreak !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
          var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
          lastEnd = nextIndex;
          return {
            value: value,
            done: false
          };
        }

        return {
          done: true,
          value: null
        };
      }
    };
  }; // https://www.w3.org/TR/css-syntax-3


  var FLAG_UNRESTRICTED = 1 << 0;
  var FLAG_ID = 1 << 1;
  var FLAG_INTEGER = 1 << 2;
  var FLAG_NUMBER = 1 << 3;
  var LINE_FEED = 0x000a;
  var SOLIDUS = 0x002f;
  var REVERSE_SOLIDUS = 0x005c;
  var CHARACTER_TABULATION = 0x0009;
  var SPACE = 0x0020;
  var QUOTATION_MARK = 0x0022;
  var EQUALS_SIGN = 0x003d;
  var NUMBER_SIGN = 0x0023;
  var DOLLAR_SIGN = 0x0024;
  var PERCENTAGE_SIGN = 0x0025;
  var APOSTROPHE = 0x0027;
  var LEFT_PARENTHESIS = 0x0028;
  var RIGHT_PARENTHESIS = 0x0029;
  var LOW_LINE = 0x005f;
  var HYPHEN_MINUS = 0x002d;
  var EXCLAMATION_MARK = 0x0021;
  var LESS_THAN_SIGN = 0x003c;
  var GREATER_THAN_SIGN = 0x003e;
  var COMMERCIAL_AT = 0x0040;
  var LEFT_SQUARE_BRACKET = 0x005b;
  var RIGHT_SQUARE_BRACKET = 0x005d;
  var CIRCUMFLEX_ACCENT = 0x003d;
  var LEFT_CURLY_BRACKET = 0x007b;
  var QUESTION_MARK = 0x003f;
  var RIGHT_CURLY_BRACKET = 0x007d;
  var VERTICAL_LINE = 0x007c;
  var TILDE = 0x007e;
  var CONTROL = 0x0080;
  var REPLACEMENT_CHARACTER = 0xfffd;
  var ASTERISK = 0x002a;
  var PLUS_SIGN = 0x002b;
  var COMMA = 0x002c;
  var COLON = 0x003a;
  var SEMICOLON = 0x003b;
  var FULL_STOP = 0x002e;
  var NULL = 0x0000;
  var BACKSPACE = 0x0008;
  var LINE_TABULATION = 0x000b;
  var SHIFT_OUT = 0x000e;
  var INFORMATION_SEPARATOR_ONE = 0x001f;
  var DELETE = 0x007f;
  var EOF = -1;
  var ZERO = 0x0030;
  var a = 0x0061;
  var e = 0x0065;
  var f = 0x0066;
  var u = 0x0075;
  var z = 0x007a;
  var A = 0x0041;
  var E = 0x0045;
  var F = 0x0046;
  var U = 0x0055;
  var Z = 0x005a;

  var isDigit = function isDigit(codePoint) {
    return codePoint >= ZERO && codePoint <= 0x0039;
  };

  var isSurrogateCodePoint = function isSurrogateCodePoint(codePoint) {
    return codePoint >= 0xd800 && codePoint <= 0xdfff;
  };

  var isHex = function isHex(codePoint) {
    return isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
  };

  var isLowerCaseLetter = function isLowerCaseLetter(codePoint) {
    return codePoint >= a && codePoint <= z;
  };

  var isUpperCaseLetter = function isUpperCaseLetter(codePoint) {
    return codePoint >= A && codePoint <= Z;
  };

  var isLetter = function isLetter(codePoint) {
    return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
  };

  var isNonASCIICodePoint = function isNonASCIICodePoint(codePoint) {
    return codePoint >= CONTROL;
  };

  var isWhiteSpace = function isWhiteSpace(codePoint) {
    return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
  };

  var isNameStartCodePoint = function isNameStartCodePoint(codePoint) {
    return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
  };

  var isNameCodePoint = function isNameCodePoint(codePoint) {
    return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
  };

  var isNonPrintableCodePoint = function isNonPrintableCodePoint(codePoint) {
    return codePoint >= NULL && codePoint <= BACKSPACE || codePoint === LINE_TABULATION || codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE || codePoint === DELETE;
  };

  var isValidEscape = function isValidEscape(c1, c2) {
    if (c1 !== REVERSE_SOLIDUS) {
      return false;
    }

    return c2 !== LINE_FEED;
  };

  var isIdentifierStart = function isIdentifierStart(c1, c2, c3) {
    if (c1 === HYPHEN_MINUS) {
      return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
    } else if (isNameStartCodePoint(c1)) {
      return true;
    } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
      return true;
    }

    return false;
  };

  var isNumberStart = function isNumberStart(c1, c2, c3) {
    if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
      if (isDigit(c2)) {
        return true;
      }

      return c2 === FULL_STOP && isDigit(c3);
    }

    if (c1 === FULL_STOP) {
      return isDigit(c2);
    }

    return isDigit(c1);
  };

  var stringToNumber = function stringToNumber(codePoints) {
    var c = 0;
    var sign = 1;

    if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
      if (codePoints[c] === HYPHEN_MINUS) {
        sign = -1;
      }

      c++;
    }

    var integers = [];

    while (isDigit(codePoints[c])) {
      integers.push(codePoints[c++]);
    }

    var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;

    if (codePoints[c] === FULL_STOP) {
      c++;
    }

    var fraction = [];

    while (isDigit(codePoints[c])) {
      fraction.push(codePoints[c++]);
    }

    var fracd = fraction.length;
    var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;

    if (codePoints[c] === E || codePoints[c] === e) {
      c++;
    }

    var expsign = 1;

    if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
      if (codePoints[c] === HYPHEN_MINUS) {
        expsign = -1;
      }

      c++;
    }

    var exponent = [];

    while (isDigit(codePoints[c])) {
      exponent.push(codePoints[c++]);
    }

    var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
    return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
  };

  var LEFT_PARENTHESIS_TOKEN = {
    type: 2
    /* LEFT_PARENTHESIS_TOKEN */

  };
  var RIGHT_PARENTHESIS_TOKEN = {
    type: 3
    /* RIGHT_PARENTHESIS_TOKEN */

  };
  var COMMA_TOKEN = {
    type: 4
    /* COMMA_TOKEN */

  };
  var SUFFIX_MATCH_TOKEN = {
    type: 13
    /* SUFFIX_MATCH_TOKEN */

  };
  var PREFIX_MATCH_TOKEN = {
    type: 8
    /* PREFIX_MATCH_TOKEN */

  };
  var COLUMN_TOKEN = {
    type: 21
    /* COLUMN_TOKEN */

  };
  var DASH_MATCH_TOKEN = {
    type: 9
    /* DASH_MATCH_TOKEN */

  };
  var INCLUDE_MATCH_TOKEN = {
    type: 10
    /* INCLUDE_MATCH_TOKEN */

  };
  var LEFT_CURLY_BRACKET_TOKEN = {
    type: 11
    /* LEFT_CURLY_BRACKET_TOKEN */

  };
  var RIGHT_CURLY_BRACKET_TOKEN = {
    type: 12
    /* RIGHT_CURLY_BRACKET_TOKEN */

  };
  var SUBSTRING_MATCH_TOKEN = {
    type: 14
    /* SUBSTRING_MATCH_TOKEN */

  };
  var BAD_URL_TOKEN = {
    type: 23
    /* BAD_URL_TOKEN */

  };
  var BAD_STRING_TOKEN = {
    type: 1
    /* BAD_STRING_TOKEN */

  };
  var CDO_TOKEN = {
    type: 25
    /* CDO_TOKEN */

  };
  var CDC_TOKEN = {
    type: 24
    /* CDC_TOKEN */

  };
  var COLON_TOKEN = {
    type: 26
    /* COLON_TOKEN */

  };
  var SEMICOLON_TOKEN = {
    type: 27
    /* SEMICOLON_TOKEN */

  };
  var LEFT_SQUARE_BRACKET_TOKEN = {
    type: 28
    /* LEFT_SQUARE_BRACKET_TOKEN */

  };
  var RIGHT_SQUARE_BRACKET_TOKEN = {
    type: 29
    /* RIGHT_SQUARE_BRACKET_TOKEN */

  };
  var WHITESPACE_TOKEN = {
    type: 31
    /* WHITESPACE_TOKEN */

  };
  var EOF_TOKEN = {
    type: 32
    /* EOF_TOKEN */

  };

  var Tokenizer = function () {
    function Tokenizer() {
      this._value = [];
    }

    Tokenizer.prototype.write = function (chunk) {
      this._value = this._value.concat(toCodePoints$1(chunk));
    };

    Tokenizer.prototype.read = function () {
      var tokens = [];
      var token = this.consumeToken();

      while (token !== EOF_TOKEN) {
        tokens.push(token);
        token = this.consumeToken();
      }

      return tokens;
    };

    Tokenizer.prototype.consumeToken = function () {
      var codePoint = this.consumeCodePoint();

      switch (codePoint) {
        case QUOTATION_MARK:
          return this.consumeStringToken(QUOTATION_MARK);

        case NUMBER_SIGN:
          var c1 = this.peekCodePoint(0);
          var c2 = this.peekCodePoint(1);
          var c3 = this.peekCodePoint(2);

          if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
            var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
            var value = this.consumeName();
            return {
              type: 5
              /* HASH_TOKEN */
              ,
              value: value,
              flags: flags
            };
          }

          break;

        case DOLLAR_SIGN:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return SUFFIX_MATCH_TOKEN;
          }

          break;

        case APOSTROPHE:
          return this.consumeStringToken(APOSTROPHE);

        case LEFT_PARENTHESIS:
          return LEFT_PARENTHESIS_TOKEN;

        case RIGHT_PARENTHESIS:
          return RIGHT_PARENTHESIS_TOKEN;

        case ASTERISK:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return SUBSTRING_MATCH_TOKEN;
          }

          break;

        case PLUS_SIGN:
          if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }

          break;

        case COMMA:
          return COMMA_TOKEN;

        case HYPHEN_MINUS:
          var e1 = codePoint;
          var e2 = this.peekCodePoint(0);
          var e3 = this.peekCodePoint(1);

          if (isNumberStart(e1, e2, e3)) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }

          if (isIdentifierStart(e1, e2, e3)) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeIdentLikeToken();
          }

          if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
            this.consumeCodePoint();
            this.consumeCodePoint();
            return CDC_TOKEN;
          }

          break;

        case FULL_STOP:
          if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }

          break;

        case SOLIDUS:
          if (this.peekCodePoint(0) === ASTERISK) {
            this.consumeCodePoint();

            while (true) {
              var c = this.consumeCodePoint();

              if (c === ASTERISK) {
                c = this.consumeCodePoint();

                if (c === SOLIDUS) {
                  return this.consumeToken();
                }
              }

              if (c === EOF) {
                return this.consumeToken();
              }
            }
          }

          break;

        case COLON:
          return COLON_TOKEN;

        case SEMICOLON:
          return SEMICOLON_TOKEN;

        case LESS_THAN_SIGN:
          if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
            this.consumeCodePoint();
            this.consumeCodePoint();
            return CDO_TOKEN;
          }

          break;

        case COMMERCIAL_AT:
          var a1 = this.peekCodePoint(0);
          var a2 = this.peekCodePoint(1);
          var a3 = this.peekCodePoint(2);

          if (isIdentifierStart(a1, a2, a3)) {
            var value = this.consumeName();
            return {
              type: 7
              /* AT_KEYWORD_TOKEN */
              ,
              value: value
            };
          }

          break;

        case LEFT_SQUARE_BRACKET:
          return LEFT_SQUARE_BRACKET_TOKEN;

        case REVERSE_SOLIDUS:
          if (isValidEscape(codePoint, this.peekCodePoint(0))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeIdentLikeToken();
          }

          break;

        case RIGHT_SQUARE_BRACKET:
          return RIGHT_SQUARE_BRACKET_TOKEN;

        case CIRCUMFLEX_ACCENT:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return PREFIX_MATCH_TOKEN;
          }

          break;

        case LEFT_CURLY_BRACKET:
          return LEFT_CURLY_BRACKET_TOKEN;

        case RIGHT_CURLY_BRACKET:
          return RIGHT_CURLY_BRACKET_TOKEN;

        case u:
        case U:
          var u1 = this.peekCodePoint(0);
          var u2 = this.peekCodePoint(1);

          if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
            this.consumeCodePoint();
            this.consumeUnicodeRangeToken();
          }

          this.reconsumeCodePoint(codePoint);
          return this.consumeIdentLikeToken();

        case VERTICAL_LINE:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return DASH_MATCH_TOKEN;
          }

          if (this.peekCodePoint(0) === VERTICAL_LINE) {
            this.consumeCodePoint();
            return COLUMN_TOKEN;
          }

          break;

        case TILDE:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return INCLUDE_MATCH_TOKEN;
          }

          break;

        case EOF:
          return EOF_TOKEN;
      }

      if (isWhiteSpace(codePoint)) {
        this.consumeWhiteSpace();
        return WHITESPACE_TOKEN;
      }

      if (isDigit(codePoint)) {
        this.reconsumeCodePoint(codePoint);
        return this.consumeNumericToken();
      }

      if (isNameStartCodePoint(codePoint)) {
        this.reconsumeCodePoint(codePoint);
        return this.consumeIdentLikeToken();
      }

      return {
        type: 6
        /* DELIM_TOKEN */
        ,
        value: fromCodePoint$1(codePoint)
      };
    };

    Tokenizer.prototype.consumeCodePoint = function () {
      var value = this._value.shift();

      return typeof value === 'undefined' ? -1 : value;
    };

    Tokenizer.prototype.reconsumeCodePoint = function (codePoint) {
      this._value.unshift(codePoint);
    };

    Tokenizer.prototype.peekCodePoint = function (delta) {
      if (delta >= this._value.length) {
        return -1;
      }

      return this._value[delta];
    };

    Tokenizer.prototype.consumeUnicodeRangeToken = function () {
      var digits = [];
      var codePoint = this.consumeCodePoint();

      while (isHex(codePoint) && digits.length < 6) {
        digits.push(codePoint);
        codePoint = this.consumeCodePoint();
      }

      var questionMarks = false;

      while (codePoint === QUESTION_MARK && digits.length < 6) {
        digits.push(codePoint);
        codePoint = this.consumeCodePoint();
        questionMarks = true;
      }

      if (questionMarks) {
        var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) {
          return digit === QUESTION_MARK ? ZERO : digit;
        })), 16);
        var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) {
          return digit === QUESTION_MARK ? F : digit;
        })), 16);
        return {
          type: 30
          /* UNICODE_RANGE_TOKEN */
          ,
          start: start_1,
          end: end
        };
      }

      var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);

      if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
        this.consumeCodePoint();
        codePoint = this.consumeCodePoint();
        var endDigits = [];

        while (isHex(codePoint) && endDigits.length < 6) {
          endDigits.push(codePoint);
          codePoint = this.consumeCodePoint();
        }

        var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
        return {
          type: 30
          /* UNICODE_RANGE_TOKEN */
          ,
          start: start,
          end: end
        };
      } else {
        return {
          type: 30
          /* UNICODE_RANGE_TOKEN */
          ,
          start: start,
          end: start
        };
      }
    };

    Tokenizer.prototype.consumeIdentLikeToken = function () {
      var value = this.consumeName();

      if (value.toLowerCase() === 'url' && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
        this.consumeCodePoint();
        return this.consumeUrlToken();
      } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
        this.consumeCodePoint();
        return {
          type: 19
          /* FUNCTION_TOKEN */
          ,
          value: value
        };
      }

      return {
        type: 20
        /* IDENT_TOKEN */
        ,
        value: value
      };
    };

    Tokenizer.prototype.consumeUrlToken = function () {
      var value = [];
      this.consumeWhiteSpace();

      if (this.peekCodePoint(0) === EOF) {
        return {
          type: 22
          /* URL_TOKEN */
          ,
          value: ''
        };
      }

      var next = this.peekCodePoint(0);

      if (next === APOSTROPHE || next === QUOTATION_MARK) {
        var stringToken = this.consumeStringToken(this.consumeCodePoint());

        if (stringToken.type === 0
        /* STRING_TOKEN */
        ) {
          this.consumeWhiteSpace();

          if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
            this.consumeCodePoint();
            return {
              type: 22
              /* URL_TOKEN */
              ,
              value: stringToken.value
            };
          }
        }

        this.consumeBadUrlRemnants();
        return BAD_URL_TOKEN;
      }

      while (true) {
        var codePoint = this.consumeCodePoint();

        if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
          return {
            type: 22
            /* URL_TOKEN */
            ,
            value: fromCodePoint$1.apply(void 0, value)
          };
        } else if (isWhiteSpace(codePoint)) {
          this.consumeWhiteSpace();

          if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
            this.consumeCodePoint();
            return {
              type: 22
              /* URL_TOKEN */
              ,
              value: fromCodePoint$1.apply(void 0, value)
            };
          }

          this.consumeBadUrlRemnants();
          return BAD_URL_TOKEN;
        } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
          this.consumeBadUrlRemnants();
          return BAD_URL_TOKEN;
        } else if (codePoint === REVERSE_SOLIDUS) {
          if (isValidEscape(codePoint, this.peekCodePoint(0))) {
            value.push(this.consumeEscapedCodePoint());
          } else {
            this.consumeBadUrlRemnants();
            return BAD_URL_TOKEN;
          }
        } else {
          value.push(codePoint);
        }
      }
    };

    Tokenizer.prototype.consumeWhiteSpace = function () {
      while (isWhiteSpace(this.peekCodePoint(0))) {
        this.consumeCodePoint();
      }
    };

    Tokenizer.prototype.consumeBadUrlRemnants = function () {
      while (true) {
        var codePoint = this.consumeCodePoint();

        if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
          return;
        }

        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          this.consumeEscapedCodePoint();
        }
      }
    };

    Tokenizer.prototype.consumeStringSlice = function (count) {
      var SLICE_STACK_SIZE = 50000;
      var value = '';

      while (count > 0) {
        var amount = Math.min(SLICE_STACK_SIZE, count);
        value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
        count -= amount;
      }

      this._value.shift();

      return value;
    };

    Tokenizer.prototype.consumeStringToken = function (endingCodePoint) {
      var value = '';
      var i = 0;

      do {
        var codePoint = this._value[i];

        if (codePoint === EOF || codePoint === undefined || codePoint === endingCodePoint) {
          value += this.consumeStringSlice(i);
          return {
            type: 0
            /* STRING_TOKEN */
            ,
            value: value
          };
        }

        if (codePoint === LINE_FEED) {
          this._value.splice(0, i);

          return BAD_STRING_TOKEN;
        }

        if (codePoint === REVERSE_SOLIDUS) {
          var next = this._value[i + 1];

          if (next !== EOF && next !== undefined) {
            if (next === LINE_FEED) {
              value += this.consumeStringSlice(i);
              i = -1;

              this._value.shift();
            } else if (isValidEscape(codePoint, next)) {
              value += this.consumeStringSlice(i);
              value += fromCodePoint$1(this.consumeEscapedCodePoint());
              i = -1;
            }
          }
        }

        i++;
      } while (true);
    };

    Tokenizer.prototype.consumeNumber = function () {
      var repr = [];
      var type = FLAG_INTEGER;
      var c1 = this.peekCodePoint(0);

      if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
        repr.push(this.consumeCodePoint());
      }

      while (isDigit(this.peekCodePoint(0))) {
        repr.push(this.consumeCodePoint());
      }

      c1 = this.peekCodePoint(0);
      var c2 = this.peekCodePoint(1);

      if (c1 === FULL_STOP && isDigit(c2)) {
        repr.push(this.consumeCodePoint(), this.consumeCodePoint());
        type = FLAG_NUMBER;

        while (isDigit(this.peekCodePoint(0))) {
          repr.push(this.consumeCodePoint());
        }
      }

      c1 = this.peekCodePoint(0);
      c2 = this.peekCodePoint(1);
      var c3 = this.peekCodePoint(2);

      if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
        repr.push(this.consumeCodePoint(), this.consumeCodePoint());
        type = FLAG_NUMBER;

        while (isDigit(this.peekCodePoint(0))) {
          repr.push(this.consumeCodePoint());
        }
      }

      return [stringToNumber(repr), type];
    };

    Tokenizer.prototype.consumeNumericToken = function () {
      var _a = this.consumeNumber(),
          number = _a[0],
          flags = _a[1];

      var c1 = this.peekCodePoint(0);
      var c2 = this.peekCodePoint(1);
      var c3 = this.peekCodePoint(2);

      if (isIdentifierStart(c1, c2, c3)) {
        var unit = this.consumeName();
        return {
          type: 15
          /* DIMENSION_TOKEN */
          ,
          number: number,
          flags: flags,
          unit: unit
        };
      }

      if (c1 === PERCENTAGE_SIGN) {
        this.consumeCodePoint();
        return {
          type: 16
          /* PERCENTAGE_TOKEN */
          ,
          number: number,
          flags: flags
        };
      }

      return {
        type: 17
        /* NUMBER_TOKEN */
        ,
        number: number,
        flags: flags
      };
    };

    Tokenizer.prototype.consumeEscapedCodePoint = function () {
      var codePoint = this.consumeCodePoint();

      if (isHex(codePoint)) {
        var hex = fromCodePoint$1(codePoint);

        while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
          hex += fromCodePoint$1(this.consumeCodePoint());
        }

        if (isWhiteSpace(this.peekCodePoint(0))) {
          this.consumeCodePoint();
        }

        var hexCodePoint = parseInt(hex, 16);

        if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 0x10ffff) {
          return REPLACEMENT_CHARACTER;
        }

        return hexCodePoint;
      }

      if (codePoint === EOF) {
        return REPLACEMENT_CHARACTER;
      }

      return codePoint;
    };

    Tokenizer.prototype.consumeName = function () {
      var result = '';

      while (true) {
        var codePoint = this.consumeCodePoint();

        if (isNameCodePoint(codePoint)) {
          result += fromCodePoint$1(codePoint);
        } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          result += fromCodePoint$1(this.consumeEscapedCodePoint());
        } else {
          this.reconsumeCodePoint(codePoint);
          return result;
        }
      }
    };

    return Tokenizer;
  }();

  var Parser = function () {
    function Parser(tokens) {
      this._tokens = tokens;
    }

    Parser.create = function (value) {
      var tokenizer = new Tokenizer();
      tokenizer.write(value);
      return new Parser(tokenizer.read());
    };

    Parser.parseValue = function (value) {
      return Parser.create(value).parseComponentValue();
    };

    Parser.parseValues = function (value) {
      return Parser.create(value).parseComponentValues();
    };

    Parser.prototype.parseComponentValue = function () {
      var token = this.consumeToken();

      while (token.type === 31
      /* WHITESPACE_TOKEN */
      ) {
        token = this.consumeToken();
      }

      if (token.type === 32
      /* EOF_TOKEN */
      ) {
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      }

      this.reconsumeToken(token);
      var value = this.consumeComponentValue();

      do {
        token = this.consumeToken();
      } while (token.type === 31
      /* WHITESPACE_TOKEN */
      );

      if (token.type === 32
      /* EOF_TOKEN */
      ) {
        return value;
      }

      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    };

    Parser.prototype.parseComponentValues = function () {
      var values = [];

      while (true) {
        var value = this.consumeComponentValue();

        if (value.type === 32
        /* EOF_TOKEN */
        ) {
          return values;
        }

        values.push(value);
        values.push();
      }
    };

    Parser.prototype.consumeComponentValue = function () {
      var token = this.consumeToken();

      switch (token.type) {
        case 11
        /* LEFT_CURLY_BRACKET_TOKEN */
        :
        case 28
        /* LEFT_SQUARE_BRACKET_TOKEN */
        :
        case 2
        /* LEFT_PARENTHESIS_TOKEN */
        :
          return this.consumeSimpleBlock(token.type);

        case 19
        /* FUNCTION_TOKEN */
        :
          return this.consumeFunction(token);
      }

      return token;
    };

    Parser.prototype.consumeSimpleBlock = function (type) {
      var block = {
        type: type,
        values: []
      };
      var token = this.consumeToken();

      while (true) {
        if (token.type === 32
        /* EOF_TOKEN */
        || isEndingTokenFor(token, type)) {
          return block;
        }

        this.reconsumeToken(token);
        block.values.push(this.consumeComponentValue());
        token = this.consumeToken();
      }
    };

    Parser.prototype.consumeFunction = function (functionToken) {
      var cssFunction = {
        name: functionToken.value,
        values: [],
        type: 18
        /* FUNCTION */

      };

      while (true) {
        var token = this.consumeToken();

        if (token.type === 32
        /* EOF_TOKEN */
        || token.type === 3
        /* RIGHT_PARENTHESIS_TOKEN */
        ) {
          return cssFunction;
        }

        this.reconsumeToken(token);
        cssFunction.values.push(this.consumeComponentValue());
      }
    };

    Parser.prototype.consumeToken = function () {
      var token = this._tokens.shift();

      return typeof token === 'undefined' ? EOF_TOKEN : token;
    };

    Parser.prototype.reconsumeToken = function (token) {
      this._tokens.unshift(token);
    };

    return Parser;
  }();

  var isDimensionToken = function isDimensionToken(token) {
    return token.type === 15
    /* DIMENSION_TOKEN */
    ;
  };

  var isNumberToken = function isNumberToken(token) {
    return token.type === 17
    /* NUMBER_TOKEN */
    ;
  };

  var isIdentToken = function isIdentToken(token) {
    return token.type === 20
    /* IDENT_TOKEN */
    ;
  };

  var isStringToken = function isStringToken(token) {
    return token.type === 0
    /* STRING_TOKEN */
    ;
  };

  var isIdentWithValue = function isIdentWithValue(token, value) {
    return isIdentToken(token) && token.value === value;
  };

  var nonWhiteSpace = function nonWhiteSpace(token) {
    return token.type !== 31
    /* WHITESPACE_TOKEN */
    ;
  };

  var nonFunctionArgSeparator = function nonFunctionArgSeparator(token) {
    return token.type !== 31
    /* WHITESPACE_TOKEN */
    && token.type !== 4
    /* COMMA_TOKEN */
    ;
  };

  var parseFunctionArgs = function parseFunctionArgs(tokens) {
    var args = [];
    var arg = [];
    tokens.forEach(function (token) {
      if (token.type === 4
      /* COMMA_TOKEN */
      ) {
        if (arg.length === 0) {
          throw new Error("Error parsing function args, zero tokens for arg");
        }

        args.push(arg);
        arg = [];
        return;
      }

      if (token.type !== 31
      /* WHITESPACE_TOKEN */
      ) {
        arg.push(token);
      }
    });

    if (arg.length) {
      args.push(arg);
    }

    return args;
  };

  var isEndingTokenFor = function isEndingTokenFor(token, type) {
    if (type === 11
    /* LEFT_CURLY_BRACKET_TOKEN */
    && token.type === 12
    /* RIGHT_CURLY_BRACKET_TOKEN */
    ) {
      return true;
    }

    if (type === 28
    /* LEFT_SQUARE_BRACKET_TOKEN */
    && token.type === 29
    /* RIGHT_SQUARE_BRACKET_TOKEN */
    ) {
      return true;
    }

    return type === 2
    /* LEFT_PARENTHESIS_TOKEN */
    && token.type === 3
    /* RIGHT_PARENTHESIS_TOKEN */
    ;
  };

  var isLength = function isLength(token) {
    return token.type === 17
    /* NUMBER_TOKEN */
    || token.type === 15
    /* DIMENSION_TOKEN */
    ;
  };

  var isLengthPercentage = function isLengthPercentage(token) {
    return token.type === 16
    /* PERCENTAGE_TOKEN */
    || isLength(token);
  };

  var parseLengthPercentageTuple = function parseLengthPercentageTuple(tokens) {
    return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
  };

  var ZERO_LENGTH = {
    type: 17
    /* NUMBER_TOKEN */
    ,
    number: 0,
    flags: FLAG_INTEGER
  };
  var FIFTY_PERCENT = {
    type: 16
    /* PERCENTAGE_TOKEN */
    ,
    number: 50,
    flags: FLAG_INTEGER
  };
  var HUNDRED_PERCENT = {
    type: 16
    /* PERCENTAGE_TOKEN */
    ,
    number: 100,
    flags: FLAG_INTEGER
  };

  var getAbsoluteValueForTuple = function getAbsoluteValueForTuple(tuple, width, height) {
    var x = tuple[0],
        y = tuple[1];
    return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== 'undefined' ? y : x, height)];
  };

  var getAbsoluteValue = function getAbsoluteValue(token, parent) {
    if (token.type === 16
    /* PERCENTAGE_TOKEN */
    ) {
      return token.number / 100 * parent;
    }

    if (isDimensionToken(token)) {
      switch (token.unit) {
        case 'rem':
        case 'em':
          return 16 * token.number;
        // TODO use correct font-size

        case 'px':
        default:
          return token.number;
      }
    }

    return token.number;
  };

  var DEG = 'deg';
  var GRAD = 'grad';
  var RAD = 'rad';
  var TURN = 'turn';
  var angle = {
    name: 'angle',
    parse: function parse(_context, value) {
      if (value.type === 15
      /* DIMENSION_TOKEN */
      ) {
        switch (value.unit) {
          case DEG:
            return Math.PI * value.number / 180;

          case GRAD:
            return Math.PI / 200 * value.number;

          case RAD:
            return value.number;

          case TURN:
            return Math.PI * 2 * value.number;
        }
      }

      throw new Error("Unsupported angle type");
    }
  };

  var isAngle = function isAngle(value) {
    if (value.type === 15
    /* DIMENSION_TOKEN */
    ) {
      if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
        return true;
      }
    }

    return false;
  };

  var parseNamedSide = function parseNamedSide(tokens) {
    var sideOrCorner = tokens.filter(isIdentToken).map(function (ident) {
      return ident.value;
    }).join(' ');

    switch (sideOrCorner) {
      case 'to bottom right':
      case 'to right bottom':
      case 'left top':
      case 'top left':
        return [ZERO_LENGTH, ZERO_LENGTH];

      case 'to top':
      case 'bottom':
        return deg(0);

      case 'to bottom left':
      case 'to left bottom':
      case 'right top':
      case 'top right':
        return [ZERO_LENGTH, HUNDRED_PERCENT];

      case 'to right':
      case 'left':
        return deg(90);

      case 'to top left':
      case 'to left top':
      case 'right bottom':
      case 'bottom right':
        return [HUNDRED_PERCENT, HUNDRED_PERCENT];

      case 'to bottom':
      case 'top':
        return deg(180);

      case 'to top right':
      case 'to right top':
      case 'left bottom':
      case 'bottom left':
        return [HUNDRED_PERCENT, ZERO_LENGTH];

      case 'to left':
      case 'right':
        return deg(270);
    }

    return 0;
  };

  var deg = function deg(_deg) {
    return Math.PI * _deg / 180;
  };

  var color$1 = {
    name: 'color',
    parse: function parse(context, value) {
      if (value.type === 18
      /* FUNCTION */
      ) {
        var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];

        if (typeof colorFunction === 'undefined') {
          throw new Error("Attempting to parse an unsupported color function \"" + value.name + "\"");
        }

        return colorFunction(context, value.values);
      }

      if (value.type === 5
      /* HASH_TOKEN */
      ) {
        if (value.value.length === 3) {
          var r = value.value.substring(0, 1);
          var g = value.value.substring(1, 2);
          var b = value.value.substring(2, 3);
          return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
        }

        if (value.value.length === 4) {
          var r = value.value.substring(0, 1);
          var g = value.value.substring(1, 2);
          var b = value.value.substring(2, 3);
          var a = value.value.substring(3, 4);
          return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a + a, 16) / 255);
        }

        if (value.value.length === 6) {
          var r = value.value.substring(0, 2);
          var g = value.value.substring(2, 4);
          var b = value.value.substring(4, 6);
          return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
        }

        if (value.value.length === 8) {
          var r = value.value.substring(0, 2);
          var g = value.value.substring(2, 4);
          var b = value.value.substring(4, 6);
          var a = value.value.substring(6, 8);
          return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a, 16) / 255);
        }
      }

      if (value.type === 20
      /* IDENT_TOKEN */
      ) {
        var namedColor = COLORS[value.value.toUpperCase()];

        if (typeof namedColor !== 'undefined') {
          return namedColor;
        }
      }

      return COLORS.TRANSPARENT;
    }
  };

  var isTransparent = function isTransparent(color) {
    return (0xff & color) === 0;
  };

  var asString = function asString(color) {
    var alpha = 0xff & color;
    var blue = 0xff & color >> 8;
    var green = 0xff & color >> 16;
    var red = 0xff & color >> 24;
    return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
  };

  var pack = function pack(r, g, b, a) {
    return (r << 24 | g << 16 | b << 8 | Math.round(a * 255) << 0) >>> 0;
  };

  var getTokenColorValue = function getTokenColorValue(token, i) {
    if (token.type === 17
    /* NUMBER_TOKEN */
    ) {
      return token.number;
    }

    if (token.type === 16
    /* PERCENTAGE_TOKEN */
    ) {
      var max = i === 3 ? 1 : 255;
      return i === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
    }

    return 0;
  };

  var rgb = function rgb(_context, args) {
    var tokens = args.filter(nonFunctionArgSeparator);

    if (tokens.length === 3) {
      var _a = tokens.map(getTokenColorValue),
          r = _a[0],
          g = _a[1],
          b = _a[2];

      return pack(r, g, b, 1);
    }

    if (tokens.length === 4) {
      var _b = tokens.map(getTokenColorValue),
          r = _b[0],
          g = _b[1],
          b = _b[2],
          a = _b[3];

      return pack(r, g, b, a);
    }

    return 0;
  };

  function hue2rgb(t1, t2, hue) {
    if (hue < 0) {
      hue += 1;
    }

    if (hue >= 1) {
      hue -= 1;
    }

    if (hue < 1 / 6) {
      return (t2 - t1) * hue * 6 + t1;
    } else if (hue < 1 / 2) {
      return t2;
    } else if (hue < 2 / 3) {
      return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
    } else {
      return t1;
    }
  }

  var hsl = function hsl(context, args) {
    var tokens = args.filter(nonFunctionArgSeparator);
    var hue = tokens[0],
        saturation = tokens[1],
        lightness = tokens[2],
        alpha = tokens[3];
    var h = (hue.type === 17
    /* NUMBER_TOKEN */
    ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
    var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
    var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
    var a = typeof alpha !== 'undefined' && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;

    if (s === 0) {
      return pack(l * 255, l * 255, l * 255, 1);
    }

    var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
    var t1 = l * 2 - t2;
    var r = hue2rgb(t1, t2, h + 1 / 3);
    var g = hue2rgb(t1, t2, h);
    var b = hue2rgb(t1, t2, h - 1 / 3);
    return pack(r * 255, g * 255, b * 255, a);
  };

  var SUPPORTED_COLOR_FUNCTIONS = {
    hsl: hsl,
    hsla: hsl,
    rgb: rgb,
    rgba: rgb
  };

  var parseColor = function parseColor(context, value) {
    return color$1.parse(context, Parser.create(value).parseComponentValue());
  };

  var COLORS = {
    ALICEBLUE: 0xf0f8ffff,
    ANTIQUEWHITE: 0xfaebd7ff,
    AQUA: 0x00ffffff,
    AQUAMARINE: 0x7fffd4ff,
    AZURE: 0xf0ffffff,
    BEIGE: 0xf5f5dcff,
    BISQUE: 0xffe4c4ff,
    BLACK: 0x000000ff,
    BLANCHEDALMOND: 0xffebcdff,
    BLUE: 0x0000ffff,
    BLUEVIOLET: 0x8a2be2ff,
    BROWN: 0xa52a2aff,
    BURLYWOOD: 0xdeb887ff,
    CADETBLUE: 0x5f9ea0ff,
    CHARTREUSE: 0x7fff00ff,
    CHOCOLATE: 0xd2691eff,
    CORAL: 0xff7f50ff,
    CORNFLOWERBLUE: 0x6495edff,
    CORNSILK: 0xfff8dcff,
    CRIMSON: 0xdc143cff,
    CYAN: 0x00ffffff,
    DARKBLUE: 0x00008bff,
    DARKCYAN: 0x008b8bff,
    DARKGOLDENROD: 0xb886bbff,
    DARKGRAY: 0xa9a9a9ff,
    DARKGREEN: 0x006400ff,
    DARKGREY: 0xa9a9a9ff,
    DARKKHAKI: 0xbdb76bff,
    DARKMAGENTA: 0x8b008bff,
    DARKOLIVEGREEN: 0x556b2fff,
    DARKORANGE: 0xff8c00ff,
    DARKORCHID: 0x9932ccff,
    DARKRED: 0x8b0000ff,
    DARKSALMON: 0xe9967aff,
    DARKSEAGREEN: 0x8fbc8fff,
    DARKSLATEBLUE: 0x483d8bff,
    DARKSLATEGRAY: 0x2f4f4fff,
    DARKSLATEGREY: 0x2f4f4fff,
    DARKTURQUOISE: 0x00ced1ff,
    DARKVIOLET: 0x9400d3ff,
    DEEPPINK: 0xff1493ff,
    DEEPSKYBLUE: 0x00bfffff,
    DIMGRAY: 0x696969ff,
    DIMGREY: 0x696969ff,
    DODGERBLUE: 0x1e90ffff,
    FIREBRICK: 0xb22222ff,
    FLORALWHITE: 0xfffaf0ff,
    FORESTGREEN: 0x228b22ff,
    FUCHSIA: 0xff00ffff,
    GAINSBORO: 0xdcdcdcff,
    GHOSTWHITE: 0xf8f8ffff,
    GOLD: 0xffd700ff,
    GOLDENROD: 0xdaa520ff,
    GRAY: 0x808080ff,
    GREEN: 0x008000ff,
    GREENYELLOW: 0xadff2fff,
    GREY: 0x808080ff,
    HONEYDEW: 0xf0fff0ff,
    HOTPINK: 0xff69b4ff,
    INDIANRED: 0xcd5c5cff,
    INDIGO: 0x4b0082ff,
    IVORY: 0xfffff0ff,
    KHAKI: 0xf0e68cff,
    LAVENDER: 0xe6e6faff,
    LAVENDERBLUSH: 0xfff0f5ff,
    LAWNGREEN: 0x7cfc00ff,
    LEMONCHIFFON: 0xfffacdff,
    LIGHTBLUE: 0xadd8e6ff,
    LIGHTCORAL: 0xf08080ff,
    LIGHTCYAN: 0xe0ffffff,
    LIGHTGOLDENRODYELLOW: 0xfafad2ff,
    LIGHTGRAY: 0xd3d3d3ff,
    LIGHTGREEN: 0x90ee90ff,
    LIGHTGREY: 0xd3d3d3ff,
    LIGHTPINK: 0xffb6c1ff,
    LIGHTSALMON: 0xffa07aff,
    LIGHTSEAGREEN: 0x20b2aaff,
    LIGHTSKYBLUE: 0x87cefaff,
    LIGHTSLATEGRAY: 0x778899ff,
    LIGHTSLATEGREY: 0x778899ff,
    LIGHTSTEELBLUE: 0xb0c4deff,
    LIGHTYELLOW: 0xffffe0ff,
    LIME: 0x00ff00ff,
    LIMEGREEN: 0x32cd32ff,
    LINEN: 0xfaf0e6ff,
    MAGENTA: 0xff00ffff,
    MAROON: 0x800000ff,
    MEDIUMAQUAMARINE: 0x66cdaaff,
    MEDIUMBLUE: 0x0000cdff,
    MEDIUMORCHID: 0xba55d3ff,
    MEDIUMPURPLE: 0x9370dbff,
    MEDIUMSEAGREEN: 0x3cb371ff,
    MEDIUMSLATEBLUE: 0x7b68eeff,
    MEDIUMSPRINGGREEN: 0x00fa9aff,
    MEDIUMTURQUOISE: 0x48d1ccff,
    MEDIUMVIOLETRED: 0xc71585ff,
    MIDNIGHTBLUE: 0x191970ff,
    MINTCREAM: 0xf5fffaff,
    MISTYROSE: 0xffe4e1ff,
    MOCCASIN: 0xffe4b5ff,
    NAVAJOWHITE: 0xffdeadff,
    NAVY: 0x000080ff,
    OLDLACE: 0xfdf5e6ff,
    OLIVE: 0x808000ff,
    OLIVEDRAB: 0x6b8e23ff,
    ORANGE: 0xffa500ff,
    ORANGERED: 0xff4500ff,
    ORCHID: 0xda70d6ff,
    PALEGOLDENROD: 0xeee8aaff,
    PALEGREEN: 0x98fb98ff,
    PALETURQUOISE: 0xafeeeeff,
    PALEVIOLETRED: 0xdb7093ff,
    PAPAYAWHIP: 0xffefd5ff,
    PEACHPUFF: 0xffdab9ff,
    PERU: 0xcd853fff,
    PINK: 0xffc0cbff,
    PLUM: 0xdda0ddff,
    POWDERBLUE: 0xb0e0e6ff,
    PURPLE: 0x800080ff,
    REBECCAPURPLE: 0x663399ff,
    RED: 0xff0000ff,
    ROSYBROWN: 0xbc8f8fff,
    ROYALBLUE: 0x4169e1ff,
    SADDLEBROWN: 0x8b4513ff,
    SALMON: 0xfa8072ff,
    SANDYBROWN: 0xf4a460ff,
    SEAGREEN: 0x2e8b57ff,
    SEASHELL: 0xfff5eeff,
    SIENNA: 0xa0522dff,
    SILVER: 0xc0c0c0ff,
    SKYBLUE: 0x87ceebff,
    SLATEBLUE: 0x6a5acdff,
    SLATEGRAY: 0x708090ff,
    SLATEGREY: 0x708090ff,
    SNOW: 0xfffafaff,
    SPRINGGREEN: 0x00ff7fff,
    STEELBLUE: 0x4682b4ff,
    TAN: 0xd2b48cff,
    TEAL: 0x008080ff,
    THISTLE: 0xd8bfd8ff,
    TOMATO: 0xff6347ff,
    TRANSPARENT: 0x00000000,
    TURQUOISE: 0x40e0d0ff,
    VIOLET: 0xee82eeff,
    WHEAT: 0xf5deb3ff,
    WHITE: 0xffffffff,
    WHITESMOKE: 0xf5f5f5ff,
    YELLOW: 0xffff00ff,
    YELLOWGREEN: 0x9acd32ff
  };
  var backgroundClip = {
    name: 'background-clip',
    initialValue: 'border-box',
    prefix: false,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      return tokens.map(function (token) {
        if (isIdentToken(token)) {
          switch (token.value) {
            case 'padding-box':
              return 1
              /* PADDING_BOX */
              ;

            case 'content-box':
              return 2
              /* CONTENT_BOX */
              ;
          }
        }

        return 0
        /* BORDER_BOX */
        ;
      });
    }
  };
  var backgroundColor = {
    name: "background-color",
    initialValue: 'transparent',
    prefix: false,
    type: 3
    /* TYPE_VALUE */
    ,
    format: 'color'
  };

  var parseColorStop = function parseColorStop(context, args) {
    var color = color$1.parse(context, args[0]);
    var stop = args[1];
    return stop && isLengthPercentage(stop) ? {
      color: color,
      stop: stop
    } : {
      color: color,
      stop: null
    };
  };

  var processColorStops = function processColorStops(stops, lineLength) {
    var first = stops[0];
    var last = stops[stops.length - 1];

    if (first.stop === null) {
      first.stop = ZERO_LENGTH;
    }

    if (last.stop === null) {
      last.stop = HUNDRED_PERCENT;
    }

    var processStops = [];
    var previous = 0;

    for (var i = 0; i < stops.length; i++) {
      var stop_1 = stops[i].stop;

      if (stop_1 !== null) {
        var absoluteValue = getAbsoluteValue(stop_1, lineLength);

        if (absoluteValue > previous) {
          processStops.push(absoluteValue);
        } else {
          processStops.push(previous);
        }

        previous = absoluteValue;
      } else {
        processStops.push(null);
      }
    }

    var gapBegin = null;

    for (var i = 0; i < processStops.length; i++) {
      var stop_2 = processStops[i];

      if (stop_2 === null) {
        if (gapBegin === null) {
          gapBegin = i;
        }
      } else if (gapBegin !== null) {
        var gapLength = i - gapBegin;
        var beforeGap = processStops[gapBegin - 1];
        var gapValue = (stop_2 - beforeGap) / (gapLength + 1);

        for (var g = 1; g <= gapLength; g++) {
          processStops[gapBegin + g - 1] = gapValue * g;
        }

        gapBegin = null;
      }
    }

    return stops.map(function (_a, i) {
      var color = _a.color;
      return {
        color: color,
        stop: Math.max(Math.min(1, processStops[i] / lineLength), 0)
      };
    });
  };

  var getAngleFromCorner = function getAngleFromCorner(corner, width, height) {
    var centerX = width / 2;
    var centerY = height / 2;
    var x = getAbsoluteValue(corner[0], width) - centerX;
    var y = centerY - getAbsoluteValue(corner[1], height);
    return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
  };

  var calculateGradientDirection = function calculateGradientDirection(angle, width, height) {
    var radian = typeof angle === 'number' ? angle : getAngleFromCorner(angle, width, height);
    var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    var halfLineLength = lineLength / 2;
    var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
    var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
    return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
  };

  var distance = function distance(a, b) {
    return Math.sqrt(a * a + b * b);
  };

  var findCorner = function findCorner(width, height, x, y, closest) {
    var corners = [[0, 0], [0, height], [width, 0], [width, height]];
    return corners.reduce(function (stat, corner) {
      var cx = corner[0],
          cy = corner[1];
      var d = distance(x - cx, y - cy);

      if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
        return {
          optimumCorner: corner,
          optimumDistance: d
        };
      }

      return stat;
    }, {
      optimumDistance: closest ? Infinity : -Infinity,
      optimumCorner: null
    }).optimumCorner;
  };

  var calculateRadius = function calculateRadius(gradient, x, y, width, height) {
    var rx = 0;
    var ry = 0;

    switch (gradient.size) {
      case 0
      /* CLOSEST_SIDE */
      :
        // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
        // If the shape is an ellipse, it exactly meets the closest side in each dimension.
        if (gradient.shape === 0
        /* CIRCLE */
        ) {
          rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
        } else if (gradient.shape === 1
        /* ELLIPSE */
        ) {
          rx = Math.min(Math.abs(x), Math.abs(x - width));
          ry = Math.min(Math.abs(y), Math.abs(y - height));
        }

        break;

      case 2
      /* CLOSEST_CORNER */
      :
        // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
        // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
        if (gradient.shape === 0
        /* CIRCLE */
        ) {
          rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
        } else if (gradient.shape === 1
        /* ELLIPSE */
        ) {
          // Compute the ratio ry/rx (which is to be the same as for "closest-side")
          var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));

          var _a = findCorner(width, height, x, y, true),
              cx = _a[0],
              cy = _a[1];

          rx = distance(cx - x, (cy - y) / c);
          ry = c * rx;
        }

        break;

      case 1
      /* FARTHEST_SIDE */
      :
        // Same as closest-side, except the ending shape is sized based on the farthest side(s)
        if (gradient.shape === 0
        /* CIRCLE */
        ) {
          rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
        } else if (gradient.shape === 1
        /* ELLIPSE */
        ) {
          rx = Math.max(Math.abs(x), Math.abs(x - width));
          ry = Math.max(Math.abs(y), Math.abs(y - height));
        }

        break;

      case 3
      /* FARTHEST_CORNER */
      :
        // Same as closest-corner, except the ending shape is sized based on the farthest corner.
        // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
        if (gradient.shape === 0
        /* CIRCLE */
        ) {
          rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
        } else if (gradient.shape === 1
        /* ELLIPSE */
        ) {
          // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
          var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));

          var _b = findCorner(width, height, x, y, false),
              cx = _b[0],
              cy = _b[1];

          rx = distance(cx - x, (cy - y) / c);
          ry = c * rx;
        }

        break;
    }

    if (Array.isArray(gradient.size)) {
      rx = getAbsoluteValue(gradient.size[0], width);
      ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
    }

    return [rx, ry];
  };

  var linearGradient = function linearGradient(context, tokens) {
    var angle$1 = deg(180);
    var stops = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
      if (i === 0) {
        var firstToken = arg[0];

        if (firstToken.type === 20
        /* IDENT_TOKEN */
        && firstToken.value === 'to') {
          angle$1 = parseNamedSide(arg);
          return;
        } else if (isAngle(firstToken)) {
          angle$1 = angle.parse(context, firstToken);
          return;
        }
      }

      var colorStop = parseColorStop(context, arg);
      stops.push(colorStop);
    });
    return {
      angle: angle$1,
      stops: stops,
      type: 1
      /* LINEAR_GRADIENT */

    };
  };

  var prefixLinearGradient = function prefixLinearGradient(context, tokens) {
    var angle$1 = deg(180);
    var stops = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
      if (i === 0) {
        var firstToken = arg[0];

        if (firstToken.type === 20
        /* IDENT_TOKEN */
        && ['top', 'left', 'right', 'bottom'].indexOf(firstToken.value) !== -1) {
          angle$1 = parseNamedSide(arg);
          return;
        } else if (isAngle(firstToken)) {
          angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
          return;
        }
      }

      var colorStop = parseColorStop(context, arg);
      stops.push(colorStop);
    });
    return {
      angle: angle$1,
      stops: stops,
      type: 1
      /* LINEAR_GRADIENT */

    };
  };

  var webkitGradient = function webkitGradient(context, tokens) {
    var angle = deg(180);
    var stops = [];
    var type = 1
    /* LINEAR_GRADIENT */
    ;
    var shape = 0
    /* CIRCLE */
    ;
    var size = 3
    /* FARTHEST_CORNER */
    ;
    var position = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
      var firstToken = arg[0];

      if (i === 0) {
        if (isIdentToken(firstToken) && firstToken.value === 'linear') {
          type = 1
          /* LINEAR_GRADIENT */
          ;
          return;
        } else if (isIdentToken(firstToken) && firstToken.value === 'radial') {
          type = 2
          /* RADIAL_GRADIENT */
          ;
          return;
        }
      }

      if (firstToken.type === 18
      /* FUNCTION */
      ) {
        if (firstToken.name === 'from') {
          var color = color$1.parse(context, firstToken.values[0]);
          stops.push({
            stop: ZERO_LENGTH,
            color: color
          });
        } else if (firstToken.name === 'to') {
          var color = color$1.parse(context, firstToken.values[0]);
          stops.push({
            stop: HUNDRED_PERCENT,
            color: color
          });
        } else if (firstToken.name === 'color-stop') {
          var values = firstToken.values.filter(nonFunctionArgSeparator);

          if (values.length === 2) {
            var color = color$1.parse(context, values[1]);
            var stop_1 = values[0];

            if (isNumberToken(stop_1)) {
              stops.push({
                stop: {
                  type: 16
                  /* PERCENTAGE_TOKEN */
                  ,
                  number: stop_1.number * 100,
                  flags: stop_1.flags
                },
                color: color
              });
            }
          }
        }
      }
    });
    return type === 1
    /* LINEAR_GRADIENT */
    ? {
      angle: (angle + deg(180)) % deg(360),
      stops: stops,
      type: type
    } : {
      size: size,
      shape: shape,
      stops: stops,
      position: position,
      type: type
    };
  };

  var CLOSEST_SIDE = 'closest-side';
  var FARTHEST_SIDE = 'farthest-side';
  var CLOSEST_CORNER = 'closest-corner';
  var FARTHEST_CORNER = 'farthest-corner';
  var CIRCLE = 'circle';
  var ELLIPSE = 'ellipse';
  var COVER = 'cover';
  var CONTAIN = 'contain';

  var radialGradient = function radialGradient(context, tokens) {
    var shape = 0
    /* CIRCLE */
    ;
    var size = 3
    /* FARTHEST_CORNER */
    ;
    var stops = [];
    var position = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
      var isColorStop = true;

      if (i === 0) {
        var isAtPosition_1 = false;
        isColorStop = arg.reduce(function (acc, token) {
          if (isAtPosition_1) {
            if (isIdentToken(token)) {
              switch (token.value) {
                case 'center':
                  position.push(FIFTY_PERCENT);
                  return acc;

                case 'top':
                case 'left':
                  position.push(ZERO_LENGTH);
                  return acc;

                case 'right':
                case 'bottom':
                  position.push(HUNDRED_PERCENT);
                  return acc;
              }
            } else if (isLengthPercentage(token) || isLength(token)) {
              position.push(token);
            }
          } else if (isIdentToken(token)) {
            switch (token.value) {
              case CIRCLE:
                shape = 0
                /* CIRCLE */
                ;
                return false;

              case ELLIPSE:
                shape = 1
                /* ELLIPSE */
                ;
                return false;

              case 'at':
                isAtPosition_1 = true;
                return false;

              case CLOSEST_SIDE:
                size = 0
                /* CLOSEST_SIDE */
                ;
                return false;

              case COVER:
              case FARTHEST_SIDE:
                size = 1
                /* FARTHEST_SIDE */
                ;
                return false;

              case CONTAIN:
              case CLOSEST_CORNER:
                size = 2
                /* CLOSEST_CORNER */
                ;
                return false;

              case FARTHEST_CORNER:
                size = 3
                /* FARTHEST_CORNER */
                ;
                return false;
            }
          } else if (isLength(token) || isLengthPercentage(token)) {
            if (!Array.isArray(size)) {
              size = [];
            }

            size.push(token);
            return false;
          }

          return acc;
        }, isColorStop);
      }

      if (isColorStop) {
        var colorStop = parseColorStop(context, arg);
        stops.push(colorStop);
      }
    });
    return {
      size: size,
      shape: shape,
      stops: stops,
      position: position,
      type: 2
      /* RADIAL_GRADIENT */

    };
  };

  var prefixRadialGradient = function prefixRadialGradient(context, tokens) {
    var shape = 0
    /* CIRCLE */
    ;
    var size = 3
    /* FARTHEST_CORNER */
    ;
    var stops = [];
    var position = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
      var isColorStop = true;

      if (i === 0) {
        isColorStop = arg.reduce(function (acc, token) {
          if (isIdentToken(token)) {
            switch (token.value) {
              case 'center':
                position.push(FIFTY_PERCENT);
                return false;

              case 'top':
              case 'left':
                position.push(ZERO_LENGTH);
                return false;

              case 'right':
              case 'bottom':
                position.push(HUNDRED_PERCENT);
                return false;
            }
          } else if (isLengthPercentage(token) || isLength(token)) {
            position.push(token);
            return false;
          }

          return acc;
        }, isColorStop);
      } else if (i === 1) {
        isColorStop = arg.reduce(function (acc, token) {
          if (isIdentToken(token)) {
            switch (token.value) {
              case CIRCLE:
                shape = 0
                /* CIRCLE */
                ;
                return false;

              case ELLIPSE:
                shape = 1
                /* ELLIPSE */
                ;
                return false;

              case CONTAIN:
              case CLOSEST_SIDE:
                size = 0
                /* CLOSEST_SIDE */
                ;
                return false;

              case FARTHEST_SIDE:
                size = 1
                /* FARTHEST_SIDE */
                ;
                return false;

              case CLOSEST_CORNER:
                size = 2
                /* CLOSEST_CORNER */
                ;
                return false;

              case COVER:
              case FARTHEST_CORNER:
                size = 3
                /* FARTHEST_CORNER */
                ;
                return false;
            }
          } else if (isLength(token) || isLengthPercentage(token)) {
            if (!Array.isArray(size)) {
              size = [];
            }

            size.push(token);
            return false;
          }

          return acc;
        }, isColorStop);
      }

      if (isColorStop) {
        var colorStop = parseColorStop(context, arg);
        stops.push(colorStop);
      }
    });
    return {
      size: size,
      shape: shape,
      stops: stops,
      position: position,
      type: 2
      /* RADIAL_GRADIENT */

    };
  };

  var isLinearGradient = function isLinearGradient(background) {
    return background.type === 1
    /* LINEAR_GRADIENT */
    ;
  };

  var isRadialGradient = function isRadialGradient(background) {
    return background.type === 2
    /* RADIAL_GRADIENT */
    ;
  };

  var image = {
    name: 'image',
    parse: function parse(context, value) {
      if (value.type === 22
      /* URL_TOKEN */
      ) {
        var image_1 = {
          url: value.value,
          type: 0
          /* URL */

        };
        context.cache.addImage(value.value);
        return image_1;
      }

      if (value.type === 18
      /* FUNCTION */
      ) {
        var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];

        if (typeof imageFunction === 'undefined') {
          throw new Error("Attempting to parse an unsupported image function \"" + value.name + "\"");
        }

        return imageFunction(context, value.values);
      }

      throw new Error("Unsupported image type " + value.type);
    }
  };

  function isSupportedImage(value) {
    return !(value.type === 20
    /* IDENT_TOKEN */
    && value.value === 'none') && (value.type !== 18
    /* FUNCTION */
    || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]);
  }

  var SUPPORTED_IMAGE_FUNCTIONS = {
    'linear-gradient': linearGradient,
    '-moz-linear-gradient': prefixLinearGradient,
    '-ms-linear-gradient': prefixLinearGradient,
    '-o-linear-gradient': prefixLinearGradient,
    '-webkit-linear-gradient': prefixLinearGradient,
    'radial-gradient': radialGradient,
    '-moz-radial-gradient': prefixRadialGradient,
    '-ms-radial-gradient': prefixRadialGradient,
    '-o-radial-gradient': prefixRadialGradient,
    '-webkit-radial-gradient': prefixRadialGradient,
    '-webkit-gradient': webkitGradient
  };
  var backgroundImage = {
    name: 'background-image',
    initialValue: 'none',
    type: 1
    /* LIST */
    ,
    prefix: false,
    parse: function parse(context, tokens) {
      if (tokens.length === 0) {
        return [];
      }

      var first = tokens[0];

      if (first.type === 20
      /* IDENT_TOKEN */
      && first.value === 'none') {
        return [];
      }

      return tokens.filter(function (value) {
        return nonFunctionArgSeparator(value) && isSupportedImage(value);
      }).map(function (value) {
        return image.parse(context, value);
      });
    }
  };
  var backgroundOrigin = {
    name: 'background-origin',
    initialValue: 'border-box',
    prefix: false,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      return tokens.map(function (token) {
        if (isIdentToken(token)) {
          switch (token.value) {
            case 'padding-box':
              return 1
              /* PADDING_BOX */
              ;

            case 'content-box':
              return 2
              /* CONTENT_BOX */
              ;
          }
        }

        return 0
        /* BORDER_BOX */
        ;
      });
    }
  };
  var backgroundPosition = {
    name: 'background-position',
    initialValue: '0% 0%',
    type: 1
    /* LIST */
    ,
    prefix: false,
    parse: function parse(_context, tokens) {
      return parseFunctionArgs(tokens).map(function (values) {
        return values.filter(isLengthPercentage);
      }).map(parseLengthPercentageTuple);
    }
  };
  var backgroundRepeat = {
    name: 'background-repeat',
    initialValue: 'repeat',
    prefix: false,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      return parseFunctionArgs(tokens).map(function (values) {
        return values.filter(isIdentToken).map(function (token) {
          return token.value;
        }).join(' ');
      }).map(parseBackgroundRepeat);
    }
  };

  var parseBackgroundRepeat = function parseBackgroundRepeat(value) {
    switch (value) {
      case 'no-repeat':
        return 1
        /* NO_REPEAT */
        ;

      case 'repeat-x':
      case 'repeat no-repeat':
        return 2
        /* REPEAT_X */
        ;

      case 'repeat-y':
      case 'no-repeat repeat':
        return 3
        /* REPEAT_Y */
        ;

      case 'repeat':
      default:
        return 0
        /* REPEAT */
        ;
    }
  };

  var BACKGROUND_SIZE;

  (function (BACKGROUND_SIZE) {
    BACKGROUND_SIZE["AUTO"] = "auto";
    BACKGROUND_SIZE["CONTAIN"] = "contain";
    BACKGROUND_SIZE["COVER"] = "cover";
  })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));

  var backgroundSize = {
    name: 'background-size',
    initialValue: '0',
    prefix: false,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      return parseFunctionArgs(tokens).map(function (values) {
        return values.filter(isBackgroundSizeInfoToken);
      });
    }
  };

  var isBackgroundSizeInfoToken = function isBackgroundSizeInfoToken(value) {
    return isIdentToken(value) || isLengthPercentage(value);
  };

  var borderColorForSide = function borderColorForSide(side) {
    return {
      name: "border-" + side + "-color",
      initialValue: 'transparent',
      prefix: false,
      type: 3
      /* TYPE_VALUE */
      ,
      format: 'color'
    };
  };

  var borderTopColor = borderColorForSide('top');
  var borderRightColor = borderColorForSide('right');
  var borderBottomColor = borderColorForSide('bottom');
  var borderLeftColor = borderColorForSide('left');

  var borderRadiusForSide = function borderRadiusForSide(side) {
    return {
      name: "border-radius-" + side,
      initialValue: '0 0',
      prefix: false,
      type: 1
      /* LIST */
      ,
      parse: function parse(_context, tokens) {
        return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
      }
    };
  };

  var borderTopLeftRadius = borderRadiusForSide('top-left');
  var borderTopRightRadius = borderRadiusForSide('top-right');
  var borderBottomRightRadius = borderRadiusForSide('bottom-right');
  var borderBottomLeftRadius = borderRadiusForSide('bottom-left');

  var borderStyleForSide = function borderStyleForSide(side) {
    return {
      name: "border-" + side + "-style",
      initialValue: 'solid',
      prefix: false,
      type: 2
      /* IDENT_VALUE */
      ,
      parse: function parse(_context, style) {
        switch (style) {
          case 'none':
            return 0
            /* NONE */
            ;

          case 'dashed':
            return 2
            /* DASHED */
            ;

          case 'dotted':
            return 3
            /* DOTTED */
            ;

          case 'double':
            return 4
            /* DOUBLE */
            ;
        }

        return 1
        /* SOLID */
        ;
      }
    };
  };

  var borderTopStyle = borderStyleForSide('top');
  var borderRightStyle = borderStyleForSide('right');
  var borderBottomStyle = borderStyleForSide('bottom');
  var borderLeftStyle = borderStyleForSide('left');

  var borderWidthForSide = function borderWidthForSide(side) {
    return {
      name: "border-" + side + "-width",
      initialValue: '0',
      type: 0
      /* VALUE */
      ,
      prefix: false,
      parse: function parse(_context, token) {
        if (isDimensionToken(token)) {
          return token.number;
        }

        return 0;
      }
    };
  };

  var borderTopWidth = borderWidthForSide('top');
  var borderRightWidth = borderWidthForSide('right');
  var borderBottomWidth = borderWidthForSide('bottom');
  var borderLeftWidth = borderWidthForSide('left');
  var color = {
    name: "color",
    initialValue: 'transparent',
    prefix: false,
    type: 3
    /* TYPE_VALUE */
    ,
    format: 'color'
  };
  var direction = {
    name: 'direction',
    initialValue: 'ltr',
    prefix: false,
    type: 2
    /* IDENT_VALUE */
    ,
    parse: function parse(_context, direction) {
      switch (direction) {
        case 'rtl':
          return 1
          /* RTL */
          ;

        case 'ltr':
        default:
          return 0
          /* LTR */
          ;
      }
    }
  };
  var display = {
    name: 'display',
    initialValue: 'inline-block',
    prefix: false,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      return tokens.filter(isIdentToken).reduce(function (bit, token) {
        return bit | parseDisplayValue(token.value);
      }, 0
      /* NONE */
      );
    }
  };

  var parseDisplayValue = function parseDisplayValue(display) {
    switch (display) {
      case 'block':
      case '-webkit-box':
        return 2
        /* BLOCK */
        ;

      case 'inline':
        return 4
        /* INLINE */
        ;

      case 'run-in':
        return 8
        /* RUN_IN */
        ;

      case 'flow':
        return 16
        /* FLOW */
        ;

      case 'flow-root':
        return 32
        /* FLOW_ROOT */
        ;

      case 'table':
        return 64
        /* TABLE */
        ;

      case 'flex':
      case '-webkit-flex':
        return 128
        /* FLEX */
        ;

      case 'grid':
      case '-ms-grid':
        return 256
        /* GRID */
        ;

      case 'ruby':
        return 512
        /* RUBY */
        ;

      case 'subgrid':
        return 1024
        /* SUBGRID */
        ;

      case 'list-item':
        return 2048
        /* LIST_ITEM */
        ;

      case 'table-row-group':
        return 4096
        /* TABLE_ROW_GROUP */
        ;

      case 'table-header-group':
        return 8192
        /* TABLE_HEADER_GROUP */
        ;

      case 'table-footer-group':
        return 16384
        /* TABLE_FOOTER_GROUP */
        ;

      case 'table-row':
        return 32768
        /* TABLE_ROW */
        ;

      case 'table-cell':
        return 65536
        /* TABLE_CELL */
        ;

      case 'table-column-group':
        return 131072
        /* TABLE_COLUMN_GROUP */
        ;

      case 'table-column':
        return 262144
        /* TABLE_COLUMN */
        ;

      case 'table-caption':
        return 524288
        /* TABLE_CAPTION */
        ;

      case 'ruby-base':
        return 1048576
        /* RUBY_BASE */
        ;

      case 'ruby-text':
        return 2097152
        /* RUBY_TEXT */
        ;

      case 'ruby-base-container':
        return 4194304
        /* RUBY_BASE_CONTAINER */
        ;

      case 'ruby-text-container':
        return 8388608
        /* RUBY_TEXT_CONTAINER */
        ;

      case 'contents':
        return 16777216
        /* CONTENTS */
        ;

      case 'inline-block':
        return 33554432
        /* INLINE_BLOCK */
        ;

      case 'inline-list-item':
        return 67108864
        /* INLINE_LIST_ITEM */
        ;

      case 'inline-table':
        return 134217728
        /* INLINE_TABLE */
        ;

      case 'inline-flex':
        return 268435456
        /* INLINE_FLEX */
        ;

      case 'inline-grid':
        return 536870912
        /* INLINE_GRID */
        ;
    }

    return 0
    /* NONE */
    ;
  };

  var float = {
    name: 'float',
    initialValue: 'none',
    prefix: false,
    type: 2
    /* IDENT_VALUE */
    ,
    parse: function parse(_context, float) {
      switch (float) {
        case 'left':
          return 1
          /* LEFT */
          ;

        case 'right':
          return 2
          /* RIGHT */
          ;

        case 'inline-start':
          return 3
          /* INLINE_START */
          ;

        case 'inline-end':
          return 4
          /* INLINE_END */
          ;
      }

      return 0
      /* NONE */
      ;
    }
  };
  var letterSpacing = {
    name: 'letter-spacing',
    initialValue: '0',
    prefix: false,
    type: 0
    /* VALUE */
    ,
    parse: function parse(_context, token) {
      if (token.type === 20
      /* IDENT_TOKEN */
      && token.value === 'normal') {
        return 0;
      }

      if (token.type === 17
      /* NUMBER_TOKEN */
      ) {
        return token.number;
      }

      if (token.type === 15
      /* DIMENSION_TOKEN */
      ) {
        return token.number;
      }

      return 0;
    }
  };
  var LINE_BREAK;

  (function (LINE_BREAK) {
    LINE_BREAK["NORMAL"] = "normal";
    LINE_BREAK["STRICT"] = "strict";
  })(LINE_BREAK || (LINE_BREAK = {}));

  var lineBreak = {
    name: 'line-break',
    initialValue: 'normal',
    prefix: false,
    type: 2
    /* IDENT_VALUE */
    ,
    parse: function parse(_context, lineBreak) {
      switch (lineBreak) {
        case 'strict':
          return LINE_BREAK.STRICT;

        case 'normal':
        default:
          return LINE_BREAK.NORMAL;
      }
    }
  };
  var lineHeight = {
    name: 'line-height',
    initialValue: 'normal',
    prefix: false,
    type: 4
    /* TOKEN_VALUE */

  };

  var computeLineHeight = function computeLineHeight(token, fontSize) {
    if (isIdentToken(token) && token.value === 'normal') {
      return 1.2 * fontSize;
    } else if (token.type === 17
    /* NUMBER_TOKEN */
    ) {
      return fontSize * token.number;
    } else if (isLengthPercentage(token)) {
      return getAbsoluteValue(token, fontSize);
    }

    return fontSize;
  };

  var listStyleImage = {
    name: 'list-style-image',
    initialValue: 'none',
    type: 0
    /* VALUE */
    ,
    prefix: false,
    parse: function parse(context, token) {
      if (token.type === 20
      /* IDENT_TOKEN */
      && token.value === 'none') {
        return null;
      }

      return image.parse(context, token);
    }
  };
  var listStylePosition = {
    name: 'list-style-position',
    initialValue: 'outside',
    prefix: false,
    type: 2
    /* IDENT_VALUE */
    ,
    parse: function parse(_context, position) {
      switch (position) {
        case 'inside':
          return 0
          /* INSIDE */
          ;

        case 'outside':
        default:
          return 1
          /* OUTSIDE */
          ;
      }
    }
  };
  var listStyleType = {
    name: 'list-style-type',
    initialValue: 'none',
    prefix: false,
    type: 2
    /* IDENT_VALUE */
    ,
    parse: function parse(_context, type) {
      switch (type) {
        case 'disc':
          return 0
          /* DISC */
          ;

        case 'circle':
          return 1
          /* CIRCLE */
          ;

        case 'square':
          return 2
          /* SQUARE */
          ;

        case 'decimal':
          return 3
          /* DECIMAL */
          ;

        case 'cjk-decimal':
          return 4
          /* CJK_DECIMAL */
          ;

        case 'decimal-leading-zero':
          return 5
          /* DECIMAL_LEADING_ZERO */
          ;

        case 'lower-roman':
          return 6
          /* LOWER_ROMAN */
          ;

        case 'upper-roman':
          return 7
          /* UPPER_ROMAN */
          ;

        case 'lower-greek':
          return 8
          /* LOWER_GREEK */
          ;

        case 'lower-alpha':
          return 9
          /* LOWER_ALPHA */
          ;

        case 'upper-alpha':
          return 10
          /* UPPER_ALPHA */
          ;

        case 'arabic-indic':
          return 11
          /* ARABIC_INDIC */
          ;

        case 'armenian':
          return 12
          /* ARMENIAN */
          ;

        case 'bengali':
          return 13
          /* BENGALI */
          ;

        case 'cambodian':
          return 14
          /* CAMBODIAN */
          ;

        case 'cjk-earthly-branch':
          return 15
          /* CJK_EARTHLY_BRANCH */
          ;

        case 'cjk-heavenly-stem':
          return 16
          /* CJK_HEAVENLY_STEM */
          ;

        case 'cjk-ideographic':
          return 17
          /* CJK_IDEOGRAPHIC */
          ;

        case 'devanagari':
          return 18
          /* DEVANAGARI */
          ;

        case 'ethiopic-numeric':
          return 19
          /* ETHIOPIC_NUMERIC */
          ;

        case 'georgian':
          return 20
          /* GEORGIAN */
          ;

        case 'gujarati':
          return 21
          /* GUJARATI */
          ;

        case 'gurmukhi':
          return 22
          /* GURMUKHI */
          ;

        case 'hebrew':
          return 22
          /* HEBREW */
          ;

        case 'hiragana':
          return 23
          /* HIRAGANA */
          ;

        case 'hiragana-iroha':
          return 24
          /* HIRAGANA_IROHA */
          ;

        case 'japanese-formal':
          return 25
          /* JAPANESE_FORMAL */
          ;

        case 'japanese-informal':
          return 26
          /* JAPANESE_INFORMAL */
          ;

        case 'kannada':
          return 27
          /* KANNADA */
          ;

        case 'katakana':
          return 28
          /* KATAKANA */
          ;

        case 'katakana-iroha':
          return 29
          /* KATAKANA_IROHA */
          ;

        case 'khmer':
          return 30
          /* KHMER */
          ;

        case 'korean-hangul-formal':
          return 31
          /* KOREAN_HANGUL_FORMAL */
          ;

        case 'korean-hanja-formal':
          return 32
          /* KOREAN_HANJA_FORMAL */
          ;

        case 'korean-hanja-informal':
          return 33
          /* KOREAN_HANJA_INFORMAL */
          ;

        case 'lao':
          return 34
          /* LAO */
          ;

        case 'lower-armenian':
          return 35
          /* LOWER_ARMENIAN */
          ;

        case 'malayalam':
          return 36
          /* MALAYALAM */
          ;

        case 'mongolian':
          return 37
          /* MONGOLIAN */
          ;

        case 'myanmar':
          return 38
          /* MYANMAR */
          ;

        case 'oriya':
          return 39
          /* ORIYA */
          ;

        case 'persian':
          return 40
          /* PERSIAN */
          ;

        case 'simp-chinese-formal':
          return 41
          /* SIMP_CHINESE_FORMAL */
          ;

        case 'simp-chinese-informal':
          return 42
          /* SIMP_CHINESE_INFORMAL */
          ;

        case 'tamil':
          return 43
          /* TAMIL */
          ;

        case 'telugu':
          return 44
          /* TELUGU */
          ;

        case 'thai':
          return 45
          /* THAI */
          ;

        case 'tibetan':
          return 46
          /* TIBETAN */
          ;

        case 'trad-chinese-formal':
          return 47
          /* TRAD_CHINESE_FORMAL */
          ;

        case 'trad-chinese-informal':
          return 48
          /* TRAD_CHINESE_INFORMAL */
          ;

        case 'upper-armenian':
          return 49
          /* UPPER_ARMENIAN */
          ;

        case 'disclosure-open':
          return 50
          /* DISCLOSURE_OPEN */
          ;

        case 'disclosure-closed':
          return 51
          /* DISCLOSURE_CLOSED */
          ;

        case 'none':
        default:
          return -1
          /* NONE */
          ;
      }
    }
  };

  var marginForSide = function marginForSide(side) {
    return {
      name: "margin-" + side,
      initialValue: '0',
      prefix: false,
      type: 4
      /* TOKEN_VALUE */

    };
  };

  var marginTop = marginForSide('top');
  var marginRight = marginForSide('right');
  var marginBottom = marginForSide('bottom');
  var marginLeft = marginForSide('left');
  var overflow = {
    name: 'overflow',
    initialValue: 'visible',
    prefix: false,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      return tokens.filter(isIdentToken).map(function (overflow) {
        switch (overflow.value) {
          case 'hidden':
            return 1
            /* HIDDEN */
            ;

          case 'scroll':
            return 2
            /* SCROLL */
            ;

          case 'clip':
            return 3
            /* CLIP */
            ;

          case 'auto':
            return 4
            /* AUTO */
            ;

          case 'visible':
          default:
            return 0
            /* VISIBLE */
            ;
        }
      });
    }
  };
  var overflowWrap = {
    name: 'overflow-wrap',
    initialValue: 'normal',
    prefix: false,
    type: 2
    /* IDENT_VALUE */
    ,
    parse: function parse(_context, overflow) {
      switch (overflow) {
        case 'break-word':
          return "break-word"
          /* BREAK_WORD */
          ;

        case 'normal':
        default:
          return "normal"
          /* NORMAL */
          ;
      }
    }
  };

  var paddingForSide = function paddingForSide(side) {
    return {
      name: "padding-" + side,
      initialValue: '0',
      prefix: false,
      type: 3
      /* TYPE_VALUE */
      ,
      format: 'length-percentage'
    };
  };

  var paddingTop = paddingForSide('top');
  var paddingRight = paddingForSide('right');
  var paddingBottom = paddingForSide('bottom');
  var paddingLeft = paddingForSide('left');
  var textAlign = {
    name: 'text-align',
    initialValue: 'left',
    prefix: false,
    type: 2
    /* IDENT_VALUE */
    ,
    parse: function parse(_context, textAlign) {
      switch (textAlign) {
        case 'right':
          return 2
          /* RIGHT */
          ;

        case 'center':
        case 'justify':
          return 1
          /* CENTER */
          ;

        case 'left':
        default:
          return 0
          /* LEFT */
          ;
      }
    }
  };
  var position = {
    name: 'position',
    initialValue: 'static',
    prefix: false,
    type: 2
    /* IDENT_VALUE */
    ,
    parse: function parse(_context, position) {
      switch (position) {
        case 'relative':
          return 1
          /* RELATIVE */
          ;

        case 'absolute':
          return 2
          /* ABSOLUTE */
          ;

        case 'fixed':
          return 3
          /* FIXED */
          ;

        case 'sticky':
          return 4
          /* STICKY */
          ;
      }

      return 0
      /* STATIC */
      ;
    }
  };
  var textShadow = {
    name: 'text-shadow',
    initialValue: 'none',
    type: 1
    /* LIST */
    ,
    prefix: false,
    parse: function parse(context, tokens) {
      if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
        return [];
      }

      return parseFunctionArgs(tokens).map(function (values) {
        var shadow = {
          color: COLORS.TRANSPARENT,
          offsetX: ZERO_LENGTH,
          offsetY: ZERO_LENGTH,
          blur: ZERO_LENGTH
        };
        var c = 0;

        for (var i = 0; i < values.length; i++) {
          var token = values[i];

          if (isLength(token)) {
            if (c === 0) {
              shadow.offsetX = token;
            } else if (c === 1) {
              shadow.offsetY = token;
            } else {
              shadow.blur = token;
            }

            c++;
          } else {
            shadow.color = color$1.parse(context, token);
          }
        }

        return shadow;
      });
    }
  };
  var textTransform = {
    name: 'text-transform',
    initialValue: 'none',
    prefix: false,
    type: 2
    /* IDENT_VALUE */
    ,
    parse: function parse(_context, textTransform) {
      switch (textTransform) {
        case 'uppercase':
          return 2
          /* UPPERCASE */
          ;

        case 'lowercase':
          return 1
          /* LOWERCASE */
          ;

        case 'capitalize':
          return 3
          /* CAPITALIZE */
          ;
      }

      return 0
      /* NONE */
      ;
    }
  };
  var transform$1 = {
    name: 'transform',
    initialValue: 'none',
    prefix: true,
    type: 0
    /* VALUE */
    ,
    parse: function parse(_context, token) {
      if (token.type === 20
      /* IDENT_TOKEN */
      && token.value === 'none') {
        return null;
      }

      if (token.type === 18
      /* FUNCTION */
      ) {
        var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];

        if (typeof transformFunction === 'undefined') {
          throw new Error("Attempting to parse an unsupported transform function \"" + token.name + "\"");
        }

        return transformFunction(token.values);
      }

      return null;
    }
  };

  var matrix = function matrix(args) {
    var values = args.filter(function (arg) {
      return arg.type === 17
      /* NUMBER_TOKEN */
      ;
    }).map(function (arg) {
      return arg.number;
    });
    return values.length === 6 ? values : null;
  }; // doesn't support 3D transforms at the moment


  var matrix3d = function matrix3d(args) {
    var values = args.filter(function (arg) {
      return arg.type === 17
      /* NUMBER_TOKEN */
      ;
    }).map(function (arg) {
      return arg.number;
    });
    var a1 = values[0],
        b1 = values[1];
    values[2];
    values[3];
    var a2 = values[4],
        b2 = values[5];
    values[6];
    values[7];
    values[8];
    values[9];
    values[10];
    values[11];
    var a4 = values[12],
        b4 = values[13];
    values[14];
    values[15];
    return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
  };

  var SUPPORTED_TRANSFORM_FUNCTIONS = {
    matrix: matrix,
    matrix3d: matrix3d
  };
  var DEFAULT_VALUE = {
    type: 16
    /* PERCENTAGE_TOKEN */
    ,
    number: 50,
    flags: FLAG_INTEGER
  };
  var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
  var transformOrigin = {
    name: 'transform-origin',
    initialValue: '50% 50%',
    prefix: true,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      var origins = tokens.filter(isLengthPercentage);

      if (origins.length !== 2) {
        return DEFAULT;
      }

      return [origins[0], origins[1]];
    }
  };
  var visibility = {
    name: 'visible',
    initialValue: 'none',
    prefix: false,
    type: 2
    /* IDENT_VALUE */
    ,
    parse: function parse(_context, visibility) {
      switch (visibility) {
        case 'hidden':
          return 1
          /* HIDDEN */
          ;

        case 'collapse':
          return 2
          /* COLLAPSE */
          ;

        case 'visible':
        default:
          return 0
          /* VISIBLE */
          ;
      }
    }
  };
  var WORD_BREAK;

  (function (WORD_BREAK) {
    WORD_BREAK["NORMAL"] = "normal";
    WORD_BREAK["BREAK_ALL"] = "break-all";
    WORD_BREAK["KEEP_ALL"] = "keep-all";
  })(WORD_BREAK || (WORD_BREAK = {}));

  var wordBreak = {
    name: 'word-break',
    initialValue: 'normal',
    prefix: false,
    type: 2
    /* IDENT_VALUE */
    ,
    parse: function parse(_context, wordBreak) {
      switch (wordBreak) {
        case 'break-all':
          return WORD_BREAK.BREAK_ALL;

        case 'keep-all':
          return WORD_BREAK.KEEP_ALL;

        case 'normal':
        default:
          return WORD_BREAK.NORMAL;
      }
    }
  };
  var zIndex = {
    name: 'z-index',
    initialValue: 'auto',
    prefix: false,
    type: 0
    /* VALUE */
    ,
    parse: function parse(_context, token) {
      if (token.type === 20
      /* IDENT_TOKEN */
      ) {
        return {
          auto: true,
          order: 0
        };
      }

      if (isNumberToken(token)) {
        return {
          auto: false,
          order: token.number
        };
      }

      throw new Error("Invalid z-index number parsed");
    }
  };
  var time = {
    name: 'time',
    parse: function parse(_context, value) {
      if (value.type === 15
      /* DIMENSION_TOKEN */
      ) {
        switch (value.unit.toLowerCase()) {
          case 's':
            return 1000 * value.number;

          case 'ms':
            return value.number;
        }
      }

      throw new Error("Unsupported time type");
    }
  };
  var opacity = {
    name: 'opacity',
    initialValue: '1',
    type: 0
    /* VALUE */
    ,
    prefix: false,
    parse: function parse(_context, token) {
      if (isNumberToken(token)) {
        return token.number;
      }

      return 1;
    }
  };
  var textDecorationColor = {
    name: "text-decoration-color",
    initialValue: 'transparent',
    prefix: false,
    type: 3
    /* TYPE_VALUE */
    ,
    format: 'color'
  };
  var textDecorationLine = {
    name: 'text-decoration-line',
    initialValue: 'none',
    prefix: false,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      return tokens.filter(isIdentToken).map(function (token) {
        switch (token.value) {
          case 'underline':
            return 1
            /* UNDERLINE */
            ;

          case 'overline':
            return 2
            /* OVERLINE */
            ;

          case 'line-through':
            return 3
            /* LINE_THROUGH */
            ;

          case 'none':
            return 4
            /* BLINK */
            ;
        }

        return 0
        /* NONE */
        ;
      }).filter(function (line) {
        return line !== 0
        /* NONE */
        ;
      });
    }
  };
  var fontFamily = {
    name: "font-family",
    initialValue: '',
    prefix: false,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      var accumulator = [];
      var results = [];
      tokens.forEach(function (token) {
        switch (token.type) {
          case 20
          /* IDENT_TOKEN */
          :
          case 0
          /* STRING_TOKEN */
          :
            accumulator.push(token.value);
            break;

          case 17
          /* NUMBER_TOKEN */
          :
            accumulator.push(token.number.toString());
            break;

          case 4
          /* COMMA_TOKEN */
          :
            results.push(accumulator.join(' '));
            accumulator.length = 0;
            break;
        }
      });

      if (accumulator.length) {
        results.push(accumulator.join(' '));
      }

      return results.map(function (result) {
        return result.indexOf(' ') === -1 ? result : "'" + result + "'";
      });
    }
  };
  var fontSize = {
    name: "font-size",
    initialValue: '0',
    prefix: false,
    type: 3
    /* TYPE_VALUE */
    ,
    format: 'length'
  };
  var fontWeight = {
    name: 'font-weight',
    initialValue: 'normal',
    type: 0
    /* VALUE */
    ,
    prefix: false,
    parse: function parse(_context, token) {
      if (isNumberToken(token)) {
        return token.number;
      }

      if (isIdentToken(token)) {
        switch (token.value) {
          case 'bold':
            return 700;

          case 'normal':
          default:
            return 400;
        }
      }

      return 400;
    }
  };
  var fontVariant = {
    name: 'font-variant',
    initialValue: 'none',
    type: 1
    /* LIST */
    ,
    prefix: false,
    parse: function parse(_context, tokens) {
      return tokens.filter(isIdentToken).map(function (token) {
        return token.value;
      });
    }
  };
  var fontStyle = {
    name: 'font-style',
    initialValue: 'normal',
    prefix: false,
    type: 2
    /* IDENT_VALUE */
    ,
    parse: function parse(_context, overflow) {
      switch (overflow) {
        case 'oblique':
          return "oblique"
          /* OBLIQUE */
          ;

        case 'italic':
          return "italic"
          /* ITALIC */
          ;

        case 'normal':
        default:
          return "normal"
          /* NORMAL */
          ;
      }
    }
  };

  var contains = function contains(bit, value) {
    return (bit & value) !== 0;
  };

  var content = {
    name: 'content',
    initialValue: 'none',
    type: 1
    /* LIST */
    ,
    prefix: false,
    parse: function parse(_context, tokens) {
      if (tokens.length === 0) {
        return [];
      }

      var first = tokens[0];

      if (first.type === 20
      /* IDENT_TOKEN */
      && first.value === 'none') {
        return [];
      }

      return tokens;
    }
  };
  var counterIncrement = {
    name: 'counter-increment',
    initialValue: 'none',
    prefix: true,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      if (tokens.length === 0) {
        return null;
      }

      var first = tokens[0];

      if (first.type === 20
      /* IDENT_TOKEN */
      && first.value === 'none') {
        return null;
      }

      var increments = [];
      var filtered = tokens.filter(nonWhiteSpace);

      for (var i = 0; i < filtered.length; i++) {
        var counter = filtered[i];
        var next = filtered[i + 1];

        if (counter.type === 20
        /* IDENT_TOKEN */
        ) {
          var increment = next && isNumberToken(next) ? next.number : 1;
          increments.push({
            counter: counter.value,
            increment: increment
          });
        }
      }

      return increments;
    }
  };
  var counterReset = {
    name: 'counter-reset',
    initialValue: 'none',
    prefix: true,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      if (tokens.length === 0) {
        return [];
      }

      var resets = [];
      var filtered = tokens.filter(nonWhiteSpace);

      for (var i = 0; i < filtered.length; i++) {
        var counter = filtered[i];
        var next = filtered[i + 1];

        if (isIdentToken(counter) && counter.value !== 'none') {
          var reset = next && isNumberToken(next) ? next.number : 0;
          resets.push({
            counter: counter.value,
            reset: reset
          });
        }
      }

      return resets;
    }
  };
  var duration = {
    name: 'duration',
    initialValue: '0s',
    prefix: false,
    type: 1
    /* LIST */
    ,
    parse: function parse(context, tokens) {
      return tokens.filter(isDimensionToken).map(function (token) {
        return time.parse(context, token);
      });
    }
  };
  var quotes = {
    name: 'quotes',
    initialValue: 'none',
    prefix: true,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      if (tokens.length === 0) {
        return null;
      }

      var first = tokens[0];

      if (first.type === 20
      /* IDENT_TOKEN */
      && first.value === 'none') {
        return null;
      }

      var quotes = [];
      var filtered = tokens.filter(isStringToken);

      if (filtered.length % 2 !== 0) {
        return null;
      }

      for (var i = 0; i < filtered.length; i += 2) {
        var open_1 = filtered[i].value;
        var close_1 = filtered[i + 1].value;
        quotes.push({
          open: open_1,
          close: close_1
        });
      }

      return quotes;
    }
  };

  var getQuote = function getQuote(quotes, depth, open) {
    if (!quotes) {
      return '';
    }

    var quote = quotes[Math.min(depth, quotes.length - 1)];

    if (!quote) {
      return '';
    }

    return open ? quote.open : quote.close;
  };

  var boxShadow = {
    name: 'box-shadow',
    initialValue: 'none',
    type: 1
    /* LIST */
    ,
    prefix: false,
    parse: function parse(context, tokens) {
      if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
        return [];
      }

      return parseFunctionArgs(tokens).map(function (values) {
        var shadow = {
          color: 0x000000ff,
          offsetX: ZERO_LENGTH,
          offsetY: ZERO_LENGTH,
          blur: ZERO_LENGTH,
          spread: ZERO_LENGTH,
          inset: false
        };
        var c = 0;

        for (var i = 0; i < values.length; i++) {
          var token = values[i];

          if (isIdentWithValue(token, 'inset')) {
            shadow.inset = true;
          } else if (isLength(token)) {
            if (c === 0) {
              shadow.offsetX = token;
            } else if (c === 1) {
              shadow.offsetY = token;
            } else if (c === 2) {
              shadow.blur = token;
            } else {
              shadow.spread = token;
            }

            c++;
          } else {
            shadow.color = color$1.parse(context, token);
          }
        }

        return shadow;
      });
    }
  };
  var paintOrder = {
    name: 'paint-order',
    initialValue: 'normal',
    prefix: false,
    type: 1
    /* LIST */
    ,
    parse: function parse(_context, tokens) {
      var DEFAULT_VALUE = [0
      /* FILL */
      , 1
      /* STROKE */
      , 2
      /* MARKERS */
      ];
      var layers = [];
      tokens.filter(isIdentToken).forEach(function (token) {
        switch (token.value) {
          case 'stroke':
            layers.push(1
            /* STROKE */
            );
            break;

          case 'fill':
            layers.push(0
            /* FILL */
            );
            break;

          case 'markers':
            layers.push(2
            /* MARKERS */
            );
            break;
        }
      });
      DEFAULT_VALUE.forEach(function (value) {
        if (layers.indexOf(value) === -1) {
          layers.push(value);
        }
      });
      return layers;
    }
  };
  var webkitTextStrokeColor = {
    name: "-webkit-text-stroke-color",
    initialValue: 'currentcolor',
    prefix: false,
    type: 3
    /* TYPE_VALUE */
    ,
    format: 'color'
  };
  var webkitTextStrokeWidth = {
    name: "-webkit-text-stroke-width",
    initialValue: '0',
    type: 0
    /* VALUE */
    ,
    prefix: false,
    parse: function parse(_context, token) {
      if (isDimensionToken(token)) {
        return token.number;
      }

      return 0;
    }
  };

  var CSSParsedDeclaration = function () {
    function CSSParsedDeclaration(context, declaration) {
      var _a, _b;

      this.animationDuration = parse(context, duration, declaration.animationDuration);
      this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
      this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
      this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
      this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
      this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
      this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
      this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
      this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
      this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
      this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
      this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
      this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
      this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
      this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
      this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
      this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
      this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
      this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
      this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
      this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
      this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
      this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
      this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
      this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
      this.color = parse(context, color, declaration.color);
      this.direction = parse(context, direction, declaration.direction);
      this.display = parse(context, display, declaration.display);
      this.float = parse(context, float, declaration.cssFloat);
      this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
      this.fontSize = parse(context, fontSize, declaration.fontSize);
      this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
      this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
      this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
      this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
      this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
      this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
      this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
      this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
      this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
      this.marginTop = parse(context, marginTop, declaration.marginTop);
      this.marginRight = parse(context, marginRight, declaration.marginRight);
      this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
      this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
      this.opacity = parse(context, opacity, declaration.opacity);
      var overflowTuple = parse(context, overflow, declaration.overflow);
      this.overflowX = overflowTuple[0];
      this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
      this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
      this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
      this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
      this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
      this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
      this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
      this.position = parse(context, position, declaration.position);
      this.textAlign = parse(context, textAlign, declaration.textAlign);
      this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
      this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
      this.textShadow = parse(context, textShadow, declaration.textShadow);
      this.textTransform = parse(context, textTransform, declaration.textTransform);
      this.transform = parse(context, transform$1, declaration.transform);
      this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
      this.visibility = parse(context, visibility, declaration.visibility);
      this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
      this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
      this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
      this.zIndex = parse(context, zIndex, declaration.zIndex);
    }

    CSSParsedDeclaration.prototype.isVisible = function () {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0
      /* VISIBLE */
      ;
    };

    CSSParsedDeclaration.prototype.isTransparent = function () {
      return isTransparent(this.backgroundColor);
    };

    CSSParsedDeclaration.prototype.isTransformed = function () {
      return this.transform !== null;
    };

    CSSParsedDeclaration.prototype.isPositioned = function () {
      return this.position !== 0
      /* STATIC */
      ;
    };

    CSSParsedDeclaration.prototype.isPositionedWithZIndex = function () {
      return this.isPositioned() && !this.zIndex.auto;
    };

    CSSParsedDeclaration.prototype.isFloating = function () {
      return this.float !== 0
      /* NONE */
      ;
    };

    CSSParsedDeclaration.prototype.isInlineLevel = function () {
      return contains(this.display, 4
      /* INLINE */
      ) || contains(this.display, 33554432
      /* INLINE_BLOCK */
      ) || contains(this.display, 268435456
      /* INLINE_FLEX */
      ) || contains(this.display, 536870912
      /* INLINE_GRID */
      ) || contains(this.display, 67108864
      /* INLINE_LIST_ITEM */
      ) || contains(this.display, 134217728
      /* INLINE_TABLE */
      );
    };

    return CSSParsedDeclaration;
  }();

  var CSSParsedPseudoDeclaration = function () {
    function CSSParsedPseudoDeclaration(context, declaration) {
      this.content = parse(context, content, declaration.content);
      this.quotes = parse(context, quotes, declaration.quotes);
    }

    return CSSParsedPseudoDeclaration;
  }();

  var CSSParsedCounterDeclaration = function () {
    function CSSParsedCounterDeclaration(context, declaration) {
      this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
      this.counterReset = parse(context, counterReset, declaration.counterReset);
    }

    return CSSParsedCounterDeclaration;
  }(); // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var parse = function parse(context, descriptor, style) {
    var tokenizer = new Tokenizer();
    var value = style !== null && typeof style !== 'undefined' ? style.toString() : descriptor.initialValue;
    tokenizer.write(value);
    var parser = new Parser(tokenizer.read());

    switch (descriptor.type) {
      case 2
      /* IDENT_VALUE */
      :
        var token = parser.parseComponentValue();
        return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);

      case 0
      /* VALUE */
      :
        return descriptor.parse(context, parser.parseComponentValue());

      case 1
      /* LIST */
      :
        return descriptor.parse(context, parser.parseComponentValues());

      case 4
      /* TOKEN_VALUE */
      :
        return parser.parseComponentValue();

      case 3
      /* TYPE_VALUE */
      :
        switch (descriptor.format) {
          case 'angle':
            return angle.parse(context, parser.parseComponentValue());

          case 'color':
            return color$1.parse(context, parser.parseComponentValue());

          case 'image':
            return image.parse(context, parser.parseComponentValue());

          case 'length':
            var length_1 = parser.parseComponentValue();
            return isLength(length_1) ? length_1 : ZERO_LENGTH;

          case 'length-percentage':
            var value_1 = parser.parseComponentValue();
            return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;

          case 'time':
            return time.parse(context, parser.parseComponentValue());
        }

        break;
    }
  };

  var elementDebuggerAttribute = 'data-html2canvas-debug';

  var getElementDebugType = function getElementDebugType(element) {
    var attribute = element.getAttribute(elementDebuggerAttribute);

    switch (attribute) {
      case 'all':
        return 1
        /* ALL */
        ;

      case 'clone':
        return 2
        /* CLONE */
        ;

      case 'parse':
        return 3
        /* PARSE */
        ;

      case 'render':
        return 4
        /* RENDER */
        ;

      default:
        return 0
        /* NONE */
        ;
    }
  };

  var isDebugging = function isDebugging(element, type) {
    var elementType = getElementDebugType(element);
    return elementType === 1
    /* ALL */
    || type === elementType;
  };

  var ElementContainer = function () {
    function ElementContainer(context, element) {
      this.context = context;
      this.textNodes = [];
      this.elements = [];
      this.flags = 0;

      if (isDebugging(element, 3
      /* PARSE */
      )) {
        debugger;
      }

      this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));

      if (isHTMLElementNode(element)) {
        if (this.styles.animationDuration.some(function (duration) {
          return duration > 0;
        })) {
          element.style.animationDuration = '0s';
        }

        if (this.styles.transform !== null) {
          // getBoundingClientRect takes transforms into account
          element.style.transform = 'none';
        }
      }

      this.bounds = parseBounds(this.context, element);

      if (isDebugging(element, 4
      /* RENDER */
      )) {
        this.flags |= 16
        /* DEBUG_RENDER */
        ;
      }
    }

    return ElementContainer;
  }();
  /*
   * text-segmentation 1.0.2 <https://github.com/niklasvh/text-segmentation>
   * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   */


  var base64 = 'AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=';
  /*
   * utrie 1.0.1 <https://github.com/niklasvh/utrie>
   * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   */

  var chars$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.

  var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);

  for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
    lookup$1[chars$1.charCodeAt(i$1)] = i$1;
  }

  var decode = function decode(base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === '=') {
      bufferLength--;

      if (base64[base64.length - 2] === '=') {
        bufferLength--;
      }
    }

    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = lookup$1[base64.charCodeAt(i)];
      encoded2 = lookup$1[base64.charCodeAt(i + 1)];
      encoded3 = lookup$1[base64.charCodeAt(i + 2)];
      encoded4 = lookup$1[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return buffer;
  };

  var polyUint16Array = function polyUint16Array(buffer) {
    var length = buffer.length;
    var bytes = [];

    for (var i = 0; i < length; i += 2) {
      bytes.push(buffer[i + 1] << 8 | buffer[i]);
    }

    return bytes;
  };

  var polyUint32Array = function polyUint32Array(buffer) {
    var length = buffer.length;
    var bytes = [];

    for (var i = 0; i < length; i += 4) {
      bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
    }

    return bytes;
  };
  /** Shift size for getting the index-2 table offset. */


  var UTRIE2_SHIFT_2 = 5;
  /** Shift size for getting the index-1 table offset. */

  var UTRIE2_SHIFT_1 = 6 + 5;
  /**
   * Shift size for shifting left the index array values.
   * Increases possible data size with 16-bit index values at the cost
   * of compactability.
   * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
   */

  var UTRIE2_INDEX_SHIFT = 2;
  /**
   * Difference between the two shift sizes,
   * for getting an index-1 offset from an index-2 offset. 6=11-5
   */

  var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
  /**
   * The part of the index-2 table for U+D800..U+DBFF stores values for
   * lead surrogate code _units_ not code _points_.
   * Values for lead surrogate code _points_ are indexed with this portion of the table.
   * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
   */

  var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
  /** Number of entries in a data block. 32=0x20 */

  var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
  /** Mask for getting the lower bits for the in-data-block offset. */

  var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
  var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
  /** Count the lengths of both BMP pieces. 2080=0x820 */

  var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
  /**
   * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
   * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
   */

  var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
  var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6;
  /* U+0800 is the first code point after 2-byte UTF-8 */

  /**
   * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
   * Variable length, for code points up to highStart, where the last single-value range starts.
   * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
   * (For 0x100000 supplementary code points U+10000..U+10ffff.)
   *
   * The part of the index-2 table for supplementary code points starts
   * after this index-1 table.
   *
   * Both the index-1 table and the following part of the index-2 table
   * are omitted completely if there is only BMP data.
   */

  var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
  /**
   * Number of index-1 entries for the BMP. 32=0x20
   * This part of the index-1 table is omitted from the serialized form.
   */

  var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
  /** Number of entries in an index-2 block. 64=0x40 */

  var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
  /** Mask for getting the lower bits for the in-index-2-block offset. */

  var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

  var slice16 = function slice16(view, start, end) {
    if (view.slice) {
      return view.slice(start, end);
    }

    return new Uint16Array(Array.prototype.slice.call(view, start, end));
  };

  var slice32 = function slice32(view, start, end) {
    if (view.slice) {
      return view.slice(start, end);
    }

    return new Uint32Array(Array.prototype.slice.call(view, start, end));
  };

  var createTrieFromBase64 = function createTrieFromBase64(base64, _byteLength) {
    var buffer = decode(base64);
    var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
    var headerLength = 24;
    var index = slice16(view16, headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
  };

  var Trie = function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
      this.initialValue = initialValue;
      this.errorValue = errorValue;
      this.highStart = highStart;
      this.highValueIndex = highValueIndex;
      this.index = index;
      this.data = data;
    }
    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */


    Trie.prototype.get = function (codePoint) {
      var ix;

      if (codePoint >= 0) {
        if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
          // Ordinary BMP code point, excluding leading surrogates.
          // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
          // 16 bit data is stored in the index array itself.
          ix = this.index[codePoint >> UTRIE2_SHIFT_2];
          ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
          return this.data[ix];
        }

        if (codePoint <= 0xffff) {
          // Lead Surrogate Code Point.  A Separate index section is stored for
          // lead surrogate code units and code points.
          //   The main index has the code unit data.
          //   For this function, we need the code point data.
          // Note: this expression could be refactored for slightly improved efficiency, but
          //       surrogate code points will be so rare in practice that it's not worth it.
          ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
          ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
          return this.data[ix];
        }

        if (codePoint < this.highStart) {
          // Supplemental code point, use two-level lookup.
          ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
          ix = this.index[ix];
          ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
          ix = this.index[ix];
          ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
          return this.data[ix];
        }

        if (codePoint <= 0x10ffff) {
          return this.data[this.highValueIndex];
        }
      } // Fall through.  The code point is outside of the legal range of 0..0x10ffff.


      return this.errorValue;
    };

    return Trie;
  }();
  /*
   * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
   * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   */


  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.

  var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);

  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  var Prepend = 1;
  var CR = 2;
  var LF = 3;
  var Control = 4;
  var Extend = 5;
  var SpacingMark = 7;
  var L = 8;
  var V = 9;
  var T = 10;
  var LV = 11;
  var LVT = 12;
  var ZWJ = 13;
  var Extended_Pictographic = 14;
  var RI = 15;

  var toCodePoints = function toCodePoints(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;

    while (i < length) {
      var value = str.charCodeAt(i++);

      if (value >= 0xd800 && value <= 0xdbff && i < length) {
        var extra = str.charCodeAt(i++);

        if ((extra & 0xfc00) === 0xdc00) {
          codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
        } else {
          codePoints.push(value);
          i--;
        }
      } else {
        codePoints.push(value);
      }
    }

    return codePoints;
  };

  var fromCodePoint = function fromCodePoint() {
    var codePoints = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      codePoints[_i] = arguments[_i];
    }

    if (String.fromCodePoint) {
      return String.fromCodePoint.apply(String, codePoints);
    }

    var length = codePoints.length;

    if (!length) {
      return '';
    }

    var codeUnits = [];
    var index = -1;
    var result = '';

    while (++index < length) {
      var codePoint = codePoints[index];

      if (codePoint <= 0xffff) {
        codeUnits.push(codePoint);
      } else {
        codePoint -= 0x10000;
        codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
      }

      if (index + 1 === length || codeUnits.length > 0x4000) {
        result += String.fromCharCode.apply(String, codeUnits);
        codeUnits.length = 0;
      }
    }

    return result;
  };

  var UnicodeTrie = createTrieFromBase64(base64);
  var BREAK_NOT_ALLOWED = '×';
  var BREAK_ALLOWED = '÷';

  var codePointToClass = function codePointToClass(codePoint) {
    return UnicodeTrie.get(codePoint);
  };

  var _graphemeBreakAtIndex = function _graphemeBreakAtIndex(_codePoints, classTypes, index) {
    var prevIndex = index - 2;
    var prev = classTypes[prevIndex];
    var current = classTypes[index - 1];
    var next = classTypes[index]; // GB3 Do not break between a CR and LF

    if (current === CR && next === LF) {
      return BREAK_NOT_ALLOWED;
    } // GB4 Otherwise, break before and after controls.


    if (current === CR || current === LF || current === Control) {
      return BREAK_ALLOWED;
    } // GB5


    if (next === CR || next === LF || next === Control) {
      return BREAK_ALLOWED;
    } // Do not break Hangul syllable sequences.
    // GB6


    if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
      return BREAK_NOT_ALLOWED;
    } // GB7


    if ((current === LV || current === V) && (next === V || next === T)) {
      return BREAK_NOT_ALLOWED;
    } // GB8


    if ((current === LVT || current === T) && next === T) {
      return BREAK_NOT_ALLOWED;
    } // GB9 Do not break before extending characters or ZWJ.


    if (next === ZWJ || next === Extend) {
      return BREAK_NOT_ALLOWED;
    } // Do not break before SpacingMarks, or after Prepend characters.
    // GB9a


    if (next === SpacingMark) {
      return BREAK_NOT_ALLOWED;
    } // GB9a


    if (current === Prepend) {
      return BREAK_NOT_ALLOWED;
    } // GB11 Do not break within emoji modifier sequences or emoji zwj sequences.


    if (current === ZWJ && next === Extended_Pictographic) {
      while (prev === Extend) {
        prev = classTypes[--prevIndex];
      }

      if (prev === Extended_Pictographic) {
        return BREAK_NOT_ALLOWED;
      }
    } // GB12 Do not break within emoji flag sequences.
    // That is, do not break between regional indicator (RI) symbols
    // if there is an odd number of RI characters before the break point.


    if (current === RI && next === RI) {
      var countRI = 0;

      while (prev === RI) {
        countRI++;
        prev = classTypes[--prevIndex];
      }

      if (countRI % 2 === 0) {
        return BREAK_NOT_ALLOWED;
      }
    }

    return BREAK_ALLOWED;
  };

  var GraphemeBreaker = function GraphemeBreaker(str) {
    var codePoints = toCodePoints(str);
    var length = codePoints.length;
    var index = 0;
    var lastEnd = 0;
    var classTypes = codePoints.map(codePointToClass);
    return {
      next: function next() {
        if (index >= length) {
          return {
            done: true,
            value: null
          };
        }

        var graphemeBreak = BREAK_NOT_ALLOWED;

        while (index < length && (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) {}

        if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
          var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
          lastEnd = index;
          return {
            value: value,
            done: false
          };
        }

        return {
          done: true,
          value: null
        };
      }
    };
  };

  var splitGraphemes = function splitGraphemes(str) {
    var breaker = GraphemeBreaker(str);
    var graphemes = [];
    var bk;

    while (!(bk = breaker.next()).done) {
      if (bk.value) {
        graphemes.push(bk.value.slice());
      }
    }

    return graphemes;
  };

  var testRangeBounds = function testRangeBounds(document) {
    var TEST_HEIGHT = 123;

    if (document.createRange) {
      var range = document.createRange();

      if (range.getBoundingClientRect) {
        var testElement = document.createElement('boundtest');
        testElement.style.height = TEST_HEIGHT + "px";
        testElement.style.display = 'block';
        document.body.appendChild(testElement);
        range.selectNode(testElement);
        var rangeBounds = range.getBoundingClientRect();
        var rangeHeight = Math.round(rangeBounds.height);
        document.body.removeChild(testElement);

        if (rangeHeight === TEST_HEIGHT) {
          return true;
        }
      }
    }

    return false;
  };

  var testIOSLineBreak = function testIOSLineBreak(document) {
    var testElement = document.createElement('boundtest');
    testElement.style.width = '50px';
    testElement.style.display = 'block';
    testElement.style.fontSize = '12px';
    testElement.style.letterSpacing = '0px';
    testElement.style.wordSpacing = '0px';
    document.body.appendChild(testElement);
    var range = document.createRange();
    testElement.innerHTML = typeof ''.repeat === 'function' ? '&#128104;'.repeat(10) : '';
    var node = testElement.firstChild;
    var textList = toCodePoints$1(node.data).map(function (i) {
      return fromCodePoint$1(i);
    });
    var offset = 0;
    var prev = {}; // ios 13 does not handle range getBoundingClientRect line changes correctly #2177

    var supports = textList.every(function (text, i) {
      range.setStart(node, offset);
      range.setEnd(node, offset + text.length);
      var rect = range.getBoundingClientRect();
      offset += text.length;
      var boundAhead = rect.x > prev.x || rect.y > prev.y;
      prev = rect;

      if (i === 0) {
        return true;
      }

      return boundAhead;
    });
    document.body.removeChild(testElement);
    return supports;
  };

  var testCORS = function testCORS() {
    return typeof new Image().crossOrigin !== 'undefined';
  };

  var testResponseType = function testResponseType() {
    return typeof new XMLHttpRequest().responseType === 'string';
  };

  var testSVG = function testSVG(document) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    if (!ctx) {
      return false;
    }

    img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";

    try {
      ctx.drawImage(img, 0, 0);
      canvas.toDataURL();
    } catch (e) {
      return false;
    }

    return true;
  };

  var isGreenPixel = function isGreenPixel(data) {
    return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
  };

  var testForeignObject = function testForeignObject(document) {
    var canvas = document.createElement('canvas');
    var size = 100;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');

    if (!ctx) {
      return Promise.reject(false);
    }

    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(0, 0, size, size);
    var img = new Image();
    var greenImageSrc = canvas.toDataURL();
    img.src = greenImageSrc;
    var svg = createForeignObjectSVG(size, size, 0, 0, img);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, size, size);
    return loadSerializedSVG$1(svg).then(function (img) {
      ctx.drawImage(img, 0, 0);
      var data = ctx.getImageData(0, 0, size, size).data;
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, size, size);
      var node = document.createElement('div');
      node.style.backgroundImage = "url(" + greenImageSrc + ")";
      node.style.height = size + "px"; // Firefox 55 does not render inline <img /> tags

      return isGreenPixel(data) ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
    }).then(function (img) {
      ctx.drawImage(img, 0, 0); // Edge does not render background-images

      return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
    }).catch(function () {
      return false;
    });
  };

  var createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS(null, 'width', width.toString());
    svg.setAttributeNS(null, 'height', height.toString());
    foreignObject.setAttributeNS(null, 'width', '100%');
    foreignObject.setAttributeNS(null, 'height', '100%');
    foreignObject.setAttributeNS(null, 'x', x.toString());
    foreignObject.setAttributeNS(null, 'y', y.toString());
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svg;
  };

  var loadSerializedSVG$1 = function loadSerializedSVG$1(svg) {
    return new Promise(function (resolve, reject) {
      var img = new Image();

      img.onload = function () {
        return resolve(img);
      };

      img.onerror = reject;
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
  };

  var FEATURES = {
    get SUPPORT_RANGE_BOUNDS() {
      var value = testRangeBounds(document);
      Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', {
        value: value
      });
      return value;
    },

    get SUPPORT_WORD_BREAKING() {
      var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
      Object.defineProperty(FEATURES, 'SUPPORT_WORD_BREAKING', {
        value: value
      });
      return value;
    },

    get SUPPORT_SVG_DRAWING() {
      var value = testSVG(document);
      Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', {
        value: value
      });
      return value;
    },

    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
      Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', {
        value: value
      });
      return value;
    },

    get SUPPORT_CORS_IMAGES() {
      var value = testCORS();
      Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', {
        value: value
      });
      return value;
    },

    get SUPPORT_RESPONSE_TYPE() {
      var value = testResponseType();
      Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', {
        value: value
      });
      return value;
    },

    get SUPPORT_CORS_XHR() {
      var value = ('withCredentials' in new XMLHttpRequest());
      Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', {
        value: value
      });
      return value;
    },

    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var value = !!(typeof Intl !== 'undefined' && Intl.Segmenter);
      Object.defineProperty(FEATURES, 'SUPPORT_NATIVE_TEXT_SEGMENTATION', {
        value: value
      });
      return value;
    }

  };

  var TextBounds = function () {
    function TextBounds(text, bounds) {
      this.text = text;
      this.bounds = bounds;
    }

    return TextBounds;
  }();

  var parseTextBounds = function parseTextBounds(context, value, styles, node) {
    var textList = breakText(value, styles);
    var textBounds = [];
    var offset = 0;
    textList.forEach(function (text) {
      if (styles.textDecorationLine.length || text.trim().length > 0) {
        if (FEATURES.SUPPORT_RANGE_BOUNDS) {
          var clientRects = createRange(node, offset, text.length).getClientRects();

          if (clientRects.length > 1) {
            var subSegments = segmentGraphemes(text);
            var subOffset_1 = 0;
            subSegments.forEach(function (subSegment) {
              textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
              subOffset_1 += subSegment.length;
            });
          } else {
            textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
          }
        } else {
          var replacementNode = node.splitText(text.length);
          textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
          node = replacementNode;
        }
      } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
        node = node.splitText(text.length);
      }

      offset += text.length;
    });
    return textBounds;
  };

  var getWrapperBounds = function getWrapperBounds(context, node) {
    var ownerDocument = node.ownerDocument;

    if (ownerDocument) {
      var wrapper = ownerDocument.createElement('html2canvaswrapper');
      wrapper.appendChild(node.cloneNode(true));
      var parentNode = node.parentNode;

      if (parentNode) {
        parentNode.replaceChild(wrapper, node);
        var bounds = parseBounds(context, wrapper);

        if (wrapper.firstChild) {
          parentNode.replaceChild(wrapper.firstChild, wrapper);
        }

        return bounds;
      }
    }

    return Bounds.EMPTY;
  };

  var createRange = function createRange(node, offset, length) {
    var ownerDocument = node.ownerDocument;

    if (!ownerDocument) {
      throw new Error('Node has no owner document');
    }

    var range = ownerDocument.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return range;
  };

  var segmentGraphemes = function segmentGraphemes(value) {
    if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var segmenter = new Intl.Segmenter(void 0, {
        granularity: 'grapheme'
      }); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      return Array.from(segmenter.segment(value)).map(function (segment) {
        return segment.segment;
      });
    }

    return splitGraphemes(value);
  };

  var segmentWords = function segmentWords(value, styles) {
    if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var segmenter = new Intl.Segmenter(void 0, {
        granularity: 'word'
      }); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      return Array.from(segmenter.segment(value)).map(function (segment) {
        return segment.segment;
      });
    }

    return breakWords(value, styles);
  };

  var breakText = function breakText(value, styles) {
    return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
  }; // https://drafts.csswg.org/css-text/#word-separator


  var wordSeparators = [0x0020, 0x00a0, 0x1361, 0x10100, 0x10101, 0x1039, 0x1091];

  var breakWords = function breakWords(str, styles) {
    var breaker = LineBreaker(str, {
      lineBreak: styles.lineBreak,
      wordBreak: styles.overflowWrap === "break-word"
      /* BREAK_WORD */
      ? 'break-word' : styles.wordBreak
    });
    var words = [];
    var bk;

    var _loop_1 = function _loop_1() {
      if (bk.value) {
        var value = bk.value.slice();
        var codePoints = toCodePoints$1(value);
        var word_1 = '';
        codePoints.forEach(function (codePoint) {
          if (wordSeparators.indexOf(codePoint) === -1) {
            word_1 += fromCodePoint$1(codePoint);
          } else {
            if (word_1.length) {
              words.push(word_1);
            }

            words.push(fromCodePoint$1(codePoint));
            word_1 = '';
          }
        });

        if (word_1.length) {
          words.push(word_1);
        }
      }
    };

    while (!(bk = breaker.next()).done) {
      _loop_1();
    }

    return words;
  };

  var TextContainer = function () {
    function TextContainer(context, node, styles) {
      this.text = transform(node.data, styles.textTransform);
      this.textBounds = parseTextBounds(context, this.text, styles, node);
    }

    return TextContainer;
  }();

  var transform = function transform(text, _transform) {
    switch (_transform) {
      case 1
      /* LOWERCASE */
      :
        return text.toLowerCase();

      case 3
      /* CAPITALIZE */
      :
        return text.replace(CAPITALIZE, capitalize);

      case 2
      /* UPPERCASE */
      :
        return text.toUpperCase();

      default:
        return text;
    }
  };

  var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;

  var capitalize = function capitalize(m, p1, p2) {
    if (m.length > 0) {
      return p1 + p2.toUpperCase();
    }

    return m;
  };

  var ImageElementContainer = function (_super) {
    __extends(ImageElementContainer, _super);

    function ImageElementContainer(context, img) {
      var _this = _super.call(this, context, img) || this;

      _this.src = img.currentSrc || img.src;
      _this.intrinsicWidth = img.naturalWidth;
      _this.intrinsicHeight = img.naturalHeight;

      _this.context.cache.addImage(_this.src);

      return _this;
    }

    return ImageElementContainer;
  }(ElementContainer);

  var CanvasElementContainer = function (_super) {
    __extends(CanvasElementContainer, _super);

    function CanvasElementContainer(context, canvas) {
      var _this = _super.call(this, context, canvas) || this;

      _this.canvas = canvas;
      _this.intrinsicWidth = canvas.width;
      _this.intrinsicHeight = canvas.height;
      return _this;
    }

    return CanvasElementContainer;
  }(ElementContainer);

  var SVGElementContainer = function (_super) {
    __extends(SVGElementContainer, _super);

    function SVGElementContainer(context, img) {
      var _this = _super.call(this, context, img) || this;

      var s = new XMLSerializer();
      var bounds = parseBounds(context, img);
      img.setAttribute('width', bounds.width + "px");
      img.setAttribute('height', bounds.height + "px");
      _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
      _this.intrinsicWidth = img.width.baseVal.value;
      _this.intrinsicHeight = img.height.baseVal.value;

      _this.context.cache.addImage(_this.svg);

      return _this;
    }

    return SVGElementContainer;
  }(ElementContainer);

  var LIElementContainer = function (_super) {
    __extends(LIElementContainer, _super);

    function LIElementContainer(context, element) {
      var _this = _super.call(this, context, element) || this;

      _this.value = element.value;
      return _this;
    }

    return LIElementContainer;
  }(ElementContainer);

  var OLElementContainer = function (_super) {
    __extends(OLElementContainer, _super);

    function OLElementContainer(context, element) {
      var _this = _super.call(this, context, element) || this;

      _this.start = element.start;
      _this.reversed = typeof element.reversed === 'boolean' && element.reversed === true;
      return _this;
    }

    return OLElementContainer;
  }(ElementContainer);

  var CHECKBOX_BORDER_RADIUS = [{
    type: 15
    /* DIMENSION_TOKEN */
    ,
    flags: 0,
    unit: 'px',
    number: 3
  }];
  var RADIO_BORDER_RADIUS = [{
    type: 16
    /* PERCENTAGE_TOKEN */
    ,
    flags: 0,
    number: 50
  }];

  var reformatInputBounds = function reformatInputBounds(bounds) {
    if (bounds.width > bounds.height) {
      return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
    } else if (bounds.width < bounds.height) {
      return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
    }

    return bounds;
  };

  var getInputValue = function getInputValue(node) {
    var value = node.type === PASSWORD ? new Array(node.value.length + 1).join("\u2022") : node.value;
    return value.length === 0 ? node.placeholder || '' : value;
  };

  var CHECKBOX = 'checkbox';
  var RADIO = 'radio';
  var PASSWORD = 'password';
  var INPUT_COLOR = 0x2a2a2aff;

  var InputElementContainer = function (_super) {
    __extends(InputElementContainer, _super);

    function InputElementContainer(context, input) {
      var _this = _super.call(this, context, input) || this;

      _this.type = input.type.toLowerCase();
      _this.checked = input.checked;
      _this.value = getInputValue(input);

      if (_this.type === CHECKBOX || _this.type === RADIO) {
        _this.styles.backgroundColor = 0xdededeff;
        _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 0xa5a5a5ff;
        _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
        _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = 1
        /* SOLID */
        ;
        _this.styles.backgroundClip = [0
        /* BORDER_BOX */
        ];
        _this.styles.backgroundOrigin = [0
        /* BORDER_BOX */
        ];
        _this.bounds = reformatInputBounds(_this.bounds);
      }

      switch (_this.type) {
        case CHECKBOX:
          _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
          break;

        case RADIO:
          _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
          break;
      }

      return _this;
    }

    return InputElementContainer;
  }(ElementContainer);

  var SelectElementContainer = function (_super) {
    __extends(SelectElementContainer, _super);

    function SelectElementContainer(context, element) {
      var _this = _super.call(this, context, element) || this;

      var option = element.options[element.selectedIndex || 0];
      _this.value = option ? option.text || '' : '';
      return _this;
    }

    return SelectElementContainer;
  }(ElementContainer);

  var TextareaElementContainer = function (_super) {
    __extends(TextareaElementContainer, _super);

    function TextareaElementContainer(context, element) {
      var _this = _super.call(this, context, element) || this;

      _this.value = element.value;
      return _this;
    }

    return TextareaElementContainer;
  }(ElementContainer);

  var IFrameElementContainer = function (_super) {
    __extends(IFrameElementContainer, _super);

    function IFrameElementContainer(context, iframe) {
      var _this = _super.call(this, context, iframe) || this;

      _this.src = iframe.src;
      _this.width = parseInt(iframe.width, 10) || 0;
      _this.height = parseInt(iframe.height, 10) || 0;
      _this.backgroundColor = _this.styles.backgroundColor;

      try {
        if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
          _this.tree = parseTree(context, iframe.contentWindow.document.documentElement); // http://www.w3.org/TR/css3-background/#special-backgrounds

          var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
          var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
          _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
        }
      } catch (e) {}

      return _this;
    }

    return IFrameElementContainer;
  }(ElementContainer);

  var LIST_OWNERS = ['OL', 'UL', 'MENU'];

  var parseNodeTree = function parseNodeTree(context, node, parent, root) {
    for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
      nextNode = childNode.nextSibling;

      if (isTextNode(childNode) && childNode.data.trim().length > 0) {
        parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
      } else if (isElementNode(childNode)) {
        if (isSlotElement(childNode) && childNode.assignedNodes) {
          childNode.assignedNodes().forEach(function (childNode) {
            return parseNodeTree(context, childNode, parent, root);
          });
        } else {
          var container = createContainer(context, childNode);

          if (container.styles.isVisible()) {
            if (createsRealStackingContext(childNode, container, root)) {
              container.flags |= 4
              /* CREATES_REAL_STACKING_CONTEXT */
              ;
            } else if (createsStackingContext(container.styles)) {
              container.flags |= 2
              /* CREATES_STACKING_CONTEXT */
              ;
            }

            if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
              container.flags |= 8
              /* IS_LIST_OWNER */
              ;
            }

            parent.elements.push(container);
            childNode.slot;

            if (childNode.shadowRoot) {
              parseNodeTree(context, childNode.shadowRoot, container, root);
            } else if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
              parseNodeTree(context, childNode, container, root);
            }
          }
        }
      }
    }
  };

  var createContainer = function createContainer(context, element) {
    if (isImageElement(element)) {
      return new ImageElementContainer(context, element);
    }

    if (isCanvasElement(element)) {
      return new CanvasElementContainer(context, element);
    }

    if (isSVGElement(element)) {
      return new SVGElementContainer(context, element);
    }

    if (isLIElement(element)) {
      return new LIElementContainer(context, element);
    }

    if (isOLElement(element)) {
      return new OLElementContainer(context, element);
    }

    if (isInputElement(element)) {
      return new InputElementContainer(context, element);
    }

    if (isSelectElement(element)) {
      return new SelectElementContainer(context, element);
    }

    if (isTextareaElement(element)) {
      return new TextareaElementContainer(context, element);
    }

    if (isIFrameElement(element)) {
      return new IFrameElementContainer(context, element);
    }

    return new ElementContainer(context, element);
  };

  var parseTree = function parseTree(context, element) {
    var container = createContainer(context, element);
    container.flags |= 4
    /* CREATES_REAL_STACKING_CONTEXT */
    ;
    parseNodeTree(context, element, container, container);
    return container;
  };

  var createsRealStackingContext = function createsRealStackingContext(node, container, root) {
    return container.styles.isPositionedWithZIndex() || container.styles.opacity < 1 || container.styles.isTransformed() || isBodyElement(node) && root.styles.isTransparent();
  };

  var createsStackingContext = function createsStackingContext(styles) {
    return styles.isPositioned() || styles.isFloating();
  };

  var isTextNode = function isTextNode(node) {
    return node.nodeType === Node.TEXT_NODE;
  };

  var isElementNode = function isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  };

  var isHTMLElementNode = function isHTMLElementNode(node) {
    return isElementNode(node) && typeof node.style !== 'undefined' && !isSVGElementNode(node);
  };

  var isSVGElementNode = function isSVGElementNode(element) {
    return typeof element.className === 'object';
  };

  var isLIElement = function isLIElement(node) {
    return node.tagName === 'LI';
  };

  var isOLElement = function isOLElement(node) {
    return node.tagName === 'OL';
  };

  var isInputElement = function isInputElement(node) {
    return node.tagName === 'INPUT';
  };

  var isHTMLElement = function isHTMLElement(node) {
    return node.tagName === 'HTML';
  };

  var isSVGElement = function isSVGElement(node) {
    return node.tagName === 'svg';
  };

  var isBodyElement = function isBodyElement(node) {
    return node.tagName === 'BODY';
  };

  var isCanvasElement = function isCanvasElement(node) {
    return node.tagName === 'CANVAS';
  };

  var isImageElement = function isImageElement(node) {
    return node.tagName === 'IMG';
  };

  var isIFrameElement = function isIFrameElement(node) {
    return node.tagName === 'IFRAME';
  };

  var isStyleElement = function isStyleElement(node) {
    return node.tagName === 'STYLE';
  };

  var isScriptElement = function isScriptElement(node) {
    return node.tagName === 'SCRIPT';
  };

  var isTextareaElement = function isTextareaElement(node) {
    return node.tagName === 'TEXTAREA';
  };

  var isSelectElement = function isSelectElement(node) {
    return node.tagName === 'SELECT';
  };

  var isSlotElement = function isSlotElement(node) {
    return node.tagName === 'SLOT';
  }; // https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name


  var isCustomElement = function isCustomElement(node) {
    return node.tagName.indexOf('-') > 0;
  };

  var CounterState = function () {
    function CounterState() {
      this.counters = {};
    }

    CounterState.prototype.getCounterValue = function (name) {
      var counter = this.counters[name];

      if (counter && counter.length) {
        return counter[counter.length - 1];
      }

      return 1;
    };

    CounterState.prototype.getCounterValues = function (name) {
      var counter = this.counters[name];
      return counter ? counter : [];
    };

    CounterState.prototype.pop = function (counters) {
      var _this = this;

      counters.forEach(function (counter) {
        return _this.counters[counter].pop();
      });
    };

    CounterState.prototype.parse = function (style) {
      var _this = this;

      var counterIncrement = style.counterIncrement;
      var counterReset = style.counterReset;
      var canReset = true;

      if (counterIncrement !== null) {
        counterIncrement.forEach(function (entry) {
          var counter = _this.counters[entry.counter];

          if (counter && entry.increment !== 0) {
            canReset = false;

            if (!counter.length) {
              counter.push(1);
            }

            counter[Math.max(0, counter.length - 1)] += entry.increment;
          }
        });
      }

      var counterNames = [];

      if (canReset) {
        counterReset.forEach(function (entry) {
          var counter = _this.counters[entry.counter];
          counterNames.push(entry.counter);

          if (!counter) {
            counter = _this.counters[entry.counter] = [];
          }

          counter.push(entry.reset);
        });
      }

      return counterNames;
    };

    return CounterState;
  }();

  var ROMAN_UPPER = {
    integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  };
  var ARMENIAN = {
    integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']
  };
  var HEBREW = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']
  };
  var GEORGIAN = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']
  };

  var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
    if (value < min || value > max) {
      return createCounterText(value, fallback, suffix.length > 0);
    }

    return symbols.integers.reduce(function (string, integer, index) {
      while (value >= integer) {
        value -= integer;
        string += symbols.values[index];
      }

      return string;
    }, '') + suffix;
  };

  var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
    var string = '';

    do {
      if (!isNumeric) {
        value--;
      }

      string = resolver(value) + string;
      value /= codePointRangeLength;
    } while (value * codePointRangeLength >= codePointRangeLength);

    return string;
  };

  var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
    var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
    return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
      return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
    }) + suffix);
  };

  var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols, suffix) {
    if (suffix === void 0) {
      suffix = '. ';
    }

    var codePointRangeLength = symbols.length;
    return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
      return symbols[Math.floor(codePoint % codePointRangeLength)];
    }) + suffix;
  };

  var CJK_ZEROS = 1 << 0;
  var CJK_TEN_COEFFICIENTS = 1 << 1;
  var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
  var CJK_HUNDRED_COEFFICIENTS = 1 << 3;

  var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
    if (value < -9999 || value > 9999) {
      return createCounterText(value, 4
      /* CJK_DECIMAL */
      , suffix.length > 0);
    }

    var tmp = Math.abs(value);
    var string = suffix;

    if (tmp === 0) {
      return numbers[0] + string;
    }

    for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
      var coefficient = tmp % 10;

      if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== '') {
        string = numbers[coefficient] + string;
      } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS)) {
        string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
      } else if (coefficient === 1 && digit > 0) {
        string = multipliers[digit - 1] + string;
      }

      tmp = Math.floor(tmp / 10);
    }

    return (value < 0 ? negativeSign : '') + string;
  };

  var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
  var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
  var JAPANESE_NEGATIVE = 'マイナス';
  var KOREAN_NEGATIVE = '마이너스';

  var createCounterText = function createCounterText(value, type, appendSuffix) {
    var defaultSuffix = appendSuffix ? '. ' : '';
    var cjkSuffix = appendSuffix ? '、' : '';
    var koreanSuffix = appendSuffix ? ', ' : '';
    var spaceSuffix = appendSuffix ? ' ' : '';

    switch (type) {
      case 0
      /* DISC */
      :
        return '•' + spaceSuffix;

      case 1
      /* CIRCLE */
      :
        return '◦' + spaceSuffix;

      case 2
      /* SQUARE */
      :
        return '◾' + spaceSuffix;

      case 5
      /* DECIMAL_LEADING_ZERO */
      :
        var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
        return string.length < 4 ? "0" + string : string;

      case 4
      /* CJK_DECIMAL */
      :
        return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);

      case 6
      /* LOWER_ROMAN */
      :
        return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3
        /* DECIMAL */
        , defaultSuffix).toLowerCase();

      case 7
      /* UPPER_ROMAN */
      :
        return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3
        /* DECIMAL */
        , defaultSuffix);

      case 8
      /* LOWER_GREEK */
      :
        return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);

      case 9
      /* LOWER_ALPHA */
      :
        return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);

      case 10
      /* UPPER_ALPHA */
      :
        return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);

      case 11
      /* ARABIC_INDIC */
      :
        return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);

      case 12
      /* ARMENIAN */
      :
      case 49
      /* UPPER_ARMENIAN */
      :
        return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3
        /* DECIMAL */
        , defaultSuffix);

      case 35
      /* LOWER_ARMENIAN */
      :
        return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3
        /* DECIMAL */
        , defaultSuffix).toLowerCase();

      case 13
      /* BENGALI */
      :
        return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);

      case 14
      /* CAMBODIAN */
      :
      case 30
      /* KHMER */
      :
        return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);

      case 15
      /* CJK_EARTHLY_BRANCH */
      :
        return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);

      case 16
      /* CJK_HEAVENLY_STEM */
      :
        return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);

      case 17
      /* CJK_IDEOGRAPHIC */
      :
      case 48
      /* TRAD_CHINESE_INFORMAL */
      :
        return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);

      case 47
      /* TRAD_CHINESE_FORMAL */
      :
        return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);

      case 42
      /* SIMP_CHINESE_INFORMAL */
      :
        return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);

      case 41
      /* SIMP_CHINESE_FORMAL */
      :
        return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);

      case 26
      /* JAPANESE_INFORMAL */
      :
        return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);

      case 25
      /* JAPANESE_FORMAL */
      :
        return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);

      case 31
      /* KOREAN_HANGUL_FORMAL */
      :
        return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);

      case 33
      /* KOREAN_HANJA_INFORMAL */
      :
        return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);

      case 32
      /* KOREAN_HANJA_FORMAL */
      :
        return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);

      case 18
      /* DEVANAGARI */
      :
        return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);

      case 20
      /* GEORGIAN */
      :
        return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3
        /* DECIMAL */
        , defaultSuffix);

      case 21
      /* GUJARATI */
      :
        return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);

      case 22
      /* GURMUKHI */
      :
        return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);

      case 22
      /* HEBREW */
      :
        return createAdditiveCounter(value, 1, 10999, HEBREW, 3
        /* DECIMAL */
        , defaultSuffix);

      case 23
      /* HIRAGANA */
      :
        return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');

      case 24
      /* HIRAGANA_IROHA */
      :
        return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');

      case 27
      /* KANNADA */
      :
        return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);

      case 28
      /* KATAKANA */
      :
        return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);

      case 29
      /* KATAKANA_IROHA */
      :
        return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);

      case 34
      /* LAO */
      :
        return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);

      case 37
      /* MONGOLIAN */
      :
        return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);

      case 38
      /* MYANMAR */
      :
        return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);

      case 39
      /* ORIYA */
      :
        return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);

      case 40
      /* PERSIAN */
      :
        return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);

      case 43
      /* TAMIL */
      :
        return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);

      case 44
      /* TELUGU */
      :
        return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);

      case 45
      /* THAI */
      :
        return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);

      case 46
      /* TIBETAN */
      :
        return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);

      case 3
      /* DECIMAL */
      :
      default:
        return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
    }
  };

  var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';

  var DocumentCloner = function () {
    function DocumentCloner(context, element, options) {
      this.context = context;
      this.options = options;
      this.scrolledElements = [];
      this.referenceElement = element;
      this.counters = new CounterState();
      this.quoteDepth = 0;

      if (!element.ownerDocument) {
        throw new Error('Cloned element does not have an owner document');
      }

      this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
    }

    DocumentCloner.prototype.toIFrame = function (ownerDocument, windowSize) {
      var _this = this;

      var iframe = createIFrameContainer(ownerDocument, windowSize);

      if (!iframe.contentWindow) {
        return Promise.reject("Unable to find iframe window");
      }

      var scrollX = ownerDocument.defaultView.pageXOffset;
      var scrollY = ownerDocument.defaultView.pageYOffset;
      var cloneWindow = iframe.contentWindow;
      var documentClone = cloneWindow.document;
      /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
       if window url is about:blank, we can assign the url to current by writing onto the document
       */

      var iframeLoad = iframeLoader(iframe).then(function () {
        return __awaiter(_this, void 0, void 0, function () {
          var onclone, referenceElement;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                this.scrolledElements.forEach(restoreNodeScroll);

                if (cloneWindow) {
                  cloneWindow.scrollTo(windowSize.left, windowSize.top);

                  if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                    this.context.logger.warn('Unable to restore scroll position for cloned document');
                    this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                  }
                }

                onclone = this.options.onclone;
                referenceElement = this.clonedReferenceElement;

                if (typeof referenceElement === 'undefined') {
                  return [2
                  /*return*/
                  , Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                }

                if (!(documentClone.fonts && documentClone.fonts.ready)) return [3
                /*break*/
                , 2];
                return [4
                /*yield*/
                , documentClone.fonts.ready];

              case 1:
                _a.sent();

                _a.label = 2;

              case 2:
                if (!/(AppleWebKit)/g.test(navigator.userAgent)) return [3
                /*break*/
                , 4];
                return [4
                /*yield*/
                , imagesReady(documentClone)];

              case 3:
                _a.sent();

                _a.label = 4;

              case 4:
                if (typeof onclone === 'function') {
                  return [2
                  /*return*/
                  , Promise.resolve().then(function () {
                    return onclone(documentClone, referenceElement);
                  }).then(function () {
                    return iframe;
                  })];
                }

                return [2
                /*return*/
                , iframe];
            }
          });
        });
      });
      documentClone.open();
      documentClone.write(serializeDoctype(document.doctype) + "<html></html>"); // Chrome scrolls the parent document for some reason after the write to the cloned window???

      restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
      documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
      documentClone.close();
      return iframeLoad;
    };

    DocumentCloner.prototype.createElementClone = function (node) {
      if (isDebugging(node, 2
      /* CLONE */
      )) {
        debugger;
      }

      if (isCanvasElement(node)) {
        return this.createCanvasClone(node);
      }

      if (isStyleElement(node)) {
        return this.createStyleClone(node);
      }

      var clone = node.cloneNode(false);

      if (isImageElement(clone)) {
        if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
          clone.src = node.currentSrc;
          clone.srcset = '';
        }

        if (clone.loading === 'lazy') {
          clone.loading = 'eager';
        }
      }

      if (isCustomElement(clone)) {
        return this.createCustomElementClone(clone);
      }

      return clone;
    };

    DocumentCloner.prototype.createCustomElementClone = function (node) {
      var clone = document.createElement('html2canvascustomelement');
      copyCSSStyles(node.style, clone);
      return clone;
    };

    DocumentCloner.prototype.createStyleClone = function (node) {
      try {
        var sheet = node.sheet;

        if (sheet && sheet.cssRules) {
          var css = [].slice.call(sheet.cssRules, 0).reduce(function (css, rule) {
            if (rule && typeof rule.cssText === 'string') {
              return css + rule.cssText;
            }

            return css;
          }, '');
          var style = node.cloneNode(false);
          style.textContent = css;
          return style;
        }
      } catch (e) {
        // accessing node.sheet.cssRules throws a DOMException
        this.context.logger.error('Unable to access cssRules property', e);

        if (e.name !== 'SecurityError') {
          throw e;
        }
      }

      return node.cloneNode(false);
    };

    DocumentCloner.prototype.createCanvasClone = function (canvas) {
      var _a;

      if (this.options.inlineImages && canvas.ownerDocument) {
        var img = canvas.ownerDocument.createElement('img');

        try {
          img.src = canvas.toDataURL();
          return img;
        } catch (e) {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
        }
      }

      var clonedCanvas = canvas.cloneNode(false);

      try {
        clonedCanvas.width = canvas.width;
        clonedCanvas.height = canvas.height;
        var ctx = canvas.getContext('2d');
        var clonedCtx = clonedCanvas.getContext('2d');

        if (clonedCtx) {
          if (!this.options.allowTaint && ctx) {
            clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
          } else {
            var gl = (_a = canvas.getContext('webgl2')) !== null && _a !== void 0 ? _a : canvas.getContext('webgl');

            if (gl) {
              var attribs = gl.getContextAttributes();

              if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                this.context.logger.warn('Unable to clone WebGL context as it has preserveDrawingBuffer=false', canvas);
              }
            }

            clonedCtx.drawImage(canvas, 0, 0);
          }
        }

        return clonedCanvas;
      } catch (e) {
        this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
      }

      return clonedCanvas;
    };

    DocumentCloner.prototype.appendChildNode = function (clone, child, copyStyles) {
      if (!isElementNode(child) || !isScriptElement(child) && !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' || !this.options.ignoreElements(child))) {
        if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
          clone.appendChild(this.cloneNode(child, copyStyles));
        }
      }
    };

    DocumentCloner.prototype.cloneNode = function (node, copyStyles) {
      var _this = this;

      if (isTextNode(node)) {
        return document.createTextNode(node.data);
      }

      if (!node.ownerDocument) {
        return node.cloneNode(false);
      }

      var window = node.ownerDocument.defaultView;

      if (window && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
        var clone_1 = this.createElementClone(node);
        clone_1.style.transitionProperty = 'none';
        var style = window.getComputedStyle(node);
        var styleBefore = window.getComputedStyle(node, ':before');
        var styleAfter = window.getComputedStyle(node, ':after');

        if (this.referenceElement === node && isHTMLElementNode(clone_1)) {
          this.clonedReferenceElement = clone_1;
        }

        if (isBodyElement(clone_1)) {
          createPseudoHideStyles(clone_1);
        }

        var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
        var before = this.resolvePseudoContent(node, clone_1, styleBefore, PseudoElementType.BEFORE);

        if (isCustomElement(node)) {
          copyStyles = true;
        }

        for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
          if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === 'function') {
            var assignedNodes = child.assignedNodes();

            if (assignedNodes.length) {
              assignedNodes.forEach(function (assignedNode) {
                return _this.appendChildNode(clone_1, assignedNode, copyStyles);
              });
            }
          } else {
            this.appendChildNode(clone_1, child, copyStyles);
          }
        }

        if (before) {
          clone_1.insertBefore(before, clone_1.firstChild);
        }

        var after = this.resolvePseudoContent(node, clone_1, styleAfter, PseudoElementType.AFTER);

        if (after) {
          clone_1.appendChild(after);
        }

        this.counters.pop(counters);

        if (style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node) || copyStyles) {
          copyCSSStyles(style, clone_1);
        }

        if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
          this.scrolledElements.push([clone_1, node.scrollLeft, node.scrollTop]);
        }

        if ((isTextareaElement(node) || isSelectElement(node)) && (isTextareaElement(clone_1) || isSelectElement(clone_1))) {
          clone_1.value = node.value;
        }

        return clone_1;
      }

      return node.cloneNode(false);
    };

    DocumentCloner.prototype.resolvePseudoContent = function (node, clone, style, pseudoElt) {
      var _this = this;

      if (!style) {
        return;
      }

      var value = style.content;
      var document = clone.ownerDocument;

      if (!document || !value || value === 'none' || value === '-moz-alt-content' || style.display === 'none') {
        return;
      }

      this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
      var declaration = new CSSParsedPseudoDeclaration(this.context, style);
      var anonymousReplacedElement = document.createElement('html2canvaspseudoelement');
      copyCSSStyles(style, anonymousReplacedElement);
      declaration.content.forEach(function (token) {
        if (token.type === 0
        /* STRING_TOKEN */
        ) {
          anonymousReplacedElement.appendChild(document.createTextNode(token.value));
        } else if (token.type === 22
        /* URL_TOKEN */
        ) {
          var img = document.createElement('img');
          img.src = token.value;
          img.style.opacity = '1';
          anonymousReplacedElement.appendChild(img);
        } else if (token.type === 18
        /* FUNCTION */
        ) {
          if (token.name === 'attr') {
            var attr = token.values.filter(isIdentToken);

            if (attr.length) {
              anonymousReplacedElement.appendChild(document.createTextNode(node.getAttribute(attr[0].value) || ''));
            }
          } else if (token.name === 'counter') {
            var _a = token.values.filter(nonFunctionArgSeparator),
                counter = _a[0],
                counterStyle = _a[1];

            if (counter && isIdentToken(counter)) {
              var counterState = _this.counters.getCounterValue(counter.value);

              var counterType = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3
              /* DECIMAL */
              ;
              anonymousReplacedElement.appendChild(document.createTextNode(createCounterText(counterState, counterType, false)));
            }
          } else if (token.name === 'counters') {
            var _b = token.values.filter(nonFunctionArgSeparator),
                counter = _b[0],
                delim = _b[1],
                counterStyle = _b[2];

            if (counter && isIdentToken(counter)) {
              var counterStates = _this.counters.getCounterValues(counter.value);

              var counterType_1 = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3
              /* DECIMAL */
              ;
              var separator = delim && delim.type === 0
              /* STRING_TOKEN */
              ? delim.value : '';
              var text = counterStates.map(function (value) {
                return createCounterText(value, counterType_1, false);
              }).join(separator);
              anonymousReplacedElement.appendChild(document.createTextNode(text));
            }
          } else ;
        } else if (token.type === 20
        /* IDENT_TOKEN */
        ) {
          switch (token.value) {
            case 'open-quote':
              anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
              break;

            case 'close-quote':
              anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
              break;

            default:
              // safari doesn't parse string tokens correctly because of lack of quotes
              anonymousReplacedElement.appendChild(document.createTextNode(token.value));
          }
        }
      });
      anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
      var newClassName = pseudoElt === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;

      if (isSVGElementNode(clone)) {
        clone.className.baseValue += newClassName;
      } else {
        clone.className += newClassName;
      }

      return anonymousReplacedElement;
    };

    DocumentCloner.destroy = function (container) {
      if (container.parentNode) {
        container.parentNode.removeChild(container);
        return true;
      }

      return false;
    };

    return DocumentCloner;
  }();

  var PseudoElementType;

  (function (PseudoElementType) {
    PseudoElementType[PseudoElementType["BEFORE"] = 0] = "BEFORE";
    PseudoElementType[PseudoElementType["AFTER"] = 1] = "AFTER";
  })(PseudoElementType || (PseudoElementType = {}));

  var createIFrameContainer = function createIFrameContainer(ownerDocument, bounds) {
    var cloneIframeContainer = ownerDocument.createElement('iframe');
    cloneIframeContainer.className = 'html2canvas-container';
    cloneIframeContainer.style.visibility = 'hidden';
    cloneIframeContainer.style.position = 'fixed';
    cloneIframeContainer.style.left = '-10000px';
    cloneIframeContainer.style.top = '0px';
    cloneIframeContainer.style.border = '0';
    cloneIframeContainer.width = bounds.width.toString();
    cloneIframeContainer.height = bounds.height.toString();
    cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it

    cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
    ownerDocument.body.appendChild(cloneIframeContainer);
    return cloneIframeContainer;
  };

  var imageReady = function imageReady(img) {
    return new Promise(function (resolve) {
      if (img.complete) {
        resolve();
        return;
      }

      if (!img.src) {
        resolve();
        return;
      }

      img.onload = resolve;
      img.onerror = resolve;
    });
  };

  var imagesReady = function imagesReady(document) {
    return Promise.all([].slice.call(document.images, 0).map(imageReady));
  };

  var iframeLoader = function iframeLoader(iframe) {
    return new Promise(function (resolve, reject) {
      var cloneWindow = iframe.contentWindow;

      if (!cloneWindow) {
        return reject("No window assigned for iframe");
      }

      var documentClone = cloneWindow.document;

      cloneWindow.onload = iframe.onload = function () {
        cloneWindow.onload = iframe.onload = null;
        var interval = setInterval(function () {
          if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
            clearInterval(interval);
            resolve(iframe);
          }
        }, 50);
      };
    });
  };

  var ignoredStyleProperties = ['all', 'd', 'content' // Safari shows pseudoelements if content is set
  ];

  var copyCSSStyles = function copyCSSStyles(style, target) {
    // Edge does not provide value for cssText
    for (var i = style.length - 1; i >= 0; i--) {
      var property = style.item(i);

      if (ignoredStyleProperties.indexOf(property) === -1) {
        target.style.setProperty(property, style.getPropertyValue(property));
      }
    }

    return target;
  };

  var serializeDoctype = function serializeDoctype(doctype) {
    var str = '';

    if (doctype) {
      str += '<!DOCTYPE ';

      if (doctype.name) {
        str += doctype.name;
      }

      if (doctype.internalSubset) {
        str += doctype.internalSubset;
      }

      if (doctype.publicId) {
        str += "\"" + doctype.publicId + "\"";
      }

      if (doctype.systemId) {
        str += "\"" + doctype.systemId + "\"";
      }

      str += '>';
    }

    return str;
  };

  var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument && ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
      ownerDocument.defaultView.scrollTo(x, y);
    }
  };

  var restoreNodeScroll = function restoreNodeScroll(_a) {
    var element = _a[0],
        x = _a[1],
        y = _a[2];
    element.scrollLeft = x;
    element.scrollTop = y;
  };

  var PSEUDO_BEFORE = ':before';
  var PSEUDO_AFTER = ':after';
  var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
  var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';
  var PSEUDO_HIDE_ELEMENT_STYLE = "{\n    content: \"\" !important;\n    display: none !important;\n}";

  var createPseudoHideStyles = function createPseudoHideStyles(body) {
    createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
  };

  var createStyles = function createStyles(body, styles) {
    var document = body.ownerDocument;

    if (document) {
      var style = document.createElement('style');
      style.textContent = styles;
      body.appendChild(style);
    }
  };

  var CacheStorage = function () {
    function CacheStorage() {}

    CacheStorage.getOrigin = function (url) {
      var link = CacheStorage._link;

      if (!link) {
        return 'about:blank';
      }

      link.href = url;
      link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/

      return link.protocol + link.hostname + link.port;
    };

    CacheStorage.isSameOrigin = function (src) {
      return CacheStorage.getOrigin(src) === CacheStorage._origin;
    };

    CacheStorage.setContext = function (window) {
      CacheStorage._link = window.document.createElement('a');
      CacheStorage._origin = CacheStorage.getOrigin(window.location.href);
    };

    CacheStorage._origin = 'about:blank';
    return CacheStorage;
  }();

  var Cache = function () {
    function Cache(context, _options) {
      this.context = context;
      this._options = _options; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      this._cache = {};
    }

    Cache.prototype.addImage = function (src) {
      var result = Promise.resolve();

      if (this.has(src)) {
        return result;
      }

      if (isBlobImage(src) || isRenderable(src)) {
        (this._cache[src] = this.loadImage(src)).catch(function () {// prevent unhandled rejection
        });
        return result;
      }

      return result;
    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


    Cache.prototype.match = function (src) {
      return this._cache[src];
    };

    Cache.prototype.loadImage = function (key) {
      return __awaiter(this, void 0, void 0, function () {
        var isSameOrigin, useCORS, useProxy, src;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              isSameOrigin = CacheStorage.isSameOrigin(key);
              useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
              useProxy = !isInlineImage(key) && !isSameOrigin && !isBlobImage(key) && typeof this._options.proxy === 'string' && FEATURES.SUPPORT_CORS_XHR && !useCORS;

              if (!isSameOrigin && this._options.allowTaint === false && !isInlineImage(key) && !isBlobImage(key) && !useProxy && !useCORS) {
                return [2
                /*return*/
                ];
              }

              src = key;
              if (!useProxy) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.proxy(src)];

            case 1:
              src = _a.sent();
              _a.label = 2;

            case 2:
              this.context.logger.debug("Added image " + key.substring(0, 256));
              return [4
              /*yield*/
              , new Promise(function (resolve, reject) {
                var img = new Image();

                img.onload = function () {
                  return resolve(img);
                };

                img.onerror = reject; //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous

                if (isInlineBase64Image(src) || useCORS) {
                  img.crossOrigin = 'anonymous';
                }

                img.src = src;

                if (img.complete === true) {
                  // Inline XML images may fail to parse, throwing an Error later on
                  setTimeout(function () {
                    return resolve(img);
                  }, 500);
                }

                if (_this._options.imageTimeout > 0) {
                  setTimeout(function () {
                    return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                  }, _this._options.imageTimeout);
                }
              })];

            case 3:
              return [2
              /*return*/
              , _a.sent()];
          }
        });
      });
    };

    Cache.prototype.has = function (key) {
      return typeof this._cache[key] !== 'undefined';
    };

    Cache.prototype.keys = function () {
      return Promise.resolve(Object.keys(this._cache));
    };

    Cache.prototype.proxy = function (src) {
      var _this = this;

      var proxy = this._options.proxy;

      if (!proxy) {
        throw new Error('No proxy defined');
      }

      var key = src.substring(0, 256);
      return new Promise(function (resolve, reject) {
        var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
        var xhr = new XMLHttpRequest();

        xhr.onload = function () {
          if (xhr.status === 200) {
            if (responseType === 'text') {
              resolve(xhr.response);
            } else {
              var reader_1 = new FileReader();
              reader_1.addEventListener('load', function () {
                return resolve(reader_1.result);
              }, false);
              reader_1.addEventListener('error', function (e) {
                return reject(e);
              }, false);
              reader_1.readAsDataURL(xhr.response);
            }
          } else {
            reject("Failed to proxy resource " + key + " with status code " + xhr.status);
          }
        };

        xhr.onerror = reject;
        var queryString = proxy.indexOf('?') > -1 ? '&' : '?';
        xhr.open('GET', "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);

        if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
          xhr.responseType = responseType;
        }

        if (_this._options.imageTimeout) {
          var timeout_1 = _this._options.imageTimeout;
          xhr.timeout = timeout_1;

          xhr.ontimeout = function () {
            return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
          };
        }

        xhr.send();
      });
    };

    return Cache;
  }();

  var INLINE_SVG = /^data:image\/svg\+xml/i;
  var INLINE_BASE64 = /^data:image\/.*;base64,/i;
  var INLINE_IMG = /^data:image\/.*/i;

  var isRenderable = function isRenderable(src) {
    return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
  };

  var isInlineImage = function isInlineImage(src) {
    return INLINE_IMG.test(src);
  };

  var isInlineBase64Image = function isInlineBase64Image(src) {
    return INLINE_BASE64.test(src);
  };

  var isBlobImage = function isBlobImage(src) {
    return src.substr(0, 4) === 'blob';
  };

  var isSVG = function isSVG(src) {
    return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
  };

  var Vector = function () {
    function Vector(x, y) {
      this.type = 0
      /* VECTOR */
      ;
      this.x = x;
      this.y = y;
    }

    Vector.prototype.add = function (deltaX, deltaY) {
      return new Vector(this.x + deltaX, this.y + deltaY);
    };

    return Vector;
  }();

  var lerp = function lerp(a, b, t) {
    return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
  };

  var BezierCurve = function () {
    function BezierCurve(start, startControl, endControl, end) {
      this.type = 1
      /* BEZIER_CURVE */
      ;
      this.start = start;
      this.startControl = startControl;
      this.endControl = endControl;
      this.end = end;
    }

    BezierCurve.prototype.subdivide = function (t, firstHalf) {
      var ab = lerp(this.start, this.startControl, t);
      var bc = lerp(this.startControl, this.endControl, t);
      var cd = lerp(this.endControl, this.end, t);
      var abbc = lerp(ab, bc, t);
      var bccd = lerp(bc, cd, t);
      var dest = lerp(abbc, bccd, t);
      return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
    };

    BezierCurve.prototype.add = function (deltaX, deltaY) {
      return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
    };

    BezierCurve.prototype.reverse = function () {
      return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
    };

    return BezierCurve;
  }();

  var isBezierCurve = function isBezierCurve(path) {
    return path.type === 1
    /* BEZIER_CURVE */
    ;
  };

  var BoundCurves = function () {
    function BoundCurves(element) {
      var styles = element.styles;
      var bounds = element.bounds;

      var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height),
          tlh = _a[0],
          tlv = _a[1];

      var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height),
          trh = _b[0],
          trv = _b[1];

      var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height),
          brh = _c[0],
          brv = _c[1];

      var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height),
          blh = _d[0],
          blv = _d[1];

      var factors = [];
      factors.push((tlh + trh) / bounds.width);
      factors.push((blh + brh) / bounds.width);
      factors.push((tlv + blv) / bounds.height);
      factors.push((trv + brv) / bounds.height);
      var maxFactor = Math.max.apply(Math, factors);

      if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
      }

      var topWidth = bounds.width - trh;
      var rightHeight = bounds.height - brv;
      var bottomWidth = bounds.width - brh;
      var leftHeight = bounds.height - blv;
      var borderTopWidth = styles.borderTopWidth;
      var borderRightWidth = styles.borderRightWidth;
      var borderBottomWidth = styles.borderBottomWidth;
      var borderLeftWidth = styles.borderLeftWidth;
      var paddingTop = getAbsoluteValue(styles.paddingTop, element.bounds.width);
      var paddingRight = getAbsoluteValue(styles.paddingRight, element.bounds.width);
      var paddingBottom = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
      var paddingLeft = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
      this.topLeftBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3, tlh - borderLeftWidth / 3, tlv - borderTopWidth / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3);
      this.topRightBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 3, trh - borderRightWidth / 3, trv - borderTopWidth / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + borderTopWidth / 3);
      this.bottomRightBorderDoubleOuterBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 3, brv - borderBottomWidth / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
      this.bottomLeftBorderDoubleOuterBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + leftHeight, blh - borderLeftWidth / 3, blv - borderBottomWidth / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
      this.topLeftBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth * 2 / 3, bounds.top + borderTopWidth * 2 / 3, tlh - borderLeftWidth * 2 / 3, tlv - borderTopWidth * 2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth * 2 / 3, bounds.top + borderTopWidth * 2 / 3);
      this.topRightBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth * 2 / 3, trh - borderRightWidth * 2 / 3, trv - borderTopWidth * 2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth * 2 / 3, bounds.top + borderTopWidth * 2 / 3);
      this.bottomRightBorderDoubleInnerBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth * 2 / 3, brv - borderBottomWidth * 2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth * 2 / 3, bounds.top + bounds.height - borderBottomWidth * 2 / 3);
      this.bottomLeftBorderDoubleInnerBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth * 2 / 3, bounds.top + leftHeight, blh - borderLeftWidth * 2 / 3, blv - borderBottomWidth * 2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth * 2 / 3, bounds.top + bounds.height - borderBottomWidth * 2 / 3);
      this.topLeftBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2, tlh - borderLeftWidth / 2, tlv - borderTopWidth / 2, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2);
      this.topRightBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 2, trh - borderRightWidth / 2, trv - borderTopWidth / 2, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + borderTopWidth / 2);
      this.bottomRightBorderStroke = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 2, brv - borderBottomWidth / 2, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
      this.bottomLeftBorderStroke = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + leftHeight, blh - borderLeftWidth / 2, blv - borderBottomWidth / 2, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
      this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
      this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
      this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
      this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
      this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth, bounds.top + borderTopWidth);
      this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth), bounds.top + borderTopWidth, topWidth > bounds.width + borderRightWidth ? 0 : Math.max(0, trh - borderRightWidth), Math.max(0, trv - borderTopWidth), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + borderTopWidth);
      this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth), Math.max(0, brh - borderRightWidth), Math.max(0, brv - borderBottomWidth), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + bounds.height - borderBottomWidth);
      this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth), Math.max(0, blh - borderLeftWidth), Math.max(0, blv - borderBottomWidth), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth, bounds.top + bounds.height - borderBottomWidth);
      this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop);
      this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth + paddingLeft), bounds.top + borderTopWidth + paddingTop, topWidth > bounds.width + borderLeftWidth + paddingLeft ? 0 : trh - borderLeftWidth + paddingLeft, trv - (borderTopWidth + paddingTop), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + borderTopWidth + paddingTop);
      this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth + paddingLeft)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
      this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
    }

    return BoundCurves;
  }();

  var CORNER;

  (function (CORNER) {
    CORNER[CORNER["TOP_LEFT"] = 0] = "TOP_LEFT";
    CORNER[CORNER["TOP_RIGHT"] = 1] = "TOP_RIGHT";
    CORNER[CORNER["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
    CORNER[CORNER["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
  })(CORNER || (CORNER = {}));

  var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = r1 * kappa; // control point offset horizontal

    var oy = r2 * kappa; // control point offset vertical

    var xm = x + r1; // x-middle

    var ym = y + r2; // y-middle

    switch (position) {
      case CORNER.TOP_LEFT:
        return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));

      case CORNER.TOP_RIGHT:
        return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));

      case CORNER.BOTTOM_RIGHT:
        return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));

      case CORNER.BOTTOM_LEFT:
      default:
        return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
    }
  };

  var calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
    return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
  };

  var calculateContentBoxPath = function calculateContentBoxPath(curves) {
    return [curves.topLeftContentBox, curves.topRightContentBox, curves.bottomRightContentBox, curves.bottomLeftContentBox];
  };

  var calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
    return [curves.topLeftPaddingBox, curves.topRightPaddingBox, curves.bottomRightPaddingBox, curves.bottomLeftPaddingBox];
  };

  var TransformEffect = function () {
    function TransformEffect(offsetX, offsetY, matrix) {
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.matrix = matrix;
      this.type = 0
      /* TRANSFORM */
      ;
      this.target = 2
      /* BACKGROUND_BORDERS */
      | 4
      /* CONTENT */
      ;
    }

    return TransformEffect;
  }();

  var ClipEffect = function () {
    function ClipEffect(path, target) {
      this.path = path;
      this.target = target;
      this.type = 1
      /* CLIP */
      ;
    }

    return ClipEffect;
  }();

  var OpacityEffect = function () {
    function OpacityEffect(opacity) {
      this.opacity = opacity;
      this.type = 2
      /* OPACITY */
      ;
      this.target = 2
      /* BACKGROUND_BORDERS */
      | 4
      /* CONTENT */
      ;
    }

    return OpacityEffect;
  }();

  var isTransformEffect = function isTransformEffect(effect) {
    return effect.type === 0
    /* TRANSFORM */
    ;
  };

  var isClipEffect = function isClipEffect(effect) {
    return effect.type === 1
    /* CLIP */
    ;
  };

  var isOpacityEffect = function isOpacityEffect(effect) {
    return effect.type === 2
    /* OPACITY */
    ;
  };

  var equalPath = function equalPath(a, b) {
    if (a.length === b.length) {
      return a.some(function (v, i) {
        return v === b[i];
      });
    }

    return false;
  };

  var transformPath = function transformPath(path, deltaX, deltaY, deltaW, deltaH) {
    return path.map(function (point, index) {
      switch (index) {
        case 0:
          return point.add(deltaX, deltaY);

        case 1:
          return point.add(deltaX + deltaW, deltaY);

        case 2:
          return point.add(deltaX + deltaW, deltaY + deltaH);

        case 3:
          return point.add(deltaX, deltaY + deltaH);
      }

      return point;
    });
  };

  var StackingContext = function () {
    function StackingContext(container) {
      this.element = container;
      this.inlineLevel = [];
      this.nonInlineLevel = [];
      this.negativeZIndex = [];
      this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
      this.positiveZIndex = [];
      this.nonPositionedFloats = [];
      this.nonPositionedInlineLevel = [];
    }

    return StackingContext;
  }();

  var ElementPaint = function () {
    function ElementPaint(container, parent) {
      this.container = container;
      this.parent = parent;
      this.effects = [];
      this.curves = new BoundCurves(this.container);

      if (this.container.styles.opacity < 1) {
        this.effects.push(new OpacityEffect(this.container.styles.opacity));
      }

      if (this.container.styles.transform !== null) {
        var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
        var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
        var matrix = this.container.styles.transform;
        this.effects.push(new TransformEffect(offsetX, offsetY, matrix));
      }

      if (this.container.styles.overflowX !== 0
      /* VISIBLE */
      ) {
        var borderBox = calculateBorderBoxPath(this.curves);
        var paddingBox = calculatePaddingBoxPath(this.curves);

        if (equalPath(borderBox, paddingBox)) {
          this.effects.push(new ClipEffect(borderBox, 2
          /* BACKGROUND_BORDERS */
          | 4
          /* CONTENT */
          ));
        } else {
          this.effects.push(new ClipEffect(borderBox, 2
          /* BACKGROUND_BORDERS */
          ));
          this.effects.push(new ClipEffect(paddingBox, 4
          /* CONTENT */
          ));
        }
      }
    }

    ElementPaint.prototype.getEffects = function (target) {
      var inFlow = [2
      /* ABSOLUTE */
      , 3
      /* FIXED */
      ].indexOf(this.container.styles.position) === -1;
      var parent = this.parent;
      var effects = this.effects.slice(0);

      while (parent) {
        var croplessEffects = parent.effects.filter(function (effect) {
          return !isClipEffect(effect);
        });

        if (inFlow || parent.container.styles.position !== 0
        /* STATIC */
        || !parent.parent) {
          effects.unshift.apply(effects, croplessEffects);
          inFlow = [2
          /* ABSOLUTE */
          , 3
          /* FIXED */
          ].indexOf(parent.container.styles.position) === -1;

          if (parent.container.styles.overflowX !== 0
          /* VISIBLE */
          ) {
            var borderBox = calculateBorderBoxPath(parent.curves);
            var paddingBox = calculatePaddingBoxPath(parent.curves);

            if (!equalPath(borderBox, paddingBox)) {
              effects.unshift(new ClipEffect(paddingBox, 2
              /* BACKGROUND_BORDERS */
              | 4
              /* CONTENT */
              ));
            }
          }
        } else {
          effects.unshift.apply(effects, croplessEffects);
        }

        parent = parent.parent;
      }

      return effects.filter(function (effect) {
        return contains(effect.target, target);
      });
    };

    return ElementPaint;
  }();

  var parseStackTree = function parseStackTree(parent, stackingContext, realStackingContext, listItems) {
    parent.container.elements.forEach(function (child) {
      var treatAsRealStackingContext = contains(child.flags, 4
      /* CREATES_REAL_STACKING_CONTEXT */
      );
      var createsStackingContext = contains(child.flags, 2
      /* CREATES_STACKING_CONTEXT */
      );
      var paintContainer = new ElementPaint(child, parent);

      if (contains(child.styles.display, 2048
      /* LIST_ITEM */
      )) {
        listItems.push(paintContainer);
      }

      var listOwnerItems = contains(child.flags, 8
      /* IS_LIST_OWNER */
      ) ? [] : listItems;

      if (treatAsRealStackingContext || createsStackingContext) {
        var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
        var stack = new StackingContext(paintContainer);

        if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
          var order_1 = child.styles.zIndex.order;

          if (order_1 < 0) {
            var index_1 = 0;
            parentStack.negativeZIndex.some(function (current, i) {
              if (order_1 > current.element.container.styles.zIndex.order) {
                index_1 = i;
                return false;
              } else if (index_1 > 0) {
                return true;
              }

              return false;
            });
            parentStack.negativeZIndex.splice(index_1, 0, stack);
          } else if (order_1 > 0) {
            var index_2 = 0;
            parentStack.positiveZIndex.some(function (current, i) {
              if (order_1 >= current.element.container.styles.zIndex.order) {
                index_2 = i + 1;
                return false;
              } else if (index_2 > 0) {
                return true;
              }

              return false;
            });
            parentStack.positiveZIndex.splice(index_2, 0, stack);
          } else {
            parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
          }
        } else {
          if (child.styles.isFloating()) {
            parentStack.nonPositionedFloats.push(stack);
          } else {
            parentStack.nonPositionedInlineLevel.push(stack);
          }
        }

        parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
      } else {
        if (child.styles.isInlineLevel()) {
          stackingContext.inlineLevel.push(paintContainer);
        } else {
          stackingContext.nonInlineLevel.push(paintContainer);
        }

        parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
      }

      if (contains(child.flags, 8
      /* IS_LIST_OWNER */
      )) {
        processListItems(child, listOwnerItems);
      }
    });
  };

  var processListItems = function processListItems(owner, elements) {
    var numbering = owner instanceof OLElementContainer ? owner.start : 1;
    var reversed = owner instanceof OLElementContainer ? owner.reversed : false;

    for (var i = 0; i < elements.length; i++) {
      var item = elements[i];

      if (item.container instanceof LIElementContainer && typeof item.container.value === 'number' && item.container.value !== 0) {
        numbering = item.container.value;
      }

      item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
      numbering += reversed ? -1 : 1;
    }
  };

  var parseStackingContexts = function parseStackingContexts(container) {
    var paintContainer = new ElementPaint(container, null);
    var root = new StackingContext(paintContainer);
    var listItems = [];
    parseStackTree(paintContainer, root, root, listItems);
    processListItems(paintContainer.container, listItems);
    return root;
  };

  var parsePathForBorder = function parsePathForBorder(curves, borderSide) {
    switch (borderSide) {
      case 0:
        return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);

      case 1:
        return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);

      case 2:
        return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);

      case 3:
      default:
        return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
    }
  };

  var parsePathForBorderDoubleOuter = function parsePathForBorderDoubleOuter(curves, borderSide) {
    switch (borderSide) {
      case 0:
        return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);

      case 1:
        return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);

      case 2:
        return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);

      case 3:
      default:
        return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
    }
  };

  var parsePathForBorderDoubleInner = function parsePathForBorderDoubleInner(curves, borderSide) {
    switch (borderSide) {
      case 0:
        return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);

      case 1:
        return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);

      case 2:
        return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);

      case 3:
      default:
        return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
    }
  };

  var parsePathForBorderStroke = function parsePathForBorderStroke(curves, borderSide) {
    switch (borderSide) {
      case 0:
        return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);

      case 1:
        return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);

      case 2:
        return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);

      case 3:
      default:
        return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
    }
  };

  var createStrokePathFromCurves = function createStrokePathFromCurves(outer1, outer2) {
    var path = [];

    if (isBezierCurve(outer1)) {
      path.push(outer1.subdivide(0.5, false));
    } else {
      path.push(outer1);
    }

    if (isBezierCurve(outer2)) {
      path.push(outer2.subdivide(0.5, true));
    } else {
      path.push(outer2);
    }

    return path;
  };

  var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
    var path = [];

    if (isBezierCurve(outer1)) {
      path.push(outer1.subdivide(0.5, false));
    } else {
      path.push(outer1);
    }

    if (isBezierCurve(outer2)) {
      path.push(outer2.subdivide(0.5, true));
    } else {
      path.push(outer2);
    }

    if (isBezierCurve(inner2)) {
      path.push(inner2.subdivide(0.5, true).reverse());
    } else {
      path.push(inner2);
    }

    if (isBezierCurve(inner1)) {
      path.push(inner1.subdivide(0.5, false).reverse());
    } else {
      path.push(inner1);
    }

    return path;
  };

  var paddingBox = function paddingBox(element) {
    var bounds = element.bounds;
    var styles = element.styles;
    return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
  };

  var contentBox = function contentBox(element) {
    var styles = element.styles;
    var bounds = element.bounds;
    var paddingLeft = getAbsoluteValue(styles.paddingLeft, bounds.width);
    var paddingRight = getAbsoluteValue(styles.paddingRight, bounds.width);
    var paddingTop = getAbsoluteValue(styles.paddingTop, bounds.width);
    var paddingBottom = getAbsoluteValue(styles.paddingBottom, bounds.width);
    return bounds.add(paddingLeft + styles.borderLeftWidth, paddingTop + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft + paddingRight), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop + paddingBottom));
  };

  var calculateBackgroundPositioningArea = function calculateBackgroundPositioningArea(backgroundOrigin, element) {
    if (backgroundOrigin === 0
    /* BORDER_BOX */
    ) {
      return element.bounds;
    }

    if (backgroundOrigin === 2
    /* CONTENT_BOX */
    ) {
      return contentBox(element);
    }

    return paddingBox(element);
  };

  var calculateBackgroundPaintingArea = function calculateBackgroundPaintingArea(backgroundClip, element) {
    if (backgroundClip === 0
    /* BORDER_BOX */
    ) {
      return element.bounds;
    }

    if (backgroundClip === 2
    /* CONTENT_BOX */
    ) {
      return contentBox(element);
    }

    return paddingBox(element);
  };

  var calculateBackgroundRendering = function calculateBackgroundRendering(container, index, intrinsicSize) {
    var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
    var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
    var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
    var sizeWidth = backgroundImageSize[0],
        sizeHeight = backgroundImageSize[1];
    var position = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
    var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
    var offsetX = Math.round(backgroundPositioningArea.left + position[0]);
    var offsetY = Math.round(backgroundPositioningArea.top + position[1]);
    return [path, offsetX, offsetY, sizeWidth, sizeHeight];
  };

  var isAuto = function isAuto(token) {
    return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
  };

  var hasIntrinsicValue = function hasIntrinsicValue(value) {
    return typeof value === 'number';
  };

  var calculateBackgroundSize = function calculateBackgroundSize(size, _a, bounds) {
    var intrinsicWidth = _a[0],
        intrinsicHeight = _a[1],
        intrinsicProportion = _a[2];
    var first = size[0],
        second = size[1];

    if (!first) {
      return [0, 0];
    }

    if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
      return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
    }

    var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);

    if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
      if (hasIntrinsicValue(intrinsicProportion)) {
        var targetRatio = bounds.width / bounds.height;
        return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
      }

      return [bounds.width, bounds.height];
    }

    var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
    var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
    var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight; // If the background-size is auto or auto auto:

    if (isAuto(first) && (!second || isAuto(second))) {
      // If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
      if (hasIntrinsicWidth && hasIntrinsicHeight) {
        return [intrinsicWidth, intrinsicHeight];
      } // If the image has no intrinsic dimensions and has no intrinsic proportions,
      // it's rendered at the size of the background positioning area.


      if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
        return [bounds.width, bounds.height];
      } // TODO If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if contain had been specified instead.
      // If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension.
      // The other dimension is computed using the specified dimension and the intrinsic proportions.


      if (hasIntrinsicDimensions && hasIntrinsicProportion) {
        var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
        var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
        return [width_1, height_1];
      } // If the image has only one intrinsic dimension but has no intrinsic proportions,
      // it's rendered using the specified dimension and the other dimension of the background positioning area.


      var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
      var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
      return [width_2, height_2];
    } // If the image has intrinsic proportions, it's stretched to the specified dimension.
    // The unspecified dimension is computed using the specified dimension and the intrinsic proportions.


    if (hasIntrinsicProportion) {
      var width_3 = 0;
      var height_3 = 0;

      if (isLengthPercentage(first)) {
        width_3 = getAbsoluteValue(first, bounds.width);
      } else if (isLengthPercentage(second)) {
        height_3 = getAbsoluteValue(second, bounds.height);
      }

      if (isAuto(first)) {
        width_3 = height_3 * intrinsicProportion;
      } else if (!second || isAuto(second)) {
        height_3 = width_3 / intrinsicProportion;
      }

      return [width_3, height_3];
    } // If the image has no intrinsic proportions, it's stretched to the specified dimension.
    // The unspecified dimension is computed using the image's corresponding intrinsic dimension,
    // if there is one. If there is no such intrinsic dimension,
    // it becomes the corresponding dimension of the background positioning area.


    var width = null;
    var height = null;

    if (isLengthPercentage(first)) {
      width = getAbsoluteValue(first, bounds.width);
    } else if (second && isLengthPercentage(second)) {
      height = getAbsoluteValue(second, bounds.height);
    }

    if (width !== null && (!second || isAuto(second))) {
      height = hasIntrinsicWidth && hasIntrinsicHeight ? width / intrinsicWidth * intrinsicHeight : bounds.height;
    }

    if (height !== null && isAuto(first)) {
      width = hasIntrinsicWidth && hasIntrinsicHeight ? height / intrinsicHeight * intrinsicWidth : bounds.width;
    }

    if (width !== null && height !== null) {
      return [width, height];
    }

    throw new Error("Unable to calculate background-size for element");
  };

  var getBackgroundValueForIndex = function getBackgroundValueForIndex(values, index) {
    var value = values[index];

    if (typeof value === 'undefined') {
      return values[0];
    }

    return value;
  };

  var calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
    var x = _a[0],
        y = _a[1];
    var width = _b[0],
        height = _b[1];

    switch (repeat) {
      case 2
      /* REPEAT_X */
      :
        return [new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))];

      case 3
      /* REPEAT_Y */
      :
        return [new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)), new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))];

      case 1
      /* NO_REPEAT */
      :
        return [new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)), new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))];

      default:
        return [new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)), new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)), new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)), new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))];
    }
  };

  var SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  var SAMPLE_TEXT = 'Hidden Text';

  var FontMetrics = function () {
    function FontMetrics(document) {
      this._data = {};
      this._document = document;
    }

    FontMetrics.prototype.parseMetrics = function (fontFamily, fontSize) {
      var container = this._document.createElement('div');

      var img = this._document.createElement('img');

      var span = this._document.createElement('span');

      var body = this._document.body;
      container.style.visibility = 'hidden';
      container.style.fontFamily = fontFamily;
      container.style.fontSize = fontSize;
      container.style.margin = '0';
      container.style.padding = '0';
      container.style.whiteSpace = 'nowrap';
      body.appendChild(container);
      img.src = SMALL_IMAGE;
      img.width = 1;
      img.height = 1;
      img.style.margin = '0';
      img.style.padding = '0';
      img.style.verticalAlign = 'baseline';
      span.style.fontFamily = fontFamily;
      span.style.fontSize = fontSize;
      span.style.margin = '0';
      span.style.padding = '0';
      span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
      container.appendChild(span);
      container.appendChild(img);
      var baseline = img.offsetTop - span.offsetTop + 2;
      container.removeChild(span);
      container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
      container.style.lineHeight = 'normal';
      img.style.verticalAlign = 'super';
      var middle = img.offsetTop - container.offsetTop + 2;
      body.removeChild(container);
      return {
        baseline: baseline,
        middle: middle
      };
    };

    FontMetrics.prototype.getMetrics = function (fontFamily, fontSize) {
      var key = fontFamily + " " + fontSize;

      if (typeof this._data[key] === 'undefined') {
        this._data[key] = this.parseMetrics(fontFamily, fontSize);
      }

      return this._data[key];
    };

    return FontMetrics;
  }();

  var Renderer = function () {
    function Renderer(context, options) {
      this.context = context;
      this.options = options;
    }

    return Renderer;
  }();

  var MASK_OFFSET = 10000;

  var CanvasRenderer = function (_super) {
    __extends(CanvasRenderer, _super);

    function CanvasRenderer(context, options) {
      var _this = _super.call(this, context, options) || this;

      _this._activeEffects = [];
      _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
      _this.ctx = _this.canvas.getContext('2d');

      if (!options.canvas) {
        _this.canvas.width = Math.floor(options.width * options.scale);
        _this.canvas.height = Math.floor(options.height * options.scale);
        _this.canvas.style.width = options.width + "px";
        _this.canvas.style.height = options.height + "px";
      }

      _this.fontMetrics = new FontMetrics(document);

      _this.ctx.scale(_this.options.scale, _this.options.scale);

      _this.ctx.translate(-options.x, -options.y);

      _this.ctx.textBaseline = 'bottom';
      _this._activeEffects = [];

      _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);

      return _this;
    }

    CanvasRenderer.prototype.applyEffects = function (effects) {
      var _this = this;

      while (this._activeEffects.length) {
        this.popEffect();
      }

      effects.forEach(function (effect) {
        return _this.applyEffect(effect);
      });
    };

    CanvasRenderer.prototype.applyEffect = function (effect) {
      this.ctx.save();

      if (isOpacityEffect(effect)) {
        this.ctx.globalAlpha = effect.opacity;
      }

      if (isTransformEffect(effect)) {
        this.ctx.translate(effect.offsetX, effect.offsetY);
        this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
        this.ctx.translate(-effect.offsetX, -effect.offsetY);
      }

      if (isClipEffect(effect)) {
        this.path(effect.path);
        this.ctx.clip();
      }

      this._activeEffects.push(effect);
    };

    CanvasRenderer.prototype.popEffect = function () {
      this._activeEffects.pop();

      this.ctx.restore();
    };

    CanvasRenderer.prototype.renderStack = function (stack) {
      return __awaiter(this, void 0, void 0, function () {
        var styles;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              styles = stack.element.container.styles;
              if (!styles.isVisible()) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.renderStackContent(stack)];

            case 1:
              _a.sent();

              _a.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    CanvasRenderer.prototype.renderNode = function (paint) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (contains(paint.container.flags, 16
              /* DEBUG_RENDER */
              )) {
                debugger;
              }

              if (!paint.container.styles.isVisible()) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , this.renderNodeBackgroundAndBorders(paint)];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , this.renderNodeContent(paint)];

            case 2:
              _a.sent();

              _a.label = 3;

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    CanvasRenderer.prototype.renderTextWithLetterSpacing = function (text, letterSpacing, baseline) {
      var _this = this;

      if (letterSpacing === 0) {
        this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
      } else {
        var letters = segmentGraphemes(text.text);
        letters.reduce(function (left, letter) {
          _this.ctx.fillText(letter, left, text.bounds.top + baseline);

          return left + _this.ctx.measureText(letter).width;
        }, text.bounds.left);
      }
    };

    CanvasRenderer.prototype.createFontStyle = function (styles) {
      var fontVariant = styles.fontVariant.filter(function (variant) {
        return variant === 'normal' || variant === 'small-caps';
      }).join('');
      var fontFamily = fixIOSSystemFonts(styles.fontFamily).join(', ');
      var fontSize = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
      return [[styles.fontStyle, fontVariant, styles.fontWeight, fontSize, fontFamily].join(' '), fontFamily, fontSize];
    };

    CanvasRenderer.prototype.renderTextNode = function (text, styles) {
      return __awaiter(this, void 0, void 0, function () {
        var _a, font, fontFamily, fontSize, _b, baseline, middle, paintOrder;

        var _this = this;

        return __generator(this, function (_c) {
          _a = this.createFontStyle(styles), font = _a[0], fontFamily = _a[1], fontSize = _a[2];
          this.ctx.font = font;
          this.ctx.direction = styles.direction === 1
          /* RTL */
          ? 'rtl' : 'ltr';
          this.ctx.textAlign = 'left';
          this.ctx.textBaseline = 'alphabetic';
          _b = this.fontMetrics.getMetrics(fontFamily, fontSize), baseline = _b.baseline, middle = _b.middle;
          paintOrder = styles.paintOrder;
          text.textBounds.forEach(function (text) {
            paintOrder.forEach(function (paintOrderLayer) {
              switch (paintOrderLayer) {
                case 0
                /* FILL */
                :
                  _this.ctx.fillStyle = asString(styles.color);

                  _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);

                  var textShadows = styles.textShadow;

                  if (textShadows.length && text.text.trim().length) {
                    textShadows.slice(0).reverse().forEach(function (textShadow) {
                      _this.ctx.shadowColor = asString(textShadow.color);
                      _this.ctx.shadowOffsetX = textShadow.offsetX.number * _this.options.scale;
                      _this.ctx.shadowOffsetY = textShadow.offsetY.number * _this.options.scale;
                      _this.ctx.shadowBlur = textShadow.blur.number;

                      _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                    });
                    _this.ctx.shadowColor = '';
                    _this.ctx.shadowOffsetX = 0;
                    _this.ctx.shadowOffsetY = 0;
                    _this.ctx.shadowBlur = 0;
                  }

                  if (styles.textDecorationLine.length) {
                    _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                    styles.textDecorationLine.forEach(function (textDecorationLine) {
                      switch (textDecorationLine) {
                        case 1
                        /* UNDERLINE */
                        :
                          // Draws a line at the baseline of the font
                          // TODO As some browsers display the line as more than 1px if the font-size is big,
                          // need to take that into account both in position and size
                          _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1);

                          break;

                        case 2
                        /* OVERLINE */
                        :
                          _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);

                          break;

                        case 3
                        /* LINE_THROUGH */
                        :
                          // TODO try and find exact position for line-through
                          _this.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);

                          break;
                      }
                    });
                  }

                  break;

                case 1
                /* STROKE */
                :
                  if (styles.webkitTextStrokeWidth && text.text.trim().length) {
                    _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                    _this.ctx.lineWidth = styles.webkitTextStrokeWidth; // eslint-disable-next-line @typescript-eslint/no-explicit-any

                    _this.ctx.lineJoin = !!window.chrome ? 'miter' : 'round';

                    _this.ctx.strokeText(text.text, text.bounds.left, text.bounds.top + baseline);
                  }

                  _this.ctx.strokeStyle = '';
                  _this.ctx.lineWidth = 0;
                  _this.ctx.lineJoin = 'miter';
                  break;
              }
            });
          });
          return [2
          /*return*/
          ];
        });
      });
    };

    CanvasRenderer.prototype.renderReplacedElement = function (container, curves, image) {
      if (image && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
        var box = contentBox(container);
        var path = calculatePaddingBoxPath(curves);
        this.path(path);
        this.ctx.save();
        this.ctx.clip();
        this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
        this.ctx.restore();
      }
    };

    CanvasRenderer.prototype.renderNodeContent = function (paint) {
      return __awaiter(this, void 0, void 0, function () {
        var container, curves, styles, _i, _a, child, image, image, iframeRenderer, canvas, size, _b, fontFamily, fontSize, baseline, bounds, x, textBounds, img, image, url, fontFamily, bounds;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              this.applyEffects(paint.getEffects(4
              /* CONTENT */
              ));
              container = paint.container;
              curves = paint.curves;
              styles = container.styles;
              _i = 0, _a = container.textNodes;
              _c.label = 1;

            case 1:
              if (!(_i < _a.length)) return [3
              /*break*/
              , 4];
              child = _a[_i];
              return [4
              /*yield*/
              , this.renderTextNode(child, styles)];

            case 2:
              _c.sent();

              _c.label = 3;

            case 3:
              _i++;
              return [3
              /*break*/
              , 1];

            case 4:
              if (!(container instanceof ImageElementContainer)) return [3
              /*break*/
              , 8];
              _c.label = 5;

            case 5:
              _c.trys.push([5, 7,, 8]);

              return [4
              /*yield*/
              , this.context.cache.match(container.src)];

            case 6:
              image = _c.sent();
              this.renderReplacedElement(container, curves, image);
              return [3
              /*break*/
              , 8];

            case 7:
              _c.sent();

              this.context.logger.error("Error loading image " + container.src);
              return [3
              /*break*/
              , 8];

            case 8:
              if (container instanceof CanvasElementContainer) {
                this.renderReplacedElement(container, curves, container.canvas);
              }

              if (!(container instanceof SVGElementContainer)) return [3
              /*break*/
              , 12];
              _c.label = 9;

            case 9:
              _c.trys.push([9, 11,, 12]);

              return [4
              /*yield*/
              , this.context.cache.match(container.svg)];

            case 10:
              image = _c.sent();
              this.renderReplacedElement(container, curves, image);
              return [3
              /*break*/
              , 12];

            case 11:
              _c.sent();

              this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
              return [3
              /*break*/
              , 12];

            case 12:
              if (!(container instanceof IFrameElementContainer && container.tree)) return [3
              /*break*/
              , 14];
              iframeRenderer = new CanvasRenderer(this.context, {
                scale: this.options.scale,
                backgroundColor: container.backgroundColor,
                x: 0,
                y: 0,
                width: container.width,
                height: container.height
              });
              return [4
              /*yield*/
              , iframeRenderer.render(container.tree)];

            case 13:
              canvas = _c.sent();

              if (container.width && container.height) {
                this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
              }

              _c.label = 14;

            case 14:
              if (container instanceof InputElementContainer) {
                size = Math.min(container.bounds.width, container.bounds.height);

                if (container.type === CHECKBOX) {
                  if (container.checked) {
                    this.ctx.save();
                    this.path([new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)]);
                    this.ctx.fillStyle = asString(INPUT_COLOR);
                    this.ctx.fill();
                    this.ctx.restore();
                  }
                } else if (container.type === RADIO) {
                  if (container.checked) {
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                    this.ctx.fillStyle = asString(INPUT_COLOR);
                    this.ctx.fill();
                    this.ctx.restore();
                  }
                }
              }

              if (isTextInputElement(container) && container.value.length) {
                _b = this.createFontStyle(styles), fontFamily = _b[0], fontSize = _b[1];
                baseline = this.fontMetrics.getMetrics(fontFamily, fontSize).baseline;
                this.ctx.font = fontFamily;
                this.ctx.fillStyle = asString(styles.color);
                this.ctx.textBaseline = 'alphabetic';
                this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                bounds = contentBox(container);
                x = 0;

                switch (container.styles.textAlign) {
                  case 1
                  /* CENTER */
                  :
                    x += bounds.width / 2;
                    break;

                  case 2
                  /* RIGHT */
                  :
                    x += bounds.width;
                    break;
                }

                textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                this.ctx.save();
                this.path([new Vector(bounds.left, bounds.top), new Vector(bounds.left + bounds.width, bounds.top), new Vector(bounds.left + bounds.width, bounds.top + bounds.height), new Vector(bounds.left, bounds.top + bounds.height)]);
                this.ctx.clip();
                this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                this.ctx.restore();
                this.ctx.textBaseline = 'alphabetic';
                this.ctx.textAlign = 'left';
              }

              if (!contains(container.styles.display, 2048
              /* LIST_ITEM */
              )) return [3
              /*break*/
              , 20];
              if (!(container.styles.listStyleImage !== null)) return [3
              /*break*/
              , 19];
              img = container.styles.listStyleImage;
              if (!(img.type === 0
              /* URL */
              )) return [3
              /*break*/
              , 18];
              image = void 0;
              url = img.url;
              _c.label = 15;

            case 15:
              _c.trys.push([15, 17,, 18]);

              return [4
              /*yield*/
              , this.context.cache.match(url)];

            case 16:
              image = _c.sent();
              this.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
              return [3
              /*break*/
              , 18];

            case 17:
              _c.sent();

              this.context.logger.error("Error loading list-style-image " + url);
              return [3
              /*break*/
              , 18];

            case 18:
              return [3
              /*break*/
              , 20];

            case 19:
              if (paint.listValue && container.styles.listStyleType !== -1
              /* NONE */
              ) {
                fontFamily = this.createFontStyle(styles)[0];
                this.ctx.font = fontFamily;
                this.ctx.fillStyle = asString(styles.color);
                this.ctx.textBaseline = 'middle';
                this.ctx.textAlign = 'right';
                bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                this.ctx.textBaseline = 'bottom';
                this.ctx.textAlign = 'left';
              }

              _c.label = 20;

            case 20:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    CanvasRenderer.prototype.renderStackContent = function (stack) {
      return __awaiter(this, void 0, void 0, function () {
        var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;

        return __generator(this, function (_p) {
          switch (_p.label) {
            case 0:
              if (contains(stack.element.container.flags, 16
              /* DEBUG_RENDER */
              )) {
                debugger;
              } // https://www.w3.org/TR/css-position-3/#painting-order
              // 1. the background and borders of the element forming the stacking context.


              return [4
              /*yield*/
              , this.renderNodeBackgroundAndBorders(stack.element)];

            case 1:
              // https://www.w3.org/TR/css-position-3/#painting-order
              // 1. the background and borders of the element forming the stacking context.
              _p.sent();

              _i = 0, _a = stack.negativeZIndex;
              _p.label = 2;

            case 2:
              if (!(_i < _a.length)) return [3
              /*break*/
              , 5];
              child = _a[_i];
              return [4
              /*yield*/
              , this.renderStack(child)];

            case 3:
              _p.sent();

              _p.label = 4;

            case 4:
              _i++;
              return [3
              /*break*/
              , 2];

            case 5:
              // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
              return [4
              /*yield*/
              , this.renderNodeContent(stack.element)];

            case 6:
              // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
              _p.sent();

              _b = 0, _c = stack.nonInlineLevel;
              _p.label = 7;

            case 7:
              if (!(_b < _c.length)) return [3
              /*break*/
              , 10];
              child = _c[_b];
              return [4
              /*yield*/
              , this.renderNode(child)];

            case 8:
              _p.sent();

              _p.label = 9;

            case 9:
              _b++;
              return [3
              /*break*/
              , 7];

            case 10:
              _d = 0, _e = stack.nonPositionedFloats;
              _p.label = 11;

            case 11:
              if (!(_d < _e.length)) return [3
              /*break*/
              , 14];
              child = _e[_d];
              return [4
              /*yield*/
              , this.renderStack(child)];

            case 12:
              _p.sent();

              _p.label = 13;

            case 13:
              _d++;
              return [3
              /*break*/
              , 11];

            case 14:
              _f = 0, _g = stack.nonPositionedInlineLevel;
              _p.label = 15;

            case 15:
              if (!(_f < _g.length)) return [3
              /*break*/
              , 18];
              child = _g[_f];
              return [4
              /*yield*/
              , this.renderStack(child)];

            case 16:
              _p.sent();

              _p.label = 17;

            case 17:
              _f++;
              return [3
              /*break*/
              , 15];

            case 18:
              _h = 0, _j = stack.inlineLevel;
              _p.label = 19;

            case 19:
              if (!(_h < _j.length)) return [3
              /*break*/
              , 22];
              child = _j[_h];
              return [4
              /*yield*/
              , this.renderNode(child)];

            case 20:
              _p.sent();

              _p.label = 21;

            case 21:
              _h++;
              return [3
              /*break*/
              , 19];

            case 22:
              _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
              _p.label = 23;

            case 23:
              if (!(_k < _l.length)) return [3
              /*break*/
              , 26];
              child = _l[_k];
              return [4
              /*yield*/
              , this.renderStack(child)];

            case 24:
              _p.sent();

              _p.label = 25;

            case 25:
              _k++;
              return [3
              /*break*/
              , 23];

            case 26:
              _m = 0, _o = stack.positiveZIndex;
              _p.label = 27;

            case 27:
              if (!(_m < _o.length)) return [3
              /*break*/
              , 30];
              child = _o[_m];
              return [4
              /*yield*/
              , this.renderStack(child)];

            case 28:
              _p.sent();

              _p.label = 29;

            case 29:
              _m++;
              return [3
              /*break*/
              , 27];

            case 30:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    CanvasRenderer.prototype.mask = function (paths) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(this.canvas.width, 0);
      this.ctx.lineTo(this.canvas.width, this.canvas.height);
      this.ctx.lineTo(0, this.canvas.height);
      this.ctx.lineTo(0, 0);
      this.formatPath(paths.slice(0).reverse());
      this.ctx.closePath();
    };

    CanvasRenderer.prototype.path = function (paths) {
      this.ctx.beginPath();
      this.formatPath(paths);
      this.ctx.closePath();
    };

    CanvasRenderer.prototype.formatPath = function (paths) {
      var _this = this;

      paths.forEach(function (point, index) {
        var start = isBezierCurve(point) ? point.start : point;

        if (index === 0) {
          _this.ctx.moveTo(start.x, start.y);
        } else {
          _this.ctx.lineTo(start.x, start.y);
        }

        if (isBezierCurve(point)) {
          _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
        }
      });
    };

    CanvasRenderer.prototype.renderRepeat = function (path, pattern, offsetX, offsetY) {
      this.path(path);
      this.ctx.fillStyle = pattern;
      this.ctx.translate(offsetX, offsetY);
      this.ctx.fill();
      this.ctx.translate(-offsetX, -offsetY);
    };

    CanvasRenderer.prototype.resizeImage = function (image, width, height) {
      var _a;

      if (image.width === width && image.height === height) {
        return image;
      }

      var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
      var canvas = ownerDocument.createElement('canvas');
      canvas.width = Math.max(1, width);
      canvas.height = Math.max(1, height);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
      return canvas;
    };

    CanvasRenderer.prototype.renderBackgroundImage = function (container) {
      return __awaiter(this, void 0, void 0, function () {
        var index, _loop_1, this_1, _i, _a, backgroundImage;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              index = container.styles.backgroundImage.length - 1;

              _loop_1 = function _loop_1(backgroundImage) {
                var image, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position, x, y, _g, rx, ry, radialGradient_1, midX, midY, f, invF;

                return __generator(this, function (_h) {
                  switch (_h.label) {
                    case 0:
                      if (!(backgroundImage.type === 0
                      /* URL */
                      )) return [3
                      /*break*/
                      , 5];
                      image = void 0;
                      url = backgroundImage.url;
                      _h.label = 1;

                    case 1:
                      _h.trys.push([1, 3,, 4]);

                      return [4
                      /*yield*/
                      , this_1.context.cache.match(url)];

                    case 2:
                      image = _h.sent();
                      return [3
                      /*break*/
                      , 4];

                    case 3:
                      _h.sent();

                      this_1.context.logger.error("Error loading background-image " + url);
                      return [3
                      /*break*/
                      , 4];

                    case 4:
                      if (image) {
                        _c = calculateBackgroundRendering(container, index, [image.width, image.height, image.width / image.height]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                        pattern = this_1.ctx.createPattern(this_1.resizeImage(image, width, height), 'repeat');
                        this_1.renderRepeat(path, pattern, x, y);
                      }

                      return [3
                      /*break*/
                      , 6];

                    case 5:
                      if (isLinearGradient(backgroundImage)) {
                        _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                        _e = calculateGradientDirection(backgroundImage.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                        canvas = document.createElement('canvas');
                        canvas.width = width;
                        canvas.height = height;
                        ctx = canvas.getContext('2d');
                        gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                        processColorStops(backgroundImage.stops, lineLength).forEach(function (colorStop) {
                          return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                        });
                        ctx.fillStyle = gradient_1;
                        ctx.fillRect(0, 0, width, height);

                        if (width > 0 && height > 0) {
                          pattern = this_1.ctx.createPattern(canvas, 'repeat');
                          this_1.renderRepeat(path, pattern, x, y);
                        }
                      } else if (isRadialGradient(backgroundImage)) {
                        _f = calculateBackgroundRendering(container, index, [null, null, null]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                        position = backgroundImage.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage.position;
                        x = getAbsoluteValue(position[0], width);
                        y = getAbsoluteValue(position[position.length - 1], height);
                        _g = calculateRadius(backgroundImage, x, y, width, height), rx = _g[0], ry = _g[1];

                        if (rx > 0 && ry > 0) {
                          radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                          processColorStops(backgroundImage.stops, rx * 2).forEach(function (colorStop) {
                            return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                          });
                          this_1.path(path);
                          this_1.ctx.fillStyle = radialGradient_1;

                          if (rx !== ry) {
                            midX = container.bounds.left + 0.5 * container.bounds.width;
                            midY = container.bounds.top + 0.5 * container.bounds.height;
                            f = ry / rx;
                            invF = 1 / f;
                            this_1.ctx.save();
                            this_1.ctx.translate(midX, midY);
                            this_1.ctx.transform(1, 0, 0, f, 0, 0);
                            this_1.ctx.translate(-midX, -midY);
                            this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                            this_1.ctx.restore();
                          } else {
                            this_1.ctx.fill();
                          }
                        }
                      }

                      _h.label = 6;

                    case 6:
                      index--;
                      return [2
                      /*return*/
                      ];
                  }
                });
              };

              this_1 = this;
              _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
              _b.label = 1;

            case 1:
              if (!(_i < _a.length)) return [3
              /*break*/
              , 4];
              backgroundImage = _a[_i];
              return [5
              /*yield**/
              , _loop_1(backgroundImage)];

            case 2:
              _b.sent();

              _b.label = 3;

            case 3:
              _i++;
              return [3
              /*break*/
              , 1];

            case 4:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    CanvasRenderer.prototype.renderSolidBorder = function (color, side, curvePoints) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.path(parsePathForBorder(curvePoints, side));
          this.ctx.fillStyle = asString(color);
          this.ctx.fill();
          return [2
          /*return*/
          ];
        });
      });
    };

    CanvasRenderer.prototype.renderDoubleBorder = function (color, width, side, curvePoints) {
      return __awaiter(this, void 0, void 0, function () {
        var outerPaths, innerPaths;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(width < 3)) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.renderSolidBorder(color, side, curvePoints)];

            case 1:
              _a.sent();

              return [2
              /*return*/
              ];

            case 2:
              outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
              this.path(outerPaths);
              this.ctx.fillStyle = asString(color);
              this.ctx.fill();
              innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
              this.path(innerPaths);
              this.ctx.fill();
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    CanvasRenderer.prototype.renderNodeBackgroundAndBorders = function (paint) {
      return __awaiter(this, void 0, void 0, function () {
        var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.applyEffects(paint.getEffects(2
              /* BACKGROUND_BORDERS */
              ));
              styles = paint.container.styles;
              hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
              borders = [{
                style: styles.borderTopStyle,
                color: styles.borderTopColor,
                width: styles.borderTopWidth
              }, {
                style: styles.borderRightStyle,
                color: styles.borderRightColor,
                width: styles.borderRightWidth
              }, {
                style: styles.borderBottomStyle,
                color: styles.borderBottomColor,
                width: styles.borderBottomWidth
              }, {
                style: styles.borderLeftStyle,
                color: styles.borderLeftColor,
                width: styles.borderLeftWidth
              }];
              backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
              if (!(hasBackground || styles.boxShadow.length)) return [3
              /*break*/
              , 2];
              this.ctx.save();
              this.path(backgroundPaintingArea);
              this.ctx.clip();

              if (!isTransparent(styles.backgroundColor)) {
                this.ctx.fillStyle = asString(styles.backgroundColor);
                this.ctx.fill();
              }

              return [4
              /*yield*/
              , this.renderBackgroundImage(paint.container)];

            case 1:
              _a.sent();

              this.ctx.restore();
              styles.boxShadow.slice(0).reverse().forEach(function (shadow) {
                _this.ctx.save();

                var borderBoxArea = calculateBorderBoxPath(paint.curves);
                var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));

                if (shadow.inset) {
                  _this.path(borderBoxArea);

                  _this.ctx.clip();

                  _this.mask(shadowPaintingArea);
                } else {
                  _this.mask(borderBoxArea);

                  _this.ctx.clip();

                  _this.path(shadowPaintingArea);
                }

                _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                _this.ctx.shadowOffsetY = shadow.offsetY.number;
                _this.ctx.shadowColor = asString(shadow.color);
                _this.ctx.shadowBlur = shadow.blur.number;
                _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : 'rgba(0,0,0,1)';

                _this.ctx.fill();

                _this.ctx.restore();
              });
              _a.label = 2;

            case 2:
              side = 0;
              _i = 0, borders_1 = borders;
              _a.label = 3;

            case 3:
              if (!(_i < borders_1.length)) return [3
              /*break*/
              , 13];
              border = borders_1[_i];
              if (!(border.style !== 0
              /* NONE */
              && !isTransparent(border.color) && border.width > 0)) return [3
              /*break*/
              , 11];
              if (!(border.style === 2
              /* DASHED */
              )) return [3
              /*break*/
              , 5];
              return [4
              /*yield*/
              , this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2
              /* DASHED */
              )];

            case 4:
              _a.sent();

              return [3
              /*break*/
              , 11];

            case 5:
              if (!(border.style === 3
              /* DOTTED */
              )) return [3
              /*break*/
              , 7];
              return [4
              /*yield*/
              , this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3
              /* DOTTED */
              )];

            case 6:
              _a.sent();

              return [3
              /*break*/
              , 11];

            case 7:
              if (!(border.style === 4
              /* DOUBLE */
              )) return [3
              /*break*/
              , 9];
              return [4
              /*yield*/
              , this.renderDoubleBorder(border.color, border.width, side, paint.curves)];

            case 8:
              _a.sent();

              return [3
              /*break*/
              , 11];

            case 9:
              return [4
              /*yield*/
              , this.renderSolidBorder(border.color, side, paint.curves)];

            case 10:
              _a.sent();

              _a.label = 11;

            case 11:
              side++;
              _a.label = 12;

            case 12:
              _i++;
              return [3
              /*break*/
              , 3];

            case 13:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    CanvasRenderer.prototype.renderDashedDottedBorder = function (color, width, side, curvePoints, style) {
      return __awaiter(this, void 0, void 0, function () {
        var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
        return __generator(this, function (_a) {
          this.ctx.save();
          strokePaths = parsePathForBorderStroke(curvePoints, side);
          boxPaths = parsePathForBorder(curvePoints, side);

          if (style === 2
          /* DASHED */
          ) {
            this.path(boxPaths);
            this.ctx.clip();
          }

          if (isBezierCurve(boxPaths[0])) {
            startX = boxPaths[0].start.x;
            startY = boxPaths[0].start.y;
          } else {
            startX = boxPaths[0].x;
            startY = boxPaths[0].y;
          }

          if (isBezierCurve(boxPaths[1])) {
            endX = boxPaths[1].end.x;
            endY = boxPaths[1].end.y;
          } else {
            endX = boxPaths[1].x;
            endY = boxPaths[1].y;
          }

          if (side === 0 || side === 2) {
            length = Math.abs(startX - endX);
          } else {
            length = Math.abs(startY - endY);
          }

          this.ctx.beginPath();

          if (style === 3
          /* DOTTED */
          ) {
            this.formatPath(strokePaths);
          } else {
            this.formatPath(boxPaths.slice(0, 2));
          }

          dashLength = width < 3 ? width * 3 : width * 2;
          spaceLength = width < 3 ? width * 2 : width;

          if (style === 3
          /* DOTTED */
          ) {
            dashLength = width;
            spaceLength = width;
          }

          useLineDash = true;

          if (length <= dashLength * 2) {
            useLineDash = false;
          } else if (length <= dashLength * 2 + spaceLength) {
            multiplier = length / (2 * dashLength + spaceLength);
            dashLength *= multiplier;
            spaceLength *= multiplier;
          } else {
            numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
            minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
            maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
            spaceLength = maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ? minSpace : maxSpace;
          }

          if (useLineDash) {
            if (style === 3
            /* DOTTED */
            ) {
              this.ctx.setLineDash([0, dashLength + spaceLength]);
            } else {
              this.ctx.setLineDash([dashLength, spaceLength]);
            }
          }

          if (style === 3
          /* DOTTED */
          ) {
            this.ctx.lineCap = 'round';
            this.ctx.lineWidth = width;
          } else {
            this.ctx.lineWidth = width * 2 + 1.1;
          }

          this.ctx.strokeStyle = asString(color);
          this.ctx.stroke();
          this.ctx.setLineDash([]); // dashed round edge gap

          if (style === 2
          /* DASHED */
          ) {
            if (isBezierCurve(boxPaths[0])) {
              path1 = boxPaths[3];
              path2 = boxPaths[0];
              this.ctx.beginPath();
              this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
              this.ctx.stroke();
            }

            if (isBezierCurve(boxPaths[1])) {
              path1 = boxPaths[1];
              path2 = boxPaths[2];
              this.ctx.beginPath();
              this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
              this.ctx.stroke();
            }
          }

          this.ctx.restore();
          return [2
          /*return*/
          ];
        });
      });
    };

    CanvasRenderer.prototype.render = function (element) {
      return __awaiter(this, void 0, void 0, function () {
        var stack;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (this.options.backgroundColor) {
                this.ctx.fillStyle = asString(this.options.backgroundColor);
                this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
              }

              stack = parseStackingContexts(element);
              return [4
              /*yield*/
              , this.renderStack(stack)];

            case 1:
              _a.sent();

              this.applyEffects([]);
              return [2
              /*return*/
              , this.canvas];
          }
        });
      });
    };

    return CanvasRenderer;
  }(Renderer);

  var isTextInputElement = function isTextInputElement(container) {
    if (container instanceof TextareaElementContainer) {
      return true;
    } else if (container instanceof SelectElementContainer) {
      return true;
    } else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
      return true;
    }

    return false;
  };

  var calculateBackgroundCurvedPaintingArea = function calculateBackgroundCurvedPaintingArea(clip, curves) {
    switch (clip) {
      case 0
      /* BORDER_BOX */
      :
        return calculateBorderBoxPath(curves);

      case 2
      /* CONTENT_BOX */
      :
        return calculateContentBoxPath(curves);

      case 1
      /* PADDING_BOX */
      :
      default:
        return calculatePaddingBoxPath(curves);
    }
  };

  var canvasTextAlign = function canvasTextAlign(textAlign) {
    switch (textAlign) {
      case 1
      /* CENTER */
      :
        return 'center';

      case 2
      /* RIGHT */
      :
        return 'right';

      case 0
      /* LEFT */
      :
      default:
        return 'left';
    }
  }; // see https://github.com/niklasvh/html2canvas/pull/2645


  var iOSBrokenFonts = ['-apple-system', 'system-ui'];

  var fixIOSSystemFonts = function fixIOSSystemFonts(fontFamilies) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? fontFamilies.filter(function (fontFamily) {
      return iOSBrokenFonts.indexOf(fontFamily) === -1;
    }) : fontFamilies;
  };

  var ForeignObjectRenderer = function (_super) {
    __extends(ForeignObjectRenderer, _super);

    function ForeignObjectRenderer(context, options) {
      var _this = _super.call(this, context, options) || this;

      _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
      _this.ctx = _this.canvas.getContext('2d');
      _this.options = options;
      _this.canvas.width = Math.floor(options.width * options.scale);
      _this.canvas.height = Math.floor(options.height * options.scale);
      _this.canvas.style.width = options.width + "px";
      _this.canvas.style.height = options.height + "px";

      _this.ctx.scale(_this.options.scale, _this.options.scale);

      _this.ctx.translate(-options.x, -options.y);

      _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);

      return _this;
    }

    ForeignObjectRenderer.prototype.render = function (element) {
      return __awaiter(this, void 0, void 0, function () {
        var svg, img;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
              return [4
              /*yield*/
              , loadSerializedSVG(svg)];

            case 1:
              img = _a.sent();

              if (this.options.backgroundColor) {
                this.ctx.fillStyle = asString(this.options.backgroundColor);
                this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
              }

              this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
              return [2
              /*return*/
              , this.canvas];
          }
        });
      });
    };

    return ForeignObjectRenderer;
  }(Renderer);

  var loadSerializedSVG = function loadSerializedSVG(svg) {
    return new Promise(function (resolve, reject) {
      var img = new Image();

      img.onload = function () {
        resolve(img);
      };

      img.onerror = reject;
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
  };

  var Logger = function () {
    function Logger(_a) {
      var id = _a.id,
          enabled = _a.enabled;
      this.id = id;
      this.enabled = enabled;
      this.start = Date.now();
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any


    Logger.prototype.debug = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      if (this.enabled) {
        // eslint-disable-next-line no-console
        if (typeof window !== 'undefined' && window.console && typeof console.debug === 'function') {
          // eslint-disable-next-line no-console
          console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
        } else {
          this.info.apply(this, args);
        }
      }
    };

    Logger.prototype.getTime = function () {
      return Date.now() - this.start;
    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


    Logger.prototype.info = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      if (this.enabled) {
        // eslint-disable-next-line no-console
        if (typeof window !== 'undefined' && window.console && typeof console.info === 'function') {
          // eslint-disable-next-line no-console
          console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
        }
      }
    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


    Logger.prototype.warn = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      if (this.enabled) {
        // eslint-disable-next-line no-console
        if (typeof window !== 'undefined' && window.console && typeof console.warn === 'function') {
          // eslint-disable-next-line no-console
          console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
        } else {
          this.info.apply(this, args);
        }
      }
    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


    Logger.prototype.error = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      if (this.enabled) {
        // eslint-disable-next-line no-console
        if (typeof window !== 'undefined' && window.console && typeof console.error === 'function') {
          // eslint-disable-next-line no-console
          console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
        } else {
          this.info.apply(this, args);
        }
      }
    };

    Logger.instances = {};
    return Logger;
  }();

  var Context = function () {
    function Context(options, windowBounds) {
      var _a;

      this.windowBounds = windowBounds;
      this.instanceName = "#" + Context.instanceCount++;
      this.logger = new Logger({
        id: this.instanceName,
        enabled: options.logging
      });
      this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
    }

    Context.instanceCount = 1;
    return Context;
  }();

  var html2canvas = function html2canvas(element, options) {
    if (options === void 0) {
      options = {};
    }

    return renderElement(element, options);
  };

  if (typeof window !== 'undefined') {
    CacheStorage.setContext(window);
  }

  var renderElement = function renderElement(element, opts) {
    return __awaiter(void 0, void 0, void 0, function () {
      var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor, renderOptions, canvas, renderer, root, renderer;

      var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;

      return __generator(this, function (_u) {
        switch (_u.label) {
          case 0:
            if (!element || typeof element !== 'object') {
              return [2
              /*return*/
              , Promise.reject('Invalid element provided as first argument')];
            }

            ownerDocument = element.ownerDocument;

            if (!ownerDocument) {
              throw new Error("Element is not attached to a Document");
            }

            defaultView = ownerDocument.defaultView;

            if (!defaultView) {
              throw new Error("Document is not attached to a Window");
            }

            resourceOptions = {
              allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
              imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15000,
              proxy: opts.proxy,
              useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
            };
            contextOptions = _assign({
              logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true,
              cache: opts.cache
            }, resourceOptions);
            windowOptions = {
              windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
              windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
              scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
              scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
            };
            windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
            context = new Context(contextOptions, windowBounds);
            foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
            cloneOptions = {
              allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
              onclone: opts.onclone,
              ignoreElements: opts.ignoreElements,
              inlineImages: foreignObjectRendering,
              copyStyles: foreignObjectRendering
            };
            context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
            documentCloner = new DocumentCloner(context, element, cloneOptions);
            clonedElement = documentCloner.clonedReferenceElement;

            if (!clonedElement) {
              return [2
              /*return*/
              , Promise.reject("Unable to find element in cloned iframe")];
            }

            return [4
            /*yield*/
            , documentCloner.toIFrame(ownerDocument, windowBounds)];

          case 1:
            container = _u.sent();
            _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement) ? parseDocumentSize(clonedElement.ownerDocument) : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
            backgroundColor = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
            renderOptions = {
              canvas: opts.canvas,
              backgroundColor: backgroundColor,
              scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
              x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
              y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
              width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
              height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
            };
            if (!foreignObjectRendering) return [3
            /*break*/
            , 3];
            context.logger.debug("Document cloned, using foreign object rendering");
            renderer = new ForeignObjectRenderer(context, renderOptions);
            return [4
            /*yield*/
            , renderer.render(clonedElement)];

          case 2:
            canvas = _u.sent();
            return [3
            /*break*/
            , 5];

          case 3:
            context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
            context.logger.debug("Starting DOM parsing");
            root = parseTree(context, clonedElement);

            if (backgroundColor === root.styles.backgroundColor) {
              root.styles.backgroundColor = COLORS.TRANSPARENT;
            }

            context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
            renderer = new CanvasRenderer(context, renderOptions);
            return [4
            /*yield*/
            , renderer.render(root)];

          case 4:
            canvas = _u.sent();
            _u.label = 5;

          case 5:
            if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
              if (!DocumentCloner.destroy(container)) {
                context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
              }
            }

            context.logger.debug("Finished rendering");
            return [2
            /*return*/
            , canvas];
        }
      });
    });
  };

  var parseBackgroundColor = function parseBackgroundColor(context, element, backgroundColorOverride) {
    var ownerDocument = element.ownerDocument; // http://www.w3.org/TR/css3-background/#special-backgrounds

    var documentBackgroundColor = ownerDocument.documentElement ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor) : COLORS.TRANSPARENT;
    var bodyBackgroundColor = ownerDocument.body ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor) : COLORS.TRANSPARENT;
    var defaultBackgroundColor = typeof backgroundColorOverride === 'string' ? parseColor(context, backgroundColorOverride) : backgroundColorOverride === null ? COLORS.TRANSPARENT : 0xffffffff;
    return element === ownerDocument.documentElement ? isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? defaultBackgroundColor : bodyBackgroundColor : documentBackgroundColor : defaultBackgroundColor;
  };

  return html2canvas;
});

/***/ }),

/***/ 91430:
/*!**********************************************************************!*\
  !*** ./src/app/group/group-components/attributes-table.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributesTableComponent": function() { return /* binding */ AttributesTableComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/api */ 93258);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);







function AttributesTableComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttributesTableComponent_tr_14_Template_a_click_4_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var attribute_r5 = restoredCtx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); return ctx_r6.openEditAttributeModal(_r3, attribute_r5, ctx_r6.attributes[attribute_r5]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var attribute_r5 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](attribute_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.attributes[attribute_r5], " ");
} }
var _c0 = function () { return { standalone: true }; };
function AttributesTableComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Attribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttributesTableComponent_ng_template_15_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var modal_r8 = restoredCtx.$implicit; return modal_r8.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AttributesTableComponent_ng_template_15_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.addAttribute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AttributesTableComponent_ng_template_15_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.attributeKey = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AttributesTableComponent_ng_template_15_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.attributeValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.attributeKey)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.attributeValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.attributeKey || !ctx_r2.attributeValue)("innerHTML", ctx_r2.attributeAddBtn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function AttributesTableComponent_ng_template_17_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "button", 40);
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r15.attributeUpdateBtn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function AttributesTableComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit Attribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttributesTableComponent_ng_template_17_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); var modal_r14 = restoredCtx.$implicit; return modal_r14.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AttributesTableComponent_ng_template_17_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.editAttribute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AttributesTableComponent_ng_template_17_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.attributeValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AttributesTableComponent_ng_template_17_button_20_Template, 1, 1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttributesTableComponent_ng_template_17_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.deleteAttribute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true)("value", ctx_r4.attributeKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r4.attributeValue)("ngModel", ctx_r4.attributeValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.attributeValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r4.attributeDeleteBtn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
var AttributesTableComponent = /** @class */ (function () {
    function AttributesTableComponent(activatedRoute, modalService) {
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.objectKeys = Object.keys;
        this.group = null;
        this.thing = null;
        this.attributes = {};
        this.attributeKey = '';
        this.attributeValue = '';
        this.attributeAddBtn = 'Add';
        this.attributeUpdateBtn = 'Update';
        this.attributeDeleteBtn = 'Delete';
        this.thingPath = '';
        this.groupPath = '';
    }
    AttributesTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.groupId = params.get('groupId');
            _this.thingId = params.get('thingId');
        });
        if (!this.thingId) {
            _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
                .then(function (response) {
                _this.group = response.data;
                if (_this.group.hasOwnProperty('attributes')) {
                    _this.attributes = _this.group['attributes'];
                }
            })
                .catch(function (error) {
                console.log(error.response);
            });
        }
        else {
            _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathThing + this.thingId, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
                .then(function (response) {
                _this.thing = response.data;
                if (_this.thing.hasOwnProperty('attributes')) {
                    _this.attributes = _this.thing['attributes'];
                }
                console.log(_this.thing);
            })
                .catch(function (error) {
                console.log(error.response);
            });
        }
    };
    AttributesTableComponent.prototype.openAddAttributeModal = function (modal) {
        this.modalService.open(modal, { size: 'lg' });
    };
    AttributesTableComponent.prototype.openEditAttributeModal = function (modal, rowKey, rowValue) {
        this.attributeKey = rowKey;
        this.attributeValue = rowValue;
        this.thingPath = _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathThing + this.thingId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathAttribute;
        this.groupPath = _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathAttribute;
        this.modalService.open(modal, { size: 'lg' });
    };
    AttributesTableComponent.prototype.ngAfterViewInit = function () {
    };
    AttributesTableComponent.prototype.addAttribute = function () {
        var _a;
        var _this = this;
        var params = { body: (_a = {}, _a[this.attributeKey] = this.attributeValue, _a) };
        console.log(params);
        this.attributeAddBtn = '<i class="fas fa-spinner fa-spin"></i>';
        var thingPath = _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathThing + this.thingId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathAttribute;
        var groupPath = _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathAttribute;
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.post(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, this.thingId == null ? groupPath : thingPath, params)
            .then(function (response) {
            console.log(response);
            _this.ngOnInit();
            _this.attributeAddBtn = 'Added!';
            setTimeout(function () {
                _this.attributeAddBtn = 'Add';
            }, 1000);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AttributesTableComponent.prototype.deleteAttribute = function () {
        var _a;
        var _this = this;
        console.log('deleting attribute key: ' + this.attributeKey);
        var params = { body: (_a = {}, _a[this.attributeKey] = '', _a) };
        this.attributeDeleteBtn = '<i class="fas fa-spinner fa-spin"></i>';
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.post(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, this.thingId == null ? this.groupPath : this.thingPath, params)
            .then(function (response) {
            console.log(response);
            _this.ngOnInit();
            _this.modalService.dismissAll();
            _this.attributeDeleteBtn = 'Delete';
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AttributesTableComponent.prototype.editAttribute = function () {
        var _a;
        var _this = this;
        var params = { body: (_a = {}, _a[this.attributeKey] = this.attributeValue, _a) };
        console.log(params);
        this.attributeUpdateBtn = '<i class="fas fa-spinner fa-spin"></i>';
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.post(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, this.thingId == null ? this.groupPath : this.thingPath, params)
            .then(function (response) {
            console.log(response);
            _this.ngOnInit();
            _this.attributeUpdateBtn = 'Updated!';
            setTimeout(function () {
                _this.attributeUpdateBtn = 'Update';
            }, 1000);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AttributesTableComponent.ɵfac = function AttributesTableComponent_Factory(t) { return new (t || AttributesTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal)); };
    AttributesTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AttributesTableComponent, selectors: [["app-attributes-table"]], inputs: { groupId: "groupId", thingId: "thingId" }, decls: 19, vars: 1, consts: [[1, "col-lg-12", "col-md-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "row"], [1, "col-10"], [1, "card-title"], [1, "lstick"], [1, "col-2"], [1, "link", "m-r-10", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-plus", "fa-pull-right"], [1, "table-responsive"], [1, "table", "vm", "no-th-brd", "pro-of-month", "mb-0", "v-middle", 2, "border-collapse", "collapse", "table-layout", "fixed"], [4, "ngFor", "ngForOf"], ["addAttributeModal", ""], ["editAttributeModal", ""], [2, "word-wrap", "break-word"], [2, "cursor", "pointer", "color", "#398bf7", 3, "click"], [1, "modal-header"], ["id", "addAttributeModalLabel", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "addAttributeForm", 3, "ngSubmit"], [1, "modal-body"], [1, "form-check"], [1, "form-group", "row"], ["for", "addAttributeKey", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "id", "addAttributeKey", "placeholder", "Attribute key", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "addAttributeValue", 1, "col-sm-2", "col-form-label"], ["type", "text", "id", "addAttributeValue", "placeholder", "Attribute value", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", "mb-2", "float-right", 3, "disabled", "innerHTML"], ["id", "editAttributeModalLabel", 1, "modal-title"], ["id", "editAttributeForm", 3, "ngSubmit"], ["for", "editAttributeKey", 1, "col-sm-2", "col-form-label"], ["type", "text", "id", "editAttributeKey", 1, "form-control-plaintext", 3, "readOnly", "value"], ["for", "editAttributeValue", 1, "col-sm-2", "col-form-label"], ["type", "text", "id", "editAttributeValue", 1, "form-control", 3, "value", "ngModel", "ngModelOptions", "ngModelChange"], ["type", "submit", "class", "btn btn-primary mb-2 float-right", 3, "innerHTML", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "mb-2", "float-right", 3, "innerHTML", "click"], ["type", "submit", 1, "btn", "btn-primary", "mb-2", "float-right", 3, "innerHTML"]], template: function AttributesTableComponent_Template(rf, ctx) { if (rf & 1) {
            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Attributes");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttributesTableComponent_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16); return ctx.openAddAttributeModal(_r1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AttributesTableComponent_tr_14_Template, 6, 2, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AttributesTableComponent_ng_template_15_Template, 21, 8, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AttributesTableComponent_ng_template_17_Template, 22, 8, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.attributes));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], encapsulation: 2 });
    return AttributesTableComponent;
}());



/***/ }),

/***/ 84253:
/*!***********************************************************!*\
  !*** ./src/app/group/group-components/group.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupComponent": function() { return /* binding */ GroupComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/api */ 93258);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _attributes_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes-table.component */ 91430);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _things_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./things-table.component */ 58929);









var _c0 = function () { return { standalone: true }; };
function GroupComponent_div_0_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Notification Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GroupComponent_div_0_ng_template_16_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); var modal_r4 = restoredCtx.$implicit; return modal_r4.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Offline Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Confirmed Subscriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Pending Subscriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function GroupComponent_div_0_ng_template_16_Template_form_ngSubmit_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.subscribeOfflineNotifications(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Subscribe New");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GroupComponent_div_0_ng_template_16_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.subscribeOfflineEmail = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.subscriptions.confirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.subscriptions.pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.subscribeOfflineEmail)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r2.subscribeOfflineSubmit, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function GroupComponent_div_0_app_things_table_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-things-table", 36);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("things", ctx_r3.things);
} }
function GroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GroupComponent_div_0_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.openModal(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-attributes-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, GroupComponent_div_0_ng_template_16_Template, 28, 6, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, GroupComponent_div_0_app_things_table_19_Template, 1, 1, "app-things-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.group.attributes.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.group.attributes.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("groupId", ctx_r0.groupId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.things !== null);
} }
var GroupComponent = /** @class */ (function () {
    function GroupComponent(activatedRoute, modalService) {
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.group = null;
        this.things = null;
        this.subscriptions = null;
        this.subscribeOfflineEmail = '';
        this.subscribeOfflineSubmit = 'Subscribe';
        this.subtitle = 'This is some text within a card block.';
        this.groupId = null;
    }
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.groupId = params.get('groupId');
        });
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_4__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.group = response.data;
        })
            .catch(function (error) {
            console.log(error.response);
        });
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_4__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathThings, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.things = response.data.things;
        })
            .catch(function (error) {
            console.log(error.response);
        });
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_4__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathSubscribeOffline, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.subscriptions = response.data.subscriptions;
        })
            .catch(function (error) {
            console.log(error.response);
        });
    };
    GroupComponent.prototype.ngAfterViewInit = function () {
    };
    GroupComponent.prototype.openModal = function (modal) {
        this.modalService.open(modal, { size: 'lg' });
    };
    GroupComponent.prototype.subscribeOfflineNotifications = function () {
        var _this = this;
        console.log(this.subscribeOfflineEmail);
        this.subscribeOfflineSubmit = '<i class="fas fa-spinner fa-spin"></i>';
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_4__.API.post(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathSubscribeOffline, { body: { email: this.subscribeOfflineEmail } })
            .then(function (response) {
            console.log(response);
            _this.subscribeOfflineSubmit = 'Subscribed!';
            _this.subscribeOfflineEmail = '';
            setTimeout(function () {
                _this.subscribeOfflineSubmit = 'Subscribe';
            }, 1000);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    GroupComponent.ɵfac = function GroupComponent_Factory(t) { return new (t || GroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal)); };
    GroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GroupComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-lg-3", "col-md-6"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "row"], [1, "col-10"], [2, "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], [1, "lstick", 2, "position", "absolute"], [1, "col-2"], [1, "link", "m-r-10", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-bell", "fa-pull-right"], [1, "card-text"], [3, "groupId"], ["notificationsSettingsModal", ""], [1, "col-lg-9", "col-md-6"], [3, "things", 4, "ngIf"], [1, "modal-header"], ["id", "notificationSettingsModalLabel", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-check"], [1, "form-group", "row"], ["for", "staticConfirmed", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "readonly", "", "id", "staticConfirmed", 1, "form-control-plaintext", 3, "value"], ["for", "staticPending", 1, "col-sm-4", "col-form-label"], ["type", "text", "readonly", "", "id", "staticPending", 1, "form-control-plaintext", 3, "value"], [3, "ngSubmit"], ["for", "addNew", 1, "col-sm-4", "col-form-label"], [1, "col-sm-6"], ["type", "email", "id", "addNew", "placeholder", "user@email.com", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-sm-2"], ["type", "submit", 1, "btn", "btn-primary", "mb-2", 3, "innerHTML"], [3, "things"]], template: function GroupComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GroupComponent_div_0_Template, 20, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.group !== null);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _attributes_table_component__WEBPACK_IMPORTED_MODULE_1__.AttributesTableComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _things_table_component__WEBPACK_IMPORTED_MODULE_2__.ThingsTableComponent], encapsulation: 2 });
    return GroupComponent;
}());



/***/ }),

/***/ 6524:
/*!************************************************************!*\
  !*** ./src/app/group/group-components/groups.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsComponent": function() { return /* binding */ GroupsComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/api */ 93258);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);





function GroupsComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", group_r1.group, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", group_r1.attributes.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", group_r1.attributes.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/console/groups/", group_r1.group, "");
} }
var GroupsComponent = /** @class */ (function () {
    function GroupsComponent() {
        this.groups = null;
        this.subtitle = 'This is some text within a card block.';
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroups, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.groups = response.data.groups;
            console.log(_this.groups);
        })
            .catch(function (error) {
            console.log(error.response);
        });
    };
    GroupsComponent.prototype.ngAfterViewInit = function () {
    };
    GroupsComponent.ɵfac = function GroupsComponent_Factory(t) { return new (t || GroupsComponent)(); };
    GroupsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupsComponent, selectors: [["ng-component"]], decls: 18, vars: 1, consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "lstick"], [1, "table-responsive"], [1, "table", "vm", "no-th-brd", "pro-of-month", "mb-0", "v-middle"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", "btn-xs", 3, "routerLink"], [1, "fa", "fa-arrow-right"]], template: function GroupsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Group List");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "id");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, GroupsComponent_tr_17_Template, 10, 4, "tr", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groups);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], encapsulation: 2 });
    return GroupsComponent;
}());



/***/ }),

/***/ 99330:
/*!*************************************************************!*\
  !*** ./src/app/group/group-components/landing.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": function() { return /* binding */ LandingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);



var LandingComponent = /** @class */ (function () {
    function LandingComponent(zone, location, router) {
        this.zone = zone;
        this.location = location;
        this.router = router;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.location.replaceState('/console/groups');
        window.location.reload();
    };
    LandingComponent.prototype.ngAfterViewInit = function () {
    };
    LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
    LandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function LandingComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return LandingComponent;
}());



/***/ }),

/***/ 9698:
/*!******************************************************************!*\
  !*** ./src/app/group/group-components/latest-modal.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LatestModalComponent": function() { return /* binding */ LatestModalComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _latest_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./latest-table.component */ 8189);
/* harmony import */ var ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-humanize-duration */ 10685);




var _c0 = function () { return { delimiter: " and ", largest: 1, round: true }; };
function LatestModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Latest Values ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "humanizeDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LatestModalComponent_ng_template_0_Template_button_click_6_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var modal_r2 = restoredCtx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-latest-table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 3, ctx_r1.nowTime - ctx_r1.thing.lastUpdate, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0)), " ago) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sensorValues", ctx_r1.sensorValues)("sensorUnits", ctx_r1.sensorUnits);
} }
var LatestModalComponent = /** @class */ (function () {
    function LatestModalComponent(modalService) {
        this.modalService = modalService;
        this.objectKeys = Object.keys;
        this.thing = {};
        this.sensorValues = {};
        this.sensorUnits = {};
        this.nowTime = new Date().getTime();
    }
    LatestModalComponent.prototype.ngOnInit = function () {
        if (this.thing.hasOwnProperty('lastSensorValues')) {
            this.sensorValues = this.thing['lastSensorValues'];
        }
        if (this.thing.hasOwnProperty('sensorUnits')) {
            this.sensorUnits = this.thing['sensorUnits'];
        }
    };
    LatestModalComponent.prototype.ngAfterViewInit = function () {
    };
    LatestModalComponent.prototype.openModal = function (modal) {
        this.modalService.open(modal, { size: 'lg' });
    };
    LatestModalComponent.ɵfac = function LatestModalComponent_Factory(t) { return new (t || LatestModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
    LatestModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LatestModalComponent, selectors: [["app-latest-modal"]], inputs: { thing: "thing" }, decls: 4, vars: 0, consts: [["latestModal", ""], [1, "btn", "btn-primary", "btn-rounded", "btn-xs", 3, "click"], [1, "fa", "fa-th-list"], [1, "modal-header"], [1, "modal-title"], [1, "pull-right", "text-muted"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "sensorValues", "sensorUnits"]], template: function LatestModalComponent_Template(rf, ctx) { if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LatestModalComponent_ng_template_0_Template, 11, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LatestModalComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return ctx.openModal(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, directives: [_latest_table_component__WEBPACK_IMPORTED_MODULE_0__.LatestTableComponent], pipes: [ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_3__.NgxHumanizeDurationPipe], encapsulation: 2 });
    return LatestModalComponent;
}());



/***/ }),

/***/ 8189:
/*!******************************************************************!*\
  !*** ./src/app/group/group-components/latest-table.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LatestTableComponent": function() { return /* binding */ LatestTableComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);



function LatestTableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sensor_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sensor_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.sensorValues[sensor_r1], "\u00A0", ctx_r0.sensorUnits[sensor_r1], "");
} }
var LatestTableComponent = /** @class */ (function () {
    function LatestTableComponent(modalService) {
        this.modalService = modalService;
        this.objectKeys = Object.keys;
        this.sensorValues = {};
        this.sensorUnits = {};
    }
    LatestTableComponent.prototype.ngOnInit = function () {
    };
    LatestTableComponent.prototype.ngAfterViewInit = function () {
    };
    LatestTableComponent.ɵfac = function LatestTableComponent_Factory(t) { return new (t || LatestTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
    LatestTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LatestTableComponent, selectors: [["app-latest-table"]], inputs: { sensorValues: "sensorValues", sensorUnits: "sensorUnits" }, decls: 9, vars: 1, consts: [[1, "table", "vm", "no-th-brd", "pro-of-month", "mb-0", "v-middle"], [4, "ngFor", "ngForOf"]], template: function LatestTableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "measureName");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "value");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LatestTableComponent_tr_8_Template, 5, 3, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.sensorValues));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], encapsulation: 2 });
    return LatestTableComponent;
}());



/***/ }),

/***/ 84296:
/*!***********************************************************!*\
  !*** ./src/app/group/group-components/thing.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThingComponent": function() { return /* binding */ ThingComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/api */ 93258);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _attributes_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes-table.component */ 91430);
/* harmony import */ var _latest_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./latest-table.component */ 8189);
/* harmony import */ var _ts_graph_ts_graph_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts-graph/ts-graph.component */ 8406);
/* harmony import */ var ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-humanize-duration */ 10685);









var _c0 = function () { return { delimiter: " and ", largest: 1, round: true }; };
function ThingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "typeName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "app-attributes-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Latest Values ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "humanizeDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "app-latest-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "app-ts-graph", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.thing.thing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.thing.group, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/console/types/", ctx_r0.thing.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.thing.typeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.thing.status, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("groupId", ctx_r0.groupId)("thingId", ctx_r0.thingId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](31, 12, ctx_r0.nowTime - ctx_r0.thing.lastUpdate, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c0)), " ago) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("sensorValues", ctx_r0.sensorValues)("sensorUnits", ctx_r0.sensorUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("sensorValues", ctx_r0.sensorValues)("sensorUnits", ctx_r0.sensorUnits);
} }
var ThingComponent = /** @class */ (function () {
    function ThingComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.thing = null;
        this.sensorValues = {};
        this.sensorUnits = {};
        this.nowTime = new Date().getTime();
        this.subtitle = 'This is some text within a card block.';
        this.groupId = null;
        this.thingId = null;
    }
    ThingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.groupId = params.get('groupId');
            _this.thingId = params.get('thingId');
        });
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_5__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathThing + this.thingId, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.thing = response.data;
            if (_this.thing.hasOwnProperty('lastSensorValues')) {
                _this.sensorValues = _this.thing['lastSensorValues'];
            }
            if (_this.thing.hasOwnProperty('sensorUnits')) {
                _this.sensorUnits = _this.thing['sensorUnits'];
            }
            console.log(_this.thing);
        })
            .catch(function (error) {
            console.log(error.response);
        });
    };
    ThingComponent.prototype.ngAfterViewInit = function () {
    };
    ThingComponent.ɵfac = function ThingComponent_Factory(t) { return new (t || ThingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
    ThingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ThingComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-lg-3", "col-md-4"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "lstick"], [1, "card-text"], [1, "label", "label-info", "label-rounded"], [3, "routerLink"], [3, "groupId", "thingId"], [1, "pull-right", "text-muted"], [3, "sensorValues", "sensorUnits"], [1, "col-lg-9", "col-md-8"]], template: function ThingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ThingComponent_div_0_Template, 36, 16, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.thing !== null);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _attributes_table_component__WEBPACK_IMPORTED_MODULE_1__.AttributesTableComponent, _latest_table_component__WEBPACK_IMPORTED_MODULE_2__.LatestTableComponent, _ts_graph_ts_graph_component__WEBPACK_IMPORTED_MODULE_3__.TsGraphComponent], pipes: [ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_8__.NgxHumanizeDurationPipe], encapsulation: 2 });
    return ThingComponent;
}());



/***/ }),

/***/ 58929:
/*!******************************************************************!*\
  !*** ./src/app/group/group-components/things-table.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThingsTableComponent": function() { return /* binding */ ThingsTableComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _latest_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./latest-modal.component */ 9698);
/* harmony import */ var ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-humanize-duration */ 10685);





function ThingsTableComponent_table_6_tr_11_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 19);
} }
function ThingsTableComponent_table_6_tr_11_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 20);
} }
var _c0 = function () { return { delimiter: " and ", largest: 1, round: true }; };
function ThingsTableComponent_table_6_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ThingsTableComponent_table_6_tr_11_span_4_Template, 1, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ThingsTableComponent_table_6_tr_11_span_5_Template, 1, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "humanizeDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-latest-modal", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var thing_r2 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/images/thing/icon/", thing_r2.typeName, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", thing_r2.typeName[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", thing_r2.status === "ONLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", thing_r2.status === "OFFLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](thing_r2.thing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/console/types/", thing_r2.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](thing_r2.typeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/console/groups/", thing_r2.group, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](thing_r2.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 13, ctx_r1.nowTime - thing_r2.lastUpdate, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0)), " ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("thing", thing_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/console/groups/", thing_r2.group, "/thing/", thing_r2.thing, "");
} }
function ThingsTableComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "thing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ThingsTableComponent_table_6_tr_11_Template, 23, 17, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.things);
} }
var ThingsTableComponent = /** @class */ (function () {
    function ThingsTableComponent() {
        this.things = null;
        this.nowTime = new Date().getTime();
        this.subtitle = 'This is some text within a card block.';
    }
    ThingsTableComponent.prototype.ngOnInit = function () {
    };
    ThingsTableComponent.prototype.ngAfterViewInit = function () {
    };
    ThingsTableComponent.ɵfac = function ThingsTableComponent_Factory(t) { return new (t || ThingsTableComponent)(); };
    ThingsTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThingsTableComponent, selectors: [["app-things-table"]], inputs: { things: "things" }, decls: 7, vars: 1, consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "lstick"], [1, "table-responsive"], ["class", "table vm no-th-brd pro-of-month mb-0 v-middle", 4, "ngIf"], [1, "table", "vm", "no-th-brd", "pro-of-month", "mb-0", "v-middle"], ["colspan", "2"], [4, "ngFor", "ngForOf"], [1, "user-img"], ["width", "50", 1, "rounded-circle", 3, "src", "alt"], ["class", "device-status online pull-right", 4, "ngIf"], ["class", "device-status pull-right", 4, "ngIf"], [1, "mb-0"], [1, "text-muted"], [3, "routerLink"], [3, "thing"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", "btn-xs", 3, "routerLink"], [1, "fa", "fa-arrow-right"], [1, "device-status", "online", "pull-right"], [1, "device-status", "pull-right"]], template: function ThingsTableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Things List");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ThingsTableComponent_table_6_Template, 12, 1, "table", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.things !== null);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _latest_modal_component__WEBPACK_IMPORTED_MODULE_0__.LatestModalComponent], pipes: [ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_4__.NgxHumanizeDurationPipe], styles: [".device-status[_ngcontent-%COMP%] {\r\n  border: 1px solid #fff;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  height: 10px;\r\n  position: relative;\r\n  left: -5px;\r\n  top: -15px;\r\n  width: 10px;\r\n  background: #ef5350;\r\n}\r\n\r\n.online[_ngcontent-%COMP%] {\r\n  background: #06d79c;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoaW5ncy10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoidGhpbmdzLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV2aWNlLXN0YXR1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTVweDtcclxuICB0b3A6IC0xNXB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZjUzNTA7XHJcbn1cclxuXHJcbi5vbmxpbmUge1xyXG4gIGJhY2tncm91bmQ6ICMwNmQ3OWM7XHJcbn1cclxuIl19 */"] });
    return ThingsTableComponent;
}());



/***/ }),

/***/ 34201:
/*!************************************************************!*\
  !*** ./src/app/group/group-components/things.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThingsComponent": function() { return /* binding */ ThingsComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/api */ 93258);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _things_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./things-table.component */ 58929);




var ThingsComponent = /** @class */ (function () {
    function ThingsComponent() {
        this.things = null;
        this.subtitle = 'This is some text within a card block.';
    }
    ThingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathThings, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.things = response.data.things;
            console.log(_this.things);
        })
            .catch(function (error) {
            console.log(error.response);
        });
    };
    ThingsComponent.prototype.ngAfterViewInit = function () {
    };
    ThingsComponent.ɵfac = function ThingsComponent_Factory(t) { return new (t || ThingsComponent)(); };
    ThingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ThingsComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "things"]], template: function ThingsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-things-table", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("things", ctx.things);
        } }, directives: [_things_table_component__WEBPACK_IMPORTED_MODULE_1__.ThingsTableComponent], encapsulation: 2 });
    return ThingsComponent;
}());



/***/ }),

/***/ 8406:
/*!***********************************************************************!*\
  !*** ./src/app/group/group-components/ts-graph/ts-graph.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsGraphComponent": function() { return /* binding */ TsGraphComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/api */ 93258);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/api.config */ 57778);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ 52195);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 44195);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartjs-adapter-date-fns */ 8063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-daterangepicker */ 49762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);













function TsGraphComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sensor_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](sensor_r6);
} }
function TsGraphComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Chart Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TsGraphComponent_ng_template_15_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); var modal_r7 = restoredCtx.$implicit; return modal_r7.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TsGraphComponent_ng_template_15_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.updateChartSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Start yAxis from 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TsGraphComponent_ng_template_15_Template_button_click_12_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); var modal_r7 = restoredCtx.$implicit; return modal_r7.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TsGraphComponent_ng_template_15_Template_button_click_14_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); var modal_r7 = restoredCtx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); modal_r7.close("Close click"); return ctx_r12.updateChart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r2.chartStartFromZero);
} }
function TsGraphComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 29);
} }
function TsGraphComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Error retrieving data or no data in this interval.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TsGraphComponent_canvas_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "canvas", 30);
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r5.lineChartData)("options", ctx_r5.lineChartOptions)("type", ctx_r5.lineChartType);
} }
var TsGraphComponent = /** @class */ (function () {
    function TsGraphComponent(activatedRoute, modalService) {
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.objectKeys = Object.keys;
        this.loading = false;
        this.dataError = false;
        this.sensorValues = {};
        this.sensorUnits = {};
        this.measureNames = [];
        this.endTime = moment__WEBPACK_IMPORTED_MODULE_1___default()();
        this.startTime = moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'hours');
        this.chartStartFromZero = true;
        this.fullChartData = [];
        this.fullChartXLabels = [];
        this.daterange = {};
        // see original project for full list of options
        // can also be setup using the config service to apply to multiple pickers
        this.options = {
            locale: { format: 'YYYY-MM-DD HH:mm' },
            timePicker: true,
            timePicker24Hour: true,
            startDate: this.startTime,
            endDate: this.endTime,
            alwaysShowCalendars: false,
        };
        this.lineChartData = {
            datasets: [
                {
                    data: [],
                    label: 'sensorData',
                    backgroundColor: 'rgba(148,159,177,0.2)',
                    borderColor: 'rgba(148,159,177,1)',
                    pointBackgroundColor: 'rgba(148,159,177,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                }
            ],
            // labels: []
        };
        this.lineChartOptions = {
            scales: {
                // We use this empty structure as a placeholder for dynamic theming.
                x: {
                    type: 'time',
                    time: {
                        tooltipFormat: 'MMM dd, yyyy, HH:mm:ss',
                        unit: 'hour',
                        displayFormats: {
                            'second': 'HH:mm:ss',
                            'minute': 'dd/MM HH:mm',
                            'hour': 'dd/MM HH:mm',
                            'day': 'dd/MM',
                            'week': 'dd MMM',
                            'month': 'dd MMM',
                            'quarter': 'dd MMM',
                            'year': 'MMM YY',
                        }
                    }
                },
                y: {
                    position: 'left',
                    ticks: {},
                    min: 0,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            },
            parsing: false,
            elements: { line: { tension: 0.5 } },
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: 'nearest',
                    intersect: false,
                },
                // decimation: {
                //   enabled: true,
                //   algorithm: DecimationAlgorithm.lttb,
                //   samples: 100,
                //   threshold: 324
                // },
                // @ts-ignore
                annotation: {
                    annotations: [],
                }
            }
        };
        this.lineChartType = 'line';
        this.groupId = null;
        this.thingId = null;
        this.measureName = '';
    }
    TsGraphComponent.prototype.selectMeasure = function (meas) {
        this.measureName = meas;
        this.updateChart();
    };
    TsGraphComponent.prototype.selectedDate = function (value, datepicker) {
        // any object can be passed to the selected event and it will be passed back here
        datepicker.start = value.start;
        datepicker.end = value.end;
        this.startTime = value.start;
        this.endTime = value.end;
        // use passed valuable to update state
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.daterange.label = value.label;
        this.updateChart();
    };
    TsGraphComponent.prototype.updateChart = function () {
        this.loading = true;
        this.dataError = false;
        this.lineChartData.datasets[0]['label'] = this.measureName;
        var timeDiffHours = this.endTime.diff(this.startTime) / 60 / 60 / 1000;
        if (timeDiffHours < 4) {
            // @ts-ignore
            this.lineChartOptions.scales.x.time.unit = 'minute';
            // @ts-ignore
            this.lineChartOptions.scales.x.time.stepSize = 5;
        }
        else if (timeDiffHours < 24) {
            // @ts-ignore
            this.lineChartOptions.scales.x.time.unit = 'hour';
            // @ts-ignore
            this.lineChartOptions.scales.x.time.stepSize = 1;
        }
        else if (timeDiffHours < 72) {
            // @ts-ignore
            this.lineChartOptions.scales.x.time.unit = 'hour';
            // @ts-ignore
            this.lineChartOptions.scales.x.time.stepSize = 3;
        }
        else if (timeDiffHours < 7 * 24) {
            // @ts-ignore
            this.lineChartOptions.scales.x.time.unit = 'hour';
            // @ts-ignore
            this.lineChartOptions.scales.x.time.stepSize = 12;
        }
        else {
            // @ts-ignore
            this.lineChartOptions.scales.x.time.unit = 'hour';
            // @ts-ignore
            this.lineChartOptions.scales.x.time.stepSize = 24;
        }
        this.fullChartData = [];
        this.fullChartXLabels = [];
        var nextPageKey = '';
        this.getData(this.startTime.unix() * 1000, this.endTime.unix() * 1000, null);
    };
    TsGraphComponent.prototype.getData = function (from, to, nextPageKey) {
        var _this = this;
        var url = _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathThing + this.thingId + '/'
            + this.measureName + '/query/timerange';
        if (nextPageKey !== null) {
            url = url + '?pageKey=' + nextPageKey;
        }
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_5__.API.post(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, url, { body: { from: from, to: to } })
            .then(function (response) {
            _this.handleDataResponse(from, to, response);
        })
            .catch(function (error) {
            _this.loading = false;
            _this.dataError = true;
        });
    };
    TsGraphComponent.prototype.handleDataResponse = function (from, to, response) {
        var d = response.data[this.measureName];
        var nextPageKey = response['_metadata'][0]['nextPageKey'];
        this.fullChartData = this.fullChartData.concat(d.map(function (e) {
            return { x: e.timestamp, y: e.value };
        }));
        this.fullChartXLabels = this.fullChartXLabels.concat(d.map(function (e) {
            return e.timestamp;
        }));
        console.log(this.fullChartData.length);
        if (nextPageKey === null) {
            this.lineChartData.datasets[0]['data'] = this.fullChartData;
            this.lineChartData.labels = this.fullChartXLabels;
            this.loading = false;
        }
        else {
            this.getData(from, to, nextPageKey);
        }
    };
    TsGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.groupId = params.get('groupId');
            _this.thingId = params.get('thingId');
        });
        this.measureNames = Object.keys(this.sensorValues);
        this.selectMeasure(this.measureNames[0]);
    };
    TsGraphComponent.prototype.openModal = function (modal) {
        this.modalService.open(modal, { size: 'lg' });
    };
    TsGraphComponent.prototype.updateChartSettings = function () {
        this.chartStartFromZero = document.getElementById('chartStartFromZero').checked;
        // @ts-ignore
        this.lineChartOptions.scales.y.min = this.chartStartFromZero ? 0 : undefined;
    };
    TsGraphComponent.prototype.downloadGraph = function () {
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(document.getElementById('chart')).then(function (canvas) {
            var c = document.body.appendChild(canvas);
            var image = canvas.toDataURL('image/png');
            image = image.replace('image/png', 'image/octet-stream');
            var a = document.createElement('a');
            a.href = image;
            a.setAttribute('download', 'graph.png');
            a.click();
            a.remove();
            c.remove();
        });
    };
    TsGraphComponent.ɵfac = function TsGraphComponent_Factory(t) { return new (t || TsGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal)); };
    TsGraphComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TsGraphComponent, selectors: [["app-ts-graph"]], viewQuery: function TsGraphComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_8__.BaseChartDirective, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        } }, inputs: { sensorValues: "sensorValues", sensorUnits: "sensorUnits" }, decls: 23, vars: 5, consts: [[1, "card"], [1, "card-body"], [1, "d-flex"], [1, "card-title", "m-b-5"], [1, "lstick"], [1, "ml-auto"], ["ng-options", "", 1, "custom-select", "b-0", 2, "width", "auto", "min-width", "285px", 3, "change"], [4, "ngFor", "ngForOf"], ["type", "text", "name", "daterangeInput", "daterangepicker", "", 1, "custom-select", "custom-form-label", "b-0", 2, "width", "auto", "margin-left", "5px", "min-width", "285px", 3, "options", "selected"], [1, "custom-select", 2, "width", "auto", "margin-left", "5px", "background", "none", "padding", "1px 6px 1px 6px", 3, "click"], [1, "fas", "fa-cog"], [1, "fas", "fa-download"], ["chartSettingsModal", ""], [1, "fas", "fa-sync"], [1, "mt-4", "text-center", 2, "height", "300px", "min-height", "300px"], ["src", "assets/images/loading.gif", "style", "width: 60%; max-width: 200px", "alt", "loading", 4, "ngIf"], [4, "ngIf"], ["baseChart", "", "id", "chart", "height", "40vh", 3, "data", "options", "type", 4, "ngIf"], [1, "modal-header"], ["id", "chartSettingsModalLabel", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-check"], ["type", "checkbox", "id", "chartStartFromZero", 1, "form-check-input", 3, "checked", "change"], ["for", "chartStartFromZero", 1, "form-check-label"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["src", "assets/images/loading.gif", "alt", "loading", 2, "width", "60%", "max-width", "200px"], ["baseChart", "", "id", "chart", "height", "40vh", 3, "data", "options", "type"]], template: function TsGraphComponent_Template(rf, ctx) { if (rf & 1) {
            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Recorded Data ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "select", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TsGraphComponent_Template_select_change_8_listener($event) { return ctx.selectMeasure($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TsGraphComponent_option_9_Template, 2, 1, "option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selected", function TsGraphComponent_Template_input_selected_10_listener($event) { return ctx.selectedDate($event, ctx.daterange); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TsGraphComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16); return ctx.openModal(_r1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TsGraphComponent_Template_button_click_13_listener() { return ctx.downloadGraph(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, TsGraphComponent_ng_template_15_Template, 16, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TsGraphComponent_Template_button_click_17_listener() { return ctx.updateChart(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, TsGraphComponent_img_20_Template, 1, 0, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, TsGraphComponent_div_21_Template, 2, 0, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, TsGraphComponent_canvas_22_Template, 1, 3, "canvas", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.sensorValues));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.options);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.dataError);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.dataError);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_10__.DaterangepickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__.BaseChartDirective], styles: [".custom-form-label[_ngcontent-%COMP%] {\r\n}\r\n\r\n.custom-form-select[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.custom-form-timerange[_ngcontent-%COMP%] {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzLWdyYXBoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJ0cy1ncmFwaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1mb3JtLWxhYmVsIHtcclxufVxyXG5cclxuLmN1c3RvbS1mb3JtLXNlbGVjdCB7XHJcblxyXG59XHJcblxyXG4uY3VzdG9tLWZvcm0tdGltZXJhbmdlIHtcclxuXHJcbn1cclxuIl19 */"] });
    return TsGraphComponent;
}());



/***/ }),

/***/ 99346:
/*!***************************************!*\
  !*** ./src/app/group/group.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupModule": function() { return /* binding */ GroupModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _group_components_groups_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-components/groups.component */ 6524);
/* harmony import */ var _group_components_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-components/group.component */ 84253);
/* harmony import */ var _group_components_things_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-components/things.component */ 34201);
/* harmony import */ var _group_components_things_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-components/things-table.component */ 58929);
/* harmony import */ var _group_components_latest_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-components/latest-modal.component */ 9698);
/* harmony import */ var _group_components_thing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-components/thing.component */ 84296);
/* harmony import */ var _group_components_latest_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-components/latest-table.component */ 8189);
/* harmony import */ var ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-humanize-duration */ 10685);
/* harmony import */ var _group_components_ts_graph_ts_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group-components/ts-graph/ts-graph.component */ 8406);
/* harmony import */ var _group_components_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./group-components/landing.component */ 99330);
/* harmony import */ var ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-daterangepicker */ 49762);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-charts */ 44195);
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chartjs-plugin-annotation */ 30367);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! chart.js */ 57932);
/* harmony import */ var _group_components_attributes_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./group-components/attributes-table.component */ 91430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);





















var routes = [
    {
        path: 'groupsstart',
        data: {
            title: 'Groups',
            urls: [{ title: 'Groups', url: '/groupsstart' }, { title: 'Groups' }],
        },
        component: _group_components_landing_component__WEBPACK_IMPORTED_MODULE_8__.LandingComponent,
    },
    {
        path: 'groups',
        data: {
            title: '',
            urls: [{ title: 'Groups', url: '/groups' }, { title: 'Groups' }],
        },
        component: _group_components_groups_component__WEBPACK_IMPORTED_MODULE_0__.GroupsComponent,
    },
    {
        path: 'groups/:groupId',
        data: {
            title: '',
            urls: [{ title: 'Group', url: '/groups/:groupId' }, { title: 'Group' }],
        },
        component: _group_components_group_component__WEBPACK_IMPORTED_MODULE_1__.GroupComponent,
    },
    {
        path: 'things',
        data: {
            title: '',
            urls: [{ title: 'Things', url: '/things' }, { title: 'Things' }],
        },
        component: _group_components_things_component__WEBPACK_IMPORTED_MODULE_2__.ThingsComponent,
    },
    {
        path: 'groups/:groupId/thing/:thingId',
        data: {
            title: '',
            urls: [{ title: 'Thing', url: '/groups/:groupId/thing/:thingId' }, { title: 'Thing' }],
        },
        component: _group_components_thing_component__WEBPACK_IMPORTED_MODULE_5__.ThingComponent,
    }
];
var GroupModule = /** @class */ (function () {
    function GroupModule() {
    }
    GroupModule.ɵfac = function GroupModule_Factory(t) { return new (t || GroupModule)(); };
    GroupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: GroupModule });
    GroupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
                ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule.forRoot({
                    defaults: {},
                    plugins: [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_9__.default, chart_js__WEBPACK_IMPORTED_MODULE_10__.Decimation]
                }),
                ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_14__.Daterangepicker,
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes),
                ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_18__.NgxHumanizeDurationModule,
            ]] });
    return GroupModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](GroupModule, { declarations: [_group_components_landing_component__WEBPACK_IMPORTED_MODULE_8__.LandingComponent,
        _group_components_group_component__WEBPACK_IMPORTED_MODULE_1__.GroupComponent,
        _group_components_groups_component__WEBPACK_IMPORTED_MODULE_0__.GroupsComponent,
        _group_components_thing_component__WEBPACK_IMPORTED_MODULE_5__.ThingComponent,
        _group_components_things_component__WEBPACK_IMPORTED_MODULE_2__.ThingsComponent,
        _group_components_things_table_component__WEBPACK_IMPORTED_MODULE_3__.ThingsTableComponent,
        _group_components_latest_modal_component__WEBPACK_IMPORTED_MODULE_4__.LatestModalComponent,
        _group_components_latest_table_component__WEBPACK_IMPORTED_MODULE_6__.LatestTableComponent,
        _group_components_attributes_table_component__WEBPACK_IMPORTED_MODULE_11__.AttributesTableComponent,
        _group_components_ts_graph_ts_graph_component__WEBPACK_IMPORTED_MODULE_7__.TsGraphComponent], imports: [ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule, ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_14__.Daterangepicker,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_18__.NgxHumanizeDurationModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_group_group_module_ts.js.map