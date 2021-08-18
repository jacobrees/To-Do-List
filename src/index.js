import './scss/styles.scss';
import './scss/checkbox.scss';
import start from './javascript/startApp.js';

const Flickity = require('flickity');

const carousel = document.querySelector('.categories-container');
const flkty = new Flickity(carousel, {
  contain: false,
  percentPosition: true,
  freeScroll: true,
  watchCSS: true,
  cellAlign: 'center',
  prevNextButtons: true,
  pageDots: false,
});

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

flkty.on('ready', start());

export { flkty, iso };