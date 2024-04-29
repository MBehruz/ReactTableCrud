import { service } from '.';

export default {
  getAll: () => service.get('/users'),
  create: (data) => service.post('/users', data),
  edit: (id, data) => service.put(`/users/${id}`, data),
  delete: (id) => service.delete(`/users/${id}`),
  getOne: (id) => service.get(`/users/${id}`),
};
