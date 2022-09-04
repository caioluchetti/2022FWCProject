import Axios from "axios";

const axios = Axios.create({
    baseURL: "http://192.168.15.43:8060",
    timeout: 10000
})

export default axios