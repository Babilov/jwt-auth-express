import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUserId } from "../../store/reducers/userReducer";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (username, password, setError) => {
    try {
      const res = await sendLoginRequest(username, password);
      setError(null);
      console.log(res.data);
      const { token, id } = res.data;
      dispatch(setCurrentUserId(id));
      localStorage.setItem("token", `Bearer ${token}`);
      navigate(`/profile/${id}`);
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
