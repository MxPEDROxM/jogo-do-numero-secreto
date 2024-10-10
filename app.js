let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} )
}

function textoInicial(){
    exibirTextoNaTela('h1', "Jogo do número secreto");
    exibirTextoNaTela('p', "Escolha um número entr 1 e 10");
}

textoInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let frasetentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', frasetentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  else {
        if (chute < numeroSecreto){
            exibirTextoNaTela('p', "O número secreto é maior");
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        tentativas++;
        linparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista =listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function linparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    linparCampo();
    tentativas = 1;
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
}