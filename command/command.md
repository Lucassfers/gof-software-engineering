# Padrão de Projeto: Command 
O padrão Command é um padrão de projeto comportamental que transforma requisições (ações) em objetos. Ele encapsula uma solicitação como um objeto, permitindo que você parametrize clientes com diferentes comandos, armazene filas de comandos e suporte operações como desfazer/refazer.

# Quando usar o Command
- Sistemas onde as ações precisam ser Eeecutadas sob demanda;
- Onde ações precisam ser registradas, desfeitas ou repetidas;
- Onde ações são desacopladas do objeto que as executa;

# Exemplo aplicado
Imagine um sistema de cadastro de membros onde há comandos para registrar membros e alterar cadastros. Em vez de ter métodos diretos e acoplados, podemos criar comandos independentes como:
AtualizarMembro
CadastrarMembro
Cada comando implementa uma interface comum (Command) e é executado por um invocador, como um botão, menu ou agendador.

# Pontos Fortes e Fracos do Command
# Pontos Fortes:
Desacoplamento entre o objeto que emite a requisição e quem a executa.
Permite implementar funcionalidades como desfazer/refazer.
Facilita log de ações, filas e agendamento de comandos.
Segue o princípio aberto/fechado e o SRP (Responsabilidade Única).

# Pontos Fracos:
- Pode gerar muitas classes no sistema (cada comando é uma classe diferente).
- Introduz complexidade extra em sistemas simples onde apenas chamar métodos diretos seria suficiente.
- Exige um pouco mais de planejamento e estrutura para organizar os comandos e o invocador.

# Conclusão
O padrão Command é ideal quando você precisa encapsular ações como objetos, registrar ou desfazer ações, ou construir um sistema mais modular e extensível. Embora adicione complexidade e número de classes, ele oferece muita flexibilidade e desacoplamento, sendo especialmente poderoso em sistemas com interfaces ricas, comandos encadeados ou funcionalidades de log/desfazer.

