// Cria estrelas com textos fofos
const sky = document.getElementById('sky');
const frases = [
  'Você é minha estrela favorita.',
  'Brilha mais que todas.',
  'Tua luz guia meu coração.',
  'Pequeno ponto no céu, grande no meu mundo.',
  'Até o infinito parece pequeno perto de você.',
  'Te amo em cada cintilar.',
  'Te vejo até nas estrelas.'
];

for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 2 + 1;
  star.style.width = star.style.height = size + 'px';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.title = frases[Math.floor(Math.random() * frases.length)];
  sky.appendChild(star);
}

// Corações com "Eu te amo, Giovanna" em várias línguas
const heartsDiv = document.getElementById('hearts');
const idiomas = [
  'Português','Inglês','Francês','Espanhol','Italiano',
  'Alemão','Japonês','Coreano','Russo','Chinês','Grego','Árabe'
];
const frasesAmor = [
  'Eu te amo, Giovanna','I love you, Giovanna','Je t’aime, Giovanna','Te amo, Giovanna',
  'Ti amo, Giovanna','Ich liebe dich, Giovanna','愛してる, Giovanna','사랑해, Giovanna',
  'Я тебя люблю, Giovanna','我爱你, Giovanna','Σ' αγαπώ, Giovanna','أحبك, Giovanna'
];

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

idiomas.forEach((lang, i)=>{
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = '❤️';
  heart.onclick = ()=>{
    alert(frasesAmor[i]);
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.value = 600;
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  };
  heartsDiv.appendChild(heart);
});