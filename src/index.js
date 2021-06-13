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
