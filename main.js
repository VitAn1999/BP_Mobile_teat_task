let inputLang = window.location.search.split("=")[1];

let userLang = inputLang || window.navigator.language.substr(0, 2);

let state = null;
let title = document.title;
let url = new URL(window.location);
url.searchParams.set("lang", userLang);
history.replaceState(state, title, url);

const localizationData = async (lang) => {
  let response = await fetch(`./Localizations/${lang}.json`);
  if (response.ok) {
    let json = await response.json();
    console.log(json);
  } else {
    console.log(`The request failed. Error code ${response.status}`);
    localizationData("en");
  }
};

localizationData(userLang);
document.addEventListener("DOMContentLoaded", () => {});

console.log(window.location);
