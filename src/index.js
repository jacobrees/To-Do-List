import './scss/styles.scss';
import './scss/checkbox.scss';

const todoMenuBtns = document.querySelectorAll('.todo-menu-btn');

todoMenuBtns.forEach((todoMenuBtn) => {
  todoMenuBtn.addEventListener('click', (e) => {
    const todoOptions = e.currentTarget.parentElement.parentElement.parentElement.childNodes[3];
    if ([].slice.apply(todoOptions.classList).includes('show-todo-options')) {
      todoOptions.classList.remove('show-todo-options');
    } else {
      todoMenuBtns.forEach((todoOptions) => {
        todoOptions.parentElement.parentElement.parentElement.childNodes[3].classList.remove('show-todo-options');
      });
      todoOptions.classList.toggle('show-todo-options');
    }
  });
});

const addTodoMenuBtns = document.querySelectorAll('.add-todo-btn, .cancel-add-new-todo-button');
const addNewTodoMenu = document.querySelector('.add-new-todo-container');

addTodoMenuBtns.forEach((addTodoMenuBtn) => {
  addTodoMenuBtn.addEventListener('click', () => {
    addNewTodoMenu.classList.toggle('show-add-new-todo');
  });
});

const editTodoMenuBtns = document.querySelectorAll('.todo-edit-btn, .cancel-edit-existing-todo-button');
const editExistingTodoMenu = document.querySelector('.edit-existing-todo-container');

editTodoMenuBtns.forEach((editTodoMenuBtn) => {
  editTodoMenuBtn.addEventListener('click', () => {
    editExistingTodoMenu.classList.toggle('show-edit-existing-todo');
  });
});

const deleteTodoMenuBtns = document.querySelectorAll('.todo-delete-btn, .cancel-delete-todo-button');
const deleteTodoMenu = document.querySelector('.delete-todo-popup-container');

deleteTodoMenuBtns.forEach((deleteTodoMenuBtn) => {
  deleteTodoMenuBtn.addEventListener('click', () => {
    deleteTodoMenu.classList.toggle('show-delete-todo-popup');
  });
});

const deleteAllTodoMenuBtns = document.querySelectorAll('.delete-all-done-todos-btn, .cancel-delete-all-todo-button');
const deleteAllTodoMenu = document.querySelector('.delete-all-todo-popup-container');

deleteAllTodoMenuBtns.forEach((deleteAllTodoMenuBtn) => {
  deleteAllTodoMenuBtn.addEventListener('click', () => {
    deleteAllTodoMenu.classList.toggle('show-delete-all-todo-popup');
  });
});

const editCategoriesMenuBtns = document.querySelectorAll('.edit-categories-btn, .cancel-edit-categories-button');
const editCategoriesMenu = document.querySelector('.edit-categories-container');

editCategoriesMenuBtns.forEach((editCategoriesMenuBtn) => {
  editCategoriesMenuBtn.addEventListener('click', () => {
    editCategoriesMenu.classList.toggle('show-edit-categories');
  });
});