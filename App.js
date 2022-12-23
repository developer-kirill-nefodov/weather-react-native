import React, {useEffect, useState} from "react";
import {Alert, View} from "react-native";
import * as Location from 'expo-location';

import {getWeathers} from "./src/utils/api/weather";
import Loading from "./src/components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getPermissionUser = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();

      const {data} = await getWeathers(latitude, longitude);

      Alert.alert('data', JSON.stringify(data))

      setIsLoading(false)
    } catch (e) {
      Alert.alert('Not signal', 'Very Sad :(');
    }
  }

  useEffect(() => {
    getPermissionUser()
      .catch(console.log);
  }, [])

  return isLoading ? (
    <Loading/>
  ) : (
    <View/>
  );
}

export default App;
