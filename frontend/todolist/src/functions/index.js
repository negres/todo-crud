import * as api from '../services/api';

export const getAllTasks = async () => {
  try {
    const { data } = await api.getAllTasks();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const createTask = async (task) => {
  try {
    const { data } = await api.createTask(task);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const updateTask = async (id, task) => {
  try {
    const { data } = await api.updateTask(id, task);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const deleteTask = async (id) => {
  try {
    const { data } = await api.deleteTask(id);
    return data;
  } catch (error) {
    console.log(error);
  }
}
