const Isotope = require('isotope-layout');

const todoGrid = document.querySelector('.todos-container');
const iso = new Isotope(todoGrid, {
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