export class Armazenador {
  private constructor() {}

  static salvar(chave: string, valor: any): void {
    const valorComoString = JSON.stringify(valor);
    localStorage.setItem(chave, valorComoString);
  }

  // o tipo T é um tipo genérico, o que significa que quando formos chamar este método nós vamos definir o tipo que queremos desse retorno. Esse T está aqui para representar algo genérico, não precisa ser necessariamente a letra T, mas o T é usado para fazer a associação com TIPO
  static obter<T>(
    chave: string,
    reviver?: (this: any, key: string, value: any) => any
  ): T | null {
    const valor = localStorage.getItem(chave);
    if (valor === null) {
      return null;
    }

    if (reviver) {
      return JSON.parse(valor, reviver) as T;
    }

    return JSON.parse(valor) as T;
  }
}
