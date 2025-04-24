import axios from "axios"

//Create axios instance to do http calls
const api = axios.create({
    baseURL: 'http://localhost:3000'
})

//Used to import the axios instance to other files
export default api