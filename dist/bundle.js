/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var App;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_about_gallery.js":
/*!*******************************!*\
  !*** ./src/_about_gallery.js ***!
  \*******************************/
/***/ ((module) => {

eval("function init() {    \n    let gallery_slider = new Swiper('.about-gallery__slider', {\n        slidesPerView: 1,\n        speed: 400,\n        spaceBetween: 48,\n        pagination: {\n            el: \".about-gallery__pagination\",\n            bulletClass: \"dft-pagination__bullet\",\n            bulletActiveClass: \"active\",\n            clickable: true\n        },\n        navigation: {\n            nextEl: \".about-gallery__button_right\",\n            prevEl: \".about-gallery__button_left\",\n        },\n        breakpoints: {\n            601: {\n                slidesPerView: 2,\n            },\n            1025: {\n                slidesPerView: 3,\n            },\n        }\n    });   \n}\n\nmodule.exports = { init };\n\n//# sourceURL=webpack://App/./src/_about_gallery.js?");

/***/ }),

/***/ "./src/_blog.js":
/*!**********************!*\
  !*** ./src/_blog.js ***!
  \**********************/
/***/ ((module) => {

eval("function init() {\n    let slides = document.getElementsByClassName(\"blog-articles__items-wrapper\");\n    let buttons = document.getElementsByClassName(\"blog-articles__btn\");\n    let active_btn_index = 0;\n\n    for (let i = 0; i < buttons.length; i++) {\n        buttons[i].addEventListener(\"click\", function() {\n            buttons[active_btn_index].classList.remove(\"active\");\n            slides[active_btn_index].classList.remove(\"active\");\n    \n            this.classList.add(\"active\");\n            slides[i].classList.add(\"active\");\n        \n            active_btn_index = i;\n        });\n    }\n}\n\nmodule.exports = { init };\n\n//# sourceURL=webpack://App/./src/_blog.js?");

/***/ }),

/***/ "./src/_calculator.js":
/*!****************************!*\
  !*** ./src/_calculator.js ***!
  \****************************/
/***/ ((module) => {

eval("function init() {\n    let button_groups = document.getElementsByClassName(\"calculator__btn-group\");\n    let price_text = document.getElementsByClassName(\"calculator__price\")[0];\n    let active_buttons = [0, 0, 0];\n\n    const prices = [\n        [\n            [\n                [3500], [5000], [8000]\n            ],\n            [\n                [8000], [10000], [12000]\n            ],\n            [\n                [8000], [10000], [12000]\n            ]\n        ],\n        [\n            [\n                [2500], [2500], [8000]\n            ],\n            [\n                [5000], [10000], [12000]\n            ],\n            [\n                [8000], [10000], [12000]\n            ]\n        ]\n    ]\n\n    for (let i = 0; i < button_groups.length; i++) {\n        for (let j = 0; j < button_groups[i].children.length; j++) {\n            \n            let group = button_groups[i];\n            group.childNodes[j * 2 + 1].addEventListener(\"click\", function() {\n                \n                group.childNodes[active_buttons[i] * 2 + 1].classList.remove(\"active\");\n                active_buttons[i] = (j * 2) / 2;\n                \n                this.classList.add(\"active\");\n                price_text.childNodes[1].textContent = \"от \" \n                    + prices[ active_buttons[0] ][ active_buttons[1] ][ active_buttons[2] ][0];\n                    + \"<span> ₽/месяц </span>\";\n            });\n        }\n    }\n}\n\nmodule.exports = { init };\n\n//# sourceURL=webpack://App/./src/_calculator.js?");

/***/ }),

/***/ "./src/_comments.js":
/*!**************************!*\
  !*** ./src/_comments.js ***!
  \**************************/
/***/ ((module) => {

eval("function init() {\n    let slider = new Swiper('.comments__slider_lg', {\n        slidesPerView: 1,\n        spaceBetween: 64,\n        centeredSlides: true,\n        centeredSlides: true,\n        speed: 400,\n        pagination: {\n            el: \".comments__pagination_lg\",\n            bulletClass: \"dft-pagination__bullet\",\n            bulletActiveClass: \"active\",\n            clickable: true\n        }\n    });\n    \n    let slider_md = new Swiper('.comments__slider_md', {\n        slidesPerView: 1,\n        spaceBetween: 64,\n        centeredSlides: true,\n        centeredSlides: true,\n        speed: 400,\n        pagination: {\n            el: \".comments__pagination_md\",\n            bulletClass: \"dft-pagination__bullet\",\n            bulletActiveClass: \"active\",\n            clickable: true\n        }\n    });\n}\n\nmodule.exports = { init };\n\n//# sourceURL=webpack://App/./src/_comments.js?");

/***/ }),

