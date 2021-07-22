import { displayTodo } from './displayTodos.js';
import {
  addTodoToArray, categoriesArray, deleteTodoFromArray, editTodoInArray,
} from './database.js';
import { toggleAddTodoMenu, toggleEditTodoMenu } from './toggleForms.js';
import { toggleDeleteTodoMenu } from './toggleMenus.js';
import iso from './isotope.js';

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
  const todos = document.querySelectorAll('.todo');
  let currentTodo = null;
  todos.forEach((todo) => {
    if (todo.childNodes[1].classList.contains('show-todo-options')) {
      currentTodo = todo;
    }
  });
  return currentTodo;
};

const editTodo = () => {
  const currentTodo = findCurrentTodo();
  const todoTitle = currentTodo.childNodes[0].childNodes[0].childNodes[0];
  const todoDescription = currentTodo.childNodes[0].childNodes[1].childNodes[0];
  const newTodoTitle = document.querySelector('#edit-todo-title');
  const newTodoDescription = document.querySelector('#edit-todo-description');
  editTodoInArray(todoTitle.textContent, newTodoTitle.value, newTodoDescription.value);
  todoTitle.textContent = newTodoTitle.value;
  todoDescription.textContent = newTodoDescription.value;
  toggleEditTodoMenu();
};

const setEditTodoListener = () => {
  const editTodoBtn = document.querySelector('.add-edit-existing-todo-button');
  editTodoBtn.addEventListener('click', () => {
    editTodo();
  });
};

const deleteTodo = () => {
  const currentTodo = findCurrentTodo();
  const todoTitle = currentTodo.childNodes[0].childNodes[0].childNodes[0].textContent;
  iso.remove(currentTodo);
  iso.layout();
  deleteTodoFromArray(todoTitle);
  toggleDeleteTodoMenu();
};

const setDeleteTodoListener = () => {
  const deleteTodoBtn = document.querySelector('.delete-todo-button');
  deleteTodoBtn.addEventListener('click', () => {
    deleteTodo();
  });
};

const deleteAllDoneTodos = () => {

};

const setTodosController = () => {
  setAddTodoListener();
  setEditTodoListener();
  setDeleteTodoListener();
};

export default setTodosController;