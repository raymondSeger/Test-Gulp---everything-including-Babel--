var gulp = require('gulp');
var sass = require('gulp-sass');

// run gulp sass
gulp.task('sass', function(){
    return gulp.src('dev/sass/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('public/css'))
});