// Configuração das Partículas 
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "star" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#a044ff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } }
    }
});

// 1. Navegação entre Seções
document.getElementById('btn-start').addEventListener('click', () => {
    const gallery = document.getElementById('gallery-section');
    gallery.classList.remove('hidden');
    gallery.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btn-show-terminal').addEventListener('click', () => {
    const term = document.getElementById('terminal-section');
    term.classList.remove('hidden');
    term.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => document.getElementById('terminal-input').focus(), 800);
});

// 2. Gerador da Galeria com suas fotos reais
const dadosGaleria = [
    { src: "fotos/foto dele.JPG", frase: "Admiro sua determinação e o foco que você coloca em tudo o que ama !" },
    { src: "fotos/pontos turisticos.JPG", frase: "Nosso compromisso" },
    { src: "fotos/nosso beijo.JPG", frase: "Primeiro de muitos anos!" },
    { src: "fotos/café.jpeg", frase: "Nossas pausas favoritas" },
    { src: "fotos/casal.JPG", frase: "Um ser amoroso, cuidadoso e maravilhoso !" },
    { src: "fotos/diversao.JPG", frase: "Nossos momentos juntos." },
    { src: "fotos/foto dele no trabalho.JPG", frase: "Você é um profissional incrível!" },
    { src: "fotos/momentos.JPG", frase: "Nós dois contra o mundo." },
    { src: "fotos/evento.JPG", frase: "Meu parceiro de eventos !" },
    { src: "fotos/familia.JPG", frase: "Nossas diferenças só mostram como o respeito e o amor podem construir algo perfeito." },
    { src: "fotos/ano novo.JPG", frase: "Como vc sempre diz : Somos Perfeitos, e vamos conquistar muitas coisas juntos ainda ! " },
    { src: "fotos/foto minha.JPG", frase: "Com todo o meu amor, para a minha pessoa favorita no mundo." }
];

const galleryContainer = document.getElementById('gallery-container');

dadosGaleria.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'polaroid-container';
    const randomRot = Math.floor(Math.random() * 10 - 5);
    
    card.innerHTML = `
        <div class="polaroid-inner" style="--r: ${randomRot}">
            <div class="polaroid-front">
                <img src="${item.src}" alt="Foto">
            </div>
            <div class="polaroid-back">
                <p>${item.frase}</p>
            </div>
        </div>
    `;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    galleryContainer.appendChild(card);
});

// Lógica do Terminal
const terminalInput = document.getElementById('terminal-input');
const terminalHistory = document.getElementById('terminal-history');
const terminalBody = document.getElementById('terminal-body');

const tuxArt = `
     ---------
    < Mil memórias e uma vida inteira para explorarmos juntos. Amo te !>
     ---------
        \\
         \\
            .--.
           |o_o |
           |:_/ |
          //   \\ \\
         (|     | )
        /'\\_   _/ \`\\
        \\___)=(___/
`;

terminalInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const command = this.value.trim().toLowerCase();
        
        // 1. Registra o que ele digitou no histórico
        const line = document.createElement('p');
        line.innerHTML = `<span style="color: #bd93f9">eduardo@xubuntu-pc:~$</span> ${command}`;
        terminalHistory.appendChild(line);

        // 2. Condições de comandos
        if (command === 'surpresa') {
            const resp = document.createElement('pre');
            resp.style.color = "#50fa7b";
            resp.style.marginTop = "10px";
            resp.innerText = tuxArt;
            terminalHistory.appendChild(resp);
        } 
        else if (command === 'amor') {
            const resp = document.createElement('p');
            resp.style.color = "#ff79c6";
            resp.innerText = "[SUCCESS]: Sistema de Feliz Aniversário meu amor carregado. Tente 'surpresa' para mais detalhes.";
            terminalHistory.appendChild(resp);
        }
        else if (command === 'clear') {
            terminalHistory.innerHTML = '';
        }
        else {
            const err = document.createElement('p');
            err.style.color = "#ff5555";
            err.innerText = `bash: command not found: ${command}`;
            terminalHistory.appendChild(err);
        }

        // Limpa e rola para baixo
        this.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});