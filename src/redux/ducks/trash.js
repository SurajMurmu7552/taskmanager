import Axios from "axios";

// action types
const GET_TRASH = "GET_TRASH";
const RESTORE_TRASH = "RESTORE_TRASH";

// actions

export const getTrash = (userId) => (dispatch) => {
  Axios.post("http://localhost:4000/api/trash", { userId })
    .then((res) => res.data)
    .then((res) =>
      dispatch({
        type: GET_TRASH,
        payload: res.data,
      })
    );
};

export const restoreTrash = (_id) => (dispatch) => {
  Axios.post("http://localhost:4000/api/restore", { _id })
    .then((res) => res.data)
    .then((res) =>
      dispatch({
        type: RESTORE_TRASH,
        payload: res.data,
      })
    );
};

//reducer

const initialState = [];

export const trashReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_TRASH:
      return payload;
    case RESTORE_TRASH:
      const trash = state.filter((task) => task._id !== payload._id);
      return trash;
    default:
      return state;
  }
};
