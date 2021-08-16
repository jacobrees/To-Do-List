const setFlickity = () => {
  const carousel = document.querySelector('.categories-container');
  const flkty = new Flickity(carousel, { // eslint-disable-line
    draggable: false,
    watchCSS: true,
    prevNextButtons: true,
    pageDots: false,
    fade: true,
  });
};

export default setFlickity;