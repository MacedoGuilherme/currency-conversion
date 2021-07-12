import { api, token } from "../services/api";

async function getResult(firstCurrency, secondCurrency, amount) {
  const result = await api.get(
    `${token}/pair/${firstCurrency}/${secondCurrency}/${amount}`
  );
  const { data } = result;
  console.log(
    `${amount} ${firstCurrency} é equivalente a ${data.conversion_result.toFixed(
      2
    )} ${secondCurrency}`
  );
}

export default getResult;
