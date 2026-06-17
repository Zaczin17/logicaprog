//Desenvolver um programa que pergunte um valor numérico inteiro e faça a exibição desse valor caso seja
//divisível por 4 e 5. Não sendo divisível por 4 e 5, o programa deverá exibir a mensagem “Valor não é divisível por
// 4 e 5”.

let n, resto4, resto5;
console.log ("Informe o numero: ")
n = 20
console.log (`valor inserido: ${n}`);

resto4 = n % 4; //o resto da divisao de um por 4
resto5 = n % 4; //o resto da divisao de um por 5
// 


if (resto4 === 0 && resto5 === 0) {
     console.log (`${n} e divisivel por 4 e 5 `);
} else {
    console.log("valor nao e divisivel por 4 e 5 ");
}
   
