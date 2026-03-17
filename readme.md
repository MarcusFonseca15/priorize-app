# Priorize

O Priorize é uma plataforma única para organização pessoal, integrando calendário, lista de tarefas inteligente com subtarefas e progresso, e um sistema de rotinas para automação de hábitos. O sistema funciona via navegador e conta com suporte para dispositivos móveis.

---

## Requisitos Funcionais (RF)

### RF001 - Gerenciar Tarefas
O sistema permite criar, alterar e deletar tarefas que representam atividades com prazos ou horários flexíveis.
* **RF001.01 - Ajuste automático:** Reorganiza horários e datas. Tarefas não finalizadas movem-se para o dia seguinte; novas inserções ajustam os horários das subsequentes.
* **RF001.02 - Modo rotina:** Repetição automática (diária, semanal, mensal, anual).
* **RF001.03 - Notificações:** Configuração de alertas internos ou via sistemas externos (Ex.: Telegram).

### RF002 - Gerenciar Eventos
Gestão de compromissos específicos (reuniões, aulas, feriados) com intervalos de tempo fixos. Diferente das tarefas, eventos não possuem ajuste automático.
* **RF002.01 - Notificações:** Alertas configuráveis no sistema ou via Telegram.

### RF003 - Visualizar itens
O sistema oferece três modos de visualização:
1.  **Modo calendário:** Escalas de calendário para tarefas e eventos.
2.  **Modo agenda:** Exibição cronológica do dia com barra de progresso para tarefas.
3.  **Modo rotina:** Foco em tarefas que se repetem.

### RF004 - Pesquisar itens
Busca de itens por nome, descrição, tags ou combinações de tags.

### RF005 - Comandos de voz
Permite a criação de tarefas e eventos por meio de comandos de voz.

### RF006 - Acesso ao sistema
Acesso restrito via login e senha.

### RF007 - Observação de rendimento
Cálculo de produtividade baseado no cumprimento de tarefas em intervalos mensais, semestrais ou anuais.

---

## Requisitos Não Funcionais (RNF)

### RNF001 - Arquitetura e Interface
* **Web-based:** Disponibilizado como aplicação web.
* **Responsividade:** Interface adaptável para desktop, notebook, tablet e smartphone.

### RNF002 - Público-Alvo
* Usuários individuais (estudantes, profissionais, empreendedores) que buscam otimizar o gerenciamento de tempo de forma centralizada.