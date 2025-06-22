import prompt from "prompt-sync";

const teclado = prompt();

export default class Membro {

    private _nome: string;
    private _matricula: number;
    private _membros: Membro[] = [];
    private _dividas: string[] = [];
    private _cpf: string;
    private _dataNascimento: string;
    private _endereco: string;
    private _telefone: string;


    constructor(nome: string, matricula: number) {
        this._nome = nome;
        this._matricula = matricula;
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
    set cpf(value: string) {
        this._cpf = value;
    }

    get dataNascimento(): string {
        return this._dataNascimento;
    }
    set dataNascimento(value: string) {
        this._dataNascimento = value;
    }

    get endereco(): string {
        return this._endereco;
    }
    set endereco(value: string) {
        this._endereco = value;
    }

    get telefone(): string {
        return this._telefone;
    }
    set telefone(value: string) {
        this._telefone = value;
    }

    get matricula(): number {
        return this._matricula;
    }

    set matricula(matricula: number) {
        this._matricula = matricula;
    }
    get membros(): Membro[] {
        return this._membros;
    }

    set membros(membros: Membro[]) {
        this._membros = membros;
    }

    get dividas(): string[] {
        return this._dividas;
    }

    set dividas(dividas: string[]) {
        this._dividas = dividas;
    }


    cadastrarMembro(): void {
        console.log();
        console.log(`======= Cadastro de Membros =======`);
        console.log();

        const nomeNovo = teclado(`Nome: `)
        const dataNasc = teclado(`Data de nascimento: `);
        const endereco = teclado(`Endereço: `);
        const telefone = teclado(`Telefone: `);
        const cpf = teclado(`CPF: `)
        const matricula = Math.floor(Math.random() * 100000);

        const novo =  new Membro(nomeNovo, matricula)
        novo.cpf = cpf;
        novo.dataNascimento = dataNasc;
        novo.endereco = endereco;
        novo.telefone = telefone;
        novo.dividas = [];

        this.membros.push(novo);

        console.log(`\n✅ Membro cadastrado com sucesso:\n`);
        console.log(`Nome: ${novo.nome}`);
        console.log(`CPF: ${novo.cpf}`);
        console.log(`Data de Nascimento: ${novo.dataNascimento}`);
        console.log(`Endereço: ${novo.endereco}`);
        console.log(`Telefone: ${novo.telefone}`);
        console.log(`Matrícula: ${novo.matricula}`);
    }
}