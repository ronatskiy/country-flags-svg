const { countries } = require("../data/index");

function findFlagUrlByPredicate(countryInfos, predicate) {
	const countryInfo = countryInfos.find(predicate) || { flag: "" };

	return countryInfo.flag;
}

module.exports = {
	findFlagUrlByCountryName(countryName) {
		const flagUrl =
			findFlagUrlByPredicate(countries, ({ name }) => name.toUpperCase() === countryName.toUpperCase()) ||
			findFlagUrlByPredicate(
				countries,
				({ altSpellings }) =>
					altSpellings && altSpellings.some(item => item.toUpperCase() === countryName.toUpperCase()),
			);

		return flagUrl;
	},

	findFlagUrlByNationality(nationality) {
		return findFlagUrlByPredicate(countries, ({ demonym }) => demonym.toUpperCase() === nationality.toUpperCase());
	},

	findFlagUrlByIso2Code(iso2Code) {
		return findFlagUrlByPredicate(countries, ({ iso2 }) => iso2.toUpperCase() === iso2Code.toUpperCase());
	},

	findFlagUrlByIso3Code(iso3Code) {
		return findFlagUrlByPredicate(countries, ({ iso3 }) => iso3.toUpperCase() === iso3Code.toUpperCase());
	},
};
