//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu-list dibuka
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// klik di luar side bar untuk menghilangkan nav
