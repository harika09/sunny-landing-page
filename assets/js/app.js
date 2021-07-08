const navtoggle = document.querySelector(".nav-menu-toggle");
const navMenu = document.querySelector(".nav-menu");

navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navtoggle.classList.remove("active");
});
navtoggle.addEventListener("click", () => {
  navtoggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});
