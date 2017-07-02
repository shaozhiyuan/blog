// import $ from 'jquery';
var Gotop = require('./gotop.js');
var Lazy = require('./lazy.js');
var Carousel = require('./carousel.js')
new Gotop();
new Lazy($("#news"));
new Carousel.init($('.carousel'))
