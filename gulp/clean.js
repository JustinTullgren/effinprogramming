const del = require('del');
module.exports = config => () => del.sync(config.dest.root);
