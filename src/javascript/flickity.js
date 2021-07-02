const setFlickity = () => {
  const carousel = document.querySelector('.categories-container');
  const flkty = new Flickity(carousel, { // eslint-disable-line
    contain: false,
    freeScroll: true,
    watchCSS: true,
    cellAlign: 'center',
    prevNextButtons: true,
    pageDots: false,
  });
};

export default setFlickity;