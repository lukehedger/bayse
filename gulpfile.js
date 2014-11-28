var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	myth = require('gulp-myth'),
	minifycss = require('gulp-minify-css'),
	gutil = require('gulp-util'),
	browserSync = require('browser-sync'),
	psi = require('psi');

// config
var config = {
	paths: {
		coffee: './coffee/app.coffee',
		js: './js',
		myth: './myth/**/*.css',
		template: './template/**/*.html',
		release: './public',
		releaseCopy: [
			'404.html',
			'index.html',
			'humans.txt',
			'robots.txt'
		]
	},
	site: 'https://github.com/lukehedger/bayse', // use public URL of your site
	key: '' // use Google Developer API Key if you have one
};

// browserify
gulp.task('browserify', function () {
	browserify({
		entries: [config.paths.coffee],
		extensions: ['.coffee'],
		debug: true
	})
	.bundle()
	.on('error', gutil.log)
	.pipe(source('bundle.js'))
	.pipe(gulp.dest(config.paths.js))
	.pipe(browserSync.reload({stream:true, once: true}));
});

// script release
gulp.task('script-release', function () {
	gulp.src('./js/bundle.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/js'));
});

// style
gulp.task('style', function () {
	gulp.src(config.paths.myth)
		.pipe(myth({
			source: './myth'
		}))
		.pipe(gulp.dest('css'))
		.pipe(minifycss({
			keepBreaks: true,
			root: 'css',
			processImport: true
		}))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream:true}));
});

// style release
gulp.task('style-release', function () {
	gulp.src('./css/main.css')
		.pipe(minifycss({
			keepBreaks: false
		}))
		.pipe(gulp.dest('./public/css'));
});

// server
gulp.task('server', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        },
        ports: {
        	min: 5000,
        	max: 5000
        },
        open: true, // control automatic browser launch on server start
        notify: false // control browser notifications
    });
});

// PageSpeed Insights
gulp.task('pagespeed.mobile', function (cb) {
	psi({
	    // key: config.key
	    nokey: 'true',
	    url: config.site,
	    strategy: 'mobile',
	}, cb);
});
gulp.task('pagespeed.desktop', function (cb) {
	psi({
	    // key: config.key,
	    nokey: 'true',
	    url: config.site,
	    strategy: 'desktop',
	}, cb);
});

// copy release
gulp.task('copy-release', function () {
	gulp.src(config.paths.releaseCopy)
		.pipe(gulp.dest(config.paths.release));
});

// bundled tasks
gulp.task('default', function () {
	gulp.start('browserify', 'style', 'server', 'watch');
});

gulp.task('watch', function() {
	gulp.watch(config.paths.myth, ['style']);
	gulp.watch([config.paths.coffee, config.paths.template], ['browserify']);
});

gulp.task('analyse', ['pagespeed.desktop', 'pagespeed.mobile']);

gulp.task('release', function () {
	gulp.start('script-release', 'style-release', 'copy-release');
});
