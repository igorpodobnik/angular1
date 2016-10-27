var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var flatten = require('gulp-flatten');

gulp.task('scripts', function(){
          
        gulp.src(['src/app.js', 'src/**/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'));
        
          
});


gulp.task('move', function(){
    
        gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
    
});