import axios from "axios";

export const fetchLikes = async (id, token) => {
  try {
    const likesResponse = await axios.get(
      `${process.env.REACT_APP_API_URL}likes?entity=POST&entity_id=${id}`
    );
    const isLikedResponse = await axios.get(
      `${process.env.REACT_APP_API_URL}likes/isLiked?entity=POST&entity_id=${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    const likesCount = likesResponse.data.length;
    const isLiked = !!isLikedResponse.data;
    return { likesCount, isLiked };
  } catch (e) {
    console.log(e);
  }
};
