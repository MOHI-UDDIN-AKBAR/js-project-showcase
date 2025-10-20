// DOM Elements
const headerNav = document.querySelector(".header__nav");
const headerToggleBtn = document.querySelector(".header__toggle-btn");

// Variables
let isOpen = false;

// Event Listeners
headerToggleBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  // Open Header
  headerToggleBtn.classList.toggle("open", isOpen);
  headerNav.classList.toggle("drop-header-nav", isOpen);

  // Close Header
  headerToggleBtn.classList.toggle("close", !isOpen);
  headerNav.classList.toggle("pull-back-header-nav", !isOpen);
});
