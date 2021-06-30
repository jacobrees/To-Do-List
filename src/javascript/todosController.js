import { clearEditTodoForm, clearAddTodoForm, clearAddCategoryForm } from './clearForms.js';

const AddTodoMenu = () => {
  const addTodoMenuBtns = document.querySelectorAll('.add-todo-btn, .cancel-add-new-todo-button');
  const addNewTodoMenu = document.querySelector('.add-new-todo-container');
  const addCategoryBtns = document.querySelectorAll('.category-btn-add');

  addTodoMenuBtns.forEach((addTodoMenuBtn) => {
    addTodoMenuBtn.addEventListener('click', () => {
      addNewTodoMenu.classList.toggle('show-add-new-todo');
    });
  });

  addCategoryBtns.forEach(((addCategoryBtn) => {
    addCategoryBtn.addEventListener('click', (e) => {
      if (!e.currentTarget.classList.contains('active-category')) {
        addCategoryBtns.forEach((addCategoryBtn) => {
          addCategoryBtn.classList.remove('active-category');
        });
        e.currentTarget.classList.add('active-category');
      }
    });
  }));
};

const EditTodoMenu = () => {
  const editTodoMenuBtns = document.querySelectorAll('.todo-edit-btn, .cancel-edit-existing-todo-button');
  const editExistingTodoMenu = document.querySelector('.edit-existing-todo-container');

  editTodoMenuBtns.forEach((editTodoMenuBtn) => {
    editTodoMenuBtn.addEventListener('click', () => {
      editExistingTodoMenu.classList.toggle('show-edit-existing-todo');
    });
  });
};

const setTodosController = () => {
  AddTodoMenu();
  EditTodoMenu();
};

export default setTodosController;
