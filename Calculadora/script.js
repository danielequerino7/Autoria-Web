function inserir(caractere) {
    let expressao = document.getElementById('resultado').innerHTML; 
    let ultimoCaractere = expressao.charAt(expressao.length - 1);
    if(verificarOperador(ultimoCaractere) && verificarOperador(caractere)) 
        return;
    else
        return document.getElementById('resultado').innerHTML = expressao + caractere;
}

function limparTotalmente(){
    document.getElementById('resultado').innerHTML = "";
}

function limparIndividual(){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero.substring(0, numero.length - 1);
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

function verificarOperador(caractere) {
    return ['+', '-', '*', '/', '.'].includes(caractere);
}