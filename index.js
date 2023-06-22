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

const blogPageLink = document.querySelector("blogs-page");
const essayPageLink = document.querySelector("essays-page");

blogPageLink.addEventListener("click", () => GoToBlogs());

function GoToBlogs() {
  window.location.replace(
    "https://sihle-mazibuko.github.io/Portfolio/essay.html"
  );
}
