// EX 1 INTERPRETAÇÃO
// let valor = 0;
// for (let i = 0; i < 5; i++) {
//   valor += i;
// }
// console.log(valor);
// Enquanto i for menor que 5, executa o while e vai incrementando.
// Faz a soma de 1 + 2 + 3 + 4, que dá 10.

// EX 2 INTERPRETAÇÃO
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
// for (let numero of lista) {
//   if (numero > 18) {
//     console.log(numero);
//   }
// }
// Será impreso no console todos os números maiores de 18.
// Para saber o índice dos elementos, teria que usar for. For...of não fornece os índices.

// EX 3 INTERPRETAÇÃO
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// Se o usuário digitar o número 4, o while se repetiria 4 vezes. Na linha 1, *; na 2, ** e assim por diante até chegar em 4 linhas

// EX 1 ESCRITA DE CÓDIGO
// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//     c) Por fim, imprima o array com os nomes dos bichinhos no console

const quantBichos = Number(prompt("Quantos bichos de estimação você tem?"));

switch (quantBichos) {
  case 0:
    console.log("Que pena! Você pode adotar um pet!");
    break;

  default:
    let arrayPets = [];

    for (let i = 1; i <= quantBichos; i++) {
      let nomePet = prompt(`Qual o nome do pet número ${i}?`);
      arrayPets.push(nomePet);
    }
    console.log(arrayPets);
}

// EX 2 ESCRITA DE CÓDIGO
// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
//     a) Escreva um programa que **imprime** cada um dos valores do array original.
//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

function arrayA(arrayOriginal) {
  for (i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i]);
  }
}

function arrayB(arrayOriginal) {
  for (i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i] / 10);
  }
}

function arrayC(arrayOriginal) {
  let arrayPar = [];
  for (i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] % 2 === 0) {
      arrayPar.push(arrayOriginal[i]);
    }
  }
  console.log(arrayPar);
}

function arrayD(arrayOriginal) {
  let arrayString = [];
  for (i = 0; i < arrayOriginal.length; i++) {
    arrayString.push(`O elemento do index ${i} é ${arrayOriginal[i]}`);
  }
  console.log(arrayString);
}

function arrayE(arrayOriginal) {
  let valorMax = arrayOriginal[0];
  for (let i = 1; i < arrayOriginal.length; ++i) {
    if (arrayOriginal[i] > valorMax) {
      valorMax = arrayOriginal[i];
    }
  }

  let valorMin = arrayOriginal[0];
  for (let i = 1; i < arrayOriginal.length; ++i) {
    if (arrayOriginal[i] < valorMin) {
      valorMin = arrayOriginal[i];
    }
  }
  console.log(`O maior número é ${valorMax} e o menor é ${valorMin}`);
}

// DESAFIO 1
// a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
// b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:
// - O número chutado, com a mensagem: `O número chutado foi: <número>`
// - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
// c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`

let num1jog = Number(
  prompt(`Digite um número.
Se você não digitar nada, o número será zero`)
);
console.log("Vamos jogar!");

let contTentativas, num2jog;

for (contTentativas = 0; num2jog !== num1jog; contTentativas++) {
  num2jog = Number(prompt("Qual número você acha que o jogador 1 escolheu?"));
  if (num1jog > num2jog) {
    alert(`Errou. O número que o jogador 1 escolheu é maior que ${num2jog}.`);
  } else if (num1jog < num2jog) {
    alert(`Errou. O número que o jogador 1 escolheu é menor que ${num2jog}.`);
  }
}
alert(`Acertou. O número de tentativas foi: ${contTentativas}`);

// DESAFIO 2
// Vamos pedir para que você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.

let numPC = Math.floor(Math.random() * 100 + 1);
console.log("O PC escolheu um número. Vamos jogar!");

let contTentativas2, numJog;

for (contTentativas2 = 0; numJog !== numPC; contTentativas2++) {
  numJog = Number(
    prompt("Qual número entre 1 e 100 você acha que o PC escolheu?")
  );
  if (numPC > numJog) {
    alert(`Errou. O número que o PC escolheu é maior que ${numJog}.`);
  } else if (numPC < numJog) {
    alert(`Errou. O número que o PC escolheu é menor que ${numJog}.`);
  }
}
alert(`Acertou. O número de tentativas foi: ${contTentativas2}`);

// Foi muito fácil fazer o desafio 2, apenas troquei os nomes das variáveis, um pouco do texto e em vez de um prompt pedindo ao jogador 1 para digitar um número, eu coloquei para o computador selecionar um número aleatório entre 1 e 100
