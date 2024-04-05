import axios from "axios";

export const postLike = async (id, token) => {
  try {
    const likeResponse = await axios.post(
      `${process.env.REACT_APP_API_URL}likes?entity=POST&entity_id=${id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return likeResponse;
  } catch (e) {
    console.log(e);
  }
};
