var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');

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
gulp.task('concatWithSourcemap', function() {
    return gulp.src('dev/js/*.js')
        .pipe(concat({ path: 'combined.js', stat: { mode: 0666 }}))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('/.'))
        .pipe(gulp.dest('public/js'));
});

// run gulp imagemin
gulp.task('imagemin', function() {
    gulp.src('dev/images/*')
        .pipe(imagemin({'verbose': true}))
        .pipe(gulp.dest('public/images'))
});