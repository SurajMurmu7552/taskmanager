const REQUEST_LOGIN = "REQUEST_LOGIN";
const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";

export const requestLogin = () => (dispatch) =>
  dispatch({
    type: REQUEST_LOGIN,
  });
export const loginSuccessful = (auth) => (dispatch) =>
  dispatch({
    type: LOGIN_SUCCESSFUL,
    payload: auth,
  });

const initialState = {
  isLoading: undefined,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_LOGIN:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESSFUL:
      return { ...state, isLoading: false, isAuthenticated: payload };

    default:
      return state;
  }
};
