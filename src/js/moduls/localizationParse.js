import {
  PRICE_PER_YEAR,
  PRICE_MONTH_PER_YEAR,
  PRICE_PER_MONTH,
} from "./constants";

export default async function localizationParse(langName) {
  const replacePrice = function (
    obj,
    priceMonthPerYear,
    pricePerYear,
    pricePerMonth
  ) {
    Object.keys(obj).forEach((el) => {
      if (el.includes("{{price}}/month")) {
        obj[el] = obj[el].replace(/{{price}}\//g, `${priceMonthPerYear} `);
      }
      if (el.includes("<strong>{{price}}</strong><br>per year")) {
        obj[el] = obj[el].replace(/{{price}}/g, pricePerYear);
      }
      if (el.includes("<strong>{{price}}</strong><br>per month")) {
        obj[el] = obj[el].replace(/{{price}}/g, pricePerMonth);
      }
      if (el.includes("price per month")) {
        obj[el] = obj[el].replace(/{{price}}\//g, `${pricePerMonth} `);
      }
    });
  };

  const getLocalizationData = async (lang) => {
    let response = await fetch(`../assets/localizations/${lang}.json`);
    if (response.ok) {
      let localizationData = await response.json();
      localizationData["price per month"] = localizationData["{{price}}/month"];
      replacePrice(
        localizationData,
        PRICE_MONTH_PER_YEAR,
        PRICE_PER_YEAR,
        PRICE_PER_MONTH
      );
      return localizationData;
    } else {
      console.log(`The request failed. Error code ${response.status}`);
      getLocalizationData("en");
    }
  };

  return getLocalizationData(langName);
}
