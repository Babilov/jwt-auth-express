import axios from "axios";

export const addPost = async (content, setPosts) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}posts`,
      { content },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    const post = res.data;
    setPosts((prev) => [...prev, post]);
    return post;
  } catch (e) {
    console.log(e);
  }
};
