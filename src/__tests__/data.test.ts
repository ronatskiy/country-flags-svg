import countries from "../data/countries";

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
});
