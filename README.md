# FullStack-Backend *Ypic*

Projeto Back-end Ypic baseado no google fotos, esenvolvido no curso Full Stack da Labenu. <br/>
Estrutura elaborada para receber as seguintes funcionalidades:

- Signup / Login
- Create Image
- Select all images 
- Select image by Id
- Create Album

Pode ser executado pelo terminal do VS Code ou pelo deploy feito. Sendo ele:
- https://ypic.herokuapp.com/  <br/> 
(Colocando a referencia que deseja usar após a / no final do link. Ex: https://ypic.herokuapp.com/user/signup)

### Bibliotecas utilizadas

- Ambiente de execução: Node.js
- Framework para servidor: Express
- Compartilhamento de recursos: Cors
- Token criptografado: JWT

## Comandos utilizados para executar corretamente o código no VS Code:

Após clonado este repositório em um diretório de sua escolha, execute o seguinte comando:
```
npm install
```
Instale as dependencias: node.js, express, cors:
```
npm install @types/node --save-dev
npm install @types/express --save-dev
npm install @types/cors --save-dev
```

Existe um arquivo chamado *.env.example*, que tem as variáveis para configurar o banco de dados local. <br/>

Por fim, pode ser executado com url local *localhost:3003* (contém um arquivo *.rest* que pode ser utilizado para rodar, não precisando utilizar Postman) ou pela que foi feito deploy na plataforma Heroku.