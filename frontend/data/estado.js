import axios from "axios";

const getEstado = async (id) => {
    const response = await axios.get(`${process.env.API_URL}/estado/search/${id}`)
    return response
}

module.exports = {
    getEstado
}