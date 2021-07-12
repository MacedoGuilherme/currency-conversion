#! /usr/bin/env node

import getResult from "../controllers/Result";
import showCurrencies from "../controllers/ShowCurrencies";
import validateCurrency from "../controllers/Validate";

const readlineSync = require("readline-sync");

async function getCurrency() {
  await showCurrencies();
  const currencies = [];
  for (let index = 0; index < 2; index++) {
    while (!(await validateCurrency(currencies[index]))) {
      const question = index === 0 ? 'Converter: ' : 'Para: '
      const currency = readlineSync
        .question(question)
        .toUpperCase();
      if (await validateCurrency(currency)) {
        currencies.push(currency);
      } else {
        console.log("Moeda não encontrada!\n");
      }
    }
  }
  let amount;
  while (isNaN(amount)) {
    amount = readlineSync.question("Quantidade a ser convertida: ");
    amount = amount.replace(",", ".");
    console.log(isNaN(amount) ? "Informe um valor válido\n" : "");
  }
  getResult(currencies[0], currencies[1], amount);
}

getCurrency();
