export default function formattedPage(lang) {
  let contentTitle = document.querySelector(".content__title");
  let content = document.querySelector(".content");
  let contentList = document.querySelector(".content__list");
  let banners = document.querySelector(".banners");
  let continueBtn = document.querySelector(".continue");
  if (lang === "ru") {
    content.style.marginRight = "36px";
    content.style.marginLeft = "34px";
    contentList.style.marginLeft = "8px";
    contentTitle.style.fontSize = "29px";
    contentTitle.style.letterSpacing = "-1px";
    banners.style.marginRight = "14px";
    banners.style.marginLeft = "4px";
    banners.style.marginTop = "58px";
    continueBtn.style.marginTop = "34px";
  }
  if (lang === "es" || lang === "nl") {
    content.style.marginRight = "50px";
    content.style.marginLeft = "40px";
    contentList.style.marginLeft = "20px";
    contentTitle.style.fontSize = "32px";
    banners.style.marginTop = "58px";
    continueBtn.style.marginTop = "29px";
  }
  if (lang === "fr") {
    content.style.marginRight = "58px";
    content.style.marginLeft = "30px";
    contentList.style.marginLeft = "35px";
    contentTitle.style.fontSize = "28px";
    contentTitle.style.letterSpacing = "-0.5px";
    banners.style.marginTop = "60px";
    continueBtn.style.marginTop = "36px";
  }
  if (lang === "zh") {
    banners.style.marginTop = "55px";
    continueBtn.style.marginTop = "35px";
  }
}
