import Axios from "axios";

const GET_TASK = "GET_TASK";
const ADD_TASK = "ADD_TASK";
const DEL_TASK = "DEL_TASK";
const UPDATE_TASK = "UPDATE_TASK";

//action

//work with middleware

export const getTask = (userId) => (dispatch) => {
  Axios.post("http://localhost:4000/api/tasks", { userId })
    .then((res) => res.data)
    .then((res) =>
      dispatch({
        type: GET_TASK,
        payload: res.data,
      })
    );
};
export const addTask = (task, userId, important) => (dispatch) => {
  const entry = {
    userId,
    task,
    status: "pending",
    important,
  };

  Axios.post("http://localhost:4000/api/add", entry)
    .then((res) => res.data)
    .then((res) =>
      dispatch({
        type: ADD_TASK,
        payload: res.data,
      })
    );
};
export const delTask = (_id) => (dispatch) => {
  Axios.post("http://localhost:4000/api/delete", { _id })
    .then((res) => res.data)
    .then((res) =>
      dispatch({
        type: DEL_TASK,
        payload: res.data,
      })
    );
};

export const updateTask = (_id, request) => (dispatch) => {
  Axios.post("http://localhost:4000/api/update", { _id, request })
    .then((res) => res.data)
    .then((res) =>
      dispatch({
        type: UPDATE_TASK,
      })
    );
};

//state

const initialState = [];

//reducer

export const tasksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TASK:
      return payload;

    case ADD_TASK:
      return [...state, payload];

    case DEL_TASK:
      const tasks = state.filter((task) => task._id !== payload._id);
      return tasks;

    default:
      return state;
  }
};
