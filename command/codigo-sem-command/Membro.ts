import prompt from "prompt-sync"
import { Pessoa } from "./pessoa"
import fs from "fs"

const teclado = prompt()

export default class Membro extends Pessoa{

    private _matricula:number = 0
    private _membros:Membro[] = []
    private _dividas:string [] = []

    constructor(nome:string, matricula:number){
        super(nome, "","","","")
        this._membros = []
        this._matricula = Math.floor(Math.random() * 100000)
        this._dividas = []
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

    // Cadastro de Membros

    cadastrarMembro(): void {
        
        console.log()
        console.log(`======= Cadastro de Membros =======`);
        console.log()
        const nomeNovoMembro: string = teclado(`Nome: `);
        const cpfNovoMembro: string = teclado(`CPF: `)
        const dataNovoMembro: string = teclado(`Data de nascimento: `);
        const enderecoNovoMembro: string = teclado(`Endereço: `);
        const telefoneNovoMembro: string = teclado(`Telefone: `)
        const matriculaNovoMembro: number = Math.floor(Math.random() * 100000)
        const NovoMembro = new Membro(nomeNovoMembro, matriculaNovoMembro);
        
        NovoMembro.cpf = cpfNovoMembro;
        NovoMembro.dataNascimento = dataNovoMembro;
        NovoMembro.endereco = enderecoNovoMembro;
        NovoMembro.telefone = telefoneNovoMembro;
        NovoMembro.matricula = matriculaNovoMembro
        NovoMembro.dividas = []
        this.membros.push(NovoMembro);

        console.log(`Dados do membro cadastrado: \n 
            ${NovoMembro.nome, NovoMembro.cpf, NovoMembro.dataNascimento, NovoMembro.endereco, NovoMembro.telefone, NovoMembro.matricula}`);
    }

    // Listagem de membros

    listarMembros(): void {
        if (this.membros.length === 0) {
            console.log();
            console.log("Não há membros cadastrados.");
        } else {
            console.log("X", "=".repeat(133), "X");
            console.log();
            console.log("Lista de Membros");
            console.log();
            console.log(`Numero: Nome.....................: Cpf...........: Data de Nascimento: Endereço............: Telefone......: Matricula: Dividas:`);
            
            this.membros.forEach((membro, index) => {
                const nome = String(membro.nome || "").padEnd(26);
                const cpf = String(membro.cpf || "").padEnd(14);
                const dataNascimento = String(membro.dataNascimento || "").padEnd(19);
                const endereco = String(membro.endereco || "").padEnd(21);
                const telefone = String(membro.telefone || "").padEnd(11);
                const matricula = String(membro.matricula || "").padEnd(9);
                const divida = String(membro.dividas || "").length
                console.log(`${String(index + 1).padEnd(7)} ${nome} ${cpf}  ${dataNascimento} ${endereco} ${telefone} ${matricula}  ${divida}`);
            });
            
            console.log();
            console.log("X", "=".repeat(133), "X");
        }
    }
    
    // Atualizar cadastro de membros

    atualizarMembro(): void {
        if (this.membros.length === 0) {
            console.log();
            console.log("Nenhum membro cadastrado.");
            return;
        }
        this.listarMembros()
        console.log();
        
        const matriculaParaAtualizar = teclado(`Digite a matrícula do membro que deseja atualizar: `);
        const membro = this.membros.find(m => m.matricula === Number(matriculaParaAtualizar));

        if (!membro) {
            console.log(`Membro com matrícula "${matriculaParaAtualizar}" não encontrado.`);
            return;
        }
        console.log(`X============X INFORMAÇÕES DO MEMBRO X============X`);
        console.log();
        console.log(`Informações atuais do membro "${membro.nome}":`);
        console.log(`1. Nome: ${membro.nome}`);
        console.log(`2. CPF: ${membro.cpf}`);
        console.log(`3. Data de Nascimento: ${membro.dataNascimento}`);
        console.log(`4. Endereço: ${membro.endereco}`);
        console.log(`5. Telefone: ${membro.telefone}`);
        console.log(`6. Matrícula: ${membro.matricula}`);
        console.log();
        console.log(`X============X=======================X============X`);

        const campoParaAtualizar:number = +teclado(`Digite o número do campo que deseja atualizar (ou 0 para cancelar): `);

        switch (campoParaAtualizar) {
            case 1:
                membro.nome = teclado("Digite o novo nome: ");
                break;
            case 2:
                membro.cpf = teclado("Digite o novo CPF: ");
                break;
            case 3:
                membro.dataNascimento = teclado("Digite a nova data de nascimento: ");
                break;
            case 4:
                membro.endereco = teclado("Digite o novo endereço: ");
                break;
            case 5:
                membro.telefone = teclado("Digite o novo telefone: ");
                break;
            case 6:
                membro.matricula = +teclado("Digite a nova matrícula: ");
                break;
            case 0:
                console.log("Atualização cancelada.");
                return;
            default:
                console.log("Opção inválida.");
                return;
        }

        console.log(`Informações do membro "${membro.nome}" atualizadas com sucesso!`);
    }

    excluirMembros(nome:string): void{
        if(this.membros.length === 0){
            console.log(`Nenhum membro cadastrado.`);
        }
        console.log();
        this.listarMembros()

        let opcao = +teclado(`Digite o número do membro: `)-1
        if(opcao < 0 || opcao >= this.membros.length){
            console.log(`Opção inválida.`);
            console.log();
        }else{
            console.log(`${this.membros[opcao].nome} removido com sucesso.`);
            this.membros.splice(opcao, 1)
        }
    }

    // Salva os membros no txt usando o json
    salvarMembros(): void {
        try {
            // Verifica se existem membros
            if (this.membros.length > 0) {
                const membrosData = this.membros.map(membro => ({
                    matricula: membro.matricula || "",
                    nome: membro.nome || "",
                    cpf: membro.cpf || "",
                    dataNascimento: membro.dataNascimento || "",
                    endereco: membro.endereco || "",
                    telefone: membro.telefone || "",
                    dividas: membro.dividas || []
                }));
    
                fs.writeFileSync('membros.txt', JSON.stringify(membrosData, null, 2), 'utf-8');
                console.log("Membros salvos com sucesso.");
            } else {
                console.log("Nenhum membro para salvar.");
            }
        } catch (err) {
            console.error("Erro ao salvar os membros:", err);
        }
    }

    // carrega os membros no txt usando JSON

    carregarMembros(): void {
        try {
            if (fs.existsSync('membros.txt')) {
                const dados = fs.readFileSync('membros.txt', 'utf-8');
                const membrosData = JSON.parse(dados);
    
                this.membros = membrosData.map((membro: any) => ({
                    matricula: membro.matricula || "",
                    nome: membro.nome || "",
                    cpf: membro.cpf || "",
                    dataNascimento: membro.dataNascimento || "",
                    endereco: membro.endereco || "",
                    telefone: membro.telefone || "",
                    dividas: membro.dividas || [] // Deixa pendências vazias se não houver.
                }));
    
                console.log("Membros carregados com sucesso.");
            } else {
                console.log("Arquivo de membros não encontrado. Iniciando com uma lista vazia.");
                this.membros = [];
            }
        } catch (err) {
            console.error("Erro ao carregar os membros:", err);
            this.membros = []; // Garante que o array seja inicializado mesmo em caso de erro
        }
    }
}
