import { categoriesArray, setCategoriesArray, deleteAllTodosInCategory } from './database.js';
import { toggleLoadingScreen } from './startScreen.js';
import { formatCategoryTitle } from './formatText.js';
import { flashError } from './flashError.js';

const firstNull = categoriesArray.findIndex((category) => category.category === null);

const addCategory = (category) => {
  const createCategory = (category) => ({ category });

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
    const categoryName = formatCategoryTitle(categoryNameInput.value);
    if (firstNull === -1) {
      flashError('You Cannot Have More Than 4 Categories');
    } else if (categoriesArray.some((category) => category.category === categoryName)) {
      flashError('Category Cannot Have Same Name As Existing Category');
    } else if (categoryName.includes(' ')) {
      flashError('Category Name Cannot Contain Spaces Between Letters');
    } else if (categoryName.length < 3) {
      flashError('Category Name Cannot Be Less Than 3 Letters Long');
    } else if (categoryName.length > 15) {
      flashError('Category Name Cannot Be Greater Than 15 Letters Long');
    } else if (/[^a-z]/i.test(categoryName)) {
      flashError('Category Name Can Only Contain Letters');
    } else {
      addCategory(categoryName);
    }
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