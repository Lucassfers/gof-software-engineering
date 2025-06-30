Padrão de Projeto: Strategy (Estratégia)
O que é o padrão Strategy?
O padrão Strategy é um padrão de projeto comportamental que permite definir uma família de algoritmos, encapsular cada um deles e torná-los intercambiáveis. Ele permite que o algoritmo varie independentemente dos clientes que o utilizam.

# Quando usar o Strategy
É especialmente útil para sistemas onde
Você precisa de diferentes variantes de um algoritmo
Quer isolar a lógica de negócios de algoritmos complexos
Possui várias classes relacionadas que diferem apenas em seu comportamento

# Exemplo aplicado no sistema de membros
No sistema de cadastro de membros, podemos implementar estratégias para:
CadastroStrategy: Lógica para cadastrar novos membros
AtualizacaoStrategy: Lógica para atualizar membros existentes
ExclusaoStrategy: Lógica para remover membros
Cada estratégia implementa a interface OperacaoMembroStrategy e pode ser trocada dinamicamente.

# Implementação básica 
1. Interface da Estratégia
2. Estratégias Concretas
3. Classe Contexto (Membro)

# Pontos Fortes e Fracos do Strategy
# Pontos Fortes:
- Troca de algoritmos em tempo de execução
- Isolamento da implementação do código cliente
- Extensibilidade (novas estratégias sem modificar  código existente)
- Eliminação de condicionais complexas

# Pontos Fracos:
- Aumento no número de classes/objetos
- Cliente precisa conhecer as diferentes estratégias
- Overhead de comunicação entre estratégia e contexto

# Conclusão
O padrão Strategy é ideal quando você precisa:
- Variar algoritmos independentemente dos clientes que os usam
- Substituir condicionais complexas por objetos polimórficos
- Isolar regras de negócio complexas
- Permitir fácil extensão de comportamentos

Assim como o Command, ele promove o desacoplamento, mas com foco em comportamentos variáveis em vez de ações discretas. A escolha entre Command e Strategy depende se você está modelando ações (Command) ou variações algorítmicas (Strategy).