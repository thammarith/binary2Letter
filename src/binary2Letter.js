const LETTERS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '-', '_',
];

function binary2letter(input) {
  let encoded = '';
  for(let i = 0; i < Math.ceil(input.length / 6); i++) {
    encoded += LETTERS[binary2Decimal(fillZeros(input.substr(i * 6, 6)))];
  }
  return encoded;
}

function binary2Decimal(binary) {
  return parseInt(binary, 2);
}

function fillZeros(str) {
  if (str.length !== 6) {
    while (str.length < 6) {
      str += '0';
    }
  }
  return str;
}

export {
  binary2letter,
};
