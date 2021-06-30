const clearEditTodoForm = () => {
  const closeEditTodoBtns = document.querySelectorAll('.cancel-edit-existing-todo-button, .add-edit-existing-todo-button');
  const editTodoInputs = document.querySelectorAll('#edit-todo-title, #edit-todo-description');

  closeEditTodoBtns.forEach((closeEditTodoBtn) => {
    closeEditTodoBtn.addEventListener('click', () => {
      setTimeout(() => {
        editTodoInputs.forEach((todoInput) => {
          todoInput.value = '';
        });
      }, 250);
    });
  });
};

const clearAddTodoForm = () => {
  const closeAddTodoBtns = document.querySelectorAll('.cancel-add-new-todo-button, .add-add-new-todo-button');
  const addTodoInputs = document.querySelectorAll('#add-todo-title, #add-todo-description');
  const addCategoryBtns = document.querySelectorAll('.category-btn-add');

  closeAddTodoBtns.forEach((closeAddTodoBtn) => {
    closeAddTodoBtn.addEventListener('click', () => {
      setTimeout(() => {
        addCategoryBtns.forEach((addCategoryBtn) => {
          addCategoryBtn.classList.remove('active-category');
        });
        addTodoInputs.forEach((todoInput) => {
          todoInput.value = '';
        });
      }, 250);
    });
  });
};

const clearAddCategoryForm = () => {
  const closeAddCategoryBtns = document.querySelectorAll('.cancel-add-category-button, .add-add-category-button');
  const addCategoryInput = document.querySelector('#add-category-title');

  closeAddCategoryBtns.forEach((closeAddCategoryBtn) => {
    closeAddCategoryBtn.addEventListener('click', () => {
      setTimeout(() => {
        addCategoryInput.value = '';
      }, 250);
    });
  });
};

const setClearForms = () => {
  clearEditTodoForm(); clearAddTodoForm(); clearAddCategoryForm();
};
export default setClearForms;
