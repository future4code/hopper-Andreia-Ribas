// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let alturaRetangulo = Number(prompt("Altura do retângulo"));
  let larguraRetangulo = Number(prompt("Largura do retângulo"));
  console.log(alturaRetangulo * larguraRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Ano atual"));
  let anoNasc = Number(prompt("Ano de nascimento"));
  console.log(anoAtual - anoNasc);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let seuNome = prompt("Qual o seu nome?");
  let suaIdade = Number(prompt("Qual a sua idade?"));
  let seuEmail = prompt("Qual o seu email?");
  console.log(
    `Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let corFavorita1 = prompt("Qual a sua cor favorita 1?");
  let corFavorita2 = prompt("Qual a sua cor favorita 2?");
  let corFavorita3 = prompt("Qual a sua cor favorita 3?");
  console.log([corFavorita1, corFavorita2, corFavorita3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const inicioArray = array[0];
  array.shift(inicioArray); // remove primeiro elemento
  array.unshift(array[array.length - 1]); // envia o último elemento pro começo
  array.pop(); // remove o último elemento
  array.push(inicioArray); // coloca o primeiro elemento original no final
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase(0) === string2.toUpperCase(0);
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Ano atual?"));
  let anoNascimento = Number(prompt("Ano de nascimento?"));
  let anoRG = Number(prompt("Ano que a sua RG foi emitida?"));
  let idadeAtual = anoAtual - anoNascimento;
  let idadeRG = anoAtual - anoRG;

  if (idadeAtual <= 20) {
    console.log(idadeRG >= 5);
  } else if (idadeAtual > 20 && idadeAtual <= 50) {
    console.log(idadeRG >= 10);
  } else if (idadeAtual > 50) {
    console.log(idadeRG >= 15);
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let divisivelpor4 = ano % 4 === 0;
  let naoDivisivelpor100 = ano % 100 !== 0;
  let divisivelpor400 = ano % 400 === 0;

  return (divisivelpor4 && naoDivisivelpor100) || divisivelpor400;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let maisDe18 = prompt("Você tem mais de 18 anos?");
  maisDe18 = maisDe18 === "sim";

  let ensinoMedioCompleto = prompt("Você tem Ensino Médio Completo?");
  ensinoMedioCompleto = ensinoMedioCompleto === "sim";

  let disponibilidadeHorario = prompt(
    "Você possui disponibilidade exclusiva durante os horários do curso?"
  );
  disponibilidadeHorario = disponibilidadeHorario === "sim";

  console.log(maisDe18 && ensinoMedioCompleto && disponibilidadeHorario);
}
