(() => {
  // DOM Element
  const counter = document.querySelector(".counter");
  const buttons = Array.from(document.querySelectorAll(".action-buttons .btn"));

  // variables
  let count = 0;

  // Functions
  function setCountValue(value) {
    counter.textContent = value;
  }

  // set Initial count
  setCountValue(count);

  // Events

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonClassList = button.classList;
      if (buttonClassList.contains("decrease-btn")) count--;
      else if (buttonClassList.contains("increase-btn")) count++;
      else count = 0;

      setCountValue(count);
    });
  });
})();
