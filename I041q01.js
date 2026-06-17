// Desenvolver um programa que pergunte um número. Se este número for maior que 20, então ele deverá exibir a
// metade deste número, senão, ele deverá exibir o número sem alterações.

let num, metade; 
console.log("Informe um numero: ")
num = 50 // exempplo de um numerro informado pelo usuario  

if ( num > 20) { 
 metade = num / 2;
console.log(`a metade de ${num} e ${metade}`);
} else {
console.log(`o numero inserido foi ${num}`);  
}
console.log("FIM DO PROGRAMA");