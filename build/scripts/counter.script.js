/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/molecules/counter/counter.molecule.js":
/*!**********************************************************!*\
  !*** ./components/molecules/counter/counter.molecule.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Counter)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Counter = /*#__PURE__*/function () {
  function Counter(molecule, pageParams) {
    _classCallCheck(this, Counter);

    this.moleculeParams = {
      molecule: molecule,
      pageParams: pageParams
    };
    this.init();
  }

  _createClass(Counter, [{
    key: "bumpCounter",
    value: function bumpCounter() {
      this.currentVal = parseInt(this.counterOutput.innerHTML, 10);
      this.newVal = this.currentVal + 1;
      this.counterOutput.innerHTML = this.newVal;
    }
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;

      this.counterButton.addEventListener('click', function () {
        _this.bumpCounter();
      });
    }
  }, {
    key: "setupDOMReferences",
    value: function setupDOMReferences() {
      this.counterButton = document.querySelector('.counter__button');
      this.counterOutput = document.querySelector('.counter__output');
    }
  }, {
    key: "init",
    value: function init() {
      console.log(this.moleculeParams);
      this.setupDOMReferences();
      this.setupEventListeners();
    }
  }]);

  return Counter;
}();



/***/ }),

/***/ "./components/templates/generic/generic.template.js":
/*!**********************************************************!*\
  !*** ./components/templates/generic/generic.template.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenericTemplate)
/* harmony export */ });
/* harmony import */ var _molecules_counter_counter_molecule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../molecules/counter/counter.molecule */ "./components/molecules/counter/counter.molecule.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GenericTemplate = /*#__PURE__*/function () {
  function GenericTemplate(parentPageParams) {
    _classCallCheck(this, GenericTemplate);

    this.templateParams = {
      parentPageParams: parentPageParams
    };
    this.init();
  }

  _createClass(GenericTemplate, [{
    key: "setupMolecules",
    value: function setupMolecules() {
      var _this = this;

      document.querySelectorAll('[data-js-component="Counter"]').forEach(function (molecule) {
        _this.counter = new _molecules_counter_counter_molecule__WEBPACK_IMPORTED_MODULE_0__["default"](molecule, _this.templateParams);
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.setupMolecules();
    }
  }]);

  return GenericTemplate;
}();



/***/ }),

/***/ "./components/pages/counter/counter.page.scss":
/*!****************************************************!*\
  !*** ./components/pages/counter/counter.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************************!*\
  !*** ./components/pages/counter/counter.page.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _counter_page_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.page.scss */ "./components/pages/counter/counter.page.scss");
/* harmony import */ var _templates_generic_generic_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../templates/generic/generic.template */ "./components/templates/generic/generic.template.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var CounterPage = /*#__PURE__*/function () {
  function CounterPage(page) {
    _classCallCheck(this, CounterPage);

    this.pageParams = {
      pageNode: page,
      pageTitle: page.dataset.jsPage
    };
    this.init();
  }

  _createClass(CounterPage, [{
    key: "setupTemplate",
    value: function setupTemplate() {
      this.GenericTemplate = new _templates_generic_generic_template__WEBPACK_IMPORTED_MODULE_1__["default"](this.pageParams);
    }
  }, {
    key: "init",
    value: function init() {
      this.setupTemplate();
    }
  }]);

  return CounterPage;
}();

