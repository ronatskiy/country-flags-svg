import { countries } from "country-flags-svg";

function renderIso(label, iso) {
    return `${label}: <strong class="country-box__iso-value">"${iso}"</strong>`;
}

function createCountryBox({ name, flag, iso2, iso3 }) {
    return `
    <div class="country-box">
      <span class="country-box__country-name">${name}</span>
      <span class="country-box__iso">${renderIso("ISO2", iso2)} ${renderIso("ISO3", iso3)}</span>
      <img class="country-box__country-flag" src="${flag}" alt="Flag for ${name}" />
    </div>
`;
}

document.getElementById("app").innerHTML = `
  <div class="country-list">
      ${countries.map(createCountryBox).join("")}    
  </div>
`;
