import { categoriesArray } from './database.js';
import setFlickity from './flickity.js';
import setAddTodoMenuCategoryBtns from './addTodoCategoryBtns.js';
import setTodoSortBtns from './sortTodosCategory.js';

const categoriesContainer = document.querySelector('.categories-container');
const addTodoCategoriesContainer = document.querySelector('.add-todo-categories');
const editCategoriesContainer = document.querySelector('.edit-categories-btns-container');

const createSortCategoryElement = (dotColor, categoryName, activeCategory) => {
  const sortCategory = document.createElement('div');
  sortCategory.classList.add('category');
  const btn = document.createElement('button');
  if (activeCategory) {
    btn.classList.add('category-btn', 'category-btn-sort', 'active-category');
  } else {
    btn.classList.add('category-btn', 'category-btn-sort');
  }
  sortCategory.appendChild(btn);
  const spanDot = document.createElement('span');
  spanDot.classList.add('dot', `dot${dotColor}`);
  btn.appendChild(spanDot);
  const spanTitle = document.createElement('span');
  spanTitle.classList.add('category-title');
  spanTitle.textContent = `${categoryName}`;
  btn.appendChild(spanTitle);

  return sortCategory;
};

const setSortCategories = () => {
  const amountOfNulls = categoriesArray.filter((category) => category.category === null).length;
  if (amountOfNulls > 2) {
    categoriesArray.forEach((category, index) => {
      if (category.category) {
        categoriesContainer
          .appendChild(createSortCategoryElement(index + 1, category.category, true));
      }
    });
  } else {
    categoriesContainer
      .appendChild(createSortCategoryElement('-all', 'all', true));

    categoriesArray.forEach((category, index) => {
      if (category.category) {
        categoriesContainer
          .appendChild(createSortCategoryElement(index + 1, category.category, false));
      }
    });
  }
};

const setAddTodoCategories = () => {
  let html = '';
  categoriesArray.forEach((category, index) => {
    if (category.category) {
      html += `<div class="category-option">
                <button type="button" class="category-btn category-btn-add">
                  <span class="dot dot${index + 1}"></span>
                  <span class="category-title">${category.category}</span>
                </button>
              </div>`;
    }
  });
  addTodoCategoriesContainer.innerHTML = html;
};

const setEditCategories = () => {
  let html = '';
  categoriesArray.forEach((category, index) => {
    if (category.category) {
      html += `<div class="edit-category">
                  <div class="edit-category-container">
                    <span class="dot dot${index + 1}"></span>
                    <span class="category-title">${category.category}</span>
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
  setSortCategories();
  setFlickity();
  setTodoSortBtns();
  setAddTodoCategories();
  setAddTodoMenuCategoryBtns();
  setEditCategories();
};

export default displayCategories;