export abstract class Pessoa {
  protected _nome: string;
  protected _cpf: string;
  protected _dataNascimento: string;
  protected _endereco: string;
  protected _telefone: string;

  constructor(nome: string, cpf: string, dataNascimento: string, endereco: string, telefone: string) {
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
}
