const startDatabase = () => {
  if (localStorage.getItem('categoriesArray') === null) {
    const defaultArray = [{ category: null },
      { category: null },
      { category: null },
      { category: null },
    ];
    localStorage.setItem('categoriesArray', JSON.stringify(defaultArray));
  }
};

const categoriesArray = JSON.parse(localStorage.getItem('categoriesArray')) || [{ category: null }, { category: null }, { category: null }, { category: null }];

const setCategoriesArray = (index, category) => {
  const setArray = [...categoriesArray];
  setArray[index] = category;

  localStorage.setItem('categoriesArray', JSON.stringify(setArray));
};

const todosArray = [];

export {
  categoriesArray, todosArray, setCategoriesArray, startDatabase,
};