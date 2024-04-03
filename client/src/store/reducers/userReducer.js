const initialState = {
  username: "",
};

const SET_USERNAME = "SET_USERNAME";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export const setUsernameAction = (payload) => ({ type: SET_USERNAME, payload });
