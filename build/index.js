'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Replacer will replace the matched word with associated
// word in context. By default it returns default replacer
function Replacer(ctx, defaultReplacer) {
  return function (match, offset, string) {
    if (ctx[match] !== undefined) {
      return ctx[match];
    } else {
      return defaultReplacer;
    }
  };
}

var wordsWar = exports.wordsWar = function wordsWar(content, words) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var replacer = Replacer(context, '****');

  if (Array.isArray(content)) {
    return content.map(function (c) {
      return c.replace(new RegExp(words.join('|'), 'ig'), replacer);
    });
  }

  return content.replace(new RegExp(words.join('|'), 'ig'), replacer);
};