import getConversionRates from "./Data";

async function validateCurrency(currency) {
  const data = await getConversionRates();
  return data.includes(currency);
}

export default validateCurrency;
