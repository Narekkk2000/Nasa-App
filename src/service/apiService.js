import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

export const getNasaResource = async (dateValue) => {
    try {
        const {data} = await axios.get(
            `${BASE_URL}/planetary/apod?date=${dateValue}&api_key=${SECRET_KEY}`
        );

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getNasaStartEndDateResource = async (start_date, end_date) => {
    try {
        const {data:{near_earth_objects}} = await axios.get(
            `${BASE_URL}/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${SECRET_KEY}
            `
        );

        return near_earth_objects;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
