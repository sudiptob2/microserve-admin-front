import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})
  
apiClient.interceptors.request.use((request) => {
    const { token } = JSON.parse(localStorage.getItem("token") || "") 
    if (token && request && request.headers) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request

})
  

export default apiClient