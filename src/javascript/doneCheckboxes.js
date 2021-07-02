const setDoneCheckboxes = () => {
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

export default setDoneCheckboxes;