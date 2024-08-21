import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getEntreprises() {
    return apiClient.get('/entreprise');
  },
  updateEntreprise(id, data) {
    return apiClient.put(`/entreprise/update/${id}`, data);
  },
  deleteEntreprise(id) {
    return apiClient.delete(`/entreprise/delete/${id}`);
  },
  searchEntreprise(siret) {
    return apiClient.get(`/entreprise/search/${siret}`);
  },
  saveEnreprise(data){
    return apiClient.post(`/entreprise/save`, data);
  }
};
