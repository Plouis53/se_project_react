const baseUrl = "http://localhost:3001";

export const fetchClothingItems = async () => {
  const response = await fetch(`${baseUrl}/items`);
  const data = await response.json();
  return data;
};

export const addClothingItem = async (item) => {
  const response = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};

export const deleteClothingItem = async (itemId) => {
  const response = await fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
