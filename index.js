const { countries, flagUrls } = require("./data/index");
const api = require("./lib/api");

module.exports = {
    countries,
	flagUrls,
	...api,
};
