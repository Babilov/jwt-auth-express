const initialState = {
  curentUserId: null,
  user: {},
};

const SET_USERNAME = "SET_USERNAME";
const SET_CURENT_USER_ID = "SET_CURENT_USER_ID";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        user: action.payload,
      };
    case SET_CURENT_USER_ID:
      return {
        ...state,
        curentUserId: action.payload,
      };
    default:
      return state;
  }
};

export const setUserAction = (payload) => ({ type: SET_USERNAME, payload });
export const setCurrentUserId = (payload) => ({
  type: SET_CURENT_USER_ID,
  payload,
});
