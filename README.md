## APP LEAFLET APP

Esse app exibe um mapa onde ficam marcadas as viagens cadastradas dentro de um cms. No mapa as viagens ficam com uma marcação onde o usuário pode clicar nessa marcação e ir para outra página para ver mais informações sobre a viagem.

### 📋 Pré-requisitos

```
Nodejs 14.0.0
yarn 1.22.10
```
### GraphCMS

Esse projeto utiliza [GraphCMS](https://graphcms.com/), então é necessário que você crie uma conta.

Após criar a conta você deve criar um schema, siga os passos:

- Schema > Adicione novo model com nome `Place`
- Adicione os seguintes campos:
  - `Single Line Text` como `name`
  - `Slug` como `slug`
  - `Map` como `location`
  - `Rich Text` como `description`
  - `Asset Picker` como `gallery`

- Schema > Adicione novo model com nome `Page`
- Adicione os seguinter campos:
  - `Single Line Text` como `heading`
  - `Slug` como `slug`
  - `Rich Text` como `body`

Após isso, preencha os models com alguns valores e não esqueça de publicar utilizando o `publish`!

#### Autenticação

Para criar um access token, vá à opção `Settings > API Access`, dentro dessa página, encontre `Permanent Auth Tokens`,
crie um Token Name e mark todas as opções de queries. Após salvar, seu toke estará disponível.

## 🚀 Começando

### Iniciando o projeto

Execute os seguintes comandos para executar o app em sua máquina:
```bash
#Clonar repositório
$git clone https://github.com/douglashbr/leaflet-app
#Acessar diretório do repositório clonado
$cd leaftlet-app
#Instalar as dependências do projeto
$yarn
#Iniciar a aplicação
$yarn dev
```

## 🛠️ Construído com

Ferramentas que utilizei para criar esse projeto:

* [yarn](https://yarnpkg.com/)
* [Typescript](https://www.typescriptlang.org/)
* [ReactJs](https://pt-br.reactjs.org/)
* [Nextjs](https://nextjs.org/)
* [Graphql](https://graphql.org/)
* [graphql-request](https://github.com/prisma-labs/graphql-request)
* [styled-components](https://styled-components.com/)
* [Leaflet](https://leafletjs.com/)
* [MapBox](https://www.mapbox.com/)

Demo disponível no link: [Demo](https://leaflet-app-nine.vercel.app/)

---
⌨️ com ❤️ por [Douglas Dantas](https://github.com/douglashbr) 😊
