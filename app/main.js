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

// keyUpStream :: IO DOM -> Stream
const keypUpStream = listen('keyup');

// getDom :: String -> IO
const getDom = node => IO(() => document.getElementById(node)); // eslint-disable-line

// eventValue :: DomEvent -> String
const eventValue = compose(_.prop('value'), _.prop('target'));

// valueStream :: DomEvent -> Stream String
const valueStream = compose(map(eventValue), keypUpStream);

// IMPURE

$(() => {
	getDom('search').map(valueStream).runIO().onValue(log);
});

