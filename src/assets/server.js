// _client = HttpClient();

export const API_KEY = "98849585d3b776ff17a6c3332a251612";
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/original";
// const popular = "popular?";
// const topRated = "top_rated?";
// const on_the_air = "on_the_air?";
const language = "en-US";

export const makeToken = async () => {
  const _url = `${BASE_URL}/authentication/token/new?api_key=${API_KEY}`;
  const response = await fetch(_url);
  const data = await response.json();
  return data.request_token;
};

export const validateUser = async () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "example",
      password: "example",
      request_token: "example",
    }),
  };
  const _url = `${BASE_URL}/authentication/token/validate_with_login?api_key=${API_KEY}`;
  const response = await fetch(_url, requestOptions);
  const data = await response.json();
  return data.token;
};

export const makeSession = async () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      request_token: "example",
    }),
  };
  const _url = `${BASE_URL}/authentication/session/new?api_key=${API_KEY}`;
  const response = await fetch(_url, requestOptions);
  const data = await response.json();
  console.log(data.session_id);
  return data.session_id;
};

export const dataFetcher = async (type) => {
  const _url = `${BASE_URL}/${type}api_key=${API_KEY}&language=${language}&page=1`;
  const response = await fetch(_url);
  const data = await response.json();
  return data;
};
