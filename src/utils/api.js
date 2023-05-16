function itemsApi() {
  function _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error${res.status}`);
  }

  const baseUrl =
    "https://my-json-server.typicode.com/Plouis53/se_project_react";

  return {
    get: () => {
      return fetch(`${baseUrl}/items`).then(_checkResponse);
    },
    add: (name, imageUrl, weather) => {
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
    },
    remove: (id) => {
      return fetch(`${baseUrl}/items/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(_checkResponse);
    },
  };
}

export default itemsApi;
