const navigation      = require("./_navigation.js");
const calculator      = require("./_calculator.js");
const service_info    = require("./_service_info.js");
const questions       = require("./_questions.js");
const comments        = require("./_comments.js");
const work            = require("./_work.js");
const service_main    = require("./_service_main.js");
const overlay         = require("./_overlay.js");

navigation.init();
calculator.init();
service_info.init();
questions.init();
comments.init();
work.init();
service_main.init();
overlay.init();

module.exports = {
    overlay
};