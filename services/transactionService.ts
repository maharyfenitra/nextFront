import axios from "axios";
import { URI } from "./utils/variables";
class TransactionService {
  readonly URL = `${URI}/transactions/`;
  swaToken(toCurrency: string, fromCurrency: string, amount: number) {
    console.log("Service loading ...");
    return axios
      .post(`${this.URL}swapToken`, {
        toCurrency,
        fromCurrency,
        amount,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error.message;
      });
  }
  getTokenBalance(token: string) {
    return axios
      .post(`${this.URL}getTokenBalance`, {
        token,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
  }
}

export default TransactionService;
