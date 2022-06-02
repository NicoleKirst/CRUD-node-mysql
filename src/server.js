require('dotenv').config({path: 'variaveis.env'}); //serve para ler o arquivo variaveis.env

const express = require('express');
const cors = require('cors'); //permite acesso a recurso de outro site em dominios diferentes para trabalhar com api
const bodyParser = require('body-parser'); //modulo capas de converter o body de uma requisição para varios outros formatos

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded ({extended: false}));

server.use('./api', routes); //faz com que todos os endereços tenham esse prefixo '/api' 

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
}) 