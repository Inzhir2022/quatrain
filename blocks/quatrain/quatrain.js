
let receiveQuatrain = () => {
  let quatrainBtn = findElem('.quatrain__btn.btn.btn_long');
  let repeatBtn = findElem('.quatrain__btn.btn.btn_short.btn_disabled');
  let quatrainWrapper = findElem('.quatrain__wrapper');
  let aboutBlock = findElem('.about');
  let subscriptionBlock = findElem('.subscription');
  let contactsBlock = findElem('.contacts');
  let footerBlock = findElem('.footer');

  let quatrains = {
      'Александр Сергеевич Пушкин': {
        'Зимний вечер':
          `Буря мглою небо кроет,
          Вихри снежные крутя;
          То, как зверь, она завоет,
          То заплачет, как дитя.`,
        'Узник':
          `Сижу за решеткой в темнице сырой.
          Вскормленный в неволе орел молодой,
          Мой грустный товарищ, махая крылом,
          Кровавую пищу клюет под окном.`,
        'О сколько нам открытий чудных…':
          `О сколько нам открытий чудных
          Готовят просвещенья дух
          И Опыт, [сын] ошибок трудных,
          И Гений, [парадоксов] друг,`
      },
      'Михаил Юрьевич Лермонтов': {
        'Поэт':
          `В наш век изнеженный не так ли ты, поэт,
          Свое утратил назначенье,
          На злато променяв ту власть, которой свет
          Внимал в немом благоговенье? `,
        'Мцыри':
          `Меня могила не страшит:
          Там, говорят, страданье спит
          В холодной вечной тишине;
          Но с жизнью жаль расстаться мне.`,
        'Совет':
          `Если, друг, тебе сгрустнется,
          Ты не дуйся, не сердись:
          Все с годами пронесется —
          Улыбнись и разгрустись.`
      },
      'Николоз Бараташвили':  {
        'Одинокая душа':
          `Нет, мне совсем не жаль сирот без дома.
          Им что? Им в мир открыты все пути.
          Но кто осиротел душой, такому
          Взаправду душу не с кем отвести.`,
        'Мужское отрезвленье - не измена':
          `Мужское отрезвленье - не измена.
          Красавицы, как вы ни хороши,
          Очарованье внешности мгновенно,
          Краса лица - не красота души.`,
        'Моей звезде':
          `На кого ты вечно в раздраженье?
          Не везет с тобой мне никогда,
          Злой мой рок, мое предназначенье,
          Путеводная моя звезда!`
    },
    'Сергей Александрович Есенин': {
      'Кто я? Что я? Только лишь мечтатель…':
          `Кто я? Что я? Только лишь мечтатель,
          Перстень счастья ищущий во мгле,
          Эту жизнь живу я словно кстати,
          Заодно с другими на земле.`,
      'Мелколесье. Степь и дали…':
        `Эх, гармошка, смерть-отрава,
        Знать, с того под этот вой
        Не одна лихая слава
        Пропадала трын-травой.`,
      'Мне осталась одна забава…':
        `Ах! какая смешная потеря!
        Много в жизни смешных потерь.
        Стыдно мне, что я в бога верил.
        Горько мне, что не верю теперь.`
    },
    'Владимир Семёнович Высоцкий': {
      'Песенка о переселении душ':
        `Кто верит в Магомета, кто — в Аллаха, кто — в Исуса,
        Кто ни во что не верит — даже в чёрта назло всем…
        Хорошую религию придумали индусы —
        Что мы, отдав концы, не умираем насовсем.`
    }
  };

  let titles = getTitlesArr();
  let randomIndex;
  let titlePar = createPar('0px', '100%');
  let authorPar = createPar('30px', '100%');
  let quatrainPar = createPar('30px', '100%');

  let pars = document.querySelectorAll('.quatrain p');
  pars.forEach(p => {
    setClass(p, 'animate__animated');
  });

  repeatBtn.disabled = true;
  quatrainBtn.addEventListener('click', createText);

  function createText() {
    randomIndex = getRandomIndex(titles);
    setElementsClassList();

    for (let author in quatrains) {
      for (let title in quatrains[author]) {
        if (titles[randomIndex] == title) {

          addQuatrainBtnAnimation();
          setTextContent(authorPar, author + ',');
          setTextContent(quatrainPar, quatrains[author][title]);
          setTextContent(titlePar, title);
          titlePar.style.fontWeight = '700';
          titlePar.style.marginBottom = '40px';
        }
      }
    }
    quatrainBtn.removeEventListener('click', createText);
    quatrainBtn.style.cursor = 'auto';
    repeatBtn.disabled = false;
    repeatBtn.classList.remove('btn_disabled');
    setCursorStyle(repeatBtn);
  }

  repeatBtn.addEventListener('click', function () {
    addRepeatBtnAnimation();

    setTimeout(function () {
      defineClassList(aboutBlock, 'about',  'animate__animated');
      defineClassList(subscriptionBlock, 'subscription', 'animate__animated');
      defineClassList(contactsBlock, 'contacts', 'animate__animated');
      defineClassList(footerBlock, 'footer', 'animate__animated');
      aboutBlock.classList.toggle('animate__fadeInUp', innerWidth < 993);
      subscriptionBlock.classList.toggle('animate__fadeInUp', innerWidth < 993);
      contactsBlock.classList.toggle('animate__fadeInUp', innerWidth < 993);
      footerBlock.classList.toggle('animate__fadeInUp', innerWidth < 993);
      setTextContent(authorPar, '');
      setTextContent(titlePar, '');
      setTextContent(quatrainPar, '');
    }, 500);
    
    this.disabled = true;
    setCursorStyle(this);
    quatrainBtn.style.cursor = 'pointer';
    quatrainBtn.addEventListener('click', createText);
  });

  function findElem(selector) {
    let elem = document.querySelector(selector);
    return elem;
  }

  function createPar(marginTop, maxWidth) {
    let par = document.createElement('p');
    par.style.marginTop = marginTop;
    par.style.maxWidth = maxWidth;
    setClass(par, 'verse');
    quatrainWrapper.insertAdjacentElement('afterend', par);
    return par;
  }

  function defineClassList(elem, className1, className2) {
    elem.classList = className1 + ' ' + className2;
  }

  function setElementsClassList() {
    defineClassList(authorPar, 'verse', 'animate__animated');
    defineClassList(quatrainPar, 'verse', 'animate__animated');
    defineClassList(titlePar, 'verse',  'animate__animated');
    defineClassList(aboutBlock, 'about',  'animate__animated');
    defineClassList(subscriptionBlock, 'subscription', 'animate__animated');
    defineClassList(contactsBlock, 'contacts', 'animate__animated');
    defineClassList(footerBlock, 'footer', 'animate__animated');
  }

  function setClass(elem, className) {
    elem.classList.add(className);
  }

  function setTextContent(elem, text) {
    elem.innerHTML = text ;
  }
  function getTitlesArr() {
    let titles = [];
    for (let author in quatrains) {
      for (let title in quatrains[author]) {
        titles.push(title);
      }
    }
    return titles;
  }

  function addQuatrainBtnAnimation() {
    let innerWidth = defineInnerWidth();
    authorPar.classList.toggle('animate__fadeInLeft', innerWidth >= 993);
    quatrainPar.classList.toggle('animate__fadeInLeft', innerWidth >= 993);
    titlePar.classList.toggle('animate__fadeInLeft', innerWidth >=993);

    aboutBlock.classList.toggle('animate__fadeInUp', innerWidth < 993);
    subscriptionBlock.classList.toggle('animate__fadeInUp', innerWidth < 993);
    contactsBlock.classList.toggle('animate__fadeInUp', innerWidth < 993);
    footerBlock.classList.toggle('animate__fadeInUp', innerWidth < 993);
    authorPar.classList.toggle('animate__fadeInDown', innerWidth < 993);
    quatrainPar.classList.toggle('animate__fadeInDown', innerWidth < 993);
    titlePar.classList.toggle('animate__fadeInDown', innerWidth < 993);
  }

  function addRepeatBtnAnimation() {
    let innerWidth = defineInnerWidth();
    authorPar.classList.toggle('animate__fadeOutLeft', innerWidth >= 993);
    quatrainPar.classList.toggle('animate__fadeOutLeft', innerWidth >= 993);
    titlePar.classList.toggle('animate__fadeOutLeft', innerWidth >= 993);

    subscriptionBlock.classList.toggle('animate__fadeOutUp', innerWidth < 993);
    contactsBlock.classList.toggle('animate__fadeOutUp', innerWidth < 993);
    footerBlock.classList.toggle('animate__fadeOutUp', innerWidth < 993);
    aboutBlock.classList.toggle('animate__fadeOutUp', innerWidth < 993);
    authorPar.classList.toggle('animate__fadeOutUp', innerWidth < 993);
    quatrainPar.classList.toggle('animate__fadeOutUp', innerWidth < 993);
    titlePar.classList.toggle('animate__fadeOutUp', innerWidth < 993);
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  function getMaxArrIndex(arr) {
    return arr.length;
  }

  function getRandomIndex(arr) {
    return getRandomNumber(0, getMaxArrIndex(arr));
  }

  function setCursorStyle(btn) {
    if (btn.disabled) {
      btn.style.cursor = 'auto';
    }
    else {
      btn.style.cursor = 'pointer';
    }
  }

  function defineInnerWidth() {
    return window.innerWidth;
  }
};



export default receiveQuatrain;