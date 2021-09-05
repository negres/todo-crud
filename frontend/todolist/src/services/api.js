import axios from 'axios';

const apiUrl = "http://localhost:8080/tasks";

export function getAllTasks() {
  return axios.get(apiUrl);
}

export function getTaskById(id) {
  return axios.get(`${apiUrl}/${id}`);
}

export function createTask(task) {
  return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
  return axios.put(`${apiUrl}/${id}`, task);
}

export function deleteTask(id) {
  return axios.delete(`${apiUrl}/${id}`)
}
