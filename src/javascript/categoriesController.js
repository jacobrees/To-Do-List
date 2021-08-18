import { getCategoriesArray, setCategoriesArray, deleteAllTodosInCategory } from './database.js';
import { formatCategoryTitle } from './formatText.js';
import { flashError } from './flashError.js';
import { toggleLoadingScreen } from './startScreen.js';
import displayCategories from './displayCategories.js';
import iso from './isotope.js';
import { toggleAddCategoryMenu } from './toggleForms.js';
import { toggleDeleteCategoryMenu } from './toggleMenus.js';

const addCategory = (category) => {
  const createCategory = (category) => ({ category });
  const firstNull = getCategoriesArray().findIndex((category) => category.category === null);
  if (firstNull !== -1) {
    const newCategory = createCategory(category);
    setCategoriesArray(firstNull, newCategory);
    toggleLoadingScreen();
    toggleAddCategoryMenu();
    setTimeout(() => { displayCategories(); iso.arrange({ filter: '*' }); toggleLoadingScreen(); }, 550);
  }
};

const setAddCategoryBtn = () => {
  const addCategoryBtn = document.querySelector('.add-add-category-button');
  const categoryNameInput = document.querySelector('#add-category-title');
  addCategoryBtn.addEventListener('click', () => {
    const categoryName = formatCategoryTitle(categoryNameInput.value);
    const firstNull = getCategoriesArray().findIndex((category) => category.category === null);
    if (firstNull === -1) {
      flashError('You Cannot Have More Than 4 Categories');
    } else if (getCategoriesArray().some((category) => category.category === categoryName)) {
      flashError('Category Cannot Have Same Title As Existing Category');
    } else if (categoryName.includes(' ')) {
      flashError('Category Title Cannot Contain Spaces Between Letters');
    } else if (categoryName.length < 3) {
      flashError('Category Title Cannot Be Less Than 3 Letters Long');
    } else if (categoryName.length > 15) {
      flashError('Category Title Cannot Be Greater Than 15 Letters Long');
    } else if (/[^a-z]/i.test(categoryName)) {
      flashError('Category Title Can Only Contain Letters');
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
  const currentCategoryIndex = getCategoriesArray()
    .findIndex((category) => category.category === currentCategory);
  if (currentCategoryIndex !== -1) {
    setCategoriesArray(currentCategoryIndex, { category: null });

    toggleLoadingScreen();
    toggleDeleteCategoryMenu();
    setTimeout(() => {
      displayCategories();
      deleteAllTodosInCategory(currentCategory);
      iso.arrange({ filter: '*' });
      const allTodos = document.querySelectorAll('.todo');
      allTodos.forEach((todo) => {
        if (todo.classList.contains(currentCategory)) {
          iso.remove(todo);
          iso.layout();
        }
      });
      toggleLoadingScreen();
    }, 550);
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
};

export { setCategoriesController, setremoveCategoryBtn, setCurrentCategoryListener };