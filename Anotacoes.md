Comandos para manipular o DOM via console do navegador

- DOM: O DOM, que significa Modelo de Objeto de Documentos (Documents Object Model), não se resume ao documento em si. O DOM representa a estrutura de um documento através de uma árvore de objetos, onde cada objeto representa uma parte do documento (como arquivos HTML, CSS, JavaScript e outras APIs inseridas no projeto).
- document: seleciona o documento inteiro no DOM
- document.querySelector(""): utilizado para selecionar componentes no DOM. Dentro das aspas enviamos uma string que será utilizada pra reconhecer o elemento, seja uma tag, um ID (coloca a # no início do nome), uma classe (coloca o . no início do nome) ou um atributo (coloca o [] no início do nome)
- document.querySelector("button"): seleciona a primeira tag button que encontrar no DOM
- document.querySelectorAll("button"): retorna uma NodeList, um array com todos as tags button que foram encontradas no DOM
- document.getElementsByXXXX(""): utilizado para selecionar componentes no DOM. Os X's representam as opções que temos para selecionar o elemento, como por exemplo o ID (document.getElementById("start-pause"))
- atributo defer: o atributo defer dentro da tag script no arquivo html é utilizado para fazer com que quando esta página for carregada no navegador, vai ser lido todo o HTML e por último o js

---

Eventos

- addEventListener
  Ele é um método disponível para todos os elementos HTML e permite que registremos funções (callbacks) que serão chamadas quando um evento específico ocorrer.
  - Sintaxe: elemento.addEventListener(evento, callback);
    elemento: É o elemento HTML ao qual queremos associar o evento;
    evento: É uma string que representa o tipo de evento que desejamos capturar;
    callback: É a função que será chamada quando o evento ocorrer.

---

Tipos de Eventos

- Eventos de clique (click)
- Eventos de submissão de formulário (submit)
- Eventos de teclado (keydown, keyup, keypress)
  keydown: Ocorre quando uma tecla é pressionada;
  keyup: Ocorre quando uma tecla é solta;
  keypress: Ocorre quando uma tecla é pressionada e ainda não foi solta.
- Eventos de foco (focus, blur)
  Os eventos de foco são usados quando queremos capturar quando um elemento recebe ou perde o foco. O evento focus ocorre quando o elemento ganha o foco (por exemplo, quando clicamos em um campo de formulário), enquanto o evento blur ocorre quando o elemento perde o foco.

---

Manipulação de Atributos

- getAttribute
  O método getAttribute é usado para obter o valor de um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos recuperar o valor.
  const elemento = document.getElementById('meuElemento');
  const valorDoAtributo = elemento.getAttribute('data-info');

- setAttribute
  O método setAttribute é usado para definir ou modificar o valor de um atributo em um elemento HTML. Ele aceita dois argumentos: o primeiro é o nome do atributo que queremos definir ou modificar, e o segundo é o valor que queremos atribuir a esse atributo. Se o atributo já existir, o método setAttribute irá sobrescrevê-lo; caso contrário, ele criará um novo atributo.
  const paragrafo = document.getElementById('meuParagrafo');
  paragrafo.setAttribute('id', 'paragrafoModificado');
  paragrafo.setAttribute('data-novo-atributo', 'Novo valor');

- hasAttribute
  O método hasAttribute é usado para verificar se um elemento possui um atributo específico. Ele recebe um argumento, que é o nome do atributo que queremos verificar. O método retornará true se o atributo existir e false se o atributo não estiver presente.
  const link = document.getElementById('meuLink');
  const temHref = link.hasAttribute('href');
  console.log(temHref); // Saída: true ou false

- removeAttribute
  O método removeAttribute é usado para remover um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos remover.
  const imagem = document.getElementById('minhaImagem');
  imagem.removeAttribute('alt');
