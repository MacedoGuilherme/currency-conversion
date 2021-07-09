#! /usr/bin/env node

import api from "../service/api";

const readlineSync = require("readline-sync");

const apiKey = "ab7cd525f6439d9f2b334f65";

// const animals = ['USD', 'AUD', 'BGN', 'CAD', 'CHF', 'CNY', 'EGP', 'EUR', 'GBP'],
// index = readlineSync.keyInSelect(animals, 'Which animal?');
// const country = animals[index]

// const amount = readlineSync.question('Informe a quantidade a ser convertida: ');

// api.get(`${apiKey}/pair/${country}/GBP/${amount}`)
//     .then(response => {
//         const { data } = response
//         console.log(data.conversion_result);
//     })

// const getCurrent = async () => {
//   api.get(`${apiKey}/latest/USD`).then((response) => {
//     const { data } = response;
//     return Object.keys(data.conversion_rates)
//   });
// };

// getCurrent();

async function getData() {
  const response = await api.get(`${apiKey}/latest/USD`);
  const { data } = response;
  return Object.keys(data.conversion_rates);
}

async function showDate() {
  const amount = readlineSync.question("Informe a moeda a ser convertida: ").toUpperCase();
  const teste = await getData();
  console.log(teste.includes(amount));
}

showDate();
