import localizationParse from "./localizationParse";

export default async function translatePage(userLang) {
  let headerRestore = document.querySelector(".header__restore");
  let contentTitle = document.querySelector(".content__title");
  let UnlimDocs = document.querySelector(".unlim-docs");
  let exportClouds = document.querySelector(".export");
  let textRecog = document.querySelector(".no-ads");
  let monthlyBannerPeriod = document.querySelector(".monthly .banner__period");
  let monthlyPerPeriod = document.querySelector(".monthly .banner__per-period");
  let monthlyBannerAddon = document.querySelector(".monthly .banner__addon");
  let monthlyBannerPricePerPeriod = document.querySelector(
    ".monthly .banner__price-per-period"
  );
  let yearlyBannerPeriod = document.querySelector(".yearly .banner__period");
  let yearlyPerPeriod = document.querySelector(".yearly .banner__per-period");
  let yearlyBannerAddon = document.querySelector(".yearly .banner__addon");
  let yearlyBannerPricePerPeriod = document.querySelector(
    ".yearly .banner__price-per-period"
  );
  let bannerPromo = document.querySelector(".banner__promo");
  let continueBtn = document.querySelector(".continue");
  let renewable = document.querySelector(".renewable");
  let terms = document.querySelector(".terms");
  let policy = document.querySelector(".policy");

  let localization = await localizationParse(userLang);

  headerRestore.insertAdjacentHTML("afterbegin", localization["Restore"]);
  contentTitle.insertAdjacentHTML(
    "afterbegin",
    localization["Unlimited Access<br>to All Features"]
  );
  UnlimDocs.insertAdjacentHTML(
    "afterbegin",
    localization["Unlimited documents"]
  );
  exportClouds.insertAdjacentHTML("afterbegin", localization["Count mode"]);
  textRecog.insertAdjacentHTML(
    "afterbegin",
    localization["Text recognition (OCR)"]
  );
  monthlyBannerPeriod.insertAdjacentHTML("afterbegin", localization["Monthly"]);
  monthlyPerPeriod.insertAdjacentHTML(
    "afterbegin",
    localization["<strong>{{price}}</strong><br>per month"]
  );
  monthlyBannerAddon.insertAdjacentHTML(
    "afterbegin",
    localization["3 DAYS FREE"]
  );
  monthlyBannerPricePerPeriod.insertAdjacentHTML(
    "afterbegin",
    localization["price per month"]
  );
  yearlyBannerPeriod.insertAdjacentHTML("afterbegin", localization["Annually"]);
  bannerPromo.insertAdjacentHTML("afterbegin", localization["-83%"]);
  yearlyPerPeriod.insertAdjacentHTML(
    "afterbegin",
    localization["<strong>{{price}}</strong><br>per year"]
  );
  yearlyBannerAddon.insertAdjacentHTML(
    "afterbegin",
    localization["MOST POPULAR"]
  );
  yearlyBannerPricePerPeriod.insertAdjacentHTML(
    "afterbegin",
    localization["{{price}}/month"]
  );
  continueBtn.insertAdjacentHTML("afterbegin", localization["Continue"]);
  renewable.insertAdjacentHTML(
    "afterbegin",
    localization["Auto-renewable. Cancel anytime."]
  );
  terms.insertAdjacentHTML("afterbegin", localization["Terms of Use"]);
  policy.insertAdjacentHTML("afterbegin", localization["Privacy Policy"]);
}
