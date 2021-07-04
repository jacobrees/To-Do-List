import { categoriesArray } from './database.js';
import displayCategories from './displayCategories.js';

const addCategory = (category) => {
  const createCategory = (category) => ({ category });
  const firstNull = categoriesArray.findIndex((category) => category.category === null);

  if (firstNull !== -1) {
    const newCategory = createCategory(category);
    categoriesArray[firstNull] = newCategory;
  }
};

const setAddCategoryBtn = () => {
  const addCategoryBtn = document.querySelector('.add-add-category-button');
  const categoryNameInput = document.querySelector('#add-category-title');
  addCategoryBtn.addEventListener('click', () => {
    const categoryName = categoryNameInput.value;
    addCategory(categoryName);
    displayCategories();
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
  const currentCategoryIndex = categoriesArray.findIndex((cat) => cat.category === currentCategory);
  if (currentCategoryIndex !== -1) {
    categoriesArray[currentCategoryIndex] = { category: null };
  }
};

const setremoveCategoryBtn = () => {
  const removeCategoryBtn = document.querySelector('.delete-category-button');
  removeCategoryBtn.addEventListener('click', () => {
    removeCategory();
    displayCategories();
  });
};

const setCategoriesController = () => {
  setAddCategoryBtn();
  setCurrentCategoryListener();
  setremoveCategoryBtn();
};

export default setCategoriesController;