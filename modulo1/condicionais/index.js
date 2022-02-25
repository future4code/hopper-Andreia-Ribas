// Exercícios de interpretação de código
/*
1a - Pede para o usuário digitar um número, armazena a resposta do usuário, converte para número e faz uma condicional.
b - Passa no teste todos os números pares.
c - Não passa no teste todos os números ímpares.

2a - Para dar o preço da fruta dependendo da fruta escolhida.
b - O preço da fruta Maçã é R$ 2.25
c - 5.5 e 5

3a - Pedindo um número para a pessoa e convertendo a string que o prompt retorna em número
b - "Esse número passou no teste"
c - Daria erro, pois o let é um escopo de bloco
*/

// Exercícios de escrita de código
// Exercício 1
const idadeDoUsuario = Number(prompt("Qual a sua idade?"));

if (idadeDoUsuario >= 18) {
  console.log("Você pode dirigir");
} else {
  console.log("Você não pode dirigir");
}

// // Exercício 2
const turnoAluno = prompt(
  "Em qual turno você estuda? M = manhã, V = vespertino, N = noturno"
).toUpperCase();
if (turnoAluno === "M") {
  console.log("Bom dia!");
} else if (turnoAluno === "V") {
  console.log("Boa tarde!");
} else if (turnoAluno === "N") {
  console.log("Boa noite");
} else {
  console.log("Verifique se digitou corretamente!");
}

// Exercício 3
switch (turnoAluno2) {
  case "M":
    console.log("Bom dia!");
    break;

  case "V":
    console.log("Boa tarde!");
    break;

  case "N":
    console.log("Boa noite!");
    break;

  default:
    console.log("Verifique se digitou corretamente!");
}

// Exercício 4
const generoFilme = prompt(
  "Qual o gênero do filme que vocês vão assistir?"
).toLowerCase();
const precoIngresso = Number(prompt("Qual o preço do ingresso?"));

if (generoFilme === "fantasia" && precoIngresso < 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme :(");
}

// Desafio 1
const generoFilme2 = prompt(
  "Qual o gênero do filme que vocês vão assistir?"
).toLowerCase();
const precoIngresso2 = Number(prompt("Qual o preço do ingresso?"));

if (generoFilme2 === "fantasia" && precoIngresso2 < 15) {
  const lanchinho = prompt("Qual lanchinho você vai comprar?");
  console.log(`Bom filme! Aproveite seu/sua ${lanchinho}`);
} else {
  console.log("Escolha outro filme :(");
}

// Desafio 2
const nomeCompleto = prompt("Digite seu nome completo");
let tipoDeJogo = prompt(
  "Qual o tipo de jogo? IN = internacional ou DO = doméstico"
).toUpperCase();
let etapaDoJogo = prompt(
  "Qual a etapa do jogo? SF = semi-final, DT = decisão de 3º lugar ou FI = final"
).toUpperCase();
const categoriaJogo = Number(prompt("Opção 1, 2, 3 ou 4?"));
const quantIngressos = Number(prompt("Quantos ingressos?"));

let valorDoIngresso;

switch (etapaDoJogo) {
  case "SF":
    switch (categoriaJogo) {
      case 1:
        valorDoIngresso = 1320;
        break;

      case 2:
        valorDoIngresso = 880;
        break;

      case 3:
        valorDoIngresso = 550;
        break;

      case 4:
        valorDoIngresso = 220;
    }
    break;

  case "DT":
    switch (categoriaJogo) {
      case 1:
        valorDoIngresso = 660;
        break;

      case 2:
        valorDoIngresso = 440;
        break;

      case 3:
        valorDoIngresso = 330;

        break;
      case 4:
        valorDoIngresso = 220;
    }
    break;

  case "FI":
    switch (categoriaJogo) {
      case 1:
        valorDoIngresso = 1980;
        break;

      case 2:
        valorDoIngresso = 1320;
        break;

      case 3:
        valorDoIngresso = 880;
        break;

      case 4:
        valorDoIngresso = 330;
    }
    break;

  default:
    console.log("Verifique se você digitou tudo corretamente");
}

switch (etapaDoJogo) {
  case "SF":
    etapaDoJogo = "Semi-final";
    break;

  case "DT":
    etapaDoJogo = "Decisão de 3º lugar";
    break;

  case "FI":
    etapaDoJogo = "Final";
}

switch (tipoDeJogo) {
  case "DO":
    console.log(`
---Dados da compra--- 
Nome do cliente:  ${nomeCompleto} 
Tipo do jogo:  Doméstico
Etapa do jogo:  ${etapaDoJogo}
Categoria: ${categoriaJogo} 
Quantidade de Ingressos:  ${quantIngressos} ingressos 
---Valores--- 
Valor do ingresso:  R$ ${valorDoIngresso};
Valor total:  R$ ${quantIngressos * valorDoIngresso}
`);
    break;

  case "IN":
    console.log(`
---Dados da compra--- 
Nome do cliente:  ${nomeCompleto} 
Tipo do jogo:  Internacional
Etapa do jogo:  ${etapaDoJogo}
Categoria: ${categoriaJogo} 
Quantidade de Ingressos:  ${quantIngressos} ingressos 
---Valores--- 
Valor do ingresso:  R$ ${valorDoIngresso * 4.1};
Valor total:  R$ ${quantIngressos * valorDoIngresso * 4.1}
`);
    break;

  default:
    console.log("Verifique se você digitou tudo corretamente");
}
