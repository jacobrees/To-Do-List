import { startDatabase } from './database.js';
import displayCategories from './displayCategories.js';
import setToggleMenus from './toggleMenus.js';
import setToggleForms from './toggleForms.js';
import setShowAllCategoriesBtn from './showAllCategories.js';
import setDoneCheckboxes from './doneCheckboxes.js';
import setCategoriesController from './categoriesController.js';

const start = () => {
  startDatabase();
  displayCategories();
  setToggleMenus();
  setToggleForms();
  setShowAllCategoriesBtn();
  setDoneCheckboxes();
  setCategoriesController();
};

export default start;