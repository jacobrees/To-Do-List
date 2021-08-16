var Isotope = require('isotope-layout'); // eslint-disable-line
var todoGrid = document.querySelector('.todos-container'); // eslint-disable-line
var iso = new Isotope(todoGrid, { // eslint-disable-line
  itemSelector: '.todo',
  percentPosition: true,
  layoutMode: 'masonry',
  masonry: {
    columnWidth: '.todo',
    horizontalOrder: false,
    gutter: 10,
  },
});
export default iso;