import { toggleLoadingScreen, launchStartScreen } from './startScreen.js';
import { startDatabase } from './database.js';
import displayCategories from './displayCategories.js';
import { setToggleMenus } from './toggleMenus.js';
import { setToggleForms } from './toggleForms.js';
import { setCloseFlashError } from './flashError.js';
import setShowAllCategoriesBtn from './showAllCategories.js';
import { setCategoriesController } from './categoriesController.js';
import { setTodosController } from './todosController.js';
import { displayAllTodos } from './displayTodos.js';
import iso from './isotope.js';
import { setSliderListeners } from './categoriesSlider.js';

const start = () => {
  launchStartScreen();
  startDatabase();
  displayCategories();
  setSliderListeners();
  setToggleMenus();
  setToggleForms();
  setCloseFlashError();
  setShowAllCategoriesBtn();
  setCategoriesController();
  setTodosController();
  displayAllTodos();
  window.addEventListener('load', () => {
    iso.arrange({ filter: '*' });
    setTimeout(() => {
      window.scroll({
        top: 0,
      });
      toggleLoadingScreen();
    }, 1800);
  });
};

export default start;