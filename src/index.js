const countries = require("./data/countries");
const flagUrls = require("./data/flagUrlByIso3");
const {
	findFlagUrlByCountryName,
	findFlagUrlByNationality,
	findFlagUrlByIso2Code,
	findFlagUrlByIso3Code,
} = require("./lib/api");

module.exports = {
	countries,
	flagUrls,
	findFlagUrlByCountryName,
	findFlagUrlByNationality,
	findFlagUrlByIso2Code,
	findFlagUrlByIso3Code,
};
