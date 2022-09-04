import axios from "axios";

// axios configuration
const axiosConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL
}

const instance = axios.create(axiosConfig);

class Request {
    // for get Request
    async get(url) {
        return instance.get(url).then(res => res.data);
    }
}


const httpReq = new Request();

export default httpReq;