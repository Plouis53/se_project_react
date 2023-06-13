export default function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

export const baseUrl = "https://my-json-server.typicode.com/Plouis53/se_project_react";
