const display = document.getElementById('display');

    function playSound(id) {
      const audio = document.getElementById(id);
      const pad = audio.parentElement;
      audio.currentTime = 0;
      audio.play();
      display.textContent = pad.id;
    }

    document.querySelectorAll('.drum-pad').forEach(pad => {
      pad.addEventListener('click', () => {
        const key = pad.textContent.trim();
        playSound(key);
      });
    });

    document.addEventListener('keydown', (e) => {
      const key = e.key.toUpperCase();
      if ("QWEASDZXC".includes(key)) {
        playSound(key);
      }
    });