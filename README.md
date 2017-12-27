# Example 

```shell
$ npm install words-war
```

```javascript
const wordsWar = require('words-war')
// ES2015 modules
import wordsWar from 'words-war '

const filtered = wordsWar(
  'The new apple macbook pro will have a touchbar',
  ['pro', 'touchbar']
);

console.log(filtered);
// The new apple macbook ***** will have a *****

// Mass filter
const filteredWords = wordsWar(
  [
    'The new apple macbook pro will have a touchbar',
    'The new android will have a touchbar'
  ],
  ['pro', 'touchbar']
);
```
