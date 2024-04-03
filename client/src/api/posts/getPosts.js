import axios from "axios";

export const getPosts = async () => {
  const token = localStorage.getItem("token");
  try {
    const posts = await axios.get(`${process.env.REACT_APP_API_URL}posts/`, {
      headers: {
        Authorization: token,
      },
    });
    return posts["data"];
  } catch (e) {
    console.log(e);
  }
};
