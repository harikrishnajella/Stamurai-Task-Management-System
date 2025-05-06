import axios from 'axios';

const API = 'http://localhost:5000/api/tasks';

export const getTasks = async (token) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await fetch(API, options)
    const data = await res.json()
    return data
}
export const createTask = (task, token) =>
  axios.post(API, task, { headers: { Authorization: `Bearer ${token}` } });

export const updateTask = (id, task, token) =>
  axios.put(`${API}/${id}`, task, { headers: { Authorization: `Bearer ${token}` } });

export const deleteTask = (id, token) =>
  axios.delete(`${API}/${id}`, { headers: { Authorization: `Bearer ${token}` } });