import displayCategories from './displayCategories.js';
import { setToggleMenus } from './toggleMenus.js';
import setToggleForms from './toggleForms.js';
import setShowAllCategoriesBtn from './showAllCategories.js';
import setDoneCheckboxes from './doneCheckboxes.js';
import setAddCategoryBtn from './categoriesController.js';

const start = () => {
  displayCategories();
  setToggleMenus();
  setToggleForms();
  setShowAllCategoriesBtn();
  setDoneCheckboxes();
  setAddCategoryBtn();
};

export default start;