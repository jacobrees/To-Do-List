import setToggleMenus from './toggleMenus.js';
import setToggleForms from './toggleForms.js';
import initializeTodoSortBtns from './sortTodosCategory.js';
import setShowAllCategoriesBtn from './showAllCategories.js';
import initializeDoneCheckboxes from './doneCheckboxes.js';
import setAddTodoMenuCategoryBtns from './addTodoCategoryBtns.js';

const start = () => {
  setToggleMenus();
  setToggleForms();
  setAddTodoMenuCategoryBtns();
  setShowAllCategoriesBtn();
  initializeTodoSortBtns();
  initializeDoneCheckboxes();
};

export default start;