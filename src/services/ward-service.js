import axios from "axios";

const API_URL = "http://localhost:8080/ward";
const addWard = (values) => {
  return axios.post(API_URL + "/add", values);
};
const viewAllWard = () => {
  return axios.get(API_URL + "/all");
};
const updateWardInformation = (id, values) => {
  return axios.post(`${API_URL}/update/${id}`, values);
};
const deleteWard = (id) => {
  return axios.get(`${API_URL}/delete/${id}`);
};
export { addWard, viewAllWard, updateWardInformation, deleteWard };
