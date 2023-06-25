const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navList.classList.remove("active");
};

const superbalistEssay = document.querySelector("box-s");
const aiEssay = document.querySelector("box-ai");

superbalistEssay.addEventListener("click", () => GoToEssayOne());
aiEssay.addEventListener("click", () => GoToEssayTWo());

function GoToEssayOne() {
  window.location.replace(
    "https://sihle-mazibuko.github.io/Portfolio/essay.html"
  );
}
function GoToEssayTWo() {
  window.location.replace(
    "https://sihle-mazibuko.github.io/Portfolio/secondessay.html"
  );
}

const backToTop = document.querySelector("logo");

backToTop.addEventListener("scroll", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
