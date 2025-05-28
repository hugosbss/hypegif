# HypeGIF

Aplicação web que consome a API do GIPHY para exibir GIFs populares, organizados por categorias e com a funcionalidade de favoritar. Projeto desenvolvido com **Vue.js** e **Quasar Framework**.

## 🚀 Tecnologias Utilizadas

- [Vue.js 3](https://vuejs.org/)
- [Quasar Framework](https://quasar.dev/)
- [GIPHY API](https://developers.giphy.com/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## 📦 Pré-requisitos

npm install -g @quasar/cli

```bash
node -v
npm -v

🔧 Como rodar o projeto

Clone o repositório:

git clone https://github.com/hugosbss/hypegif.git
cd hypegif

Instale as dependências:

npm install
Rode o servidor de desenvolvimento:

quasar dev
Acesse o projeto no navegador: http://localhost:9000


🧠 Funcionalidades:

- 🔍 Buscar GIFs em alta

- 💖 Favoritar GIFs

- 🗂️ Filtrar por categorias

src/
├── components/       # Componentes reutilizáveis
├── pages/            # Páginas principais (Home, Favoritos, etc.)
├── router/           # Rotas definidas do app
└── App.vue           # Componente raiz