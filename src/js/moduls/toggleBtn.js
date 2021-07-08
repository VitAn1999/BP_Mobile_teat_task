import { MONTHLY_HREF, YEARLY_HREF } from "./constants";

export default function toggleBtn() {
  let bannerYearly = document.querySelector(".banner_yearly");
  let bannerMonthly = document.querySelector(".banner_monthly");
  let continueBtn = document.querySelector(".continue");

  bannerMonthly.addEventListener("click", () => {
    if (!bannerMonthly.classList.contains("active")) {
      bannerMonthly.classList.add("active");
      bannerYearly.classList.remove("active");
      continueBtn.setAttribute("href", MONTHLY_HREF);
    }
  });
  bannerYearly.addEventListener("click", () => {
    if (!bannerYearly.classList.contains("active")) {
      bannerYearly.classList.add("active");
      bannerMonthly.classList.remove("active");
      continueBtn.setAttribute("href", YEARLY_HREF);
    }
  });
}