/***/ "./src/_navigation.js":
/*!****************************!*\
  !*** ./src/_navigation.js ***!
  \****************************/
/***/ ((module) => {

eval("function init() {\n    let btn = document.getElementsByClassName(\"navigation_md__button\")[0];\n    let md_links_wrapper = document.getElementsByClassName(\"navigation_md__links-wrapper\")[0];\n    let md_links_dropdown_toggle = document.getElementsByClassName(\"navigation_md__dropdown-toggle\")[0];\n    let md_links_dropdown = document.getElementsByClassName(\"navigation_md-dropdown\")[0];\n\n    btn.addEventListener(\"click\", function() {\n        this.classList.toggle(\"active\");\n        md_links_wrapper.classList.toggle(\"active\");\n    });\n\n    md_links_dropdown_toggle.addEventListener(\"click\", function(e) {\n        e.preventDefault();\n\n        md_links_dropdown.classList.toggle(\"active\");\n    });\n}\n\nmodule.exports = { init };\n\n//# sourceURL=webpack://App/./src/_navigation.js?");

/***/ }),

/***/ "./src/_overlay.js":
/*!*************************!*\
  !*** ./src/_overlay.js ***!
  \*************************/
/***/ ((module) => {

eval("\nfunction init() {\n    let close_button = document.getElementsByClassName(\"dft-overlay__button\")[0];\n    let overlay = document.getElementsByClassName(\"dft-overlay\")[0];\n    let overlay_items = document.getElementsByClassName(\"dft-overlay__items\")[0];\n\n    close_button.addEventListener(\"click\", function() {\n        overlay.classList.remove(\"active\");\n        overlay_items.textContent = \"\";\n    });\n\n    overlay_items.addEventListener(\"click\", function() {\n        overlay.classList.remove(\"active\");\n        overlay_items.textContent = \"\";\n    });\n\n    let triggers = document.getElementsByClassName(\"dft-overlay-trigger\");\n    for (let i = 0; i < triggers.length; i++) {\n        let t = triggers[i];\n\n        t.addEventListener(\"click\", choose);\n    }\n}\n\nfunction open() {\n    let overlay = document.getElementsByClassName(\"dft-overlay\")[0];\n    overlay.classList.add(\"active\");\n}\n\nfunction choose() {\n    let overlays = document.getElementsByClassName(\"dft-overlay-item\");\n    let overlay_items = document.getElementsByClassName(\"dft-overlay__items\")[0];\n\n    for (let i = 0; i < overlays.length; i++) {\n        let item = overlays[i];\n\n        if (item.dataset.overlay == this.dataset.overlayTarget) {\n            overlay_items.appendChild(item.childNodes[1].cloneNode(true));\n            open();\n            break;\n        }\n    }\n}\n\nmodule.exports = { init, open };\n\n//# sourceURL=webpack://App/./src/_overlay.js?");

/***/ }),

/***/ "./src/_phone.js":
/*!***********************!*\
  !*** ./src/_phone.js ***!
  \***********************/
/***/ ((module) => {

eval("\nfunction init() {\n    let container = document.getElementsByClassName(\"floating-phone\")[0];\n    let open_button = document.getElementsByClassName(\"floating-phone__open-button\")[0];\n    let close_button = document.getElementsByClassName(\"floating-phone__close-button\")[0];\n\n    open_button.addEventListener(\"click\", function() {\n        container.classList.add(\"active\");\n    });\n\n    close_button.addEventListener(\"click\", function() {\n        container.classList.remove(\"active\");\n    });\n}\n\n\nmodule.exports = { init, open };\n\n//# sourceURL=webpack://App/./src/_phone.js?");

/***/ }),

/***/ "./src/_questions.js":
/*!***************************!*\
  !*** ./src/_questions.js ***!
  \***************************/
