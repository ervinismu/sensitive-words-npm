export const wordsWar = (content, words) => {
  if (Array.isArray(content)) {
    return content.map(c => {
      return c.replace(
        new RegExp(words.join('|'), 'ig'),
        '****'
      );
    });
  }
  return content.replace(
    new RegExp(words.join('|'), 'ig'),
    '****'
  )
}
