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

Função responsável por validar os campos de um formulário antes de permitir que os dados sejam enviados. Aqui está uma explicação detalhada de como ela funciona:

**1. Obtenção dos Valores dos Campos:** A função utiliza os métodos `getElementById()` para obter os valores inseridos nos campos de entrada do formulário, como o `nome`, `e-mail` e `telefone`. Esses valores são armazenados nas variáveis `nome`, `email` e `telefone`.

**2. Expressões Regulares:** Em seguida, a função define três expressões regulares para validar os dados inseridos nos campos:
`regexNome`: Esta expressão regular garante que o nome contenha apenas letras, espaços e caracteres acentuados, com um limite máximo de 100 caracteres.
`regexEmail`: Esta expressão regular verifica se o e-mail está em um formato válido, contendo um único "@" e um domínio válido após o último ".".
`regexTelefone`: Esta expressão regular valida o formato do número de telefone, aceitando formatos padrão brasileiro, como "(XX) XXXX-XXXX" ou "(XX) 9XXXX-XXXX", onde "X" representa dígitos numéricos.

**3. Validação dos Dados:** A função então usa o método `test()` das expressões regulares para verificar se os valores dos campos (`nome`, `email` e `telefone`) correspondem aos padrões definidos pelas expressões regulares.

**4. Exibição de Mensagens de Alerta:** Se algum dos valores inseridos não atender aos critérios de validação, a função exibe uma mensagem de alerta específica informando o usuário sobre o problema encontrado. Por exemplo, se o nome inserido contiver caracteres inválidos, será exibida uma mensagem alertando sobre isso.

**5. Retorno de Valor:** A função retorna `false` se houver algum erro de validação, impedindo assim o envio dos dados do formulário. Caso contrário, se todos os campos passarem na validação, a função retorna true, permitindo que os dados sejam enviados.

### Evento DOMContentLoaded

Este evento é acionado quando o HTML da página foi completamente carregado e analisado, sem esperar por imagens e estilos adicionais. Ele é útil para garantir que o script JavaScript seja executado somente após todo o conteúdo da página estar disponível. Aqui está uma explicação mais detalhada do funcionamento deste evento:

**1. Aguardando o Carregamento Completo do DOM:** O evento `DOMContentLoaded` é adicionado como um ouvinte de evento ao documento. Ele espera até que todo o DOM (Document Object Model) da página esteja completamente carregado antes de continuar a execução do script.

**2. Associação da Função `validarFormulario()`** ao Evento de **Clique do Botão**: Dentro do evento `DOMContentLoaded`, é adicionado um ouvinte de evento ao botão do formulário. Este ouvinte espera pelo evento de clique no botão e, quando acionado, chama a função `validarFormulario()` para validar os dados do formulário antes do envio.
