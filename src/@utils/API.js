import axios from "axios";

export default axios.create({
  baseURL: "https://my-json-server.typicode.com/leonardtng/data-fetch-test/results",
  responseType: "json"
});
