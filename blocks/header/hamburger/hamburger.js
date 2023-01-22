
let activateBurger = () => {

  let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
    setBodyOverflow();
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
      setBodyOverflow();
    });
  });

  function checkHamburgerStatus() {
    return hamburger.classList.contains('hamburger_active');
  }

  function defineInnerWidth() {
    let innerWidth = window.innerWidth;
    return innerWidth;
  }

  function setBodyOverflow() {
    let innerWidth = defineInnerWidth();
    if (checkHamburgerStatus() && innerWidth <= 767) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = '';
    }
  }
};
export default activateBurger;