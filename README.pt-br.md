<!-- ===== HEADER ===== -->
<p align="right">
  <a href="./README.md" title="Read the README in english">
    <img
      src="https://img.shields.io/badge/lang-en-red?style=flat-square&labelColor=202024"
      alt="lang-en"
    />
  </a>
  <img
    src="https://img.shields.io/badge/lang-pt--br-gray?style=flat-square&labelColor=202024"
    alt="lang-pt-br"
  />
</p>

<h1 align="center">
  <a
    href="https://guipmdev-sundaes-on-demand.vercel.app/"
    title="Acessar a aplicação web"
  >
    sundaes-on-demand
  </a>
</h1>

<p align="center">
  <img
    src="https://img.shields.io/github/languages/count/guipmdev/sundaes-on-demand?color=%2304D361&labelColor=202024&label=linguagens"
    alt="Contagem de linguagens do repositório"
  />
  <img
    src="https://img.shields.io/github/repo-size/guipmdev/sundaes-on-demand?labelColor=202024&label=tamanho do repo"
    alt="Tamanho do repositório"
  />
  <a
    href="https://github.com/guipmdev/sundaes-on-demand/actions/workflows/node.js.yml"
    title="Visualizar execuções do workflow do GitHub"
  >
    <img
      src="https://img.shields.io/github/actions/workflow/status/guipmdev/sundaes-on-demand/node.js.yml?labelColor=202024&label=Node.js CI"
      alt="Status do workflow do GitHub"
    />
  </a>
  <img
    src="https://img.shields.io/endpoint?labelColor=202024&label=testes&url=https://gist.githubusercontent.com/guipmdev/5fcc7b77f1bf1b99e970cc83a7b2bfa2/raw/sundaes-on-demand-junit-tests.json"
    alt="Relatório de testes"
  />
  <img
    src="https://img.shields.io/endpoint?labelColor=202024&label=cobertura&url=https://gist.githubusercontent.com/guipmdev/5fcc7b77f1bf1b99e970cc83a7b2bfa2/raw/sundaes-on-demand-cobertura-coverage.json"
    alt="Cobertura dos testes"
  />
  <a href="./LICENSE" title="Visualizar licença do projeto">
    <img
      src="https://img.shields.io/badge/license-MIT-brightgreen?labelColor=202024&label=licen%C3%A7a"
      alt="Licença do projeto"
    />
  </a>
  <a href="https://bonnie.dev/" title="Acessar o site da Bonnie">
    <img
      src="https://img.shields.io/badge/Layout_por-Bonnie_Schulkin-182734?labelColor=202024"
      alt="Designer do layout"
    />
  </a>
</p>

![Captura de tela da página inicial da aplicação](./src/assets/images/cover.webp)

<p align="center">
  <a href="https://guipmdev-sundaes-on-demand.vercel.app/"
    >Acessar a aplicação web ↗</a
  >
</p>

<details>
  <summary>
    <h2>📒 Índice</h2>
  </summary>

