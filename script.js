
document.addEventListener('DOMContentLoaded', () => {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const confettiContainer = document.getElementById('confettiContainer');
    const audio = document.getElementById('birthdayMusic');

    const confettiEmojis = ['💗', '💕', '💖', '✨', '🎀', '🌸', '⭐'];

    let surpriseOpened = false;

    function createConfetti() {
        for (let i = 0; i < 45; i++) {
            const piece = document.createElement('span');

            piece.className = 'confetti';
            piece.textContent =
                confettiEmojis[
                    Math.floor(Math.random() * confettiEmojis.length)
                ];

            piece.style.left = Math.random() * 100 + 'vw';
            piece.style.setProperty(
                '--fall-time',
                (2 + Math.random() * 3) + 's'
            );
            piece.style.setProperty(
                '--drift',
                (Math.random() * 180 - 90) + 'px'
            );
            piece.style.animationDelay = Math.random() * 1.2 + 's';
            piece.style.fontSize = (14 + Math.random() * 18) + 'px';

            confettiContainer.appendChild(piece);

            piece.addEventListener('animationend', () => {
                piece.remove();
            });
        }
    }

    surpriseBtn.addEventListener('click', () => {
        if (!surpriseOpened) {
            surpriseMessage.hidden = false;
            surpriseBtn.textContent = 'Yay! Sending you hugs! 💗';
            surpriseOpened = true;

            createConfetti();

            surpriseMessage.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        } else {
            createConfetti();
        }
    });

    if (audio) {
        audio.addEventListener('play', () => {
            document.body.classList.add('play-music');
        });

        audio.addEventListener('pause', () => {
            document.body.classList.remove('play-music');
        });

        audio.addEventListener('ended', () => {
            document.body.classList.remove('play-music');
        });
    }
});
