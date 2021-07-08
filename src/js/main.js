let inputLang = window.location.search.split("=")[1];

let userLang = inputLang || window.navigator.language.substr(0, 2);

let url = new URL(window.location);
url.searchParams.set("lang", userLang);
history.replaceState(null, document.title, url);

function replacePrice(obj, priceMonthPerYear, pricePerYear, pricePerMonth) {
  Object.keys(obj).forEach((el) => {
    if (el.includes("{{price}}/month")) {
      obj[el] = obj[el].replace(/{{price}}/g, priceMonthPerYear);
    }
    if (el.includes("<strong>{{price}}</strong><br>per year")) {
      obj[el] = obj[el].replace(/{{price}}/g, pricePerYear);
    }
    if (el.includes("<strong>{{price}}</strong><br>per month")) {
      obj[el] = obj[el].replace(/{{price}}/g, pricePerMonth);
    }
    if (el.includes("price per month")) {
      obj[el] = obj[el].replace(/{{price}}/g, pricePerMonth);
    }
  });
}

const getLocalizationData = async (lang) => {
  let response = await fetch(`./Localizations/${lang}.json`);
  if (response.ok) {
    let pricePerYear = "$19.99";
    let priceMonthPerYear = "$1.66";
    let pricePerMonth = "$9.99";
    let localizationData = await response.json();
    localizationData["price per month"] = localizationData["{{price}}/month"];
    replacePrice(
      localizationData,
      priceMonthPerYear,
      pricePerYear,
      pricePerMonth
    );
    console.log(localizationData);
    return localizationData;
  } else {
    console.log(`The request failed. Error code ${response.status}`);
    getLocalizationData("en");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  let bannerYearly = document.querySelector(".banner_yearly");
  let bannerMonthly = document.querySelector(".banner_monthly");
  let continueBtn = document.querySelector(".continue");
  let monthlyHref = "https://apple.com/";
  let yearlyHref = "https://google.com/";
  bannerMonthly.addEventListener("click", () => {
    if (!bannerMonthly.classList.contains("active")) {
      bannerMonthly.classList.add("active");
      bannerYearly.classList.remove("active");
      continueBtn.setAttribute("href", monthlyHref);
    }
  });
  bannerYearly.addEventListener("click", () => {
    if (!bannerYearly.classList.contains("active")) {
      bannerYearly.classList.add("active");
      bannerMonthly.classList.remove("active");
      continueBtn.setAttribute("href", yearlyHref);
    }
  });
  let localData = await getLocalizationData(userLang);
  console.log(localData);
});
