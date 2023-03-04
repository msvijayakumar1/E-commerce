import axios from "axios";

const instance = axios.create({
    baseURL: "https://e-commerce-be-dwtx.onrender.com",
});

export default instance;
