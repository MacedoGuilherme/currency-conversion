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

async function getData(currency = 'USD') {
  const response = await api.get(`${apiKey}/latest/${currency}`);
  const { data } = response;
  return data.conversion_rates;
}

async function validateCurrency(currency) {
  const data = Object.keys(await getData());
  return data.includes(currency)

  // let currencies = [];
  // currencies.push(readlineSync.question(`Informe a 1ª moeda a ser convertida (BRL, EUR, USD): `).toUpperCase());
  // const data = await getData()
  // const allCurrencies = Object.keys(await getData(currencies[0]));
  // const amount = readlineSync.question('Informe a quantidade a ser convertida: ')
  // // for (let index = 0; index < 2; index++) {
  // //   const currency = readlineSync.question(`Informe a ${index + 1}ª moeda a ser convertida (BRL, EUR, USD): `).toUpperCase();
  // //   teste.includes(currency) ? currencies.push(currency) : index--
  // // }
  // console.log(`${amount} ${currencies[0]} equivale á XX ${currencies[1]}`)
}

async function getInformations() {
  let currency;
  const amount = readlineSync.question('Quantidade a ser convertida: ')
  while(!await validateCurrency(currency)) {
    currency = readlineSync.question(`Informe a 1ª moeda a ser convertida (BRL, EUR, USD): `).toUpperCase();
  }
  const currency2 = readlineSync.question(`Informe a 2ª moeda a ser convertida (BRL, EUR, USD): `).toUpperCase();
  const result = await api.get(`${apiKey}/pair/${currency}/${currency2}/${amount}`)
  const { data } = result
  console.log(data.conversion_result.toFixed(2))
}

getInformations()