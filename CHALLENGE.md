# Desafio Técnico: Desenvolvimento de Frontend em Angular 17 com Micro Frontends

## Cenário:

O backend da aplicação, que inclui uma API CRUD para Livros e Editoras, está sendo desenvolvido por outra equipe em paralelo. Sua tarefa será construir o frontend da aplicação de forma modular e independente, respeitando as boas práticas de arquitetura de micro frontends e preparando o sistema para futuras integrações.

Por favor, siga as seguintes orientações:

1. Estrutura e configuração do projeto (Desejável/Opcional):
   o Utilize Angular 17 como framework principal.
   o Se possível, organize o projeto utilizando uma abordagem de micro frontends. Isso pode ser feito através do Module Federation do Webpack, garantindo que partes da aplicação possam ser desenvolvidas e implantadas independentemente.

2. Componentes e arquitetura:
   o Implemente uma Arquitetura de Componentes bem estruturada, com uma clara separação de responsabilidades.
   o Escolha um dos módulos (Livros ou Editoras) para desenvolver o CRUD completo, enquanto o outro módulo deve tratar os dados em memória (usando LocalStorage ou um Service) para simulação.

3. Integração com a API (mock temporário):
   o Como o backend está sendo desenvolvido paralelamente, implemente a comunicação com uma API mock (pode ser local ou utilizando serviços como o JSON Server ou Mockoon) para simular as operações CRUD para o módulo escolhido.
   o O outro módulo deve utilizar LocalStorage ou um Service para simular as operações de CRUD internamente.

4. Formulários reativos:
   o Utilize Formulários Reativos para capturar e validar os dados de entrada do usuário.

5. Tratamento de erros e feedbacks:
   o Implemente o tratamento de erros apropriado e forneça feedback visual (mensagens de sucesso/erro) ao usuário para todas as interações com a API e o armazenamento em memória.

6. Design responsivo e usabilidade:
   o Aplique princípios de Design Responsivo, garantindo que a aplicação funcione bem em diferentes tamanhos de tela (desktop, tablet e mobile).
   o Implemente boas práticas de UX/UI, com um layout intuitivo e fácil de navegar.

7. Estilos e pré-processadores de CSS:
   o Utilize pré-processadores de CSS como SASS ou LESS para modularizar o estilo da aplicação, garantindo escalabilidade e manutenção.

8. Testes unitários (aplicação parcial):
   o Aplique testes unitários com Jasmine ou Karma no módulo escolhido para o CRUD completo e nos services responsáveis pela comunicação com a API mock.
   o Não é necessário cobrir todos os módulos; foque em garantir a máxima cobertura de testes apenas no módulo e services mencionados.

9. Estratégia para IDs em elementos HTML:
   o Ao definir os IDs nas tags HTML, siga uma estratégia consistente e padronizada para facilitar a automação de testes. Utilize IDs descritivos e únicos para garantir a acessibilidade de ferramentas de teste automatizado (como Selenium ou Cypress).
   o Exemplo: para o botão de salvar um livro, utilize algo como id="btn-save-book".
   <br/>
10. Documentação:
    o Inclua uma breve documentação sobre como rodar a aplicação e como conectar-se ao backend real quando disponível.
    o Explique as decisões de design e arquitetura, especialmente no que diz respeito à utilização de micro frontends.
