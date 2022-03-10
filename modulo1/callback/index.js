// EX 1 de Interpretação de Código
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ];

// const novoArrayA = usuarios.map((item, index, array) => {
//   console.log(item, index, array);
// });
// Será impresso no console nome e apelido de cada linha, os respectivos index e por último o array

// EX 2 de Interpretação de Código
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ];

// const novoArrayB = usuarios.map((item, index, array) => {
//   return item.nome;
// });

// console.log(novoArrayB);
// Será impreso no console um novo array com nome de cada usuário

// EX 3 de Interpretação de Código
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ];

// const novoArrayC = usuarios.filter((item, index, array) => {
//   return item.nome !== "Chijo";
// });

// console.log(novoArrayC);
// Será impreso um novo array:
//{ nome: "Amanda Rangel", apelido: "Mandi" },
//{ nome: "Laís Petra", apelido: "Laura" }

// EX 1 de Escrita de Código
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

// a) Crie um novo array que contenha apenas o nome dos doguinhos
const petsNome = pets.filter((nomePet) => nomePet.nome);
console.log(petsNome);

// b) Crie um novo array apenas com os cachorros salsicha
const petsSalsicha = pets.filter((racaPet) => racaPet.raca === "Salsicha");
console.log(petsSalsicha);

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const petsPoodle = pets
  .filter((racaPet) => racaPet.raca === "Poodle")
  .map((nomePet) => nomePet.nome);

let descontoPet = [];
for (let i = 0; i < petsPoodle.length; i++) {
  descontoPet.push(
    `Você ganhou um cupom de desconto de 10% para tosar o/a ${petsPoodle[i]}`
  );
}

console.log(descontoPet);

// EX 2 de Escrita de Código
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a) Crie um novo array que contenha apenas o nome de cada item
const apenasNome = produtos.map((produto) => produto.nome);
console.log(apenasNome);

// b) Crie um novo array que contenha um objeto com o nome e o preço
// de cada item, aplicando 5% de desconto em todos eles
let produtosComDesconto = produtos.map((produto) => ({
  nome: produto.nome,
  preço: Number((produto.preco * 0.95).toFixed(2)),
}));
console.log(produtosComDesconto);

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const apenasBebidas = produtos.filter(
  (produto) => produto.categoria === "Bebidas"
);
console.log(apenasBebidas);

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const apenasYpe = produtos.filter((produto) => produto.nome.includes("Ypê"));
console.log(apenasYpe);

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
let arrayYpe = [];
for (let i = 0; i < apenasYpe.length; i++) {
  arrayYpe.push(`Compre ${apenasYpe[i].nome} por R$ ${apenasYpe[i].preco}`);
}
console.log(arrayYpe);

// DESAFIO
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
const pokemonsOrdemAlfabetica = pokemons.sort((a, b) =>
  a.nome.localeCompare(b.nome)
);
console.log(pokemonsOrdemAlfabetica);

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
// Existem várias maneiras de resolver esse exercício!
// Pesquise outras funções de arrays ou utilize loops juntamente com o filter
