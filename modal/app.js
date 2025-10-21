// DOM Elements
const modal = document.querySelector(".modal-wrapper");
const modalBody = document.querySelector(".modal__body");
const modalOpenBtn = document.querySelector(".modal__open-btn");
const modalCloseBtn = document.querySelector(".modal__close-btn");

console.log(modal, modalOpenBtn, modalOpenBtn);

// Toggle Modal Body

function toggleModalBody(isOpen) {
  modalBody.classList.toggle("display-modal", isOpen);
  modal.classList.toggle("modal-overlay", isOpen);
}

// Event Listeners

modalOpenBtn.addEventListener("click", () => toggleModalBody(true));

modalCloseBtn.addEventListener("click", () => toggleModalBody(false));
