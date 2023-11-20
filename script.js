var numeroSecreto = 5;
var tentativas = 3;

function Chutar() {
  console.log(tentativas);
  var elementoOutput = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativas >= 0) {
    if (chute == numeroSecreto) {
      elementoOutput.innerHTML = "Incrível, você acertou";
      document.getElementById("btnChutar").disabled = true;
    } else if (chute > 10 || chute < 0) {
      elementoOutput.innerHTML = "Favor, digitar um número de 0 a 10.";
      tentativas = tentativas - 1;
    } else if (chute > numeroSecreto) {
      elementoOutput.innerHTML =
        "Você ERROU! O número secreto é MENOR. Tente novamente!";
      tentativas = tentativas - 1;
    } else if (chute < numeroSecreto) {
      elementoOutput.innerHTML =
        "Você ERROU! O número secreto é MAIOR. Tente novamente!";
      tentativas = tentativas - 1;
    }
  }

  if (tentativas <= 0) {
    elementoOutput.innerHTML =
      "Fim de Jogo. O número secreto era " + numeroSecreto;
    document.getElementById("btnChutar").disabled = true;
  }
}

// if (numeroSecreto == chute) {
//   elementoOutput.innerHTML = "Você ACERTOU!";
// } else if (chute > 10 || chute < 0) {
//   elementoOutput.innerHTML = "Favor, digitar um número de 0 a 10.";
// } else {
//   while (tentativas <= 3) {
//     if (numeroSecreto > chute) {
//       elementoOutput.innerHTML =
//         "Você ERROU! O número secreto é MAIOR. Tente novamente!";
//     } else if (numeroSecreto < chute) {
//       elementoOutput.innerHTML =
//         "Você ERROU! O número secreto é MENOR. Tente novamente!";
//     }
//     tentativas++;
//   }