# PostCSS System Monospace [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]
> Monospace fonts from your operating system

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Dependency Status][david-img]][david-url]

Most systems have their own monospace font which `font-family: monospace` does not observe. This [PostCSS][postcss] plugin gives the ability to use the client system's monospace font via CSS.

```css
/* input */
.example {
  font-family: system-monospace;
}
```


```css
/* output */
.example {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
```

Check out the <a href="https://philipbordallo.github.io/postcss-system-monospace/">visual test</a>.

## Install 

```sh
# npm
npm install --save-dev postcss postcss-system-monospace

# or yarn
yarn add --dev postcss postcss-system-monospace
```


## Usage

Add it to your PostCSS work-flow, [whatever way you choose to](https://github.com/postcss/postcss#usage).

```js
// Using a postcss.config.js
const systemMonospace = require('postcss-system-monospace');

module.exports = {
  plugins: [
    systemMonospace
  ]
};

```

Then use the font-family name `system-monospace` where ever needed.
```css
.code {
  font-family: system-monospace;
}
```


## Fonts

| name | system |
| --- | --- |
`SFMono-Regular` | macOS
`Menlo` | macOS & iOS
`Monaco` | macOS
`Consolas` | Windows
`Liberation Mono` | Linux
`Courier New` | _fallback_
`monospace` | _fallback_


## Credits
- Nick Galbreath for his articles on operating system monospace fonts and their use with CSS, [CSS System Font Stack Monospace v1](https://www.client9.com/css-system-font-stack-monospace-v1/) & [CSS System Font Stack Monospace v2](https://www.client9.com/css-system-font-stack-monospace-v2/)


## [License](./LICENSE) ##


[david-img]: https://img.shields.io/david/philipbordallo/postcss-system-monospace.svg
[david-url]: https://david-dm.org/philipbordallo/postcss-system-monospace

[cli-img]: https://img.shields.io/travis/philipbordallo/postcss-system-monospace.svg
[cli-url]: https://travis-ci.org/philipbordallo/postcss-system-monospace

[npm-img]: https://img.shields.io/npm/v/postcss-system-monospace.svg
[npm-url]: https://www.npmjs.com/package/postcss-system-monospace

[postcss]: https://github.com/postcss/postcss
