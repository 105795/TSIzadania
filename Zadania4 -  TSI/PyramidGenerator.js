function pyramid(pattern, rows, inverted) {
  let result = '\n';

  for (let i = 1; i <= rows; i++) {
    let spaces, symbols;

    if (inverted) {
      spaces = ' '.repeat(i - 1);
      symbols = pattern.repeat(2 * (rows - i) + 1);
    } else {
      spaces = ' '.repeat(rows - i);
      symbols = pattern.repeat(i * 2 - 1);
    }

    result += spaces + symbols + '\n';
  }

  return result;
}
console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));