# Vaguinha

Projeto desenvolvido para praticar Angular nas aulas de Desenvolvimento Web. Simula um portal de vagas de tecnologia com dados fictícios.

## Tecnologias

- Angular 22 e TypeScript.
- HTML e CSS responsivo.

## Como executar

Utilize Node.js 24.15 ou superior da versão 24 LTS e npm.

```bash
npm install
npm start
```

Acesse http://localhost:4200 no navegador.

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos gerados ficam em `dist/vaguinha`.

## Funcionalidades

- Navegação por IDs entre Início, Vagas e Sobre.
- Listagem de vagas com salário, modalidade e requisitos.
- Login demonstrativo para liberar favoritos e o botão Candidatar.
- Exibição e ocultação dos requisitos de cada vaga.
- Layout adaptado para telas menores.

Não há backend, autenticação real ou envio de candidaturas. Os dados ficam em memória e as interações são reiniciadas ao recarregar a página. As imagens são carregadas do Unsplash e precisam de acesso à internet.

## Organização e aprendizado

- `src/app/app.ts`: dados fictícios e estado do login.
- `src/app/app.html`: apresentação, lista de vagas e composição dos componentes da página.
- `src/app/app.css`: estilos da apresentação e da seção de vagas.
- `src/app/components/`: componentes standalone de cabeçalho, card de vaga, sobre e rodapé.
- `src/app/models/vaga.ts`: interface com a estrutura de uma vaga.
- `src/styles.css`: estilos globais.

O projeto exercita componentes, inputs, interpolação, eventos, interfaces, `@if` e `@for`. Cada vaga tem um ID único, usado pelo `track` da lista e pelos IDs dos cards e painéis de requisitos.

## Conferência manual

1. Clique em Início, Vagas e Sobre e confira as seções de destino.
2. Abra e feche os requisitos de diferentes vagas.
3. Clique em Entrar, favorite uma vaga e clique em Candidatar.
4. Confira que a mesma candidatura não pode ser repetida e que Sair bloqueia novas ações.
5. Recarregue a página para reiniciar a demonstração e confira o layout em uma tela estreita.

