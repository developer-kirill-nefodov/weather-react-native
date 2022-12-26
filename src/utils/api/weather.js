import {weatherAPI} from './index';
import {WEATHER_API_ID} from '@env';

export const getWeathers = (lat, lon) => {
  return weatherAPI.get('/weather', {
    params: {
      lat,
      lon,
      appid: WEATHER_API_ID,
      units: 'metric'
    }}
  );
}
