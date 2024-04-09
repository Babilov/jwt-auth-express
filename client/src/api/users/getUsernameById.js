import axios from "axios";

export const getusernameById = async (id) => {
  const userResponce = await axios.get(
    `${process.env.REACT_APP_API_URL}auth/user/${id}`
  );
  if (!userResponce.data) {
    return "no such user";
  }
  return userResponce.data.username;
};
