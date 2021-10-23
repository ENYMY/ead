import axios from "axios";
const API_URL = "http://localhost:8080/doctor";
const addDoctor = (values) => {
  return axios.post(API_URL + "/add", values);
};
const viewAllDoctor = () => {
  return axios.get(API_URL + "/all");
};
const updateDoctorInformation = (id, values) => {
  return axios.post(`${API_URL}/update/${id}`, values);
};
const deleteDoctor = (id) => {
  return axios.get(`${API_URL}/delete/${id}`);
};
export { addDoctor, viewAllDoctor, updateDoctorInformation, deleteDoctor };
