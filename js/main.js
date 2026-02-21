// /js/main.js
import { initAudio } from './audio.js';
import { initOpeningAnimation } from './animations.js';


import { goTo } from './nav.js';
import { playEventExit } from './animations.js';

document.getElementById('nav-event')?.addEventListener('click', () => {
  goTo('event');
});

document.getElementById('nav-rundown')?.addEventListener('click', () => {
  playEventExit('rundown');
});


// Guest name
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama');
if (nama) document.getElementById('guestName').innerText = nama;

// Init modules
const audio = initAudio();
initOpeningAnimation(audio);