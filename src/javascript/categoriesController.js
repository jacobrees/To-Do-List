const addCategoryMenu = () => {
  const addCategoryMenuBtns = document.querySelectorAll('.add-category-button, .cancel-add-category-button');
  const addCategoryMenu = document.querySelector('.add-category-popup-container');

  addCategoryMenuBtns.forEach((addCategoryMenuBtn) => {
    addCategoryMenuBtn.addEventListener('click', () => {
      addCategoryMenu.classList.toggle('show-add-category-popup');
    });
  });
};

const setCategoriesControler = () => {
  addCategoryMenu();
};

export default setCategoriesControler;