import axios from "axios";
import {WEATHER_API} from '@env';

export const weatherAPI = axios.create({
  baseURL: WEATHER_API,
  withCredentials: true,
});
