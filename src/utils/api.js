import { baseUrl, checkResponse } from "./constants";

const getItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item;
  } catch (error) {
    console.error("Error retrieving item from local storage:", error);
    return null;
  }
};

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

const itemsApi = {
  get: () => {
    return request(`${baseUrl}/items`);
  },
  add: ({ name, imageUrl, weather }) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getItem("jwt")}`,
      },
      body: JSON.stringify({
        name,
        imageUrl,
        weather,
      }),
    };
    return request(`${baseUrl}/items`, options);
  },
  remove: (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getItem("jwt")}`,
      },
    };
    return request(`${baseUrl}/items/${id}`, options);
  },
  like: (id) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getItem("jwt")}`,
      },
    };
    return request(`${baseUrl}/items/${id}/likes`, options);
  },
  unlike: (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getItem("jwt")}`,
      },
    };
    return request(`${baseUrl}/items/${id}/likes`, options).catch((error) => {
      console.log("Error unliking item:", error);
      throw error;
    });
  },
};

export default itemsApi;

const userApi = {
  signup: (avatar, name, email, password) => {
    return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getItem("jwt")}`,
      },
      body: JSON.stringify({
        avatar,
        name,
        email,
        password,
      }),
    }).then(checkResponse);
  },
  signin: (email, password) => {
    return fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getItem("jwt")}`,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(checkResponse);
  },
  getCurrentUser: () => {
    return fetch(`${baseUrl}/users/me`).then(checkResponse);
  },
  updateCurrentUser: (data) => {
    return fetch(`${baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getItem("jwt")}`,
      },
      body: JSON.stringify(data),
    }).then(checkResponse);
  },
};

export { itemsApi, userApi };
