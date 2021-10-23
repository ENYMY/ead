import axios from "axios";
const API_URL = "http://localhost:8080/patient";
const addPatient = (values) => {
  return axios.post(API_URL + "/add", values);
};
const viewAllPatient = () => {
  return axios.get(API_URL + "/all");
};
const updatePatient = (id, values) => {
  return axios.post(`${API_URL}/update/${id}`, values);
};
const deletePatient = (id) => {
  return axios.get(`${API_URL}/delete/${id}`);
};
export { addPatient, viewAllPatient, updatePatient, deletePatient };
