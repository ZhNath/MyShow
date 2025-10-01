export const API_KEY = "98849585d3b776ff17a6c3332a251612";
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/original";
const language = "en-US";

// Authentication

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

// Data fetching

export const dataFetcher = async (endpoint) => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  const separator = cleanEndpoint.includes('?') ? '&' : '?';
  const _url = `${BASE_URL}/${cleanEndpoint}${separator}api_key=${API_KEY}&language=${language}`;

  const response = await fetch(_url);
  const data = await response.json();
  return data;
};

// Watchlist

export const addToWatchList = async (media_id) => {
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
  const account_id = localStorage.getItem(`account_id`);
  const _url = `${BASE_URL}/account/${account_id}/watchlist?api_key=${API_KEY}&session_id=${session_id}`;
  const response = await fetch(_url, requestOptions);
  const data = await response.json();
  return data;
};

export const deleteFromWatchList = async (media_id) => {
  const requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      media_type: "tv",
      media_id: media_id,
      watchlist: false,
    }),
  };
  const session_id = localStorage.getItem(`session_id`);
  const account_id = localStorage.getItem(`account_id`);
  const _url = `${BASE_URL}/account/${account_id}/watchlist?api_key=${API_KEY}&session_id=${session_id}`;
  const response = await fetch(_url, requestOptions);
  const data = await response.json();
  return data;
};

export const getWatchList = async () => {
  const account_id = localStorage.getItem(`account_id`);
  const session_id = localStorage.getItem(`session_id`);
  const _url = `${BASE_URL}/account/${account_id}/watchlist/tv?api_key=${API_KEY}&session_id=${session_id}`;
  const response = await fetch(_url);
  const data = await response.json();
  return data;
};

// Lists
export const createList = async (name, description) => {
  const requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      description: description,
    }),
  };
  const session_id = localStorage.getItem(`session_id`);
  const _url = `${BASE_URL}/list?api_key=${API_KEY}&session_id=${session_id}`;
  const response = await fetch(_url, requestOptions);
  const data = await response.json();
  return data;
};

export const addTVtoList = async (list_id, media_id) => {
  const requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({ items: [{ media_type: "tv", media_id: media_id }] }),
  };
  const session_id = localStorage.getItem(`session_id`);
  const _url = `https://api.themoviedb.org/4/list/${list_id}/items?api_key=${API_KEY}&session_id=${session_id}`;
  const response = await fetch(_url, requestOptions);
  const data = await response.json();
  return data;
};

export const removeTVfromList = async (list_id, media_id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({ items: [{ media_type: "tv", media_id: media_id }] }),
  };
  const session_id = localStorage.getItem(`session_id`);
  const _url = `https://api.themoviedb.org/4/list/${list_id}/items?api_key=${API_KEY}&session_id=${session_id}`;
  const response = await fetch(_url, requestOptions);
  const data = await response.json();
  return data;
};
// *************************************
export const getGenres = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch genres:", error);
    return [];
  }
};

export const getLanguages = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/configuration/languages?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch languages:", err);
    return [];
  }
};

export const fetchFilterData = async (byParam) => {
  const response = await fetch(
    `${BASE_URL}/discover/tv?${byParam}&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const fetchActor = async (name) => {
  const response = await fetch(
    `${BASE_URL}/search/person?api_key=${API_KEY}&query=${name}`
  );
  const data = await response.json();
  return data;
};
