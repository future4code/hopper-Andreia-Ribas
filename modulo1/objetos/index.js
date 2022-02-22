// Exercícios de interpretação de código
/*
// Exercício 1
Será impresso no console Matheus Nachtergaele, Virginia Cavendish e {canal: "Canal Brasil", horario: "19h"}

// Exercício 2
a. Será impresso 
cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

cachorro = {
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}

cachorro = {
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}

b. Pega a informação da variável de nome cachorro, e duplica para então alterar ou adicionar alguma informação

// Exercício 3
a. Será impresso false e undefined
b. false pois pega pessoa["backender"] e backender tem valor de false
   underfined pois altura ainda não foi definido

*/
// Exercícios de escrita de código
// Exercício 1 A e B
const pessoa = {
  nome: "Andreia",
  apelidos: ["Deinha", "Deia", "Dedeia"],
};

function imprimeConsole(objeto) {
  console.log(
    `"Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}"`
  );
}

imprimeConsole(pessoa);

const pessoaAtualizado = {
  ...pessoa,
  apelidos: ["Apelido1", "Apelido2", "Apelido3"],
};

imprimeConsole(pessoaAtualizado);

// Exercício 2
const pessoaInfo = [
  { nome: "Júlia", idade: 28, profissao: "Advogada" },
  { nome: "Marcos", idade: 35, profissao: "Diplomata" },
];

function imprimeConsole2(objeto, indice) {
  [
    objeto[indice].nome,
    objeto[indice].nome.length,
    objeto[indice].idade,
    objeto[indice].profissao,
    objeto[indice].profissao.length,
  ];
}

imprimeConsole2(pessoaInfo, 0);

// Exercício 3
const carrinho = [];

const frutasSacolao = [
  { nome: "melancia", disponibilidade: true },
  { nome: "maçã", disponibilidade: true },
  { nome: "banana", disponibilidade: true },
];

function recebeFruta(frutas) {
  carrinho.push(frutas);
}

recebeFruta(frutasSacolao);

console.log(carrinho);

// Desafio 3
function disponibilidade(fruta1) {
  const atualizaEstoque = { ...fruta1, disponibilidade: false };
  console.log(atualizaEstoque);
}

disponibilidade(frutasSacolao[0]);

// Desafio 1
const nomeInput = prompt("Qual seu nome?");
const idadeInput = prompt("Qual sua idade?");
const profissaoInput = prompt("Qual sua profissão?");

function perguntaUsuario() {
  const objeto = {
    nome: nomeInput,
    idade: idadeInput,
    profissao: profissaoInput,
  };
  console.log(objeto);
  console.log(typeof objeto);
}

perguntaUsuario();

// Desafio 2
function filmes() {
  const objeto = [
    { ano: 2001, nome: "Harry Potter e a Pedra Filosofal" },
    { ano: 1994, nome: "O Rei Leão" },
  ];
  console.log(
    `O primeiro filme foi lançado antes do segundo? ${
      objeto[0].ano < objeto[1].ano
    }`
  );
  console.log(
    `O primeiro filme foi lançado no mesmo ano do segundo? ${
      objeto[0].ano === objeto[1].ano
    }`
  );
}

filmes();
