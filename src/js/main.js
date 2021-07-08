import getUrl from "./moduls/getUrl";
import localization from "./moduls/localizationParse";
import toggleBtn from "./moduls/toggleBtn";

document.addEventListener("DOMContentLoaded", async () => {
  let userLang = getUrl();
  toggleBtn();
  let localData = await localization(userLang);
  console.log(localData);
});
