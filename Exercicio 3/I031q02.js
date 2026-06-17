// 2) elaborar um progama que pergunte o nome do usuario 
// quatro valores inteiros  e apresente 2 resultados
// a) resultado de suas adiçoes
// b) resultado de suas multiplicaçoes
// Exibir, ao inicio, uma saudaçao ao usuario!

// declaraçao de usuarios
let nome ;
let num1, num2, num3, num4, soma, mult;

console.log("informe o seu nome ");
// leia(nome)
nome = "Rafael"

console.log ("informe o primeiro valor inteiro:")
num1 = 5;

console.log ("informe o segundo valor inteiro:")
num2 = 8;

console.log ("informe o terceiro valor inteiro:")
num3 = 10;

console.log ("informe o quarto valor inteiro" )
num4 = 12;

soma = num1 + num2 + num3 + num4;
console.log("A soma dos 4 valores inseridos e ", soma)

mult = num1 * num2 * num3 * num4;
console.log(`A multiplicaçao dos 4 valores inseridos e `, mult)

