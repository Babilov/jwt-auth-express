import axios from "axios";

export const getProfileInfo = async (id) => {
  const token = localStorage.getItem("token").split(" ")[1];
  try {
    const userData = await axios.get(
      `${process.env.REACT_APP_API_URL}auth/user/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return userData.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUsernameById = async (id) => {
  try {
    const user = await axios.get(
      `${process.env.REACT_APP_API_URL}auth/user/${id}`
    );
    return user["data"]["username"];
  } catch (e) {
    console.log(e);
  }
};
