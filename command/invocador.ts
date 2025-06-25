import { Comando } from "./comando";

export class Invocador {
  constructor(private comando: Comando) {}

  executarComando(): void {
    this.comando.executar();
  }
}
