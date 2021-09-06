import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./ducks/auth";
import { tasksReducer } from "./ducks/tasks";
import { trashReducer } from "./ducks/trash";
import { usersReducer } from "./ducks/users";

const reducer = combineReducers({
  tasks: tasksReducer,
  trash: trashReducer,
  users: usersReducer,
  auth: authReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
