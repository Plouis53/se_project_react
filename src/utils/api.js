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

const itemsApi = {
  get: () => {
    return fetch(`${baseUrl}/items`).then(checkResponse);
  },
  add: ({ name, imageUrl, weather }) => {
    return fetch(`${baseUrl}/items`, {
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
    }).then(checkResponse);
  },
  remove: (id) => {
    return fetch(`${baseUrl}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getItem("jwt")}`,
      },
    }).then(checkResponse);
  },
  like: (id) => {
    return fetch(`${baseUrl}/items/${id}/likes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getItem("jwt")}`,
      },
    }).then(checkResponse);
  },
  unlike: (id) => {
    return fetch(`${baseUrl}/items/${id}/likes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getItem("jwt")}`,
      },
    }).then(checkResponse);
  },
};

export default itemsApi;

// import { baseUrl, checkResponse } from "./constants";

// const getItem = (key) => {
//   try {
//     const item = localStorage.getItem(key);
//     return item;
//   } catch (error) {
//     console.error("Error retrieving item from local storage:", error);
//     return null;
//   }
// };

// const itemsApi = {
//   get: () => {
//     return fetch(`${baseUrl}/items`).then(checkResponse);
//   },
//   add: ({ name, imageUrl, weather }) => {
//     return fetch(`${baseUrl}/items`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${getItem("jwt")}`,
//       },
//       body: JSON.stringify({
//         name,
//         imageUrl,
//         weather,
//       }),
//     }).then(checkResponse);
//   },
//   remove: (id) => {
//     return fetch(`${baseUrl}/items/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${getItem("jwt")}`,
//       },
//     }).then(checkResponse);
//   },
//   like: (id) => {
//     return fetch(`${baseUrl}/items/${id}/likes`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${getItem("jwt")}`,
//       },
//     }).then(checkResponse);
//   },
//   unlike: (id) => {
//     return fetch(`${baseUrl}/items/${id}/likes`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${getItem("jwt")}`,
//       },
//     }).then(checkResponse);
//   },
// };

// export default itemsApi;

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

// import { baseUrl, checkResponse } from "./constants";

// const itemsApi = {
//   get: () => {
//     return fetch(`${baseUrl}/items`).then(checkResponse);
//   },
//   add: ({ name, imageUrl, weather }) => {
//     return fetch(`${baseUrl}/items`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.get('jwt')}`
//       },
//       body: JSON.stringify({
//         name,
//         imageUrl,
//         weather,
//       }),
//     }).then(checkResponse);
//   },
//   remove: (id) => {
//     return fetch(`${baseUrl}/items/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.get('jwt')}`
//       },
//     }).then(checkResponse);
//   },
// };

// const userApi = {
//   signup: (avatar, name, email, password) => {
//     return fetch(`${baseUrl}/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.get('jwt')}`
//       },
//       body: JSON.stringify({
//         avatar,
//         name,
//         email,
//         password,
//       }),
//     }).then(checkResponse);
//   },
//   signin: (email, password) => {
//     return fetch(`${baseUrl}/signin`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.get('jwt')}`
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     }).then(checkResponse);
//   },
//   getCurrentUser: () => {
//     return fetch(`${baseUrl}/users/me`).then(checkResponse);
//   },
//   updateCurrentUser: (data) => {
//     return fetch(`${baseUrl}/users/me`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.get('jwt')}`
//       },
//       body: JSON.stringify(data),
//     }).then(checkResponse);
//   },
// };

// export { itemsApi, userApi };

//61323 import { baseUrl, checkResponse } from "./constants";

// const itemsApi = {
//   get: () => {
//     return fetch(`${baseUrl}/items`).then(checkResponse);
//   },
//   add: ({ name, imageUrl, weather }) => {
//     return fetch(`${baseUrl}/items`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         imageUrl,
//         weather,
//       }),
//     }).then(checkResponse);
//   },
//   remove: (id) => {
//     return fetch(`${baseUrl}/items/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then(checkResponse);
//   },
// };

// export default itemsApi;
