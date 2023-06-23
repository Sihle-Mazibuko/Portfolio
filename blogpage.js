const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const weeksMenu = document.querySelector(".weeks-menu");

const IconVisibility = () => {
  let scrollLeftValue = Math.ceil(weeksMenu.scrollLeft);
  let scrollableWidth = weeksMenu.scrollWidth - weeksMenu.clientWidth;

  leftBtn.style.display = scrollLeftValue > 0 ? "block" : "none";
  rightBtn.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
};

rightBtn.addEventListener("click", () => {
  weeksMenu.scrollLeft += 250;
  setTimeout(() => IconVisibility(), 50);
});

leftBtn.addEventListener("click", () => {
  weeksMenu.scrollLeft -= 250;
  setTimeout(() => IconVisibility(), 50);
});

window.onload = function () {
  rightBtn.style.display =
    weeksMenu.scrollWidth > weeksMenu.clientWidth ||
    weeksMenu.scrollWidth >= window.innerWidth
      ? "block"
      : "none";
  leftBtn.style.display = wee.scrollWidth >= window.innerWidth ? "" : "none";
};

window.onresize = function () {
  rightBtn.style.display =
    weeksMenu.scrollWidth > weeksMenu.clientWidth ||
    weeksMenu.scrollWidth >= window.innerWidth
      ? "block"
      : "none";
  leftBtn.style.display = wee.scrollWidth >= window.innerWidth ? "" : "none";

  let scrollLeftValue = Math.round(weeksMenu.scrollLeft);

  leftBtn.style.display = scrollLeftValue > 0 ? "block" : "none";
};

let activeDrag = false;

weeksMenu.addEventListener("mousemove", (drag) => {
  if (!activeDrag) return;
  weeksMenu.scrollLeft -= drag.movementX;
  IconVisibility();
  weeksMenu.classList.add("dragging");
});

document.addEventListener("mouseup", () => {
  activeDrag = false;
  weeksMenu.classList.remove("dragging");
});

weeksMenu.addEventListener("mousedown", () => {
  activeDrag = true;
});

const blogs = document.querySelectorAll(".blog-week");
const weekBtns = document.querySelectorAll(".week-btn");

const weekNav = function (weekBtnClick) {
  weekBtns.forEach((weekBtn) => {
    weekBtn.classList.remove("active");
  });

  blogs.forEach((blog) => {
    blog.classList.remove("active");
  });

  weekBtns[weekBtnClick].classList.add("active");
  blogs[weekBtnClick].classList.add("active");
};

weekBtns.forEach((weekBtn, i) => {
  weekBtn.addEventListener("click", () => {
    weekNav(i);
  });
});
