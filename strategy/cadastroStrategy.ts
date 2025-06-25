import { OperacaoMembroStrategy } from "../strategy/strategy";
import Membro from "./membro-strategy";
import prompt from "prompt-sync";
const teclado = prompt();

export class CadastroStrategy implements OperacaoMembroStrategy {
    executar(membros: Membro[]): void {
        console.log('\n======= Cadastro de Membros =======\n');
        
        const nomeNovoMembro: string = teclado('Nome: ');
        const cpfNovoMembro: string = teclado('CPF: ');
        const dataNovoMembro: string = teclado('Data de nascimento: ');
        const enderecoNovoMembro: string = teclado('Endereço: ');
        const telefoneNovoMembro: string = teclado('Telefone: ');
        const matriculaNovoMembro: number = Math.floor(Math.random() * 100000);
        
        const novoMembro = new Membro(nomeNovoMembro, matriculaNovoMembro);
        novoMembro.cpf = cpfNovoMembro;
        novoMembro.dataNascimento = dataNovoMembro;
        novoMembro.endereco = enderecoNovoMembro;
        novoMembro.telefone = telefoneNovoMembro;
        novoMembro.dividas = []; 
        membros.push(novoMembro);
        
        console.log('\n✅ Membro cadastrado com sucesso:');
        console.log(`Nome: ${novoMembro.nome}`);
        console.log(`CPF: ${novoMembro.cpf}`);
        console.log(`Matrícula: ${novoMembro.matricula}`); 
    }
}