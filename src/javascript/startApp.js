import { toggleLoadingScreen, launchStartScreen } from './startScreen.js';
import { startDatabase } from './database.js';
import displayCategories from './displayCategories.js';
import { setToggleMenus } from './toggleMenus.js';
import { setToggleForms } from './toggleForms.js';
import { setCloseFlashError } from './flashError.js';
import setShowAllCategoriesBtn from './showAllCategories.js';
import setCategoriesController from './categoriesController.js';
import { setTodosController } from './todosController.js';
import { displayAllTodos } from './displayTodos.js';

const start = () => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      toggleLoadingScreen();
    }, 1800);
  });
  launchStartScreen();
  startDatabase();
  displayCategories();
  setToggleMenus();
  setToggleForms();
  setCloseFlashError();
  setShowAllCategoriesBtn();
  setCategoriesController();
  setTodosController();
  displayAllTodos();
};

export default start;