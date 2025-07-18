const html = document.querySelector("html");
const btnFoco = document.querySelector(".app__card-button--foco");
const btnDesCurto = document.querySelector(".app__card-button--curto");
const btnDesLongo = document.querySelector(".app__card-button--longo");

// atividade
const cardSection = document.querySelector(".app__card");
const img = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const btnTemporizador = document.querySelector(".app__card-primary-button");
const tempFoco = 1500;
const tempDesCurto = 300;
const tempDesLongo = 900;

btnFoco.addEventListener("click", () => {
  alterarContexto("foco");
});

btnDesCurto.addEventListener("click", () => {
  alterarContexto("descanso-curto");
});

btnDesLongo.addEventListener("click", () => {
  alterarContexto("descanso-longo");
});

function alterarContexto(contexto) {
  // é possível fazer isso, porque os atributos possuem o mesmo nome
  html.setAttribute("data-contexto", contexto);
  img.setAttribute("src", `/projeto-fokus/imagens/${contexto}.png`);

  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;
    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada?<br>
                    <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      break;
    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície.<br>
                    <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
      break;
    default:
      break;
  }
}