document.querySelectorAll('[data-js-page="Counter"]').forEach(function (page) {
  var counterPage = new CounterPage(page);
  return counterPage;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUQsRUFBVTtBQUN0RSxNQUFNTSxXQUFXLEdBQUcsSUFBSVAsV0FBSixDQUFnQkMsSUFBaEIsQ0FBcEI7QUFDQSxTQUFPTSxXQUFQO0FBQ0QsQ0FIRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL21vbGVjdWxlcy9jb3VudGVyL2NvdW50ZXIubW9sZWN1bGUuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL3RlbXBsYXRlcy9nZW5lcmljL2dlbmVyaWMudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL3BhZ2VzL2NvdW50ZXIvY291bnRlci5wYWdlLnNjc3M/NDc4NSIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9wYWdlcy9jb3VudGVyL2NvdW50ZXIucGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIHtcbiAgY29uc3RydWN0b3IobW9sZWN1bGUsIHBhZ2VQYXJhbXMpIHtcbiAgICB0aGlzLm1vbGVjdWxlUGFyYW1zID0ge1xuICAgICAgbW9sZWN1bGUsXG4gICAgICBwYWdlUGFyYW1zLFxuICAgIH07XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGJ1bXBDb3VudGVyKCkge1xuICAgIHRoaXMuY3VycmVudFZhbCA9IHBhcnNlSW50KHRoaXMuY291bnRlck91dHB1dC5pbm5lckhUTUwsIDEwKTtcbiAgICB0aGlzLm5ld1ZhbCA9IHRoaXMuY3VycmVudFZhbCArIDE7XG4gICAgdGhpcy5jb3VudGVyT3V0cHV0LmlubmVySFRNTCA9IHRoaXMubmV3VmFsO1xuICB9XG5cbiAgc2V0dXBFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmNvdW50ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmJ1bXBDb3VudGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXR1cERPTVJlZmVyZW5jZXMoKSB7XG4gICAgdGhpcy5jb3VudGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXJfX2J1dHRvbicpO1xuICAgIHRoaXMuY291bnRlck91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyX19vdXRwdXQnKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5tb2xlY3VsZVBhcmFtcyk7XG4gICAgdGhpcy5zZXR1cERPTVJlZmVyZW5jZXMoKTtcbiAgICB0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vLi4vbW9sZWN1bGVzL2NvdW50ZXIvY291bnRlci5tb2xlY3VsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyaWNUZW1wbGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudFBhZ2VQYXJhbXMpIHtcbiAgICB0aGlzLnRlbXBsYXRlUGFyYW1zID0ge1xuICAgICAgcGFyZW50UGFnZVBhcmFtcyxcbiAgICB9O1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgc2V0dXBNb2xlY3VsZXMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtY29tcG9uZW50PVwiQ291bnRlclwiXScpLmZvckVhY2goKG1vbGVjdWxlKSA9PiB7XG4gICAgICB0aGlzLmNvdW50ZXIgPSBuZXcgQ291bnRlcihtb2xlY3VsZSwgdGhpcy50ZW1wbGF0ZVBhcmFtcyk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBNb2xlY3VsZXMoKTtcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY291bnRlci5wYWdlLnNjc3MnO1xuXG5pbXBvcnQgX0dlbmVyaWNUZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvZ2VuZXJpYy9nZW5lcmljLnRlbXBsYXRlJztcblxuY2xhc3MgQ291bnRlclBhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYWdlKSB7XG4gICAgdGhpcy5wYWdlUGFyYW1zID0ge1xuICAgICAgcGFnZU5vZGU6IHBhZ2UsXG4gICAgICBwYWdlVGl0bGU6IHBhZ2UuZGF0YXNldC5qc1BhZ2UsXG4gICAgfTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgc2V0dXBUZW1wbGF0ZSgpIHtcbiAgICB0aGlzLkdlbmVyaWNUZW1wbGF0ZSA9IG5ldyBfR2VuZXJpY1RlbXBsYXRlKHRoaXMucGFnZVBhcmFtcyk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBUZW1wbGF0ZSgpO1xuICB9XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXBhZ2U9XCJDb3VudGVyXCJdJykuZm9yRWFjaCgocGFnZSkgPT4ge1xuICBjb25zdCBjb3VudGVyUGFnZSA9IG5ldyBDb3VudGVyUGFnZShwYWdlKTtcbiAgcmV0dXJuIGNvdW50ZXJQYWdlO1xufSk7XG4iXSwibmFtZXMiOlsiQ291bnRlciIsIm1vbGVjdWxlIiwicGFnZVBhcmFtcyIsIm1vbGVjdWxlUGFyYW1zIiwiaW5pdCIsImN1cnJlbnRWYWwiLCJwYXJzZUludCIsImNvdW50ZXJPdXRwdXQiLCJpbm5lckhUTUwiLCJuZXdWYWwiLCJjb3VudGVyQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1bXBDb3VudGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsInNldHVwRE9NUmVmZXJlbmNlcyIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJHZW5lcmljVGVtcGxhdGUiLCJwYXJlbnRQYWdlUGFyYW1zIiwidGVtcGxhdGVQYXJhbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNvdW50ZXIiLCJzZXR1cE1vbGVjdWxlcyIsIl9HZW5lcmljVGVtcGxhdGUiLCJDb3VudGVyUGFnZSIsInBhZ2UiLCJwYWdlTm9kZSIsInBhZ2VUaXRsZSIsImRhdGFzZXQiLCJqc1BhZ2UiLCJzZXR1cFRlbXBsYXRlIiwiY291bnRlclBhZ2UiXSwic291cmNlUm9vdCI6IiJ9