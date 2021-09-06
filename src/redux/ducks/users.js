import { userService } from "../../services/userService";
import { loginSuccessful } from "./auth";

const LOGIN = "LOGIN";
const REGISTRATION = "REGISTRATION";

//actions

export const login = (username, password) => (dispatch) => {
  userService.login(username, password).then((res) =>
    dispatch(
      {
        type: LOGIN,
        payload: res,
      },
      dispatch(loginSuccessful(res.auth))
    )
  );
};

export const registration = (username, password) => (dispatch) => {
  userService.registration(username, password).then((res) => {
    dispatch({
      type: REGISTRATION,
      payload: res,
    });
  });
};

const initialState = {
  user: {},
  auth: false,
  msg: "",
};

//reducer
export const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.data,
        auth: payload.auth,
        msg: payload.msg,
      };
    case REGISTRATION:
      return { ...state, msg: payload.msg };
    default:
      return state;
  }
};
