// DOM Elements
const header = document.querySelector(".header");
const navBar = document.querySelector(".nav");
const menuBtn = document.querySelector(".header__menu-bar");
const closeBtn = document.querySelector(".nav__close-btn");

// Toggle Navbar Function
function toggleNavBar(isOpen) {
  header.classList.toggle("overflow-visible", isOpen);
  navBar.classList.toggle("show-navbar", isOpen);
}

// Event Listeners
menuBtn.addEventListener("click", () => toggleNavBar(true));

closeBtn.addEventListener("click", () => toggleNavBar(false));

closeBtn.addEventListener("mouseenter", () => {
  closeBtn.classList.add("rotate");
});

closeBtn.addEventListener("mouseleave", () => {
  closeBtn.classList.remove("rotate");
});
