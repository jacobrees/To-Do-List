const startDatabase = () => {
  if (localStorage.getItem('categoriesArray') === null) {
    const defaultArray = [{ category: 'default' },
      { category: null },
      { category: null },
      { category: null },
    ];
    localStorage.setItem('categoriesArray', JSON.stringify(defaultArray));
  }
  if (localStorage.getItem('todosArray') === null) {
    const defaultArray = [{
      todoTitle: 'Default Todo', todoDescription: 'This is a default todo.', todoCategory: 'default', todoDone: false,
    }];
    localStorage.setItem('todosArray', JSON.stringify(defaultArray));
  }
};

const getCategoriesArray = () => JSON.parse(localStorage.getItem('categoriesArray'));

const setCategoriesArray = (index, category) => {
  const setArray = [...JSON.parse(localStorage.getItem('categoriesArray'))];
  setArray[index] = category;

  localStorage.setItem('categoriesArray', JSON.stringify(setArray));
};

const getTodosArray = () => JSON.parse(localStorage.getItem('todosArray'));

const addTodoToArray = (todo) => {
  const setArray = [...JSON.parse(localStorage.getItem('todosArray'))];
  setArray[setArray.length] = todo;

  localStorage.setItem('todosArray', JSON.stringify(setArray));
};

const deleteAllTodosInCategory = (category) => {
  const setArray = [...JSON.parse(localStorage.getItem('todosArray'))];

  const filteredArray = setArray.filter((todo) => todo.todoCategory !== category);
  localStorage.setItem('todosArray', JSON.stringify(filteredArray));
};

const deleteTodoFromArray = (todoTitle) => {
  const setArray = [...JSON.parse(localStorage.getItem('todosArray'))];

  const filteredArray = setArray.filter((todo) => todo.todoTitle !== todoTitle);
  localStorage.setItem('todosArray', JSON.stringify(filteredArray));
};

const editTodoInArray = (todoTitle, newTodoTitle, newTodoDescription) => {
  const setArray = [...JSON.parse(localStorage.getItem('todosArray'))];

  const index = setArray.findIndex((todo) => todo.todoTitle === todoTitle);
  const todo = setArray.find((todo) => todo.todoTitle === todoTitle);
  todo.todoTitle = newTodoTitle;
  todo.todoDescription = newTodoDescription;

  setArray[index] = todo;

  localStorage.setItem('todosArray', JSON.stringify(setArray));
};

const toggleTodoDoneInArray = (todoTitle) => {
  const setArray = [...JSON.parse(localStorage.getItem('todosArray'))];

  const index = setArray.findIndex((todo) => todo.todoTitle === todoTitle);
  const todo = setArray.find((todo) => todo.todoTitle === todoTitle);
  todo.todoDone = !todo.todoDone;

  setArray[index] = todo;

  localStorage.setItem('todosArray', JSON.stringify(setArray));
};

const deleteAllDoneTodosInArray = () => {
  const setArray = [...JSON.parse(localStorage.getItem('todosArray'))];

  const filteredArray = setArray.filter((todo) => todo.todoDone === false);
  localStorage.setItem('todosArray', JSON.stringify(filteredArray));
};

export {
  getCategoriesArray,
  getTodosArray,
  setCategoriesArray,
  startDatabase,
  addTodoToArray,
  deleteAllTodosInCategory,
  deleteTodoFromArray,
  editTodoInArray,
  toggleTodoDoneInArray,
  deleteAllDoneTodosInArray,
};