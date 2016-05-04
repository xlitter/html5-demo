var gulp = require('gulp'),
	 browsersync = require('browser-sync');

gulp.task('watch', function () {

	browsersync.init({
		server: './html'
	});
	gulp.watch('html/**/*.html').on('change', browsersync.reload);

});
	 
	 
