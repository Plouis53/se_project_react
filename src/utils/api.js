import checkResponse from "./utilis";

const baseUrl = "https://my-json-server.typicode.com/Plouis53/se_project_react";

const itemsApi = {
  get: () => {
    return fetch(`${baseUrl}/items`).then(checkResponse);
  },
  add: ({ name, link, weather }) => {
    return fetch(`${baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
        weather,
      }),
    }).then(checkResponse);
  },
  remove: (id) => {
    return fetch(`${baseUrl}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkResponse);
  },
};

export default itemsApi;