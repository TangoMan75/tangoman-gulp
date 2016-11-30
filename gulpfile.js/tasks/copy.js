/**
 * Copy Task
 *
 * Copies all files into dist folder
 * This task uses a callback and all tasks will run asynchronously
 * 
 * @version        0.3.0
 * @author         Matthias Morin <tangoman@free.fr>
 * @last-modified  20:00 08/09/2016
 */

module.exports = function(gulp){
	return function(cb){
		console.log('----------> Copying vendor CSS');
		gulp.src(config.assets + 'css/**/*.*')
		.pipe(gulp.dest(config.dist + 'css/')).on('end', function(){

			console.log('----------> Copying source CSS');
			gulp.src(config.src + 'css/*.*')
			.pipe(gulp.dest(config.dist + 'css/')).on('end', function(){

				console.log('----------> Copying vendor JS');
				gulp.src(config.assets + 'js/**/*.*')
				.pipe(gulp.dest(config.dist + 'js/')).on('end', function(){

					console.log('----------> Copying source JS');
					gulp.src(config.src + 'js/*.*')
					.pipe(gulp.dest(config.dist + 'js/')).on('end', function(){

						console.log('----------> Copying Fonts');
						gulp.src(config.assets + 'fonts/**/*.*')
						.pipe(gulp.dest(config.dist + 'fonts/')).on('end', function(){

							console.log('----------> Copying Images');
							gulp.src(config.assets + 'img/**/*.*')
							.pipe(gulp.dest(config.dist + 'img/')).on('end', cb);
						});
					});
				});
			});
		});
	};
};
