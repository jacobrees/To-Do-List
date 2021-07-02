import displayCategories from './displayCategories.js';
import setToggleMenus from './toggleMenus.js';
import setToggleForms from './toggleForms.js';
import setTodoSortBtns from './sortTodosCategory.js';
import setShowAllCategoriesBtn from './showAllCategories.js';
import setDoneCheckboxes from './doneCheckboxes.js';
import setAddTodoMenuCategoryBtns from './addTodoCategoryBtns.js';

const start = () => {
  displayCategories();
  setToggleMenus();
  setToggleForms();
  setAddTodoMenuCategoryBtns();
  setShowAllCategoriesBtn();
  setTodoSortBtns();
  setDoneCheckboxes();
};

export default start;