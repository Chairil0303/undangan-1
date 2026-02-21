// /js/audio.js
export function initAudio() {
  const audio = document.getElementById('bgm');
  const btnMusic = document.getElementById('btnMusic');

  if (!audio || !btnMusic) return;

  btnMusic.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      btnMusic.innerText = '🔊';
    } else {
      audio.pause();
      btnMusic.innerText = '🔇';
    }
  });

  return audio; // biar bisa dipakai file lain (misal pas opening selesai)
}