import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const register = (user) => {
  return axios.post(`${API_URL}/users/register`, user);
};

const login = (credentials) => {
  return axios.post(`${API_URL}/users/login`, credentials).then((response) => {
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const isAuthenticated = () => {
  return !!localStorage.getItem("user");
};

const getRole = () => {
  const user = getCurrentUser();
  return user ? user.role : null;
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  isAuthenticated,
  getRole,
};
