const ansi = require('ansi-format');

const format = (str, styles) => {
  if (!str) return '';

  return styles && styles.length ? ansi(styles) + str + '\x1b[0m' : str;
};

module.exports = (text, color) => {
  return process.stdout.isTTY ? format(text, color) : text;
};
