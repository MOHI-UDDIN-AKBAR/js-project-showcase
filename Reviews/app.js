const reviews = [
  {
    name: "Sarah Lopez",
    position: "Marketing Manager",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
    text: "This productivity app completely transformed the way my team collaborates. The interface is intuitive, and the real-time updates keep everyone on track. I only wish the analytics dashboard had more customization options.",
  },
  {
    name: "David Kim",
    position: "Software Engineer",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700",
    text: "I’ve tried several code editors, but this one feels the most lightweight and responsive. The extensions ecosystem is great, though I’d appreciate better Git integration out of the box.",
  },
  {
    name: "Priya Nair",
    position: "Project Coordinator",
    img: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700",
    text: "The platform makes managing multiple projects effortless. Task automation saves us hours every week. However, the mobile version still needs optimization—it feels a bit clunky compared to desktop.",
  },
  {
    name: "Michael Chen",
    position: "Product Designer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700",
    text: "I love how visually polished and user-friendly the tool is. It simplifies complex design tasks and improves collaboration with developers. A dark mode option would make it perfect.",
  },
  {
    name: "Julia Thompson",
    position: "Customer Support Lead",
    img: "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700",
    text: "Our response times dropped significantly after switching to this CRM. The ticketing system is smooth and easy to navigate. Customer data sync occasionally lags, but overall, it’s a great experience.",
  },
];

// DOM Elements
const reviewCardAvatar = document.querySelector(".review-card__avatar");
const reviewCardName = document.querySelector(".review-card__name");
const reviewCardPosition = document.querySelector(".review-card__position");
const reviewCardText = document.querySelector(".review-card__text");

const btnPrev = document.querySelector(".reviews__btn-prev");
const btnNext = document.querySelector(".reviews__btn-next");
const btnRandom = document.querySelector(".reviews__btn-random");

//  State
let currentIndex = 0;

// Functions
function updateReview(index) {
  const { name, img, position, text } = reviews[index];
  reviewCardAvatar.src = img;
  reviewCardAvatar.alt = name;
  reviewCardName.textContent = name;
  reviewCardPosition.textContent = position;
  reviewCardText.textContent = text;
}

function showPrevReview() {
  if (currentIndex > 0) {
    updateReview(--currentIndex);
  }
}

function showNextReview() {
  if (currentIndex < reviews.length - 1) {
    updateReview(++currentIndex);
  }
}

function showRandomReview() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * (reviews.length - 1));
  } while (randomIndex === currentIndex);
  currentIndex = randomIndex;
  updateReview(currentIndex);
}

// Event Listeners
btnPrev.addEventListener("click", showPrevReview);
btnNext.addEventListener("click", showNextReview);
btnRandom.addEventListener("click", showRandomReview);

// Init
updateReview(currentIndex);
