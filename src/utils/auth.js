import { baseUrl, checkResponse } from "../utils/constants";

export const signUp = (name, avatar, email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  })
    .then((res) => checkResponse(res))
    .then((res) => res);
};

export const signIn = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => checkResponse(res))
    .then((data) => {
      if (data) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    });
};

export const checkTokenValidity = (token) => {
  return fetch(`${baseUrl}/user/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => checkResponse(res))
    .then((data) => data);
};

// export default auth;
// export function register(username, password, email) {
//   throw new Error("Function not implemented.");
// }
