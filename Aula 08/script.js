let numeros = [1, 2, 3];
let p = {nome: "Juca", idade: 13};

console.log(p.nome);
console.log(numeros);
console.log(numeros[0]);
console.log(typeof p);
console.log(typeof numeros);
console.log(typeof numeros[0]);
console.log(typeof p.nome);

/*let calcula = function(a){
    return a * 2;
}*/
function calcula(a){
    return a * 2;
}

console.log(calcula(5));
console.log(typeof calcula);
/*let num = 3;
num = "tres";
let preco = 1.99;
let nome = "tads";
let verdadeiro = true;
let nulo = null;
let naoDefinido;

console.log(num);
console.log(preco);
console.log(nome);
console.log(verdadeiro);
console.log(nulo);
console.log(naoDefinido);

document.writeln(num);
document.writeln(preco);
document.writeln(nome);
document.writeln(verdadeiro);
document.writeln(nulo);
document.writeln(naoDefinido);*/


if("bolinha"){
    console.log("Verdadeiro");
}
else{
    console.log("Falso");
}