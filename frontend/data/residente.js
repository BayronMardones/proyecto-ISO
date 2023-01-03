import axios from "axios";

const login = async (rol) =>{
    const response = await axios.post(`${process.env.API_URL}/residente/login/`, {rol})
    return response
}

module.exports ={
    login
}