const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let counter;

const updateNextPrevBtns = () => {
  const slides = document.querySelectorAll('.category');
  if (counter < slides.length - 1) {
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
  const slides = document.querySelectorAll('.category');
  updateNextPrevBtns();
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const setSlides = () => {
  const slides = document.querySelectorAll('.category');

  slides.forEach((slide, index) => {
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
      const slides = document.querySelectorAll('.category');
      slides.forEach((slide) => {
        slide.style.transform = 'translateX(0%)';
      });
      counter = 0;
      updateNextPrevBtns();
    }
  });
};

export { setSlides, setSliderListeners };