const initialState = {
  comments: [],
};

const SET_COMMENTS = "SET_COMMENTS";

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export const setCommentsAction = (payload) => ({ type: SET_COMMENTS, payload });
