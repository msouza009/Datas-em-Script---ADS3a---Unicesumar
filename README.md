### README

### Autor
Atividade: 06/05/2024
Regex - Unicesumar Turma: ADS-3a 
Nome Completo: Matheus Henrique Lima Souza
R.A: 23371012-2
Email Unicesumar: ra-23371012-2@alunos.unicesumar.edu.br

#### Validador de Formulário
Este é um script JavaScript que valida os campos de um formulário HTML antes de enviar os dados. Ele verifica se o nome, o e-mail e o telefone fornecidos pelo usuário seguem os padrões esperados.

### Funcionamento do Código
## Função `validarFormulario()`

A função `validarFormulario()` é chamada quando o botão do formulário é clicado. Ela obtém os valores dos campos de entrada (`nome`, `email` e `telefone`), aplica expressões regulares para validar esses valores e exibe mensagens de alerta caso os valores não estejam de acordo com o esperado. Se todas as validações passarem, uma mensagem indicando que todos os dados são válidos é exibida.

### Evento `DOMContentLoaded`
Este trecho de código adiciona um ouvinte de evento que aguarda o evento DOMContentLoaded para garantir que o DOM (Document Object Model) esteja completamente carregado antes de associar a função validarFormulario() ao evento de clique do botão do formulário. Quando o botão é clicado, a função `validarFormulario()` é chamada para validar os dados do formulário.
