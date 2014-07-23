var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	coffee = require('gulp-coffee'),
	myth = require('gulp-myth'),
	minifycss = require('gulp-minify-css'),
	gutil = require('gulp-util'),
	browserSync = require('browser-sync'),
	psi = require('psi');

// config
var config = {
	paths: {
		coffee: 'coffee/**/*.coffee',
		myth: 'myth/**/*.css'
	},
	site: 'https://github.com/lukehedger/bayse', // use public URL of your site
	key: '' // use Google Developer API Key if you have one
};

// CoffeeScript
gulp.task('coffee', function () {
	gulp.src(config.paths.coffee)
		.pipe(sourcemaps.init())
		.pipe(coffee().on('error', gutil.log))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('js'))
		.pipe(browserSync.reload({stream:true, once: true}));
});

// Myth
gulp.task('myth', function () {
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

// server
gulp.task('browser-sync', function() {
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

// bundled tasks
gulp.task('default', function () {
	gulp.start('coffee', 'myth', 'browser-sync', 'watch');
});

gulp.task('watch', function() {
	gulp.watch(config.paths.myth, ['myth']);
	gulp.watch(config.paths.coffee, ['coffee']);
});

gulp.task('analyse', ['pagespeed.desktop', 'pagespeed.mobile']);