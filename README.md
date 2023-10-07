<!-- ===== HEADER ===== -->
<p align="right">
  <img
    src="https://img.shields.io/badge/lang-en-gray?style=flat-square&labelColor=202024"
    alt="lang-en"
  />
  <a href="./README.pt-br.md" title="Ler o README em português brasileiro">
    <img
      src="https://img.shields.io/badge/lang-pt--br-green?style=flat-square&labelColor=202024"
      alt="lang-pt-br"
    />
  </a>
</p>

<h1 align="center">
  <a
    href="https://guipmdev-sundaes-on-demand.vercel.app/"
    title="Go to the web application"
  >
    sundaes-on-demand
  </a>
</h1>

<p align="center">
  <img
    src="https://img.shields.io/github/languages/count/guipmdev/sundaes-on-demand?color=%2304D361&labelColor=202024"
    alt="Repository language count"
  />
  <img
    src="https://img.shields.io/github/repo-size/guipmdev/sundaes-on-demand?labelColor=202024"
    alt="Repository size"
  />
  <a
    href="https://github.com/guipmdev/sundaes-on-demand/actions/workflows/node.js.yml"
    title="View GitHub workflow runs"
  >
    <img
      src="https://img.shields.io/github/actions/workflow/status/guipmdev/sundaes-on-demand/node.js.yml?labelColor=202024&label=Node.js CI"
      alt="GitHub workflow status"
    />
  </a>
  <img
    src="https://img.shields.io/endpoint?labelColor=202024&url=https://gist.githubusercontent.com/guipmdev/5fcc7b77f1bf1b99e970cc83a7b2bfa2/raw/sundaes-on-demand-junit-tests.json"
    alt="Tests report"
  />
  <img
    src="https://img.shields.io/endpoint?labelColor=202024&url=https://gist.githubusercontent.com/guipmdev/5fcc7b77f1bf1b99e970cc83a7b2bfa2/raw/sundaes-on-demand-cobertura-coverage.json"
    alt="Tests coverage"
  />
  <a href="./LICENSE" title="View project license">
    <img
      src="https://img.shields.io/badge/license-MIT-brightgreen?labelColor=202024"
      alt="Project license"
    />
  </a>
  <a href="https://bonnie.dev/" title="Go to Bonnie's website">
    <img
      src="https://img.shields.io/badge/Layout_by-Bonnie_Schulkin-182734?labelColor=202024"
      alt="Layout designer"
    />
  </a>
</p>

![Screenshot of the application initial page](./src/assets/images/cover.webp)

<p align="center">
  <a href="https://guipmdev-sundaes-on-demand.vercel.app/"
    >Go to the web application ↗</a
  >
</p>

<details>
  <summary>
    <h2>📒 Table of Contents</h2>
  </summary>

- [📍 Overview](#-overview)
- [✨ Features](#-features)
- [🤖 Demo](#-demo)
- [🛠 Technologies](#-technologies)
  - [Website](#website)
  - [Server](#server)
  - [Utils](#utils)
- [🚀 Getting Started](#-getting-started)
  - [✔️ Prerequisites](#️-prerequisites)
  - [📦 Installation](#-installation)
  - [⚙️ Usage](#️-usage)
  - [🧪 Running tests](#-running-tests)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)
</details>

<!-- ===== PROJECT INFOS ===== -->

## 📍 Overview

The **sundaes-on-demand** project is a web application developed in _React_ for ordering custom sundaes, allowing you to choose from different flavors and toppings. The application calculates the total price based on the selections and provides a user-friendly interface for sending the orders.

This project targets the dessert store segment, simplifying the online ordering process and providing an interactive and personalized experience for customers.

## ✨ Features

🍨 **Make sundaes** choosing from a variety of flavors and toppings

🛵 **Confirm your order** and wait for it to arrive _(only symbolic)_

🧪 Project **focused on** Jest and Testing Library **tests**

## 🤖 Demo

## 🛠 Technologies

The following tools were used to build the project:

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

_\* See the [<kbd>package.json</kbd>](./package.json) file_

### Server

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

### Utils

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

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following tools installed on your machine: [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/download). It's also good to have an editor to work with the code, such as [VSCode](https://code.visualstudio.com/Download).

### 📦 Installation

1. Clone the [backend repository](https://github.com/guipmdev/sundae-server/):

```sh
git clone https://github.com/guipmdev/sundae-server/
```

2. Change to the backend directory:

```sh
cd sundae-server
```

3. Install the dependencies:

```sh
npm install
```

4. Go back and clone the project repository:

```sh
cd ..

git clone https://github.com/guipmdev/sundaes-on-demand/
```

5. Change to the project directory:

```sh
cd sundaes-on-demand
```

6. Install the dependencies:

```sh
npm install
```

### ⚙️ Usage

1. Enter the backend directory:

```sh
cd sundae-server
```

2. Start the server:

```sh
npm run start
```

3. Change to the project directory:

```sh
cd ../sundaes-on-demand
```

4. Start the web application:

```sh
npm run dev
```

5. Access https://localhost:3000/ (or https://guipmdev-sundaes-on-demand.vercel.app/) to view the application

### 🧪 Running tests

```sh
npm run test
```

## 📄 License

This project is licensed under the terms of the `MIT` license. See the
[LICENSE](./LICENSE) file for additional info.

## 👏 Acknowledgments

> - Many thanks to [Bonnie Schulkin](https://bonnie.dev/) for the layout and tips when putting this project together

<!-- ===== FOOTER ===== -->

---

<p align="center">
  Made with 💙 by
  <a href="https://www.guipm.dev/"> @guipm.dev </a>
  - Feel free to
  <a href="mailto:guipm.dev@gmail.com">contact me</a>!
</p>

<br />

<p align="center">
  <a href="#top">
    <b>↑&nbsp;&nbsp; Return to the top &nbsp;&nbsp;↑</b>
  </a>
</p>
