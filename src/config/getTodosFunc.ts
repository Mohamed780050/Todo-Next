import axios from "axios";

export async function getTodos(id: string | null) {
  try {
    const data = await axios.get(`http://localhost:3000/api/todos/${id}`);
    return data.data;
  } catch (err) {
    console.log(err);
  }
}
