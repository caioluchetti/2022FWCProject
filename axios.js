import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://figurinhasapp.onrender.com/",
    timeout: 10000
})

export default axios