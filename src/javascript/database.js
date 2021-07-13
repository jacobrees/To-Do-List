const startDatabase = () => {
  if (localStorage.getItem('categoriesArray') === null) {
    const defaultArray = [{ category: 'work' },
      { category: null },
      { category: null },
      { category: null },
    ];
    localStorage.setItem('categoriesArray', JSON.stringify(defaultArray));
  }
  if (localStorage.getItem('todosArray') === null) {
    const defaultArray = [{ todoTitle: 'Test Title', todoDescription: 'This is a test todo.', todoCategory: 'work' }];
    localStorage.setItem('todosArray', JSON.stringify(defaultArray));
  }
};

const categoriesArray = JSON.parse(localStorage.getItem('categoriesArray')) || [{ category: 'work' }, { category: null }, { category: null }, { category: null }];

const setCategoriesArray = (index, category) => {
  const setArray = [...categoriesArray];
  setArray[index] = category;

  localStorage.setItem('categoriesArray', JSON.stringify(setArray));
};

const todosArray = JSON.parse(localStorage.getItem('todosArray')) || [{ todoTitle: 'Test Title', todoDescription: 'This is a test todo.', todoCategory: 'work' }];

const addTodoToArray = (todo) => {
  const setArray = [...JSON.parse(localStorage.getItem('todosArray'))];
  setArray[setArray.length] = todo;

  localStorage.setItem('todosArray', JSON.stringify(setArray));
};

export {
  categoriesArray, todosArray, setCategoriesArray, startDatabase, addTodoToArray,
};