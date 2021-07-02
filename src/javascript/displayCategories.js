import { categoriesArray } from './database.js';
import setFlickity from './flickity.js';

const categoriesContainer = document.querySelector('.categories-container');
const addTodoCategoriesContainer = document.querySelector('.add-todo-categories');
const editCategoriesContainer = document.querySelector('.edit-categories-btns-container');

const clearCategories = () => {
  while (categoriesContainer.firstChild) {
    categoriesContainer.removeChild(categoriesContainer.lastChild);
  }
  while (addTodoCategoriesContainer.firstChild) {
    addTodoCategoriesContainer.removeChild(addTodoCategoriesContainer.lastChild);
  }
  while (editCategoriesContainer.firstChild) {
    editCategoriesContainer.removeChild(editCategoriesContainer.lastChild);
  }
};

const setSortCategories = () => {
  let html = '';
  if (categoriesArray.length > 1) {
    html += `<div class="category">
        <button type="button" class="category-btn category-btn-sort active-category">
        <span class="dot dot-all"></span>
        
        <span class="category-title">all</span>
      </button>
      </div>`;
  }

  categoriesArray.forEach((category, index) => {
    if (category) {
      html += `<div class="category">
        <button type="button" class="category-btn category-btn-sort">
        <span class="dot dot${index + 1}"></span>
        
        <span class="category-title">${category}</span>
    </button>
    </div>`;
    }
  });
  categoriesContainer.innerHTML = html;
};

const setAddTodoCategories = () => {
  let html = '';
  categoriesArray.forEach((category, index) => {
    if (category) {
      html += `<div class="category-option">
        <button type="button" class="category-btn category-btn-add">
        <span class="dot dot${index + 1}"></span>
        <span class="category-title">${category}</span>
    </button>
    </div>`;
    }
  });
  addTodoCategoriesContainer.innerHTML = html;
};

const setEditCategories = () => {
  let html = '';
  categoriesArray.forEach((category, index) => {
    if (category) {
      html += `<div class="edit-category">
        <div class="edit-category-container">
        <span class="dot dot${index + 1}"></span>
        <span class="category-title">${category}</span>
    </div>
    <button type="button" class="delete-category-btn">
        <svg class="delete-category-svg" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
    </button>
    </div>`;
    }
  });
  editCategoriesContainer.innerHTML = html;
};

const displayCategories = () => {
  clearCategories();
  setSortCategories();
  setAddTodoCategories();
  setEditCategories();
  setFlickity();
};

export default displayCategories;