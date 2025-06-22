import Membro from "./membro";
import { Invoker } from "./invoker";
import { CadastrarMembroCommand } from "./cadastrarMembroCommand";

const membro = new Membro("", 0); // Inicialização
const invoker = new Invoker();

const cadastrarMembroCommand = new CadastrarMembroCommand(membro);
invoker.setCommand(cadastrarMembroCommand);

invoker.executeCommand();
