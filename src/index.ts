import countries from "./data/countries";
import {
	findFlagUrlByCountryName,
	findFlagUrlByNationality,
	findFlagUrlByIso2Code,
	findFlagUrlByIso3Code,
	getMapFlagUrlByIso3Code,
} from "./lib/api";

const flagUrls = getMapFlagUrlByIso3Code();

export {
	countries,
	flagUrls,
	findFlagUrlByCountryName,
	findFlagUrlByNationality,
	findFlagUrlByIso2Code,
	findFlagUrlByIso3Code,
};
