const browserify = require('browserify');
const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const watch = require('gulp-watch');
const watchify = require('watchify');

const DIRS = {
	build: "build",
	src: "src",
	srcWeb: "src-web"
};

// oh... my glob...
const GLOBS = {
	build: DIRS.build + "/**",
	srcWeb: DIRS.srcWeb + "/**"
};

const FILES = {
	maints: DIRS.src + "/main.ts"
};


// high level tasks
// -------------
gulp.task('default', [':rebuild']);

gulp.task(':rebuild', function(cb){
	return runSequence(':clean', ':build', cb);
});

gulp.task(':build', ['web:build', 'js:build']);

gulp.task(':watch', function(done){
	watchWeb();
	watchJS();
});

gulp.task(':clean', function(){
	return del(GLOBS.build);
});

// low level tasks - build / watch
// --------------
gulp.task('web:build', function(){
	return gulp.src(GLOBS.srcWeb)
		.pipe(gulp.dest(DIRS.build));
});

gulp.task('js:build', function(){
	var bundler = createBundler(false);

	return bundle(bundler);
});

// watch functions
// ------------

function watchWeb() {
	gutil.log('@web: starting file watch...')
	return watch(GLOBS.srcWeb, { usePolling: true }, function(e){
		gutil.log('@web: file changed at ' + e.path);
		gulp.start('web:build');
	});
}

function watchJS() {
	gutil.log('@js: starting file watch...')
	var bundler = createBundler(true);

	bundler.on('update', function(ids){
		gutil.log('@js: file changed at ' + ids);
		bundle(bundler);
	});
	bundler.on('error', function(e){
		gutil.log('@js: An unexpected error occurred: ' + e.message);
	});

	bundler.on('log', function(txt){
		gutil.log('@js: ' + txt);
	});

	return bundle(bundler);
}

// helper functions
// ------------
function createBundler(isWatch) {
	// initialize
	var bundler = browserify({
		basedir: ".",
	    debug: true,
	    entries: [FILES.maints],
		cache: {},
		packageCache: {},
	});

	// inject watchify
	if(isWatch) {
		bundler = watchify(bundler);
	}

	// add plugins
	bundler.plugin(tsify);

	// return
	return bundler;
}

function bundle(bundler) {
	gutil.log('@js: starting bundle...');
	return bundler.bundle()
		.pipe(source('main.bundle.js'))
		.pipe(gulp.dest(DIRS.build));
}
