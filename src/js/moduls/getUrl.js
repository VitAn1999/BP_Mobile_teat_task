export default function getUrl() {
  let inputLang = window.location.search.split("=")[1];
  let userLang = inputLang || window.navigator.language.substr(0, 2);
  let url = new URL(window.location);
  url.searchParams.set("lang", userLang);
  history.replaceState(null, document.title, url);
  return userLang;
}
