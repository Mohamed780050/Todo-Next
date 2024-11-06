"use server";
export async function getProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
