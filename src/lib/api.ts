import ALL_COUNTRIES from "../data/countries";

type CountryDataType = (typeof ALL_COUNTRIES)[number];
type Iso3Code = CountryDataType["iso3"];

interface CountryData {
	name: string;
	demonym: string;
	flag: string;
	iso2: string;
	iso3: string;
	altSpellings?: string[];
}

const countries_to_search = ALL_COUNTRIES as unknown as CountryData[];

function isEqual(str1: string, str2: string) {
	return str1.toUpperCase() === str2.toUpperCase();
}

function findFlagUrlByPredicate(countries: CountryData[], predicate: (c: CountryData) => boolean) {
	const country = countries.find(predicate);

	return country ? country.flag : "";
}

export function findFlagUrlByCountryName(countryName: string) {
	return findFlagUrlByPredicate(
		countries_to_search,
		({ name, altSpellings }) =>
			(isEqual(name, countryName) || altSpellings?.some((altSpelling) => isEqual(altSpelling, countryName))) ??
			false
	);
}

export function findFlagUrlByNationality(nationality: string) {
	return findFlagUrlByPredicate(countries_to_search, ({ demonym }) => isEqual(demonym, nationality));
}

export function findFlagUrlByIso2Code(iso2Code: string) {
	return findFlagUrlByPredicate(countries_to_search, ({ iso2 }) => isEqual(iso2, iso2Code));
}

export function findFlagUrlByIso3Code(iso3Code: string) {
	return findFlagUrlByPredicate(countries_to_search, ({ iso3 }) => isEqual(iso3, iso3Code));
}

export function getMapFlagUrlByIso3Code() {
	return ALL_COUNTRIES.reduce((acc, { iso3, flag }) => {
		acc[iso3] = flag;
		return acc;
	}, {} as Record<Iso3Code, string>);
}
