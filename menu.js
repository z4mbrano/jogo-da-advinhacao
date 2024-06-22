

function verificarDificuldade() {
    let desafio = document.querySelector('input').value;

    if (desafio == 1) {
        exibirTextoNaTela('p', 'Dificuldade escolhida: Fácil');
        document.getElementById('iniciar').removeAttribute('disabled');
        sessionStorage.setItem('click', 10);
    } else if (desafio == 2) {
        exibirTextoNaTela('p', 'Dificuldade escolhida: Média');
        document.getElementById('iniciar').removeAttribute('disabled');
        sessionStorage.setItem('click', 50);
    } else if (desafio == 3) {
        exibirTextoNaTela('p', 'Dificuldade escolhida: Difícil');
        document.getElementById('iniciar').removeAttribute('disabled');
        sessionStorage.setItem('click', 100);
    } else {
        exibirTextoNaTela('p', 'Dificuldade inválida, por favor digite novamente [1, 2, 3]');
        document.getElementById('iniciar').setAttribute('disabled');
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

document.getElementById('definirDificuldade').addEventListener('click', verificarDificuldade);
document.getElementById('iniciar').setAttribute('disabled', true);