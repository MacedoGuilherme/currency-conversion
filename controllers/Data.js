import { api, token } from "../services/api";

async function getConversionRates(currency = "USD") {
  const response = await api.get(`${token}/latest/${currency}`);
  const { data } = response;
  return Object.keys(data.conversion_rates);
  console.log("getConversionRates OK");
}

export default getConversionRates;
