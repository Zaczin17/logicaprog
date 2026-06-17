// Desenvolver um programa que mostre o menu de opções da tabela abaixo e peça o código desejado. Mostre
// como resposta uma mensagem confirmando a escolha do usuário, ou que o número digitado não existe no
// menu de opções.
// Código Opção
// 1 Incluir
// 2 Alterar
// 3 Excluir
// 4 Pesquisar
// 5 Sair
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

    case 2: console.log("Voce selecionou: 1 - Alterar");
        break;
           
    case 3: console.log("Voce selecionou: 1 - Excluir");
        break;

    case 4: console.log("Voce selecionou: 1 - Pesquisar");
        break;

    case 5: console.log("Voce selecionou: 1 - Sair");
        break;
    default:
            console.log("erro Codigo informado nao e valido.");
            break;
        }
    
