// const baseUrl = "https://my-json-server.typicode.com/Plouis53/se_project_react";
import { baseUrl } from "./constants";
// Get all clothing items
export const getAllItems = async () => {
  const response = await fetch(`${baseUrl}/items`);
  if (!response.ok) {
    throw new Error(`Failed to get items: ${response.status}`);
  }
  const items = await response.json();
  return items;
};

// Add a new clothing item
export const addItem = async (newItem) => {
  const response = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
  if (!response.ok) {
    throw new Error(`Failed to add item: ${response.status}`);
  }
  const addedItem = await response.json();
  return addedItem;
};

// Delete a clothing item by ID
export const deleteItem = async (id) => {
  const response = await fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete item: ${response.status}`);
  }
  const deletedItemId = await response.json();
  return deletedItemId;
};
