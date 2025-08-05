export class Armazenador {
    constructor() { }
    static salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }
    // o tipo T é um tipo genérico, o que significa que quando formos chamar este método nós vamos definir o tipo que queremos desse retorno. Esse T está aqui para representar algo genérico, não precisa ser necessariamente a letra T, mas o T é usado para fazer a associação com TIPO
    static obter(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
}
