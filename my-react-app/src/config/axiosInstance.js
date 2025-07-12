// import axios from "axios";

// const BASE_URL="/api/files/"
// const axiosInstance=axios.create()

// axiosInstance.defaults.baseURL=BASE_URL;

// export default axiosInstance;   

// import axios from "axios";

// // Use full backend URL from environment variable
// const axiosInstance = axios.create({
// //   baseURL: import.meta.env.VITE_API_BASE_URL || "https://datalink-mp5x.onrender.com/api/files",
//  baseURL : '/api/files',
//   withCredentials: true,
// });

// export default axiosInstance;

import axios from "axios";

// Use full backend URL in production, fallback to proxy path in dev
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api/files",
  withCredentials: true,
});

export default axiosInstance;
