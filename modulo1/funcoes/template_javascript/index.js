// Exercícios de interpretação de código
/*
1a. 10 e 50
b. Não ia aparecer o resultado no console

2a. A função pega o texto do usuário, deixa todas as letras minúsculas e diz se tem a palavra cenoura.
b)  i - true
    ii - true
    iii - true
*/

// Exercícios de escrita de código

// Exercício 1 A
function sobreMim() {
  console.log(
    "Eu sou Andréia, tenho 25 anos, moro em Belo Horizonte e sou atriz."
  );
}

// // Exercício 1 B
function sobreMim2(nome, idade, cidade, profissao) {
  console.log(
    `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
  );
}

sobreMim2("Andréia", 25, "Belo Horizonte", "atriz");

// Exercício 2 A
function somaDosNumeros(num1, num2) {
  return num1 + num2;
}

console.log(somaDosNumeros(2, 5));

// Exercício 2 B
const recebeNumeros = (num1, num2) => num1 >= num2;

// Exercício 2 C
const numeroPar = (num1) => num1 % 2 === 0;

// Exercício 2 D
function recebeMensagem(string) {
  console.log(string.length, string.toUpperCase());
}

// Exercício 3
const opSomar = (num1, num2) => num1 + num2;
const opSubtrair = (num1, num2) => num1 - num2;
const opMultiplicar = (num1, num2) => num1 * num2;
const opDividir = (num1, num2) => num1 / num2;

const numeroUm = Number(prompt("Insira um número"));
const numeroDois = Number(prompt("Insira outro número"));

console.log(`
${numeroUm} + ${numeroDois} = ${opSomar(numeroUm, numeroDois)} \n
${numeroUm} - ${numeroDois} = ${opSubtrair(numeroUm, numeroDois)} \n
${numeroUm} * ${numeroDois} = ${opMultiplicar(numeroUm, numeroDois)} \n
${numeroUm} / ${numeroDois} = ${opDividir(numeroUm, numeroDois)} \n
`);

// // Desafio 1 A e B
const imprimeNoConsole = (param) => console.log(param);
const somaDois = (param1, param2) => param1 + param2;

imprimeNoConsole(somaDois(2, 3));

// Desafio 2
const quadradoCatetos = (a, b) => a ** 2 + b ** 2;
const hipotenusa = Math.sqrt(quadradoCatetos(5, 5));
console.log(hipotenusa);
