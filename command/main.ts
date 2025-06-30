import Membro from "./membro";
import { CadastrarMembroComando } from "./CadastrarMembroComando";
import { AtualizarMembroComando } from "./AtualizarMembroComando";
import { Invocador } from "./invocador";

const membro = new Membro("", 0);

const comandoCadastrar = new CadastrarMembroComando(membro);
const invocadorCadastrar = new Invocador(comandoCadastrar);
invocadorCadastrar.executarComando();

const comandoAtualizar = new AtualizarMembroComando(membro);
const invocadorAtualizar = new Invocador(comandoAtualizar);
invocadorAtualizar.executarComando();
