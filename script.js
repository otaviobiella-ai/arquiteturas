const botao = document.querySelector("button");

    botoes.forEach(function(botao) {
    botao.addEventListener("click",botaoCLicado);
    function botaoClicado() {
   console.log("fui clicado");
   let texto = botao.querySelector("span");
   texto.textContent++;
  }
   } );