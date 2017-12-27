import { wordsWar } from '.'

test('replace blacklisted words with asterisks', () => (
  expect(wordsWar(
    'The name of the NX will be the Nintendo Switch',
    ['switch']
  )).toBe('The name of the NX will be the Nintendo ****')
))

test('replaces blacklisted words with asterisks', () => (
  expect(wordsWar(
    'The name of the NX will be the Nintendo Switch. The switch will be awesome!',
    ['switch']
  )).toBe('The name of the NX will be the Nintendo ****. The **** will be awesome!')
))

test('replace blacklisted words in array of string', () => {
  const filteredWords = wordsWar(
    [
      'The new apple macbook pro will have a touchbar',
      'The new android will have a touchbar'
    ],
    ['pro', 'touchbar']
  );

  const expectedResults = [
    'The new apple macbook **** will have a ****',
    'The new android will have a ****'
  ];

  filteredWords.forEach((str, idx) => {
    expect(str).toBe(expectedResults[idx]);
  });
});

test('replace blacklisted words with the associated words', () => (
  expect(wordsWar(
    'Hello! The new apple macbook pro will have a touchbar',
    ['pro', 'touchbar', 'Hello!'],
    {
      'pro': 'air',
      'touchbar': 'new feature'
    }
  )).toBe('**** The new apple macbook air will have a new feature')
))