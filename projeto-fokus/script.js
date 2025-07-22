const html = document.querySelector("html");
const btnFoco = document.querySelector(".app__card-button--foco");
const btnDesCurto = document.querySelector(".app__card-button--curto");
const btnDesLongo = document.querySelector(".app__card-button--longo");
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("/projeto-fokus/sons/luna-rise-part-one.mp3");
const musicaPlay = new Audio("/projeto-fokus/sons/play.wav");
const musicaPause = new Audio("/projeto-fokus/sons/pause.mp3");
const musicaBeep = new Audio("/projeto-fokus/sons/beep.mp3");
const botaoContinuar = document.querySelector("#start-pause");
let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

// atividade
const cardSection = document.querySelector(".app__card");
const img = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const btnTemporizador = document.querySelector(".app__card-primary-button");
const tempFoco = 1500;
const tempDesCurto = 300;
const tempDesLongo = 900;

musica.loop = true; // faz com que a música fica tocando o tempo inteiro. Isso porque o tempo das músicas são menores do que o tempo do foco, então essa propriedade faz com que ela entre em loop.

musicaFocoInput.addEventListener("change", () => {
  // paused é uma propriedade nativa do objeto Audio, assim como os medotos play() e pause()
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

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
  botoes.forEach(function (botao) {
    botao.classList.remove("active");
  });

  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      btnFoco.classList.add("active");
      break;
    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada?<br>
                    <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      btnDesCurto.classList.add("active");
      break;
    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície.<br>
                    <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
      btnDesLongo.classList.add("active");
      break;
    default:
      break;
  }
}

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    musicaBeep.play();
    alert("Tempo finalizado");
    zerar();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  console.log("Temporizados: " + tempoDecorridoEmSegundos);
};

botaoContinuar.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
  if (intervaloId) {
    musicaPause.play();
    zerar();
    return;
  }

  musicaPlay.play();
  intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
  clearInterval(intervaloId);
  intervaloId = null;
}
