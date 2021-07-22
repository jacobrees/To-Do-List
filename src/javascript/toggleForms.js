import { clearEditTodoForm, clearAddTodoForm, clearAddCategoryForm } from './clearForms.js';

const toggleAddTodoMenu = () => {
  const addNewTodoMenu = document.querySelector('.add-new-todo-container');
  if (addNewTodoMenu.classList.contains('show-add-new-todo')) {
    clearAddTodoForm();
  }
  addNewTodoMenu.classList.toggle('show-add-new-todo');
};

const toggleEditTodoMenu = () => {
  const editExistingTodoMenu = document.querySelector('.edit-existing-todo-container');
  if (editExistingTodoMenu.classList.contains('show-edit-existing-todo')) {
    clearEditTodoForm();
  }

  const todos = document.querySelectorAll('.todo');
  let currentTodo = null;
  todos.forEach((todo) => {
    if (todo.childNodes[1].classList.contains('show-todo-options')) {
      currentTodo = todo;
    }
  });

  if (!editExistingTodoMenu.classList.contains('show-edit-existing-todo')) {
    const editTodoTitle = document.querySelector('#edit-todo-title');
    const editTodoDescription = document.querySelector('#edit-todo-description');

    editTodoTitle.value = currentTodo.childNodes[0].childNodes[0].childNodes[0].textContent;
    editTodoDescription.value = currentTodo.childNodes[0].childNodes[1].childNodes[0].textContent;
  }

  editExistingTodoMenu.classList.toggle('show-edit-existing-todo');
};

const toggleAddCategoryMenu = () => {
  const addCategoryMenu = document.querySelector('.add-category-popup-container');
  if (addCategoryMenu.classList.contains('show-add-category-popup')) {
    clearAddCategoryForm();
  }
  addCategoryMenu.classList.toggle('show-add-category-popup');
};

const addTodoMenu = () => {
  const addTodoMenuBtns = document.querySelectorAll('.add-todo-btn, .cancel-add-new-todo-button');

  addTodoMenuBtns.forEach((addTodoMenuBtn) => {
    addTodoMenuBtn.addEventListener('click', () => {
      toggleAddTodoMenu();
    });
  });
};

const setEditTodoMenu = () => {
  let editTodoMenuBtns = document.querySelectorAll('.todo-edit-btn, .cancel-edit-existing-todo-button');

  editTodoMenuBtns.forEach((editTodoMenuBtn) => {
    editTodoMenuBtn.replaceWith(editTodoMenuBtn.cloneNode(true));
  });

  editTodoMenuBtns = document.querySelectorAll('.todo-edit-btn, .cancel-edit-existing-todo-button');

  editTodoMenuBtns.forEach((editTodoMenuBtn) => {
    editTodoMenuBtn.addEventListener('click', () => {
      toggleEditTodoMenu();
    });
  });
};

const addCategoryMenu = () => {
  const addCategoryMenuBtns = document.querySelectorAll('.add-category-button, .cancel-add-category-button');

  addCategoryMenuBtns.forEach((addCategoryMenuBtn) => {
    addCategoryMenuBtn.addEventListener('click', () => {
      toggleAddCategoryMenu();
    });
  });
};

const setToggleForms = () => {
  addTodoMenu();
  addCategoryMenu();
};

export {
  setToggleForms, setEditTodoMenu, toggleAddTodoMenu, toggleEditTodoMenu,
};