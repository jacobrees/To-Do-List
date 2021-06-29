const TodoMenu = () => {
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

const AddTodoMenu = () => {
  const addTodoMenuBtns = document.querySelectorAll('.add-todo-btn, .cancel-add-new-todo-button');
  const addNewTodoMenu = document.querySelector('.add-new-todo-container');
  const addCategoryBtns = document.querySelectorAll('.category-btn-add');

  addTodoMenuBtns.forEach((addTodoMenuBtn) => {
    addTodoMenuBtn.addEventListener('click', () => {
      addNewTodoMenu.classList.toggle('show-add-new-todo');
      addCategoryBtns.forEach((addCategoryBtn) => {
        addCategoryBtn.classList.remove('active-category');
      });
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

const DeleteTodoMenu = () => {
  const deleteTodoMenuBtns = document.querySelectorAll('.todo-delete-btn, .cancel-delete-todo-button');
  const deleteTodoMenu = document.querySelector('.delete-todo-popup-container');

  deleteTodoMenuBtns.forEach((deleteTodoMenuBtn) => {
    deleteTodoMenuBtn.addEventListener('click', () => {
      deleteTodoMenu.classList.toggle('show-delete-todo-popup');
    });
  });
};

const DeleteAllTodoMenu = () => {
  const deleteAllTodoMenuBtns = document.querySelectorAll('.delete-all-done-todos-btn, .cancel-delete-all-todo-button');
  const deleteAllTodoMenu = document.querySelector('.delete-all-todo-popup-container');

  deleteAllTodoMenuBtns.forEach((deleteAllTodoMenuBtn) => {
    deleteAllTodoMenuBtn.addEventListener('click', () => {
      deleteAllTodoMenu.classList.toggle('show-delete-all-todo-popup');
    });
  });
};

const EditCategoriesMenu = () => {
  const editCategoriesMenuBtns = document.querySelectorAll('.edit-categories-btn, .cancel-edit-categories-button');
  const editCategoriesMenu = document.querySelector('.edit-categories-container');

  editCategoriesMenuBtns.forEach((editCategoriesMenuBtn) => {
    editCategoriesMenuBtn.addEventListener('click', () => {
      editCategoriesMenu.classList.toggle('show-edit-categories');
    });
  });
};

const DeleteCategoryMenu = () => {
  const deleteCategoryMenuBtns = document.querySelectorAll('.delete-category-btn, .cancel-delete-category-button');
  const deleteCategoryMenu = document.querySelector('.delete-category-popup-container');

  deleteCategoryMenuBtns.forEach((deleteCategoryMenuBtn) => {
    deleteCategoryMenuBtn.addEventListener('click', () => {
      deleteCategoryMenu.classList.toggle('show-delete-category-popup');
    });
  });
};

const AddCategoryMenu = () => {
  const addCategoryMenuBtns = document.querySelectorAll('.add-category-button, .cancel-add-category-button');
  const addCategoryMenu = document.querySelector('.add-category-popup-container');

  addCategoryMenuBtns.forEach((addCategoryMenuBtn) => {
    addCategoryMenuBtn.addEventListener('click', () => {
      addCategoryMenu.classList.toggle('show-add-category-popup');
    });
  });
};

const setMenus = () => {
  TodoMenu();
  AddTodoMenu();
  EditTodoMenu();
  DeleteTodoMenu();
  DeleteAllTodoMenu();
  EditCategoriesMenu();
  DeleteCategoryMenu();
  AddCategoryMenu();
};

export default setMenus;