# Delivery online de comida

## Dependências

- Node 10+
- `npm install -g @angular/cli@8.0.0`
- `npm install -g json-server@0.15.0`

## Rodar projeto

- Instalar as dependências: `npm install`
- Iniciar o servidor: `json-server --watch src/assets/db.json`
- Para rodar o projeto: `ng serve`

## Compilar projeto

Para compilar o projeto: `ng build --prod`

## Executar testes

Para executar testes: `ng test`

Versão do angular `8.0.0`

### Plugins adicionais do editor

- Lint: [ESLint](https://marketplace.visualstudio.com/itemdetails?itemName=dbaeumer.vscode-eslint)
- Identação: [Prettier](https://marketplace.visualstudio.com/itemdetails?itemName=esbenp.prettier-vscode)
- CSS: [Stylelint](https://marketplace.visualstudio.com/itemdetails?itemName=shinnn.stylelint)

## Para colocar novas paginas

- ng g c <nome do component> isso criará um componente
- ng g m <nome do modulo> para criar o modulo
- ng g s <nome do service para criar o service
