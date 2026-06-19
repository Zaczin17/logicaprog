/* Desenvolver um programa que apresente o total da soma de n números inteiros do número 1 até n, onde n é um
valor informado pelo usuário. */

let numero = 60
let soma = 0;

for (let contador = 1; contador <= numero; contador++) {
    soma = soma + contador;
}
console.log("A soma dos números de 1 até " + numero + " é: " + soma);



