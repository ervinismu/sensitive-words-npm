'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var wordsWar = exports.wordsWar = function wordsWar(content, words) {
  if (Array.isArray(content)) {
    return content.map(function (c) {
      return c.replace(new RegExp(words.join('|'), 'ig'), '****');
    });
  }
  return content.replace(new RegExp(words.join('|'), 'ig'), '****');
};