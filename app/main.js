const _ = require('ramda');
const log = x => {
	console.log(x);
	return x;
};

const get = _.curry((prop, obj) => obj[prop]);
const test = {
	foo: 'bats are cool'
};
const getFoo = get('foo');
log(getFoo(test));
