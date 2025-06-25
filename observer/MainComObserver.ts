interface Observer {
  atualizar(membro: Membro): void;
}

class Membro {
  private nome: string;
  private tipo: string;
  private observadores: Observer[] = [];

  constructor(nome: string, tipo: string) {
    this.nome = nome;
    this.tipo = tipo;
  }

  adicionarObservador(obs: Observer) {
    this.observadores.push(obs);
  }

  removerObservador(obs: Observer) {
    this.observadores = this.observadores.filter(o => o !== obs);
  }

  private notificar() {
    for (const obs of this.observadores) {
      obs.atualizar(this);
    }
  }

  getNome(): string {
    return this.nome;
  }

  getTipo(): string {
    return this.tipo;
  }

  setNome(novoNome: string) {
    this.nome = novoNome;
    this.notificar();
  }

  setTipo(novoTipo: string) {
    this.tipo = novoTipo;
    this.notificar();
  }
}

class InterfaceUI implements Observer {
  atualizar(membro: Membro): void {
    console.log(`UI atualizada: Nome - ${membro.getNome()}, Tipo - ${membro.getTipo()}`);
  }
}

class LogAuditoria implements Observer {
  atualizar(membro: Membro): void {
    console.log(`[LOG] Membro alterado: ${membro.getNome()} (${membro.getTipo()})`);
  }
}

const membro = new Membro("João", "Premium");
const ui = new InterfaceUI();
const logger = new LogAuditoria();

membro.adicionarObservador(ui);
membro.adicionarObservador(logger);

console.log("Alterando nome...");
membro.setNome("Carlos");

console.log("Alterando tipo...");
membro.setTipo("Básico");
