function openInvitation() {
    const gatekeeper = document.getElementById('gatekeeper');
    gatekeeper.style.transform = 'translateY(-100vh)';
    
    setTimeout(() => {
        gatekeeper.classList.add('hidden');
    }, 800);

    document.getElementById('mainContent').classList.remove('hidden');
    document.getElementById('musicControl').classList.remove('hidden');
    const music = document.getElementById('bgMusic');
    music.play().catch(error => {
        console.log("Autoplay diblokir oleh browser. Musik akan aktif pada interaksi berikutnya.", error);
    });
}

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const button = document.getElementById('musicControl');

    if (music.paused) {
        music.play();
        button.innerText = "🎵";
        button.style.animationPlayState = "running";
    } else {
        music.pause();
        button.innerText = "🔇";
        button.style.animationPlayState = "paused";
    }
}