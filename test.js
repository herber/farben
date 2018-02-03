const farben = require('./');

test('colors string', () => {
  expect(farben('I am blue', 'blue')).toBe('\u001b[34mI am blue\u001b[0m');
  expect(farben()).toBe('');
});
