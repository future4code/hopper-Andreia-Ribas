/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");
const iniciarRodada = confirm("Quer iniciar uma nova rodada?");

switch (iniciarRodada) {
  case false:
    console.log("O jogo acabou");
    break;

  default:
    const cartaUsuario1 = comprarCarta();
    const cartaUsuario2 = comprarCarta();
    const somaCartasUsuario = cartaUsuario1.valor + cartaUsuario2.valor;

    const cartaComputador1 = comprarCarta();
    const cartaComputador2 = comprarCarta();
    const somaCartasComputador =
      cartaComputador1.valor + cartaComputador2.valor;
    console.log(
      `Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${somaCartasUsuario} pontos
Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - ${somaCartasComputador} pontos`
    );
    if (somaCartasUsuario > somaCartasComputador) {
      console.log("Você ganhou!");
    } else if (somaCartasUsuario < somaCartasComputador) {
      console.log("O computador ganhou");
    } else {
      console.log("Empate");
    }
}
