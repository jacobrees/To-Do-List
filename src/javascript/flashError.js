const flashErrorContainer = document.querySelector('.flash-error-popup-container');

const flashError = (text) => {
  const flashErrorMessage = document.querySelector('.flash-error-message');
  flashErrorMessage.textContent = text;

  flashErrorContainer.classList.toggle('flash-error-todo-popup');
};

const setCloseFlashError = () => {
  const flashErrorBtn = document.querySelector('.flash-error-button');
  flashErrorBtn.addEventListener('click', () => {
    flashErrorContainer.classList.toggle('flash-error-todo-popup');
  });
};

export { flashError, setCloseFlashError };