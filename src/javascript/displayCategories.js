import { getCategoriesArray } from './database.js';
import setAddTodoMenuCategoryBtns from './addTodoCategoryBtns.js';
import setTodoSortBtns from './sortTodosCategory.js';
import { setremoveCategoryBtn, setCurrentCategoryListener } from './categoriesController.js'; // eslint-disable-line
import { setDeleteCategoryMenu } from './toggleMenus.js';
import { setSlides } from './categoriesSlider.js';

const categoriesContainer = document.querySelector('.categories-container');
const addTodoCategoriesContainer = document.querySelector('.add-todo-categories');
const editCategoriesContainer = document.querySelector('.edit-categories-btns-container');

const clearCategories = () => {
  while (categoriesContainer.firstChild) {
    categoriesContainer.removeChild(categoriesContainer.firstChild);
  }

  while (addTodoCategoriesContainer.firstChild) {
    addTodoCategoriesContainer.removeChild(addTodoCategoriesContainer.firstChild);
  }

  while (editCategoriesContainer.firstChild) {
    editCategoriesContainer.removeChild(editCategoriesContainer.firstChild);
  }
};

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

const displaySortCategories = () => {
  const amountOfNulls = getCategoriesArray()
    .filter((category) => category.category === null).length;
  if (amountOfNulls > 2) {
    getCategoriesArray().forEach((category, index) => {
      if (category.category) {
        categoriesContainer
          .appendChild((createSortCategoryElement(index + 1, category.category, true)));
      }
    });
  } else {
    categoriesContainer
      .appendChild((createSortCategoryElement('-all', 'all', true)));

    getCategoriesArray().forEach((category, index) => {
      if (category.category) {
        categoriesContainer
          .appendChild((createSortCategoryElement(index + 1, category.category, false)));
      }
    });
  }
};

const createAddCategoryElement = (dotColor, categoryName) => {
  const addCategory = document.createElement('div');
  addCategory.classList.add('category-option');
  const btn = document.createElement('button');
  btn.classList.add('category-btn', 'category-btn-add');
  addCategory.appendChild(btn);
  const spanDot = document.createElement('span');
  spanDot.classList.add('dot', `dot${dotColor}`);
  btn.appendChild(spanDot);
  const spanTitle = document.createElement('span');
  spanTitle.classList.add('category-title');
  spanTitle.textContent = `${categoryName}`;
  btn.appendChild(spanTitle);

  return addCategory;
};

const displayAddTodoCategories = () => {
  getCategoriesArray().forEach((category, index) => {
    if (category.category) {
      addTodoCategoriesContainer
        .appendChild(createAddCategoryElement(index + 1, category.category));
    }
  });
};

const createEditCategoryElement = (dotColor, categoryName) => {
  const editCategory = document.createElement('div');
  editCategory.classList.add('edit-category');
  const editCategoriesContainer = document.createElement('div');
  editCategoriesContainer.classList.add('edit-category-container');
  editCategory.appendChild(editCategoriesContainer);
  const spanDot = document.createElement('span');
  spanDot.classList.add('dot', `dot${dotColor}`);
  editCategoriesContainer.appendChild(spanDot);
  const spanTitle = document.createElement('span');
  spanTitle.classList.add('category-title');
  spanTitle.textContent = `${categoryName}`;
  editCategoriesContainer.appendChild(spanTitle);
  const btn = document.createElement('button');
  btn.classList.add('delete-category-btn');
  editCategory.appendChild(btn);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('delete-category-svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  btn.appendChild(svg);
  const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  svgPath.setAttribute(
    'd',
    'M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z',
  );
  svg.appendChild(svgPath);

  return editCategory;
};

const displayEditCategories = () => {
  getCategoriesArray().forEach((category, index) => {
    if (category.category) {
      editCategoriesContainer
        .appendChild(createEditCategoryElement(index + 1, category.category));
    }
  });
};

const displayCategories = () => {
  clearCategories();
  displaySortCategories();
  setSlides();
  setTodoSortBtns();
  displayAddTodoCategories();
  setAddTodoMenuCategoryBtns();
  displayEditCategories();
  setremoveCategoryBtn();
  setCurrentCategoryListener();
  setDeleteCategoryMenu();
};

export default displayCategories;