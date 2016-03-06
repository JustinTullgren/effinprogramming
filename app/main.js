const _ = require('ramda');
const $ = require('jquery');
const fantasy = require('ramda-fantasy');
const IO = fantasy.IO;

const kefir = require('kefir');

const log = x => { console.log(x); return x; }; // eslint-disable-line

// listen :: String -> DOM -> Stream
const listen = _.curry((event, target) => {
	return kefir.fromEvents(target, event);
});

const keypUpStream = listen('keyup');

const getDom = node => IO(() => document.getElementById(node)); // eslint-disable-line

// IMPURE

$(() => {
	getDom('search').map(keypUpStream).map(log).runIO().onValue(log);
});

