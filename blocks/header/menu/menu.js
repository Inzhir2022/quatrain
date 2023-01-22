
let activateMenu = () => {
  let menu = document.querySelector('.menu');
  let header = document.querySelector('.header');

  menu.addEventListener('click', function (e) {
    e.preventDefault();
    let target = e.target;
    let links = this.querySelectorAll('.menu__link');
    links.forEach(link => {
      link.classList.remove('active');
      if (target == link) {
        target.classList.add('active');
        let linkHref = link.href.match(/#.*/)[0];
        let section = document.querySelector('' + linkHref);
        let headerHeigth = header.clientHeight;
        window.scrollTo(0, section.offsetTop - headerHeigth);
      }
    });
  });
};

export default activateMenu;
