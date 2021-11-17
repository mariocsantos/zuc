import axios from 'axios';

const baseURL = `http://${process.env.API_HOST}:${process.env.API_PORT}`;

const Markeplace = axios.create({ baseURL });

export default Markeplace;
