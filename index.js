const { countries, flagUrls } = require("./data/index");
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
