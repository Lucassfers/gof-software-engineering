import { OperacaoMembroStrategy } from "../strategy/strategy";
import Membro from "../strategy/membro-strategy";
import prompt from "prompt-sync";
const teclado = prompt();

export class AtualizacaoStrategy implements OperacaoMembroStrategy {
    executar(membros: Membro[]): void {
        if (membros.length === 0) {
            console.log('\nNenhum membro cadastrado.');
            return;
        }
        
        const matricula = Number(teclado('Digite a matrícula do membro: '));
        const membro = membros.find(m => m.matricula === matricula);
        
        if (!membro) {
            console.log('\nMembro não encontrado.');
            return;
        }
        
        console.log('\nSelecione o campo para atualizar:');
        console.log('1. Nome');
        console.log('2. CPF');
        console.log('3. Data de Nascimento');
        console.log('4. Endereço');
        console.log('5. Telefone');
        
        const opcao = Number(teclado('Opção: '));
        const novoValor = teclado('Novo valor: ');
        
        switch (opcao) {
            case 1: membro.nome = novoValor; break;
            case 2: membro.cpf = novoValor; break;
            case 3: membro.dataNascimento = novoValor; break;
            case 4: membro.endereco = novoValor; break;
            case 5: membro.telefone = novoValor; break;
            default: console.log('Opção inválida.'); return;
        }
        
        console.log('\n✅ Membro atualizado com sucesso!');
    }
}