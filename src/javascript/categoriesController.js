import { categoriesArray, setCategoriesArray } from './database.js';
import toggleLoadingScreen from './loadScreen.js';

const addCategory = (category) => {
  const createCategory = (category) => ({ category });
  const firstNull = categoriesArray.findIndex((category) => category.category === null);

  if (firstNull !== -1) {
    const newCategory = createCategory(category);
    setCategoriesArray(firstNull, newCategory);
    toggleLoadingScreen();
    setTimeout(() => { window.location.reload(); }, 300);
  }
};

const setAddCategoryBtn = () => {
  const addCategoryBtn = document.querySelector('.add-add-category-button');
  const categoryNameInput = document.querySelector('#add-category-title');
  addCategoryBtn.addEventListener('click', () => {
    const categoryName = categoryNameInput.value;
    addCategory(categoryName);
  });
};

let currentCategory;

const setCurrentCategoryListener = () => {
  const deleteCategoryBtns = document.querySelectorAll('.delete-category-btn');
  deleteCategoryBtns.forEach((deleteCategoryBtn) => {
    deleteCategoryBtn.addEventListener('click', (e) => {
      currentCategory = e.currentTarget.parentElement.childNodes[1].childNodes[3].textContent;
    });
  });
};

const removeCategory = () => {
  const currentCategoryIndex = categoriesArray
    .findIndex((category) => category.category === currentCategory);
  if (currentCategoryIndex !== -1) {
    setCategoriesArray(currentCategoryIndex, { category: null });
    toggleLoadingScreen();
    setTimeout(() => { window.location.reload(); }, 300);
  }
};

const setremoveCategoryBtn = () => {
  const removeCategoryBtn = document.querySelector('.delete-category-button');
  removeCategoryBtn.addEventListener('click', () => {
    removeCategory();
  });
};

const setCategoriesController = () => {
  setAddCategoryBtn();
  setCurrentCategoryListener();
  setremoveCategoryBtn();
};

export default setCategoriesController;