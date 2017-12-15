import sensitiveWords from '.'

test('replace blacklisted words with asterisks', () => (
  expect(sensitiveWords(
    'The name of the NX will be the Nintendo Switch',
    ['switch']
  )).toBe('The name of the NX will be the Nintendo ***')
))

test('replaces blacklisted words with asterisks', () => (
  expect(sensitiveWords(
    'The name of the NX will be the Nintendo Switch. The switch will be awesome!',
    ['switch']
  )).toBe('The name of the NX will be the Nintendo ***. The *** will be awesome!')
))
