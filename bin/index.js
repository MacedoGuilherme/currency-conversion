#! /usr/bin/env node

import axios from "axios";

axios.get(`https://viacep.com.br/ws/13340200/json`)
    .then(response => {
        console.log(response.data);
    })