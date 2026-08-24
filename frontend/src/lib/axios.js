import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true // by add this browser will send cookies to server on every single req auto
})

export default axiosInstance