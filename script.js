const numAlvo = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

function verificarPalpite() {
    const palpite = parseInt(document.getElementById('campoPalpite').value);
    const mensagem = document.getElementById('mensagem');
    const tentativaSpan = document.getElementById('tentativas');
    const botaoRecarregar = document.getElementById('botaoRecarregar');

    if (isNaN(palpite)) {
        mensagem.textContent = "Digite um número válido!";
        return;
    }

    tentativasRestantes--;
    tentativaSpan.textContent = tentativasRestantes;

    if (palpite === numAlvo) {
        mensagem.textContent = "🎉 Parabéns! Você acertou!";
        mensagem.style.color = "green";
        botaoRecarregar.style.display = "block";
    } else if (tentativasRestantes === 0) {
        mensagem.textContent = "❌ Acabaram as tentativas! O número era " + numAlvo;
        mensagem.style.color = "red";
        botaoRecarregar.style.display = "block";
    } else if (palpite < numAlvo) {
        mensagem.textContent = "O número é MAIOR!";
        mensagem.style.color = "blue";
    } else {
        mensagem.textContent = "O número é MENOR!";
        mensagem.style.color = "blue";
    }
}

function recarregarPagina() {
    location.reload();
}

console.log("Número secreto:", numAlvo); 