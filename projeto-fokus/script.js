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
}
