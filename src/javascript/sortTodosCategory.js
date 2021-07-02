import iso from './isotope.js';

const setTodoSortBtns = () => {
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

export default setTodoSortBtns;