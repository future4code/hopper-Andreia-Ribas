const rodada1 = confirm(
  "Boas vindas ao jogo de Blackjack! Quer iniciar uma nova rodada?"
);
switch (rodada1) {
  case false:
    alert("O jogo acabou");
    break;

  default:
    let arrayCartasUsuario = [], // array inicial cartas usuário com texto e valor
      arrayCartasPC = [], // array inicial cartas PC com texto e valor
      arrayPontuacaoUsuario = [], // array usuário apenas valor
      arrayPontuacaoPC = [], // array PC apenas valor
      arrayTextoCartasUsuario = [], // array usuário apenas texto
      arrayTextoCartasPC = []; // array PC apenas texto

    let resultadoPontuacaoUsuario = 0, // soma dos valores das cartas do usuário
      resultadoPontuacaoPC = 0, // soma dos valores das cartas do PC
      resultadoListaUsuario = "", // listagem cartas usuário em string em vez de array
      resultadoListaPC = ""; // listagem cartas PC em string em vez de array

    // compra carta para o usuário e adiciona no final do Array de cartas do Usuário
    const addCartaArrayUsuario = () => arrayCartasUsuario.push(comprarCarta());

    // compra carta para o PC e adiciona no final do Array de cartas do PC
    const addCartaArrayPC = () => arrayCartasPC.push(comprarCarta());

    let i = 0,
      y = 0,
      d = 0,
      e = 0;

    function calculaPontuacaoUsuario() {
      for (i; i < arrayCartasUsuario.length; i++) {
        arrayPontuacaoUsuario.push(arrayCartasUsuario[i].valor);
        resultadoPontuacaoUsuario += arrayPontuacaoUsuario[i];
      }
      return resultadoPontuacaoUsuario;
    }

    function calculaPontuacaoPC() {
      for (y; y < arrayCartasPC.length; y++) {
        arrayPontuacaoPC.push(arrayCartasPC[y].valor);
        resultadoPontuacaoPC += arrayPontuacaoPC[y];
      }
      return resultadoPontuacaoPC;
    }

    function listaCartasUsuario() {
      for (d; d < arrayCartasUsuario.length; d++) {
        arrayTextoCartasUsuario.push(arrayCartasUsuario[d].texto);
        resultadoListaUsuario += arrayTextoCartasUsuario[d] + " ";
      }
      return resultadoListaUsuario;
    }

    function listaCartasPC() {
      for (e; e < arrayCartasPC.length; e++) {
        arrayTextoCartasPC.push(arrayCartasPC[e].texto);
        resultadoListaPC += arrayTextoCartasPC[e] + " ";
      }
      return resultadoListaPC;
    }

    // Rodada 1, inicial

    addCartaArrayUsuario();
    addCartaArrayUsuario();
    addCartaArrayPC();
    addCartaArrayPC();

    while (
      (arrayCartasUsuario[0].texto.includes("A") &&
        arrayCartasUsuario[1].texto.includes("A")) ||
      (arrayCartasPC[0].texto.includes("A") &&
        arrayCartasPC[1].texto.includes("A"))
    ) {
      arrayCartasUsuario = [];
      arrayCartasPC = [];

      addCartaArrayUsuario();
      addCartaArrayUsuario();
      addCartaArrayPC();
      addCartaArrayPC();
    }

    // Rodada 2
    let rodada2;

    do {
      calculaPontuacaoUsuario();
      listaCartasUsuario();

      // MODO TESTE
      // calculaPontuacaoUsuario();
      // listaCartasUsuario();
      // calculaPontuacaoPC();
      // listaCartasPC();

      rodada2 =
        confirm(`Suas cartas são ${resultadoListaUsuario} e você tem ${resultadoPontuacaoUsuario} pontos.
        A carta revelada do computador é ${arrayCartasPC[0].texto} que vale ${arrayCartasPC[0].valor} pontos.
        Deseja comprar mais uma carta?`);
      //   confirm(`MODO TESTE:
      // Suas cartas são ${resultadoListaUsuario} e você tem ${resultadoPontuacaoUsuario} pontos.
      // A carta revelada do computador é ${resultadoListaPC} que vale ${resultadoPontuacaoPC} pontos.
      // Deseja comprar mais uma carta?`);

      switch (rodada2) {
        case true:
          addCartaArrayUsuario();
          calculaPontuacaoUsuario();
          break;

        default:
          // se for falso
          calculaPontuacaoUsuario();
          calculaPontuacaoPC();

          while (resultadoPontuacaoPC < resultadoPontuacaoUsuario) {
            addCartaArrayPC();
            calculaPontuacaoPC();
          }
      }
    } while (resultadoPontuacaoUsuario <= 21 && rodada2 === true);

    // fim de jogo
    calculaPontuacaoUsuario();
    calculaPontuacaoPC();
    listaCartasUsuario();
    listaCartasPC();

    let resultadoDoJogo;

    if (resultadoPontuacaoUsuario === resultadoPontuacaoPC) {
      resultadoDoJogo = "Vocês empataram.";
    } else if (
      resultadoPontuacaoPC > 21 ||
      (resultadoPontuacaoUsuario <= 21 &&
        resultadoPontuacaoUsuario > resultadoPontuacaoPC)
    ) {
      resultadoDoJogo = "Você ganhou! :)";
    } else {
      resultadoDoJogo = "Você perdeu. :(";
    }

    alert(`Suas cartas são ${resultadoListaUsuario}. Você fez ${resultadoPontuacaoUsuario} pontos. 
As cartas do computador são ${resultadoListaPC}. Ele fez ${resultadoPontuacaoPC} pontos.
${resultadoDoJogo}`);
}
