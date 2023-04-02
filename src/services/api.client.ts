import axios from "axios"

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "e88470763da04ffeb983e4dd6e1e7347"
    }
})