const { countries } = require("../data/index");

function findFlagUrlByPredicate(countryInfos, predicate) {
	const countryInfo = countryInfos.find(predicate) || { flag: "" };

	return countryInfo.flag;
}

module.exports = {
	findFlagUrlByCountryName(countryName) {
		const flagUrl =
			findFlagUrlByPredicate(countries, ({ name }) => name === countryName) ||
			findFlagUrlByPredicate(
				countries,
				({ altSpellings }) => altSpellings && altSpellings.some(item => item === countryName),
			);

		return flagUrl;
	},

	findFlagUrlByNationality(nationality) {
		return findFlagUrlByPredicate(countries, ({ demonym }) => demonym === nationality);
	},

	findFlagUrlByIso2Code(iso2Code) {
		return findFlagUrlByPredicate(countries, ({ iso2 }) => iso2 === iso2Code);
	},

	findFlagUrlByIso3Code(iso3Code) {
		return findFlagUrlByPredicate(countries, ({ iso3 }) => iso3 === iso3Code);
	},
};
