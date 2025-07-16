import axios from "axios";

const apiUrl = import.meta.env.VITE_NEWS_API_URL;
const apiKey = import.meta.env.VITE_NEWS_API_KEY;

if (!apiKey) {
  throw new Error(
    "VITE_NEWS_API_KEY is not defined. Please check your .env file."
  );
}
if (!apiUrl) {
  throw new Error("VITE_API_URL is not defined. Please check your .env file.");
}

const BaseApi = axios.create({
  baseURL: apiUrl,
  params: {
    apiKey: apiKey,
  },
});

export default BaseApi;
