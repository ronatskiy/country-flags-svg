const countries = require("../data/countries");

function isEqual(str1, str2) {
	return str1.toUpperCase() === str2.toUpperCase()
}

function findFlagUrlByPredicate(countries, predicate) {
	const country = countries.find(predicate);

	return country ? country.flag : "";
}

module.exports = {
	findFlagUrlByCountryName(countryName) {
		return findFlagUrlByPredicate(countries, ({name, altSpellings}) =>
			isEqual(name, countryName) || altSpellings.some(altSpelling => isEqual(altSpelling, countryName)));
	},

	findFlagUrlByNationality(nationality) {
		return findFlagUrlByPredicate(countries, ({ demonym }) => isEqual(demonym, nationality));
	},

	findFlagUrlByIso2Code(iso2Code) {
		return findFlagUrlByPredicate(countries, ({ iso2 }) => isEqual(iso2, iso2Code));
	},

	findFlagUrlByIso3Code(iso3Code) {
		return findFlagUrlByPredicate(countries, ({ iso3 }) => isEqual(iso3, iso3Code));
	},
};
