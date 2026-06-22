/* Elaborar um programa que apresente no final a soma dos valores pares existentes na faixa de 0 até 500. Utilize
um laço que efetue a variação de 2 em 2. */ 


let soma = 0;

for ( let numero = 0; numero <= 500;  numero  += 2) { 
soma += numero;

}

console.log ("a soma dos  numero e: " + soma );