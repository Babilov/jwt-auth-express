import axios from "axios";

export const fetchLikes = async (id, token) => {
  try {
    const likesResponse = await axios.get(
      `${process.env.REACT_APP_API_URL}likes?entity=POST&entity_id=${id}`,
      { headers: { Authorization: token } }
    );
    const likesData = likesResponse["data"];
    const likesCount = likesData.likes.length;
    const { isLiked } = likesData;
    return { likesCount, isLiked };
  } catch (e) {
    console.log(e);
  }
};
