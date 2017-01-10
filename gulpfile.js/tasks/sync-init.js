/**
 * Browser Sync
 *
 * Syncs browsers
 * This task is probably useless when you work with symfony
 * 
 * @version  1.0.0
 * @author   Matthias Morin <tangoman@free.fr>
 */

module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Init Browser Sync server');

		/**
		 * Browser Sync config
		 * @type {Object}
		 */
		var objConfig = {
			server: {
				baseDir: config.dest
			},
			options: {
				reloadDelay: 250
			},
			notify: false
		};

		plugins.browserSync.init(objConfig);
		cb();
	};
};
