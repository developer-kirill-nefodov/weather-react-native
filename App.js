import React, {useEffect, useState} from "react";
import {Alert} from "react-native";
import * as Location from 'expo-location';

import {getWeathers} from "./src/utils/api/weather";
import Loading from "./src/components/Loading";
import Weather from "./src/components/Weather";
import Error from "./src/components/Error";

const App = () => {
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPermissionUser = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();

      const {data: {main, weather}} = await getWeathers(latitude, longitude);
      console.log(main)
      setTemp(main.temp);
      setWeather(weather[0])
      setIsLoading(false);
    } catch (e) {
      Alert.alert('Not signal', 'Very Sad :(');
      setIsError(true);
    }
  }

  useEffect(() => {
    getPermissionUser()
      .catch(console.log);
  }, [])

  if(isError) {
    return (
      <Error getPermissionUser={getPermissionUser}/>
    );
  }

  return isLoading ? (
    <Loading/>
  ) : (
    <Weather
      temp={temp}
      weather={weather}
    />
  );
}

export default App;
