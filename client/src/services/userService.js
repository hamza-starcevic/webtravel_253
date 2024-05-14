import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};

const updateUser = (id, user) => {
  return axios.put(`${API_URL}/users/${id}`, user);
};

const deleteUser = (id) => {
  return axios.delete(`${API_URL}/users/${id}`);
};

export default {
  getUsers,
  updateUser,
  deleteUser,
};
