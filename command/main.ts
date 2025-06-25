import Membro from "./membro";
import { CadastrarMembroComando } from "./CadastrarMembroComando";
import { AtualizarMembroComando } from "./AtualizarMembroComando";
import { Invocador } from "./invocador";

// Criação de um membro com dados vazios só para acessar os métodos
const membro = new Membro("", 0);

// Comando para cadastrar
const comandoCadastrar = new CadastrarMembroComando(membro);
const invocadorCadastrar = new Invocador(comandoCadastrar);
invocadorCadastrar.executarComando();

// Comandoo para atualizar
const comandoAtualizar = new AtualizarMembroComando(membro);
const invocadorAtualizar = new Invocador(comandoAtualizar);
invocadorAtualizar.executarComando();
