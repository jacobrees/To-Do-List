import { displayTodo } from './displayTodos.js';
import { addTodoToArray, categoriesArray } from './database.js';
import { toggleAddTodoMenu } from './toggleForms.js';

const createTodo = (todoTitle, todoDescription, todoCategory) => ({
  todoTitle, todoDescription, todoCategory,
});

const addTodo = (title, description, category) => {
  const todo = createTodo(title, description, category);
  addTodoToArray(todo);
  const categoryIndex = categoriesArray
    .findIndex((cat) => cat.category === category) + 1;
  displayTodo(category, categoryIndex, title, description);
  toggleAddTodoMenu();
};

const setAddTodoListener = () => {
  const addTodoBtn = document.querySelector('.add-add-new-todo-button');
  addTodoBtn.addEventListener('click', () => {
    const todoTitleInput = document.querySelector('#add-todo-title');
    const todoDescriptionInput = document.querySelector('#add-todo-description');
    const addCategoryBtns = document.querySelectorAll('.category-btn-add');
    let activeCategory = null;
    addCategoryBtns.forEach((addCategoryBtn) => {
      if (addCategoryBtn.classList.contains('active-category')) {
        activeCategory = addCategoryBtn;
      }
    });
    addTodo(
      todoTitleInput.value,
      todoDescriptionInput.value,
      activeCategory.childNodes[1].textContent,
    );
  });
};

const findCurrentTodo = () => {

};

const editTodo = () => {

};

const deleteTodo = () => {

};

const deleteAllDoneTodos = () => {

};

const setTodosController = () => {
  setAddTodoListener();
};

export default setTodosController;