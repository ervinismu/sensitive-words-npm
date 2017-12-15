export const wordsWar = (content, words) => (
  content.replace(
    new RegExp(words.join('|'), 'ig'),
    '****'
  )
)
