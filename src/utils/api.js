import checkResponse from "./utilis";
function getItems() {
  const baseUrl =
    "https://my-json-server.typicode.com/Plouis53/se_project_react";
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function addItem(name, imageUrl, weather) {
  const baseUrl =
    "https://my-json-server.typicode.com/Plouis53/se_project_react";
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(checkResponse);
}

function removeItem(id) {
  const baseUrl =
    "https://my-json-server.typicode.com/Plouis53/se_project_react";
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

const itemsApi = {
  get: getItems,
  add: addItem,
  remove: removeItem,
};

export default itemsApi;
