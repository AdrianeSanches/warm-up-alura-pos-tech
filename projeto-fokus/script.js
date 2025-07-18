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
  html.setAttribute("data-contexto", "foco");
  img.setAttribute("src", "/projeto-fokus/imagens/foco.png");
});

btnDesCurto.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-curto");
  img.setAttribute("src", "/projeto-fokus/imagens/descanso-curto.png");
});

btnDesLongo.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-longo");
  img.setAttribute("src", "/projeto-fokus/imagens/descanso-longo.png");
});
