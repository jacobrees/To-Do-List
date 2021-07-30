const setAddTodoMenuCategoryBtns = () => {
  const addCategoryBtns = document.querySelectorAll('.category-btn-add');
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

export default setAddTodoMenuCategoryBtns;