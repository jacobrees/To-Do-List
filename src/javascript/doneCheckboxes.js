const setDoneCheckboxes = () => {
  const doneCheckboxes = document.querySelectorAll('.done-checkbox');

  doneCheckboxes.forEach(((doneCheckbox) => {
    doneCheckbox.addEventListener('change', (e) => {
      const currentTodoHeading = e.currentTarget.parentElement.parentElement
        .parentElement.childNodes[1];
      const currentTodoDescription = e.currentTarget.parentElement.parentElement
        .parentElement.childNodes[3];
      currentTodoHeading.classList.toggle('done');
      currentTodoDescription.classList.toggle('done');
    });
  }));
};

export default setDoneCheckboxes;