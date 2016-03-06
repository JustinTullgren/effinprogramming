const _ = require('ramda');
const compose = _.compose;
const map = _.map;
const $ = require('jquery');
const fantasy = require('ramda-fantasy');
const IO = fantasy.IO;
const kefir = require('kefir');

// Helpers
const log = x => { console.log(x); return x; }; // eslint-disable-line

// listen :: String -> DOM -> Stream
const listen = _.curry((event, target) => {
	return kefir.fromEvents(target, event);
});

// keyUpStream :: String -> Stream
const keypUpStream = listen('keyup');

// getDom :: String -> IO
const getDom = node => IO(() => document.getElementById(node)); // eslint-disable-line

// eventValue :: DomEvent -> Stream String
const eventValue = compose(map(_.prop('value')), map(_.prop('target')));

// IMPURE

$(() => {
	getDom('search').map(keypUpStream).map(eventValue).runIO().onValue(log);
});

