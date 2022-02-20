# country-flags-svg

A list of countries with url links to a svg image which you can simply use in your web application

[![NPM](https://nodei.co/npm/country-flags-svg.png?downloads=true)](https://nodei.co/npm/country-flags-svg/)


[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]
![npm](https://img.shields.io/npm/l/country-flags-svg.svg?style=flat-square)



[build-badge]: https://img.shields.io/travis/ronatskiy/country-flags-svg/master.png?style=flat-square
[build]: https://travis-ci.org/ronatskiy/country-flags-svg

[coveralls-badge]: https://img.shields.io/coveralls/ronatskiy/country-flags-svg/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/ronatskiy/country-flags-svg


## Install

```sh
$ npm install country-flags-svg
```
or

```sh
$ yarn add country-flags-svg
```

## Usage

```js
import { findFlagUrlByNationality } from "country-flags-svg";

const flagUrl = findFlagUrlByNationality("Australian");
// => "http://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"

```

```js
import { countries } from "country-flags-svg";

const australia = countries[0];

console.log(australia);
/* => {
		name: "Australia",
		demonym: "Australian",
		flag: "http://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
		iso2: "AU",
		iso3: "AUS",
	}
*/
```

## API

### `countries`

Returns all available information.


### `findFlagUrlByCountryName(countryName)`

Returns SVG link of the official flag for a specified country (according to countryName) or empty string if is not exist

### `findFlagUrlByNationality(nationality)`

Returns SVG link of the official flag for a specified country (according to nationality) or empty string if is not exist

### `findFlagUrlByIso2Code(iso2Code)`

Returns SVG link of the official flag for a specified country (according to [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code) or empty string if is not exist

### `findFlagUrlByIso3Code(iso3Code)`

Returns SVG link of the official flag for a specified country (according to [ISO 3166-1 alpha-3](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code) or empty string if is not exist

## Available Flags

The full list of available flags you can see on the [Docs page](https://ronatskiy.github.io/country-flags-svg/)

if not enough don't be shy and provide merge request ;)

## License

Licensed under **MIT**.
