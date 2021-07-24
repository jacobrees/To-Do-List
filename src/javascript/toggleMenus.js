const setTodoMenu = () => {
  let todoMenuBtns = document.querySelectorAll('.todo-menu-btn');

  todoMenuBtns.forEach((menuBtn) => {
    menuBtn.replaceWith(menuBtn.cloneNode(true));
  });

  todoMenuBtns = document.querySelectorAll('.todo-menu-btn');

  todoMenuBtns.forEach((todoMenuBtn) => {
    todoMenuBtn.addEventListener('click', (e) => {
      const todoOptions = e.currentTarget.parentElement.parentElement.parentElement.childNodes[1];
      if (todoOptions.classList.contains('show-todo-options')) {
        todoOptions.classList.remove('show-todo-options');
      } else {
        todoMenuBtns.forEach((todoOptions) => {
          todoOptions.parentElement.parentElement.parentElement.childNodes[1].classList.remove('show-todo-options');
        });
        todoOptions.classList.toggle('show-todo-options');
      }
    });
  });
};

const toggleDeleteTodoMenu = () => {
  const deleteTodoMenu = document.querySelector('.delete-todo-popup-container');
  deleteTodoMenu.classList.toggle('show-delete-todo-popup');
};

const setDeleteTodoMenu = () => {
  let deleteTodoMenuBtns = document.querySelectorAll('.todo-delete-btn, .cancel-delete-todo-button');

  deleteTodoMenuBtns.forEach((deleteTodoMenuBtn) => {
    deleteTodoMenuBtn.replaceWith(deleteTodoMenuBtn.cloneNode(true));
  });

  deleteTodoMenuBtns = document.querySelectorAll('.todo-delete-btn, .cancel-delete-todo-button');

  deleteTodoMenuBtns.forEach((deleteTodoMenuBtn) => {
    deleteTodoMenuBtn.addEventListener('click', () => {
      toggleDeleteTodoMenu();
    });
  });
};

const toggleDeleteAllTodoMenu = () => {
  const deleteAllTodoMenu = document.querySelector('.delete-all-todo-popup-container');
  deleteAllTodoMenu.classList.toggle('show-delete-all-todo-popup');
};

const setDeleteAllTodoMenu = () => {
  const deleteAllTodoMenuBtns = document.querySelectorAll('.delete-all-done-todos-btn, .cancel-delete-all-todo-button');

  deleteAllTodoMenuBtns.forEach((deleteAllTodoMenuBtn) => {
    deleteAllTodoMenuBtn.addEventListener('click', () => {
      toggleDeleteAllTodoMenu();
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
  setDeleteAllTodoMenu();
  setEditCategoriesMenu();
  setDeleteCategoryMenu();
};

export {
  setToggleMenus, setTodoMenu, setDeleteTodoMenu, toggleDeleteTodoMenu, toggleDeleteAllTodoMenu,
};