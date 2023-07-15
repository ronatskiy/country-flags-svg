import {
	countries,
	flagUrls,
	findFlagUrlByCountryName,
	findFlagUrlByNationality,
	findFlagUrlByIso2Code,
	findFlagUrlByIso3Code,
} from "../index";

describe("countryFlagsSvg", () => {
	describe("countries", () => {
		it("all countries must contain required properties", () => {
			const requiredProperties = ["name", "demonym", "flag", "iso2", "iso3"];

			expect(
				countries.every((country) =>
					requiredProperties.every((requiredProperty) => country.hasOwnProperty(requiredProperty))
				)
			).toBe(true);
		});

		it("each country should have filled svg url", () => {
			countries.forEach((country) => {
				expect(country.flag).toBeDefined();
				expect(typeof country.flag === "string").toBe(true);
				expect(country.flag.length).not.toBe(0);
			});
		});

		it("countries and flagUrls should have equal amounts", () => {
			const amountOfFlagUrls = Object.keys(flagUrls).length;

			expect(countries).toHaveLength(amountOfFlagUrls);
		});
	});

	describe("flagUrls", () => {
		it("should contain all countries", () => {
			countries.forEach((country) => {
				expect(flagUrls[country.iso3]).toBe(country.flag);
			});
		});
	});

	describe("findFlagUrlByCountryName", () => {
		describe("should return correct flag url for every country", () => {
			countries.forEach((country) => {
				it(`when argument is: ${country.name}`, () => {
					const countryInfo = findFlagUrlByCountryName(country.name);

					expect(countryInfo).toBe(country.flag);

					expect(findFlagUrlByCountryName(country.name.toUpperCase())).toBe(country.flag);
					expect(findFlagUrlByCountryName(country.name.toLowerCase())).toBe(country.flag);
				});
			});
		});
	});

	describe("findFlagUrlByNationality", () => {
		describe("should return correct flag url for every country", () => {
			countries.forEach((country) => {
				it(`when argument is: ${country.name}`, () => {
					const countryInfo = findFlagUrlByNationality(country.demonym);

					expect(countryInfo).toBe(country.flag);

					expect(findFlagUrlByNationality(country.demonym.toUpperCase())).toBe(country.flag);
					expect(findFlagUrlByNationality(country.demonym.toLowerCase())).toBe(country.flag);
				});
			});
		});
	});

	describe("findFlagUrlByIso2Code", () => {
		describe("should return correct flag url for every country", () => {
			countries.forEach((country) => {
				it(`when argument is: ${country.name}`, () => {
					const countryInfo = findFlagUrlByIso2Code(country.iso2);

					expect(countryInfo).toBe(country.flag);

					expect(findFlagUrlByIso2Code(country.iso2.toUpperCase())).toBe(country.flag);
					expect(findFlagUrlByIso2Code(country.iso2.toLowerCase())).toBe(country.flag);
				});
			});
		});
	});

	describe("findFlagUrlByIso3Code", () => {
		describe("should return correct flag url for every country", () => {
			countries.forEach((country) => {
				it(`when argument is: ${country.name}`, () => {
					const countryInfo = findFlagUrlByIso3Code(country.iso3);

					expect(countryInfo).toBe(country.flag);

					expect(findFlagUrlByIso3Code(country.iso3.toUpperCase())).toBe(country.flag);
					expect(findFlagUrlByIso3Code(country.iso3.toLowerCase())).toBe(country.flag);
				});
			});
		});
	});
});
