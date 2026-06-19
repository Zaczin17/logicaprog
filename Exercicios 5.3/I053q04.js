/* Desenvolver um programa que apresente todos os números divisíveis por 5 que sejam menores que 50. */ 

for (let numero = 1; numero < 50; numero++) {
    if (numero % 5 === 0) {
        console.log(numero);
    }
}