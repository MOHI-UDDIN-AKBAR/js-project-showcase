import menu from "./basic.js";

// DOM Elements
const menuItemsContainer = document.querySelector(".menu__items");
const categoryButtons = document.querySelectorAll(".menu__category-btn");

// Render Menu Items
function renderMenuItems(menuData = []) {
  if (!menuData && !menuData.length) return;

  const html = menuData
    .map((item) => {
      const { title, price, img, desc } = item;
      return `<article class="menu-item">
        <figure class="menu-item__figure">
        <img
        src=${img}
        alt=${title}
        loading="lazy"
        class="menu-item__image"
        />
        <figcaption class="menu-item__details">
        <header class="menu-item__header">
        <h3 class="menu-item__name">${title}</h3>
        <span class="menu-item__price">$${price}</span>
        </header>
        <p class="menu-item__description">
        ${desc}
        </p>
        </figcaption>
        </figure>
        </article>`;
    })
    .join("");
  menuItemsContainer.innerHTML =
    html || `<p class="menu__empty">No Items Found</p>`;
}

// Filter Menu Items By Category
function filterMenuItemsByCategory(category) {
  if (category === "all") {
    return menu;
  } else {
    return menu.filter(
      (menuItem) => menuItem.category === category.toLowerCase()
    );
  }
}

// Event Listener
categoryButtons.forEach((category) => {
  category.addEventListener("click", () => {
    const selectedCategory = category.textContent.trim().toLowerCase();
    const filteredMenuItems = filterMenuItemsByCategory(selectedCategory);
    renderMenuItems(filteredMenuItems);
  });
});

//  Initial Render
document.addEventListener("DOMContentLoaded", () => renderMenuItems(menu));
