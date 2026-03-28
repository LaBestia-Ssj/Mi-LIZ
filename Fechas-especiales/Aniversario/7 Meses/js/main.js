"use strict";

const NOMBRE_1 = "Mi";
const NOMBRE_2 = "LIZ ";
const FECHA_INICIO = "2025-06-18"; // aca va la fecha de noviazgo para carcule los dias
const MENSAJE = "Gracias por formar parte de mi vida y por darme el privilegio de estar a su lado, gracias por estos 7 meses 💖";
const CANCION_URL = "https://raw.githubusercontent.com/aspajo2006/mi-musica/main/LA%20SANTA%20GRIFA%20%E2%A7%B8%E2%A7%B8%20PENSANDO%20EN%20TI%20%E2%A7%B8%E2%A7%B8%20VIDEO%20OFICIAL.mp3"; // el audio
// aca va las frases lo que dice el mensaje sorpresa
const FRASES = [
  "Gracias por darme el honor de ser suyo. ❤️✨",
  "Mi vida a su lado es mas perfecta, asi como su sonrisa. ✨",
  "En cada latido de mi corazon está su nombre. ❤️",
  "Gracias por permitirme amarla. 💕",
  "Le sere fiel toda la eternidad. 💕",
  "Soy su fiel esclavo para toda la vida. 💕",
  "Mi amor eterno sera siempre usted. 🌸",
  "Usted es el sueño del que nunca quiero despertar. 🌙",
  "Gracias por existir en mi vida, gracias por amarme. 💫",
  "La amo más de lo que las palabras pueden decir. 💕"
];

const namesEl = document.getElementById("names");
const typeEl = document.getElementById("type");
const counterEl = document.getElementById("counter");
const quoteEl = document.getElementById("quote");
const audioEl = document.getElementById("audio");
const heartsContainer = document.getElementById("hearts");
const playBtn = document.getElementById("play");

namesEl.textContent = `${NOMBRE_1}  ${NOMBRE_2}`; //aca se va el "Y" entre los 2 nombres

(function typeWriter(text, delay = 45) {
  let i = 0;
  
  function tick() {
    typeEl.textContent = text.slice(0, i++);
    if (i <= text.length) setTimeout(tick, delay);
  }
  tick();
})(MENSAJE);

function actualizarContador() {
  const inicio = new Date(FECHA_INICIO + "T00:00:00");
  const diff = Math.floor((new Date() - inicio) / (1000 * 60 * 60 * 24));
  counterEl.textContent = !isNaN(diff) ? `Llevamos ${diff} días juntos 💫` : "";
}
actualizarContador();
setInterval(actualizarContador, 60000);

function spawnHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  const size = 10 + Math.random() * 18;
  h.style.width = size + "px";
  h.style.height = size + "px";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = 6 + Math.random() * 6 + "s";
  h.style.opacity = (0.6 + Math.random() * 0.4).toFixed(2);
  heartsContainer.appendChild(h);
  setTimeout(() => h.remove(), 12000);
}
setInterval(spawnHeart, 350);

document.getElementById("surprise").addEventListener("click", () => {
  const frase = FRASES[Math.floor(Math.random() * FRASES.length)];
  quoteEl.textContent = frase;
  quoteEl.style.display = "block";
});

audioEl.src = CANCION_URL;

let playing = false;
playBtn.addEventListener("click", () => {
  if (!playing) {
    audioEl.currentTime = 0;
    audioEl.play();
  } else {
    audioEl.pause();
  }
});
audioEl.addEventListener("play", () => {
  playing = true;
  playBtn.textContent = "⏸️ Pausa";
});
audioEl.addEventListener("pause", () => {
  playing = false;
  playBtn.textContent = "▶️ Música";
});