const setDoneCheckboxes = () => {
  let doneCheckboxes = document.querySelectorAll('.done-checkbox');

  doneCheckboxes.forEach((doneCheckbox) => {
    doneCheckbox.replaceWith(doneCheckbox.cloneNode(true));
  });

  doneCheckboxes = document.querySelectorAll('.done-checkbox');

  doneCheckboxes.forEach(((doneCheckbox) => {
    doneCheckbox.addEventListener('change', (e) => {
      const currentTodoHeading = e.currentTarget.parentElement.parentElement
        .parentElement.childNodes[0];
      const currentTodoDescription = e.currentTarget.parentElement.parentElement
        .parentElement.childNodes[1];
      currentTodoHeading.classList.toggle('done');
      currentTodoDescription.classList.toggle('done');
    });
  }));
};

export default setDoneCheckboxes;