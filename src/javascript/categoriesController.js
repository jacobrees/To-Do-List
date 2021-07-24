import { categoriesArray, setCategoriesArray, deleteAllTodosInCategory } from './database.js';
import { toggleLoadingScreen } from './startScreen.js';

const addCategory = (category) => {
  const createCategory = (category) => ({ category });
  const firstNull = categoriesArray.findIndex((category) => category.category === null);

  if (firstNull !== -1) {
    const newCategory = createCategory(category);
    setCategoriesArray(firstNull, newCategory);
    toggleLoadingScreen();
    setTimeout(() => { window.location.reload(); }, 550);
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
      currentCategory = e.currentTarget.parentElement.childNodes[0].childNodes[1].textContent;
    });
  });
};

const removeCategory = () => {
  const currentCategoryIndex = categoriesArray
    .findIndex((category) => category.category === currentCategory);
  if (currentCategoryIndex !== -1) {
    setCategoriesArray(currentCategoryIndex, { category: null });
    deleteAllTodosInCategory(currentCategory);
    toggleLoadingScreen();
    setTimeout(() => { window.location.reload(); }, 550);
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