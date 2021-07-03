import { categoriesArray } from './database.js';

const category = (category) => ({ category });

const addCategory = (category) => {
  const firstNull = categoriesArray.findIndex((category) => category === null);

  if (firstNull !== -1) {
    const newCategory = category(category);
    categoriesArray[firstNull] = newCategory;
  }
};

const currentCategory = () => {

};

const removeCategory = () => {

};