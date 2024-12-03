import axios, {AxiosInstance} from "axios";

const request: AxiosInstance = axios.create({
    baseURL: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    timeout: 60000,
});

request.interceptors.request.use(
    axiosConfig => axiosConfig,
    error => Promise.reject(error),
);

request.interceptors.response.use(
    response => response,
    async error => {
        if (error?.response?.status === 401) {
            return Promise.reject(error);
        }
        return Promise.reject(error);
    },
);

export default request;