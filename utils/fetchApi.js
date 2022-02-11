import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "225c37c88dmshb6704b3b4609277p1c41d2jsn3cf19ced2bbb",
    },
  });

  return data;
};
