# dei

[![CircleCI][circleci-image]][circleci-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[![Dependency Status][david-image]][david-url]
[![Devdependency Status][david-dev-image]][david-dev-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

A delayed iterators

```sh
npm i dei
```

## Usage

```js
const { map } = require('dei')

async () => {
  await map([1, 2, 3], n => n ** 2, 100) // [1, 4, 9] After 300ms
}
```

### Methods

- `forEach`
- `map`
- `reduce`
- `reduceRight`

### Old browsers

#### webpack with Babel example

```js
// webpack.config.js

module.exports = {
  module:{
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules(?!\/dei)/ },
    ],
  },
  ...
}
```

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## License

[MIT][license-url]

© sugarshin

[circleci-image]: https://circleci.com/gh/sugarshin/dei/tree/master.svg?style=svg&circle-token=65ad85a8639d11a0253d47b371f2d80387ffb137
[circleci-url]: https://circleci.com/gh/sugarshin/dei/tree/master
[coveralls-image]: https://coveralls.io/repos/github/sugarshin/dei/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/sugarshin/dei?branch=master
[npm-image]: https://img.shields.io/npm/v/dei.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/dei
[david-image]: https://david-dm.org/sugarshin/dei.svg?style=flat-square
[david-url]: https://david-dm.org/sugarshin/dei
[david-dev-image]: https://david-dm.org/sugarshin/dei/dev-status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/sugarshin/dei#info=devDependencies
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/a
