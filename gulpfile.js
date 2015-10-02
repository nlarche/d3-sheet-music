var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('build', function () {
	return browserify('./src/index.js')
		.bundle()
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});