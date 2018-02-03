<p align="center">
  <img src="https://i.imgur.com/qLu5dnN.png" />
</p>

<p align="center">
  <a href="https://travis-ci.org/herber/farben"><img src="https://travis-ci.org/herber/farben.svg?branch=master" alt="Build Status"></a>
  <a href="https://npm.im/farben"><img src="https://img.shields.io/npm/v/farben.svg" alt="farben"></a>
</p>

<p align="center">
  A small library for adding some <b>color</b> to your CLIs.
</p>

## Install

```
$ npm install farben
```

## Usage

```js
const farben = require('farben');

console.log(farben('unicorns', 'magenta'));
//=> 'unicorns' (in magenta)
```

## API

### farben(text, style)

#### text

Type: `string`

#### style

Type: `string`, `array`

How `text` should be styled.

###### Supported styles

* reset
* bold
* italic
* underline
* fontDefault
* font2
* font3
* font4
* font5
* font6
* imageNegative
* imagePositive
* black
* red
* green
* yellow
* blue
* magenta
* cyan
* white
* gray
* bg-black
* bg-red
* bg-green
* bg-yellow
* bg-blue
* bg-magenta
* bg-cyan
* bg-white
* bg-gray

## License

MIT © [Tobias Herber](http://tobihrbr.com)
