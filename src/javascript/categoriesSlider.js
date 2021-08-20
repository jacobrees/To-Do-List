const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = () => document.querySelectorAll('.category');

let counter;

const updateNextPrevBtns = () => {
  if (counter < slides().length - 1) {
    nextBtn.style.visibility = 'visible';
    nextBtn.style.pointerEvents = 'all';
    nextBtn.style.cursor = 'pointer';
  } else {
    nextBtn.style.visibility = 'hidden';
    nextBtn.style.pointerEvents = 'none';
    nextBtn.style.cursor = 'default';
  }
  if (counter > 0) {
    prevBtn.style.visibility = 'visible';
    prevBtn.style.pointerEvents = 'all';
    prevBtn.style.cursor = 'pointer';
  } else {
    prevBtn.style.visibility = 'hidden';
    prevBtn.style.pointerEvents = 'none';
    prevBtn.style.cursor = 'default';
  }
};

const slideCategories = () => {
  updateNextPrevBtns();
  slides().forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const setSlides = () => {
  slides().forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
  counter = 0;
  slideCategories();
  updateNextPrevBtns();
};

const setSliderListeners = () => {
  nextBtn.addEventListener('click', () => {
    counter += 1;
    slideCategories();
  });

  prevBtn.addEventListener('click', () => {
    counter -= 1;
    slideCategories();
  });

  const smallScreenSize = window.matchMedia('(max-width: 637.98px)');

  window.addEventListener('resize', () => {
    if (!smallScreenSize.matches) {
      slides().forEach((slide) => {
        slide.style.transform = 'translateX(0%)';
      });
      counter = 0;
      updateNextPrevBtns();
    }
  });
};

export { setSlides, setSliderListeners };