import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

const getTravels = () => {
  return axios.get(`${API_URL}/travels`);
};

const getTravel = (id) => {
  return axios.get(`${API_URL}/travels/${id}`);
};

export default {
  getTravels,
  getTravel,
};
