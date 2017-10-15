var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// run gulp sass
gulp.task('sass', function(){
    return gulp.src('dev/sass/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('public/css'))
});

// run gulp htmlmin
gulp.task('htmlmin', function() {
    return gulp.src('dev/templates/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public/templates'));
});

// run gulp uglify
gulp.task('uglify', function (cb) {
    return gulp.src('dev/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

// run gulp concat
gulp.task('concat', function() {
    return gulp.src('dev/js/*.js')
        .pipe(concat({ path: 'combined.js', stat: { mode: 0666 }}))
        .pipe(gulp.dest('public/js'));
});