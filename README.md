# binary2letter

This lightweight, zero-dependency 😎 JavaScript library converts a string to letters.

For example, `101011` is converted to `h`.

Please note that it does not strictly follow the ASCII table.

## Letter sequence

```javascript
const LETTERS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '-', '_',
];
```

So, `000000` in base 2 is `0` in decimal, hexadecimal. Hence, `binary2letter('000000')` returns `LETTERS[0]` which is `0`.

Another example is `001111` which in base 2 is `15` in decimal, `f` in hexadecimal. Hence, `binary2letter('001111')` returns `LETTERS[15]` which is `F`

## Installation

```bash
 npm install thammarith/binary2letter
 ```
 
 ## Usage

I don't know why would you want to use this but if you wish to, you can use `import` like

```javascript
import { binary2letter } from 'binary2letter';
```

Use `binary2letter(string)` where you need. It returns string, e.g.,

```javascript
let encoded = binary2letter('001111');
console.log(encoded); // F
```

## Caveat

If the input is not six letters long, it will add zeros **at the end**, for instance `111` becomes `111000`. So either make sure that you add `0`s as its prefix or accept the consequence.

## Test

Don't know. Can't write test. Still learning about it.

## Why would I want to use this?

I don't know either. I just need this for my personal project so... 🤷‍♂️.
