import setMenus from './toggleMenus.js';
import initializeTodoSortBtns from './sortTodosCategory.js';
import setShowAllCategoriesBtn from './showAllCategories.js';
import initializeDoneCheckboxes from './doneCheckboxes.js';

const start = () => {
  setMenus();
  setShowAllCategoriesBtn();
  initializeTodoSortBtns();
  initializeDoneCheckboxes();
};

export default start;