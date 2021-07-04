import { categoriesArray, setCategoriesArray } from './database.js';

const addCategory = (category) => {
  const createCategory = (category) => ({ category });
  const firstNull = categoriesArray.findIndex((category) => category.category === null);

  if (firstNull !== -1) {
    const newCategory = createCategory(category);
    setCategoriesArray(firstNull, newCategory);
  }
};

const setAddCategoryBtn = () => {
  const addCategoryBtn = document.querySelector('.add-add-category-button');
  const categoryNameInput = document.querySelector('#add-category-title');
  addCategoryBtn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    const categoryName = categoryNameInput.value;
    addCategory(categoryName);
    window.location.reload();
  });
};

let currentCategory;

const setCurrentCategoryListener = () => {
  const deleteCategoryBtns = document.querySelectorAll('.delete-category-btn');
  deleteCategoryBtns.forEach((deleteCategoryBtn) => {
    deleteCategoryBtn.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      currentCategory = e.currentTarget.parentElement.childNodes[1].childNodes[3].textContent;
    });
  });
};

const removeCategory = () => {
  let currentCategoryIndex = categoriesArray.findIndex((cat) => cat.category === currentCategory);
  if (currentCategoryIndex !== -1) {
    setCategoriesArray([currentCategoryIndex] = { category: null });
  }
};

const setremoveCategoryBtn = () => {
  const removeCategoryBtn = document.querySelector('.delete-category-button');
  removeCategoryBtn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    removeCategory();
    window.location.reload();
  });
};

const setCategoriesController = () => {
  setAddCategoryBtn();
  setCurrentCategoryListener();
  setremoveCategoryBtn();
};

export default setCategoriesController;