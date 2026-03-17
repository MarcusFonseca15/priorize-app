O aplicativo visa ser uma plataforma única para organização pessoal, integrando calendário, lista de tarefas inteligente com subtarefas e progresso, e um sistema de rotinas para automação de hábitos.

RF001 - Gerenciar Tarefas
O sistema deve permitir criar, alterar e deletar tarefas.
Tarefas podem conter subtarefas, ajuste automático e modo rotina.
As tarefas representam atividades que o usuário deve realizar em determinado momento ou no seu dia a dia, até um determinado prazo e com possibilidade de horário flexível durante o dia.
RF001.01 - Ajuste automático de tarefas
O ajuste automático de tarefas permite que o sistema reorganize o horário e data das tarefas caso as seguintes condições sejam verdadeiras:
Se uma tarefa não for finalizada no prazo especificado, deve ser movida automaticamente para o dia seguinte.
Se uma tarefa for incluída entre outras já existentes, os horários das subsequentes a ela devem ser ajustados automaticamente.
RF001.02 - Modo rotina para tarefas
Permite que a tarefa seja repetida automaticamente (diariamente, semanalmente, mensalmente, anualmente).
RF001.03 - Gerenciar notificações de tarefas
O sistema deve permitir configurar notificações referentes a tarefas.
O usuário pode optar por receber notificações no próprio sistema ou por sistemas externos (Ex.: via Telegram).
RF002 - Gerenciar Eventos
O sistema deve permitir criar, alterar e deletar eventos.
Eventos podem conter modo rotina.
Os eventos correspondem a compromissos específicos que podem ocorrer em determinado intervalo de tempo, fixo (como reuniões, aulas e palestras) ou não (como aniversários e feriados).
Diferentemente das tarefas, os eventos não podem ser ajustados/adiados automaticamente pelo sistema.
RF002.01 - Gerenciar notificações de eventos
O sistema deve permitir configurar notificações referentes a eventos.
O usuário pode optar por receber notificações no próprio sistema ou por sistemas externos (Ex.: via Telegram).
RF003 - Visualizar itens
O sistema deve permitir a visualização em três modos:
Modo calendário: exibir tarefas e eventos em diferentes escalas de calendário.
Modo agenda: exibir tarefas e eventos do dia em ordem cronológica de horário. Neste modo, tarefas devem apresentar uma barra de progresso.
Modo rotina: exibir tarefas que se repetem.
RF004 - Pesquisar itens
O sistema deve permitir pesquisar tarefas e eventos por nome, descrição, tags ou combinação de tags.
RF005 - Adicionar itens por comando de voz
O sistema deve permitir a criação de tarefas e eventos por meio de comandos de voz.
RF006 - Acesso ao sistema
O sistema deve ser acessado por meio de login e senha previamente criados pelo próprio usuário.
RF007 - Observação de rendimento
O sistema deve poder entregar ao usuário um cálculo do seu rendimento, baseado na quantidade de tarefas cumpridas e não cumpridas em um intervalo de tempo selecionado pelo usuário: mensal, semestral e anual.

Requisitos Não Funcionais (RNF)
RNF001 - Arquitetura baseada em web:
O sistema deve ser disponibilizado como uma aplicação web.
A interface deve ser responsiva, permitindo o acesso em diferentes resoluções de tela (desktop, notebook, tablet e smartphone).

RNF002 - Usuários do sistema:
O sistema é destinado a usuários individuais que desejam melhorar sua produtividade pessoal, organizar tarefas, gerenciar eventos e acompanhar compromissos diários de forma prática e centralizada.
Esses usuários podem ser estudantes, profissionais, empreendedores ou qualquer pessoa que busque otimizar o gerenciamento de suas atividades e tempo.
