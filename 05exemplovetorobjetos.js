//material 07 - pagina 

// declarando um vetor (ou arrray) de objetos "aluno"


let alunos = [
    { nome: "Ana",  idade:18, ativo: true },
    { nome: "Carlos", idade:22, ativo: false},
    { nome: "Maria",  idade:20, ativo: true },
]

console.log ( alunos );

// Acessando pelo indice + propriedade
console.log(`nome do primeiro aluno(a): ${alunos[0].nome}`);

// Nao funfa dessa form
console.log (`todos os dados do primeiro aluno(a): ${ alunos[0]}`);

// percorrendo o vetor de objetos  com for classico

for ( let cont = 0; cont < alunos.length; cont++){
    console.log( `nome: ${alunos[cont].nome}`);

    console.log( `nome: ${alunos[cont].idade}`);

    console.log( `nome: ${alunos[cont].ativo}\n`);
}


// percorrendo o vetor de objetos com for of

for ( let aluno of alunos) {
    console.log(`Nome:${ aluno.nome}`);
    console.log(`Nome:${alunos.idade}`);
    console.log(`Nome:${ alunos.ativo }\n`);
}