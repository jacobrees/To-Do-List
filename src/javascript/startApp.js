import iso from './isotope.js';

const initializeTodoMenu = () => {
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

const initializeAddTodoMenu = () => {
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

const initializeEditTodoMenu = () => {
  const editTodoMenuBtns = document.querySelectorAll('.todo-edit-btn, .cancel-edit-existing-todo-button');
  const editExistingTodoMenu = document.querySelector('.edit-existing-todo-container');

  editTodoMenuBtns.forEach((editTodoMenuBtn) => {
    editTodoMenuBtn.addEventListener('click', () => {
      editExistingTodoMenu.classList.toggle('show-edit-existing-todo');
    });
  });
};

const initializeDeleteTodoMenu = () => {
  const deleteTodoMenuBtns = document.querySelectorAll('.todo-delete-btn, .cancel-delete-todo-button');
  const deleteTodoMenu = document.querySelector('.delete-todo-popup-container');

  deleteTodoMenuBtns.forEach((deleteTodoMenuBtn) => {
    deleteTodoMenuBtn.addEventListener('click', () => {
      deleteTodoMenu.classList.toggle('show-delete-todo-popup');
    });
  });
};

const initializeDeleteAllTodoMenu = () => {
  const deleteAllTodoMenuBtns = document.querySelectorAll('.delete-all-done-todos-btn, .cancel-delete-all-todo-button');
  const deleteAllTodoMenu = document.querySelector('.delete-all-todo-popup-container');

  deleteAllTodoMenuBtns.forEach((deleteAllTodoMenuBtn) => {
    deleteAllTodoMenuBtn.addEventListener('click', () => {
      deleteAllTodoMenu.classList.toggle('show-delete-all-todo-popup');
    });
  });
};

const initializeEditCategoriesMenu = () => {
  const editCategoriesMenuBtns = document.querySelectorAll('.edit-categories-btn, .cancel-edit-categories-button');
  const editCategoriesMenu = document.querySelector('.edit-categories-container');

  editCategoriesMenuBtns.forEach((editCategoriesMenuBtn) => {
    editCategoriesMenuBtn.addEventListener('click', () => {
      editCategoriesMenu.classList.toggle('show-edit-categories');
    });
  });
};

const initializeShowCategoriesBtn = () => {
  const showCategoriesBtn = document.querySelector('.show-categories-btn');

  showCategoriesBtn.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  });
};

const initializeDeleteCategoryMenu = () => {
  const deleteCategoryMenuBtns = document.querySelectorAll('.delete-category-btn, .cancel-delete-category-button');
  const deleteCategoryMenu = document.querySelector('.delete-category-popup-container');

  deleteCategoryMenuBtns.forEach((deleteCategoryMenuBtn) => {
    deleteCategoryMenuBtn.addEventListener('click', () => {
      deleteCategoryMenu.classList.toggle('show-delete-category-popup');
    });
  });
};

const initializeAddCategoryMenu = () => {
  const addCategoryMenuBtns = document.querySelectorAll('.add-category-button, .cancel-add-category-button');
  const addCategoryMenu = document.querySelector('.add-category-popup-container');

  addCategoryMenuBtns.forEach((addCategoryMenuBtn) => {
    addCategoryMenuBtn.addEventListener('click', () => {
      addCategoryMenu.classList.toggle('show-add-category-popup');
    });
  });
};

const initializeTodoSortGrid = () => {
  const sortCategoryBtns = document.querySelectorAll('.category-btn-sort');

  sortCategoryBtns.forEach(((sortCategoryBtn) => {
    sortCategoryBtn.addEventListener('click', (e) => {
      if (!e.currentTarget.classList.contains('active-category')) {
        sortCategoryBtns.forEach((sortCategoryBtn) => {
          sortCategoryBtn.classList.remove('active-category');
        });
        e.currentTarget.classList.add('active-category');
        if (e.currentTarget.childNodes[3].textContent === 'all') {
          iso.arrange({ filter: '*' });
        } else {
          iso.arrange({ filter: `.${e.currentTarget.childNodes[3].textContent}` });
        }
      }
    });
  }));
};

const initializeDoneCheckboxes = () => {
  const doneCheckboxes = document.querySelectorAll('.done-checkbox');

  doneCheckboxes.forEach(((doneCheckbox) => {
    doneCheckbox.addEventListener('change', (e) => {
        const currentTodoHeading = e.currentTarget.parentElement.parentElement.parentElement.childNodes[1]; // eslint-disable-line
        const currentTodoDescription = e.currentTarget.parentElement.parentElement.parentElement.childNodes[3]; // eslint-disable-line
      currentTodoHeading.classList.toggle('done');
      currentTodoDescription.classList.toggle('done');
    });
  }));
};

const start = () => {
  initializeTodoMenu();
  initializeAddTodoMenu();
  initializeEditTodoMenu();
  initializeDeleteTodoMenu();
  initializeDeleteAllTodoMenu();
  initializeEditCategoriesMenu();
  initializeShowCategoriesBtn();
  initializeDeleteCategoryMenu();
  initializeAddCategoryMenu();
  initializeTodoSortGrid();
  initializeDoneCheckboxes();
};

export default start;