/***/ ((module) => {

eval("function init() {\n    let questions = document.getElementsByClassName(\"question\");\n    let question_titles = document.getElementsByClassName(\"question__title\");\n\n    for (let i = 0; i < question_titles.length; i++) {\n        let q = questions[i];\n        let qt = question_titles[i];\n\n        qt.addEventListener(\"click\", function(e) {\n            e.preventDefault();\n            q.classList.toggle(\"active\");\n        });\n    }\n}\n\nmodule.exports = { init };\n\n//# sourceURL=webpack://App/./src/_questions.js?");

/***/ }),

/***/ "./src/_service_info.js":
/*!******************************!*\
  !*** ./src/_service_info.js ***!
  \******************************/
/***/ ((module) => {

eval("function init() {\n    let slides = document.getElementsByClassName(\"service-info__slide-wrapper\");\n    let buttons = document.getElementsByClassName(\"service-info__btn\");\n    let active_btn_index = 0;\n\n    for (let i = 0; i < buttons.length; i++) {\n        buttons[i].addEventListener(\"click\", function() {\n            buttons[active_btn_index].classList.remove(\"active\");\n            slides[active_btn_index].classList.remove(\"active\");\n    \n            this.classList.add(\"active\");\n            slides[i].classList.add(\"active\");\n        \n            active_btn_index = i;\n        });\n    }\n}\n\nmodule.exports = { init };\n\n//# sourceURL=webpack://App/./src/_service_info.js?");

/***/ }),

/***/ "./src/_service_main.js":
/*!******************************!*\
  !*** ./src/_service_main.js ***!
  \******************************/
/***/ ((module) => {

eval("function init() {\n    let slider = new Swiper('.service-main__slider', {\n        slidesPerView: 1,\n        speed: 400,\n        effect: 'fade',\n        allowTouchMove: false,\n        fadeEffect: {\n            crossFade: true\n        },\n        pagination: {\n            el: \".service-main__pagination\",\n            bulletClass: \"dft-pagination__bullet\",\n            bulletActiveClass: \"active\",\n            clickable: true\n        },\n        navigation: {\n            nextEl: \".service-main__button_right\",\n            prevEl: \".service-main__button_left\",\n        },\n        on: {\n            slideChange: function() {\n                gallery_slider.slideTo(this.activeIndex);\n            },\n        },\n    });\n    \n    let gallery_slider = new Swiper('.service-main__gallery-slider', {\n        slidesPerView: 1,\n        speed: 400,\n        spaceBetween: 48,\n        allowTouchMove: false,\n        breakpoints: {\n            601: {\n                slidesPerView: 2,\n            },\n            1025: {\n                slidesPerView: 3,\n            },\n        }\n    });   \n}\n\nmodule.exports = { init };\n\n//# sourceURL=webpack://App/./src/_service_main.js?");

/***/ }),

/***/ "./src/_service_services.js":
/*!**********************************!*\
  !*** ./src/_service_services.js ***!
  \**********************************/
/***/ ((module) => {

eval("function init() {\n    let buttons = document.getElementsByClassName(\"service-services__btn\");\n    let active_btn_index = 0;\n\n    let titles_slider = new Swiper('.service-services__titles-slider', {\n        slidesPerView: 1,\n        speed: 400,\n        effect: 'fade',\n        allowTouchMove: false,\n        fadeEffect: {\n            crossFade: true\n        },\n        autoHeight: true,\n        breakpoints: {\n            1025: {\n                autoHeight: false,\n            }\n        }\n    });\n\n    let texts_slider = new Swiper('.service-services__texts-slider', {\n        slidesPerView: 1,\n        speed: 400,\n        effect: 'fade',\n        allowTouchMove: false,\n        fadeEffect: {\n            crossFade: true\n        },\n        pagination: {\n            el: \".service-services__pagination\",\n            bulletClass: \"dft-pagination__bullet\",\n            bulletActiveClass: \"active\",\n            clickable: true\n        },\n        navigation: {\n            nextEl: \".service-services__button_right\",\n            prevEl: \".service-services__button_left\",\n        },\n        on: {\n            slideChange: function() {\n                titles_slider.slideTo(this.activeIndex);\n                \n                buttons[active_btn_index].classList.remove(\"active\");\n    \n                buttons[this.activeIndex].classList.add(\"active\");\n                active_btn_index = this.activeIndex;\n            },\n        },\n    });\n\n    for (let i = 0; i < buttons.length; i++) {\n        buttons[i].addEventListener(\"click\", function() {\n            buttons[active_btn_index].classList.remove(\"active\");\n    \n            this.classList.add(\"active\");\n            texts_slider.slideTo(i);\n        \n            active_btn_index = i;\n        });\n    }\n}\n\nmodule.exports = { init };\n\n//# sourceURL=webpack://App/./src/_service_services.js?");

/***/ }),

