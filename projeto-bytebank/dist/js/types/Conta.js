var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Armazenador } from "../utils/Armazenador.js";
import { ValidaDebito, ValidaDeposito } from "./Decorators.js";
import { TipoTransacao } from "./TipoTransacao.js";
export class Conta {
    nome;
    saldo = Armazenador.obter("saldo") || 0;
    transacoes = Armazenador.obter("transacoes", (key, value) => {
        if (key === "data") {
            return new Date(value);
        }
        return value;
    }) || [];
    constructor(nome) {
        this.nome = nome;
    }
    getTitular() {
        return this.nome;
    }
    getSaldo() {
        return this.saldo;
    }
    getDataAcesso() {
        return new Date();
    }
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(this.transacoes);
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao = "";
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: [],
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }
        return gruposTransacoes;
    }
    depositar(valor) {
        // substituindo a validação da funcao pela validação do decorator
        // if (valor <= 0) {
        //   throw new Error("O valor a ser depositado deve ser maior que zero!");
        // }
        this.saldo += valor;
        Armazenador.salvar("saldo", this.saldo.toString());
    }
    // necessario incluir a propriedade experimentalDecorators no tsconfig.json como true para ativar o decorator, porque ele vem por padrão desativado
    debitar(valor) {
        this.saldo -= valor;
        Armazenador.salvar("saldo", this.saldo.toString());
        // Decorators são funcões que podem aplicar para acontecer antes de um metodo e a sintax para chamar ele é @NomeDoDecorator em cima do metodo
        // substituindo o código abaixo e pelo Decorator
        /*    if (valor <= 0) {
          throw new Error("O valor a ser debitado deve ser maior que zero!");
        }
        if (valor > this.saldo) {
          throw new Error("Saldo insuficiente!");
        }
        */
    }
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            this.depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA ||
            novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            this.debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else {
            throw new Error("Tipo de Transação é inválido!");
        }
        this.transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        Armazenador.salvar("transacoes", JSON.stringify(this.transacoes));
    }
}
__decorate([
    ValidaDeposito
], Conta.prototype, "depositar", null);
__decorate([
    ValidaDebito
], Conta.prototype, "debitar", null);
export class ContaPremium extends Conta {
    registrarTransacao(transacao) {
        if (transacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            console.log("ganhou um bonus de 0,50");
            transacao.valor += 0.5;
        }
        // ao usar o super em vez do this, ele consome método da classe mãe, que é a classe Conta. Se colocássemos o this, ele iria sobrescrever o método da classe mãe
        super.registrarTransacao(transacao);
    }
}
const conta = new Conta("Joana da Silva Oliveira");
const contaPremium = new ContaPremium("Carolina Andrade");
export default conta;
