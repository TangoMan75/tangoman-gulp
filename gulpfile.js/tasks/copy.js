/**
 * Copy Task
 *
 * Copies all files into dist folder
 * This task uses a callback and all tasks will run asynchronously
 * 
 * @version  1.0.0
 * @author   Matthias Morin <tangoman@free.fr>
 */

module.exports = function(gulp){
	return function(cb){
		console.log('----------> Copying vendor CSS');
		gulp.src(config.src.vendor + 'css/**/*.*')
		.pipe(gulp.dest(config.dest.css)).on('end', function(){

			console.log('----------> Copying source CSS');
			gulp.src(config.src.css + '/*.*')
			.pipe(gulp.dest(config.dest.css)).on('end', function(){

				console.log('----------> Copying vendor JS');
				gulp.src(config.src.vendor + 'js/**/*.*')
				.pipe(gulp.dest(config.dest.js)).on('end', function(){

					console.log('----------> Copying source JS');
					gulp.src(config.src.js + '/*.*')
					.pipe(gulp.dest(config.dest.js)).on('end', function(){

						console.log('----------> Copying Fonts');
						gulp.src(config.src.fonts + '/**/*.*')
						.pipe(gulp.dest(config.dest.fonts)).on('end', function(){

							console.log('----------> Copying Images');
							gulp.src(config.src.img + '/**/*.*')
							.pipe(gulp.dest(config.dest.img)).on('end', cb);
						});
					});
				});
			});
		});
	};
};
