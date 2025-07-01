import prompt from "prompt-sync";
import { Pessoa } from "./pessoa";

const teclado = prompt();

export default class Membro extends Pessoa {
  private _matricula: number;
  private _membros: Membro[] = [];
  private _dividas: string[] = [];

  constructor(nome: string, matricula: number) {
    super(nome, "", "", "", "");
    this._matricula = matricula;
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

    const nomeNovo = teclado(`Nome: `);
    const dataNasc = teclado(`Data de nascimento: `);
    const endereco = teclado(`Endereço: `);
    const telefone = teclado(`Telefone: `);
    const cpf = teclado(`CPF: `);
    const matricula = Math.floor(Math.random() * 100000);
    const novo = new Membro(nomeNovo, matricula);
    novo.cpf = cpf;
    novo.dataNascimento = dataNasc;
    novo.endereco = endereco;
    novo.telefone = telefone;
    novo.dividas = [];
    this._membros.push(novo);
    console.log(`\n✅ Membro cadastrado com sucesso:\n`);
    console.log(`Nome: ${novo.nome}`);
    console.log(`CPF: ${novo.cpf}`);
    console.log(`Data de Nascimento: ${novo.dataNascimento}`);
    console.log(`Endereço: ${novo.endereco}`);
    console.log(`Telefone: ${novo.telefone}`);
    console.log(`Matrícula: ${novo.matricula}`);
  }
 atualizarMembro(): void {
    console.log();
    console.log(`======= Atualização de Membro =======`);
    console.log();

    const matriculaInput = teclado(`Digite a matrícula do membro que deseja atualizar: `);
    const matricula = parseInt(matriculaInput);

    const membroIndex = this._membros.findIndex(m => m.matricula === matricula);

    if (membroIndex === -1) {
        console.log(`\nMembro com matrícula ${matricula} não encontrado!\n`);
        return;
    }

    const membro = this._membros[membroIndex];
    console.log(`\nDados atuais do membro:`);
    console.log(`Nome: ${membro.nome}`);
    console.log(`CPF: ${membro.cpf}`);
    console.log(`Data de Nascimento: ${membro.dataNascimento}`);
    console.log(`Endereço: ${membro.endereco}`);
    console.log(`Telefone: ${membro.telefone}`);
    console.log(`Matrícula: ${membro.matricula}`);
    console.log(`Dívidas: ${membro.dividas.join(', ') || 'Nenhuma'}`);
    console.log(`\nDigite os novos dados (deixe em branco para manter o valor atual):`);

    const novoNome = teclado(`Nome [${membro.nome}]: `) || membro.nome;
    const novaDataNasc = teclado(`Data de nascimento [${membro.dataNascimento}]: `) || membro.dataNascimento;
    const novoEndereco = teclado(`Endereço [${membro.endereco}]: `) || membro.endereco;
    const novoTelefone = teclado(`Telefone [${membro.telefone}]: `) || membro.telefone;
    const novoCpf = teclado(`CPF [${membro.cpf}]: `) || membro.cpf;
    membro.nome = novoNome;
    membro.dataNascimento = novaDataNasc;
    membro.endereco = novoEndereco;
    membro.telefone = novoTelefone;
    membro.cpf = novoCpf;
    console.log(`\n Membro atualizado com sucesso!\n`);
    console.log(`Novos dados:`);
    console.log(`Nome: ${membro.nome}`);
    console.log(`CPF: ${membro.cpf}`);
    console.log(`Data de Nascimento: ${membro.dataNascimento}`);
    console.log(`Endereço: ${membro.endereco}`);
    console.log(`Telefone: ${membro.telefone}`);
    console.log(`Matrícula: ${membro.matricula}`);
}
}
