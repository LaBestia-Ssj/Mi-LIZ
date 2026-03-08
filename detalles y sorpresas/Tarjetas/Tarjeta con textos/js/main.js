const audio = document.getElementById('cancion');

document.body.addEventListener('click', function activarAudio() {
        audio.play();
        document.body.style.cursor = 'default';
        document.body.removeEventListener('click', activarAudio); // solo una vez
}, { once: true });

const messages = [
        
        "Eres más fuerte de lo que crees, mi amor.",
        
        "Soy tu mayor admirador.",
        
        "Siempre estaré contigo, nunca estás sola.",
        
        "Cada día es un nuevo comienzo, y estoy aquí para ti.",
        
        "Amo tu mirada.",
        
        "Amo tu voz.",
        
        "Tu valentía es mi mayor orgullo.",
        
        "Te amo más que las palabras pueden expresar.",
        
        "En cada paso del camino, siempre seré tu apoyo.",
        
        "Recuerda que los días difíciles son temporales, como las nubes pasajeras.",
        
        "Eres mi estrella brillante, iluminando todo a tu alrededor.",
        
        "Cada segundo contigo es un regalo invaluable.",
        
        "Amo tus ojitos preciosos.",
        
        "Tu sonrisa ilumina incluso los días más oscuros.",
        
        "Eres mi razón para seguir soñando y luchando.",
        
        "Siempre encuentras la manera de hacer todo mejor, mi amor.",
        
        "Tu amor es el tesoro más grande que poseo."
        
];

function showNewMessage() {
        
        const messageElement = document.getElementById('message');
        
        const newMessage = messages[Math.floor(Math.random() * messages.length)];
        
        messageElement.textContent = newMessage;
        
        createFloatingHearts();
        
}

function createFloatingHearts() {
        
        for (let i = 5; i < 10; i++) {
                
                const heart = document.createElement('div');
                
                heart.textContent = '❤️';
                
                heart.className = 'floating-heart';
                
                heart.style.left = `${Math.random() * 100}vw`;
                
                heart.style.top = `${Math.random() * 100}vh`;
                
                document.body.appendChild(heart);
                
                heart.addEventListener('animationend', () => {
                        
                        heart.remove();
                        
                });
                
        }
        
}