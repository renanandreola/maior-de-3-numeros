//6) Escreva um programa em Javascript que leia 3 números inteiros
//e mostre o maior deles.

var a = parseInt(prompt("Digite o primeiro número"));
var b = parseInt(prompt("Digite o segundo número"));
var c = parseInt(prompt("Digite o terceiro número"));

var aux = a

if (b > aux) {
aux = b
document.body.append(b)
}
if(c > aux) {
  aux = c
  document.body.append(c)
}else {
  document.body.append(a)
}
