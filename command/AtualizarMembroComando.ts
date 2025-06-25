import { Comando } from "./comando";
import Membro from "./membro";

export class AtualizarMembroComando implements Comando {
  constructor(private membro: Membro) {}

  executar(): void {
    this.membro.atualizarMembro();
  }
}

