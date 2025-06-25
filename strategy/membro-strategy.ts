import { OperacaoMembroStrategy } from "./strategy";
import { Pessoa } from "../codigo-exemplo/pessoa";

export default class Membro extends Pessoa {
    private _matricula: number;
    private _membros: Membro[] = [];
    private _dividas: string[] = [];
    private _estrategia: OperacaoMembroStrategy | null = null;
    constructor(nome: string, matricula: number) {
        super(nome, "", "", "", "");
        this._matricula = matricula;
    }
    get matricula(): number {
        return this._matricula;
    }
    set matricula(value: number) {
        this._matricula = value;
    }
    get dividas(): string[] {
        return this._dividas;
    }
    set dividas(value: string[]) {
        this._dividas = value;
    }
    get membros(): Membro[] {
        return this._membros;
    }
    set estrategia(estrategia: OperacaoMembroStrategy) {
        this._estrategia = estrategia;
    }

    executarOperacao(): void {
        if (this._estrategia) {
            this._estrategia.executar(this._membros);
        } else {
            console.log('Nenhuma estratégia definida.');
        }
    }
}