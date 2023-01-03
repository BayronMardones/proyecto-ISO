import axios from "axios";

const getPlaces = async (id) => {
    const response = await axios.get(`${process.env.API_URL}/place/search/${id}`)
    return response
}

module.exports = {
    getPlaces
}