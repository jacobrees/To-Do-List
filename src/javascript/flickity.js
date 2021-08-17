const setFlickity = () => {
  const Flickity = require('flickity'); // eslint-disable-line
  const carousel = document.querySelector('.categories-container'); // eslint-disable-line
  var flkty = new Flickity(carousel, { // eslint-disable-line
    contain: false,
    percentPosition: true,
    freeScroll: true,
    watchCSS: true,
    cellAlign: 'center',
    prevNextButtons: true,
    pageDots: false,
  });
};

export default setFlickity;