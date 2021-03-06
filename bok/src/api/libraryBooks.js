import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/library",
    timeout: 1000,
    headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
});