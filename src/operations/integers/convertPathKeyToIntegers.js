var convertPathKeyTo = require('./../convertPathKeyTo');
var isArray = Array.isArray;
var rangeToArray = require('./../ranges/rangeToArray');

function onRange(out, range) {
    var len = out.length - 1;
    rangeToArray(range).forEach(function(el) {
        out[++len] = el;
    });
}

function onKey(out, key) {
    key = +key;
    if (!isNaN(key)) {
        out[out.length] = key;
    }
}

/**
 * will attempt to get integers from the key
 * or keySet provided. assumes everything passed in is an integer
 * or range of integers.
 */
module.exports = convertPathKeyTo(onRange, onKey);
