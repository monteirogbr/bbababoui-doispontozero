const containerChuva = document.getElementById('chuva');
const cenario = document.querySelector('.cenario');
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

function criarGota() {
    const gota = document.createElement('div');
    gota.classList.add('letra');
    
    // Caractere aleatório
    gota.innerText = letras.charAt(Math.floor(Math.random() * letras.length));
    
    // Posição horizontal (espalhada na largura da chuva)
    const posicaoX = Math.random() * 160; 
    gota.style.left = `${posicaoX}px`;
    
    // Velocidade e tamanho (profundidade)
    const duracao = Math.random() * 0.8 + 0.6; // Queda bem rápida
    const tamanhoFonte = Math.random() * 10 + 10; // Entre 10px e 20px
    
    gota.style.animationDuration = `${duracao}s`;
    gota.style.fontSize = `${tamanhoFonte}px`;
    
    // Se a letra for pequena (está "atrás"), fica mais escura para dar profundidade
    if (tamanhoFonte < 14) {
        gota.style.color = "#00887a";
        gota.style.opacity = "0.5";
        gota.style.zIndex = "1";
    } else {
        gota.style.zIndex = "5";
    }
    
    containerChuva.appendChild(gota);
    
    // Efeito de impacto no chão
    setTimeout(() => {
        criarImpacto(posicaoX + 110, gota.innerText, tamanhoFonte); // Ajuste de offset do container
        gota.remove();
    }, duracao * 1000);
}

function criarImpacto(x, caractere, tamanho) {
    const impacto = document.createElement('div');
    impacto.classList.add('impacto');
    impacto.innerText = caractere;
    impacto.style.left = `${x}px`;
    impacto.style.fontSize = `${tamanho}px`;
    
    cenario.appendChild(impacto);
    
    // Remove o splash depois que a animação acaba
    setTimeout(() => {
        impacto.remove();
    }, 400);
}

// Cria gotas em ritmo acelerado de tempestade
setInterval(criarGota, 40);