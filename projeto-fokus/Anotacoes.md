Comandos para manipular o DOM via console do navegador

- DOM: O DOM, que significa Modelo de Objeto de Documentos (Documents Object Model), não se resume ao documento em si. O DOM representa a estrutura de um documento através de uma árvore de objetos, onde cada objeto representa uma parte do documento (como arquivos HTML, CSS, JavaScript e outras APIs inseridas no projeto).
- document: seleciona o documento inteiro no DOM
- document.querySelector(""): utilizado para selecionar componentes no DOM. Dentro das aspas enviamos uma string que será utilizada pra reconhecer o elemento, seja uma tag, um ID (coloca a # no início do nome), uma classe (coloca o . no início do nome) ou um atributo (coloca o [] no início do nome)
- document.querySelector("button"): seleciona a primeira tag button que encontrar no DOM
- document.querySelectorAll("button"): retorna uma NodeList, um array com todos as tags button que foram encontradas no DOM
- document.getElementsByXXXX(""): utilizado para selecionar componentes no DOM. Os X's representam as opções que temos para selecionar o elemento, como por exemplo o ID (document.getElementById("start-pause"))
- atributo defer: o atributo defer dentro da tag script no arquivo html é utilizado para fazer com que quando esta página for carregada no navegador, vai ser lido todo o HTML e por último o js
  Nota: Certifique-se de que o JavaScript seja carregado após a renderização do DOM, para que os elementos estejam acessíveis antes de tentar manipular suas classes.

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

---

Manipulação de Texto

- textContent
  A propriedade textContent permite que você defina o conteúdo de texto de um elemento HTML. Diferente do innerHTML que permite a inclusão de tags, o textContent só permite a inclusão e alteração de textos.

---

Métodos

- innerHTML
  O método innerHTML permite que você insira ou substitua o conteúdo HTML de um elemento.
  Você seleciona um elemento HTML (como uma div, p, h1, etc.) usando métodos como document.getElementById ou document.querySelector, e então usa innerHTML para definir ou obter o HTML dentro desse elemento.
  O sinal de + no exemplo elementoMensagem2 faz com qe um novo parágrafo seja inserido, sem alterar o original, fazendo com que 2 parágrafos sejam exibidos

  - exemplos
    const elementoMensagem = document.getElementById('mensagem');
    elementoMensagem.innerHTML = '<p>Nova mensagem!</p><img src="imagem.jpg">';
    const elementoMensagem2 = document.getElementById('mensagem');
    elementoMensagem.innerHTML += '<p>Nova mensagem!</p><img src="imagem.jpg">';

- classList
  O classList é uma propriedade do JavaScript que representa uma lista de classes CSS. Ele fornece métodos que facilitam a adição, remoção e verificação de classes, tornando a manipulação de classes CSS mais eficiente e menos suscetível a erros de programação.

  - Adicionando uma classe
    Para adicionar uma classe a um elemento HTML, podemos usar o método add() do classList. Este método aceita o nome da classe como argumento e adiciona a classe ao elemento, se ela ainda não estiver presente.
    const element = document.getElementById('meuElemento');
    element.classList.add('minhaClasse');
  - Removendo uma classe
    Para remover uma classe de um elemento HTML, podemos utilizar o método remove() do classList. Este método aceita o nome da classe como argumento e remove a classe do elemento, se ela estiver presente.
    const element = document.getElementById('meuElemento');
    element.classList.remove('minhaClasse');
  - Alternando uma classe
    O método toggle() do classList permite alternar uma classe em um elemento. Se a classe já estiver presente no elemento, o método a remove; caso contrário, ele a adiciona.
    const element = document.getElementById('meuElemento');
    element.classList.toggle('minhaClasse');
  - Verificando se uma classe está presente
    Para verificar se uma classe específica está associada a um elemento, podemos usar o método contains() do classList
    const element = document.getElementById('meuElemento');
    if (element.classList.contains('minhaClasse')) {
    // A classe 'minhaClasse' está presente no elemento
    // Faça algo aqui...
    }
  - Substituindo classes
    Podemos substituir uma classe por outra usando os métodos add() e remove() em sequência.
    const element = document.getElementById('meuElemento');
    element.classList.remove('classeAntiga');
    element.classList.add('classeNova');
  - Manipulando várias classes simultaneamente
    É possível adicionar ou remover várias classes de uma vez usando o método add() ou remove() passando vários argumentos separados por vírgula.
    const element = document.getElementById('meuElemento');
    element.classList.add('classe1', 'classe2', 'classe3');
    element.classList.remove('classe2', 'classe3');

- parentNode

  - A propriedade parentNode é utilizada para acessar o nó pai de um elemento no DOM. Por meio dela, podemos navegar pela árvore do DOM em direção ao nó pai do elemento atual.
    Suponha que temos o seguinte código HTML:
    <div id="container">
      <p>Este é um parágrafo</p>
    </div>
    Agora, podemos usar o ‘parentNode’ para acessar o elemento pai do parágrafo:
    const paragraph = document.querySelector('p');
    const parentElement = paragraph.parentNode;
    console.log(parentElement.id); // Saída: "container"

- childNodes

  - A propriedade childNodes é utilizada para acessar todos os nós filhos de um elemento no DOM. Ela retorna uma lista de nós, incluindo nós de texto e elementos HTML.

    - Exemplo de uso:
      Considerando o HTML abaixo, podemos usar o childNodes para obter todos os nós filhos do elemento com o ID "container":
      <div id="container">
        <p>Este é um parágrafo</p>
      </div>

      const container = document.getElementById('container');
      const childNodes = container.childNodes;
      console.log(childNodes.length); // Saída: 1 (o nó de texto "\n " é considerado um nó filho)
      console.log(childNodes[0].nodeName); // Saída: "#text"
      console.log(childNodes[1].nodeName); // Saída: "P"

- nextElementSibling
  A propriedade nextElementSibling permite acessar o próximo irmão (nó adjacente) de um elemento no DOM.

  - Exemplo de uso
    Vamos considerar o seguinte HTML:
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    Agora, podemos usar o nextElementSibling para acessar o próximo irmão de um elemento <li>:
    const item1 = document.querySelector('li:first-child');
    const item2 = item1.nextElementSibling;
    console.log(item2.textContent); // Saída: "Item 2"

- previousElementSibling
  A propriedade previousElementSibling é semelhante ao nextElementSibling, mas permite acessar o irmão anterior (nó adjacente) de um elemento no DOM.
  - Exemplo de uso:
    Continuando o exemplo anterior, vamos usar o previousElementSibling para acessar o irmão anterior do elemento <li> que selecionamos:
    const item3 = document.querySelector('li:last-child');
    const item2 = item3.previousElementSibling;
    console.log(item2.textContent); // Saída: "Item 2"

---

Objetos

- Audio
  O objeto ‘Audio’ é uma parte do HTML5 e fornece uma interface fácil e poderosa para reproduzir e controlar arquivos de áudio em tempo real.
  Para criar um novo objeto ‘Audio’, podemos simplesmente usar a seguinte sintaxe: const audioElement = new Audio('caminho/do/arquivo-de-audio.mp3');
  Substitua 'caminho/do/arquivo-de-audio.mp3' pelo caminho real do arquivo de áudio que você deseja reproduzir.
  - Controles básicos de áudio
    Após criar um objeto ‘Audio’, podemos controlar sua reprodução e outras propriedades usando métodos e propriedades disponíveis.
    play(): inicia a reprodução do áudio;
    pause(): pausa a reprodução do áudio;
    currentTime: propriedade que retorna ou define a posição atual de reprodução do áudio, em segundos;
    volume: propriedade que retorna ou define o nível de volume do áudio, variando de 0 a 1.
    - Exemplo de utilização dos métodos do objeto Audio:
      const audioElement = new Audio('caminho/do/arquivo-de-audio.mp3');
      audioElement.play(); // Inicia a reprodução
      audioElement.pause(); // Pausa a reprodução
      audioElement.currentTime = 10; // Move para 10 segundos no áudio
      audioElement.volume = 0.5; // Define o volume para metade (50%)
