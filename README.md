📝 Lista de Tarefas - Projeto Final JavaScript DNC

📌 Descrição

Este é um projeto de Lista de Tarefas desenvolvido como parte do Projeto Final de JavaScript da DNC. O objetivo é criar uma aplicação simples que permita ao usuário adicionar, marcar como concluída e remover tarefas, utilizando JavaScript puro, HTML e CSS.

🚀 Funcionalidades

✅ Adicionar novas tarefas.

📌 Salvar tarefas no LocalStorage para manter os dados ao recarregar a página.

🔄 Marcar tarefas como concluídas.

❌ Remover tarefas individuais.

🗑️ Remover todas as tarefas concluídas.

📊 Exibir progresso das tarefas concluídas.

🎯 Tecnologias Utilizadas

HTML5

CSS3

JavaScript (ES6+)

LocalStorage (para armazenamento persistente)

📂 Estrutura do Projeto

📦 projeto-todo-list
├── 📄 index.html       # Estrutura principal da aplicação
├── 📄 styles.css       # Estilos visuais
├── 📄 index.js         # Lógica de funcionamento

📦 Instalação e Uso

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Abra o arquivo index.html no navegador.

🛠 Como Funciona o Código?

📜 index.html

Estrutura principal da interface.

Possui um formulário para adicionar novas tarefas.

Exibe a lista de tarefas dinâmica.

Possui um botão para remover todas as tarefas concluídas.

🎯 index.js

createTask(event) → Cria uma nova tarefa.

removeTask(taskId) → Remove uma tarefa individual.

removeDoneTasks() → Remove todas as tarefas concluídas.

renderTasksProgressData(tasks) → Atualiza o progresso das tarefas.

getTasksFromLocalStorage() → Recupera as tarefas salvas no LocalStorage.

setTasksInLocalStorage(tasks) → Salva as tarefas no LocalStorage.

getCheckBoxInput(task) → Cria um checkbox para cada tarefa.

onCheckboxClick(event) → Marca a tarefa como concluída ou não.

📌 Exemplo de Uso

Digite a descrição da tarefa no campo de entrada.

Clique no botão + para adicionar a tarefa.

Marque a caixa de seleção para concluir a tarefa.

Clique no botão x para remover uma tarefa individual.

Clique no botão "Remover tarefas concluídas" para excluir todas as tarefas concluídas.

📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo! 😊
