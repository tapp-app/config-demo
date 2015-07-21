var env = process.env.ENV || 'dev';
var conf = require('./config.default.json');
conf = require('./config.'+env+'.json');

module.exports = conf;