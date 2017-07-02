// "devDependencies": {
//     "gulp": "^3.9.1",
//         "gulp-concat": "^2.6.1",
//         "gulp-imagemin": "^3.2.0",
//         "gulp-livereload": "^3.8.1",
//         "gulp-minify-css": "^1.2.4",
//         "gulp-uglify": "^3.0.0"
// }
var gulp = require('gulp');
var concat = require('gulp-concat');
var imgmin = require('gulp-imagemin');
var cssmin = require('gulp-minify-css');
var jsmin = require('gulp-uglify');
gulp.task("css",function () {
    gulp.src('./*.css')
        .pipe(concat("main.css"))
        .pipe(cssmin())
        .pipe(gulp.dest('./dest'))
});
gulp.task("js",function () {
    gulp.src('./*.js')
        .pipe(concat("main.js"))
        .pipe(jsmin())
        .pipe(gulp.dest('./dest'))
});
gulp.task("img",function () {
    gulp.src('../qiyeimg/*.png')
        .pipe(imgmin())
        .pipe(gulp.dest('./dist'))
})
gulp.task("min",["css","js","img"])

