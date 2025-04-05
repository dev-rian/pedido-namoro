let deslocado = false;

function fugir() {
  const botaoNao = document.getElementById("nao");

  if (!deslocado) {
    botaoNao.style.top = "100px";
    botaoNao.style.left = "100px";
    deslocado = true;
  } else {
    botaoNao.style.top = "0px";
    botaoNao.style.left = "0px";
    deslocado = false;
  }
}

function responderSim() {
  window.location.href = "sim.html"; // redireciona para a página de "Sim"
}