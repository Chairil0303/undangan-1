// /js/main.js
import { initAudio } from './audio.js';
import { initOpeningAnimation } from './animations.js';

// Guest name
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama');
if (nama) document.getElementById('guestName').innerText = nama;

// Init modules
const audio = initAudio();
initOpeningAnimation(audio);