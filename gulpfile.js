/**
 * gulpfile.js need to be on the root of the project.
 * You can run gulp in different ways:
 * 1.- From gulp executable:
 * 		1.1.- ./node_modules/.bin/gulp  test
 * 2.- From magic gulp function watch (See package.json) and running 
 * 	  		$ npm run watch
 * 	  	Then, test on watch filter runs after you modify files that match with
 * 	  	the regex of the gulp.watch() order.
 */

var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test',function () {
	gulp.
		src('./test/mocha_test.js').
		pipe(mocha()).
		on('error', function () {
			this.emit('end');
		});
});

gulp.task('watch', function () {
	gulp.watch('./*/*.js', ['test']);
});