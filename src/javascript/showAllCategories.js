const setShowAllCategoriesBtn = () => {
  const showCategoriesBtn = document.querySelector('.show-categories-btn');

  showCategoriesBtn.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  });
};

export default setShowAllCategoriesBtn;