/*
// Exercícios de interpretação de código
// Exercício 1
let array
console.log('a. ', array)
a. underfined. Ainda não foi definido um valor para a variável

array = null
console.log('b. ', array)
b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
c. 11. A contagem do length começa do 1, embora a contagem do índice comece do 0

let i = 0
console.log('d. ', array[i])
d. 3

array[i+1] = 19
console.log('e. ', array)
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
f. 9

// Exercício 2
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
Resposta: SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

// Exercícios de escrita de código

// Exercício 1

const nomeDoUsuario = prompt("Qual o seu nome?");
const emailDoUsuario = prompt("Qual o seu email?");
console.log(
  `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`
);

// Exercício 2
let comidasFav = ["Pavê", "Pipoca doce", "Lasanha", "Yakisoba", "Batata Chips"];
console.log(comidasFav);
console.log(`
Essas são as minhas comidas favoritas:\n
${comidasFav.join("\n")}
`);

const suaComidaFav = prompt("Qual a sua comida favorita?");
comidasFav[1] = suaComidaFav;
console.log(`
Essa é a nova lista:\n
${comidasFav.join("\n")}
`);

// Exercício 3
let listaDeTarefas = [];
const tarefa1 = prompt("Digite 1 tarefa que você precisa realizar hoje");
const tarefa2 = prompt("Digite mais 1 tarefa que você precisa realizar hoje");
const tarefa3 = prompt("Digite outra tarefa que você precisa realizar hoje");

let listaDeTarefas = [tarefa1, tarefa2, tarefa3];
console.log(listaDeTarefas);

let indiceTarefaFeita = Number(
  prompt("Qual o índice da tarefa que você já fez (0, 1 ou 2)?")
);
listaDeTarefas.splice(indiceTarefaFeita, 1);
console.log(listaDeTarefas);

// Desafio 1
let fraseDoUsuario = prompt("Escreva uma frase");
let fraseArray = fraseDoUsuario.split(" ");
console.log(fraseArray);

// Desafio 2
let frutasArray = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
let indiceAbacaxi = frutasArray.indexOf("Abacaxi");

console.log(`
Índice do abacaxi: ${indiceAbacaxi}\n
Tamanho do array: ${frutasArray.length}
`);
