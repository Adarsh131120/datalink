// import axios from "axios";

// const BASE_URL="/api/files/"
// const axiosInstance=axios.create()

// axiosInstance.defaults.baseURL=BASE_URL;

// export default axiosInstance;   

import axios from "axios";

// Use full backend URL from environment variable
const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/files/`,
});

export default axiosInstance;
