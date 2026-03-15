const scene=document.querySelector('.scene');

function crearCorazon(){
    const h=document.createElement('div');
    h.className='floating-heart';
    h.innerHTML='❤️';
    h.style.left=Math.random()*100+'vw';
    h.style.fontSize=18+Math.random()*30+'px';
    h.style.animationDuration=6+Math.random()*6+'s';
    scene.appendChild(h);
    setTimeout(()=>h.remove(),12000);
}

function crearPalabra(){
    const palabras=[
        'LIZ, gracias por llegar a mi vida
        'Te Amo mucho, mi niña',
        'Mi amor eres lo mejor que me pasó',
        'Siempre estaré contigo',
        'Juntos siempre',
        'Te adoro',
        'Eres mi vida entera',
        'Nunca quiero perderte'
    ];
    const w=document.createElement('div');
    w.className='word';
    w.textContent=palabras[Math.floor(Math.random()*palabras.length)];
    w.style.left=Math.random()*80+'vw';
    w.style.animationDuration=8+Math.random()*6+'s';
    scene.appendChild(w);
    setTimeout(()=>w.remove(),12000);
}

setInterval(crearCorazon,400);
setInterval(crearPalabra,900);

function abrirCarta(){
    document.getElementById('carta').style.display='flex';
}
function cerrarCarta(){
    document.getElementById('carta').style.display='none';
}