import prompt from "prompt-sync"
const teclado = prompt()

export abstract class Pessoa {
    protected _nome: string;
    protected _cpf: string;
    protected _dataNascimento: string;
    protected _endereco: string;
    protected _telefone: string;

    constructor(
        nome: string,
        cpf: string,
        dataNascimento: string,
        endereco: string,
        telefone: string
    ) {
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._endereco = endereco;
        this._telefone = telefone;
    }

    get nome(): string {
        return this._nome;
    }
    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf(): string {
        return this._cpf;
    }
    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get dataNascimento(): string {
        return this._dataNascimento;
    }
    set dataNascimento(dataNascimento: string) {
        this._dataNascimento = dataNascimento;
    }

    get endereco(): string {
        return this._endereco;
    }
    set endereco(endereco: string) {
        this._endereco = endereco;
    }

    get telefone(): string {
        return this._telefone;
    }
    set telefone(telefone: string) {
        this._telefone = telefone;
    }
}
