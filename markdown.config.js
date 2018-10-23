const { countries } = require("./src/data/index");

function paginate(list, pageSize, currentPage) {
	const begin = ((currentPage - 1) * pageSize);
	const end = begin + pageSize;

	return list.slice(begin, end);
}

module.exports = {
	transforms: {
		/* Match <!-- AUTO-GENERATED-CONTENT:START (LIST_OF_FLAGS) --> */
		LIST_OF_FLAGS(content, options) {
			const renderFlag = ({ flag, name }) => `<td><div >${name}</div><img src="${flag}" alt="Flag of ${name}" title="${name}" height="30" /></td>`;
			const renderRow = (countries) => {
				return `<tr>${countries.map(renderFlag).join("")}</tr>`

			};
			const pageSize = 10;
			const numberOfPages = Math.ceil(countries.length / pageSize);
			return `<table style="font-size: 10px;">${Array(numberOfPages).fill(0).map((_, index) => renderRow(paginate(countries, pageSize, index + 1))).join("\n")}</table>`;
		}
	},
};
