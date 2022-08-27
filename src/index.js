import changeNav from './functions/responsive';
import { animateNav, fadeArrow, reveal } from './functions/animations';
import { loadMe, loadExp, loadPro } from './functions/loadImages';

import './styles/normalize.css';
import './styles/styles.css';
import './styles/animations.css';
import './styles/responsive.css';


const icon = document.querySelector('.icon');
icon.addEventListener('click', changeNav);

loadMe();
loadExp();
loadPro();

window.onscroll = function () {
    animateNav();
    fadeArrow();
    reveal();
}


