![Typescript: orientação a objetos](https://imgur.com/9399vxd.png)

# Typescript: orientação a objetos

Este projeto faz parte da escola Front-end e tem como objetivo ensinar a transformar trechos de código originalmente cosntruídos em programação funcional para programação orientada a objetos, destacando as diferenças entre os dois paradigmas.

## Funcionalidades do projeto

O projeto contará com o desenvolvimento de:

- Classe conta e armazenador;
- Atributos e construtor de conta;
- Modificadores de acesso;
- Métodos estáticos;
- Herança de classes;
- Decorators de validação.

## Anotações

- Classe: coisas características que vão se tornar um objeto no futuro
- Diferença entre métodos e funções: funções são blocos de código independentes que realizam uma tarefa específica. Recebem dados como entrada (parâmetros), processam esses dados e retornam um valor. Não estão associadas a um objeto específico e podem ser chamadas diretamente. Já os métodos são funções associadas a um objeto (classe). Atuam sobre os dados desse objeto, permitindo modificar seu estado ou realizar operações específicas. São chamados através do objeto ao qual pertencem, utilizando a notação ponto (objeto.metodo()).
- Paradigmas de Programação: são maneiras em que podemos construir o nosso código. Mas, não podemos aplicar todos os paradigmas em todas linguagens. No TypeScript, podemos colocar em um mesmo projeto os dois tipos de paradigmas: programação funcional e orientação a objetos.

  - Programação funcional: a programação funcional é o paradigma com o qual estamos mais acostumados, quando falamos de JavaScript e TypeScript. É uma programação baseada em funções matemáticas. Por exemplo, podemos definir uma function pegaNumeroMaior() para colocar tudo o que deve acontecer para comparar valores e determinar o maior entre eles. Outra característica é que essas funções devem ser puras. Por exemplo, não podem mudar o valor de alguma variável global do projeto. Ela até pode mudar algo de uma variável do tipo let ou const. Mas, uma variável global, var, seria impossível fazer a mudança e não é considerado uma boa prática. Existem algumas palavras-chave que são associadas a esse tipo de programação: imutabilidade, composição, recursão e abstração.
  - Programação orientada a objetos (POO): como o nome indica, ela é baseada em objetos. Instanciamos esses objetos através de classes. Essas classes têm características que vão ser usadas nesse objetos, os chamados atributos. No caso do nosso projeto, temos os atributos nome, saldo e transações. São características que todos os objetos da classe Conta vão ter. Temos algumas palavras-chave que podem ser utilizadas e relacionadas a orientação a objetos: encapsulamento, polimorfismo e herança.

- Encapsulamento

  - o encapsulamento permite ocultar a implementação interna de uma classe e fornecer apenas interfaces bem definidas para acessar e manipular seus dados. Para garantir o encapsulamento adequado em TypeScript é possível fazer uso dos modificadores de acesso, que são palavras-chave que controlam a visibilidade dos membros das classes. Os principais modificadores são: public, private e protected. Por default, quando não declarados, os membros das classes possuem o modificador public
  - private: só é acessível pela classe principal (por exemplo a variável private transacoes só pode ser acessada dentro da classe Conta)
  - protected: é acessível tanto pela classe principal quanto pelas subclasses (as classes herdadas podem acessar)
  - métodos estáticos: são uma maneira poderosa de definir comportamentos e lógicas que podem ser usados diretamente na classe, sem a necessidade de criar objetos. Imagine que você tenha uma classe chamada Utils e deseja criar um método que converta uma string em letras maiúsculas. Em vez de criar uma instância da classe Utils toda vez que você precisar usar esse método, você pode declará-lo como um método estático. Isso permitirá que você acesse o método diretamente na classe, sem a necessidade de criar um objeto.

- Generics: são tipos parametrizados que permitem que você defina o tipo de um argumento ou retorno de uma função no momento da sua utilização. Assim, você pode criar uma função que aceite qualquer tipo de array, desde que ele seja compatível com uma interface que defina as propriedades comuns a todos os tipos de produtos. Generics são uma forma de reutilizar código e evitar duplicação. Eles permitem que você crie funções e classes que funcionem com diferentes tipos de dados, sem perder a segurança de tipo fornecida pelo typescript. Para usar generics, você precisa usar um espaço reservado para o tipo, como <T>, na declaração da função ou classe. Esse espaço reservado será substituído pelo tipo real no momento da utilização da função ou classe. Você também pode restringir o tipo genérico usando a palavra-chave extends, indicando que ele deve ser um subtipo de outro tipo ou interface.

- Herança: é um princípio da programação orientada a objetos que permite que uma classe filha herde as propriedades e os métodos de uma classe pai, sem precisar redefinir as funções. Em Typescript, usamos a palavra-chave extends para indicar que uma classe é derivada de outra. A classe filha pode sobrescrever os métodos da classe pai se precisar de uma lógica diferente, ou adicionar novos métodos se precisar de mais funcionalidades. A classe filha também pode acessar o construtor da classe pai usando a função super.
