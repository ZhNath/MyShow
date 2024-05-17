export const API_KEY = "98849585d3b776ff17a6c3332a251612";
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/original";
const language = "en-US";

export const makeToken = async () => {
  const _url = `${BASE_URL}/authentication/token/new?api_key=${API_KEY}`;
  const response = await fetch(_url);
  const data = await response.json();
  return data.request_token;
};

export const validateUser = async (username, password, request_token) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      request_token: request_token,
    }),
  };
  const _url = `${BASE_URL}/authentication/token/validate_with_login?api_key=${API_KEY}`;
  const response = await fetch(_url, requestOptions);
  const data = await response.json();
  console.log("success:", data.success);
  return data.request_token;
};

export const makeSession = async (request_token) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      request_token: request_token,
    }),
  };
  const _url = `${BASE_URL}/authentication/session/new?api_key=${API_KEY}`;
  const response = await fetch(_url, requestOptions);
  const data = await response.json();
  return data.session_id;
};

export const makeAccount = async (session_id) => {
  const _url = `${BASE_URL}/account?api_key=${API_KEY}&session_id=${session_id}`;
  const response = await fetch(_url);
  const data = await response.json();
  return data;
};

export const dataFetcher = async (type) => {
  const _url = `${BASE_URL}/${type}api_key=${API_KEY}&language=${language}&page=1`;
  const response = await fetch(_url);
  const data = await response.json();
  return data;
};

export const addToWatchList = async (account_id, media_id) => {
  const requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      media_type: "tv",
      media_id: media_id,
      watchlist: true,
    }),
  };
  const session_id = localStorage.getItem(`session_id`);
  const _url = `${BASE_URL}/account/${account_id}/watchlist?api_key=${API_KEY}&session_id=${session_id}`;
  const response = await fetch(_url, requestOptions);
  const data = await response.json();
  return data;
};

export const getWatchList = async (account_id) => {
  const _url = `${BASE_URL}/account/${account_id}/watchlist/tv?api_key=${API_KEY}`;
  const response = await fetch(_url);
  const data = await response.json();
  return data;
};
