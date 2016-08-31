/**
 * Copy Task
 *
 * Copies all files into dist folder
 * This task uses a callback and all tasks will run asynchronously
 * 
 * @version        0.2.0
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  00:00 31/08/2016
 */

module.exports = function(gulp){
	return function(cb){
		console.log('----------> Copying vendor CSS');
		gulp.src(config.src + 'css/vendor/**/*.*')
		.pipe(gulp.dest(config.dist + 'css/')).on('end', function(){

			console.log('----------> Copying CSS');
			gulp.src(config.src + 'css/*.*')
			.pipe(gulp.dest(config.dist + 'css/')).on('end', function(){

				console.log('----------> Copying vendor JS');
				gulp.src(config.src + 'js/vendor/**/*.*')
				.pipe(gulp.dest(config.dist + 'js/')).on('end', function(){

					console.log('----------> Copying JS');
					gulp.src(config.src + 'js/*.*')
					.pipe(gulp.dest(config.dist + 'js/')).on('end', function(){

						console.log('----------> Copying Fonts');
						gulp.src(config.src + 'fonts/**/*.*')
						.pipe(gulp.dest(config.dist + 'fonts/')).on('end', function(){

							console.log('----------> Copying Images');
							gulp.src(config.src + 'img/**/*.*')
							.pipe(gulp.dest(config.dist + 'img/')).on('end', cb);
						});
					});
				});
			});
		});
	};
};
