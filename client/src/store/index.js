import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";

import { commentsReducer } from "./reducers/commentsReducer";

const rootReducer = combineReducers({
  comments: commentsReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
