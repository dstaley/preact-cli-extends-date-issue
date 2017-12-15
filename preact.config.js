import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default (config, env, helpers) => {
	const uglifyPlugin = helpers.getPluginsByName(config, 'UglifyJsPlugin');
	if (uglifyPlugin.length > 0) {
		let { index } = uglifyPlugin[0];
		const uglifyOptions = config.plugins[index].options;
		delete uglifyOptions.compress.screw_ie8;
		config.plugins[index] = new UglifyJsPlugin({ uglifyOptions });
	}
};
