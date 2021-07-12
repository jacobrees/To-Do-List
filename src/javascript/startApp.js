import toggleLoadingScreen from './loadScreen.js';
import { startDatabase } from './database.js';
import displayCategories from './displayCategories.js';
import { setToggleMenus } from './toggleMenus.js';
import { setToggleForms } from './toggleForms.js';
import setShowAllCategoriesBtn from './showAllCategories.js';
import setCategoriesController from './categoriesController.js';
import { displayTodo } from './displayTodos.js';

const start = () => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      toggleLoadingScreen();
    }, 1800);
  });
  startDatabase();
  displayCategories();
  setToggleMenus();
  setToggleForms();
  setShowAllCategoriesBtn();
  setCategoriesController();
  setTimeout(() => { displayTodo(); }, 2000);
};

export default start;