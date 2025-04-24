document.addEventListener('click', (e) => {
  const hamMenu = document.querySelector('.ham-menu');
  const offScreenMenu = document.querySelector('.off-screen-menu');

  if (e.target.closest('.ham-menu')) {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
  }
});
