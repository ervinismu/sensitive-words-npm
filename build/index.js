'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var wordsWar = exports.wordsWar = function wordsWar(content, words) {
  return content.replace(new RegExp(words.join('|'), 'ig'), '****');
};