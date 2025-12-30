import axios from "axios";

export const fetchBlogsApi = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data.slice(0, 9);
};
