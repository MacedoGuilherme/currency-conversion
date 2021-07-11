#! /usr/bin/env node

import api from "../service/api";

const readlineSync = require("readline-sync");

const apiKey = "ab7cd525f6439d9f2b334f65";

async function getData(currency = "USD") {
  const response = await api.get(`${apiKey}/latest/${currency}`);
  const { data } = response;
  return Object.keys(data.conversion_rates);
}

async function getTeste() {
  const data = await getData();
  console.log("Lista de moedas disponíveis para conversão: \n");
  console.log(data.join(" - ") + '\n');
};

async function validateCurrency(currency) {
  const data = await getData();
  return data.includes(currency);
}

async function getCurrency() {
  await getTeste()
  const currencies = [];
  for (let index = 0; index < 2; index++) {
    while (!(await validateCurrency(currencies[index]))) {
      const currency = readlineSync
        .question(
          `Informe a ${index + 1}ª moeda a ser convertida: `
        )
        .toUpperCase();
      if (await validateCurrency(currency)) {
        currencies.push(currency);
      } else {
        console.log("Moeda não encontrada!");
      }
    }
  }
  let amount;
  while (isNaN(amount * 1)) {
    amount = readlineSync.question("Quantidade a ser convertida: ");
  }
  getResult(currencies[0], currencies[1], amount)
}

async function getResult(currencyOne, currencyTwo , amount) {
  const result = await api.get(`${apiKey}/pair/${currencyOne}/${currencyTwo}/${amount}`);
  const { data } = result;
  console.log(data.conversion_result.toFixed(2));
}

getCurrency()
