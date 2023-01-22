
let modifyBtn = ()=> {
  let btn = document.querySelector('.form__btn.btn');
  let innerWidth = defineInnerWidth();

  if (innerWidth <= 575) {
    btn.innerHTML = '';
    btn.insertAdjacentHTML('afterbegin', '<i class="far fa-paper-plane"></i>');
  }

  function defineInnerWidth() {
    return window.innerWidth;
  }
};

export default modifyBtn;