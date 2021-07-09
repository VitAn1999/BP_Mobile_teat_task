import getUrl from "./moduls/getUrl";
import translatePage from "./moduls/translatePage";
import formattedPage from "./moduls/formattedPage";
import toggleBtn from "./moduls/toggleBtn";

document.addEventListener("DOMContentLoaded", async () => {
  let userLang = getUrl();
  toggleBtn();
  translatePage(userLang);
  formattedPage(userLang);
});
