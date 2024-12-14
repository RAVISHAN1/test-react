import axios from 'axios';

// Create the axios instance with common headers
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        // 'App-Key': import.meta.env.VITE_APP_KEY,
        // 'Content-Type': 'application/json',
        // 'Anti-Csrf-Header': import.meta.env.VITE_ANTI_CSRF_HEADER,
    },
});

// // Function to get the latest AUTH_TOKEN
// const getAuthToken = () => localStorage.getItem('AUTH_TOKEN');

// // Interceptor to set Authorization header dynamically
// apiClient.interceptors.request.use(
//     config => {
//         const token = getAuthToken();
//         if (token) config.headers['Authorization'] = token;
//         return config;
//     },
//     error => Promise.reject(error)
// );

// Response interceptor to handle errors
apiClient.interceptors.response.use(
    response => response,
    error => {
        // Check for 401 Unauthorized error
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized access - possible token expiration');

            const basePath = import.meta.env.VITE_BASE_PATH || ''; // Fallback to an empty string if undefined
            window.location.href = `${basePath}/logout`;             // Redirect to the login page
        }
        return Promise.reject(error);
    }
);

export default apiClient;





























// const apiClient = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     headers: {
//         'App-Key': process.env.REACT_APP_APP_KEY,
//         'Content-Type': 'application/json',
//         'Authorization': `Basic ${process.env.REACT_APP_AUTH_TOKEN}`,
//         'Cookie': `ASP.NET_SessionId=${process.env.REACT_APP_SESSION_ID}`,
//     },
// });

// const apiClient = axios.create({
//     baseURL: "https://test.inetallocationshost.com.au/ACCareStaff",
//     headers: {
//         'App-Key': "56E403C7-53CE-4CDB-A474-8D1E74721F91",
//         'Content-Type': 'application/json',
//         'Authorization': `Basic RTExOTpUZXN0MTIzNDUk`,
//         'Cookie': `ASP.NET_SessionId=2kvzyzswi1wunwh1yvxmwsfa`,
//     },
// });

// const apiClient = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     headers: {
//         'App-Key': import.meta.env.VITE_APP_KEY,
//         'Content-Type': 'application/json',
//         'Authorization': localStorage.getItem('AUTH_TOKEN'),
//         'Cookie': `ASP.NET_SessionId=${import.meta.env.VITE_SESSION_ID}`,
//     },
// });