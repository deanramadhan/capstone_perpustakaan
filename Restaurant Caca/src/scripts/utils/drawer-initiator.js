const DrawerInitiator = {
  init() {
    const button = document.querySelector('.drawer');
    const nav = document.querySelector('.navbar');
    const content = document.querySelector('main');

    if (!button || !nav || !content) {
      console.error('Button, nav, or content element is missing.');
      return;
    }

    const self = this;

    button.addEventListener('click', (event) => {
      self._toggleDrawer(event, nav);
    });

    content.addEventListener('click', (event) => {
      self._closeDrawer(event, nav);
    });
  },

  _toggleDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.toggle('open');
  },

  _closeDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.remove('open');
  },
};

export default DrawerInitiator;
