const countries = [
	{
		name: "Australia",
		demonym: "Australian",
		flag: "http://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
		iso2: "AU",
		iso3: "AUS",
	},
	{
		name: "Austria",
		demonym: "Austrian",
		flag: "http://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
		iso2: "AT",
		iso3: "AUT",
	},
	{
		name: "Azerbaijan",
		demonym: "Azerbaijani",
		flag: "http://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
		iso2: "AZ",
		iso3: "AZE",
	},
	{
		name: "Bahrain",
		demonym: "Bahraini",
		flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",
		iso2: "BH",
		iso3: "BHR",
	},
	{
		name: "Belgium",
		demonym: "Belgian",
		flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg",
		iso2: "BE",
		iso3: "BEL",
	},
	{
		name: "Brazil",
		demonym: "Brazilian",
		flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
		iso2: "BR",
		iso3: "BRA",
	},
	{
		name: "Canada",
		demonym: "Canadian",
		flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
		iso2: "CA",
		iso3: "CAN",
	},
	{
		name: "Chile",
		demonym: "Chilean",
		flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
		iso2: "CL",
		iso3: "CHL",
	},
	{
		name: "China",
		demonym: "Chinese",
		flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
		iso2: "CN",
		iso3: "CHN",
	},
	{
		name: "Colombia",
		demonym: "Colombian",
		flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
		iso2: "CO",
		iso3: "COL",
	},
	{
		name: "Czech Republic",
		demonym: "Czech",
		flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
		iso2: "CZ",
		iso3: "CZE",
	},
	{
		name: "Denmark",
		demonym: "Danish",
		flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
		iso2: "DK",
		iso3: "DNK",
	},
	{
		name: "Finland",
		demonym: "Finnish",
		flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
		iso2: "FI",
		iso3: "FIN",
	},
	{
		name: "France",
		demonym: "French",
		flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
		iso2: "FR",
		iso3: "FRA",
	},
	{
		name: "Germany",
		demonym: "German",
		flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
		iso2: "DE",
		iso3: "DEU",
	},
	{
		name: "Hungary",
		demonym: "Hungarian",
		flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
		iso2: "HU",
		iso3: "HUN",
	},
	{
		name: "India",
		demonym: "Indian",
		flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
		iso2: "IN",
		iso3: "IND",
	},
	{
		name: "Indonesia",
		demonym: "Indonesian",
		flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
		iso2: "ID",
		iso3: "IDN",
	},
	{
		name: "Ireland",
		demonym: "Irish",
		flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
		iso2: "IE",
		iso3: "IRL",
	},
	{
		name: "Italy",
		demonym: "Italian",
		flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
		iso2: "IT",
		iso3: "ITA",
	},
	{
		name: "Japan",
		demonym: "Japanese",
		flag: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
		iso2: "JP",
		iso3: "JPN",
	},
	{
		name: "Liechtenstein",
		demonym: "Liechtensteiner",
		flag: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",
		iso2: "LI",
		iso3: "LIE",
	},
	{
		name: "Malaysia",
		demonym: "Malaysian",
		flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
		iso2: "MY",
		iso3: "MYS",
	},
	{
		name: "Mexico",
		demonym: "Mexican",
		flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
		iso2: "MX",
		iso3: "MEX",
	},
	{
		name: "Monaco",
		demonym: "Monegasque",
		flag: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",
		iso2: "MC",
		iso3: "MCO",
	},
	{
		name: "Netherlands",
		demonym: "Dutch",
		flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
		iso2: "NL",
		iso3: "NLD",
	},
	{
		name: "New Zealand",
		demonym: "New Zealander",
		flag: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
		iso2: "NZ",
		iso3: "NZL",
	},
	{
		name: "Poland",
		demonym: "Polish",
		flag: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
		iso2: "PL",
		iso3: "POL",
	},
	{
		name: "Portugal",
		demonym: "Portuguese",
		flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
		iso2: "PT",
		iso3: "PRT",
	},
	{
		name: "Russia",
		demonym: "Russian",
		flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
		iso2: "RU",
		iso3: "RUS",
	},
	{
		name: "Singapore",
		demonym: "Singaporean",
		flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
		iso2: "SG",
		iso3: "SGP",
		altSpellings: ["SG", "Singapura", "Republik Singapura"],
	},
	{
		name: "South Africa",
		demonym: "South African",
		flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
		iso2: "ZA",
		iso3: "ZAF",
	},
	{
		name: "Spain",
		demonym: "Spanish",
		flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
		iso2: "ES",
		iso3: "ESP",
	},
	{
		name: "Sweden",
		demonym: "Swedish",
		flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
		iso2: "SE",
		iso3: "SWE",
	},
	{
		name: "Switzerland",
		demonym: "Swiss",
		flag: "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",
		iso2: "CH",
		iso3: "CHE",
	},
	{
		name: "Thailand",
		demonym: "Thai",
		flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
		iso2: "TH",
		iso3: "THA",
	},
	{
		name: "United Kingdom",
		altSpellings: ["UK"],
		demonym: "British",
		flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
		iso2: "GB",
		iso3: "GBR",
	},
	{
		name: "United States",
		altSpellings: ["USA"],
		demonym: "American",
		flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
		iso2: "US",
		iso3: "USA",
	},
	{
		name: "United Arab Emirates",
		demonym: "Emirati",
		flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
		iso2: "AE",
		iso3: "ARE",
		altSpellings: ["AE", "UAE"],
	},
	{
		name: "Uruguay",
		demonym: "Uruguayan",
		flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",
		iso2: "UY",
		iso3: "URY",
	},
	{
		name: "Venezuela",
		demonym: "Venezuelan",
		flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg",
		iso2: "VE",
		iso3: "VEN",
	},
];

function findFlagUrlByPredicate(predicate) {
	if (!predicate) {
		return "";
	}

    const countryInfo = countryList.find(predicate) || { flag: ""};

	return countryInfo.flag;
}

module.exports = {
    countries,
    
    findFlagUrlByCountryName(countryName) {
        const countryInfo =
            countryList.find(({ name }) => name === countryName) ||
            countryList.find(({ altSpellings }) => altSpellings && altSpellings.some(item => item === countryName));
    
        if (countryInfo) {
            return countryInfo.flag || "";
        }
    
        return "";
    },

    findFlagUrlByNationality(nationality) {
        return findFlagUrlByPredicate(({ demonym }) => demonym === nationality);
    },

    findFlagUrlByIso2Code(iso2Code) {
        return findFlagUrlByPredicate(({ iso2 }) => iso2 === iso2Code);
    },

    findFlagUrlByIso3Code(iso3Code) {
        return findFlagUrlByPredicate(({ iso3 }) => iso3 === iso3Code);
    }
};
