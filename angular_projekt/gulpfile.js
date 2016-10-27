var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var flatten = require('gulp-flatten');
var webserver = require('gulp-webserver');


gulp.task('scripts', function () {
    gulp.src(['src/components/userController.js', 'src/**/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify("JavaScript compiled!"));
});




gulp.task('move', function () {
    gulp.src(['./src/index.html'])
        .pipe(gulp.dest('./dist'));

    gulp.src(['!./src/index.html', './src/**/*.html'])
        .pipe(flatten())
        .pipe(gulp.dest('./dist/templates'))
        .pipe(notify("Moved HTML files!"));
});



gulp.task('serve', function () {
    gulp.src('dist').pipe(webserver({
        port: 48080,
        livereload: true
    })).pipe(notify("Running webserver!"));
});


gulp.task('watch', ['serve'], function () {
    gulp.start(['scripts', 'move']);
    gulp.watch(['src/**/*.js'], ['scripts']);
    gulp.watch(['src/**/*.html'], ['move']);
});
