import { categoriesArray } from './database.js';
import displayCategories from './displayCategories.js';

const addCategoryBtn = document.querySelector('.add-add-category-button');
const categoryNameInput = document.querySelector('#add-category-title');

const addCategory = (category) => {
  const createCategory = (category) => ({ category });
  const firstNull = categoriesArray.findIndex((category) => category === null);

  if (firstNull !== -1) {
    const newCategory = createCategory(category);
    categoriesArray[firstNull] = newCategory;
  }
};

const setAddCategoryBtn = () => {
  addCategoryBtn.addEventListener('click', () => {
    const categoryName = categoryNameInput.value;
    addCategory(categoryName);
    displayCategories();
  });
};

const currentCategory = () => {

};

const removeCategory = () => {

};

export default setAddCategoryBtn;