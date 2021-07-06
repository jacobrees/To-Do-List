const toggleLoadingScreen = () => {
  const loadingScreen = document.querySelector('.loading-container');
  loadingScreen.classList.toggle('hide-loading-screen');
};

export default toggleLoadingScreen;