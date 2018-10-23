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

## Available Flags*

<!-- AUTO-GENERATED-CONTENT:START (LIST_OF_FLAGS) -->
<table><tr><td><div >Aruba</div><img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg" alt="Flag of Aruba" title="Aruba" height="30" /></td><td><div >Australia</div><img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg" alt="Flag of Australia" title="Australia" height="30" /></td><td><div >Austria</div><img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" alt="Flag of Austria" title="Austria" height="30" /></td><td><div >Azerbaijan</div><img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg" alt="Flag of Azerbaijan" title="Azerbaijan" height="30" /></td><td><div >Bangladesh</div><img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" alt="Flag of Bangladesh" title="Bangladesh" height="30" /></td><td><div >Bahrain</div><img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg" alt="Flag of Bahrain" title="Bahrain" height="30" /></td><td><div >Belgium</div><img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg" alt="Flag of Belgium" title="Belgium" height="30" /></td></tr>
<tr><td><div >Brazil</div><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="Flag of Brazil" title="Brazil" height="30" /></td><td><div >Canada</div><img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg" alt="Flag of Canada" title="Canada" height="30" /></td><td><div >Chile</div><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" alt="Flag of Chile" title="Chile" height="30" /></td><td><div >China</div><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" alt="Flag of China" title="China" height="30" /></td><td><div >Colombia</div><img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" alt="Flag of Colombia" title="Colombia" height="30" /></td><td><div >Croatia</div><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg" alt="Flag of Croatia" title="Croatia" height="30" /></td><td><div >Cyprus</div><img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg" alt="Flag of Cyprus" title="Cyprus" height="30" /></td></tr>
<tr><td><div >Czech Republic</div><img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" alt="Flag of Czech Republic" title="Czech Republic" height="30" /></td><td><div >Denmark</div><img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg" alt="Flag of Denmark" title="Denmark" height="30" /></td><td><div >Europe</div><img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" alt="Flag of Europe" title="Europe" height="30" /></td><td><div >Estonia</div><img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg" alt="Flag of Estonia" title="Estonia" height="30" /></td><td><div >Fiji</div><img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg" alt="Flag of Fiji" title="Fiji" height="30" /></td><td><div >Finland</div><img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" alt="Flag of Finland" title="Finland" height="30" /></td><td><div >France</div><img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" alt="Flag of France" title="France" height="30" /></td></tr>
<tr><td><div >Germany</div><img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" alt="Flag of Germany" title="Germany" height="30" /></td><td><div >Greece</div><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg" alt="Flag of Greece" title="Greece" height="30" /></td><td><div >Hong Kong</div><img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg" alt="Flag of Hong Kong" title="Hong Kong" height="30" /></td><td><div >Hungary</div><img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" alt="Flag of Hungary" title="Hungary" height="30" /></td><td><div >India</div><img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="Flag of India" title="India" height="30" /></td><td><div >Indonesia</div><img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" alt="Flag of Indonesia" title="Indonesia" height="30" /></td><td><div >Ireland</div><img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg" alt="Flag of Ireland" title="Ireland" height="30" /></td></tr>
<tr><td><div >Italy</div><img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg" alt="Flag of Italy" title="Italy" height="30" /></td><td><div >Japan</div><img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg" alt="Flag of Japan" title="Japan" height="30" /></td><td><div >Latvia</div><img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg" alt="Flag of Latvia" title="Latvia" height="30" /></td><td><div >Liechtenstein</div><img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg" alt="Flag of Liechtenstein" title="Liechtenstein" height="30" /></td><td><div >Lithuania</div><img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg" alt="Flag of Lithuania" title="Lithuania" height="30" /></td><td><div >Luxembourg</div><img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg" alt="Flag of Luxembourg" title="Luxembourg" height="30" /></td><td><div >Malaysia</div><img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" alt="Flag of Malaysia" title="Malaysia" height="30" /></td></tr>
<tr><td><div >Mauritius</div><img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg" alt="Flag of Mauritius" title="Mauritius" height="30" /></td><td><div >Mexico</div><img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" alt="Flag of Mexico" title="Mexico" height="30" /></td><td><div >Monaco</div><img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg" alt="Flag of Monaco" title="Monaco" height="30" /></td><td><div >Montenegro</div><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg" alt="Flag of Montenegro" title="Montenegro" height="30" /></td><td><div >Nepal</div><img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" alt="Flag of Nepal" title="Nepal" height="30" /></td><td><div >Netherlands</div><img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" alt="Flag of Netherlands" title="Netherlands" height="30" /></td><td><div >New Zealand</div><img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" alt="Flag of New Zealand" title="New Zealand" height="30" /></td></tr>
<tr><td><div >Norway</div><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" alt="Flag of Norway" title="Norway" height="30" /></td><td><div >Panama</div><img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg" alt="Flag of Panama" title="Panama" height="30" /></td><td><div >Philippines</div><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg" alt="Flag of Philippines" title="Philippines" height="30" /></td><td><div >Poland</div><img src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg" alt="Flag of Poland" title="Poland" height="30" /></td><td><div >Portugal</div><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" alt="Flag of Portugal" title="Portugal" height="30" /></td><td><div >Russia</div><img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" alt="Flag of Russia" title="Russia" height="30" /></td><td><div >Singapore</div><img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" alt="Flag of Singapore" title="Singapore" height="30" /></td></tr>
<tr><td><div >Sri Lanka</div><img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg" alt="Flag of Sri Lanka" title="Sri Lanka" height="30" /></td><td><div >Slovakia</div><img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg" alt="Flag of Slovakia" title="Slovakia" height="30" /></td><td><div >Slovenia</div><img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg" alt="Flag of Slovenia" title="Slovenia" height="30" /></td><td><div >South Africa</div><img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" alt="Flag of South Africa" title="South Africa" height="30" /></td><td><div >South Korea</div><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" alt="Flag of South Korea" title="South Korea" height="30" /></td><td><div >Spain</div><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="Flag of Spain" title="Spain" height="30" /></td><td><div >Sweden</div><img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg" alt="Flag of Sweden" title="Sweden" height="30" /></td></tr>
<tr><td><div >Switzerland</div><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg" alt="Flag of Switzerland" title="Switzerland" height="30" /></td><td><div >Thailand</div><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg" alt="Flag of Thailand" title="Thailand" height="30" /></td><td><div >Turkey</div><img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" alt="Flag of Turkey" title="Turkey" height="30" /></td><td><div >United Kingdom</div><img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg" alt="Flag of United Kingdom" title="United Kingdom" height="30" /></td><td><div >United States</div><img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="Flag of United States" title="United States" height="30" /></td><td><div >United Arab Emirates</div><img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg" alt="Flag of United Arab Emirates" title="United Arab Emirates" height="30" /></td><td><div >Uruguay</div><img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg" alt="Flag of Uruguay" title="Uruguay" height="30" /></td></tr>
<tr><td><div >Venezuela</div><img src="https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg" alt="Flag of Venezuela" title="Venezuela" height="30" /></td><td><div >Vietnam</div><img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="Flag of Vietnam" title="Vietnam" height="30" /></td></tr></table>
<!-- AUTO-GENERATED-CONTENT:END -->
* - if not enough don't be shy and provide merge request ;)

## License

Licensed under **MIT**.
