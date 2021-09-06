import Axios from "axios";

const login = (username, password) => {
  return Axios.post("http://localhost:4000/auth/login", { username, password })
    .then((res) => {
      return res.data;
    })
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("auth", res.auth);
      localStorage.setItem("user", JSON.stringify(res.data));

      return res;
    });
};

const registration = (username, password) => {
  return Axios.post("http://localhost:4000/auth/registration", {
    username,
    password,
  })
    .then((res) => res.data)
    .then((res) => {
      return res;
    });
};

const logout = () => {
  localStorage.removeItem("auth");
  localStorage.removeItem("user");
};

export const userService = {
  login,
  registration,
  logout,
};
