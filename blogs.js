const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const iconVisibility = () => {
  let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
  let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

  btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
  btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
};

btnRight.addEventListener("click", () => {
  tabMenu.scrollLeft += 200;
  setTimeout(() => iconVisibility(), 50);
});

btnLeft.addEventListener("click", () => {
  tabMenu.scrollLeft -= 200;
  setTimeout(() => iconVisibility(), 50);
});

window.onload = function () {
  btnRight.sty.display =
    tabMenu.scrollWidth > tabMenu.clientWidth ||
    tabMenu.scrollWidth >= window.innerWidth
      ? "block"
      : "none";
  btnLeft.style.display =
    tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
};

window.onresize = function () {
  btnRight.sty.display =
    tabMenu.scrollWidth > tabMenu.clientWidth ||
    tabMenu.scrollWidth >= window.innerWidth
      ? "block"
      : "none";
  btnLeft.style.display =
    tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

  let scrollLeftValue = Math.round(tabMenu.scrollLeft);

  btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
};

const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tabNavigation = function (tabBtnClick) {
  tabBtns.forEach((tabBtn) => {
    tabBtn.classList.remove("active");
  });

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  tabBtns[tabBtnClick].classList.add("active");
  tabs[tabBtnClick].classList.add("active");
};

tabBtns.forEach((tabBtn, i) => {
  tabBtn.addEventListener("click", () => {
    tabNavigation(i);
  });
});

const backToTop = document.querySelector("logo");

backToTop.addEventListener("scroll", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
