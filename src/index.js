import changeNav from './functions/responsive';
import { animateNav, fadeArrow, reveal } from './functions/animations';
import { loadMe, loadExp, loadPro, loadFavicon, loadSkating } from './functions/loadImages';
import { showModal } from './functions/getInfo';

import './styles/normalize.css';
import './styles/styles.css';
import './styles/animations.css';
import './styles/responsive.css';
import './styles/waves.css'

const icon = document.querySelector('.icon');
icon.addEventListener('click', changeNav);

loadMe();
loadSkating();
loadExp();
loadPro();
loadFavicon();

showModal();

window.onscroll = function () {
    animateNav();
    fadeArrow();
    reveal();
}


