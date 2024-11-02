document.addEventListener('click', () => {
    const audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    }
}, { once: true });
