import axios from 'axios';
import {baseUrl, bus, router} from './vue-customers'


export default function getHttpClient() {
    axios.baseUrl = baseUrl;
    return axios
}
