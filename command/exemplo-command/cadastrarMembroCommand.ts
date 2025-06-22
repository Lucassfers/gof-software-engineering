import { Command } from "./command";
import Membro from "./membro";

export class CadastrarMembroCommand implements Command {
    private receiver: Membro;

    constructor(receiver: Membro){
        this.receiver = receiver
    }

    execute(): void{
        this.receiver.cadastrarMembro()
    }
}