const clearEditTodoForm = () => {
  const editTodoInputs = document.querySelectorAll('#edit-todo-title, #edit-todo-description');

  setTimeout(() => {
    editTodoInputs.forEach((todoInput) => {
      todoInput.value = '';
    });
  }, 250);
};

const clearAddTodoForm = () => {
  const addTodoInputs = document.querySelectorAll('#add-todo-title, #add-todo-description');
  const addCategoryBtns = document.querySelectorAll('.category-btn-add');

  setTimeout(() => {
    addCategoryBtns.forEach((addCategoryBtn) => {
      addCategoryBtn.classList.remove('active-category');
    });
    addTodoInputs.forEach((todoInput) => {
      todoInput.value = '';
    });
  }, 250);
};

const clearAddCategoryForm = () => {
  const addCategoryInput = document.querySelector('#add-category-title');

  setTimeout(() => {
    addCategoryInput.value = '';
  }, 250);
};

export { clearEditTodoForm, clearAddTodoForm, clearAddCategoryForm };
