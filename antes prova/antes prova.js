/* Desenvolver um programa que mostre o menu de opções da tabela abaixo e peça o código desejado. Mostre
como resposta uma mensagem confirmando a escolha do usuário, ou que o número digitado não existe no
menu de opções. */ 


let cod;
console.log("menu de Opçoes ");
console.log(" codigo Opçao ");
console.log("  1 incluir ")
console.log("  2 alterar ")
console.log("  3 Excluir " )
console.log("  4 pesquisar ")
console.log("  5 sair ")
console.log("Informe o codigo referente a açao desejada");
cod = 5;
console.log(`Codigo inserido ${cod}`);


switch ( cod ){

   case 1:
        console.log("Voce selecionou: 1 - Incluir");
        break;
    case 2:
        console.log("Voce selecionou: 1 - altera");
        break;
    case 3:
        console.log("Voce selecionou: 1 - excluir");
        break;
    case 4:
        console.log("Voce selecionou: 1 - pesquisar");
        break;
    case 5:
        console.log("Voce selecionou: 1 - sair");
        break;

        
}