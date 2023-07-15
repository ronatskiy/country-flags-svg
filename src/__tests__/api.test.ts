const TEST_AUS = {
	name: "Test Australia",
	demonym: "Test Australian",
	flag: "https://restcountries.eu/data/aus.svg",
	iso2: "A1",
	iso3: "A2S",
	altSpellings: ["A12"],
};

const TEST_SGP = {
	name: "Test Singapore",
	demonym: "Test Singaporean",
	flag: "https://restcountries.eu/data/sgp.svg",
	iso2: "1G",
	iso3: "S4P",
	altSpellings: ["SG", "Singapura", "Republik Singapura", "新加坡共和国"],
};

jest.mock("../data/countries", () => [TEST_AUS, TEST_SGP]);

import {
	findFlagUrlByCountryName,
	findFlagUrlByNationality,
	findFlagUrlByIso2Code,
	findFlagUrlByIso3Code,
} from "../index";

describe("api", () => {
	describe("findFlagUrlByCountryName", () => {
		describe("should return correct flag url for Australia", () => {
			it("when argument in capital case", () => {
				const countryInfo = findFlagUrlByCountryName(TEST_AUS.name);

				expect(countryInfo).toBe(TEST_AUS.flag);
			});

			it("when argument in uppercase", () => {
				const countryInfo = findFlagUrlByCountryName(TEST_AUS.name.toUpperCase());

				expect(countryInfo).toBe(TEST_AUS.flag);
			});

			it("when argument in lowercase", () => {
				const countryInfo = findFlagUrlByCountryName(TEST_AUS.name.toLowerCase());

				expect(countryInfo).toBe(TEST_AUS.flag);
			});
		});

		it("should correctly find flag by alt spelling", () => {
			const countryInfo = findFlagUrlByCountryName("A12");

			expect(countryInfo).toBe(TEST_AUS.flag);
		});

		it("should return empty string for incorrect arg", () => {
			expect(findFlagUrlByCountryName("111")).toBe("");
			expect(findFlagUrlByCountryName("")).toBe("");
			expect(findFlagUrlByCountryName("aassdd")).toBe("");
		});
	});

	describe("findFlagUrlByNationality", () => {
		describe("should return correct flag url for Australian", () => {
			it("when argument in capital case", () => {
				const countryInfo = findFlagUrlByNationality(TEST_AUS.demonym);
				expect(countryInfo).toBe(TEST_AUS.flag);
			});

			it("when argument in uppercase", () => {
				const countryInfo = findFlagUrlByNationality(TEST_AUS.demonym.toUpperCase());

				expect(countryInfo).toBe(TEST_AUS.flag);
			});

			it("when argument in lowercase", () => {
				const countryInfo = findFlagUrlByNationality(TEST_AUS.demonym.toLowerCase());

				expect(countryInfo).toBe(TEST_AUS.flag);
			});
		});

		it("should return empty string for incorrect arg", () => {
			expect(findFlagUrlByNationality("111")).toBe("");
			expect(findFlagUrlByNationality("")).toBe("");
			expect(findFlagUrlByNationality("aassdd")).toBe("");
		});
	});

	describe("findFlagUrlByIso2Code", () => {
		describe("should return correct flag url for Australia", () => {
			it("when argument in uppercase", () => {
				const countryInfo = findFlagUrlByIso2Code(TEST_AUS.iso2);

				expect(countryInfo).toBe(TEST_AUS.flag);
			});

			it("when argument in lowercase", () => {
				const countryInfo = findFlagUrlByIso2Code(TEST_AUS.iso2.toLowerCase());

				expect(countryInfo).toBe(TEST_AUS.flag);
			});
		});

		it("should return empty string for incorrect arg", () => {
			expect(findFlagUrlByIso2Code("111")).toBe("");
			expect(findFlagUrlByIso2Code("")).toBe("");
			expect(findFlagUrlByIso2Code("aassdd")).toBe("");
		});
	});

	describe("findFlagUrlByIso3Code", () => {
		describe("should return correct flag url for Australia", () => {
			it("when argument in uppercase", () => {
				const countryInfo = findFlagUrlByIso3Code(TEST_AUS.iso3);

				expect(countryInfo).toBe(TEST_AUS.flag);
			});

			it("when argument in lowercase", () => {
				const countryInfo = findFlagUrlByIso3Code(TEST_AUS.iso3.toLowerCase());

				expect(countryInfo).toBe(TEST_AUS.flag);
			});
		});

		it("should return empty string for incorrect arg", () => {
			expect(findFlagUrlByIso3Code("111")).toBe("");
			expect(findFlagUrlByIso3Code("")).toBe("");
			expect(findFlagUrlByIso3Code("aassdd")).toBe("");
		});
	});
});
