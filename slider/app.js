// ==============VERSION ONE ===============
/* 

// ========= CONSTANTS =========
const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700",
    alt: "sun light passing",
  },
  {
    src: "https://images.unsplash.com/photo-1529419412599-7bb870e11810?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700",
    alt: "bed of orange flowers",
  },
  {
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    alt: "aerial photo of seashore",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    alt: "a painting of a river",
  },
];
const slideRightToLeft = "right-to-left";
const slideLeftToRight = "left-to-right";

// ========= STATE=========
let imageNumber = 1;

// ======== DOM ELEMENTS =========
const carousel = document.querySelector(".carousel");
const carouselControls = document.querySelector(".carousel__controls");

// ========== FUNCTIONS ==========
function addTransition(slideType) {
  const carouselSlider = carousel.querySelector(".carousel__slide");
  setTimeout(() => {
    carouselSlider.classList.remove(slideType);
  }, 0);
}

function renderCarouselImage(carouselImage, imageNumber, slideType = "") {
  console.log("coming One");
  if (!carouselImage || !imageNumber) return;
  console.log("coming two");

  console.log(carouselImage, imageNumber);
  const html = `<figure class="carousel__slide ${
    slideType === "" ? "" : slideType
  }">
          <img
            src="${carouselImage.src}"
            alt="${carouselImage.alt}"
            loading="lazy"
            class="carousel__image"
            width="400"
            height="250"
          />
          <figcaption class="carousel__caption">${imageNumber}</figcaption>
        </figure>`;

  carousel.innerHTML = html;
  if (slideType) {
    addTransition(slideType);
  }
}

// ======== EVENT HANDLERS ============

function handleCarouselImage(e) {
  const prevBtn = e.target.closest(".carousel__btn-prev");

  const nextBtn = e.target.closest(".carousel__btn-next");
  if (nextBtn && imageNumber < carouselImages.length) {
    imageNumber++;
    renderCarouselImage(
      carouselImages[imageNumber - 1],
      imageNumber,
      "right-to-left"
    );
    console.log(nextBtn);
  } else if (prevBtn && imageNumber > 1) {
    imageNumber--;
    renderCarouselImage(
      carouselImages[imageNumber - 1],
      imageNumber,
      "left-to-right"
    );
    console.log(prevBtn);
  }
}

// ======== EVENT LISTENERS ===========

carouselControls.addEventListener("click", (e) => handleCarouselImage(e));

// Initial render
renderCarouselImage(carouselImages[0], imageNumber);

*/

// ========================= VERSION TWO =======================

// ========= CONSTANTS =========
const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700",
    alt: "sun light passing",
  },
  {
    src: "https://images.unsplash.com/photo-1529419412599-7bb870e11810?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700",
    alt: "bed of orange flowers",
  },
  {
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    alt: "aerial photo of seashore",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    alt: "a painting of a river",
  },
];

// ========= STATE=========
let currentImageNumber = 1;

// ======== DOM ELEMENTS =========
const carousel = document.querySelector(".carousel");
const carouselControls = document.querySelector(".carousel__controls");

// ========== FUNCTIONS ==========

function getCarouselFigures() {
  return [...carousel.querySelectorAll(".carousel__slide")];
}

function moveToPrevImage() {
  currentImageNumber--;

  const carouselFigures = getCarouselFigures();
  carouselFigures.forEach((figure) => {
    const { width: figureWidth } = figure.getBoundingClientRect();

    figure.style.left = `calc(${figure.style.left} + ${figureWidth}px)`;
  });
}

function moveToNextImage() {
  const carouselFigures = getCarouselFigures();

  carouselFigures.forEach((figure) => {
    const { width: figureWidth } = figure.getBoundingClientRect();
    figure.style.left = `-${figureWidth * currentImageNumber}px`;
  });

  currentImageNumber++;
}

function renderCarouselImages() {
  if (!carouselImages.length) return;

  const html = carouselImages
    .map(({ src, alt }, i) => {
      return `<figure class="carousel__slide" data-id="${i}">
          <img
            src="${src}"
            alt="${alt}"
            loading="lazy"
            class="carousel__image"
            width="400"
            height="250"
          />
          <figcaption class="carousel__caption">${i + 1}</figcaption>
        </figure>`;
    })
    .join("");

  carousel.innerHTML = html;
}

// ======== EVENT HANDLERS ============

function handleCarouselImage(e) {
  const prevBtn = e.target.closest(".carousel__btn-prev");
  const nextBtn = e.target.closest(".carousel__btn-next");

  if (nextBtn && currentImageNumber < carouselImages.length) {
    moveToNextImage();
  } else if (prevBtn && currentImageNumber > 1) {
    moveToPrevImage();
  }
}

// ======== EVENT LISTENERS ===========

carouselControls.addEventListener("click", (e) => handleCarouselImage(e));

// Initial render
renderCarouselImages();