/***/ "./src/_work.js":
/*!**********************!*\
  !*** ./src/_work.js ***!
  \**********************/
/***/ ((module) => {

eval("function init() {\n    let slider = new Swiper(\".work-timeline__body .swiper-container\", {\n        speed: 150,\n        slidesPerView: 1,\n        effect: 'fade',\n        allowTouchMove: false,\n        fadeEffect: {\n            crossFade: true\n        },\n    });\n    \n    let steps = document.getElementsByClassName(\"work-timeline__step\");\n    let step_infos = document.getElementsByClassName(\"work-timeline__info\");\n    \n    let active_index = 0;\n    \n    for (let i = 0; i < steps.length; i++) {\n        let step = steps[i];\n        let step_info = step_infos[i];\n    \n        step.addEventListener(\"click\", function() {\n            step_infos[active_index].classList.remove(\"active\");\n            step_info.classList.add(\"active\");\n            active_index = i;\n    \n            slider.slideTo(active_index);\n    \n            let has_active = 0;\n            for (let j = 0; j <= i; j++) {\n                if (steps[j].classList.contains(\"active\")) {\n                    has_active++;\n                    continue;\n                }\n    \n                setTimeout(() => {\n                    steps[j].classList.add(\"active\");\n                }, (j - has_active) * 150);\n            }\n    \n            let has_not_active = 0;\n            for (let j = steps.length - 1; j > i; j--) {\n                if (!steps[j].classList.contains(\"active\")) {\n                    has_not_active++;\n                    continue;\n                }\n    \n                setTimeout(() => {\n                    steps[j].classList.remove(\"active\");\n                }, (steps.length - j - has_not_active - 1) * 150);\n            }\n        });\n    }\n}\n\nmodule.exports = { init };\n\n//# sourceURL=webpack://App/./src/_work.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const navigation       = __webpack_require__(/*! ./_navigation.js */ \"./src/_navigation.js\");\nconst overlay          = __webpack_require__(/*! ./_overlay.js */ \"./src/_overlay.js\");\nconst phone            = __webpack_require__(/*! ./_phone.js */ \"./src/_phone.js\");\n \nconst calculator       = __webpack_require__(/*! ./_calculator.js */ \"./src/_calculator.js\");\nconst service_info     = __webpack_require__(/*! ./_service_info.js */ \"./src/_service_info.js\");\nconst questions        = __webpack_require__(/*! ./_questions.js */ \"./src/_questions.js\");\nconst comments         = __webpack_require__(/*! ./_comments.js */ \"./src/_comments.js\");\nconst work             = __webpack_require__(/*! ./_work.js */ \"./src/_work.js\");\nconst service_main     = __webpack_require__(/*! ./_service_main.js */ \"./src/_service_main.js\");\nconst about_gallery    = __webpack_require__(/*! ./_about_gallery.js */ \"./src/_about_gallery.js\");\nconst blog             = __webpack_require__(/*! ./_blog.js */ \"./src/_blog.js\");\nconst service_services = __webpack_require__(/*! ./_service_services.js */ \"./src/_service_services.js\");\n\n\nlet vh = window.innerHeight * 0.01;\ndocument.documentElement.style.setProperty('--vh', `${vh}px`);\n\nwindow.addEventListener(\"resize\", function() {\n    let vh = window.innerHeight * 0.01;\n    document.documentElement.style.setProperty('--vh', `${vh}px`);\n});\n\n\nnavigation.init();\noverlay.init();\nphone.init();\n\ncalculator.init();\nservice_info.init();\nquestions.init();\ncomments.init();\nwork.init();\nservice_main.init();\nservice_services.init();\nabout_gallery.init();\nblog.init();\n\n//# sourceURL=webpack://App/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	App = __webpack_exports__;
/******/ 	
/******/ })()
;