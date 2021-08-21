const toggleLoadingScreen = () => {
  const loadingScreen = document.querySelector('.loading-container');
  loadingScreen.classList.toggle('hide-loading-screen');
};

const launchStartScreen = () => {
  const startScreen = document.querySelector('.start-screen-container');
  const startScreenBtn = document.querySelector('.start-screen-btn');

  if (localStorage.length !== 0) {
    startScreen.style.display = 'none';
  }

  startScreenBtn.addEventListener('click', () => {
    startScreen.classList.add('hide-start-screen');
  });
};

const displayContent = () => {
  const main = document.querySelector('main');
  main.style.opacity = 1;
};

export { toggleLoadingScreen, launchStartScreen, displayContent };