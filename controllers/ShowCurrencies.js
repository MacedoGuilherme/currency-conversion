import getConversionRates from "./Data";

async function showCurrencies() {
  const data = await getConversionRates();
  console.log("Lista de moedas disponíveis para conversão: \n");
  console.log(data.join(" - ") + "\n");
}

export default showCurrencies;
