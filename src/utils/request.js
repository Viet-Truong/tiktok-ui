import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

request.defaults.headers.common["Authorization"] =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTY2ODEzNjE3MiwiZXhwIjoxNjcwNzI4MTcyLCJuYmYiOjE2NjgxMzYxNzIsImp0aSI6IjNJY0Exa2oxYU5wTDdTNnoiLCJzdWIiOjQyMTIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Nhkn_vInjY3pIw-SwAJGuJvr3R9HxFkEP9hA0UKIEGs";

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
