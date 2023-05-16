function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error${res.status}`);
}

function getItems() {
  const baseUrl =
    "https://my-json-server.typicode.com/Plouis53/se_project_react";
  return fetch(`${baseUrl}/items`).then(_checkResponse);
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
  }).then(_checkResponse);
}

function removeItem(id) {
  const baseUrl =
    "https://my-json-server.typicode.com/Plouis53/se_project_react";
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(_checkResponse);
}

const itemsApi = {
  get: getItems,
  add: addItem,
  remove: removeItem,
};

export default itemsApi;
