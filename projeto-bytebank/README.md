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

### Anotações

- Classe: coisas características que vão se tornar um objeto no futuro
- Diferença entre métodos e funções: funções são blocos de código independentes que realizam uma tarefa específica. Recebem dados como entrada (parâmetros), processam esses dados e retornam um valor. Não estão associadas a um objeto específico e podem ser chamadas diretamente. Já os métodos são funções associadas a um objeto (classe). Atuam sobre os dados desse objeto, permitindo modificar seu estado ou realizar operações específicas. São chamados através do objeto ao qual pertencem, utilizando a notação ponto (objeto.metodo()).
- Paradigmas de Programação: são maneiras em que podemos construir o nosso código. Mas, não podemos aplicar todos os paradigmas em todas linguagens. No TypeScript, podemos colocar em um mesmo projeto os dois tipos de paradigmas: programação funcional e orientação a objetos.
  - Programação funcional: a programação funcional é o paradigma com o qual estamos mais acostumados, quando falamos de JavaScript e TypeScript. É uma programação baseada em funções matemáticas. Por exemplo, podemos definir uma function pegaNumeroMaior() para colocar tudo o que deve acontecer para comparar valores e determinar o maior entre eles. Outra característica é que essas funções devem ser puras. Por exemplo, não podem mudar o valor de alguma variável global do projeto. Ela até pode mudar algo de uma variável do tipo let ou const. Mas, uma variável global, var, seria impossível fazer a mudança e não é considerado uma boa prática. Existem algumas palavras-chave que são associadas a esse tipo de programação: imutabilidade, composição, recursão e abstração.
    - Programação orientada a objetos (POO): como o nome indica, ela é baseada em objetos. Instanciamos esses objetos através de classes. Essas classes têm características que vão ser usadas nesse objetos, os chamados atributos. No caso do nosso projeto, temos os atributos nome, saldo e transações. São características que todos os objetos da classe Conta vão ter. Temos algumas palavras-chave que podem ser utilizadas e relacionadas a orientação a objetos: encapsulamento, polimorfismo e herança.
