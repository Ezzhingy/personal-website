import eugenePic from '../images/eugene-pic.jpg';
import linkedIn from '../images/linkedIn.svg';
import github from '../images/github.svg';
import email from '../images/email.svg';

import kumon from '../images/Kumon.jpeg';
import ignition from '../images/ignition.jpeg';
import shad from '../images/SHAD.png';

import ticTacToe from '../images/tic-tac-toe.jpeg';
import calc from '../images/calculator.jpeg';
import sketch from '../images/sketch.png';
import journal from '../images/j4me.png';

import icon from '../images/favicon.ico';

import single from '../images/single-skating.jpeg';
import pairs from '../images/pair-skating.jpeg';

export function loadMe () {
    const meBox = document.querySelector('.me');
    const eugenePicElement = document.createElement('img');
    eugenePicElement.src = eugenePic;
    eugenePicElement.alt = "Picture of Eugene Zhang";
    meBox.appendChild(eugenePicElement);

    const link = document.querySelector('#link');
    const linkedInImg = document.createElement('img');
    linkedInImg.src = linkedIn;
    linkedInImg.alt = 'LinkedIn logo';
    link.appendChild(linkedInImg);

    const git = document.querySelector('#git');
    const githubImg = document.createElement('img');
    githubImg.src = github;
    githubImg.alt = 'Github logo';
    git.appendChild(githubImg);

    const mail = document.querySelector('#mail');
    const emailImg = document.createElement('img');
    emailImg.src = email;
    emailImg.alt = 'Email logo';
    mail.appendChild(emailImg);
}

export function loadSkating () {
    const singleBox = document.querySelector('.single-skating');
    const singleElement = document.createElement('img');
    singleElement.src = single;
    singleElement.alt = "Picture of Eugene Zhang Ice Dancing";
    singleBox.appendChild(singleElement);

    const pairsBox = document.querySelector('.pairs-skating');
    const pairsElement = document.createElement('img');
    pairsElement.src = pairs;
    pairsElement.alt = "Picture of Eugene Zhang Ice Dancing";
    pairsBox.appendChild(pairsElement);
}

export function loadExp () {
    const kumonBox = document.querySelector('#kumon-img');
    const ignitionBox = document.querySelector('#ignition-img');
    const shadBox = document.querySelector('#shad-img');

    const kumonImg = document.createElement('img');
    kumonImg.classList.add('kumon');
    kumonImg.src = kumon;
    kumonImg.alt = 'Kumon Logo';

    const ignitionImg = document.createElement('img');
    ignitionImg.classList.add('ignition');
    ignitionImg.src = ignition;
    ignitionImg.alt = 'Ignition Hacks 2021 Logo';

    const shadImg = document.createElement('img');
    shadImg.classList.add('shad');
    shadImg.src = shad;
    shadImg.alt = 'SHAD 2021 Logo';

    kumonBox.appendChild(kumonImg);
    ignitionBox.appendChild(ignitionImg);
    shadBox.appendChild(shadImg);
}

export function loadPro () {
    const ticBox = document.querySelector('#tic-tac-toe-img');
    const calcBox = document.querySelector('#calc-img');
    const sketchBox = document.querySelector('#sketch-img');
    const journalBox = document.querySelector('#journal-img');

    const ticImg = document.createElement('img');
    ticImg.classList.add('tic-tac-toe');
    ticImg.src = ticTacToe;
    ticImg.alt = 'Image of Tic-Tac-Toe';

    const calcImg = document.createElement('img');
    calcImg.classList.add('calc');
    calcImg.src = calc;
    calcImg.alt = 'Image of Calculator';

    const sketchImg = document.createElement('img');
    sketchImg.classList.add('sketch');
    sketchImg.src = sketch;
    sketchImg.alt = 'Image of Sketchpad';

    const journalImg = document.createElement('img');
    journalImg.classList.add('journal');
    journalImg.src = journal;
    journalImg.alt = 'Image of Journal4Me';

    ticBox.appendChild(ticImg);
    calcBox.appendChild(calcImg);
    sketchBox.appendChild(sketchImg);
    journalBox.appendChild(journalImg);
    
}

export function loadFavicon () {
    const link = document.querySelector("link[rel~='icon']");
    link.href = icon;
}