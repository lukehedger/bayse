var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	coffee = require('gulp-coffee'),
	myth = require('gulp-myth'),
	minifycss = require('gulp-minify-css'),
	gutil = require('gulp-util'),
	livereload = require('gulp-livereload'),
	lr = require('tiny-lr'),
	server = lr();

gulp.task('coffee', function () {
	gulp.src('coffee/**/*.coffee')
		.pipe(sourcemaps.init())
		.pipe(coffee().on('error', gutil.log))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('js'))
		.pipe(livereload(server));
});

gulp.task('myth', function () {
	gulp.src('myth/**/*.css')
		.pipe(myth())
		.pipe(gulp.dest('css'))
		.pipe(minifycss({
			keepBreaks: true,
			root: 'css',
			processImport: true
		}))
		.pipe(gulp.dest('css'))
		.pipe(livereload(server));
});

gulp.task('default', function () {
	gulp.start('coffee', 'myth');
});

gulp.task('watch', function() {
	gulp.watch('myth/**/*.css', ['myth']);
	gulp.watch('coffee/**/*.coffee', ['coffee']);
});