import axios from "axios";

export const createComment = async (postId, comment, setcomment) => {
  const token = localStorage.getItem("token");
  try {
    const commentResponse = await axios.post(
      `${process.env.REACT_APP_API_URL}comments?postId=${postId}`,
      { content: comment },
      { headers: { Authorization: token } }
    );
    setcomment("");
    return commentResponse;
  } catch (e) {
    console.log(e);
  }
};
