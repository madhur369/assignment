import axios from 'axios';

const BASE_URL = 'http://localhost:3001/users';

export const getUsers = () => axios.get(BASE_URL);
export const createUser = (user) => axios.post(BASE_URL, user);
export const updateUser = (id, user) => axios.put(`${BASE_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${BASE_URL}/${id}`);
