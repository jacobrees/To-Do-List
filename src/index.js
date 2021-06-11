import './scss/styles.scss';
import './scss/checkbox.scss';

const todoMenuBtns = document.querySelectorAll('.todo-menu-btn');

todoMenuBtns.forEach((todoMenuBtn) => {
  todoMenuBtn.addEventListener('click', (e) => {
    const todoOptions = e.currentTarget.parentElement.parentElement.parentElement.childNodes[3];
    todoOptions.classList.toggle('show-todo-options');
  });
});