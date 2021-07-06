const setTodoMenu = () => {
  const todoMenuBtns = document.querySelectorAll('.todo-menu-btn');

  todoMenuBtns.forEach((todoMenuBtn) => {
    todoMenuBtn.addEventListener('click', (e) => {
      const todoOptions = e.currentTarget.parentElement.parentElement.parentElement.childNodes[3];
      if (todoOptions.classList.contains('show-todo-options')) {
        todoOptions.classList.remove('show-todo-options');
      } else {
        todoMenuBtns.forEach((todoOptions) => {
          todoOptions.parentElement.parentElement.parentElement.childNodes[3].classList.remove('show-todo-options');
        });
        todoOptions.classList.toggle('show-todo-options');
      }
    });
  });
};

const setDeleteTodoMenu = () => {
  const deleteTodoMenuBtns = document.querySelectorAll('.todo-delete-btn, .cancel-delete-todo-button');
  const deleteTodoMenu = document.querySelector('.delete-todo-popup-container');

  deleteTodoMenuBtns.forEach((deleteTodoMenuBtn) => {
    deleteTodoMenuBtn.addEventListener('click', () => {
      deleteTodoMenu.classList.toggle('show-delete-todo-popup');
    });
  });
};

const setDeleteAllTodoMenu = () => {
  const deleteAllTodoMenuBtns = document.querySelectorAll('.delete-all-done-todos-btn, .cancel-delete-all-todo-button');
  const deleteAllTodoMenu = document.querySelector('.delete-all-todo-popup-container');

  deleteAllTodoMenuBtns.forEach((deleteAllTodoMenuBtn) => {
    deleteAllTodoMenuBtn.addEventListener('click', () => {
      deleteAllTodoMenu.classList.toggle('show-delete-all-todo-popup');
    });
  });
};

const setEditCategoriesMenu = () => {
  const editCategoriesMenuBtns = document.querySelectorAll('.edit-categories-btn, .cancel-edit-categories-button');
  const editCategoriesMenu = document.querySelector('.edit-categories-container');

  editCategoriesMenuBtns.forEach((editCategoriesMenuBtn) => {
    editCategoriesMenuBtn.addEventListener('click', () => {
      editCategoriesMenu.classList.toggle('show-edit-categories');
    });
  });
};

const setDeleteCategoryMenu = () => {
  const deleteCategoryMenuBtns = document.querySelectorAll('.delete-category-btn, .cancel-delete-category-button');
  const deleteCategoryMenu = document.querySelector('.delete-category-popup-container');

  deleteCategoryMenuBtns.forEach((deleteCategoryMenuBtn) => {
    deleteCategoryMenuBtn.addEventListener('click', () => {
      deleteCategoryMenu.classList.toggle('show-delete-category-popup');
    });
  });
};

const setToggleMenus = () => {
  setTodoMenu();
  setDeleteTodoMenu();
  setDeleteAllTodoMenu();
  setEditCategoriesMenu();
  setDeleteCategoryMenu();
};

export default setToggleMenus;