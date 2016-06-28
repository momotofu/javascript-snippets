var requireDir = name => {
	this.normalizedPath = require('path').join(__dirname, name);

	require('fs').readdirSync(this.normalizedPath).forEach(function(file) {
	  require('./' + name + '/' + file);
	});
}

module.exports = requireDir;

