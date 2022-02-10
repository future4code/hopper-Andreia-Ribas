/*
// Ex 1 de interpretação de código

a) true && false -> false
b) true && false && !false -> false
c) !false && (true || false) -> !false && true -> true
d) boolean

// Ex 2 de interpretação de código
Em vez de somar os números, irá apenas concatená-los, pois prompt sempre retorna uma string

// Ex 3 de interpretação de código
let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));

const soma = primeiroNumero + segundoNumero;

console.log(soma);
*/

// Ex 1 de escrita de código
const suaIdade = Number(prompt("Qual sua idade?"));
const idadeAmigo = Number(
  prompt("Qual a idade de seu melhor amigo / sua melhor amiga?")
);

let testeIdade = suaIdade > idadeAmigo;
console.log("Sua idade é maior do que a do seu amigo?", testeIdade);

let diferencaIdade = suaIdade - idadeAmigo;
console.log("A diferença de idade de vocês é", diferencaIdade);

// Ex 2 de escrita de código
let numeroPar = Number(prompt("Insira um número par"));
console.log(numeroPar % 2);
// sempre que é um número par o resultado dá 0
// sempre que é um número ímpar o resultado dá 1

// Ex 3 de escrita de código
let idadeUsuario = Number(prompt("Qual sua idade em anos?"));
console.log("Idade", idadeUsuario * 12, "meses");
console.log("Idade", idadeUsuario * 12 * 30, "dias");
console.log("Idade", idadeUsuario * 12 * 30 * 24, "horas");

// Ex 4 de escrita de código
const num1 = Number(prompt("Escreva um número"));
const num2 = Number(prompt("Escreva outro número"));

console.log("O 1º número é maior que o 2º?", num1 > num2);
console.log("O 1º número é igual ao 2º?", num1 === num2);
console.log("O 1º número é divísivel 2º?", num1 % num2 === 0);
console.log("O 2º número é divísivel 1º?", num2 % num1 === 0);

// Desafio n1
console.log("77ºF é", (77 - 32) * (5 / 9) + 273.15, "ºK");
console.log("80ºC é", 80 * (9 / 5) + 32, "ºF");
console.log(
  "30ºC é",
  30 * (9 / 5) + 32,
  "ºF e",
  30 * (9 / 5) * (5 / 9) + 273.15,
  "ºK"
);

let valorGraus = Number(prompt("Converter graus para ºF e ºK"));
let grausF = valorGraus * (9 / 5) + 32;
let grausK = valorGraus + 273.15;
console.log(valorGraus, "ºC é", grausF, "ºF e", grausK, "ºK");

// Desafio n2
let valorPagar = 280 * 0.05;
let valorPagarDesconto = 280 * 0.05 * 0.85;
console.log(valorPagar);
console.log(valorPagarDesconto);
