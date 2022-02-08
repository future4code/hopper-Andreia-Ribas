// EXERCÍCIO DE INTERPRETAÇÃO
/*

1 - 
Será impresso 10 para o console.log(b) e 
Será impresso 10 5 para o console.log(a,b)

2 - Será impresso 10 10 10

3 - 
Sugiro que p chame horasDiaTrab e
Sugiro que t chame dinheiroDiaTrab

*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO
// Exercício 1
let nome;
let idade;

console.log(typeof nome); // underfined
console.log(typeof idade); // undefined

// Resultado dá underfined pois ainda não foi atribuído um valor para as variáveis

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");

console.log(typeof nome); // string
console.log(typeof idade); // string

// Nome e idade agora retornam string. Apesar de idade ser um número, o comando prompt() sempre retorna uma string

console.log("Olá", nome, ", você tem", idade, "anos");

// Exercício 2
let perguntaMaisDe18 = "Você tem mais de 18 anos?";
let perguntaGostaDoce = "Você gosta muito de doce?";
let perguntaTemGato = "Você tem gato?";
let respostaMaisDe18 = prompt(perguntaMaisDe18);
let respostaGostaDoce = prompt(perguntaGostaDoce);
let respostaTemGato = prompt(perguntaTemGato);

console.log(perguntaMaisDe18, respostaMaisDe18);
console.log(perguntaGostaDoce, respostaGostaDoce);
console.log(perguntaTemGato, respostaTemGato);

// Exercício 3
let a = 10;
let b = 25;
let c;

// Aqui faremos uma lógica para trocar os valores
c = a; // C pega o valor de A, que é 10
a = b; // A pega o valor de B, que é 25
b = c; // B pega o valor de C, que é 10

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a); // O novo valor de a é 25
console.log("O novo valor de b é", b); // O novo valor de b é 10

// Desafio
let primeiroNumero = Number(prompt("Escreva um número"));
let segundoNumero = Number(prompt("Escreva outro número"));

let x = primeiroNumero + segundoNumero;
let y = primeiroNumero * segundoNumero;

console.log("O primeiro número somado ao segundo número dá:", x);
console.log("O primeiro número multiplicado pelo segundo número dá:", y);
