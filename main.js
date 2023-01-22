
import activateMenu from './blocks/header/menu/menu.js';
import activateBurger from './blocks/header/hamburger/hamburger.js';
import receiveQuatrain from './blocks/quatrain/quatrain.js';
import subscribe from './blocks/subscription/subscription.js';
import modifyBtn from './blocks/button/button.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  activateMenu();
  activateBurger();
  receiveQuatrain();
  subscribe();
  modifyBtn();

});
