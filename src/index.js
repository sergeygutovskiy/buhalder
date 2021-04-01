const navigation      = require("./_navigation.js");
const overlay         = require("./_overlay.js");
const phone           = require("./_phone.js");

const calculator      = require("./_calculator.js");
const service_info    = require("./_service_info.js");
const questions       = require("./_questions.js");
const comments        = require("./_comments.js");
const work            = require("./_work.js");
const service_main    = require("./_service_main.js");
const about_gallery   = require("./_about_gallery.js");
const blog            = require("./_blog.js");

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

navigation.init();
overlay.init();
phone.init();

calculator.init();
service_info.init();
questions.init();
comments.init();
work.init();
service_main.init();

about_gallery.init();
blog.init();