import setMenus from './toggleMenus.js';
import setTodosController from './todosController.js';
import setCategoriesControler from './categoriesController.js';
import initializeTodoSortBtns from './sortTodosCategory.js';
import setShowAllCategoriesBtn from './showAllCategories.js';
import initializeDoneCheckboxes from './doneCheckboxes.js';

const start = () => {
  setMenus();
  setTodosController();
  setCategoriesControler();
  setShowAllCategoriesBtn();
  initializeTodoSortBtns();
  initializeDoneCheckboxes();
};

export default start;