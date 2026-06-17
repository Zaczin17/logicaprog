//Desenvolver um programa que pergunte um número e exiba a informação de que ele é positivo, negativo ou
// nulo.

let numero ; 
console.log("Informe um numero: ");
numero  = 10; 
console.log(`Numero informado: ${numero}`);

if ( numero > 0 ) { 
    console.log(`${numero} e positivo`);
} else if ( numero < 0 ) {
     console.log(`${numero} e negativo`)
}