- [📍 Visão geral](#-visão-geral)
  - [⚠️ Aviso](#️-aviso)
- [✨ Funcionalidades](#-funcionalidades)
- [🤖 Demo](#-demo)
- [🛠 Tecnologias](#-tecnologias)
  - [Website](#website)
  - [Servidor](#servidor)
  - [Úteis](#úteis)
- [🚀 Primeiros passos](#-primeiros-passos)
  - [✔️ Pré-requisitos](#️-pré-requisitos)
  - [📦 Instalação](#-instalação)
  - [⚙️ Utilização](#️-utilização)
  - [🧪 Executando testes](#-executando-testes)
- [📄 Licença](#-licença)
- [👏 Reconhecimentos](#-reconhecimentos)
</details>

<!-- ===== PROJECT INFOS ===== -->

## 📍 Visão geral

O projeto **sundaes-on-demand** é uma aplicação web desenvolvida em _React_ para pedir sundaes personalizados, permitindo escolher dentre diferentes sabores e coberturas. O aplicativo calcula o preço total com base nas seleções e fornece uma interface amigável para o envio dos pedidos.

Esse projeto atende ao setor de lojas de sobremesas, simplificando o processo de pedidos on-line e proporcionando uma experiência interativa e personalizável para os clientes.

### ⚠️ Aviso

O back-end dessa aplicação foi desenvolvido com _Node.js_ e não tem um deploy, pois o foco principal é os testes. **Para testar essa aplicação completamente, você precisará clonar o repositório**, executar o script `start` e, em seguida, abrir o site.

## ✨ Funcionalidades

🍨 **Monte sundaes** escolhendo dentre os diversos sabores e coberturas

🛵 **Confirme o seu pedido** e aguarde ele chegar _(apenas simbólico)_

🧪 Projeto **focado em testes** Jest e Testing Library

## 🤖 Demo

https://github.com/guipmdev/sundaes-on-demand/assets/136738335/c3f663ac-a3e4-4a12-8cd1-b8915e12e165

## 🛠 Tecnologias

As seguintes ferramentas foram usadas para desenvolver esse projeto:

### Website

<p>
  <a href="https://react.dev/">
    <img
      src="https://img.shields.io/badge/React-23272f?style=for-the-badge&logo=React"
      alt="React"
    />
  </a>
  <a href="https://eslint.org/">
    <img
      src="https://img.shields.io/badge/ESLint-101828?style=for-the-badge&logo=ESLint"
      alt="ESLint"
    />
  </a>
</p>

<p>
  <a href="https://jestjs.io/">
    <img
      src="https://img.shields.io/badge/Jest-242526?style=for-the-badge&logo=jest"
      alt="Jest"
    />
  </a>
  <a href="https://www.npmjs.com/package/jest-junit">
    <img
      src="https://img.shields.io/badge/jest--junit-gray?style=for-the-badge"
      alt="jest-junit"
    />
  </a>
  <a href="https://testing-library.com/">
    <img
      src="https://img.shields.io/badge/Testing_Library-242526?style=for-the-badge&logo=testing-library"
      alt="Testing Library"
    />
  </a>
  <a href="https://mswjs.io/">
    <img
      src="https://img.shields.io/badge/MSW-black?style=for-the-badge&logo=mock-service-worker"
      alt="MSW"
    />
  </a>
</p>

<p>
  <a href="https://axios-http.com/">
    <img
      src="https://img.shields.io/badge/Axios-373747?style=for-the-badge&logo=Axios"
      alt="Axios"
    />
  </a>
</p>

<p>
  <a href="https://getbootstrap.com/">
    <img
      src="https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap"
      alt="Bootstrap"
    />
  </a>
  <a href="https://react-bootstrap.netlify.app/">
    <img
      src="https://img.shields.io/badge/React_Bootstrap-gray?style=for-the-badge"
      alt="React Bootstrap"
    />
  </a>
</p>

_\* Confira o arquivo [<kbd>package.json</kbd>](./package.json)_

### Servidor

<p>
  <a href="https://nodejs.org/">
    <img
      src="https://img.shields.io/badge/Node.js-233056?style=for-the-badge&logo=node.js"
      alt="Node.js"
    />
  </a>
  <a href="https://nodejs.org/">
    <img
      src="https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express"
      alt="Express"
    />
  </a>
  <a href="https://github.com/expressjs/cors">
    <img
      src="https://img.shields.io/badge/cors-gray?style=for-the-badge"
      alt="cors"
    />
  </a>
</p>

<p>
  <a href="https://jestjs.io/">
    <img
      src="https://img.shields.io/badge/Jest-242526?style=for-the-badge&logo=jest"
      alt="Jest"
    />
  </a>
  <a href="https://github.com/ladjs/supertest">
    <img
      src="https://img.shields.io/badge/SuperTest-gray?style=for-the-badge"
      alt="SuperTest"
    />
  </a>
</p>

<p>
  <a href="https://github.com/zloirock/core-js">
    <img
      src="https://img.shields.io/badge/core--js-gray?style=for-the-badge"
      alt="core-js"
    />
  </a>
</p>

### Úteis

<p>
  <a href="https://git-scm.com/">
    <img
      src="https://img.shields.io/badge/Git-f1f1e9?style=for-the-badge&logo=git"
      alt="Git"
    />
  </a>
  <a href="https://nodejs.org/">
    <img
      src="https://img.shields.io/badge/Node.js-233056?style=for-the-badge&logo=node.js"
      alt="Node.js"
    />
  </a>
  <a href="https://code.visualstudio.com/">
    <img
      src="https://img.shields.io/badge/VSCode-005293?style=for-the-badge&logo=visual-studio-code"
      alt="VSCode"
    />
  </a>
</p>

## 🚀 Primeiros passos

### ✔️ Pré-requisitos

Antes de você começar, certifique-se que você tem as seguintes ferramentas instaladas na sua máquina: [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/download). Também é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/Download).

### 📦 Instalação

1. Clone o [repositório do backend](https://github.com/guipmdev/sundae-server/):

```sh
git clone https://github.com/guipmdev/sundae-server/
```

2. Mude para o diretório do backend:

```sh
cd sundae-server
```

3. Instale as dependências:

```sh
npm install
```

4. Volte e clone o repositório do projeto:

```sh
cd ..

git clone https://github.com/guipmdev/sundaes-on-demand/
```

5. Mude para o diretório do projeto:

```sh
cd sundaes-on-demand
```

6. Instale as dependências:

```sh
npm install
```

### ⚙️ Utilização

1. Entre no diretório do backend:

```sh
cd sundae-server
```

2. Inicie o servidor:

```sh
npm run start
```

3. Mude para o diretório do projeto:

```sh
cd ../sundaes-on-demand
```

4. Inicie a aplicação web:

```sh
npm run start
```

5. Acesse https://localhost:3000/ (ou https://guipmdev-sundaes-on-demand.vercel.app/) para visualizar a aplicação

### 🧪 Executando testes

```sh
npm run test
```

## 📄 Licença

Este projeto está licenciado de acordo com os termos da licença `MIT`. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

## 👏 Reconhecimentos

> - Muito obrigado à [Bonnie Schulkin](https://bonnie.dev/) pelo layout e pelas dicas de como montar este projeto

<!-- ===== FOOTER ===== -->

---

<p align="center">
  Feito com 💙 por
  <a href="https://www.guipm.dev/"> @guipm.dev </a>
  - Fique à vontade para
  <a href="mailto:guipm.dev@gmail.com">entrar em contato comigo</a>!
</p>

<br />

<p align="center">
  <a href="#top">
    <b>↑&nbsp;&nbsp; Voltar ao topo &nbsp;&nbsp;↑</b>
  </a>
</p>
