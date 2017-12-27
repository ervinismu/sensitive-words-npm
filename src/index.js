// Replacer will replace the matched word with associated
// word in context. By default it returns default replacer
function Replacer(ctx, defaultReplacer) {
  return function(match, offset, string) {
    if (ctx[match] !== undefined) {
      return ctx[match];
    } else {
      return defaultReplacer;
    }
  }
}

export const wordsWar = (content, words, context={}) => {
  const replacer = Replacer(context, '****');

  if (Array.isArray(content)) {
    return content.map(c => {
      return c.replace(
        new RegExp(words.join('|'), 'ig'),
        replacer
      );
    });
  }
  
  return content.replace(
    new RegExp(words.join('|'), 'ig'),
    replacer
  )
}
