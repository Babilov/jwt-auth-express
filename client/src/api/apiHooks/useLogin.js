import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const login = async (username, password, setError) => {
    try {
      const res = await sendLoginRequest(username, password);
      setError(null);
      const { token } = res.data;
      localStorage.setItem("token", token);
      navigate("/profile");
    } catch (error) {
      handleLoginError(error, setError);
    }
  };

  const sendLoginRequest = async (username, password) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}auth/login/`, {
      username,
      password,
    });
  };

  const handleLoginError = (error, setError) => {
    if (error.response) {
      setError(error.response.data.error);
    } else if (error.request) {
      setError("Network error. Please try again later.");
    } else {
      setError("An error occurred. Please try again later.");
    }
  };
  return login;
};
