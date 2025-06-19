Os Padrões Comportamentais descrevem como classes e objetos interagem entre si. Esses padrões se concentram em como objetos interagem e distribuem responsabilidades de forma flexível e eficiente. Eles são usados para resolver problemas relacionados à comunicação, coordenação e controle de objetos.

De forma resumida, os Padrões Comportamentais:

Identificam padrões de comunicação comuns entre objetos e realizam esses padrões;
Aumentando a flexibilidade na realização dessa comunicação;
Preocupam-se com algoritmos e a atribuição de responsabilidades entre objetos; e
Cuidam de uma comunicação eficaz e da atribuição de responsabilidades entre objetos.
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
Desses 11 padrões, iremos focar em apenas quatro que mais caem em concursos:

Observer: define um relacionamento um-para-muitos entre objetos de forma que quando um objeto muda de estado, todos os seus observadores são notificados;
Command: encapsula uma solicitação como um objeto;
Permitindo que os clientes solicitem operações sem se preocupar com a implementação da operação;
Mediator: define um objeto que media as interações entre outros objetos;
Permitindo que os objetos se comuniquem entre si sem conhecer diretamente uns aos outros; e
Memento: permite que um objeto salve seu estado atual em um objeto de estado;
Isso pode ser usado para restaurar o estado do objeto para um momento anterior.
O padrão Observer é projetado para tratar a necessidade de estabelecer dependências de um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus observadores são notificados automaticamente e atualizados. Isso promove o desacoplamento entre o objeto que é observado (sujeito) e os objetos que observam (observadores). Um exemplo clássico é a implementação de um sistema de notificação, onde vários observadores podem se inscrever para receber atualizações sempre que ocorrer uma mudança em um objeto observado. Isso permite uma arquitetura flexível e escalável.

O Observer fornece uma maneira de notificar a alteração em várias classes e permite definir um mecanismo de assinatura para notificar vários objetos sobre quaisquer eventos que ocorram no objeto que estão observando. Um exemplo de uso do padrão é um sistema de monitoramento de temperatura pode usar o padrão Observer para notificar todos os seus clientes quando a temperatura de um determinado ambiente muda.

O padrão Command é projetado para encapsular solicitações ou operações como objetos, permitindo que os clientes parametrizem e agendem essas solicitações. Isso ajuda a separar quem emite um comando do objeto que realmente realiza a ação. Isso é particularmente útil quando se deseja adicionar funcionalidades como histórico de comandos, filas de comandos ou implementações de desfazer/refazer em um sistema. Esse padrão promove o baixo acoplamento entre emissor e receptor de comandos, permitindo a extensão fácil do sistema.

O Command possui a intenção de:

Encapsular uma requisição como um objeto, permitindo que clientes parametrizem diferentes requisições, filas ou requisições de log; e
Suportar operações reversíveis.
Um exemplo de uso do Command é em um sistema de pedidos que pode usar o padrão Command para permitir que os clientes enviem pedidos sem precisar saber como os pedidos são processados.

O padrão Mediator visa reduzir o acoplamento excessivo entre objetos que interagem intensamente, promovendo uma comunicação indireta através de um objeto mediador central. Isso evita que os objetos se conheçam intimamente, tornando-os mais independentes e reutilizáveis. Um exemplo prático é um sistema de chat, onde os usuários se comunicam entre si, mas não precisam conhecer os detalhes uns dos outros. O mediador age como uma central de comunicação, roteando as mensagens entre os participantes. O padrão Mediator é essencial para sistemas complexos onde a coordenação é crucial.

O Mediator:

Define a comunicação simplificada entre classes;
Permite reduzir dependências caóticas entre objetos;
Restringe as comunicações diretas entre os objetos; e
Força-os a colaborar apenas por meio de um objeto mediador.
Um sistema de bate-papo pode usar o padrão Mediator para permitir que os usuários se comuniquem entre si sem precisar saber uns dos outros.

Por último, o padrão Memento trata do problema de capturar e restaurar o estado interno de um objeto sem violar o encapsulamento. Ele consiste em três principais participantes: o Originator (Origem), o Memento (Memorando) e o Caretaker (Cuidador). O Originator é o objeto cujo estado queremos salvar. O Memento armazena o estado do Originator, e o Caretaker é responsável por solicitar a criação e restauração de Mementos. Isso é extremamente útil para implementar mecanismos de desfazer/refazer em aplicativos ou para salvar e restaurar estados de jogo. O padrão Memento garante que o estado de um objeto possa ser restaurado sem expor sua estrutura interna.

O Memento captura e restaura o estado interno de um objeto e permite salvar e restaurar o estado anterior de um objeto, sem revelar os detalhes de sua implementação. Um jogo de aventura pode usar o padrão para permitir que os jogadores salvem o estado do jogo para que possam retornar a um momento anterior a um determinado evento.

Os padrões comportamentais dos Padrões GoF oferecem soluções elegantes para problemas de interação entre objetos, distribuição de responsabilidades e gerenciamento de estados. O Observer permite notificação eficiente de mudanças, o Command facilita a execução de ações parametrizadas, o Mediator promove a comunicação indireta e o Memento permite capturar e restaurar estados de objetos de forma segura. Ao compreender e aplicar esses padrões, os desenvolvedores podem criar sistemas mais flexíveis, extensíveis e de fácil manutenção, melhorando a qualidade e a robustez de seus aplicativos orientados a objetos.