// version: 1
// // DOM Elements
// const buttons = Array.from(document.querySelectorAll(".faq__controls button"));
// const answers = Array.from(document.querySelectorAll(".faq__answer"));

// // variables
// let prevControls;

// // Function
// function handlePreviousController(prevControls) {
//   prevControls[0].classList.add("display-btn");
//   prevControls[0].classList.remove("hide-btn");

//   prevControls[1].classList.add("hide-btn");
//   prevControls[1].classList.remove("display-btn");
// }

// function hideAnswersExceptCurrent(answers, currentAnswer) {
//   answers.forEach((answer) => {
//     if (answer !== currentAnswer) {
//       answer.classList.remove("display-answer");
//     }
//   });
// }

// // Event Listeners
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (prevControls) {
//       handlePreviousController(prevControls);
//     }

//     const faqControls = button.parentElement;
//     const faqControlsBtn = [...faqControls.children];

//     const currentAnswer = faqControls.parentElement.nextElementSibling;

//     faqControlsBtn.forEach((faqBtn) => {
//       faqBtn.classList.toggle("hide-btn", faqBtn === button);
//       faqBtn.classList.toggle("display-btn", faqBtn !== button);
//     });

//     hideAnswersExceptCurrent(answers, currentAnswer);

//     currentAnswer.classList.toggle("display-answer");

//     prevControls = faqControlsBtn;
//   });
// });

// version: 2
//  DOM Elements
const faqList = document.querySelector(".faq__list");

// Function
function resetAllFaqItem() {
  Array.from(document.querySelectorAll(".faq__item")).forEach((item) => {
    item.querySelector(".faq__answer")?.classList.remove("display-answer");

    item
      .querySelector(".faq__toggle-btn--open")
      .classList.remove("display-btn", "hide-btn");
    item
      .querySelector(".faq__toggle-btn--close")
      .classList.remove("hide-btn", "display-btn");
  });
}
function toggleFaqItems(item, isOpenButton) {
  const answer = item.querySelector(".faq__answer");
  const openBtn = item.querySelector(".faq__toggle-btn--open");
  const closeBtn = item.querySelector(".faq__toggle-btn--close");
  console.log(openBtn, closeBtn);
  if (isOpenButton) {
    answer.classList.add("display-answer");
    openBtn.classList.add("hide-btn");
    closeBtn.classList.add("display-btn");
  } else {
    answer.classList.remove("display-answer");
    openBtn.classList.remove("hide-btn");
    closeBtn.classList.remove("display-btn");
  }
}

// Event Listener
faqList.addEventListener("click", (event) => {
  const button = event.target.closest(".faq__toggle-btn");
  if (!button) return;

  const faqItem = event.target.closest(".faq__item");
  const isOpenButton = button.classList.contains("faq__toggle-btn--open");

  resetAllFaqItem();
  toggleFaqItems(faqItem, isOpenButton);
});
