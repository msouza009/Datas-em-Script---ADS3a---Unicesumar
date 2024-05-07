### README
Atividade: 06/05/2024
Regex - Unicesumar Turma: ADS-3a 
Email Unicesumar: ra-23371012-2@alunos.unicesumar.edu.br

#### Descrição
Esta função JavaScript `validarFormulario()` foi criada para validar os campos de entrada de um formulário para nome, email e número de telefone. Ela garante que os dados fornecidos atendam a certos critérios antes da submissão.

#### Uso
1. Inclua este código JavaScript em seu arquivo HTML ou vincule-o externamente.
2. Certifique-se de que seu formulário HTML contenha campos de entrada com os seguintes IDs: `nome` para nome, `email` para email e `telefone` para número de telefone.
3. Quando o usuário clicar no botão de envio dentro do formulário, a função `validarFormulario()` será acionada para validar os campos de entrada.
4. Se algum dos campos de entrada não atender aos critérios de validação, uma mensagem de alerta será exibida para notificar o usuário do erro.
5. Os critérios de validação para cada campo de entrada são os seguintes:
    - **Nome (`nome`):** Deve conter apenas letras e espaços, e não deve exceder 100 caracteres.
    - **Email (`email`):** Deve seguir o formato padrão de email.
    - **Telefone (`telefone`):** Deve seguir o formato `(XX) XXXX-XXXX` ou `(XX) 9XXXX-XXXX`, incluindo o código de área (DDD).
6. Se todos os campos de entrada passarem na validação, uma mensagem de alerta será exibida confirmando que todos os dados estão válidos.
