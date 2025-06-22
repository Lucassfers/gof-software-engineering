Os Padrões GoF são um conjunto de 23 padrões de projeto de software descritos no livro "Design Patterns: Elements of Reusable Object-Oriented Software" (1994), escrito por Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides (conhecidos como a "Gang of Four"). Esses padrões são soluções reutilizáveis para problemas comuns no desenvolvimento de software, especialmente em sistemas orientados a objetos. Eles se dividem em três categorias:
Padrões Criacionais → Lidam com a criação de objetos (ex: Singleton, Factory Method).
Padrões Estruturais → Tratam da composição de classes e objetos (ex: Adapter, Decorator).
Padrões Comportamentais → Focam na comunicação entre objetos (ex: Observer, Command).


  - Padrões Comportamentais
        Os padrões comportamentais focam na comunicação e interação entre objetos, definindo como responsabilidades são distribuídas e como objetos colaboram de forma flexível e desacoplada.

    Principais Características:
        Organizam comportamentos dinâmicos entre objetos.
        Evitam acoplamento rígido, delegando ações ou notificações.
        Simplificam algoritmos complexos ou fluxos de controle.

    Os seguintes padrões abaixo se encontram no grupo dos Padrões Comportamentais:
        Padrão Chain of Responsibility;
        Padrão Interpreter;
        Padrão Iterator;
        Padrão Observer;
        Padrão Strategy;
        Padrão Visitor;
        Padrão Command;
        Padrão Mediator;
        Padrão Memento;
        Padrão State; e
        Padrão Template Method.
    
Dos 11 padrões comportamentais GoF, os considerados principais são:

- Observer (Observador)
Para que serve? Criar um sistema de notificação onde objetos ("observadores") são avisados automaticamente quando outro objeto ("sujeito") muda de estado.
Onde é usado?
Atualização de interfaces gráficas (ex: quando dados mudam no backend, a UI se atualiza).
Sistemas de pub/sub (como mensageria: Kafka, RabbitMQ).

- Command (Comando)
Para que serve? Transformar uma solicitação em um objeto independente, permitindo operações como filas de comandos, undo/redo e parametrização.
Onde é usado?
Controles remotos (cada botão é um comando).
Sistemas de transações bancárias (rollback em caso de erro).

- Strategy (Estratégia)
Para que serve? Definir uma família de algoritmos intercambiáveis (permite trocar comportamentos em tempo de execução).
Onde é usado?
Métodos de pagamento (cartão, boleto, Pix).
Algoritmos de ordenação (QuickSort, MergeSort).

- State (Estado)
Para que serve? Permitir que um objeto altere seu comportamento quando seu estado interno muda (evitando condicionais complexas).
Onde é usado?
Máquinas de estado (ex: semáforo: verde → amarelo → vermelho).
Processos de aprovação (ex: documento "rascunho" → "revisão" → "aprovado").

Por que Esses São os Mais Importantes?
Frequência em Concursos: Observer, Command e Strategy são os campeões de questões (especialmente em provas de arquitetura de software).
Demanda no Mercado: Padrões como Observer e Strategy são amplamente usados em frameworks (ex: Angular, React) e sistemas distribuídos.
Aplicabilidade Prática: Resolvem problemas reais de design (ex: undo/redo com Command, notificações com Observer).

Menção Honrosa (Também Relevantes)
Mediator: Usado em sistemas complexos com muitas interações (ex: telas de aplicativos com muitos componentes).

Template Method: Base para frameworks (define um fluxo fixo com etapas customizáveis).
