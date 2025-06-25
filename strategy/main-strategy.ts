import Membro from "../strategy/membro-strategy";
import { CadastroStrategy } from "../strategy/cadastroStrategy";
import { AtualizacaoStrategy } from "../strategy/atualizacaoStrategy";

const membroAdmin = new Membro("Admin", 12345);

membroAdmin.estrategia = new CadastroStrategy();
membroAdmin.executarOperacao(); 

membroAdmin.estrategia = new AtualizacaoStrategy();
membroAdmin.executarOperacao();