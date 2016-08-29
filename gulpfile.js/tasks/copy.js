/**
 * Copy Task
 *
 * Copies all files into dist folder
 * This task uses a callback and all tasks will run asynchronously
 * 
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 */

module.exports = function(gulp){
	return function(cb){
		console.log('----------> Copying vendor CSS');
		gulp.src(plugins.cfg.src + 'css/vendor/**/*.*')
		.pipe(gulp.dest(plugins.cfg.dist + 'css/')).on('end', function(){

			console.log('----------> Copying CSS');
			gulp.src(plugins.cfg.src + 'css/*.*')
			.pipe(gulp.dest(plugins.cfg.dist + 'css/')).on('end', function(){

				console.log('----------> Copying vendor JS');
				gulp.src(plugins.cfg.src + 'js/vendor/**/*.*')
				.pipe(gulp.dest(plugins.cfg.dist + 'js/')).on('end', function(){

					console.log('----------> Copying JS');
					gulp.src(plugins.cfg.src + 'js/*.*')
					.pipe(gulp.dest(plugins.cfg.dist + 'js/')).on('end', function(){

						console.log('----------> Copying Fonts');
						gulp.src(plugins.cfg.src + 'fonts/**/*.*')
						.pipe(gulp.dest(plugins.cfg.dist + 'fonts/')).on('end', function(){

							console.log('----------> Copying Images');
							gulp.src(plugins.cfg.src + 'img/**/*.*')
							.pipe(gulp.dest(plugins.cfg.dist + 'img/')).on('end', cb);
						});
					});
				});
			});
		});
	};
};
