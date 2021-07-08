#! /usr/bin/env node

import axios from "axios";

const readlineSync = require('readline-sync'); //importa readline-sync

const cep = readlineSync.question('Informe seu CEP: ');

axios.get(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => {
        console.log(response.data);
    })

