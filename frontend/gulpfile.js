var gulp 			= require("gulp"),
	jade 				= require('gulp-jade'),
	rename 			= require('gulp-rename'),
	runSequence = require('run-sequence'),
	stylus 			= require('gulp-stylus'),
	rimraf 			= require('gulp-rimraf'),
	source 			= require('vinyl-source-stream'),	
	buffer 			= require('vinyl-buffer'),
	watchify 		= require('watchify'),
	browserify 	= require('browserify'),	
	glob 				= require('glob'),
	browserSync = require('browser-sync').create(),
	baseDir 		= __dirname + "/source"; // /home/jhonnatan ... /frontend/source

gulp.task('html', ["clean:html"], function() {
	gulp.src(baseDir + '/pages/**/**/*.jade')
		.pipe(jade({
			pretty 	: true,
			debug 	: false,
			basedir : baseDir			
		}))
		.pipe(rename({extname: '.phtml'}))
		.pipe(gulp.dest("../app/"));
});

gulp.task('js', ["clean:js"], function() {
	var testFiles = glob.sync(baseDir + '/pages/**/**/*.js');

	return browserify({
		entries: testFiles,
		basedir: baseDir,
		paths   : [baseDir + "/"],
		extensions: ['.js'],
		debug: true
	})
	.on('error', function(err){      
	  console.log(err.message);      
	  this.emit('end');
	})
	.transform("babelify", {
		presets: ["es2015"]			
	})
	.bundle()
	.on('error', function(err){      
	  console.log(err.message);      
	  this.emit('end');
	})
	.pipe(source('index.js'))
	.pipe(gulp.dest("../app/home"));
});

gulp.task('css', ['clean:css'], function(cb){
	return gulp.src(baseDir + "/pages/**/*.styl")    
		.pipe(stylus())
		.pipe(gulp.dest('../app'))
});

gulp.task('clean:js', function(cb){
	return gulp.src('../app/home/index.js', {read: false})
	.pipe(rimraf({force: true}))
});

gulp.task('clean:css', function(cb){
	return gulp.src('../app/home/index.css', {read: false})
	.pipe(rimraf({force: true}))
});

gulp.task('clean:html', function(cb){
	return gulp.src('../app/home/index.phtml', {read: false})
	.pipe(rimraf({force: true}))
});

gulp.task('default', function(cb){
	runSequence("html", "js", "css", cb)
});

gulp.task('watch', function() {
	gulp.watch(baseDir + "/**/**/**/*.js", ["js"]);
	gulp.watch(baseDir + "/**/**/**/*.jade", ["html"]);
	gulp.watch(baseDir + "/**/**/**/*.styl", ["css"]);
})