import Membro from "../strategy/membro-strategy";
export interface OperacaoMembroStrategy {
    executar(membros: Membro[]): void;
}