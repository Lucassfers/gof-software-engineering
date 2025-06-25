import { Comando } from "./comando";
import Membro from "./membro";

export class CadastrarMembroComando implements Comando {
  constructor(private membro: Membro) {}

  executar(): void {
    this.membro.cadastrarMembro();
  }
}
