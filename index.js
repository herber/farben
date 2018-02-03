const ansi = require('ansi-escape-sequences');

module.exports = (text, color) => {
  return process.stdout.isTTY ? ansi.format(text, color) : text;
};
